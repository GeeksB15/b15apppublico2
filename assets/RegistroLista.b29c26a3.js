import{_ as X,$,Z as tt,bh as et,Y as ot,bi as G,bj as P,bk as U,aw as M,bl as at,bm as D,r as _,o as d,p as h,f as o,w as i,M as it,I as st,G as lt,h as L,H as T,Q as y,N as Q,i as A,k as p,t as f,d as g,e as m,J as rt,z as K,C as c,j as S,m as R,P as N,S as x,T as b,U as q,l as H,F as z,u as B,K as nt,D as Y,as as dt,be as Z}from"./index.2cdadbf3.js";import{l as ct}from"./listaV2.f9a3d45e.js";import{C as ut}from"./Campo.7a1381fb.js";import{P as mt}from"./PromptContatoV2.00e6e69c.js";import{e as ft}from"./emitirNFe.35117289.js";import{n as ht}from"./nfePrincipal.2845e7b2.js";import"./xlsx.7726b760.js";import"./compactarValidarNFe.8e1d2e37.js";import"./obterItens.e94ccafc.js";import"./codigosANP.a6c1a264.js";const pt={components:{BadgeCopiarUid:$,Badge:tt,Campo:ut,PromptItemV2:et,Avatar:ot,PromptContatoV2:mt},data(){return{cliente:{},emitente:{},diaVencimento:"",operacaoFator:-1,opcoesFator:[{rotulo:"Sa\xEDda",valor:-1},{rotulo:"Entrada",valor:1}],documentoAnterior:{},documentoItensAnterior:[],documento:{id:G(),dataHoraEmissao:P(),numero:"",descricaoContato:"",idContato:"",descricaoEmpresa:"",idEmpresa:"",status:"Digita\xE7\xE3o",tipo:"Registro",operacao:this.operacao,idContatoDigitador:null},documentoItens:[],totalItens:0,qtdItens:0,visibilidade:{modal:!1},itensModal:!1,carregando:!0,contatosModal:!1,emitenteModal:!1,empresas:[],configImpressaoRegistro:[],operacao:"",somenteLeitura:!1,ocultarValores:!0,modalItemSemEstoque:{},item:{}}},emits:["atualizar","tituloPagina"],methods:{async atualizar(a){var t;if(this.modalItemSemEstoque={},a){this.documentoAnterior=await $db.hibrido.le({table:"documento",id:a}),this.documento=U(this.documentoAnterior),this.documentoItensAnterior=await $db.hibrido.lista({table:"documentoItem",where:{idDocumento:a}});for(let n=0;n<this.documentoItensAnterior.length;n++)this.documentoItensAnterior[n];this.documentoItens=U(this.documentoItensAnterior),this.cliente.id=this.documento.idContato,this.cliente.nome=this.documento.descricaoContato,this.emitente.id=this.documento.idEmpresa,this.emitente.nome=this.documento.descricaoEmpresa,this.operacaoFator=null}else if(this.limparCampos(),this.empresas=await M.empresa.le(),this.empresas.length===1)this.emitente=U(this.empresas[0]),this.documento.idEmpresa=this.emitente.idContato,this.documento.descricaoEmpresa=this.emitente.nome;else{const n=await $g.promptContato.show({filtro:{ativo:!0,empresas:!0},placeholder:"Selecione"});if(!n){$q.notify({type:"negative",message:"Selecione a empresa"}),this.visibilidade.modal=!1;return}this.emitente=U(n),this.documento.idEmpresa=this.emitente.id,this.documento.descricaoEmpresa=this.emitente.nome}for(const n of this.documentoItens)this.item[n.idItem]=(t=await $db.item.ler({filtros:{id:n.idItem}}))==null?void 0:t.data[0],this.operacaoFator||(this.operacaoFator=n.operacaoFator);this.somarValorTotal(),this.configuraImpressaoContrato(this.documento.idEmpresa)},async mostrar(){await at(500),this.carregando=!1},async configuraImpressaoContrato(a){const t=await M.configuracoes.porNome("impressao.contrato",a);this.configImpressaoContrato=t},fechar(){this.operacaoFator=-1,this.carregando=!0,this.$router.replace({params:{id:""}})},limparCampos(){this.documentoAnterior={},this.documento={id:G(),dataHoraEmissao:P(),numero:"",descricaoContato:"",idContato:"",descricaoEmpresa:"",idEmpresa:"",status:"Digita\xE7\xE3o",tipo:"Registro",operacao:this.operacao},this.documentoItensAnterior=[],this.documentoItens=[],this.cliente.id="",this.cliente.nome="",this.emitente.id="",this.emitente.nome="",this.diaVencimento=""},capitalizeFirstLetter(a){return a.charAt(0).toUpperCase()+a.slice(1)},async abrirModal(a=""){let t={},n=[];a?n=this.documentoItens.filter(u=>u.idItem===a):n=this.documentoItens;for(const u of n)t[u.idItem]={item:await $db.hibrido.le({table:"item",id:u.idItem}),quantidade:u.quantidade},t[u.idItem].item.novoValorVenda=u.valorItem;this.$refs.promptItem.itensSelecionados=t,this.$refs.promptItem.termo=a,this.$refs.promptItem.atualizar(),this.itensModal=!0},recalcularTotal(a){a.subTotal=D(a.quantidade*a.valorItem),a.total=D(a.quantidade*a.valorItem),this.somarValorTotal()},async selecionarCliente(){if(this.documento.status==="Digita\xE7\xE3o"){const a=await $g.promptContato.show({filtro:{ativo:!0},placeholder:"Selecione"});this.cliente=U(a),this.contatosModal=!1,this.documento.idContato=this.cliente.id,this.documento.descricaoContato=this.cliente.nome}},selecionarItens:async function(a){for(const t in a){const n=a[t].item||{},u=a[t].quantidade||0;this.item[t]=n;let e=this.documentoItens.find(l=>l.idItem===t);e?(e.quantidade=u,e.quantidadeRealizado=u,e.total=D(u*e.valorItem),e.subTotal=D(u*e.valorItem)):this.documentoItens.push({dataHoraEmissao:P(),descricaoItem:n.descricao,id:G(),idDocumento:this.documento.id,idItem:n.id,operacao:this.operacao,quantidade:u,unidade:n.unidade,quantidadeRealizado:u,tipoItem:n.tipo,total:D(u*n.valorVenda),subTotal:D(u*n.valorVenda),valorItem:n.valorVenda,operacaoFator:this.operacaoFator})}this.somarValorTotal()},somarValorTotal(){this.totalItens=this.documentoItens.reduce((a,t)=>a+=t.total,0),this.qtdItens=this.documentoItens.reduce((a,t)=>a+=t.quantidade,0)},excluirItem(a){this.documentoItens=this.documentoItens.filter(t=>t.id!==a),this.somarValorTotal()},async gravar(a=!1){if(!this.cliente.id){this.$q.notifyAlert("Selecione um Cliente");return}if(!this.emitente.id){this.$q.notifyAlert("Selecione um Emitente");return}if(!this.totalItens||!this.qtdItens){this.$q.notifyAlert(`Adicione alguns itens ao ${this.tituloPagina}`);return}try{if(!this.documento.codigoContatoDigitador){const t=await this.obterContatoUsuario();this.documento.idContatoDigitador=t.id,this.documento.codigoContatoDigitador=t.codigoContato}this.documento.totalDocumento=this.totalItens,this.documento.subTotal=this.totalItens,await M.registro.grava({documentoAnterior:this.documentoAnterior,documento:this.documento,documentoItensAnterior:this.documentoItensAnterior,documentoItens:this.documentoItens}),this.visibilidade.modal=a,this.atualizar(this.documento.id),this.$emit("atualizar")}catch(t){this.$q.notifyError("Erro ao salvar",t)}},async cancelar(){try{$q.loading.show(),this.documento.status="Cancelado",this.documento.dataHoraFinalizado=P(),await this.gravar(!0),this.visibilidade.modal=!1}catch(a){console.error(a)}finally{$q.loading.hide()}},async ativar(){try{$q.loading.show(),this.documento.status="Digita\xE7\xE3o",this.documento.dataHoraFinalizado="",this.documentoItens.forEach(a=>{a.status="Digita\xE7\xE3o",a.dataHoraFinalizado=""}),await this.gravar(!0),$q.notifyPositive(`${this.tituloPagina} Em Digita\xE7\xE3o`)}catch(a){console.error(a)}finally{$q.loading.hide()}},async finalizar(){var a,t,n;try{$q.loading.show();const u=P(),l=(await $db.configuracoes.porNome("vendas.checaestoque",this.emitente.id)).find(I=>parseInt(I.valor)===1)&&this.operacaoFator===-1;this.modalItemSemEstoque={};for(let I of this.documentoItens){if(l){const w=(t=(a=(await $db.estoqueSaldoProdutoEmpresa.leEstoquePorEmpresa(I.idItem,this.emitente.id))[0])==null?void 0:a.estoquePorLote)==null?void 0:t.find(k=>k.tipoEstoque==="Dispon\xEDvel");w&&!(w.saldo>0)&&(this.modalItemSemEstoque.itens||(this.modalItemSemEstoque.itens=[]),this.modalItemSemEstoque.itens.push({descricao:I.descricaoItem,saldo:w.saldo}))}I.status="Finalizado",I.dataHoraFinalizado=u}if((n=this.modalItemSemEstoque.itens)!=null&&n.length){this.modalItemSemEstoque.visivel=!0;return}this.documento.status="Finalizado",this.documento.dataHoraFinalizado=u,await this.gravar(!0),$q.notifyPositive(`${this.tituloPagina} finalizado`),this.visibilidade.modal=!1}catch(u){console.error(u)}finally{$q.loading.hide()}},async obterContatoUsuario(){const a=JSON.parse(localStorage.getItem("usuario"))||{};let t={};return a.codigoUsuario&&(t=(await $db.hibrido.lista({table:"contato",where:{codigoUsuario:a.codigoUsuario}})).find(n=>n.id)||{}),t},calcularQtdItem(){return this.documentoItens.length},calcularQtdItemBol(){let a=!1;return this.documentoItens.length&&(a=!0),a}},mounted(){this.operacao=this.capitalizeFirstLetter(this.$route.params.operacao),this.documento.operacao=this.operacao},computed:{tituloPagina(){return this.capitalizeFirstLetter(this.$route.params.operacao)}},async created(){const a=await $db.configuracoes.le({nome:`registro.${this.$route.params.operacao}.ocultarvalores`});this.ocultarValores=a.some(n=>Number(n.valor)===1),this.empresas=await M.empresa.le();const t=await this.obterContatoUsuario();this.documento.idContatoDigitador=t.id}},gt={key:0},vt={ref:"form"},bt={class:"col-12 col-md"},_t={class:"col-auto"},It={class:"col"},yt={class:"col-12 col-md"},Ct={class:"col-auto"},qt={class:"col"},kt={class:"col-8"},Vt={class:"col-4"},wt={key:0,class:"col-6 col-md text-right"},xt={key:1,class:"col-6 col-md text-right"},zt={key:2,class:"col-6 col-md text-right"},Et={key:3,class:"col-6 col-md text-right"},Ft={class:"col-2 col-md"},Dt={key:0},St={class:"col-10 col-md-4"},Pt={class:"col-6 col-md text-center row"},Ut={class:"col-2 col-md text-right row"},At={key:0,class:"col-6 col-md text-right"},Mt={key:1,class:"col-6 col-md text-right"},Lt={key:2,class:"col-6 col-md text-right"},Tt={key:3,class:"col-6 col-md text-right"},Qt={class:"col-6 col-md-1 text-right"},Ht={class:"col-2 col-md"},Rt={key:0},Nt={class:"col-6 col-md text-center"},Bt={key:0,class:"col-6 col-md text-right"},Ot={key:1,class:"col-6 col-md text-right"},jt={class:"u-container relative-position"},Jt={class:"layout-padding"},Gt={class:"q-pa-md"},Kt={class:"q-mt-lg text-right"};function Wt(a,t,n,u,e,l){const I=_("badge"),E=_("BadgeCopiarUid"),w=_("avatar"),k=_("campo"),V=_("row"),O=_("PromptItemV2"),j=_("PromptContatoV2");return d(),h(z,null,[o(Y,{modelValue:e.visibilidade.modal,"onUpdate:modelValue":t[9]||(t[9]=r=>e.visibilidade.modal=r),maximized:"",onShow:l.mostrar,onHide:l.fechar},{default:i(()=>[o(it,{class:"bg-light",container:""},{default:i(()=>[o(st,{class:"u-container"},{default:i(()=>[o(lt,null,{default:i(()=>[o(L,null,{default:i(()=>[T(o(y,{dense:"",flat:"",icon:"arrow_back",round:""},null,512),[[Q]]),o(A,null,{default:i(()=>[p(f(l.tituloPagina),1)]),_:1}),e.documento.status==="Digita\xE7\xE3o"?(d(),g(y,{key:0,class:"no-shadow",unelevated:"",color:"white","text-color":"primary",label:"Salvar",onClick:t[0]||(t[0]=r=>l.gravar(!1))})):m("",!0)]),_:1})]),_:1}),o(rt,null,{default:i(()=>[o(L,{class:"q-pa-none q-ma-none q-my-md",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:i(()=>{var r,C;return[o(A,{class:"text-black q-px-none text-body2"},{default:i(()=>[p("Emiss\xE3o: "+f(a.$filters.data(e.documento.dataHoraEmissao))+" ",1),e.documento.dataHoraFinalizado?(d(),h("span",gt,f(e.documento.status)+": "+f(a.$filters.data(e.documento.dataHoraFinalizado)),1)):m("",!0)]),_:1}),o(I,{cor:((r=[{status:"Digita\xE7\xE3o",cor:"positive"},{status:"Cancelado",cor:"negative"},{status:"Finalizado",cor:"tertiary"}].find(s=>s.status===e.documento.status))==null?void 0:r.cor)||"tertiary",class:"q-mx-xs",icone:"flag",escuro:""},{default:i(()=>[p(f(e.documento.status),1)]),_:1},8,["cor"]),o(E,{cor:((C=[{status:"Digita\xE7\xE3o",cor:"positive"},{status:"Cancelado",cor:"negative"},{status:"Finalizado",cor:"tertiary"}].find(s=>s.status===e.documento.status))==null?void 0:C.cor)||"tertiary",id:e.documento.id,numero:(e.documento.numero.toString()||e.documento.id).slice(-8)},null,8,["cor","id","numero"])]}),_:1}),o(K,{class:"bg-white q-pa-md q-mt-md no-shadow"},{default:i(()=>[c("form",vt,[o(V,{class:"q-col-gutter-sm"},{default:i(()=>[c("div",bt,[o(V,null,{default:i(()=>{var r;return[c("div",_t,[o(w,{imagem:((r=e.emitente)==null?void 0:r.imagem)||"",rotulo:e.emitente.nome,tamanho:"30",style:{float:"left"},class:"q-mr-sm"},null,8,["imagem","rotulo"])]),c("div",It,[o(k,{rotulo:"Emitente",somenteLeitura:"",tipo:"texto",class:"col-10",modelValue:e.emitente.nome,"onUpdate:modelValue":t[1]||(t[1]=C=>e.emitente.nome=C)},null,8,["modelValue"])])]}),_:1})]),c("div",yt,[o(V,null,{default:i(()=>{var r;return[c("div",Ct,[o(w,{imagem:((r=e.cliente)==null?void 0:r.imagem)||"",rotulo:e.cliente.nome||"",tamanho:"30",style:{float:"left"},class:"q-mr-sm"},null,8,["imagem","rotulo"])]),c("div",qt,[o(k,{placeholder:"Cliente",rotulo:"Cliente",tipo:"texto",after:[{icon:"search",handler(){l.selecionarCliente()}}],modelValue:e.cliente.nome,"onUpdate:modelValue":t[2]||(t[2]=C=>e.cliente.nome=C),somenteLeitura:""},null,8,["after","modelValue"])])]}),_:1})])]),_:1}),o(V,null,{default:i(()=>[c("div",kt,[o(k,{modelValue:e.documento.observacao,"onUpdate:modelValue":t[3]||(t[3]=r=>e.documento.observacao=r),rotulo:"Observa\xE7\xE3o",tipo:"texto"},null,8,["modelValue"])]),c("div",Vt,[o(k,{somenteLeitura:e.somenteLeitura||l.calcularQtdItemBol(),placeholder:"Fator Opera\xE7\xE3o",rotulo:"Fator Opera\xE7\xE3o",modelValue:e.operacaoFator,"onUpdate:modelValue":t[4]||(t[4]=r=>e.operacaoFator=r),opcoes:e.opcoesFator,tipo:"seletor"},null,8,["somenteLeitura","modelValue","opcoes"])])]),_:1})],512)]),_:1}),o(K,{class:"bg-white q-pa-md q-mt-md no-shadow"},{default:i(()=>[o(L,{class:"q-pa-none q-ma-none q-mb-md",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:i(()=>[o(S,{name:"shopping_cart",size:"24px",style:{color:"#737373"}}),o(A,null,{default:i(()=>t[11]||(t[11]=[p(" Produtos e Servi\xE7os ")])),_:1}),e.documento.status==="Digita\xE7\xE3o"?(d(),g(y,{key:0,color:"positive",flat:"",dense:"",icon:"add",round:"",size:"md",onClick:t[5]||(t[5]=r=>l.abrirModal())},{default:i(()=>[o(R,null,{default:i(()=>t[12]||(t[12]=[p("Adicionar Item")])),_:1})]),_:1})):m("",!0)]),_:1}),o(N,{class:"col-12 no-border q-mx-none q-pa-none"},{default:i(()=>[o(x,{class:"q-pa-none"},{default:i(()=>[o(b,null,{default:i(()=>[o(q,null,{default:i(()=>[o(V,{class:"q-col-gutter-md text-weight-bold justify-around"},{default:i(()=>[t[13]||(t[13]=c("div",{class:"col-2 col-md"},"Refer\xEAncia",-1)),t[14]||(t[14]=c("div",{class:"col-10 col-md-4"},"Descri\xE7\xE3o",-1)),t[15]||(t[15]=c("div",{class:"col-6 col-md text-right"},"\xA0",-1)),t[16]||(t[16]=c("div",{class:"col-2 col-md text-right"},"\xA0",-1)),e.ocultarValores?m("",!0):(d(),h("div",wt,"Valor")),e.ocultarValores?m("",!0):(d(),h("div",xt,"Total")),e.ocultarValores?(d(),h("div",zt,"\xA0")):m("",!0),e.ocultarValores?(d(),h("div",Et,"\xA0")):m("",!0),t[17]||(t[17]=c("div",{class:"col-6 col-md-1 text-right"},"A\xE7\xF5es",-1))]),_:1})]),_:1}),o(H,{class:"q-my-xs"}),(d(!0),h(z,null,B(e.documentoItens,(r,C)=>(d(),h(z,{key:C},[o(q,null,{default:i(()=>[o(V,{class:"q-col-gutter-md text-weight-bold text-left justify-around"},{default:i(()=>{var s,v,J,W;return[c("div",Ft,[((s=e.item[r.idItem])==null?void 0:s.referencia)||((v=e.item[r.idItem])==null?void 0:v.codigoItem)?(d(),h("span",Dt,f(((J=e.item[r.idItem])==null?void 0:J.referencia)||"#"+((W=e.item[r.idItem])==null?void 0:W.codigoItem)||"-"),1)):m("",!0)]),c("div",St,f(r.descricaoItem||"-"),1),c("div",Pt,[o(k,{somenteLeitura:e.somenteLeitura,tipo:"quantidade",modelValue:r.quantidade,"onUpdate:modelValue":F=>r.quantidade=F,min:1,rotulo:"Quantidade",dense:"",outlined:"",color:"tertiary",onBlur:F=>l.recalcularTotal(r)},null,8,["somenteLeitura","modelValue","onUpdate:modelValue","onBlur"])]),c("div",Ut,[c("span",null,f(r.unidade||"-"),1)]),e.ocultarValores?m("",!0):(d(),h("div",At,[o(k,{somenteLeitura:e.somenteLeitura,class:"col-10",modelValue:r.valorItem,"onUpdate:modelValue":F=>r.valorItem=F,tipo:"decimal",decimals:"4",onBlur:F=>l.recalcularTotal(r)},null,8,["somenteLeitura","modelValue","onUpdate:modelValue","onBlur"])])),e.ocultarValores?(d(),h("div",Mt,"\xA0")):m("",!0),e.ocultarValores?m("",!0):(d(),h("div",Lt,f(a.$filters.numero(r.total,2)),1)),e.ocultarValores?(d(),h("div",Tt,"\xA0")):m("",!0),c("div",Qt,[e.documento.status==="Digita\xE7\xE3o"?(d(),g(y,{key:0,flat:"",dense:"",icon:"delete",round:"",size:"md",onClick:F=>l.excluirItem(r.id)},{default:i(()=>[o(R,null,{default:i(()=>t[18]||(t[18]=[p("Excluir")])),_:1})]),_:2},1032,["onClick"])):m("",!0)])]}),_:2},1024)]),_:2},1024),o(H,{class:"q-my-xs"})],64))),128))]),_:1})]),_:1}),o(x,{class:"q-px-none"},{default:i(()=>[o(b,null,{default:i(()=>[o(q,null,{default:i(()=>[o(V,{class:"q-col-gutter-md text-weight-bold text-left justify-around"},{default:i(()=>[c("div",Ht,[l.calcularQtdItem()?(d(),h("span",Rt,f(l.calcularQtdItem()),1)):m("",!0)]),t[19]||(t[19]=c("div",{class:"col-10 col-md-4"},"\xA0",-1)),c("div",Nt,f(a.$filters.numero(e.qtdItens,0)),1),t[20]||(t[20]=c("div",{class:"col-2 col-md text-right"},"\xA0",-1)),t[21]||(t[21]=c("div",{class:"col-6 col-md text-right"},"\xA0",-1)),e.ocultarValores?m("",!0):(d(),h("div",Bt,f(a.$filters.numero(e.totalItens,2)),1)),e.ocultarValores?(d(),h("div",Ot,"\xA0")):m("",!0),t[22]||(t[22]=c("div",{class:"col-6 col-md-1 text-right"},"\xA0",-1))]),_:1})]),_:1})]),_:1})]),_:1}),o(x,{class:"q-px-none"},{default:i(()=>[o(b,null,{default:i(()=>[o(q,{class:"text-center"},{default:i(()=>[e.documento.status==="Digita\xE7\xE3o"?(d(),g(y,{key:0,color:"positive",icon:"add",class:"q-mx-auto",label:"Adicionar item",outline:"",size:"xs",onClick:t[6]||(t[6]=r=>l.abrirModal())})):m("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(O,{modelValue:e.itensModal,"onUpdate:modelValue":t[7]||(t[7]=r=>e.itensModal=r),filtro:{ativo:!0,idEmpresa:e.documento.idEmpresa},onSelecionarItens:l.selecionarItens,habilitarQuantidade:!0,ref:"promptItem"},null,8,["modelValue","filtro","onSelecionarItens"]),o(j,{modelValue:e.contatosModal,"onUpdate:modelValue":t[8]||(t[8]=r=>e.contatosModal=r),filtro:{ativo:!0},placeholder:"Seleciona o Cliente"},null,8,["modelValue"])]),_:1}),o(nt,{class:"bg-light no-shadow q-pa-sm text-right",bordered:""},{default:i(()=>[c("div",jt,[o(A,{class:"text-right"},{default:i(()=>[e.documento.status==="Digita\xE7\xE3o"?(d(),g(y,{key:0,class:"q-mx-md",color:"negative",flat:"",label:"Cancelar",onClick:l.cancelar},null,8,["onClick"])):m("",!0),e.documento.status!=="Digita\xE7\xE3o"?(d(),g(y,{key:1,color:"primary",label:"Reabrir",onClick:l.ativar},null,8,["onClick"])):m("",!0),e.documento.status==="Digita\xE7\xE3o"?(d(),g(y,{key:2,color:"primary",label:"Finalizar",onClick:l.finalizar},null,8,["onClick"])):m("",!0)]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onShow","onHide"]),o(Y,{modelValue:e.modalItemSemEstoque.visivel,"onUpdate:modelValue":t[10]||(t[10]=r=>e.modalItemSemEstoque.visivel=r),minimized:""},{default:i(()=>[o(K,{class:"q-dialog-plugin"},{default:i(()=>[o(L,{class:"bg-primary text-white"},{default:i(()=>[o(A,null,{default:i(()=>[p(f((e.modalItemSemEstoque.itens||[]).length>1?"Itens":"Item")+" sem estoque ",1)]),_:1}),T(o(y,{dense:"",flat:"",icon:"close",round:""},null,512),[[Q]])]),_:1}),c("div",Jt,[c("form",Gt,[o(N,{"no-border":"",dense:""},{default:i(()=>[(d(!0),h(z,null,B(e.modalItemSemEstoque.itens,(r,C)=>(d(),h(z,{key:C+r.descricao},[C?(d(),g(H,{key:0})):m("",!0),o(x,null,{default:i(()=>[o(b,{class:"q-py-sm"},{default:i(()=>[o(q,null,{default:i(()=>[p(f(r.descricao),1)]),_:2},1024),o(q,{caption:""},{default:i(()=>[p("Estoque: "+f(r.saldo),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)],64))),128))]),_:1}),c("div",Kt,[T(o(y,{color:"tertiary",flat:"",label:"Ok"},null,512),[[Q]])])])])]),_:1})]),_:1},8,["modelValue"])],64)}var Yt=X(pt,[["render",Wt]]);const Zt={components:{Avatar:ot,lista:ct,Badge:tt,RegistroModal:Yt,BadgeCopiarUid:$,NfePrincipal:ht},mixins:[ft],data(){return{paginacao:{atual:1,minimo:1,maximo:1,total:1,limite:25},contatosModal:!1,digitadorModal:!1,filtros:{tab:"Em Digita\xE7\xE3o",tipo:"Registro",operacao:this.capitalizeFirstLetter(this.$route.params.operacao),empresa:{selecionada:"",opcoes:[]},cliente:{id:"",nome:""},digitador:{id:""},periodo:{emissao:{ini:"",fim:""},finalizado:{ini:"",fim:""}}},digitadorSelecionado:null,digitadoresOpcoes:[],diretivaContatosAcessaTodosContatos:!1,entregueInicio:new Date(new Date($utils.dataAtual()).toDateString()),entregueFim:new Date(new Date($utils.dataAtual()).toDateString()),documentos:[],tabs:[{rotulo:"Em Digita\xE7\xE3o",value:"Em Digita\xE7\xE3o"},{rotulo:"Finalizado",value:"Finalizado"},{rotulo:"Cancelado",value:"Cancelado"},{rotulo:"Todos",value:"Todos"}],tabSelecionada:{valor:"Em Digita\xE7\xE3o"},tabAtiva:"Em Digita\xE7\xE3o",checkboxModel:!1,listaItensLayout:{},configImpressaoRegistro:[],showFilters:!1,filtrosDrawer:{ativo:null,cliente:null,dataInicio:null,dataFim:null},buscaCampo:"",ocultarValores:!0}},computed:{tituloPagina(){return this.capitalizeFirstLetter(this.$route.params.operacao)}},methods:{async filtroCliente_click(){const a=await $g.promptContato.show({filtro:{ativo:!0}});a.nome&&(this.filtros.cliente.nome=a.nome,this.filtros.cliente.id=a.codigoContato)},limparFiltros_click(){this.filtros={tab:"Em Digita\xE7\xE3o",tipo:"Registro",operacao:this.capitalizeFirstLetter(this.$route.params.operacao),empresa:{selecionada:"",opcoes:[]},cliente:{id:""},digitador:{codigo:""},periodo:{emissao:{ini:"",fim:""},finalizado:{ini:"",fim:""}}},this.atualizar()},async atualizar(){this.filtros.tab=this.tabSelecionada.valor;try{this.$q.loading.show();const a=this.paginacao.limite,t=this.paginacao.atual;let n="";this.filtros.tab==="Em Digita\xE7\xE3o"?n="Digita\xE7\xE3o":this.filtros.tab!=="Todos"&&(n=this.filtros.tab);let u=this.filtros.empresa.selecionada.value||"";this.filtros.idEmpresa=u,this.digitadorSelecionado!==null&&(this.filtros.digitador.codigo=this.digitadorSelecionado.value);let e=this.$utils.eliminarVazios(this.filtros);this.buscaCampo&&(e.termoBusca=this.buscaCampo),e.status=n,e.operacao=this.capitalizeFirstLetter(this.$route.params.operacao);const l=await $db.registro.leListaCompleta({filtros:e,limit:a,page:t,sort:["dataHoraFinalizado","dataHoraEmissao"],dir:["desc","desc"]});this.documentos=l.data,this.paginacao.total=l.total,this.paginacao.maximo=l.totalPages,this.configuraImpressaoRegistro(l.idEmpresa)}catch(a){this.$q.notifyError("Erro iniciar",a)}finally{this.$q.loading.hide()}},criarItem(){this.$refs.registroModal.visibilidade.modal=!0,this.$refs.registroModal.atualizar()},capitalizeFirstLetter(a){return a.charAt(0).toUpperCase()+a.slice(1)},abrirItem(a,t=!1){this.$router.replace({params:{id:a}}).finally(()=>{this.$refs.registroModal.atualizar(a),this.$refs.registroModal.somenteLeitura=t,this.$refs.registroModal.visibilidade.modal=!0})},async removerItem(a){$q.dialog({cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},title:"Remover",message:"Ao continuar voc\xEA ir\xE1 remover este item.",ok:{label:"Sim",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(async()=>{try{$q.loading.show(),await $db.registro.remove(a.id),this.atualizar(),$q.notifyPositive("O registro foi exclu\xEDdo com sucesso.")}catch(t){console.error(t),$q.notifyError("Ocorreu um erro ao remover o registro",t)}finally{$q.loading.hide()}}),this.atualizar()},async configuraImpressaoRegistro(a){const t=await $db.configuracoes.porNome("impressao.registro",a),n=[{valor:"invoice",texto:`${this.tituloPagina}`}];this.sistemaPai==="optisoul"&&n.push({valor:"registro",texto:"Registro"}),this.configImpressaoRegistro=[...t.length?t.map(u=>({texto:`Imprimir ${this.tituloPagina}`,...u})):n]},async emitirNFeClick(a,t=1,n="Remessa"){await this.emitirNFeV2({idVenda:a},t,n)}},async created(){const a=await $db.configuracoes.le({nome:`registro.${this.$route.params.operacao}.ocultarValores`});this.ocultarValores=a.some(t=>Number(t.valor)===1),$db.permissao.objeto("Diretiva_RelatorioVenda_VerTodos").then(t=>{this.diretivaContatosAcessaTodosContatos=t,this.diretivaContatosAcessaTodosContatos&&(this.digitadoresOpcoes=[],$db.crm.leOnlineVendedoresDigitadores({entregueInicio:this.entregueInicio,entregueFim:this.entregueFim}).then(n=>{n.forEach(u=>{u.codigo&&this.digitadoresOpcoes.push({label:u.nome,value:u.codigo})})}))}),this.atualizar()},mounted(){this.$route.params.id&&this.$route.params.id.length&&(this.$refs.registroModal.atualizar(this.$route.params.id),this.$refs.registroModal.visibilidade.modal=!0)}},Xt=["onClick"],$t=["onClick"],to={class:"q-col-gutter-xs"};function oo(a,t,n,u,e,l){const I=_("campo"),E=_("row"),w=_("Badge"),k=_("BadgeCopiarUid"),V=_("avatar"),O=_("badge"),j=_("lista"),r=_("RegistroModal"),C=_("NfePrincipal");return d(),h("div",null,[o(j,{titulo:l.tituloPagina,onCriar_click:l.criarItem,showAdd:!1,onFiltro_change:l.atualizar,onLimparFiltros_click:l.limparFiltros_click,icone:"description",tabSelecionada:e.tabSelecionada,tabs:e.tabs,showToolbar:!1,paginacao:e.paginacao,filtros:e.filtros,buscaCampo:e.buscaCampo,"onUpdate:buscaCampo":t[6]||(t[6]=s=>e.buscaCampo=s),checkboxModel:e.checkboxModel,"onUpdate:checkboxModel":t[7]||(t[7]=s=>e.checkboxModel=s)},{filtroCampos:i(()=>[o(I,{modelValue:e.filtros.cliente.nome,"onUpdate:modelValue":t[0]||(t[0]=s=>e.filtros.cliente.nome=s),before:[{icon:"search",handler:l.filtroCliente_click}],dense:"",rotulo:"Cliente"},null,8,["modelValue","before"]),e.diretivaContatosAcessaTodosContatos?(d(),g(dt,{key:0,modelValue:e.digitadorSelecionado,"onUpdate:modelValue":[t[1]||(t[1]=s=>e.digitadorSelecionado=s),l.atualizar],options:e.digitadoresOpcoes,clearable:"",label:"Digitador"},null,8,["modelValue","options","onUpdate:modelValue"])):m("",!0),o(E,{class:"q-col-gutter-md q-mt-md"},{default:i(()=>[t[8]||(t[8]=c("span",{class:"col-12 text-body1 text-dark"},"Per\xEDodo de Emiss\xE3o",-1)),o(I,{modelValue:e.filtros.periodo.emissao.ini,"onUpdate:modelValue":t[2]||(t[2]=s=>e.filtros.periodo.emissao.ini=s),tipo:"data",class:"no-shadow full-width",rotulo:"De",col:"12",after:[{icon:"mdi-close-circle",handler(){e.filtros.periodo.emissao.ini=""}}],dense:""},null,8,["modelValue","after"]),o(I,{modelValue:e.filtros.periodo.emissao.fim,"onUpdate:modelValue":t[3]||(t[3]=s=>e.filtros.periodo.emissao.fim=s),tipo:"data",class:"no-shadow full-width",rotulo:"at\xE9",col:"12",after:[{icon:"mdi-close-circle",handler(){e.filtros.periodo.emissao.fim=""}}],dense:""},null,8,["modelValue","after"])]),_:1}),o(E,{class:"q-col-gutter-md q-mt-md"},{default:i(()=>[t[9]||(t[9]=c("span",{class:"col-12 text-body1 text-dark"},"Per\xEDodo de Finaliza\xE7\xE3o",-1)),o(I,{modelValue:e.filtros.periodo.finalizado.ini,"onUpdate:modelValue":t[4]||(t[4]=s=>e.filtros.periodo.finalizado.ini=s),tipo:"data",class:"no-shadow full-width",rotulo:"De",col:"12",after:[{icon:"mdi-close-circle",handler(){e.filtros.periodo.finalizado.ini=""}}],dense:""},null,8,["modelValue","after"]),o(I,{modelValue:e.filtros.periodo.finalizado.fim,"onUpdate:modelValue":t[5]||(t[5]=s=>e.filtros.periodo.finalizado.fim=s),tipo:"data",class:"no-shadow full-width",rotulo:"at\xE9",col:"12",after:[{icon:"mdi-close-circle",handler(){e.filtros.periodo.finalizado.fim=""}}],dense:""},null,8,["modelValue","after"])]),_:1})]),itemLista:i(()=>[o(N,{class:"bg-white"},{default:i(()=>[(d(!0),h(z,null,B(e.documentos,s=>(d(),h("div",{key:s,class:"itemHover fullWidth"},[o(x,{"manual-focus":"",clickable:"",class:"items-center d-flex q-pa-xs"},{default:i(()=>[o(b,{avatar:"",center:"",class:"mw80 hideonmobile"},{default:i(()=>[Number(s.numero)?(d(),g(w,{key:0,class:"q-mr-sm",cor:"tertiary",escuro:""},{default:i(()=>[p(" #"+f(String(s.numero).padStart(6,"0")),1)]),_:2},1024)):(d(),g(k,{key:1,id:s.id,numero:s.id.slice(-6),cor:"tertiary"},null,8,["id","numero"]))]),_:2},1024),o(b,{clickable:""},{default:i(()=>[o(E,{class:"items-center q-col-gutter-x-sm"},{default:i(()=>[c("div",{class:"col-auto items-center",onClick:v=>l.abrirItem(s.id)},[o(V,{imagem:s.imagem,tamanho:"40",rotulo:s.descricaoContato,style:{display:"flex","align-self":"center"}},null,8,["imagem","rotulo"])],8,Xt),c("div",{class:"col",onClick:v=>l.abrirItem(s.id)},[o(q,{class:"text-tertiary text-weight-bold"},{default:i(()=>[p(f(s.descricaoContato),1)]),_:2},1024)],8,$t)]),_:2},1024)]),_:2},1024),o(b,{onClick:v=>l.abrirItem(s.id),avatar:"",class:"mw100 hideonmobile"},{default:i(()=>[o(q,{class:"full-width"},{default:i(()=>[o(S,{name:"mdi-calendar-today"}),p(" "+f(a.$filters.data(s.dataHoraEmissao))+" ",1),o(R,null,{default:i(()=>[p(" Data Emiss\xE3o "+f(a.$filters.dataHora(s.dataHoraEmissao)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]),s.dataHoraFinalizado?(d(),g(b,{key:0,onClick:v=>l.abrirItem(s.id),avatar:"",class:"mw100 hideonmobile"},{default:i(()=>[o(q,{class:"full-width"},{default:i(()=>[o(S,{name:"mdi-calendar-check"}),p(f(a.$filters.data(s.dataHoraFinalizado))+" ",1),o(R,null,{default:i(()=>[p(" Data Finalizado "+f(a.$filters.dataHora(s.dataHoraFinalizado)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])):m("",!0),o(b,{onClick:v=>l.abrirItem(s.id),avatar:"",class:"mw100 hideonmobile"},{default:i(()=>[o(O,{class:"q-mr-sm",cor:"primary",escuro:""},{default:i(()=>[p(f(s.status),1)]),_:2},1024)]),_:2},1032,["onClick"]),e.ocultarValores?m("",!0):(d(),g(b,{key:1,onClick:v=>l.abrirItem(s.id),avatar:"",class:"mw120 hideonmobile"},{default:i(()=>[o(q,{class:"text-right text-tertiary text-weight-bold"},{default:i(()=>[p(f(a.$filters.numero(s.totalDocumento,2)),1)]),_:2},1024),o(q,{caption:"",class:"text-right text-tertiary"},{default:i(()=>[p(f(s.documentoItens.length)+" Itens ",1)]),_:2},1024)]),_:2},1032,["onClick"])),o(b,{side:"",top:""},{default:i(()=>[c("div",to,[s.status==="Digita\xE7\xE3o"?(d(),g(y,{key:0,class:"buttons",color:"primary",dense:"",flat:"",icon:"edit",round:"",size:"md",onClick:v=>l.abrirItem(s.id)},null,8,["onClick"])):(d(),g(y,{key:1,class:"buttons",color:"primary",dense:"",flat:"",icon:"visibility",round:"",size:"md",onClick:v=>l.abrirItem(s.id,!0)},null,8,["onClick"])),o(y,{rounded:"",dense:"",flat:"",icon:"print",color:"tertiary",unelevated:"",class:"hideonmobile q-mx-xs",size:"md"},{default:i(()=>[o(Z,null,{default:i(()=>[(d(!0),h(z,null,B(e.configImpressaoRegistro.filter(v=>v.valor),v=>(d(),g(x,{clickable:"",key:v.valor,onClick:J=>a.$imprimir(v.valor,{id:(s||{}).id||"0",Oculto:"0"})},{default:i(()=>[o(b,{avatar:""},{default:i(()=>[o(S,{name:"print"})]),_:1}),o(b,null,{default:i(()=>[o(q,null,{default:i(()=>[p(f(v.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024),o(y,{dense:"",flat:"",icon:"more_vert",round:"",size:"md"},{default:i(()=>[o(Z,null,{default:i(()=>[T((d(),g(N,{class:"q-py-none",link:"","no-border":"",separator:""},{default:i(()=>[s.status==="Digita\xE7\xE3o"?(d(),g(x,{key:0,clickable:"",onClick:v=>l.removerItem(s)},{default:i(()=>[o(b,{avatar:""},{default:i(()=>[o(S,{name:"delete"})]),_:1}),o(b,null,{default:i(()=>t[10]||(t[10]=[p(" Remover")])),_:1})]),_:2},1032,["onClick"])):m("",!0),s.status==="Finalizado"?(d(),g(x,{key:1,clickable:"",onClick:v=>l.emitirNFeClick(s.id)},{default:i(()=>[o(b,{avatar:""},{default:i(()=>[o(S,{name:"upload"})]),_:1}),o(b,null,{default:i(()=>t[11]||(t[11]=[p("Emitir Nota")])),_:1})]),_:2},1032,["onClick"])):m("",!0)]),_:2},1024)),[[Q]])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024),o(H)]))),128))]),_:1})]),_:1},8,["titulo","onCriar_click","onFiltro_change","onLimparFiltros_click","tabSelecionada","tabs","paginacao","filtros","buscaCampo","checkboxModel"]),o(r,{ref:"registroModal",onAtualizar:l.atualizar},null,8,["onAtualizar"]),o(C)])}var fo=X(Zt,[["render",oo]]);export{fo as default};
