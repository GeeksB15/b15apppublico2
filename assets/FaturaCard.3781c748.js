import{_ as K,Z as W,aE as I,cL as M,ce as U,aF as Q,bi as X,cM as Y,bq as $,r as T,o as n,d as m,w as e,f as a,B as b,h as O,i as j,T as c,k as s,t as d,bw as N,G as D,bs as aa,j as g,e as B,m as H,l as z,O as V,n as C,F as w,s as q,R as p,S as r,Q as x,az as R,M as A,b0 as ea,C as oa,y as L,N as G,at as ta,b1 as J,as as ia,cN as la,cs as ra}from"./index.9759e0fb.js";import{Q as sa}from"./QSpinnerHourglass.7b169c82.js";import{Q as na}from"./QSpinnerDots.48ef5ee5.js";import{D as da}from"./DocumentosFiscais.4978dd9d.js";import{e as ua}from"./emitirNFe.35117289.js";import{F as ca}from"./FaturaModal.3c45691a.js";import{M as ma}from"./ModalHistoricoStatus.6f2e687b.js";import{n as fa}from"./nfePrincipal.7844ce99.js";const ha={components:{Avatar:W,DocumentosFiscais:da,FaturaModal:ca,ModalHistoricoStatus:ma,nfePrincipal:fa},computed:{config(){return I.configuracoes.valores},mostrarOpcaoEmitirBoleto(){return(this.modalBoleto.condicoesPagamento||[]).length&&(this.modalBoleto.bancos||[]).length},mostrarOpcaoRemoverFatura(){return this.dados.fatura.status==="Aberta"&&!this.dados.carnes.length&&!this.dados.condicaoPagamento.length&&!this.dados.vendas.length&&!this.dados.documentosEnvelope.length},ativarBotaoEmissaoBoleto(){const i=Number(this.modalBoleto.financeiroBanco.value);return Number.isInteger(i)&&i&&this.modalBoleto.condicoesPagamento.find(l=>l.checked)}},data(){return{dbUsuario:I.usuario,dados:{fatura:{}},contatos:{},detalhesVisivel:!1,sistemaPai:"",configImpressaoCarne:[],configImpressaoConvenio:[],configImpressaoFatura:[],configImpressaoEnvelope:[],modalBoleto:{},podeEditar:!1,mostrarBotaoEnviarAvaliacao:!1,mostrarBotaoEnviarPedidosProtheus:!1,mostrarBotaoEmitirCupom:!1}},emits:["executar"],methods:{async enviarPedidosProtheus(i){await $db.fatura.enviarPedidosProtheus(i)},async removerFatura(){try{await new Promise((i,l)=>{this.$q.dialog({message:"Esta a\xE7\xE3o ir\xE1 remover esta fatura.",noRefocus:!0,preventClose:!0,title:"Tem certeza?",cancel:{label:"CANCELAR",push:!0,color:"tertiary",flat:!0},ok:{label:"CONTINUAR",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(()=>{i()}).onCancel(()=>{l()})})}catch{return}this.dados.fatura.id?(await I.fatura.remover(this.dados.fatura.id),this.$emit("executar","atualizar")):this.$q.notify("N\xE3o foi poss\xEDvel realizar a opera\xE7\xE3o")},async abrirModalBoleto(){const l=(await $db.hibrido.lista({table:"documentoFiscalEletronico",where:{idDocumento:this.dados.fatura.id}})).find(h=>h.situacao==="Emitido");for(const h of this.modalBoleto.condicoesPagamento)h.checked=!1,h.disable=!0,h.codigoFinanceiroBoleto="",h.codigoFinanceiroTitulo="",h.banco={};this.modalBoleto.docFiscal=l,this.modalBoleto.checked=!1,this.modalBoleto.financeiroBanco=this.modalBoleto.bancos[0],this.modalBoleto.ativo=!0,this.$nextTick().then(()=>{this.modalBoleto.visivel=!0,this.atualizarBoletos()})},alternarCheckboxModalBoleto(i){if(i==="todos"){this.modalBoleto.condicoesPagamento.forEach(l=>{l.checked=this.modalBoleto.checked});return}this.modalBoleto.checked=!this.modalBoleto.condicoesPagamento.find(l=>!l.checked)},async atualizarBoletos(){let i,l,h,f;f=this.modalBoleto.condicoesPagamento,h=f.reduce((u,k)=>u+"'"+k.idFinanceiroTitulo+"',",""),h=h.slice(0,h.length-1),i=`select
          fTitulo.id,
          fTitulo.codigoFinanceiroTitulo,
          fBoleto.codigoFinanceiroBoleto,
          fBoleto.dataEmissao,
          b.descricao,
          fBanco.agencia,
          fBanco.conta,
          b.arquivoBoleto
        from financeiroTitulo fTitulo
        left join financeiroBoleto fBoleto on fBoleto.codigoFinanceiroBoleto = fTitulo.codigoFinanceiroBoleto
        left join financeiroBanco fBanco on fBanco.CodigoFinanceiroBanco = fBoleto.codigoFinanceiroBanco
        left join _banco b on b.codigoBanco = fBanco.codigoBanco
        where fTitulo.id in (${h})`,this.cancelarAtualizarBoletos=!1;let t=0;do{try{l=await M(i),t=0}catch(u){l=[],++t%3===0&&this.$q.notifyError(u.message)}for(const u of l){const k=f.find(_=>_.idFinanceiroTitulo===u.id);k&&(u.codigoFinanceiroBoleto&&(k.codigoFinanceiroBoleto=u.codigoFinanceiroBoleto,k.banco={descricao:u.descricao,dataEmissao:u.dataEmissao,agencia:u.agencia,conta:u.conta,arquivoBoleto:u.arquivoBoleto}),u.codigoFinanceiroTitulo&&(k.codigoFinanceiroTitulo=u.codigoFinanceiroTitulo,k.disable=!1))}if(l.length===f.length||this.cancelarAtualizarBoletos)break;await U(5e3)}while(1)},async atualizarModalBoleto(){this.modalBoleto={ativo:!1,visivel:!1,loading:!1,codigoFinanceiroBanco:"",condicoesPagamento:[],bancos:[]};const i=[],l=await Q().formaPagamento.toArray(),h=await Q().empresa.where({idContato:this.dados.fatura.idEmpresa}).toArray();if(await(await $db.hibrido.lista({table:"documentoCondicaoPagamento",where:{idDocumento:this.dados.fatura.id}})).forEach(v=>{const y=l.find(P=>P.id===v.idFormaPagamento&&P.tipo===99&&P.tipoFinanceiro==="T\xEDtulo em aberto");y&&i.push({dataVencimento:v.dataVencimento,descricao:y.descricao,idFinanceiroTitulo:v.idFinanceiroTitulo,codigoFinanceiroBoleto:"",checked:!1,disable:!0,valor:v.valor})}),!i.length)return;const t=[];await Q().financeiroBanco.each(v=>{if(!!v.ativo){if(v.id==="7D07229E-B35E-42AA-A312-78313BE61B2F"){t.push(v);return}v.idEmpresa&&h.find(y=>y.id===v.idEmpresa)&&t.push(v)}});const u=[...new Set(t.map(v=>v.codigoBanco))],k=[];await Q()._banco.each(v=>{u.find(y=>y===v.codigoBanco)&&k.push(v)}),this.modalBoleto.condicoesPagamento=X.exports.orderBy(i,"dataVencimento","asc");const _=[];for(const v of t){const y=k.find(E=>E.codigoBanco===v.codigoBanco)||{};if(!y)continue;const P=(y.descricao||"").trim(),S=(v.agencia||"").trim(),o=(v.conta||"").trim();if(!y.arquivoBoleto||!P||!S||!o)continue;let F=P+" - Ag. "+S+" C/C "+o;_.push({arquivoBoleto:y.arquivoBoleto,label:F,value:v.codigoFinanceiroBanco})}_.length&&(this.modalBoleto.financeiroBanco=_[0],this.modalBoleto.bancos=_)},fecharModalBoleto(){this.cancelarAtualizarBoletos=!0,this.cancelarEmitirBoletos=!0,this.modalBoleto.visivel=!1,this.$nextTick().then(()=>{this.modalBoleto.avito=!1})},async emitirImprimirBoleto(){var k;this.modalBoleto.loading=!0;let i,l,h,f={},t=[];h=this.modalBoleto.condicoesPagamento.filter(_=>_.checked);for(const _ of h){if(_.codigoFinanceiroBoleto&&(_.banco||{}).arquivoBoleto){if(!f[_.banco.arquivoBoleto]){f[_.banco.arquivoBoleto]=[_.codigoFinanceiroBoleto];continue}f[_.banco.arquivoBoleto].push(_.codigoFinanceiroBoleto);continue}t.push(_.codigoFinanceiroTitulo)}if(t.length&&((k=this.modalBoleto.financeiroBanco)==null?void 0:k.value)){let _,v,y,P=0,S=0,o,F="";if(this.cancelarEmitirBoletos=!1,this.modalBoleto.docFiscal&&(F=`${this.modalBoleto.docFiscal.nNF} / S\xE9rie ${this.modalBoleto.docFiscal.serie} | `),o=(this.modalBoleto.bancos.find(E=>E.value===this.modalBoleto.financeiroBanco.value)||{}).arquivoBoleto,!o){this.$q.notifyError("Arquivo boleto n\xE3o encontrado");return}i=`sp_financeiro_boletoEmitir ${this.modalBoleto.financeiroBanco.value}, '${t.join(",")}', '${F}'`;do{if(this.cancelarEmitirBoletos)break;try{l=await M(i),P=0}catch(E){l=[],++P%3===0&&this.$q.notifyError(E.message)}if(_=(l||[])[0],v=((_||{}).Msg||"").trim(),y=((_||{}).Retorno||"").trim(),v==="Boleto Gerado com sucesso!"&&y){const E=y.substring(0,y.length-1).split(",");if(!f[o]){f[o]=E;break}for(const Z of E)f[o].push(Z);break}else++S%3===0&&this.$q.notifyError(v);await U(5e3)}while(1)}let u=JSON.parse(localStorage.getItem("clienteSistema"))||{};for(const _ in f){let v;v="https://rel.storage.b15.com.br/Relatorios/"+_+".html?",v+="CodigoFinanceiroBoleto="+f[_].join(","),v+="&Banco="+u.bancoDeDados,v+="&URLServidor="+u.urlServidor,window.open(v)}await this.atualizarBoletos(),this.modalBoleto.loading=!1},alternarDetalhes(){this.detalhesVisivel=!this.detalhesVisivel},async atualizar(){const i=await I.fatura.leCompleto(this.id);i.vendas.sort((f,t)=>new Date(f.dataHoraFinalizado)<new Date(t.dataHoraFinalizado)?-1:1),i.documentosEnvelope.sort((f,t)=>new Date(f.dataHoraFinalizado)<new Date(t.dataHoraFinalizado)?-1:1),i.carnes.sort((f,t)=>new Date(f.dataVencimento)<new Date(t.dataVencimento)?-1:1);const l=await[...i.vendas,...i.documentosEnvelope].reduce(async(f,t)=>(f[t.idContatoVendedor]||(f[t.idContatoVendedor]=await I.contato.le({id:t.idContatoVendedor})),f),{});if(i.fatura.idContato){const f=i.fatura.idContato;l[f]||(l[f]=await I.contato.le({id:f}))}this.configuraImpressaoCarne(i.fatura.idEmpresa),this.configuraImpressaoConvenio(i.fatura.idEmpresa),this.configuraImpressaoEnvelope(i.fatura.idEmpresa),this.configuraImpressaoFatura(i.fatura.idEmpresa),this.contatos=l,this.dados=i,this.atualizarModalBoleto(),this.condicaoPagamento=i.condicaoPagamento,this.resumeCondicaoPagamento();const h=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data;this.podeEditar=!1,h.find(f=>f.id===i.fatura.idEmpresa)&&(this.podeEditar=!0),await this.configuraVisibilidadeBotoes(),this.$nextTick(()=>{i.fatura.id===localStorage.getItem("idFatura")&&(this.podeEditar&&this.$refs.faturaModal.mostrar({id:this.dados.fatura.id}),localStorage.removeItem("idFatura"))})},copiarUid(){const i=this.$refs.uid;i.type="text";try{i.select(),document.execCommand("copy"),this.$q.notify({message:"UID copiado para a \xE1rea de transfer\xEAncia.",type:"info"})}catch{this.$q.notify("Erro ao copiar.")}i.type="hidden",window.getSelection().removeAllRanges()},async configuraImpressaoConvenio(i){const l=await I.configuracoes.porNome("impressao.convenio",i);this.configImpressaoConvenio=[...l.length?l.map(h=>({texto:"Imprimir Conv\xEAnio",...h})):[{valor:"convenio",texto:"Imprimir Conv\xEAnio"}]]},async configuraImpressaoCarne(i){const l=await I.configuracoes.porNome("impressao.carne",i);this.configImpressaoCarne=[...l.length?l.map(h=>({texto:"Imprimir Carn\xEA",...h})):[{valor:"carne-crediario",texto:"Reimprimir carn\xEA e notas promiss\xF3rias da fatura"}]]},async configuraImpressaoEnvelope(i){const l=await I.configuracoes.porNome("impressao.envelope",i);this.configImpressaoEnvelope=[...l.length?l.map(h=>({texto:"Imprimir Envelope",...h})):[{valor:"envelope",texto:"Imprimir Envelope"},{valor:"envelopeMini",texto:"Imprimir Envelope Mini"}]]},async configuraImpressaoFatura(i){const l=await I.configuracoes.porNome("impressao.fatura",i);this.configImpressaoFatura=[...l.length?l.map(h=>({texto:"Imprimir Fatura",...h})):[{valor:"invoice",texto:"Fatura (Invoice)"},{valor:"fatura-recibo",texto:"Recibo"},this.sistemaPai==="optisoul"?{valor:"termoGarantia",texto:"Termo de Garantia"}:{}]]},async configuraVisibilidadeBotoes(){var f,t,u,k,_;let i,l,h;i=await $db.configuracoes.leValorComFiltroEmpresa("integrador.idDispositivo",this.dados.fatura.idEmpresa),this.mostrarBotaoEmitirCupom=!!i,i=await $db.configuracoes.porNome("integracao.bten.business"),l=(t=(f=i[0])==null?void 0:f.valor)!=null?t:!1,i=await $db.configuracoes.porNome("integracao.bten.authorization"),h=(k=(u=i[0])==null?void 0:u.valor)!=null?k:!1,this.mostrarBotaoEnviarAvaliacao=l&&h,i=await $db.configuracoes.porNome("protheus.credentials"),this.mostrarBotaoEnviarPedidosProtheus=!!((_=i[0])!=null&&_.valor)&&!!this.dados.fatura.dataHoraFinalizado},editar(){this.$refs.faturaModal.mostrar({id:this.dados.fatura.id})},async executar(i){switch(i){case"atualizar":case"finalizar":case"retornarOrcamento":case"remover":this.$emit("executar","atualizar");return}await this.atualizar()},async sendReview(i){try{this.$q.loading.show();const l=[],h=this.contatos[i.idContato],f=await $api.bten.send(h,i);for(let t=0;t<f.length;t++){const u=f[t];u.status?l.push(u.telefone):this.$q.notifyError(`Falha ao enviar NPS para ${u.telefone}!`)}this.$q.loading.hide(),l.length&&this.$q.notifyPositive(`NPS enviado para ${l.join(",")}!`)}catch(l){if(l.name==="GeeksException"){this.$q.notifyAlert(l.message);return}this.$q.notifyError("N\xE3o foi possivel enviar NPS para o contato.",l)}finally{this.$q.loading.hide()}},fechouNFe(i){i&&$utils.emitter.emit("atualizarDocumentosFiscais")}},mixins:[Y,ua],props:{id:{required:!0,type:String}},async mounted(){this.sistemaPai=$(),this.atualizar()}},pa={class:"col-12 col-md-6 q-pl-none"},va={class:"q-item-section"},_a={class:"col-3 col-md hideonmobile"},ga={class:"text-left q-my-none"},ba={class:"col-3 col-md hideonmobile"},Ba={class:"text-left q-my-none"},ka={class:"col-6 col-md hideonmobile"},ya={class:"text-right text-h5 text-positive text-weight-bold q-my-none"},Fa={class:"text-right text-weight-normal text-tertiary text-body2 q-my-none"},Ca={class:"col-12 col-md-6"},wa={class:"col-12 col-md-6 full-height items-end hideonmobile"},qa={class:"col-6"},Ea={class:"text-left q-my-none hideondesktop"},Pa={class:"text-left q-my-none"},Va={class:"col-6"},xa={class:"text-right text-weight-normal text-tertiary text-body2 q-my-none"},Ia={class:"text-right text-h5 text-positive text-weight-bold q-my-none"},za={class:"col-12 full-height items-end"},Na={class:"col-12 col-md-6"},Da={class:"text-subtitle1 text-weight-bold q-ma-none items-center"},Sa={class:"col-12 col-md-4"},Ta=b("p",{class:"text-subtitle1 text-weight-bold q-ma-none"}," Faturamento ",-1),Ha={class:"q-ma-none"},Aa={class:"col-12 col-md-2 text-right"},Qa=b("p",{class:"text-subtitle1 text-weight-bold q-ma-none"}," Desconto ",-1),Ra={class:"q-ma-none"},Ma=b("span",{class:"text-weight-bold"},"Emiss\xE3o de Boleto",-1),Ua={class:"q-mt-lg text-center"};function Oa(i,l,h,f,t,u){const k=T("avatar"),_=T("row"),v=T("documentos-fiscais"),y=T("fatura-modal"),P=T("modal-historico-status"),S=T("nfePrincipal");return t.dados.fatura.id?(n(),m(L,{key:0,id:"FaturaCard",class:"extratoItem bg-grey-1 q-pa-sm no-shadow"},{default:e(()=>[a(_,{class:"items-center q-mx-none q-px-none q-mb-sm"},{default:e(()=>[b("div",pa,[a(O,{class:"q-pa-none"},{default:e(()=>[a(k,{imagem:(t.contatos[t.dados.fatura.idContato]||{}).imagem,rotulo:t.dados.fatura.descricaoContato,tamanho:"40",style:{float:"left"}},null,8,["imagem","rotulo"]),a(j,null,{default:e(()=>[b("div",va,[a(c,null,{default:e(()=>[s(d((t.contatos[t.dados.fatura.idContato]||{}).apelido),1)]),_:1}),a(c,{caption:""},{default:e(()=>[s(d((t.contatos[t.dados.fatura.idContato]||{}).nome),1)]),_:1})])]),_:1}),a(N,{rounded:"",color:"tertiary",small:"",class:"q-ma-sm"},{default:e(()=>[s(d(t.dados.fatura.status),1)]),_:1}),a(N,{class:"q-mr-sm",dark:"",color:"positive",onClick:u.copiarUid},{default:e(()=>[s(" #"+d(parseInt(t.dados.fatura.numero)||(t.dados.fatura.id||"").slice(-6))+" ",1),D(b("input",{type:"hidden","onUpdate:modelValue":l[0]||(l[0]=o=>t.dados.fatura.id=o),ref:"uid"},null,512),[[aa,t.dados.fatura.id]])]),_:1},8,["onClick"])]),_:1})]),b("div",_a,[b("p",ga,[t.dados.fatura.dataHoraEmissao?(n(),m(g,{key:0,name:"mdi-calendar-today "})):B("",!0),s(" "+d(i.$filters.data(t.dados.fatura.dataHoraEmissao))+" ",1),a(H,null,{default:e(()=>[s(" Emiss\xE3o ")]),_:1})])]),b("div",ba,[b("p",Ba,[t.dados.fatura.dataHoraFinalizado?(n(),m(g,{key:0,name:"mdi-calendar-check"})):B("",!0),s(" "+d(i.$filters.data(t.dados.fatura.dataHoraFinalizado))+" ",1),a(H,null,{default:e(()=>[s(" Finalizado ")]),_:1})])]),b("div",ka,[b("p",ya,d(i.$filters.numero(t.dados.fatura.totalDocumento,2)),1),b("p",Fa,d(i.$filters.numero(t.dados.fatura.subTotal,2)),1)])]),_:1}),a(z,{class:"hideondesktop q-mb-sm"}),a(_,{class:"q-mx-none q-px-none items-end"},{default:e(()=>[b("div",Ca,[a(V,{class:"no-border text-tertiary"},{default:e(()=>[(n(!0),C(w,null,q(t.dados.vendas,o=>(n(),m(p,{key:o.id,class:"items-center q-pa-none q-mb-xs",style:{"min-height":"auto"}},{default:e(()=>[a(r,{avatar:"",class:"mw80"},{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.tipo)+" ",1),a(N,{dark:"",color:"tertiary",denso:"",round:""},{default:e(()=>[s("#"+d(parseInt(o.numero)||(o.id||"").slice(-6)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(i.$filters.data(o.dataHoraFinalizado))+" - "+d((t.contatos[o.idContatoVendedor]||{}).apelido)+" ",1),a(H,null,{default:e(()=>[s(" Data Finalizado - Vendedor ")]),_:1})]),_:2},1024)]),_:2},1024),a(r,{avatar:"",class:"mw50"},{default:e(()=>[a(N,{dark:"",rounded:"",color:"tertiary",denso:""},{default:e(()=>[s(d(o.status),1)]),_:2},1024)]),_:2},1024),a(r,{right:"",top:"",class:"mw50"},{default:e(()=>[a(c,null,{default:e(()=>[s(d(i.$filters.numero(o.totalDocumento,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),a(V,{class:"no-border text-tertiary"},{default:e(()=>[(n(!0),C(w,null,q(t.dados.documentosEnvelope,o=>(n(),m(p,{key:o.id,class:"items-center q-pa-none q-mb-xs",style:{"min-height":"auto"}},{default:e(()=>[a(r,{avatar:"",class:"mw80"},{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.tipo)+" ",1),a(N,{dark:"",color:"tertiary",denso:"",round:""},{default:e(()=>[s("#"+d(parseInt(o.numero)||(o.id||"").slice(-6)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(i.$filters.data(o.dataHoraFinalizado))+" - "+d((t.contatos[o.idContatoVendedor]||{}).apelido)+" ",1),a(H,null,{default:e(()=>[s(" Data Finalizado - Vendedor ")]),_:1})]),_:2},1024)]),_:2},1024),a(r,{avatar:"",class:"mw50"},{default:e(()=>[a(N,{dark:"",rounded:"",color:"tertiary",denso:""},{default:e(()=>[s(d(o.status),1)]),_:2},1024)]),_:2},1024),a(r,{right:"",top:"",class:"mw50"},{default:e(()=>[a(c,null,{default:e(()=>[s(d(i.$filters.numero(o.totalDocumento,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),a(V,{class:"no-border text-tertiary"},{default:e(()=>[(n(!0),C(w,null,q(t.dados.carnes,o=>(n(),m(p,{key:o.id,class:"q-pa-none q-mb-xs",style:{"min-height":"auto"}},{default:e(()=>[a(r,{avatar:"",class:"mw80"},{default:e(()=>[a(c,null,{default:e(()=>[s(" Carn\xEA "),a(N,{dark:"",color:"tertiary",denso:"",round:""},{default:e(()=>[s("#"+d((o.id||"").slice(-6)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(i.$filters.data(o.dataVencimento)),1)]),_:2},1024)]),_:2},1024),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.formaDePagamento),1)]),_:2},1024)]),_:2},1024),a(r,{right:"",top:""},{default:e(()=>[a(c,null,{default:e(()=>[s(d(i.$filters.numero(o.valorTotal,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),b("div",wa,[a(z,{class:"hideondesktop q-mb-sm q-mt-xs"}),a(x,{rounded:"",dense:"",flat:"",icon:"more_vert",color:"tertiary",class:"no-shadow q-ma-xs",size:"md",style:{float:"right"}},{default:e(()=>[a(R,null,{default:e(()=>[D((n(),m(V,{link:"",separator:""},{default:e(()=>[t.dados.fatura.id?(n(),m(p,{key:0,clickable:"",onClick:l[1]||(l[1]=o=>i.$refs.documentosFiscais.emitirCupom(t.dados.fatura.id))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"account_balance"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s("Emitir cupom")]),_:1})]),_:1})]),_:1})):B("",!0),i.$utils.mapearStatus(t.dados.fatura).permiteNota?(n(),C(w,{key:1},[a(p,{clickable:"",onClick:l[2]||(l[2]=o=>i.emitirNFeV2({idFatura:t.dados.fatura.id},1,"Venda"))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"account_balance"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s("NFe de Sa\xEDda/Venda")]),_:1})]),_:1})]),_:1}),a(p,{clickable:"",onClick:l[3]||(l[3]=o=>i.emitirNFeV2({idFatura:t.dados.fatura.id},0,"Devolu\xE7\xE3o"))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"account_balance"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s("NFe de Entrada/Devolu\xE7\xE3o")]),_:1})]),_:1})]),_:1}),a(p,{clickable:"",onClick:l[4]||(l[4]=o=>i.emitirNFeV2({idFatura:t.dados.fatura.id},1,"Remessa"))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"account_balance"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s("NFe de Remessa")]),_:1})]),_:1})]),_:1})],64)):B("",!0),u.mostrarOpcaoRemoverFatura?(n(),m(p,{key:2,clickable:"",onClick:l[5]||(l[5]=o=>u.removerFatura())},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"mdi-trash-can"})]),_:1}),a(r,null,{default:e(()=>[s("Remover Fatura")]),_:1})]),_:1})):B("",!0),a(p,{clickable:"",onClick:l[6]||(l[6]=o=>i.$refs.modalHistoricoStatus.mostrar({idDocumento:t.dados.fatura.id}))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"history"})]),_:1}),a(r,null,{default:e(()=>[s("Hist\xF3rico do Status")]),_:1})]),_:1}),t.mostrarBotaoEnviarAvaliacao&&t.dados.fatura.status==="Finalizada"?(n(),m(p,{key:3,clickable:"",onClick:l[7]||(l[7]=o=>u.sendReview(t.dados.fatura))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"mdi-file-replace-outline"})]),_:1}),a(r,null,{default:e(()=>[s("Enviar Avalia\xE7\xE3o")]),_:1})]),_:1})):B("",!0),t.mostrarBotaoEnviarPedidosProtheus?(n(),m(p,{key:4,clickable:"",onClick:l[8]||(l[8]=o=>u.enviarPedidosProtheus(t.dados.fatura.id))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"send"})]),_:1}),a(r,null,{default:e(()=>[s("Enviar Pedidos - Protheus")]),_:1})]),_:1})):B("",!0)]),_:1})),[[A]])]),_:1})]),_:1}),t.podeEditar?(n(),m(x,{key:0,rounded:"",dense:"",flat:"",icon:"edit",color:"primary",class:"no-shadow q-ma-xs",size:"md",onClick:u.editar,style:{float:"right"}},null,8,["onClick"])):B("",!0),a(x,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-ma-xs",size:"md",style:{float:"right"}},{default:e(()=>[a(R,null,{default:e(()=>[D((n(),m(V,{link:"",separator:""},{default:e(()=>[u.mostrarOpcaoEmitirBoleto?(n(),m(p,{key:0,clickable:"",onClick:l[9]||(l[9]=o=>u.abrirModalBoleto())},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"mdi-printer"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s("Emitir Boleto")]),_:1})]),_:1})]),_:1})):B("",!0),(n(!0),C(w,null,q(t.configImpressaoFatura,o=>(n(),m(p,{clickable:"",key:o.valor,onClick:F=>i.$imprimir(o.valor,(t.dados.fatura||{}).id||"0")},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"print"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),t.sistemaPai==="optisoul"?(n(!0),C(w,{key:1},q(t.configImpressaoEnvelope,o=>(n(),m(p,{clickable:"",key:o.valor,onClick:F=>i.$imprimir(o.valor,(t.dados.fatura||{}).id||"0")},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"print"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)):B("",!0),(n(!0),C(w,null,q(t.configImpressaoCarne,o=>(n(),m(p,{clickable:"",key:o.valor,onClick:F=>i.$imprimir(o.valor,(t.dados.fatura||{}).id||"0")},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"print"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),(n(!0),C(w,null,q(t.configImpressaoConvenio,o=>(n(),m(p,{clickable:"",key:o.valor,onClick:F=>i.$imprimir(o.valor,(t.dados.fatura||{}).id||"0")},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"print"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),[[A]])]),_:1})]),_:1}),a(x,{rounded:"",dense:"",flat:"",icon:t.detalhesVisivel?"keyboard_arrow_up":"keyboard_arrow_down",size:"md",class:"no-shadow q-ma-xs",color:"tertiary",style:{float:"right"},onClick:u.alternarDetalhes},null,8,["icon","onClick"])])]),_:1}),a(z,{class:"hideondesktop q-mb-sm q-mt-xs"}),a(_,{class:"hideondesktop"},{default:e(()=>[b("div",qa,[b("p",Ea,[t.dados.fatura.dataHoraEmissao?(n(),m(g,{key:0,name:"mdi-calendar-today"})):B("",!0),s(" "+d(i.$filters.data(t.dados.fatura.dataHoraEmissao))+" ",1),a(H,null,{default:e(()=>[s(" Emiss\xE3o ")]),_:1})]),b("p",Pa,[t.dados.fatura.dataHoraFinalizado?(n(),m(g,{key:0,name:"mdi-calendar-check"})):B("",!0),s(" "+d(i.$filters.data(t.dados.fatura.dataHoraFinalizado))+" ",1),t.dados.fatura.dataHoraFinalizado?(n(),m(H,{key:1},{default:e(()=>[s(" Finalizado ")]),_:1})):B("",!0)])]),b("div",Va,[b("p",xa,d(i.$filters.numero(t.dados.fatura.subTotal,2)),1),b("p",Ia,d(i.$filters.numero(t.dados.fatura.totalDocumento,2)),1)]),b("div",za,[a(z,{class:"hideondesktop q-mb-sm q-mt-xs"}),a(x,{rounded:"",dense:"",flat:"",icon:"more_vert",color:"tertiary",class:"no-shadow q-ma-xs",size:"md",style:{float:"right"}},{default:e(()=>[a(R,null,{default:e(()=>[D((n(),m(V,{link:"",separator:""},{default:e(()=>[t.mostrarBotaoEmitirCupom&&t.dados.fatura.id?(n(),m(p,{key:0,clickable:"",onClick:l[10]||(l[10]=o=>i.$refs.documentosFiscais.emitirCupom(t.dados.fatura.id))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"account_balance"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s("Emitir cupom")]),_:1})]),_:1})]),_:1})):B("",!0),i.$utils.mapearStatus(t.dados.fatura).permiteNota?(n(),C(w,{key:1},[a(p,{clickable:"",onClick:l[11]||(l[11]=o=>i.emitirNFeV2({idFatura:t.dados.fatura.id},1,"Venda"))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"account_balance"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s("NFe de Sa\xEDda/Venda")]),_:1})]),_:1})]),_:1}),a(p,{clickable:"",onClick:l[12]||(l[12]=o=>i.emitirNFeV2({idFatura:t.dados.fatura.id},0,"Devolu\xE7\xE3o"))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"account_balance"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s("NFe de Entrada/Devolu\xE7\xE3o")]),_:1})]),_:1})]),_:1}),a(p,{clickable:"",onClick:l[13]||(l[13]=o=>i.emitirNFeV2({idFatura:t.dados.fatura.id},1,"Remessa"))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"account_balance"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s("NFe de Remessa")]),_:1})]),_:1})]),_:1})],64)):B("",!0),u.mostrarOpcaoRemoverFatura?(n(),m(p,{key:2,clickable:"",onClick:l[14]||(l[14]=o=>u.removerFatura())},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"mdi-trash-can"})]),_:1}),a(r,null,{default:e(()=>[s("Remover Fatura")]),_:1})]),_:1})):B("",!0),a(p,{clickable:"",onClick:l[15]||(l[15]=o=>i.$refs.modalHistoricoStatus.mostrar({idDocumento:t.dados.fatura.id}))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"history"})]),_:1}),a(r,null,{default:e(()=>[s("Hist\xF3rico do Status")]),_:1})]),_:1}),t.mostrarBotaoEnviarAvaliacao&&t.dados.fatura.status==="Finalizada"?(n(),m(p,{key:3,clickable:"",onClick:l[16]||(l[16]=o=>u.sendReview(t.dados.fatura))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"mdi-file-replace-outline"})]),_:1}),a(r,null,{default:e(()=>[s("Enviar Avalia\xE7\xE3o")]),_:1})]),_:1})):B("",!0),t.mostrarBotaoEnviarPedidosProtheus?(n(),m(p,{key:4,clickable:"",onClick:l[17]||(l[17]=o=>u.enviarPedidosProtheus(t.dados.fatura.id))},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"send"})]),_:1}),a(r,null,{default:e(()=>[s("Enviar Pedidos - Protheus")]),_:1})]),_:1})):B("",!0)]),_:1})),[[A]])]),_:1})]),_:1}),t.podeEditar?(n(),m(x,{key:0,rounded:"",dense:"",flat:"",icon:"edit",color:"primary",class:"no-shadow q-ma-xs",size:"md",onClick:u.editar,style:{float:"right"}},null,8,["onClick"])):B("",!0),a(x,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-ma-xs",size:"md",style:{float:"right"}},{default:e(()=>[a(R,null,{default:e(()=>[a(V,{link:"",separator:""},{default:e(()=>[u.mostrarOpcaoEmitirBoleto?(n(),m(p,{key:0,clickable:"",onClick:l[18]||(l[18]=o=>u.abrirModalBoleto())},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"mdi-printer"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s("Emitir Boleto")]),_:1})]),_:1})]),_:1})):B("",!0),(n(!0),C(w,null,q(t.configImpressaoFatura,o=>(n(),m(p,{clickable:"",key:o.valor,onClick:F=>i.$imprimir(o.valor,(t.dados.fatura||{}).id||"0")},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"print"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),t.sistemaPai==="optisoul"?(n(!0),C(w,{key:1},q(t.configImpressaoEnvelope,o=>(n(),m(p,{clickable:"",key:o.valor,onClick:F=>i.$imprimir(o.valor,(t.dados.fatura||{}).id||"0")},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"print"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)):B("",!0),(n(!0),C(w,null,q(t.configImpressaoCarne,o=>(n(),m(p,{clickable:"",key:o.valor,onClick:F=>i.$imprimir(o.valor,(t.dados.fatura||{}).id||"0")},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"print"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),(n(!0),C(w,null,q(t.configImpressaoConvenio,o=>(n(),m(p,{clickable:"",key:o.valor,onClick:F=>i.$imprimir(o.valor,(t.dados.fatura||{}).id||"0")},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(g,{name:"print"})]),_:1}),a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1}),a(x,{rounded:"",dense:"",flat:"",icon:t.detalhesVisivel?"keyboard_arrow_up":"keyboard_arrow_down",size:"md",class:"no-shadow q-ma-xs",color:"tertiary",style:{float:"right"},onClick:u.alternarDetalhes},null,8,["icon","onClick"])])]),_:1}),t.detalhesVisivel?(n(),m(z,{key:0,class:"hideondesktop q-my-sm"})):B("",!0),D(a(_,{class:"items-start q-mx-none q-px-none q-mt-md"},{default:e(()=>[b("div",Na,[b("p",Da,[a(g,{name:"business"}),s(" "+d(t.dados.fatura.descricaoEmpresa),1)]),a(v,{ref:"documentosFiscais",idFatura:t.dados.fatura.id},null,8,["idFatura"])]),b("div",Sa,[Ta,b("p",Ha,d(t.dados.fatura.observacaoFaturamento),1),a(V,{class:"no-border"},{default:e(()=>[(n(!0),C(w,null,q(i.condicaoPagamentoResumo,o=>(n(),m(p,{key:o.id,class:"q-pa-none row",style:{"min-height":"auto"}},{default:e(()=>[a(r,null,{default:e(()=>[a(c,null,{default:e(()=>[s(d(o.formaPagamento),1)]),_:2},1024)]),_:2},1024),a(r,{class:"text-right"},{default:e(()=>[a(c,null,{default:e(()=>[s(d(i.$filters.numero(o.valor,2))+d(o.parcelas>1?` (em ${o.parcelas}x)`:""),1)]),_:2},1024)]),_:2},1024),a(r,{right:""},{default:e(()=>[a(c,null,{default:e(()=>[s(d(i.$filters.data(o.dataVencimento)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),b("div",Aa,[Qa,b("p",Ra,d(i.$filters.numero(t.dados.fatura.totalDesconto,2)),1)])]),_:1},512),[[ea,t.detalhesVisivel]]),a(y,{ref:"faturaModal",onExecutar:u.executar},null,8,["onExecutar"]),t.modalBoleto.ativo?(n(),m(oa,{key:1,modelValue:t.modalBoleto.visivel,"onUpdate:modelValue":l[21]||(l[21]=o=>t.modalBoleto.visivel=o),onHide:u.fecharModalBoleto,minimized:""},{default:e(()=>[a(L,null,{default:e(()=>[a(O,null,{default:e(()=>[a(j,null,{default:e(()=>[Ma]),_:1}),D(a(x,{flat:"",round:"",dense:"",icon:"close"},null,512),[[A]])]),_:1}),t.modalBoleto.docFiscal?(n(),m(G,{key:0},{default:e(()=>[s(" Nota fiscal: "+d(t.modalBoleto.docFiscal.nNF)+" / S\xE9rie: "+d(t.modalBoleto.docFiscal.serie),1)]),_:1})):B("",!0),a(G,null,{default:e(()=>[t.modalBoleto.condicoesPagamento.filter(o=>o.disable).length?(n(),m(V,{key:0,dense:"",highlight:"",class:"q-mb-sm"},{default:e(()=>[a(c,{header:""},{default:e(()=>[s("Recuperando informa\xE7\xF5es do servidor "),a(sa)]),_:1}),a(z),(n(!0),C(w,null,q(t.modalBoleto.condicoesPagamento.filter(o=>o.disable),(o,F)=>(n(),m(p,{key:F,tag:"label"},{default:e(()=>[a(r,null,{default:e(()=>[o.disable?(n(),m(na,{key:0})):B("",!0)]),_:2},1024),a(c,null,{default:e(()=>[a(c,{header:""},{default:e(()=>[s(d(o.descricao)+" - "+d(i.$filters.numero(o.valor,2))+" - Venc. "+d(i.$filters.data(o.dataVencimento)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):B("",!0),b("form",{class:"q-pa-sm",onSubmit:l[20]||(l[20]=ta(o=>u.emitirImprimirBoleto(),["prevent"]))},[t.modalBoleto.condicoesPagamento.filter(o=>!o.disable&&o.codigoFinanceiroBoleto).length?(n(),m(V,{key:0,dense:"",highlight:"",class:"q-mb-sm"},{default:e(()=>[a(c,{header:""},{default:e(()=>[s("Boletos emitidos")]),_:1}),a(z),(n(!0),C(w,null,q(t.modalBoleto.condicoesPagamento.filter(o=>!o.disable&&o.codigoFinanceiroBoleto),(o,F)=>(n(),m(p,{key:F,tag:"label"},{default:e(()=>[a(r,null,{default:e(()=>[a(J,{modelValue:o.checked,"onUpdate:modelValue":E=>o.checked=E},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(c,null,{default:e(()=>[a(c,{header:""},{default:e(()=>[s(d(o.descricao)+" - "+d(i.$filters.numero(o.valor,2))+" - Venc. "+d(i.$filters.data(o.dataVencimento)),1)]),_:2},1024),a(c,{caption:""},{default:e(()=>[s(d(o.banco.descricao)+" - Ag. "+d(o.banco.agencia)+" C/C "+d(o.banco.conta)+" - Emitido em "+d(i.$filters.dataHora(o.banco.dataEmissao)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):B("",!0),t.modalBoleto.condicoesPagamento.filter(o=>!o.disable&&!o.codigoFinanceiroBoleto).length?(n(),m(V,{key:1,dense:"",highlight:""},{default:e(()=>[a(c,{header:""},{default:e(()=>[s("Boletos a emitir")]),_:1}),a(z),a(p,null,{default:e(()=>[a(c,null,{default:e(()=>[a(ia,{modelValue:t.modalBoleto.financeiroBanco,"onUpdate:modelValue":l[19]||(l[19]=o=>t.modalBoleto.financeiroBanco=o),options:t.modalBoleto.bancos},null,8,["modelValue","options"])]),_:1})]),_:1}),(n(!0),C(w,null,q(t.modalBoleto.condicoesPagamento.filter(o=>!o.disable&&!o.codigoFinanceiroBoleto),(o,F)=>(n(),m(p,{key:F,tag:"label"},{default:e(()=>[a(r,null,{default:e(()=>[a(J,{modelValue:o.checked,"onUpdate:modelValue":E=>o.checked=E},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(c,null,{default:e(()=>[a(c,{header:""},{default:e(()=>[s(d(o.descricao)+" - "+d(i.$filters.numero(o.valor,2))+" - Venc. "+d(i.$filters.data(o.dataVencimento)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):B("",!0),b("div",Ua,[D(a(x,{color:"tertiary",flat:"",label:"Cancelar"},null,512),[[A]]),a(x,{color:"primary",class:"q-ml-sm",label:"Imprimir",type:"submit",unelevated:"",disable:!u.ativarBotaoEmissaoBoleto},null,8,["disable"])])],32),a(la,{showing:t.modalBoleto.loading},{default:e(()=>[a(ra,{size:"50px",color:"primary"})]),_:1},8,["showing"])]),_:1})]),_:1})]),_:1},8,["modelValue","onHide"])):B("",!0),a(P,{ref:"modalHistoricoStatus"},null,512),a(S,{onFechar:u.fechouNFe},null,8,["onFechar"])]),_:1})):B("",!0)}var Ya=K(ha,[["render",Oa]]);export{Ya as F};
