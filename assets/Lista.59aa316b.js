import{_ as U,$ as B,d4 as J,a5 as w,p as g,o as u,d as q,f as e,w as r,i as p,N as x,F,r as z,P as v,R as f,x as Q,S as H,e as d,t as h,k as y,l as b,j as P,D,az as j,C as $,L as G,a4 as O,y as A}from"./index.6db9e464.js";import{L as X}from"./Lista.6ab71fc1.js";import{J as R}from"./JornadaModal.a717ded0.js";import"./QBtnDropdown.9092f99b.js";import"./QBtnGroup.3a01967d.js";import"./QDate.746ed5eb.js";import"./xlsx.03fee229.js";import"./QCarousel.dd733bc2.js";import"./QSplitter.07017925.js";import"./Grafico.1d9b1ef1.js";import"./Chart.97b1da5f.js";const I={paginacao:{atual:1,maximo:1,total:1,limite:25},filtros:{numero:"",numeroCompra:null,termoBusca:"",dataHoraCriacao:{ini:"",fim:""},dataHoraModificacao:{ini:"",fim:""},fornecedor:{id:"",nome:""}}},K={components:{Lista:X,BadgeCopiarUid:B,PromptItemTabelaPreco:J,JornadaModal:R},data(){return{mostrarJornada:!1,tela:"",contatos:{},showPeriodo:!1,lista:[],resultado:{},paginacao:$utils.clonarV2(I.paginacao),filtros:$utils.clonarV2(I.filtros),buscaCampo:"",tabSelecionada:{valor:"Digita\xE7\xE3o"},tabs:[{rotulo:"Digita\xE7\xE3o",value:"Digita\xE7\xE3o"},{rotulo:"Finalizado",value:"Finalizado"},{rotulo:"Todos",value:"Todos"}]}},props:{permissaoNovo:{default:!0,type:Boolean},corBotao:{default:()=>"primary",type:String}},methods:{async fecharModal(){this.mostrarJornada=!1,await this.atualizar()},async atualizar(t){var i;const l=$utils.logarIni("JornadaLista");await $tryLoading(async()=>{t!=null&&t.aba&&(this.tabSelecionada.valor=t.aba),this.showPeriodo=!1;const n={...$utils.eliminarVazios(this.filtros),status:this.tabSelecionada.valor,termoBusca:this.filtros.termoBusca||this.buscaCampo,dataHoraCriacao:{ini:this.filtros.dataHoraCriacao.ini?w.formatDate(this.filtros.dataHoraCriacao.ini).substr(0,10):null,fim:this.filtros.dataHoraCriacao.fim?w.formatDate(w.addToDate(this.filtros.dataHoraCriacao.fim,{days:1})).substr(0,10):null},dataHoraModificacao:{ini:this.filtros.dataHoraModificacao.ini?w.formatDate(this.filtros.dataHoraModificacao.ini).substr(0,10):null,fim:this.filtros.dataHoraModificacao.fim?w.formatDate(w.addToDate(this.filtros.dataHoraModificacao.fim,{days:1})).substr(0,10):null}};let o=await $db.jornada.leListaCompleta({where:n,limit:this.paginacao.limite,page:this.paginacao.atual,sort:["dataHoraModificacao"],dir:["desc"]});this.paginacao.total=o.total,this.paginacao.maximo=o.totalPages,this.lista=o.data,this.contatos=o.contatos,this.carregarImagensContatos(this.contatos)},{mensagem:"Carregando...",erro:"Ocorreu um erro ao consultar"}),$utils.logarFim(l,((i=this.lista)==null?void 0:i.length)||0)},async carregarImagensContatos(t){const l=Object.keys(t);if(!!l.length){await $utils.dormir(200);try{const i=await $db.hibrido.lista({table:"contato",columns:["id","apelido","imagem"],whereIn:{id:l}});for(const n of i)t[n.id].imagem=n.imagem||""}catch(i){console.error("Erro ao carregar imagens de contatos - ",i)}}},async abrir(t){try{$q.loading.show(),await $db.jornada.carrega(t),this.tela=$db.jornada.doc.value.tela==="CardapioLentes"?"Materiais":$db.jornada.doc.value.tela,this.mostrarJornada=!0}catch(l){let i=`Erro ao abrir a jornada. ${l.message}`;/^GError:.+/.test(l.message)&&(i=l.message.slice(7)),$q.notify({message:i,type:"negative"})}finally{$q.loading.hide()}},async selecionarEmpresa(){const t=await $db.contatoEmpresa.listaCache();if(t.length===0)throw new Error("GError:N\xE3o h\xE1 empresa configurada.");return t.length===1?t[0]:await $g.promptContato.show({filtro:{ativo:!0,empresas:!0},placeholder:"Selecione a empresa"})},async selecionarItemTabelaPreco(t){var c,C;const l=await $db.configuracoes.porNome("vendas.tabelapadrao",t);let i=Number((c=l.find(m=>m.idEmpresa===t))==null?void 0:c.valor);i||(i=Number((C=l.find(m=>!m.idEmpresa))==null?void 0:C.valor));let n,o=await $erp().itemTabelaPreco.toArray();if(i&&(n=o.find(m=>Number(m.codigoItemTabelaPreco)===i),n))return n;if(o=o.filter(m=>m.tabelaMaster===1&&(!m.idEmpresa||m.idEmpresa===t)),o.length!==0)return o.length===1?o[0]:await this.selecionarPromptItemTabelaPreco(null,t)},async selecionarPromptItemTabelaPreco(t,l){if(!t)return this.$refs.promptItemTabelaPreco.placeholder="Selecione a tabela de pre\xE7o",this.$refs.promptItemTabelaPreco.filtro={tabelaMaster:!0,idContatoEmpresa:l},this.$refs.promptItemTabelaPreco.mostrar(),new Promise((i,n)=>{this.resolve=i,this.reject=n});t.id||this.reject("Tabela de pre\xE7o n\xE3o selecionada"),this.resolve(t)},async selecionarVendedor(){var n;let t=(await $db.contato.ler({filtros:{ativo:!0,vendedores:!0}})).data;if(t.length===0)throw new Error("GError:N\xE3o h\xE1 vendedores cadastrados.");if(t.length===1)return t[0];let l;const i=JSON.parse(localStorage.getItem("usuario"));return(n=i==null?void 0:i.numeroDocumentoNacional)!=null&&n.trim()&&(i.numeroDocumentoNacional=i.numeroDocumentoNacional.replace(/\D/g,""),l=t.find(o=>{if(!(o!=null&&o.numeroDocumentoNacional))return!1;const c=o.numeroDocumentoNacional.replace(/\D/g,"");return i.numeroDocumentoNacional===c}),l)||(l=await $g.promptContato.show({placeholder:"Selecione o vendedor",filtro:{ativo:!0,vendedores:!0}})),l},async obterContatoUsuario(){const t=JSON.parse(localStorage.getItem("usuario"));return t!=null&&t.codigoUsuario?(await $db.hibrido.lista({table:"contato",where:{codigoUsuario:t.codigoUsuario}}))[0]:void 0},async criar_click(){try{const t=await this.obterContatoUsuario(),l=await this.selecionarEmpresa();if(!l)return;const i=await this.selecionarVendedor();if(!i)return;let n;try{n=await this.selecionarItemTabelaPreco(l.id)}catch(o){console.error(o);return}$q.loading.show(),await $db.jornada.cria({idContatoDigitador:t==null?void 0:t.id,idContatoEmpresa:l==null?void 0:l.id,idContatoVendedor:i==null?void 0:i.id,idItemTabelaPreco:n==null?void 0:n.id}),$q.loading.hide(),this.tela="Contato",this.mostrarJornada=!0}catch(t){let l=`Erro ao criar a jornada. ${t.message}`;/^GError:.+/.test(t.message)&&(l=t.message.slice(7)),$q.notify({message:l,type:"negative"})}finally{$q.loading.hide()}},limparFiltros_click(){this.filtros.termoBusca="",this.filtros.dataHoraCriacao.ini="",this.filtros.dataHoraCriacao.fim="",this.filtros.dataHoraModificacao.ini="",this.filtros.dataHoraModificacao.fim="",this.atualizar()}},async mounted(){await this.atualizar()}},W={class:"mw80 text-center"};function Y(t,l,i,n,o,c){const C=g("campo"),m=g("BadgeCopiarUid"),T=g("avatar"),M=g("g-label"),k=g("g-col"),E=g("g-row"),V=g("badge"),S=g("Lista",!0),N=g("PromptItemTabelaPreco"),L=g("JornadaModal");return u(),q("div",null,[e(S,{titulo:"Jornadas",icone:"connect_without_contact",buscaCampo:o.buscaCampo,"onUpdate:buscaCampo":l[6]||(l[6]=a=>o.buscaCampo=a),onFiltro_change:c.atualizar,onLimparFiltros_click:c.limparFiltros_click,onCriar_click:c.criar_click,lista:o.lista,paginacao:o.paginacao,filtros:o.filtros,tabSelecionada:o.tabSelecionada,tabs:o.tabs,showPeriodo:o.showPeriodo,checkboxVisible:!1,removerTodosVisible:!1,abrirTodosVisible:!1,exportarXLSXVisible:!1,showQuickAdd:!1,permissaoExtras:!1},{filtroCampos:r(()=>[e(C,{modelValue:o.filtros.termoBusca,"onUpdate:modelValue":l[0]||(l[0]=a=>o.filtros.termoBusca=a),rotulo:"Palavra Chave",dense:"",class:"q-field--with-bottom"},null,8,["modelValue"]),e(C,{modelValue:o.filtros.dataHoraCriacao.ini,"onUpdate:modelValue":l[1]||(l[1]=a=>o.filtros.dataHoraCriacao.ini=a),rotulo:"Data de Cria\xE7\xE3o",dense:"",tipo:"data",class:"q-field--with-bottom"},null,8,["modelValue"]),e(C,{modelValue:o.filtros.dataHoraCriacao.fim,"onUpdate:modelValue":l[2]||(l[2]=a=>o.filtros.dataHoraCriacao.fim=a),rotulo:"at\xE9",dense:"",tipo:"data",class:"q-field--with-bottom"},null,8,["modelValue"]),e(C,{modelValue:o.filtros.dataHoraModificacao.ini,"onUpdate:modelValue":l[3]||(l[3]=a=>o.filtros.dataHoraModificacao.ini=a),rotulo:"Data Modificado",dense:"",tipo:"data",class:"q-field--with-bottom"},null,8,["modelValue"]),e(C,{modelValue:o.filtros.dataHoraModificacao.fim,"onUpdate:modelValue":l[4]||(l[4]=a=>o.filtros.dataHoraModificacao.fim=a),rotulo:"at\xE9",dense:"",tipo:"data",class:"q-field--with-bottom"},null,8,["modelValue"]),e(C,{modelValue:o.paginacao.limite,"onUpdate:modelValue":l[5]||(l[5]=a=>o.paginacao.limite=a),min:"1",rotulo:"Quantidade por p\xE1gina",dense:"",tipo:"quantidade",class:"q-field--with-bottom"},null,8,["modelValue"])]),itemLista:r(()=>[o.lista.length>0?(u(),p(x,{key:0,bordered:"",class:"bg-white q-mb-xs rounded-borders",style:{"min-height":"calc(100vh - 200px)"}},{default:r(()=>[(u(!0),q(F,null,z(o.lista,a=>(u(),q("div",{key:a.id,class:"itemHover"},[e(v,{"manual-focus":"",class:"q-py-sm q-px-xs"},{default:r(()=>[e(f,{class:"hideonmobile col-auto q-px-sm no-margin"},{default:r(()=>[Q("div",W,[e(m,{id:a==null?void 0:a.id,cor:"positive",dica:"ID Jornada",escuro:""},null,8,["id"])])]),_:2},1024),e(f,{onClick:s=>c.abrir(a==null?void 0:a.id),class:"col-md col-lg col-xl no-margin cursor-pointer"},{default:r(()=>[e(v,{class:"q-pa-none"},{default:r(()=>[e(f,{class:"col-auto items-center"},{default:r(()=>{var s,_;return[e(T,{imagem:(s=o.contatos[a==null?void 0:a.idContato])==null?void 0:s.imagem,rotulo:(_=o.contatos[a==null?void 0:a.idContato])==null?void 0:_.nome,tamanho:"40",style:{display:"flex","align-self":"center"}},null,8,["imagem","rotulo"])]}),_:2},1024),e(f,{class:"col"},{default:r(()=>[e(v,{class:"q-pa-none",style:{"min-height":"unset"}},{default:r(()=>[e(H,{lines:"2",class:"text-tertiary text-weight-bold ellipsis-2-lines"},{default:r(()=>{var s;return[d(h(((s=o.contatos[a==null?void 0:a.idContato])==null?void 0:s.nome)||"Sem contato")+" ",1),e(y,{anchor:"bottom middle",self:"center middle"},{default:r(()=>[d("Cliente")]),_:1})]}),_:2},1024)]),_:2},1024),e(v,{class:"q-pa-none hideonmobile",style:{"min-height":"unset"}},{default:r(()=>[e(H,{caption:"",class:"text-weight-bold"},{default:r(()=>{var s;return[d(h((s=o.contatos[a==null?void 0:a.idContatoVendedor])==null?void 0:s.nome)+" ",1),e(y,{anchor:"bottom middle",self:"center middle"},{default:r(()=>[d("respons\xE1vel")]),_:1})]}),_:2},1024)]),_:2},1024),e(f,{class:"hideondesktop q-mt-sm"},{default:r(()=>[e(E,{mg:"xs-b"},{default:r(()=>[a.dataHoraCriacao?(u(),p(k,{key:0,col:"shrink"},{default:r(()=>[e(M,{icon:"mdi-calendar-today xs tertiary left",tip:`Emitido \xE1s ${t.$filters.hora(a==null?void 0:a.dataHoraCriacao)}`},{default:r(()=>[d(h(t.$filters.data(a==null?void 0:a.dataHoraCriacao)),1)]),_:2},1032,["tip"])]),_:2},1024)):b("",!0),a.dataHoraModificacao?(u(),p(k,{key:1,col:"shrink",class:"q-ml-sm"},{default:r(()=>[e(M,{icon:"mdi-calendar xs tertiary left",tip:`Finalizado \xE0s ${t.$filters.hora(a==null?void 0:a.dataHoraModificacao)}`},{default:r(()=>[d(h(t.$filters.data(a==null?void 0:a.dataHoraModificacao)),1)]),_:2},1032,["tip"])]),_:2},1024)):b("",!0)]),_:2},1024),e(E,{mg:"xs-b"},{default:r(()=>[e(k,{col:"shrink"},{default:r(()=>[e(m,{id:a==null?void 0:a.id,cor:"positive",escuro:"",dica:"ID Jornada"},null,8,["id"]),a!=null&&a.status?(u(),p(V,{key:0,cor:(a==null?void 0:a.status)==="Entregue"?"positive":"light",escuro:(a==null?void 0:a.status)==="Entregue",class:"col-auto q-ml-sm q-mr-auto"},{default:r(()=>[d(h(a==null?void 0:a.status)+" ",1),e(y,{anchor:"bottom middle",self:"center middle"},{default:r(()=>[d("Status")]),_:1})]),_:2},1032,["cor","escuro"])):b("",!0)]),_:2},1024),e(k,{col:"shrink",class:"q-ml-sm"},{default:r(()=>{var s;return[(s=o.contatos[a.idContatoEmpresa])!=null&&s.nome?(u(),p(V,{key:0,cor:"tertiary",escuro:"",class:"col-auto q-mx-auto"},{default:r(()=>{var _;return[d(h((_=o.contatos[a.idContatoEmpresa])==null?void 0:_.nome)+" ",1),e(y,{anchor:"bottom middle",self:"center middle"},{default:r(()=>[d("Empresa")]),_:1})]}),_:2},1024)):b("",!0)]}),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]),e(f,{onClick:s=>c.abrir(a==null?void 0:a.id),class:"hideonmobile maxw200 q-pl-sm no-margin cursor-pointer"},{default:r(()=>{var s;return[(s=o.contatos[a.idContatoEmpresa])!=null&&s.nome?(u(),p(V,{key:0,cor:"tertiary",escuro:"",class:"col-auto q-mx-auto"},{default:r(()=>{var _;return[d(h((_=o.contatos[a.idContatoEmpresa])==null?void 0:_.nome)+" ",1),e(y,{anchor:"bottom middle",self:"center middle"},{default:r(()=>[d("Empresa")]),_:1})]}),_:2},1024)):b("",!0)]}),_:2},1032,["onClick"]),e(f,{onClick:s=>c.abrir(a==null?void 0:a.id),class:"hideonmobile maxw110 q-pl-sm no-margin cursor-pointer"},{default:r(()=>[a.dataHoraCriacao?(u(),p(H,{key:0,color:"tertiary",lines:"1",class:"ellipsis"},{default:r(()=>[e(P,{name:"mdi-calendar-today"}),d(" "+h(t.$filters.data(a==null?void 0:a.dataHoraCriacao))+" ",1),e(y,{anchor:"bottom middle",self:"center middle"},{default:r(()=>[d(" Criado \xE1s "+h(t.$filters.hora(a==null?void 0:a.dataHoraCriacao)),1)]),_:2},1024)]),_:2},1024)):b("",!0)]),_:2},1032,["onClick"]),e(f,{onClick:s=>c.abrir(a==null?void 0:a.id),class:"hideonmobile maxw110 q-pl-sm no-margin cursor-pointer"},{default:r(()=>[a.dataHoraModificacao?(u(),p(H,{key:0,color:"tertiary",lines:"1",class:"ellipsis"},{default:r(()=>[e(P,{name:"mdi-calendar-today"}),d(" "+h(t.$filters.data(a==null?void 0:a.dataHoraModificacao))+" ",1),e(y,{anchor:"bottom middle",self:"center middle"},{default:r(()=>[d(" Modificado \xE1s "+h(t.$filters.hora(a==null?void 0:a.dataHoraModificacao)),1)]),_:2},1024)]),_:2},1024)):b("",!0)]),_:2},1032,["onClick"]),e(f,{class:"col-shrink q-pl-sm no-margin"},{default:r(()=>[e(v,{class:"q-pa-none"},{default:r(()=>[o.tabSelecionada.valor!="Finalizado"?(u(),p(f,{key:0,class:"hideonmobile q-mr-xs",style:{width:"32px"}},{default:r(()=>[a.tela!=="Envelope"?(u(),p(D,{key:0,onClick:s=>c.abrir(a==null?void 0:a.id),icon:"edit",color:"primary",size:"md",round:"",flat:"",dense:""},{default:r(()=>[e(y,{anchor:"bottom middle",self:"center middle"},{default:r(()=>[d("Editar")]),_:1})]),_:2},1032,["onClick"])):b("",!0)]),_:2},1024)):b("",!0),e(f,{class:"hideondesktop no-margin",style:{width:"32px"}},{default:r(()=>[e(D,{icon:"more_vert",size:"md",round:"",flat:"",dense:""},{default:r(()=>[e(j,null,{default:r(()=>[$((u(),p(x,{link:"","no-border":"",separator:""},{default:r(()=>[a.tela!=="Envelope"?(u(),p(v,{key:0,onClick:s=>c.abrir(a==null?void 0:a.id),clickable:"",class:"hideondesktop"},{default:r(()=>[e(f,{avatar:""},{default:r(()=>[e(P,{name:"edit"})]),_:1}),e(f,null,{default:r(()=>[d(" Editar ")]),_:1})]),_:2},1032,["onClick"])):b("",!0)]),_:2},1024)),[[G]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(O)]))),128))]),_:1})):b("",!0)]),_:1},8,["buscaCampo","onFiltro_change","onLimparFiltros_click","onCriar_click","lista","paginacao","filtros","tabSelecionada","tabs","showPeriodo"]),e(N,{ref:"promptItemTabelaPreco",onSelecionar:c.selecionarPromptItemTabelaPreco},null,8,["onSelecionar"]),e(A,{modelValue:o.mostrarJornada,"onUpdate:modelValue":l[7]||(l[7]=a=>o.mostrarJornada=a),maximized:"",persistent:""},{default:r(()=>[e(L,{onFecharModal:c.fecharModal,avancar:o.tela},null,8,["onFecharModal","avancar"])]),_:1},8,["modelValue"])])}var ca=U(K,[["render",Y]]);export{ca as default};