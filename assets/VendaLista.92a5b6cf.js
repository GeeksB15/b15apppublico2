import{_ as Q,Z as X,$ as Z,c4 as G,r as q,o as d,n as C,d as b,w as t,f as o,S as c,k as n,t as f,G as A,B as g,bs as B,T as w,bw as $,F as D,m as x,e as V,Q as T,az as j,O as P,s as S,R as k,j as F,M as O,i as J,l as W,a as ee,bd as ae,as as U}from"./index.9759e0fb.js";import{x as L}from"./xlsx.5aac55b3.js";import{l as oe}from"./listaV2.f9dc48ef.js";import{D as te}from"./DocumentosFiscais.4978dd9d.js";import{M as ie}from"./ModalHistoricoStatus.6f2e687b.js";import"./QBreadcrumbs.30e21aab.js";import"./Campo.46efb835.js";import"./compactarValidarNFe.6e3791fa.js";import"./obterItens.3af83051.js";import"./codigosANP.a6c1a264.js";const se={alterados:0,arquivo:null,cor:"text-negative",corFinal:"",erro:"",erros:0,incluidos:0,listaErros:[],mensagem:"",mensagemFinal:"",modalResultado:!1},re={components:{Avatar:X,Badge:Z,DocumentosFiscais:te,ModalHistoricoStatus:ie,VendaModal:G},computed:{config(){return $db.configuracoes.valores},podeMigrarFatura(){return!["Aguardando Estoque","Aguardando Financeiro","Aguardando Aprova\xE7\xE3o","Aguardando Pagamento","Cancelado","N\xE3o Aprovado","Or\xE7amento","Faturado"].includes(this.dados.venda.status)}},data(){return{importar:$utils.clonarV2(se),dbUsuario:$db.usuario,dados:{venda:{}},contatos:{},faturasAbertas:[],detalhesVisivel:!1,visibilidade:{botao:{editar:!1,remover:!1}},modalDevolucaoGarantia:{visivel:!1,item:{},orcamento:{}},sistemaPai:"",configImpressaoOrcamento:[],configImpressaoEnvelope:[],documentoItemKit:{}}},emits:["executar"],methods:{irParaAtendimentoFatura(e){this.$router.push({name:"AtendimentoFatura",params:{id:e}})},async migrarFatura(e){try{await this.$q.dialog({message:"Esta a\xE7\xE3o ir\xE1 migrar esta venda para outra fatura.",noRefocus:!0,preventClose:!0,title:"Tem certeza?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-primary",textColor:"white",flat:!0}})}catch{return}e||(e=$db.fatura.criar(this.dados.venda),await $db.fatura.grava({fatura:e})),e.id?(await $db.documento.grava({atual:{id:this.dados.venda.id,idFatura:e.id},original:{id:this.dados.venda.id}}),localStorage.setItem("idFatura",e.id),this.dados.venda.idContato&&(this.$emit("executar","atualizar"),this.irParaAtendimentoFatura(this.dados.venda.idContato))):this.$q.notify("N\xE3o foi poss\xEDvel realizar a opera\xE7\xE3o")},alternarDetalhes(){this.detalhesVisivel=!this.detalhesVisivel},async atualizar(){const e=await $db.venda.leCompleto(this.id);e.venda.rotaJson&&e.venda.rotaJson.length>3&&(e.rotaJson=JSON.parse(e.venda.rotaJson)),this.fatura&&(e.fatura=this.fatura),e.carrinho.sort((s,r)=>new Date(s.dataHoraEmissao)<new Date(r.dataHoraEmissao)?-1:1),e.oss.sort((s,r)=>new Date(s.documento.dataHoraEmissao)<new Date(r.documento.dataHoraEmissao)?-1:1),e.customs.sort((s,r)=>new Date(s.documento.dataHoraEmissao)<new Date(r.documento.dataHoraEmissao)?-1:1),e.kits.sort((s,r)=>new Date(s.documento.dataHoraEmissao)<new Date(r.documento.dataHoraEmissao)?-1:1);for(const s of e.kits){const r=s.documentosItem.find(a=>a.operacaoFator===-1);this.documentoItemKit[s.documento.id]=r}if((e.venda||{}).idContato&&(e.venda||{}).idEmpresa){let s=[];s=await $db.fatura.obterAbertas(e.venda.idContato,e.venda.idEmpresa),this.faturasAbertas=s.sort((r,a)=>!r.numero||r.numero<a.numero?-1:1)}const i={};if(e.venda.idContato){const s=e.venda.idContato;i[s]||(i[s]=await $db.contato.le({id:s}))}if(e.venda.idContatoVendedor){const s=e.venda.idContatoVendedor;i[s]||(i[s]=await $db.contato.le({id:s}))}this.configuraImpressaoEnvelope(e.venda.idEmpresa),this.configuraImpressaoOrcamento(e.venda.idEmpresa),this.contatos=i,this.dados=e,await this.$nextTick(),e.venda.id===localStorage.getItem("idVenda")&&(this.$refs.vendaModal.mostrar({id:e.venda.id}),localStorage.removeItem("idVenda"))},async configuraImpressaoEnvelope(e){const i=await $db.configuracoes.porNome("impressao.envelope",e);this.configImpressaoEnvelope=[...i.length?i.map(s=>({texto:"Imprimir Envelope",...s})):[{valor:"envelope",texto:"Imprimir Envelope"},{valor:"envelopeMini",texto:"Imprimir Envelope Mini"}]]},async configuraImpressaoOrcamento(e){const i=await $db.configuracoes.porNome("impressao.venda",e);this.configImpressaoOrcamento=[...i.length?i.map(s=>({texto:"Imprimir Or\xE7amento",...s})):[{valor:"invoice",texto:"Or\xE7amento/Venda (Invoice)"},this.sistemaPai==="optisoul"?{valor:"orcamento",texto:"Or\xE7amento (Antigo)"}:{},this.sistemaPai==="optisoul"?{valor:"termoGarantia",texto:"Termo de Garantia"}:{}]]},copiarUid(){const e=this.$refs.uid;e.type="text";try{e.select(),document.execCommand("copy"),this.$q.notify({message:"UID copiado para a \xE1rea de transfer\xEAncia.",type:"info"})}catch{this.$q.notify("Erro ao copiar.")}e.type="hidden",window.getSelection().removeAllRanges()},descricaoEnvelope(e){let i="";for(const s of this.dados.itensEnvelopes)s.idDocumentoAdicional===e&&s.descricaoItem.trim()&&(i+=s.descricaoItem.trim()+" | ");return i.slice(0,-3)},async devolucaoGarantia(e){let i=await $db.hibrido.lista({table:"documento",where:{idContato:$db.contato.selecionado.id,tipo:"Venda",status:"Or\xE7amento"}});if(i=$lodash.orderBy(i,"dataHoraEmissao","desc"),!i.length){this.$q.notify({message:"Crie um or\xE7amento para inclus\xE3o de devolu\xE7\xE3o/garantia.",type:"info"});return}this.modalDevolucaoGarantia={visivel:!0,item:e,orcamento:i[0]}},editar(){this.$router.replace({params:{id:this.dados.venda.id}}).finally(()=>{this.$refs.vendaModal.mostrar({id:this.dados.venda.id})})},executar(e){switch(e){case"atualizar":this.atualizar();break;case"cancelar":case"finalizar":case"reprovar":this.$emit("executar","atualizar");break;case"retornarOrcamento":this.$emit("executar",e);break}},async finalizaDevolucaoGarantia(e,i,s){const r=$utils.clonarV2(e);i==="devolucao"&&(r.operacao="Devolu\xE7\xE3o de Venda"),i==="garantia"&&(r.operacao="Garantia de Venda",r.motivo=s),r.idDocumentoItemVenda=r.id,r.idDocumentoVenda=r.idDocumento,r.id=$utils.uuid(),r.idDocumento=this.modalDevolucaoGarantia.orcamento.id,r.status="Or\xE7amento",r.operacaoFator=1,r.codigoCfop=20,r.idCfop=(await $db.cfop.le({codigoCfop:20}))[0].id,r.dataHoraEmissao=$utils.dataAtual(),r.dataHoraFinalizado="",r.subTotal=r.subTotal*-1,r.total=r.total*-1,r.valorItem=r.valorItem*-1,r.descontoSubTotal=0,delete r.codigoCfop,delete r.codigoDocumento,delete r.codigoDocumentoItem,delete r.codigoItem,delete r.codigoPlanoContaDestino,delete r.codigoPlanoContaEstoque,await $db.documentoItem.grava({atual:r}),this.$q.notify({message:"Item adicionado ao or\xE7amento.",type:"positive"}),localStorage.setItem("idVenda",this.modalDevolucaoGarantia.orcamento.id),this.$emit("executar","atualizar")},async remover(){this.$q.dialog({message:"Esta a\xE7\xE3o ir\xE1 remover esta venda da fatura",title:"Tem certeza?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(async()=>{await $db.documento.grava({atual:{id:this.dados.venda.id,idFatura:""},original:{id:this.dados.venda.id}}),this.$emit("executar","remover")})}},props:{id:{required:!0,type:String},sendRouteEasy:{required:!1,type:Function},sendRouteEasyAll:{required:!1,type:Function},fatura:{required:!1,type:Object},resetarEnvio:{required:!1,type:Function}},watch:{async dados(e){this.visibilidade.botao.editar=!1,this.visibilidade.botao.remover=!1,(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data.find(s=>s.id===e.venda.idEmpresa)&&(e.venda.idFatura&&this.faturasAbertas.find(s=>s.id===e.venda.idFatura)&&(this.visibilidade.botao.remover=await $db.permissao.objeto("Diretiva_Vendas_RemoverVendaFatura")),e.venda.idFatura&&this.faturasAbertas.find(s=>s.id===e.venda.idFatura)&&(this.visibilidade.botao.remover=!0),!["Cancelado","N\xE3o Aprovado"].includes(e.venda.status)&&!e.venda.idFatura&&(this.visibilidade.botao.editar=!0))}},mounted(){this.sistemaPai=$utils.sistemaPai(),this.atualizar()}},le={class:"col-auto q-pl-none items-center"},ne={class:"col"},de={class:"col-auto"},ue={class:"col"},ce={class:"col"},me={class:"col"},fe={class:"col-12 col-md-4"},pe={class:"col-12 col-md-4"},ve={class:"q-px-sm"},he={key:0,class:"q-mt-sm"},ge={style:{display:"block"}},be=g("br",null,null,-1),_e={class:"round-borders"},ye={class:"col-12 col-md-4"},Ee={key:0,class:"q-px-sm"},Ce={class:"q-mt-sm"},we={style:{display:"block"}},Ve={key:1,class:"q-px-sm text-right"},ke={class:"q-mt-none text-right"},De=g("small",{class:"q-mr-xs"},"Desconto",-1),Fe={class:"text-subtitle1"};function Ie(e,i,s,r,a,m){const p=q("badge"),v=q("avatar"),h=q("row"),y=q("DocumentosFiscais"),_=q("VendaModal"),u=q("ModalHistoricoStatus");return d(),C("div",null,[a.dados.venda.id?(d(),b(k,{key:0,id:"VendaCard","manual-focus":"",clickable:"",class:"items-center d-flex q-pa-xs"},{default:t(()=>[o(c,{avatar:"",center:"",class:"mw100 hideonmobile",onClick:m.editar},{default:t(()=>[o(p,{class:"q-mr-sm",escuro:"",cor:"positive",onClick:m.copiarUid},{default:t(()=>[n(" #"+f(parseInt(a.dados.venda.numero)||(a.dados.venda.id||"").slice(-6))+" ",1),A(g("input",{type:"hidden","onUpdate:modelValue":i[0]||(i[0]=l=>a.dados.venda.id=l),ref:"uid"},null,512),[[B,a.dados.venda.id]])]),_:1},8,["onClick"])]),_:1},8,["onClick"]),o(c,{onClick:m.editar},{default:t(()=>[o(h,{class:"items-center"},{default:t(()=>[g("div",le,[o(v,{imagem:(a.contatos[a.dados.venda.idContato]||{}).imagem,rotulo:a.dados.venda.descricaoContato,tamanho:"40",style:{float:"left"}},null,8,["imagem","rotulo"])]),g("div",ne,[o(w,{class:"text-tertiary text-weight-bold"},{default:t(()=>[n(f(a.dados.venda.descricaoContato),1)]),_:1}),o(h,{class:"hideondesktop items-center q-my-sm"},{default:t(()=>[g("div",de,[o(p,{class:"q-mr-sm",escuro:"",cor:"positive",onClick:m.copiarUid},{default:t(()=>[n(" #"+f(parseInt(a.dados.venda.numero)||(a.dados.venda.id||"").slice(-6))+" ",1),A(g("input",{type:"hidden","onUpdate:modelValue":i[1]||(i[1]=l=>a.dados.venda.id=l),ref:"uid"},null,512),[[B,a.dados.venda.id]])]),_:1},8,["onClick"])]),g("div",ue,[o($,{color:"tertiary"},{default:t(()=>[n(f(a.dados.venda.status),1)]),_:1})])]),_:1}),o(h,{class:"hideondesktop items-center q-my-sm"},{default:t(()=>[g("div",ce,[a.dados.venda.dataHoraFinalizado?(d(),C(D,{key:0},[n(f(e.$filters.data(a.dados.venda.dataHoraFinalizado))+" ",1),o(x,null,{default:t(()=>[n(" Finalizado ")]),_:1})],64)):(d(),C(D,{key:1},[n(f(e.$filters.data(a.dados.venda.dataHoraEmissao))+" ",1),o(x,null,{default:t(()=>[n(" Emiss\xE3o ")]),_:1})],64))]),g("div",me,[n(f((a.contatos[a.dados.venda.idContatoVendedor]||{}).apelido)+" ",1),o(x,null,{default:t(()=>[n(" Vendedor(a) ")]),_:1})])]),_:1})])]),_:1})]),_:1},8,["onClick"]),o(c,{onClick:m.editar,class:"hideonmobile"},{default:t(()=>[a.dados.venda.dataHoraFinalizado?(d(),C(D,{key:0},[n(f(e.$filters.data(a.dados.venda.dataHoraFinalizado))+" ",1),o(x,null,{default:t(()=>[n(" Finalizado ")]),_:1})],64)):(d(),C(D,{key:1},[n(f(e.$filters.data(a.dados.venda.dataHoraEmissao))+" ",1),o(x,null,{default:t(()=>[n(" Emiss\xE3o ")]),_:1})],64))]),_:1},8,["onClick"]),o(c,{onClick:m.editar,class:"hideonmobile"},{default:t(()=>[n(f((a.contatos[a.dados.venda.idContatoVendedor]||{}).apelido)+" ",1),o(x,null,{default:t(()=>[n(" Vendedor(a) ")]),_:1})]),_:1},8,["onClick"]),o(c,{avatar:"",class:"mw240 hideonmobile"},{default:t(()=>[o($,{color:"tertiary"},{default:t(()=>[n(f(a.dados.venda.status),1)]),_:1}),a.dados.venda.rotaStatus?(d(),b($,{key:0,color:"secondary",style:{"margin-top":"5px"}},{default:t(()=>[g("span",null,f(a.dados.venda.rotaStatus),1)]),_:1})):V("",!0)]),_:1}),o(c,{onClick:m.editar,avatar:"",class:"mw100"},{default:t(()=>[o(w,{caption:"",class:"text-right text-tertiary text-weight-bold"},{default:t(()=>[n(f(e.$filters.numero(a.dados.venda.totalDocumento,2))+" ",1),o(x,null,{default:t(()=>[n("Valor total")]),_:1})]),_:1})]),_:1},8,["onClick"]),o(c,{side:"",top:""},{default:t(()=>[o(h,null,{default:t(()=>[o(T,{rounded:"",dense:"",flat:"",icon:a.detalhesVisivel?"keyboard_arrow_up":"keyboard_arrow_down",size:"md",unelevated:"",class:"hideonmobile q-mx-xs",color:"tertiary",style:{float:"right"},onClick:m.alternarDetalhes},null,8,["icon","onClick"]),a.visibilidade.botao.remover?(d(),b(T,{key:0,rounded:"",dense:"",flat:"",icon:"clear",color:"tertiary",unelevated:"",class:"hideonmobile q-mx-xs",size:"md",onClick:m.remover,style:{float:"right"}},{default:t(()=>[o(x,{anchor:"top left",self:"bottom start"},{default:t(()=>[n(" Remover da fatura #"+f(parseInt(a.dados.venda.numero)||(a.dados.venda.id||"").slice(-6)),1)]),_:1})]),_:1},8,["onClick"])):V("",!0),o(T,{rounded:"",dense:"",flat:"",icon:"edit",color:"primary",unelevated:"",class:"hideonmobile q-mx-xs",size:"md",onClick:m.editar,style:{float:"right"}},null,8,["onClick"]),o(T,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",unelevated:"",class:"hideonmobile q-mx-xs",size:"md",style:{float:"right"}},{default:t(()=>[o(j,null,{default:t(()=>[o(P,{link:"",separator:""},{default:t(()=>[(d(!0),C(D,null,S(a.configImpressaoOrcamento.filter(l=>l.valor),l=>(d(),b(k,{clickable:"",key:l.valor,onClick:E=>e.$imprimir(l.valor,{id:(a.dados.venda||{}).id||"0",Oculto:"0"})},{default:t(()=>[o(c,{avatar:""},{default:t(()=>[o(F,{name:"print"})]),_:1}),o(c,null,{default:t(()=>[o(w,null,{default:t(()=>[n(f(l.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),a.sistemaPai==="optisoul"?(d(!0),C(D,{key:0},S(a.configImpressaoEnvelope,l=>(d(),b(k,{clickable:"",key:l.valor,onClick:E=>e.$imprimir(l.valor,(a.dados.venda||{}).id||"0")},{default:t(()=>[o(c,{avatar:""},{default:t(()=>[o(F,{name:"print"})]),_:1}),o(c,null,{default:t(()=>[o(w,null,{default:t(()=>[n(f(l.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)):V("",!0)]),_:1})]),_:1})]),_:1}),o(T,{rounded:"",dense:"",flat:"",icon:"more_vert",color:"tertiary",unelevated:"",class:"q-mx-xs",size:"md",style:{float:"right"}},{default:t(()=>[o(j,null,{default:t(()=>[A((d(),b(P,{link:"",separator:""},{default:t(()=>[e.$utils.mapearStatus(a.dados.venda).permiteNota?(d(),C(D,{key:0},[A((d(),b(k,{clickable:"",onClick:i[2]||(i[2]=l=>e.emitirNFeV2({idVenda:a.dados.venda.id},1,"Venda"))},{default:t(()=>[o(c,{avatar:""},{default:t(()=>[o(F,{name:"account_balance"})]),_:1}),o(c,null,{default:t(()=>[n("NFe de Sa\xEDda/Venda")]),_:1})]),_:1})),[[O]]),A((d(),b(k,{clickable:"",onClick:i[3]||(i[3]=l=>e.emitirNFeV2({idVenda:a.dados.venda.id},0,"Devolu\xE7\xE3o"))},{default:t(()=>[o(c,{avatar:""},{default:t(()=>[o(F,{name:"account_balance"})]),_:1}),o(c,null,{default:t(()=>[n("NFe de Entrada/Devolu\xE7\xE3o")]),_:1})]),_:1})),[[O]]),A((d(),b(k,{clickable:"",onClick:i[4]||(i[4]=l=>e.emitirNFeV2({idVenda:a.dados.venda.id},1,"Remessa"))},{default:t(()=>[o(c,{avatar:""},{default:t(()=>[o(F,{name:"account_balance"})]),_:1}),o(c,null,{default:t(()=>[n("NFe de Remessa")]),_:1})]),_:1})),[[O]])],64)):V("",!0),m.podeMigrarFatura?(d(),C(D,{key:1},[(d(!0),C(D,null,S(a.faturasAbertas.filter(l=>l.id!==a.dados.venda.idFatura),l=>A((d(),b(k,{key:l.id,onClick:E=>m.migrarFatura(l)},{default:t(()=>[o(c,{avatar:""},{default:t(()=>[o(F,{name:"mdi-folder-move"})]),_:1}),o(c,null,{default:t(()=>[n(f("Migrar para fatura #"+(l.numero||l.id.slice(-6))),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[O]])),128)),A((d(),b(k,{onClick:i[5]||(i[5]=l=>m.migrarFatura())},{default:t(()=>[o(c,{avatar:""},{default:t(()=>[o(F,{name:"mdi-folder-move"})]),_:1}),o(c,null,{default:t(()=>[n("Migrar para nova fatura")]),_:1})]),_:1})),[[O]])],64)):V("",!0),o(k,{clickable:"",onClick:i[6]||(i[6]=l=>e.$refs.modalHistoricoStatus.mostrar({idDocumento:a.dados.venda.id}))},{default:t(()=>[o(c,{avatar:""},{default:t(()=>[o(F,{name:"history"})]),_:1}),o(c,null,{default:t(()=>[n("Hist\xF3rico do Status")]),_:1})]),_:1}),s.resetarEnvio&&a.dados.venda.rotaJson&&a.dados.venda.rotaJson.length>0?(d(),b(k,{key:2,clickable:"",onClick:i[7]||(i[7]=l=>s.resetarEnvio(a.dados.venda))},{default:t(()=>[o(c,{avatar:""},{default:t(()=>[o(F,{name:"restart_alt"})]),_:1}),o(c,null,{default:t(()=>[n("Resetar Envio")]),_:1})]),_:1})):V("",!0)]),_:1})),[[O]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):V("",!0),a.detalhesVisivel?(d(),b(h,{key:1,class:"q-col-gutter-md q-py-md"},{default:t(()=>[g("div",fe,[a.detalhesVisivel?(d(),b(P,{key:0},{default:t(()=>[(d(!0),C(D,null,S(a.dados.carrinho,l=>(d(),b(k,{class:"fullWidth",key:l.id},{default:t(()=>[o(c,{avatar:"",class:"w120"},{default:t(()=>[o(w,null,{default:t(()=>[n(f(l.quantidade)+"x",1)]),_:2},1024)]),_:2},1024),o(c,null,{default:t(()=>[o(w,null,{default:t(()=>[n(f(l.descricaoItem),1)]),_:2},1024)]),_:2},1024),o(c,{side:"",top:""},{default:t(()=>[o(w,null,{default:t(()=>[n(f(e.$filters.numero(l.total,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(d(!0),C(D,null,S(a.dados.customs,l=>(d(),b(k,{class:"fullWidth",key:l.documento.id},{default:t(()=>[o(c,{avatar:"",class:"w120"},{default:t(()=>[o(w,null,{default:t(()=>[n(f(l.documento.numero)+"x ",1)]),_:2},1024)]),_:2},1024),o(c,null,{default:t(()=>[o(w,null,{default:t(()=>[n(f(l.documento.descricao),1)]),_:2},1024)]),_:2},1024),o(c,{side:"",top:""},{default:t(()=>[o(w,null,{default:t(()=>[n(f(e.$filters.numero(l.documento.totalDocumento,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(d(!0),C(D,null,S(a.dados.oss,l=>(d(),b(k,{class:"fullWidth",key:l.documento.id},{default:t(()=>[o(c,{avatar:"",class:"w120"},{default:t(()=>[o(w,null,{default:t(()=>[l.documento.status!=="Or\xE7amento"?(d(),b(p,{key:0,class:"q-mx-sm",escuro:"",cor:"grey-5",denso:"",round:""},{default:t(()=>[n(f(l.documento.status)+" ",1),o(x,null,{default:t(()=>[n(" OS ")]),_:1})]),_:2},1024)):(d(),b(p,{key:1},{default:t(()=>[n("OS ")]),_:1}))]),_:2},1024)]),_:2},1024),o(c,null,{default:t(()=>[o(w,null,{default:t(()=>[n(f(l.documento.descricao),1)]),_:2},1024)]),_:2},1024),o(c,{right:"",top:""},{default:t(()=>[o(w,null,{default:t(()=>[n(f(e.$filters.numero(l.documento.totalDocumento,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(d(!0),C(D,null,S(a.dados.kits,l=>(d(),b(k,{class:"fullWidth",key:l.documento.id},{default:t(()=>[o(c,{avatar:"",class:"w120"},{default:t(()=>[o(w,null,{default:t(()=>[n(f(a.documentoItemKit[l.documento.id].quantidade)+"x",1)]),_:2},1024)]),_:2},1024),o(c,null,{default:t(()=>[o(w,null,{default:t(()=>[n(f(a.documentoItemKit[l.documento.id].descricaoItem),1)]),_:2},1024)]),_:2},1024),o(c,{side:"",top:""},{default:t(()=>[o(w,null,{default:t(()=>[n(f(e.$filters.numero(a.documentoItemKit[l.documento.id].total,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(d(!0),C(D,null,S(a.dados.envelopes,l=>(d(),b(k,{class:"fullWidth",key:l.id},{default:t(()=>[o(c,{avatar:"",class:"w120"},{default:t(()=>[o(p,{class:"q-mx-sm",escuro:"",cor:"grey-5",denso:"",round:""},{default:t(()=>[n(" #"+f(parseInt(l.numero)||(l.id||"").slice(-6))+" ",1),o(x,null,{default:t(()=>[n(f(l.tipo)+" - "+f(l.descricaoContato),1)]),_:2},1024)]),_:2},1024),l.status!=="Or\xE7amento"?(d(),b(p,{key:0,class:"q-mx-sm",escuro:"",cor:"grey-5",denso:"",round:""},{default:t(()=>[n(f(l.status),1)]),_:2},1024)):V("",!0)]),_:2},1024),o(c,null,{default:t(()=>[o(w,null,{default:t(()=>[n(f(m.descricaoEnvelope(l.id)),1)]),_:2},1024)]),_:2},1024),o(c,{right:"",top:""},{default:t(()=>[o(w,null,{default:t(()=>[n(f(e.$filters.numero(l.totalDocumento,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):V("",!0)]),g("div",pe,[g("div",ve,[o(J,{class:"q-mx-none q-mt-sm q-px-none"},{default:t(()=>[o(F,{name:"business"}),n(" "+f(a.dados.venda.descricaoEmpresa),1)]),_:1}),a.dados.venda.observacao?(d(),C("p",he,[g("small",ge,[n(f(a.dados.venda.observacao)+" ",1),be,n(" "+f(a.dados.venda.observacaoInterna),1)])])):V("",!0),g("div",_e,[o(y,{idVenda:a.dados.venda.id},null,8,["idVenda"])])])]),g("div",ye,[a.dados.venda.observacaoFaturamento?(d(),C("div",Ee,[o(J,{class:"q-mx-none q-mt-sm q-px-none"},{default:t(()=>[n(" Faturamento ")]),_:1}),g("p",Ce,[g("small",we,f(a.dados.venda.observacaoFaturamento),1)])])):V("",!0),a.dados.venda.totalDesconto?(d(),C("div",Ve,[g("dl",ke,[g("dd",null,[De,g("span",Fe,[g("strong",null,f(e.$filters.numero(a.dados.venda.totalDesconto,2)),1)])])])])):V("",!0)])]),_:1})):V("",!0),o(W),o(_,{ref:"vendaModal",onExecutar:m.executar},null,8,["onExecutar"]),o(u,{ref:"modalHistoricoStatus"},null,512)])}var qe=Q(re,[["render",Ie]]);const M=new Date(new Date().toDateString()),N={config:{usaExpedicao:!1,tokenRoutEasy:""},permissao:{acessarTodosVendedoresDigitadores:!1,acessarOutrasEmpresas:!1},filtro:{idEmpresa:null,idsEmpresa:[],idContatoVendedorDigitador:null,termoBusca:"",status:"",statusEnvio:"",descricaoContato:"",totalDocumento:0,tipoData:"dataFaturado",periodoIni:M,periodoFim:M},paginacao:{atual:1,maximo:1,total:1,limite:25}},xe={components:{Lista:oe,VendaCardLista:qe,VendaModal:G},computed:{tituloPeriodo(){return this.filtro.tipoData==="dataFaturado"?"Faturado em":this.filtro.tipoData==="dataEmissao"?"Emitido em":this.filtro.tipoData==="dataFinalizacao"?"Finalizado em":""}},data(){return{documentos:[],filtro:$utils.clonar(N.filtro),config:$utils.clonar(N.config),permissao:$utils.clonar(N.permissao),paginacao:$utils.clonar(N.paginacao),empresas:[],vendedoresDigitadores:[],tiposData:[{label:"Data Faturado",value:"dataFaturado"},{label:"Data Emiss\xE3o",value:"dataEmissao"},{label:"Data Finaliza\xE7\xE3o",value:"dataFinalizacao"}],opcoesStatusEnvio:[{rotulo:"Enviados"},{rotulo:"N\xE3o Enviados"}],tabs:[],tabSelecionada:{},mostrarDetalhes:!1}},methods:{async sendRouteEasyAll(){try{let e;$q.loading.show(),e=await this.filtrar(),await this.sendRouteEasy(e),$q.notify({message:"Sincronismo efetuado com sucesso!",type:"positive"})}catch(e){console.log(e)}finally{$q.loading.hide()}},async sendRouteEasy(e){var m;$q.loading.show();let i=e.data,s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDIwYWQ2YzRiNTYzMWEyMmQwYTZhZSIsInRpbWVzdGFtcCI6MTYzMjQ5NTY1ODE1OH0.Nodh7i5OjMak8PQaavO8yComhN6BJa7bPs37SKfe4rE",r="https://company.routeasy.com.br",a={deliveries:[]};try{for(let p=0;p<i.length;p++){const v=i[p],h=await $db.contatoEndereco.le({idContato:v.idContato});if(h.length===0){let y=`N\xE3o foi possivel envia venda #ID[${v.id}], pois n\xE3o foi vinculado um endere\xE7o.`;$q.notify(y),console.log(y)}if(v&&v.idContato&&h.length>0){let y=await $db.contato.le({id:v.idContato}),_=await $db.contatoTelefone.le({idContato:y.id}),u=await $db.hibrido.lista({table:"documentoFiscalEletronico",where:{idDocumento:v.idFatura}}),l=$utils.dataAtual();const E=h[0],I=await this.calcularPesoECubicoTotal(v.id);let z=I.pesoTotal||0,R=I.metroCubicoTotal||0,H=u.length>0?u[0].nNF:"",He=$filters.numero(v.totalDocumento,2),Y=parseInt(v.totalDocumento),K={code:v.idContato,name:v.descricaoContato,site:v.numeroDocumentoEmpresa,additional_info_2:v.numeroDocumentoEmpresa,order_number:v.numero+" "+v.numeroDocumentoEmpresa,invoice_number:H,loads:[z,R,Y],email:y.email||"",customer_profile:y.id,phone:_.length>0?_[0].telefone:"",address:{route:E.logradouro,street_number:E.numero?E.numero:"",neighborhood:E.bairro,city:E.municipio,state:E.uf,postal_code:E.cep,country:E.pais}};a.deliveries.push(K)}}if(a.deliveries.length>0){const p=await ee({method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},baseURL:r,url:`/group?api_key=${s}`,validateStatus:v=>v>=200&&v<=500,timeout:3e4,data:a});for(const v of p.data.deliveries){const h=i.find(E=>E.numeroDocumentoEmpresa===v.order_number.split(" ")[1]&&E.numero===parseInt(v.order_number.split(" ")[0]));if(!h){$q.notify(`Venda N\xBA ${v.order_number} / ${v.site} n\xE3o encontrada!`);continue}const y=(await $db.hibrido.lista({table:"documento",where:{id:h.id}}))[0],_=$utils.clonarV2(y);_.rotaJson=JSON.stringify({envio:v}),_.rotaStatus="Enviado";let l=$utils.dataAtual().split("T")[0].split("-");_.rotaNome=`Rota do dia ${l[2]}/${l[1]}/${l[0]}`,await $db.documento.grava({atual:_,original:y});try{(m=this.$refs[_.id])==null||m.atualizar()}catch(E){console.log(E.message)}}}else $q.notify("Rota(s) j\xE1 enviadas ou nao tem informa\xE7\xF5es suficientes.")}catch(p){$q.notify(p.message),console.log("[ERROR][SINCRONSMO][ROUTEASY] => ",p)}finally{if(a.deliveries.length>0){let p=a.deliveries.length>1?"s":"";$q.notify({message:`(${a.deliveries.length}) Rota${p} enviada${p} com sucesso!`,type:"positive"})}$q.loading.hide()}},async getGeoCordenadas(e){const i="AIzaSyDXlwwrHCnEP50L1rFQvrYq9XAzpU_hZvA";return(await(await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${e.municipio}+${e.uf}+${e.logradouro}+${e.cep}&key=${i}`,{method:"GET"})).json()).results[0].geometry},async calcularPesoECubicoTotal(e){if(!e)return!1;const i={};let s=0,r=0,a=0,m=0,p=0;const v=await $db.hibrido.lista({table:"documentoItem",where:{idDocumento:e}});for(const h of v)if(h.operacaoFator===-1){if(h.idItem&&!i[h.idItem]){const y=await $erp().item.get(h.idItem);y&&(i[h.idItem]=y)}s+=(i[h.idItem].peso||0)*(h.quantidade||0),r+=(i[h.idItem].pesoBruto||0)*(h.quantidade||0),m=(i[h.idItem].altura||0)*(i[h.idItem].largura||0)*i[h.idItem].comprimento||0,p=h.quantidade||0,a+=m>0?m*p:0}return s=$utils.arredondar(s,4),r=$utils.arredondar(r,4),a=$utils.arredondar(a,4),{pesoTotal:s,pesoBrutoTotal:r,metroCubicoTotal:a}},async importarPlanilhaRetorno(e){var i,s;try{const a=await(h=>new Promise((y,_)=>{const u=new FileReader;u.readAsBinaryString(h),u.onload=()=>y(u.result),u.onerror=l=>_(l)}))(e[0]);let m=L.read(a,{type:"binary"}),p=L.utils.sheet_to_json(m.Sheets[Object.keys(m.Sheets)[0]],{header:1});const v=p[0];for(let h=1;h<p.length;h++){const y=p[h];let _,u,l,E,I,z,R;_=$utils.convertArrToObj(v,y),u=_==null?void 0:_.codigoDoCliente,l=_==null?void 0:_.numeroPedido.split(" ")[0],u&&l&&(R=await $db.hibrido.lista({table:"documento",where:{tipo:"Venda",idContato:u}}),E=R.find(H=>Number(H.numero)===Number(l)),E&&(I=$utils.clonarV2(E),z=(s=JSON.parse((i=I.rotaJson)!=null?i:null))!=null?s:{},z.recebido=_,I.rotaJson=JSON.stringify(z),I.rotaStatus="Enviado",I.rotaNome=y[0],I.rotaSequencia=y[4],I.rotaData=$utils.dataAtual(),await $db.documento.grava({original:E,atual:I})))}await this.atualizar(),this.$q.notify({type:"positive",message:"Importa\xE7\xE3o realizada com sucesso"})}catch(r){r.name&&r.name==="ErroValidacao"?this.$q.notifyError(r.message,r):this.$q.notifyError("Ocorreu erro ao importar roteriza\xE7\xE3o xlsx",r)}},acessarPainel(){let e="https://company.routeasy.com.br/#!/routings/create";window.open(e,"_blank").focus()},montarObjImportacaoRE(e,i){let s={};for(let r=1;r<e.length;r++){const a=$utils.removerCaracteresEspeciais(e[r]).split(" ");for(let p=0;p<a.length;p++)a[p]=a[p].charAt(0).toUpperCase()+a[p].slice(1);const m=a.join("");s[m]=i[r]}return s},adicionarVenda(){this.$refs.modalVenda.mostrar()},alternarMostrarDetalhes(){var e;this.mostrarDetalhes=!this.mostrarDetalhes;for(const i of this.documentos)"detalhesVisivel"in((e=this.$refs[i.id])==null?void 0:e[0])&&(this.$refs[i.id][0].detalhesVisivel=this.mostrarDetalhes)},async abrirModalContatos(){let e;e=await $g.promptContato.show({filtro:{ativo:!0}}),e!=null&&e.id&&(this.filtro.descricaoContato=e.nome)},async filtrar(){return this.setStatus(),await $db.venda.lerV2({filtro:$utils.clonar(this.filtro),limit:this.paginacao.limite,page:this.paginacao.atual,sort:["dataHoraFinalizado","dataHoraEmissao"],dir:["desc","desc"]})},async atualizar(){try{$q.loading.show();let e;this.mostrarDetalhes&&this.alternarMostrarDetalhes(),console.time("teste"),e=await this.filtrar(),console.timeEnd("teste"),console.log("resultado: ",e),this.paginacao.total=e.total,this.paginacao.maximo=e.totalPages,this.documentos=e.data,this.setTab()}catch(e){console.error(e)}finally{$q.loading.hide()}},limparFiltro(){this.filtro=$utils.clonar(N.filtro)},async setStatus(){let e="";this.tabSelecionada.valor!=="Todas"&&(e=this.tabSelecionada.valor,~e.indexOf(",")&&(e=e.split(","))),this.filtro.status=e},async setConfig(){var s,r;const e=await $db.configuracoes.le({nome:"vendas.usaExpedicao"}),i=await $db.configuracoes.le({nome:"integracao.routeasy"});this.config={usaExpedicao:((s=e==null?void 0:e[0])==null?void 0:s.valor)==="1",tokenRoutEasy:(r=i==null?void 0:i[0])==null?void 0:r.valor}},async setPermissao(){this.permissao={acessarTodosVendedoresDigitadores:await $db.permissao.objeto("Diretiva_RelatorioVenda_VerTodos"),acessarOutrasEmpresas:await $db.permissao.objeto("Diretiva_Venda/Fatura_OutrasLojas_VerTodos")}},setTab(){const e={value:"Finalizado,Faturado,Entregue",valor:"Finalizado,Faturado,Entregue"},i=this.documentos[0];if(i!=null&&i.status){const s=this.tabs.find(r=>~r.value.indexOf(i.status));e.value=s.value,e.valor=s.value}this.tabSelecionada=e},setTabs(){const e=[{rotulo:"Or\xE7amento",value:"Or\xE7amento"},{rotulo:"Ag. Estoque",value:"Aguardando Estoque"},{rotulo:"Ag. Financeiro",value:"Aguardando Financeiro"},{rotulo:"Ag. Libera\xE7\xE3o",value:"Aguardando Libera\xE7\xE3o"},{rotulo:"Ag. Pagamento",value:"Aguardando Pagamento,Aguardando Faturamento"},{rotulo:"Finalizado",value:"Finalizado,Faturado,Entregue"},{rotulo:"N\xE3o Aprovado",value:"N\xE3o Aprovado"},{rotulo:"Todas",value:""}];this.config.usaExpedicao&&e.splice(4,0,{rotulo:"Ag. Log\xEDstica",value:"Aguardando Confer\xEAncia,Aguardando Corre\xE7\xE3o,Aguardando Embalagem,Aguardando Entrega,Aguardando Separa\xE7\xE3o,Em Confer\xEAncia,Em Embalagem,Em Separa\xE7\xE3o"}),this.tabs=e,this.setTab()},async setVendedoresDigitadores(){var s,r;let e=[],i;if(!this.permissao.acessarTodosVendedoresDigitadores){const a=JSON.parse(localStorage.getItem("usuario"));let m="";a!=null&&a.numeroDocumentoNacional&&(i=await $erp().contato.where({numeroDocumentoNacional:a.numeroDocumentoNacional}).toArray(),(s=i[0])!=null&&s.id&&(e.push({label:i[0].nome,value:i[0].id}),m=(r=i[0])==null?void 0:r.id)),this.vendedoresDigitadores=e,this.filtro.idContatoVendedorDigitador=m;return}i=await $db.crm.leOnlineVendedoresDigitadores({entregueInicio:M,entregueFim:M});for(const a of i)!a.codigo||e.push({label:a.nome,value:a.id});this.vendedoresDigitadores=e},async setEmpresas(){const e=[];let i;if(!this.permissao.acessarOutrasEmpresas){i=await $db.contato.ler({filtros:{ativo:!0,empresas:!0}}),i=i.data;for(const s of i)e.push({label:s.nome,value:s.id})}if(this.permissao.acessarOutrasEmpresas){i=await $db.empresa.ler({filtro:{ativo:!0}});for(const s of i)e.push({label:s.nome,value:s.idContato})}this.empresas=e,this.filtro.idsEmpresa=e.map(s=>s.value)},mostrarVendaRota(){var i;const e=(i=this.$route.params)==null?void 0:i.id;!/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(e)||(this.filtro.termoBusca=e)}},async created(){await this.setConfig(),this.setTabs(),await this.setPermissao(),await this.setVendedoresDigitadores(),await this.setEmpresas(),await this.mostrarVendaRota(),await this.atualizar()}},Ae={class:"row no-wrap q-pa-md"},Se={class:"column"},Oe=g("div",{class:"text-h6 q-mb-md"},"Sincronismo RoutEasy",-1),ze={class:"column items-center",style:{"margin-bottom":"0px"}},Te=g("div",{class:"text-h6 q-mb-md"},"Importar Roteriza\xE7\xE3o",-1),Ne={class:"q-mt-sm"},Pe=g("br",null,null,-1),Re={class:"col-12 text-body1 text-dark"};function Me(e,i,s,r,a,m){const p=q("campo"),v=q("row"),h=q("VendaCardLista"),y=q("Lista"),_=q("VendaModal");return d(),C("div",null,[o(y,{titulo:"Vendas",icone:"mdi-cart-arrow-up",lista:a.documentos,onFiltro_change:m.atualizar,onLimparFiltros_click:m.limparFiltro,onCriar_click:m.adicionarVenda,onAbrirTodosPreview:m.alternarMostrarDetalhes,paginacao:a.paginacao,tabs:a.tabs,tabSelecionada:a.tabSelecionada,buscaCampo:a.filtro.termoBusca,"onUpdate:buscaCampo":i[11]||(i[11]=u=>a.filtro.termoBusca=u),exportarXLSXVisible:!1,permissaoExtras:!1,checkboxVisible:!1,disableRemove:!0,showAdd:!1,permissaoExtrasV2:!!a.config.tokenRoutEasy},{menuExtras:t(()=>[o(j,null,{default:t(()=>[g("div",Ae,[g("div",Se,[Oe,o(P,{link:"","no-border":"",separator:""},{default:t(()=>[typeof m.sendRouteEasyAll=="function"?A((d(),b(k,{key:0,clickable:"",onClick:i[0]||(i[0]=u=>m.sendRouteEasyAll())},{default:t(()=>[o(c,{avatar:""},{default:t(()=>[o(F,{name:"upgrade"})]),_:1}),o(c,null,{default:t(()=>[n("Enviar")]),_:1})]),_:1})),[[O]]):V("",!0),typeof m.acessarPainel=="function"?A((d(),b(k,{key:1,clickable:"",onClick:i[1]||(i[1]=u=>m.acessarPainel())},{default:t(()=>[o(c,{avatar:""},{default:t(()=>[o(F,{name:"insights"})]),_:1}),o(c,null,{default:t(()=>[n("Acessar Painel")]),_:1})]),_:1})),[[O]]):V("",!0)]),_:1})]),o(W,{vertical:"",inset:"",class:"q-mx-lg"}),g("div",ze,[Te,g("div",Ne,[o(ae,{style:{width:"100%"},label:"Selecione o arquivo (.xlsx)","hide-upload-btn":"","auto-upload":"",factory:m.importarPlanilhaRetorno},null,8,["factory"])])])])]),_:1})]),filtroCampos:t(()=>[o(v,{class:"q-col-gutter-md q-mt-md",style:{"margin-top":"-10px"}},{default:t(()=>[o(p,{modelValue:a.filtro.descricaoContato,"onUpdate:modelValue":i[2]||(i[2]=u=>a.filtro.descricaoContato=u),class:"col-md-12",style:{"padding-top":"0px"},debounce:500,before:[{icon:"search",handler:m.abrirModalContatos}],rotulo:"Por cliente ou respons\xE1vel",dense:""},null,8,["modelValue","before"]),a.vendedoresDigitadores.length?(d(),b(U,{key:0,modelValue:a.filtro.idContatoVendedorDigitador,"onUpdate:modelValue":i[3]||(i[3]=u=>a.filtro.idContatoVendedorDigitador=u),options:a.vendedoresDigitadores,clearable:"","emit-value":"","map-options":"",label:"Vendedor / Digitador"},null,8,["modelValue","options"])):V("",!0),Pe,o(p,{rotulo:"Valor total maior que",modelValue:a.filtro.totalDocumento,"onUpdate:modelValue":i[4]||(i[4]=u=>a.filtro.totalDocumento=u),before:[{icon:"money"}],tipo:"decimal",decimals:"4",zerosDireita:"2",dense:""},null,8,["modelValue"])]),_:1}),a.empresas.length?(d(),b(U,{key:0,modelValue:a.filtro.idEmpresa,"onUpdate:modelValue":i[5]||(i[5]=u=>a.filtro.idEmpresa=u),options:a.empresas,clearable:"","emit-value":"","map-options":"",label:"Por empresa"},null,8,["modelValue","options"])):V("",!0),a.config.tokenRoutEasy&&a.config.tokenRoutEasy.length>3?(d(),b(v,{key:1,class:"q-col-gutter-md q-mt-md"},{default:t(()=>[o(p,{tipo:"seletor",dense:"",modelValue:a.filtro.statusEnvio,"onUpdate:modelValue":i[6]||(i[6]=u=>a.filtro.statusEnvio=u),options:a.opcoesStatusEnvio.map(u=>({label:u.rotulo,value:u.rotulo})),clearable:"",rotulo:"Status Envio"},null,8,["modelValue","options"])]),_:1})):V("",!0),o(v,{class:"q-col-gutter-md q-mt-md q-mb-xl"},{default:t(()=>[o(U,{modelValue:a.filtro.tipoData,"onUpdate:modelValue":i[7]||(i[7]=u=>a.filtro.tipoData=u),options:a.tiposData,"emit-value":"","map-options":"",label:"Selecione o tipo de data"},null,8,["modelValue","options"]),g("span",Re,f(m.tituloPeriodo),1),o(p,{modelValue:a.filtro.periodoIni,"onUpdate:modelValue":i[8]||(i[8]=u=>a.filtro.periodoIni=u),tipo:"data",class:"no-shadow full-width",rotulo:"De",col:"12",after:[{icon:"mdi-close-circle",handler(){a.filtro.periodoIni=""}}],dense:""},null,8,["modelValue","after"]),o(p,{modelValue:a.filtro.periodoFim,"onUpdate:modelValue":i[9]||(i[9]=u=>a.filtro.periodoFim=u),tipo:"data",class:"no-shadow full-width",rotulo:"at\xE9",col:"12",after:[{icon:"mdi-close-circle",handler(){a.filtro.periodoFim=""}}],dense:""},null,8,["modelValue","after"])]),_:1}),o(p,{modelValue:a.paginacao.limite,"onUpdate:modelValue":i[10]||(i[10]=u=>a.paginacao.limite=u),min:"1",rotulo:"Quantidade por p\xE1gina",tipo:"quantidade",dense:""},null,8,["modelValue"])]),itemLista:t(()=>[o(P,{class:"rounded-borders"},{default:t(()=>[(d(!0),C(D,null,S(a.documentos,u=>(d(),C("div",{key:u.id,class:"itemHover fullWidth q-px-sm"},[o(h,{fatura:u.fatura,id:u.id,ref_for:!0,ref:u.id,class:"q-mb-md"},null,8,["fatura","id"])]))),128))]),_:1})]),_:1},8,["lista","onFiltro_change","onLimparFiltros_click","onCriar_click","onAbrirTodosPreview","paginacao","tabs","tabSelecionada","buscaCampo","permissaoExtrasV2"]),o(_,{ref:"modalVenda",continueMesmaTela:!1},null,512)])}var Ke=Q(xe,[["render",Me]]);export{Ke as default};
