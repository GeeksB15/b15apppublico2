import{_ as Q,Z as T,cV as B,r as D,o as r,d as c,w as o,f as e,B as m,h as W,i as U,T as x,k as l,t as f,bw as A,j as p,G as y,bs as P,e as h,m as I,l as N,O,n as k,F as g,s as E,R as _,S as s,Q as C,az as H,M as w,y as G}from"./index.334d0b54.js";import{e as j}from"./emitirNFe.35117289.js";import{D as L}from"./DocumentosFiscais.3b833153.js";import{M as Z}from"./ModalHistoricoStatus.adbcfc97.js";const J={visibilidade:{botao:{editar:!1,remover:!1,visualizar:!1}}},K={components:{Avatar:T,Envelope:B,ModalHistoricoStatus:Z,DocumentosFiscais:L},computed:{podeMigrarFatura(){return!~["Finalizada","Aguardando Pagamento"].indexOf(this.fatura.status)&&!~["Cancelado","N\xE3o Aprovado","Or\xE7amento"].indexOf(this.documento.status)}},data(){return{contato:{},documento:{},documentosItem:[],fatura:{},faturasAbertas:[],visibilidade:{},detalhesVisivel:!1,configImpressaoOrcamento:[],configImpressaoEnvelope:[],sistemaPai:""}},methods:{async duplicarVenda(){try{await new Promise((a,i)=>{this.$q.dialog({message:"Duplicar este pedido?",cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},ok:{label:"Sim",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(()=>{a()}).onCancel(()=>{i()})})}catch{return}try{const a=await $db.venda.duplicarVenda(this.id);this.$refs.modalEnvelope.mostrar({idEnvelope:a}),this.$q.notify({type:"positive",message:"Pedido duplicado"})}catch(a){let i="N\xE3o foi poss\xEDvel realizar a opera\xE7\xE3o";/^GError:.+/.test(a.message)&&(i=a.message.slice(7)),this.$q.notify({type:"negative",message:i}),console.error(a)}},irParaAtendimentoFatura(a){this.$router.push({name:"AtendimentoFatura",params:{id:a}})},async migrarFatura({documento:a,idFatura:i}){try{await new Promise((n,v)=>{this.$q.dialog({message:"Esta a\xE7\xE3o ir\xE1 migrar este envelope para outra fatura.",noRefocus:!0,preventClose:!0,title:"Tem certeza?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(()=>{n()}).onCancel(()=>{v()})})}catch{return}try{let n;if(i&&(n=await $db.hibrido.le({table:"documento",id:i})),!n){const v=await $db.envelope.obterDadosContatoResponsavel(a.idContatoResponsavel);n=$db.fatura.criar({...a,idContato:v.idContato,idContatoEndereco:v.idContatoEndereco,numeroDocumentoContato:v.numeroDocumentoContato,descricaoContato:v.descricaoContato,descricaoContatoEndereco:v.descricaoContatoEndereco,telefoneContato:v.telefoneContato}),await $db.fatura.grava({fatura:n})}await $db.documento.grava({atual:{id:a.id,idFatura:n.id},original:a}),localStorage.setItem("idFatura",n.id),this.$emit("executar","atualizar"),this.irParaAtendimentoFatura(a.idContatoResponsavel)}catch(n){let v="Erro ao migrar para fatura.";/^GError:.+/.test(n.message)&&(v=n.message.slice(7)),$q.notify({type:"negative",message:v}),console.error(n);return}},alternarDetalhes(){this.detalhesVisivel=!this.detalhesVisivel},async carregarContatos({ids:a}){const i={};for(const n of a)i[n]||(i[n]=await $db.hibrido.le({table:"contato",id:n}));this.contato=i},async configurarVisibilidade({documento:a,faturasAbertas:i}){const n=$utils.clonar(J.visibilidade);i.some(v=>v.id===a.idFatura)&&(n.botao.remover=await $db.permissao.objeto("Diretiva_Vendas_RemoverVendaFatura")),!~["Cancelado","N\xE3o Aprovado"].indexOf(a.status)&&!a.idFatura&&(n.botao.editar=!0),n.botao.editar||(n.botao.visualizar=!0),this.visibilidade=n},async carregarFaturasAbertas({documento:a}){let i=[];return a.idContatoResponsavel&&a.idEmpresa&&(i=await $db.hibrido.lista({table:"documento",where:{idContato:a.idContatoResponsavel,idEmpresa:a.idEmpresa,tipo:"Fatura",status:"Aberta"}}),i=i.sort((n,v)=>!n.numero||n.numero<v.numero?-1:1)),i},async mostrar({documento:a}){await this.$refs.modalEnvelope.mostrar({idEnvelope:a.id})},async atualizar(){this.sistemaPai=$utils.sistemaPai();const a=await $db.hibrido.le({table:"documento",id:this.id}),i=await $db.hibrido.lista({table:"documentoItem",where:{idDocumento:this.id}}),n=await this.carregarFaturasAbertas({documento:a});a.idFatura&&(this.fatura=await $db.hibrido.le({table:"documento",id:a.idFatura})),await this.carregarContatos({ids:[a.idContato,a.idContatoVendedor,a.idContatoResponsavel]}),await this.configurarVisibilidade({documento:a,faturasAbertas:n}),await this.configuraImpressaoEnvelope({documento:a}),await this.configuraImpressaoOrcamento({documento:a}),await this.configuraImpressosWhatsapp({documento:a}),this.faturasAbertas=n,this.documentosItem=i.filter(v=>v.idItem),this.documento=a},async configuraImpressaoEnvelope({documento:a}){const i=await $db.configuracoes.porNome("impressao.envelope",a.idEmpresa);this.configImpressaoEnvelope=[...i.length?i.map(n=>({texto:"Imprimir Envelope",...n})):[{valor:"envelope",texto:"Imprimir Envelope"},{valor:"envelopeMini",texto:"Imprimir Envelope Mini"}]]},async configuraImpressaoOrcamento({documento:a}){const i=await $db.configuracoes.porNome("impressao.venda",a.idEmpresa);this.configImpressaoOrcamento=[...i.length?i.map(n=>({texto:"Imprimir Or\xE7amento",...n})):[{valor:"invoice",texto:"Or\xE7amento/Venda (Invoice)"},this.sistemaPai==="optisoul"?{valor:"orcamento",texto:"Or\xE7amento (Antigo)"}:{},this.sistemaPai==="optisoul"?{valor:"termoGarantia",texto:"Termo de Garantia"}:{}]]},async configuraImpressosWhatsapp({documento:a}){const i=await $db.configuracoes.le({prefixoNome:"venda.whatsapp.enviar.",idEmpresa:a.idEmpresa});this.configImpressosWhatsapp=i.map(n=>({...n,idVenda:a.id}))},async dialogEnviar(a){var i,n;try{const v=await $db.hibrido.le({table:"documento",id:a.idVenda});$utils.verificarErro(!(v!=null&&v.id),"Erro ao obter dados");const t=await $db.contato.leCompleto(v.idContato),b=(((i=t==null?void 0:t.telefone)==null?void 0:i.find(q=>q.tipoTelefone==="WhatsApp"))||((n=t==null?void 0:t.telefone)==null?void 0:n.find(q=>q.tipoTelefone==="Principal"))||(t==null?void 0:t.telefone[0])||{}).telefone.trim()||"";$q.dialog({title:"Enviar impresso pelo Whatsapp?",preventClose:!0,prompt:{label:"Enviar para este n\xFAmero:",model:b||"",hint:"Ou adicione um novo n\xFAmero, ex: 19988776655",isValid:q=>q.length>0,type:"text"},cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},ok:{label:"Sim",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(async q=>{var S;v.telefoneContato=q.replace(/\D/g,"");const z=await $db.venda.enviaImpressaoPdfwhatsapp({documento:v,nomeImpresso:a.nome.replace("venda.whatsapp.enviar.",""),mensagem:(S=a.texto)!=null?S:`Voc\xEA est\xE1 recebendo o ${a.valor} da empresa ${v.descricaoEmpresa} (${v.numeroDocumentoEmpresa}).`})})}catch{$q.notifyError("Erro ao enviar.",erro)}},copiarUid(){const a=this.$refs.uid;a.type="text";try{a.select(),document.execCommand("copy"),this.$q.notify({message:"UID copiado para a \xE1rea de transfer\xEAncia.",type:"info"})}catch{this.$q.notify("Erro ao copiar.")}a.type="hidden",window.getSelection().removeAllRanges()},descricaoEnvelope(a){if(a.itens)return a.itens.map(n=>n.descricaoItem).filter(Boolean).join(" | ");let i="";for(const n of this.dados.itensEnvelopes)n.idDocumentoAdicional===a.id&&n.descricaoItem.trim()&&(i+=n.descricaoItem.trim()+" | ");return i.slice(0,-3)},executar(a){switch(a){case"atualizar":this.atualizar();break;case"cancelar":case"finalizar":case"reprovar":this.$emit("executar","atualizar");break;case"retornarOrcamento":this.$emit("executar",a);break}},async remover({documento:a}){this.$q.dialog({message:"Esta a\xE7\xE3o ir\xE1 remover este envelope da fatura",title:"Tem certeza?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(async()=>{try{await $db.venda.checarConflitoStatus({id:a.id,status:a.status})}catch(i){return $q.notifyError(i.message),!1}await $db.documento.grava({atual:{id:a.id,idFatura:""},original:a}),this.$emit("executar","remover")})}},mixins:[j],props:{id:{required:!0,type:String}},async mounted(){await this.atualizar()}},X={class:"col-12 col-md-6 q-pl-none"},Y={class:"q-item-section"},$={class:"col-6 col-md hideonmobile"},ee={class:"text-left q-my-none"},te={class:"col-4 col-md hideonmobile"},oe={class:"text-left q-my-none"},ae={class:"col-4 col-md hideonmobile"},ie={class:"text-left q-my-none"},re={class:"col-6 col-md hideonmobile"},ne={class:"text-right text-h5 text-positive text-weight-bold q-my-none"},le={class:"text-right text-weight-normal text-tertiary text-body2 q-my-none"},se={class:"col-12 hideondesktop"},de={class:"text-left q-my-none"},ue={class:"col-12 col-md-6"},ce={class:"col-12 col-md-6 full-height items-end hideonmobile"},me={class:"col-6"},fe={class:"text-left q-my-none"},pe={class:"text-left q-my-none"},ve={class:"col-6"},he={class:"text-right text-weight-normal text-tertiary text-body2 q-my-none"},be={class:"text-right text-h5 text-positive text-weight-bold q-my-none"},_e={class:"col-12 full-height items-end"},ye={class:"col-12 col-md-6"},ke={class:"text-subtitle1 text-weight-bold q-ma-none items-center"},ge={class:"q-ma-none"},Ce={key:0},we={class:"col-6 col-md-4"},xe=m("p",{class:"text-subtitle1 text-weight-bold q-ma-none"}," Faturamento ",-1),qe={class:"q-ma-none"},Ee={class:"col-6 col-md-2 text-right"},Fe=m("p",{class:"text-subtitle1 text-weight-bold q-ma-none"}," Desconto ",-1),Ve={class:"q-ma-none"};function Ie(a,i,n,v,t,b){const q=D("avatar"),z=D("row"),S=D("DocumentosFiscais"),R=D("Envelope"),M=D("ModalHistoricoStatus");return t.documento.id?(r(),c(G,{key:0,id:"VendaCard",class:"extratoItem bg-white q-pa-sm no-shadow"},{default:o(()=>[e(z,{class:"items-center justify-between q-mx-none q-px-none q-mb-sm"},{default:o(()=>{var u;return[m("div",X,[e(W,{class:"q-pa-none"},{default:o(()=>{var d;return[e(q,{imagem:(d=t.contato[t.documento.idContato])==null?void 0:d.imagem,rotulo:t.documento.descricaoContato,tamanho:"40",style:{float:"left"}},null,8,["imagem","rotulo"]),e(U,null,{default:o(()=>{var F;return[m("div",Y,[e(x,null,{default:o(()=>{var V;return[l(f((V=t.contato[t.documento.idContato])==null?void 0:V.apelido),1)]}),_:1}),t.documento.idContatoResponsavel!==t.documento.idContato&&((F=t.contato[t.documento.idContatoResponsavel])==null?void 0:F.nome)?(r(),c(x,{key:0,caption:""},{default:o(()=>{var V;return[l(f((V=t.contato[t.documento.idContatoResponsavel])==null?void 0:V.nome),1)]}),_:1})):(r(),c(x,{key:1,caption:""},{default:o(()=>{var V;return[l(f((V=t.contato[t.documento.idContato])==null?void 0:V.nome),1)]}),_:1}))])]}),_:1}),e(A,{rounded:"",color:"tertiary",small:""},{default:o(()=>[l(f(t.documento.status),1)]),_:1}),e(A,{class:"q-ml-sm",color:"positive",escuro:"",onClick:b.copiarUid},{default:o(()=>[l(" #"+f(parseInt(t.documento.numero)||(t.documento.id||"").slice(-6))+" ",1),e(p,{class:"q-ml-sm",name:"mdi-glasses"}),y(m("input",{type:"hidden","onUpdate:modelValue":i[0]||(i[0]=F=>t.documento.id=F),ref:"uid"},null,512),[[P,t.documento.id]])]),_:1},8,["onClick"])]}),_:1})]),m("div",$,[m("p",ee,[t.contato[t.documento.idContatoVendedor]?(r(),c(p,{key:0,name:"mdi-account-tie"})):h("",!0),l(" "+f((u=t.contato[t.documento.idContatoVendedor])==null?void 0:u.apelido)+" ",1),e(I,null,{default:o(()=>[l(" Vendedor(a) ")]),_:1})])]),m("div",te,[m("p",oe,[t.documento.dataHoraEmissao?(r(),c(p,{key:0,name:"mdi-calendar-today "})):h("",!0),l(" "+f(a.$filters.data(t.documento.dataHoraEmissao))+" ",1),e(I,null,{default:o(()=>[l(" Emiss\xE3o ")]),_:1})])]),m("div",ae,[m("p",ie,[t.documento.dataHoraFinalizado?(r(),c(p,{key:0,name:"mdi-calendar-check"})):h("",!0),l(" "+f(a.$filters.data(t.documento.dataHoraFinalizado))+" ",1),t.documento.dataHoraFinalizado?(r(),c(I,{key:1},{default:o(()=>[l(" Finalizado ")]),_:1})):h("",!0)])]),m("div",re,[m("p",ne,f(a.$filters.numero(t.documento.totalDocumento,2)),1),m("p",le,f(a.$filters.numero(t.documento.subTotal,2)),1)])]}),_:1}),e(N,{class:"hideondesktop q-mb-sm"}),e(z,{class:"q-mx-none q-px-none items-center"},{default:o(()=>{var u;return[m("div",se,[m("p",de,[t.contato[t.documento.idContatoVendedor]?(r(),c(p,{key:0,name:"mdi-account-tie"})):h("",!0),l(" "+f((u=t.contato[t.documento.idContatoVendedor])==null?void 0:u.apelido)+" ",1),e(I,null,{default:o(()=>[l(" Vendedor(a) ")]),_:1})])]),m("div",ue,[e(O,{class:"no-border text-tertiary"},{default:o(()=>[(r(!0),k(g,null,E(t.documentosItem,d=>(r(),c(_,{key:d.id,class:"q-pa-none q-mb-xs",style:{"min-height":"auto"}},{default:o(()=>[e(s,{avatar:"",class:"mw80"},{default:o(()=>[e(x,null,{default:o(()=>[l(f(d.quantidade)+"x",1)]),_:2},1024)]),_:2},1024),e(s,null,{default:o(()=>[e(x,null,{default:o(()=>[l(f(d.descricaoItem),1)]),_:2},1024)]),_:2},1024),e(s,{side:"",top:""},{default:o(()=>[e(x,null,{default:o(()=>[l(f(a.$filters.numero(d.total,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),m("div",ce,[e(N,{class:"hideondesktop q-mb-sm q-mt-xs"}),e(C,{rounded:"",dense:"",flat:"",icon:"more_vert",color:"tertiary",class:"no-shadow q-mx-xs",size:"md",style:{float:"right"}},{default:o(()=>[e(H,null,{default:o(()=>[y((r(),c(O,{link:"",separator:""},{default:o(()=>[a.$utils.mapearStatus(t.documento).permiteNota?(r(),k(g,{key:0},[y((r(),c(_,{clickable:"",onClick:i[1]||(i[1]=d=>a.emitirNFeV2({idVenda:t.documento.id},1,"Venda"))},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"account_balance"})]),_:1}),e(s,null,{default:o(()=>[l("NFe de Sa\xEDda/Venda")]),_:1})]),_:1})),[[w]]),y((r(),c(_,{clickable:"",onClick:i[2]||(i[2]=d=>a.emitirNFeV2({idVenda:t.documento.id},0,"Devolu\xE7\xE3o"))},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"account_balance"})]),_:1}),e(s,null,{default:o(()=>[l("NFe de Entrada/Devolu\xE7\xE3o")]),_:1})]),_:1})),[[w]]),y((r(),c(_,{clickable:"",onClick:i[3]||(i[3]=d=>a.emitirNFeV2({idVenda:t.documento.id},1,"Remessa"))},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"account_balance"})]),_:1}),e(s,null,{default:o(()=>[l("NFe de Remessa")]),_:1})]),_:1})),[[w]])],64)):h("",!0),b.podeMigrarFatura?(r(),k(g,{key:1},[(r(!0),k(g,null,E(t.faturasAbertas.filter(d=>d.id!==t.documento.idFatura),d=>y((r(),c(_,{clickable:"",key:d.id,onClick:F=>b.migrarFatura({documento:t.documento,idFatura:d.id})},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"mdi-folder-move"})]),_:1}),e(s,null,{default:o(()=>[l(f("Migrar para fatura #"+(d.numero||d.id.slice(-6))),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[w]])),128)),y((r(),c(_,{clickable:"",onClick:i[4]||(i[4]=d=>b.migrarFatura({documento:t.documento}))},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"mdi-folder-move"})]),_:1}),e(s,null,{default:o(()=>[l("Migrar para nova fatura")]),_:1})]),_:1})),[[w]])],64)):h("",!0),e(_,{clickable:"",onClick:i[5]||(i[5]=d=>a.$refs.modalHistoricoStatus.mostrar({idDocumento:t.documento.id}))},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"history"})]),_:1}),e(s,null,{default:o(()=>[l("Hist\xF3rico do Status")]),_:1})]),_:1}),e(_,{clickable:"",onClick:b.duplicarVenda},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"mdi-content-duplicate"})]),_:1}),e(s,null,{default:o(()=>[l("Duplicar Pedido")]),_:1})]),_:1},8,["onClick"]),(r(!0),k(g,null,E(a.configImpressosWhatsapp.filter(d=>d.valor),d=>(r(),c(_,{clickable:"",key:d.valor,onClick:F=>b.dialogEnviar(d)},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"mdi-whatsapp"})]),_:1}),e(s,null,{default:o(()=>[l(f(d.valor),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),[[w]])]),_:1})]),_:1}),t.visibilidade.botao.remover?(r(),c(C,{key:0,rounded:"",dense:"",flat:"",icon:"clear",color:"tertiary",class:"no-shadow q-mx-xs",size:"md",onClick:i[6]||(i[6]=d=>b.remover({documento:t.documento})),style:{float:"right"}})):h("",!0),t.visibilidade.botao.editar?(r(),c(C,{key:1,rounded:"",dense:"",flat:"",icon:"edit",color:"primary",class:"no-shadow q-mx-xs",size:"md",onClick:i[7]||(i[7]=d=>b.mostrar({documento:t.documento})),style:{float:"right"}})):h("",!0),t.visibilidade.botao.visualizar?(r(),c(C,{key:2,rounded:"",dense:"",flat:"",icon:"remove_red_eye",color:"primary",class:"no-shadow q-mx-xs",size:"md",onClick:i[8]||(i[8]=d=>b.mostrar({documento:t.documento})),style:{float:"right"}})):h("",!0),e(C,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-mx-xs",size:"md",style:{float:"right"}},{default:o(()=>[e(H,null,{default:o(()=>[e(O,{link:"",separator:""},{default:o(()=>[(r(!0),k(g,null,E(t.configImpressaoOrcamento.filter(d=>d.valor),d=>(r(),c(_,{clickable:"",key:d.valor,onClick:F=>a.$imprimir(d.valor,{id:t.documento.id,Oculto:"0"})},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"print"})]),_:1}),e(s,null,{default:o(()=>[e(x,null,{default:o(()=>[l(f(d.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),t.sistemaPai==="optisoul"?(r(!0),k(g,{key:0},E(t.configImpressaoEnvelope,d=>(r(),c(_,{clickable:"",key:d.valor,onClick:F=>a.$imprimir(d.valor,t.documento.id)},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"print"})]),_:1}),e(s,null,{default:o(()=>[e(x,null,{default:o(()=>[l(f(d.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)):h("",!0)]),_:1})]),_:1})]),_:1}),e(C,{rounded:"",dense:"",flat:"",icon:t.detalhesVisivel?"keyboard_arrow_up":"keyboard_arrow_down",size:"md",class:"no-shadow q-mx-xs",color:"tertiary",style:{float:"right"},onClick:b.alternarDetalhes},null,8,["icon","onClick"])])]}),_:1}),e(N,{class:"hideondesktop q-mb-sm q-mt-xs"}),e(z,{class:"q-mx-none q-px-none hideondesktop"},{default:o(()=>[m("div",me,[m("p",fe,[t.documento.dataHoraEmissao?(r(),c(p,{key:0,name:"mdi-calendar-today"})):h("",!0),l(" "+f(a.$filters.data(t.documento.dataHoraEmissao))+" ",1),e(I,null,{default:o(()=>[l(" Emiss\xE3o ")]),_:1})]),m("p",pe,[t.documento.dataHoraFinalizado?(r(),c(p,{key:0,name:"mdi-calendar-check"})):h("",!0),l(" "+f(a.$filters.data(t.documento.dataHoraFinalizado))+" ",1),t.documento.dataHoraFinalizado?(r(),c(I,{key:1},{default:o(()=>[l(" Finalizado ")]),_:1})):h("",!0)])]),m("div",ve,[m("p",he,f(a.$filters.numero(t.documento.subTotal,2)),1),m("p",be,f(a.$filters.numero(t.documento.totalDocumento,2)),1)]),m("div",_e,[e(N,{class:"hideondesktop q-mb-sm q-mt-xs"}),e(C,{rounded:"",dense:"",flat:"",icon:"more_vert",color:"tertiary",class:"no-shadow q-mx-xs",size:"md",style:{float:"right"}},{default:o(()=>[e(H,null,{default:o(()=>[y((r(),c(O,{link:"",separator:""},{default:o(()=>[a.$utils.mapearStatus(t.documento).permiteNota?(r(),k(g,{key:0},[y((r(),c(_,{clickable:"",onClick:i[9]||(i[9]=u=>a.emitirNFeV2({idVenda:t.documento.id},1,"Venda"))},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"account_balance"})]),_:1}),e(s,null,{default:o(()=>[l("NFe de Sa\xEDda/Venda")]),_:1})]),_:1})),[[w]]),y((r(),c(_,{clickable:"",onClick:i[10]||(i[10]=u=>a.emitirNFeV2({idVenda:t.documento.id},0,"Devolu\xE7\xE3o"))},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"account_balance"})]),_:1}),e(s,null,{default:o(()=>[l("NFe de Entrada/Devolu\xE7\xE3o")]),_:1})]),_:1})),[[w]]),y((r(),c(_,{clickable:"",onClick:i[11]||(i[11]=u=>a.emitirNFeV2({idVenda:t.documento.id},1,"Remessa"))},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"account_balance"})]),_:1}),e(s,null,{default:o(()=>[l("NFe de Remessa")]),_:1})]),_:1})),[[w]])],64)):h("",!0),b.podeMigrarFatura?(r(),k(g,{key:1},[(r(!0),k(g,null,E(t.faturasAbertas.filter(u=>u.id!==t.documento.idFatura),u=>y((r(),c(_,{key:u.id,onClick:d=>b.migrarFatura({documento:t.documento,idFatura:u.id})},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"mdi-folder-move"})]),_:1}),e(s,null,{default:o(()=>[l(f("Migrar para fatura #"+(u.numero||u.id.slice(-6))),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[w]])),128)),y((r(),c(_,{onClick:i[12]||(i[12]=u=>b.migrarFatura({documento:t.documento}))},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"mdi-folder-move"})]),_:1}),e(s,null,{default:o(()=>[l("Migrar para nova fatura")]),_:1})]),_:1})),[[w]])],64)):h("",!0),e(_,{clickable:"",onClick:i[13]||(i[13]=u=>a.$refs.modalHistoricoStatus.mostrar({idDocumento:t.documento.id}))},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"history"})]),_:1}),e(s,null,{default:o(()=>[l("Hist\xF3rico do Status")]),_:1})]),_:1}),e(_,{clickable:"",onClick:b.duplicarVenda},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"mdi-content-duplicate"})]),_:1}),e(s,null,{default:o(()=>[l("Duplicar Pedido")]),_:1})]),_:1},8,["onClick"]),(r(!0),k(g,null,E(a.configImpressosWhatsapp.filter(u=>u.valor),u=>(r(),c(_,{clickable:"",key:u.valor,onClick:d=>b.dialogEnviar(u)},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"mdi-whatsapp"})]),_:1}),e(s,null,{default:o(()=>[l(f(u.valor),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),[[w]])]),_:1})]),_:1}),t.visibilidade.botao.remover?(r(),c(C,{key:0,rounded:"",dense:"",flat:"",icon:"clear",color:"tertiary",class:"no-shadow q-mx-xs",size:"md",onClick:i[14]||(i[14]=u=>b.remover({documento:t.documento})),style:{float:"right"}})):h("",!0),t.visibilidade.botao.editar?(r(),c(C,{key:1,rounded:"",dense:"",flat:"",icon:"edit",color:"primary",class:"no-shadow q-mx-xs",size:"md",onClick:i[15]||(i[15]=u=>b.mostrar({documento:t.documento})),style:{float:"right"}})):h("",!0),t.visibilidade.botao.visualizar?(r(),c(C,{key:2,rounded:"",dense:"",flat:"",icon:"remove_red_eye",color:"primary",class:"no-shadow q-mx-xs",size:"md",onClick:i[16]||(i[16]=u=>b.mostrar({documento:t.documento})),style:{float:"right"}})):h("",!0),e(C,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-mx-xs",size:"md",style:{float:"right"}},{default:o(()=>[e(H,null,{default:o(()=>[e(O,{link:"",separator:""},{default:o(()=>[(r(!0),k(g,null,E(t.configImpressaoOrcamento.filter(u=>u.valor),u=>(r(),c(_,{clickable:"",key:u.valor,onClick:d=>a.$imprimir(u.valor,{id:t.documento.id,Oculto:"0"})},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"print"})]),_:1}),e(s,null,{default:o(()=>[e(x,null,{default:o(()=>[l(f(u.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),t.sistemaPai==="optisoul"?(r(!0),k(g,{key:0},E(t.configImpressaoEnvelope,u=>(r(),c(_,{clickable:"",key:u.valor,onClick:d=>a.$imprimir(u.valor,t.documento.id)},{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(p,{name:"print"})]),_:1}),e(s,null,{default:o(()=>[e(x,null,{default:o(()=>[l(f(u.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)):h("",!0)]),_:1})]),_:1})]),_:1}),e(C,{rounded:"",dense:"",flat:"",icon:t.detalhesVisivel?"keyboard_arrow_up":"keyboard_arrow_down",size:"md",class:"no-shadow q-mx-xs",color:"tertiary",style:{float:"right"},onClick:b.alternarDetalhes},null,8,["icon","onClick"])])]),_:1}),t.detalhesVisivel?(r(),c(N,{key:0,class:"hideondesktop q-my-sm"})):h("",!0),t.detalhesVisivel?(r(),c(z,{key:1,class:"items-start q-mx-none q-px-none q-mt-md"},{default:o(()=>[m("div",ye,[m("p",ke,[e(p,{name:"business"}),l(" "+f(t.documento.descricaoEmpresa),1)]),m("div",ge,[t.fatura.id?(r(),k("div",Ce,[l(" Fatura "),e(A,{color:"positive",escuro:"",onClick:b.copiarUid},{default:o(()=>[l(" #"+f(parseInt(t.fatura.numero)||(t.fatura.id||"").slice(-6))+" ",1),e(p,{class:"q-ml-sm",name:"mdi-glasses"}),y(m("input",{type:"hidden","onUpdate:modelValue":i[17]||(i[17]=u=>t.fatura.id=u),ref:"uid"},null,512),[[P,t.fatura.id]])]),_:1},8,["onClick"]),e(A,{class:"q-ml-sm",rounded:"",color:"tertiary",small:""},{default:o(()=>[l(f(t.fatura.status),1)]),_:1})])):h("",!0),m("div",null,f(t.documento.observacao),1),m("div",null,f(t.documento.observacaoInterna),1),m("div",null,f(t.documento.motivoCancelamento),1),m("div",null,f(t.documento.observacaoCancelamento),1)]),e(S,{idVenda:t.documento.id},null,8,["idVenda"])]),m("div",we,[xe,m("div",qe,f(t.documento.observacaoFaturamento),1)]),m("div",Ee,[Fe,m("p",Ve,f(a.$filters.numero(t.documento.totalDesconto,2)),1)])]),_:1})):h("",!0),e(R,{ref:"modalEnvelope"},null,512),e(M,{ref:"modalHistoricoStatus"},null,512)]),_:1})):h("",!0)}var Se=Q(K,[["render",Ie]]);export{Se as E};
