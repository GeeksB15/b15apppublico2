import{_ as T,Z as D,cV as R,r as b,o as d,n as x,f as a,w as o,as as P,O as w,F as S,s as I,R as h,S as n,B as N,T as C,k as r,t as m,m as f,d as p,e as v,j as V,b4 as O,Q as q,az as L,G as j,M as A,l as X}from"./index.334d0b54.js";import{L as G}from"./Lista.4617955e.js";import{F as Z}from"./FaturaModal.1e768fdc.js";import"./QBtnDropdown.b7dcbe69.js";import"./QBtnGroup.fcb27b89.js";import"./QDate.187b38dd.js";import"./xlsx.e5a3ba9c.js";import"./DocumentosFiscais.3b833153.js";import"./Campo.7e9fd436.js";import"./compactarValidarNFe.faf7fa84.js";import"./obterItens.73955c07.js";import"./codigosANP.a6c1a264.js";import"./emitirNFe.35117289.js";import"./VendaCard.3778a232.js";import"./ModalHistoricoStatus.adbcfc97.js";import"./EnvelopeCard.34f9981b.js";const J={components:{avatar:D,Envelope:R,FaturaModal:Z,lista:G},data(){return{envelopes:[],configImpressaoEnvelope:[],contatos:{},envelope:{},envelopeOriginal:{},arquivo:[],arquivoOriginal:[],itensEnvelope:[],itensEnvelopeOriginal:[],carrinho:[],carrinhoOriginal:[],empresaOpcoes:[],showFilters:!1,filtros:{termoBusca:null,frase:null,numeroEnvelope:null,numeroOrdemCompra:null,prazoSelecionado:null,empresaSelecionada:null,status:null,dataHoraEmissao:{ini:null,fim:null},dataHoraPrevisto:{ini:null,fim:null},dataHoraFinalizado:{ini:null,fim:null}},prazoOpcoes:[{label:"Entrega para pr\xF3ximas semanas",value:"adiantadoEntrega"},{label:"Entrega para esta semana",value:"proximaEntrega"},{label:"Entrega atrasada",value:"atrasadoEntrega"}],tabSelecionada:{valor:"Todos"},tabs:[{rotulo:"Todos",value:"Todos"},{rotulo:"Or\xE7amento",value:"Or\xE7amento"},{rotulo:"Processando",value:"Processando"},{rotulo:"Translado Loja para Pedido",value:"Translado Loja para Pedido"},{rotulo:"Translado Pedido para Loja",value:"Translado Pedido para Loja"},{rotulo:"Aguardando Retorno",value:"Aguardando Retorno"},{rotulo:"Processando Montagem",value:"Processando Montagem"},{rotulo:"Pronto para Entrega",value:"Pronto para Entrega"},{rotulo:"Cliente Informado",value:"Cliente Informado"},{rotulo:"Entregues",value:"Entregue"}],buscaCampo:"",paginacao:{atual:1,maximo:1,total:1,limite:25,ordenacao:["descricaoConcatenada"]}}},methods:{limparRota(){this.$router.push({params:{id:""}})},abrirFaturaModal(i){this.$refs.faturaModal.mostrar({id:i})},async atualizar(i){var E;const t=$utils.logarIni("EnvelopeLista");await $tryLoading(async()=>{this.envelopes=[];const{tabSelecionada:_,buscarDadosRecentes:l}=i!=null?i:{};let s,u=["dataHoraEmissao","dataHoraFinalizado"],k=["desc","desc"];l&&(s=await $utils.localIDB.getItem({objectStore:"dadosRecentes",id:"ListaDeEnvelopes"}),s!=null&&s._id&&(this.tabSelecionada.valor=s.tabSelecionada,this.filtros=s.filtros,this.buscaCampo=s.termoBusca,this.paginacao.limite=s.limit,this.paginacao.atual=s.page,u=s.sort,k=s.dir));let y=$utils.eliminarVazios(this.filtros);_!=null&&_.valor&&(this.tabSelecionada.valor=_.valor),y.status=this.tabSelecionada.valor,y.termoBusca=this.buscaCampo;const g=await $db.envelope.leListaCompleta({filtros:y,limit:this.paginacao.limite,page:this.paginacao.atual,sort:u,dir:k});this.envelopes=g.data.vendas,this.contatos=g.data.contatos,this.paginacao.total=g.total,this.paginacao.maximo=g.totalPages;const F=localStorage.getItem("idFatura");localStorage.removeItem("idFatura"),this.envelopes.some(z=>z.idFatura===F)&&this.abrirFaturaModal(F),$db.hibrido.isOnline()&&this.carregarImagensContatos(this.contatos),s!=null&&s._id||(s={_id:"ListaDeEnvelopes",tabSelecionada:this.tabSelecionada.valor,filtros:$utils.clonarV2(y),termoBusca:this.buscaCampo,limit:this.paginacao.limite,page:this.paginacao.atual,sort:u,dir:k},await $utils.localIDB.setItem({objectStore:"dadosRecentes",data:s}))},{mensagem:"Carregando envelopes...",erro:"Ocorreu um erro ao consultar envelopes"}),$utils.logarFim(t,((E=this.envelopes)==null?void 0:E.length)||0)},async carregarImagensContatos(i){const t=Object.keys(i);if(!!t.length){await $utils.dormir(200);try{const E=await $db.hibrido.lista({table:"contato",columns:["id","apelido","imagem"],whereIn:{id:t}});for(const _ of E)i[_.id].imagem=_.imagem||""}catch(E){console.error("Erro ao carregar imagens de contatos - ",E)}}},async configuraImpressoes(i){await this.configuraImpressaoEnvelope(i)},imprimir(i,t){$imprimir(i,t.id),this.configImpressaoEnvelope=[]},async configuraImpressaoEnvelope(i){await $db.configuracoes.porNome("impressao.envelope",i.idEmpresa),this.configImpressaoEnvelope=[{valor:"envelope",texto:"Imprimir Envelope"},{valor:"envelopeMini",texto:"Imprimir Envelope Mini"}]},async empresaOpcoesCarregar(){const i=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data;this.empresaOpcoes=i.map(t=>({label:t.nome,value:t.codigoContato,id:t.id}))},async abrirModalEnvelope(i){await this.$refs.modalEnvelope.mostrar({idEnvelope:i}),i&&this.$router.push({params:{id:i}})},limparFiltros_click(){this.filtros={termoBusca:null,frase:null,numeroEnvelope:null,numeroOrdemCompra:null,prazoSelecionado:null,empresaSelecionada:null,status:null,dataHoraEmissao:{ini:null,fim:null},dataHoraPrevisto:{ini:null,fim:null},dataHoraFinalizado:{ini:null,fim:null}},this.atualizar()}},props:{enableChanges:{type:Boolean,required:!1,default:!0}},async mounted(){this.empresaOpcoesCarregar(),this.atualizar({buscarDadosRecentes:!0}),this.$route.params.id&&await this.abrirModalEnvelope(this.$route.params.id)}},K={class:"mw80 text-center"};function W(i,t,E,_,l,s){const u=b("campo"),k=b("badgeCopiarUid"),y=b("avatar"),g=b("g-col"),F=b("badge"),z=b("g-row"),H=b("g-label"),M=b("lista",!0),B=b("Envelope"),U=b("FaturaModal");return d(),x("div",null,[a(M,{titulo:"Envelopes",icone:"mdi-glasses",buscaCampo:l.buscaCampo,"onUpdate:buscaCampo":t[12]||(t[12]=e=>l.buscaCampo=e),onCriar_click:t[13]||(t[13]=e=>s.abrirModalEnvelope()),onFiltro_change:s.atualizar,onLimparFiltros_click:s.limparFiltros_click,lista:l.envelopes,paginacao:l.paginacao,filtros:l.filtros,tabSelecionada:l.tabSelecionada,tabs:l.tabs,checkboxVisible:!1,removerTodosVisible:!1,abrirTodosVisible:!1,exportarXLSXVisible:!1,multiplosBtnNovo:!1,showQuickAdd:!1,permissaoExtras:!1},{filtroCampos:o(()=>[a(u,{modelValue:l.filtros.frase,"onUpdate:modelValue":t[0]||(t[0]=e=>l.filtros.frase=e),rotulo:"Por cliente, paciente ou respons\xE1vel",dense:"",class:"q-field--with-bottom"},null,8,["modelValue"]),a(u,{modelValue:l.filtros.numeroEnvelope,"onUpdate:modelValue":t[1]||(t[1]=e=>l.filtros.numeroEnvelope=e),rotulo:"N\xFAmero Envelope",dense:"",tipo:"decimal",decimals:"0",zerosDireita:"0",class:"q-field--with-bottom"},null,8,["modelValue"]),a(u,{modelValue:l.filtros.numeroOrdemCompra,"onUpdate:modelValue":t[2]||(t[2]=e=>l.filtros.numeroOrdemCompra=e),rotulo:"N\xFAmero Ordem Compra",dense:"",class:"q-field--with-bottom"},null,8,["modelValue"]),a(P,{modelValue:l.filtros.prazoSelecionado,"onUpdate:modelValue":t[3]||(t[3]=e=>l.filtros.prazoSelecionado=e),options:l.prazoOpcoes,clearable:"",dense:"",label:"Por prazo",class:"q-field--with-bottom"},null,8,["modelValue","options"]),a(P,{modelValue:l.filtros.empresaSelecionada,"onUpdate:modelValue":t[4]||(t[4]=e=>l.filtros.empresaSelecionada=e),options:l.empresaOpcoes,clearable:"",dense:"",label:"Por empresa",class:"q-mb-xl"},null,8,["modelValue","options"]),a(u,{modelValue:l.filtros.dataHoraEmissao.ini,"onUpdate:modelValue":t[5]||(t[5]=e=>l.filtros.dataHoraEmissao.ini=e),rotulo:"Data cria\xE7\xE3o",tipo:"data",dense:"",class:"q-mb-xs"},null,8,["modelValue"]),a(u,{modelValue:l.filtros.dataHoraEmissao.fim,"onUpdate:modelValue":t[6]||(t[6]=e=>l.filtros.dataHoraEmissao.fim=e),rotulo:"at\xE9",tipo:"data",dense:"",class:"q-mb-xl"},null,8,["modelValue"]),a(u,{modelValue:l.filtros.dataHoraPrevisto.ini,"onUpdate:modelValue":t[7]||(t[7]=e=>l.filtros.dataHoraPrevisto.ini=e),rotulo:"Data previs\xE3o",tipo:"data",dense:"",class:"q-mb-xs"},null,8,["modelValue"]),a(u,{modelValue:l.filtros.dataHoraPrevisto.fim,"onUpdate:modelValue":t[8]||(t[8]=e=>l.filtros.dataHoraPrevisto.fim=e),rotulo:"at\xE9",tipo:"data",dense:"",class:"q-mb-xl"},null,8,["modelValue"]),a(u,{modelValue:l.filtros.dataHoraFinalizado.ini,"onUpdate:modelValue":t[9]||(t[9]=e=>l.filtros.dataHoraFinalizado.ini=e),rotulo:"Data finalizado",tipo:"data",dense:"",class:"q-mb-xs"},null,8,["modelValue"]),a(u,{modelValue:l.filtros.dataHoraFinalizado.fim,"onUpdate:modelValue":t[10]||(t[10]=e=>l.filtros.dataHoraFinalizado.fim=e),rotulo:"at\xE9",tipo:"data",dense:"",class:"q-mb-xl"},null,8,["modelValue"]),a(u,{modelValue:l.paginacao.limite,"onUpdate:modelValue":t[11]||(t[11]=e=>l.paginacao.limite=e),rotulo:"Quantidade por p\xE1gina",tipo:"quantidade",min:"1",dense:"",class:"q-field--with-bottom"},null,8,["modelValue"])]),itemLista:o(()=>[a(w,{bordered:"",class:"bg-white q-mb-xs rounded-borders"},{default:o(()=>[(d(!0),x(S,null,I(l.envelopes,e=>(d(),x("div",{key:e.id,class:"itemHover"},[a(h,{"manual-focus":"",class:"q-py-sm q-px-xs items-center"},{default:o(()=>[a(n,{class:"hideonmobile col-auto q-pa-none"},{default:o(()=>[N("div",K,[a(k,{id:e.id,numero:e.numero,cor:"positive",dica:"N\xFAmero Envelope"},null,8,["id","numero"])])]),_:2},1024),a(n,null,{default:o(()=>[a(h,{class:"q-pa-none"},{default:o(()=>[a(n,{class:"col-auto items-center"},{default:o(()=>[a(y,{imagem:(l.contatos[e.idContato]||{}).imagem,rotulo:e.descricaoContato,tamanho:"40"},null,8,["imagem","rotulo"])]),_:2},1024),a(n,{class:"col sm-shrink"},{default:o(()=>[a(C,{lines:"2",class:"text-tertiary text-weight-bold ellipsis-2-lines"},{default:o(()=>[r(m(e.descricaoContato)+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[r("Paciente")]),_:1})]),_:2},1024),e.idContatoResponsavel!==e.idContato&&l.contatos[e.idContatoResponsavel]?(d(),p(C,{key:0,lines:"2",class:"text-weight-medium ellipsis-2-lines",caption:""},{default:o(()=>[r(m(l.contatos[e.idContatoResponsavel].nome)+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[r("Respons\xE1vel")]),_:1})]),_:2},1024)):v("",!0),a(n,{class:"hideondesktop q-mt-xs"},{default:o(()=>[a(z,{mg:"xs-b"},{default:o(()=>[a(g,{col:"sm-shrink"},{default:o(()=>[a(k,{id:e.id,numero:e.numero,cor:"positive",dica:"N\xFAmero Envelope",class:"q-mr-sm"},null,8,["id","numero"])]),_:2},1024),a(g,{col:"sm-shrink"},{default:o(()=>[a(F,{cor:e.status==="Entregue"?"positive":"light",escuro:e.status==="Entregue",class:"q-mr-sm"},{default:o(()=>[r(m(e.status)+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[r("Status")]),_:1})]),_:2},1032,["cor","escuro"])]),_:2},1024)]),_:2},1024),a(z,{mg:"xs-b"},{default:o(()=>[a(g,{col:"xs12 sm-shrink"},{default:o(()=>[e.dataHoraEmissao?(d(),p(H,{key:0,inline:"",tip:"Empresa",icon:"business xs tertiary left"},{default:o(()=>[r(m(e.descricaoEmpresa),1)]),_:2},1024)):v("",!0)]),_:2},1024),a(g,{col:"xs12",mg:"xs-t"},{default:o(()=>[e.dataHoraEmissao?(d(),p(H,{key:0,tip:`Criado \xE1s ${i.$filters.hora(e.dataHoraEmissao)}`,icon:"mdi-calendar-today xs tertiary",inline:"",class:"q-mr-sm"},{default:o(()=>[r(m(i.$filters.data(e.dataHoraEmissao)),1)]),_:2},1032,["tip"])):v("",!0),e.dataHoraPrevisto?(d(),p(H,{key:1,tip:"Previs\xE3o para entrega",icon:"mdi-calendar-today xs tertiary",inline:"",class:"q-mr-sm"},{default:o(()=>[r(m(i.$filters.data(e.dataHoraPrevisto)),1)]),_:2},1024)):v("",!0),e.dataHoraFinalizado?(d(),p(H,{key:2,tip:`Finalizado \xE1s ${i.$filters.hora(e.dataHoraFinalizado)}`,icon:"mdi-calendar-today xs tertiary",inline:"",class:"q-mr-sm"},{default:o(()=>[r(m(i.$filters.data(e.dataHoraFinalizado)),1)]),_:2},1032,["tip"])):v("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(n,{class:"hideonmobile maxw110 q-pl-sm no-margin"},{default:o(()=>[e.dataHoraEmissao?(d(),p(C,{key:0,color:"tertiary",lines:"1",class:"ellipsis"},{default:o(()=>[a(V,{name:"mdi-calendar-today"}),r(" "+m(i.$filters.data(e.dataHoraEmissao))+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[r(" Criado \xE1s "+m(i.$filters.hora(e.dataHoraEmissao)),1)]),_:2},1024)]),_:2},1024)):v("",!0)]),_:2},1024),a(n,{class:"hideonmobile maxw110 q-pl-sm no-margin"},{default:o(()=>[e.dataHoraPrevisto?(d(),p(C,{key:0,color:"tertiary",lines:"1",class:"ellipsis"},{default:o(()=>[a(V,{name:"mdi-calendar-today"}),r(" "+m(i.$filters.data(e.dataHoraPrevisto))+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[r("Previs\xE3o para entrega")]),_:1})]),_:2},1024)):v("",!0)]),_:2},1024),a(n,{class:"hideonmobile maxw110 q-pl-sm no-margin"},{default:o(()=>[e.dataHoraFinalizado?(d(),p(C,{key:0,color:"tertiary",lines:"1",class:"ellipsis"},{default:o(()=>[a(V,{name:"mdi-calendar-today"}),r(" "+m(i.$filters.data(e.dataHoraFinalizado))+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[r(" Finalizado \xE1s "+m(i.$filters.hora(e.dataHoraFinalizado)),1)]),_:2},1024)]),_:2},1024)):v("",!0)]),_:2},1024),a(n,{class:"hideonmobile maxw170 q-pl-sm no-margin"},{default:o(()=>[a(F,{cor:e.status==="Entregue"?"positive":"light",escuro:e.status==="Entregue",class:"col-auto q-mx-auto"},{default:o(()=>[r(m(e.status)+" ",1),a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[r("Status")]),_:1})]),_:2},1032,["cor","escuro"])]),_:2},1024),a(n,{class:"hideonmobile col-shrink q-pl-sm no-margin"},{default:o(()=>[a(h,{class:"q-pa-none"},{default:o(()=>[a(n,{class:"col-shrink"},{default:o(()=>[a(O,{color:"light","text-color":"tertiary",icon:"business",size:"md"},{default:o(()=>[a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[r(" Empresa: "+m(e.descricaoEmpresa),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(n,{class:"col-shrink"},{default:o(()=>[a(O,{color:"light","text-color":"tertiary",icon:"person",size:"md"},{default:o(()=>[a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>{var c;return[r(" Respons\xE1vel: "+m(((c=l.contatos[e.idContatoResponsavel])==null?void 0:c.nome)||""),1)]}),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(n,{class:"hideonmobile col-shrink q-pl-sm no-margin"},{default:o(()=>[a(h,{class:"q-pa-none"},{default:o(()=>[a(n,{style:{width:"32px"}},{default:o(()=>[a(q,{onClick:c=>s.abrirModalEnvelope(e.id),size:"md",color:"primary",round:"",flat:"",dense:"",icon:e.dataHoraFinalizado?"remove_red_eye":"edit"},{default:o(()=>[a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[r("Editar")]),_:1})]),_:2},1032,["onClick","icon"])]),_:2},1024),a(n,{style:{width:"32px"}},{default:o(()=>[a(q,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",size:"md",onClick:s.configuraImpressoes},{default:o(()=>[a(L,null,{default:o(()=>[a(w,{link:"",separator:""},{default:o(()=>[(d(!0),x(S,null,I(l.configImpressaoEnvelope,c=>(d(),p(h,{key:c.valor,onClick:Q=>s.imprimir(c.valor,e),clickable:""},{default:o(()=>[a(n,{avatar:""},{default:o(()=>[a(V,{name:"print"})]),_:1}),a(n,null,{default:o(()=>[a(C,null,{default:o(()=>[r(m(c.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024),a(n,{style:{width:"32px"}},{default:o(()=>[e.idFatura?(d(),p(q,{key:0,onClick:c=>s.abrirFaturaModal(e.idFatura),icon:"how_to_vote",size:"md",color:"primary",round:"",flat:"",dense:""},{default:o(()=>[a(f,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[r("Fatura")]),_:1})]),_:2},1032,["onClick"])):v("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(n,{class:"hideondesktop col-auto q-pl-sm no-margin"},{default:o(()=>[a(h,{class:"q-pa-none"},{default:o(()=>[a(n,{class:"no-margin"},{default:o(()=>[a(q,{icon:"more_vert",size:"md",round:"",flat:"",dense:"",onClick:s.configuraImpressoes},{default:o(()=>[a(L,null,{default:o(()=>[j((d(),p(w,{link:"","no-border":"",separator:""},{default:o(()=>[a(h,{clickable:"",onClick:c=>s.abrirModalEnvelope(e.id)},{default:o(()=>[a(n,{avatar:""},{default:o(()=>[a(V,{name:"edit"})]),_:1}),a(n,null,{default:o(()=>[r("Editar")]),_:1})]),_:2},1032,["onClick"]),(d(!0),x(S,null,I(l.configImpressaoEnvelope,c=>(d(),p(h,{clickable:"",key:c.valor,onClick:Q=>s.imprimir(c.valor,e)},{default:o(()=>[a(n,{avatar:""},{default:o(()=>[a(V,{name:"print"})]),_:1}),a(n,null,{default:o(()=>[a(C,null,{default:o(()=>[r(m(c.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)),[[A]])]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(X)]))),128))]),_:1})]),_:1},8,["buscaCampo","onFiltro_change","onLimparFiltros_click","lista","paginacao","filtros","tabSelecionada","tabs"]),a(B,{onAtualizar:t[14]||(t[14]=e=>s.atualizar({tabSelecionada:{valor:"Todos"}})),onFechou:s.limparRota,ref:"modalEnvelope"},null,8,["onFechou"]),a(U,{onExecutar:t[15]||(t[15]=e=>s.atualizar({tabSelecionada:{valor:"Todos"}})),ref:"faturaModal"},null,512)])}var fa=T(J,[["render",W]]);export{fa as default};
