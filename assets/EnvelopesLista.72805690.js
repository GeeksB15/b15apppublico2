import{_ as D,cU as R,r as v,o as d,p as x,f as a,w as o,au as P,P as w,F as S,u as I,S as E,T as n,C as A,U as C,k as i,t as u,m as f,d as p,e as _,j as z,dQ as L,Q as q,bg as O,H as N,N as j,l as M}from"./index.a5f5d5a1.js";import{L as X}from"./Lista.98437c00.js";import{F as G}from"./FaturaModal.50607e7f.js";import"./DocumentosFiscais.e7abeeeb.js";import"./Campo.e3115967.js";import"./compactarValidarNFe.0517b1bc.js";import"./obterItens.5c765a4f.js";import"./codigosANP.a6c1a264.js";import"./emitirNFe.35117289.js";import"./VendaCard.c1f57c8b.js";import"./ModalHistoricoStatus.ffd13738.js";import"./EnvelopeCard.dd3d7e1d.js";const J={components:{Lista:X,Envelope:R,Fatura:G},data(){return{carregando:!1,lista:[],contatos:{},configImpressaoEnvelope:[],mostrar:{barraTopo:!0,toolbarTitulo:!0,icone:"mdi-glasses",titulo:"Envelopes",filtroAvancado:!0,buscar:!0,btnAjuda:!0,btnAtualizar:!0,btnNovo:!0,toolbarAcoes:!0,checkBox:!1,btnRemover:!1,btnRestaurar:!1,centralizaTabs:!1,btnDetalhes:!1,btnExportaXLS:!1,btnMenuMais:!1,toolbarAdicao:!1,bannerMsg:""},tabSelecionada:{valor:"Todos"},tabs:[{valor:"Todos",rotulo:"Todos"},{valor:"Or\xE7amento",rotulo:"Or\xE7amento"},{valor:"Processando",rotulo:"Processando"},{valor:"Translado Loja para Pedido",rotulo:"Translado Loja para Pedido"},{valor:"Translado Pedido para Loja",rotulo:"Translado Pedido para Loja"},{valor:"Aguardando Retorno",rotulo:"Aguardando Retorno"},{valor:"Processando Montagem",rotulo:"Processando Montagem"},{valor:"Pronto para Entrega",rotulo:"Pronto para Entrega"},{valor:"Cliente Informado",rotulo:"Cliente Informado"},{valor:"Entregue",rotulo:"Entregues"}],busca:"",filtros:{termoBusca:null,frase:null,numeroEnvelope:null,numeroOrdemCompra:null,prazoSelecionado:null,empresaSelecionada:null,status:null,dataHoraEmissao:{ini:null,fim:null},dataHoraPrevisto:{ini:null,fim:null},dataHoraFinalizado:{ini:null,fim:null}},empresaOpcoes:[],prazoOpcoes:[{label:"Entrega para pr\xF3ximas semanas",value:"adiantadoEntrega"},{label:"Entrega para esta semana",value:"proximaEntrega"},{label:"Entrega atrasada",value:"atrasadoEntrega"}],paginacao:{atual:1,maximo:1,total:1,limite:25,ordenacao:["descricaoConcatenada"]}}},methods:{async atualizar(r){var g;const l=$utils.logarIni("EnvelopeLista");try{$q.loading.show(),this.carregando=!0,this.lista=[];const{tabSelecionada:b,buscarDadosRecentes:t}=r!=null?r:{};let s,m=["dataHoraEmissao","dataHoraFinalizado"],k=["desc","desc"];t&&(s=await $utils.localIDB.getItem({objectStore:"dadosRecentes",id:"ListaDeEnvelopes"}),s!=null&&s._id&&(this.tabSelecionada.valor=s.tabSelecionada,this.filtros=s.filtros,this.busca=s.termoBusca,this.paginacao.limite=s.limit,m=s.sort,k=s.dir));let y=$utils.eliminarVazios(this.filtros);b!=null&&b.valor&&(this.tabSelecionada.valor=b.valor),y.status=this.tabSelecionada.valor,y.termoBusca=this.busca;const h=await $db.envelope.leListaCompleta({filtros:y,limit:this.paginacao.limite,page:this.paginacao.atual,sort:m,dir:k});this.lista=h.data.vendas,this.contatos=h.data.contatos,this.paginacao.total=h.total,this.paginacao.maximo=h.totalPages;const V=localStorage.getItem("idFatura");localStorage.removeItem("idFatura"),this.lista.some(H=>H.idFatura===V)&&this.abrirFatura(V),$db.hibrido.isOnline()&&this.carregarImagensContatos(this.contatos),s!=null&&s._id||(s={_id:"ListaDeEnvelopes",tabSelecionada:this.tabSelecionada.valor,filtros:$utils.clonarV2(y),termoBusca:this.busca,limit:this.paginacao.limite,sort:m,dir:k},await $utils.localIDB.setItem({objectStore:"dadosRecentes",data:s})),$utils.logarFim(l,((g=this.lista)==null?void 0:g.length)||0)}catch(b){$q.notifyError("Ocorreu um erro ao consultar envelopes."),console.error(b)}finally{$q.loading.hide(),this.carregando=!1}},async carregarImagensContatos(r){const l=Object.keys(r);if(!!l.length){await $utils.dormir(200);try{const g=await $db.hibrido.lista({table:"contato",columns:["id","apelido","imagem"],whereIn:{id:l}});for(const b of g)r[b.id].imagem=b.imagem||""}catch(g){console.error("Erro ao carregar imagens de contatos - ",g)}}},async configuraImpressoes(r){await this.configuraImpressaoEnvelope(r)},imprimir(r,l){$imprimir(r,l.id),this.configImpressaoEnvelope=[]},async configuraImpressaoEnvelope(r){const l=await $db.configuracoes.porNome("impressao.envelope",r.idEmpresa);this.configImpressaoEnvelope=[...l.length?l.map(g=>({texto:"Imprimir Envelope",...g})):[{valor:"envelope",texto:"Imprimir Envelope"},{valor:"envelopeMini",texto:"Imprimir Envelope Mini"}]]},async empresaOpcoesCarregar(){const r=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data;this.empresaOpcoes=r.map(l=>({label:l.nome,value:l.codigoContato,id:l.id}))},async abrirEnvelope(r){await this.$refs.envelope.mostrar({idEnvelope:r}),r&&this.$router.push({params:{id:r}})},abrirFatura(r){this.$refs.fatura.mostrar({id:r})},limparRota(){this.$router.push({params:{id:""}})},limparFiltrosClick(){this.filtros={termoBusca:null,frase:null,numeroEnvelope:null,numeroOrdemCompra:null,prazoSelecionado:null,empresaSelecionada:null,status:null,dataHoraEmissao:{ini:null,fim:null},dataHoraPrevisto:{ini:null,fim:null},dataHoraFinalizado:{ini:null,fim:null}},this.atualizar()}},async mounted(){this.empresaOpcoesCarregar(),this.atualizar({buscarDadosRecentes:!0}),this.$route.params.id&&await this.abrirEnvelope(this.$route.params.id)}},K={id:"EnvelopeLista"},W={class:"mw80 text-center"};function Y(r,l,g,b,t,s){const m=v("campo"),k=v("badgeCopiarUid"),y=v("avatar"),h=v("g-col"),V=v("badge"),H=v("g-row"),F=v("g-label"),U=v("Lista"),T=v("Envelope"),Q=v("Fatura");return d(),x("div",K,[a(U,{busca:t.busca,"onUpdate:busca":l[12]||(l[12]=e=>t.busca=e),onAtualizar:s.atualizar,onCriarClick:s.abrirEnvelope,onLimparFiltrosClick:s.limparFiltrosClick,carregando:t.carregando,lista:t.lista,tabSelecionada:t.tabSelecionada,tabs:t.tabs,paginacao:t.paginacao,mostrar:t.mostrar},{filtroCampos:o(()=>[a(m,{modelValue:t.filtros.frase,"onUpdate:modelValue":l[0]||(l[0]=e=>t.filtros.frase=e),rotulo:"Por cliente, paciente ou respons\xE1vel",dense:"",class:"q-field--with-bottom"},null,8,["modelValue"]),a(m,{modelValue:t.filtros.numeroEnvelope,"onUpdate:modelValue":l[1]||(l[1]=e=>t.filtros.numeroEnvelope=e),rotulo:"N\xFAmero Envelope",dense:"",tipo:"decimal",decimals:"0",zerosDireita:"0",class:"q-field--with-bottom"},null,8,["modelValue"]),a(m,{modelValue:t.filtros.numeroOrdemCompra,"onUpdate:modelValue":l[2]||(l[2]=e=>t.filtros.numeroOrdemCompra=e),rotulo:"N\xFAmero Ordem Compra",dense:"",class:"q-field--with-bottom"},null,8,["modelValue"]),a(P,{modelValue:t.filtros.prazoSelecionado,"onUpdate:modelValue":l[3]||(l[3]=e=>t.filtros.prazoSelecionado=e),options:t.prazoOpcoes,clearable:"",dense:"",label:"Por prazo",class:"q-field--with-bottom"},null,8,["modelValue","options"]),a(P,{modelValue:t.filtros.empresaSelecionada,"onUpdate:modelValue":l[4]||(l[4]=e=>t.filtros.empresaSelecionada=e),options:t.empresaOpcoes,label:"Por empresa",clearable:"",dense:"",class:"q-mb-xl"},null,8,["modelValue","options"]),a(m,{modelValue:t.filtros.dataHoraEmissao.ini,"onUpdate:modelValue":l[5]||(l[5]=e=>t.filtros.dataHoraEmissao.ini=e),rotulo:"Data cria\xE7\xE3o",tipo:"data",dense:"",class:"q-mb-xs"},null,8,["modelValue"]),a(m,{modelValue:t.filtros.dataHoraEmissao.fim,"onUpdate:modelValue":l[6]||(l[6]=e=>t.filtros.dataHoraEmissao.fim=e),rotulo:"at\xE9",tipo:"data",dense:"",class:"q-mb-xl"},null,8,["modelValue"]),a(m,{modelValue:t.filtros.dataHoraPrevisto.ini,"onUpdate:modelValue":l[7]||(l[7]=e=>t.filtros.dataHoraPrevisto.ini=e),rotulo:"Data previs\xE3o",tipo:"data",dense:"",class:"q-mb-xs"},null,8,["modelValue"]),a(m,{modelValue:t.filtros.dataHoraPrevisto.fim,"onUpdate:modelValue":l[8]||(l[8]=e=>t.filtros.dataHoraPrevisto.fim=e),rotulo:"at\xE9",tipo:"data",dense:"",class:"q-mb-xl"},null,8,["modelValue"]),a(m,{modelValue:t.filtros.dataHoraFinalizado.ini,"onUpdate:modelValue":l[9]||(l[9]=e=>t.filtros.dataHoraFinalizado.ini=e),rotulo:`Data
          finalizado`,tipo:"data",dense:"",class:"q-mb-xs"},null,8,["modelValue"]),a(m,{modelValue:t.filtros.dataHoraFinalizado.fim,"onUpdate:modelValue":l[10]||(l[10]=e=>t.filtros.dataHoraFinalizado.fim=e),rotulo:"at\xE9",tipo:"data",dense:"",class:"q-mb-xl"},null,8,["modelValue"]),a(m,{modelValue:t.paginacao.limite,"onUpdate:modelValue":l[11]||(l[11]=e=>t.paginacao.limite=e),rotulo:"Quantidade por p\xE1gina",tipo:"quantidade",min:"1",dense:"",class:"q-field--with-bottom"},null,8,["modelValue"])]),itemLista:o(()=>[a(w,{bordered:"",class:"bg-white q-mb-xs rounded-borders"},{default:o(()=>[(d(!0),x(S,null,I(t.lista,e=>(d(),x("div",{key:e.id,class:"itemHover"},[a(E,{"manual-focus":"",class:"q-py-sm q-px-xs items-center"},{default:o(()=>[a(n,{class:"hideonmobile col-auto q-pa-none"},{default:o(()=>[A("div",W,[a(k,{id:e.id,numero:e.numero,cor:"positive",dica:"N\xFAmero Envelope"},null,8,["id","numero"])])]),_:2},1024),a(n,{class:"col-md col-lg col-xl no-margin"},{default:o(()=>[a(E,{class:"q-pa-none"},{default:o(()=>[a(n,{class:"col-auto items-center"},{default:o(()=>[a(y,{imagem:(t.contatos[e.idContato]||{}).imagem,rotulo:e.descricaoContato,tamanho:"40"},null,8,["imagem","rotulo"])]),_:2},1024),a(n,{class:"col"},{default:o(()=>[a(C,{lines:"2",class:"text-tertiary text-weight-bold ellipsis-2-lines"},{default:o(()=>[i(u(e.descricaoContato)+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[i("Paciente")]),_:1})]),_:2},1024),e.idContatoResponsavel!==e.idContato&&t.contatos[e.idContatoResponsavel]?(d(),p(C,{key:0,lines:"2",class:"text-weight-medium ellipsis-2-lines",caption:""},{default:o(()=>[i(u(t.contatos[e.idContatoResponsavel].nome)+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[i("Respons\xE1vel")]),_:1})]),_:2},1024)):_("",!0),a(n,{class:"hideondesktop q-mt-sm"},{default:o(()=>[a(H,{mg:"xs-b"},{default:o(()=>[a(h,{col:"sm-shrink"},{default:o(()=>[a(k,{id:e.id,numero:e.numero,cor:"positive",dica:"N\xFAmero Envelope",class:"q-mr-sm"},null,8,["id","numero"])]),_:2},1024),a(h,{col:"sm-shrink"},{default:o(()=>[a(V,{cor:e.status==="Entregue"?"positive":"light",escuro:e.status==="Entregue",class:"q-mr-sm"},{default:o(()=>[i(u(e.status)+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[i("Status")]),_:1})]),_:2},1032,["cor","escuro"])]),_:2},1024)]),_:2},1024),a(H,{mg:"xs-b"},{default:o(()=>[a(h,{col:"xs12 sm-shrink"},{default:o(()=>[e.dataHoraEmissao?(d(),p(F,{key:0,inline:"",tip:"Empresa",icon:"business xs tertiary left"},{default:o(()=>[i(u(e.descricaoEmpresa),1)]),_:2},1024)):_("",!0)]),_:2},1024),a(h,{col:"xs12",mg:"xs-t"},{default:o(()=>[e.dataHoraEmissao?(d(),p(F,{key:0,tip:`Criado \xE1s ${r.$filters.hora(e.dataHoraEmissao)}`,icon:"mdi-calendar-today xs tertiary",inline:"",class:"q-mr-sm"},{default:o(()=>[i(u(r.$filters.data(e.dataHoraEmissao)),1)]),_:2},1032,["tip"])):_("",!0),e.dataHoraPrevisto?(d(),p(F,{key:1,tip:"Previs\xE3o para entrega",icon:"mdi-calendar-today xs tertiary",inline:"",class:"q-mr-sm"},{default:o(()=>[i(u(r.$filters.data(e.dataHoraPrevisto)),1)]),_:2},1024)):_("",!0),e.dataHoraFinalizado?(d(),p(F,{key:2,tip:`Finalizado \xE1s ${r.$filters.hora(e.dataHoraFinalizado)}`,icon:"mdi-calendar-today xs tertiary",inline:"",class:"q-mr-sm"},{default:o(()=>[i(u(r.$filters.data(e.dataHoraFinalizado)),1)]),_:2},1032,["tip"])):_("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(n,{class:"hideonmobile maxw110 q-pl-sm no-margin"},{default:o(()=>[e.dataHoraEmissao?(d(),p(C,{key:0,color:"tertiary",lines:"1",class:"ellipsis"},{default:o(()=>[a(z,{name:"mdi-calendar-today"}),i(" "+u(r.$filters.data(e.dataHoraEmissao))+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[i(" Criado \xE1s "+u(r.$filters.hora(e.dataHoraEmissao)),1)]),_:2},1024)]),_:2},1024)):_("",!0)]),_:2},1024),a(n,{class:"hideonmobile maxw110 q-pl-sm no-margin"},{default:o(()=>[e.dataHoraPrevisto?(d(),p(C,{key:0,color:"tertiary",lines:"1",class:"ellipsis"},{default:o(()=>[a(z,{name:"mdi-calendar-today"}),i(" "+u(r.$filters.data(e.dataHoraPrevisto))+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[i("Previs\xE3o para entrega")]),_:1})]),_:2},1024)):_("",!0)]),_:2},1024),a(n,{class:"hideonmobile maxw110 q-pl-sm no-margin"},{default:o(()=>[e.dataHoraFinalizado?(d(),p(C,{key:0,color:"tertiary",lines:"1",class:"ellipsis"},{default:o(()=>[a(z,{name:"mdi-calendar-today"}),i(" "+u(r.$filters.data(e.dataHoraFinalizado))+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[i(" Finalizado \xE1s "+u(r.$filters.hora(e.dataHoraFinalizado)),1)]),_:2},1024)]),_:2},1024)):_("",!0)]),_:2},1024),a(n,{class:"hideonmobile maxw170 q-pl-sm no-margin"},{default:o(()=>[a(V,{cor:e.status==="Entregue"?"positive":"light",escuro:e.status==="Entregue",class:"col-auto q-mx-auto"},{default:o(()=>[i(u(e.status)+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[i("Status")]),_:1})]),_:2},1032,["cor","escuro"])]),_:2},1024),a(n,{class:"hideonmobile col-shrink q-pl-sm no-margin"},{default:o(()=>[a(E,{class:"q-pa-none"},{default:o(()=>[a(n,{class:"col-shrink"},{default:o(()=>[a(L,{color:"light","text-color":"tertiary",icon:"business",size:"md"},{default:o(()=>[a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[i(" Empresa: "+u(e.descricaoEmpresa),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(n,{class:"col-shrink"},{default:o(()=>[a(L,{color:"light","text-color":"tertiary",icon:"person",size:"md"},{default:o(()=>[a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>{var c;return[i(" Respons\xE1vel: "+u(((c=t.contatos[e.idContatoResponsavel])==null?void 0:c.nome)||""),1)]}),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(n,{class:"hideonmobile col-shrink q-pl-sm no-margin"},{default:o(()=>[a(E,{class:"q-pa-none"},{default:o(()=>[a(n,{style:{width:"32px"}},{default:o(()=>[a(q,{onClick:c=>s.abrirEnvelope(e.id),size:"md",color:"primary",round:"",flat:"",dense:"",icon:e.dataHoraFinalizado?"remove_red_eye":"edit"},{default:o(()=>[a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[i("Editar")]),_:1})]),_:2},1032,["onClick","icon"])]),_:2},1024),a(n,{style:{width:"32px"}},{default:o(()=>[a(q,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",size:"md",onClick:s.configuraImpressoes},{default:o(()=>[a(O,null,{default:o(()=>[a(w,{link:"",separator:""},{default:o(()=>[(d(!0),x(S,null,I(t.configImpressaoEnvelope,c=>(d(),p(E,{key:c.valor,onClick:B=>s.imprimir(c.valor,e),clickable:""},{default:o(()=>[a(n,{avatar:""},{default:o(()=>[a(z,{name:"print"})]),_:1}),a(n,null,{default:o(()=>[a(C,null,{default:o(()=>[i(u(c.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024),a(n,{style:{width:"32px"}},{default:o(()=>[e.idFatura?(d(),p(q,{key:0,onClick:c=>s.abrirFatura(e.idFatura),icon:"how_to_vote",size:"md",color:"primary",round:"",flat:"",dense:""},{default:o(()=>[a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[i("Fatura")]),_:1})]),_:2},1032,["onClick"])):_("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(n,{class:"hideondesktop col-auto q-pl-sm no-margin"},{default:o(()=>[a(E,{class:"q-pa-none"},{default:o(()=>[a(n,{class:"no-margin"},{default:o(()=>[a(q,{icon:"more_vert",size:"md",round:"",flat:"",dense:"",onClick:s.configuraImpressoes},{default:o(()=>[a(O,null,{default:o(()=>[N((d(),p(w,{link:"","no-border":"",separator:""},{default:o(()=>[a(E,{clickable:"",onClick:c=>s.abrirEnvelope(e.id)},{default:o(()=>[a(n,{avatar:""},{default:o(()=>[a(z,{name:"edit"})]),_:1}),a(n,null,{default:o(()=>[i("Editar")]),_:1})]),_:2},1032,["onClick"]),(d(!0),x(S,null,I(t.configImpressaoEnvelope,c=>(d(),p(E,{clickable:"",key:c.valor,onClick:B=>s.imprimir(c.valor,e)},{default:o(()=>[a(n,{avatar:""},{default:o(()=>[a(z,{name:"print"})]),_:1}),a(n,null,{default:o(()=>[a(C,null,{default:o(()=>[i(u(c.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)),[[j]])]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(M)]))),128))]),_:1})]),_:1},8,["busca","onAtualizar","onCriarClick","onLimparFiltrosClick","carregando","lista","tabSelecionada","tabs","paginacao","mostrar"]),a(T,{onAtualizar:l[13]||(l[13]=e=>s.atualizar({tabSelecionada:{valor:"Todos"}})),onFechou:s.limparRota,ref:"envelope"},null,8,["onFechou"]),a(Q,{onExecutar:l[14]||(l[14]=e=>s.atualizar({tabSelecionada:{valor:"Todos"}})),ref:"fatura"},null,512)])}var ua=D(J,[["render",Y]]);export{ua as default};
