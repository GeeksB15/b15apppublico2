import{_ as y,o as d,d as f,w as o,f as e,z as L,h as k,i as E,k as m,H as F,Q as v,N,C as r,dS as V,p as h,F as w,u as C,t as c,D as $,M as R,G as P,s as j,I as Q,J as B,B as O,P as T,S as I,T as p,U as _,cL as z,e as g,X as U,aP as K,bq as G,cE as J,r as b,be as X,j as x}from"./index.2cdadbf3.js";import{n as A}from"./nfeInutilizacao.fa272992.js";import"./compactarValidarNFe.8e1d2e37.js";const W={data:function(){return{idEmitente:"",inutilizadas:[]}},methods:{async abrirModalfaixasInutilizadas(){$utils.gconsole.log("ConfiguracoesDocumentosFiscais","abrirModalFaixasInutilizadas"),this.$refs.dialogFaixasInutilizadas.show()},async selecionarEmpresaInutilizacao(s){try{const t=s.id;if(!t)return;let l=await $db.contato.le({id:t});this.idEmpresa=t,$utils.verificarErro(!l||!l.id,"N\xE3o foi poss\xEDvel recuperar os dados da empresa."),$utils.verificarErro(!l.numeroDocumentoNacional,"Empresa emitente sem CNPJ cadastrado")}catch(t){this.$q.notifyError("Erro ao selecionar a empresa.",t)}}},async created(){const s=await $db.hibrido.lista({table:"documentoFiscalEletronicoXml",where:{situacao:"Inutilizado"}});this.inutilizadas=[];for(let t in s){const l=new DOMParser().parseFromString(s[t].xmlEnvio,"text/xml"),u=l.getElementsByTagName("nNFIni")[0].innerHTML,n=l.getElementsByTagName("nNFFin")[0].innerHTML,i=(await $db.empresa.le()).filter(a=>{if($utils.filtrarDigitos(a.numeroDocumentoNacional)===$utils.filtrarDigitos(s[t].cpfCnpjEmitente))return a});this.inutilizadas.push({dataHoraEnvio:new Date(s[t].dataHoraEnvio),emitente:`${i[0].apelido}`,operacao:s[t].operacao,status:s[t].status,nNFIni:u,nNFFin:n})}}},Y={class:"layout-padding"},Z={class:"text-left"},tt={class:"text-left"},et={class:"text-right"},at={class:"text-right"},ot={class:"text-right"},st={class:"text-right"};function it(s,t,l,u,n,i){return d(),f($,{ref:"dialogFaixasInutilizadas","full-width":""},{default:o(()=>[e(L,{class:"q-dialog-plugin"},{default:o(()=>[e(k,{class:"bg-primary text-white"},{default:o(()=>[e(E,null,{default:o(()=>t[0]||(t[0]=[m("Relat\xF3rio de faixas Inutilizadas")])),_:1}),F(e(v,{dense:"",flat:"",icon:"close",round:""},null,512),[[N]])]),_:1}),r("div",Y,[e(V,null,{default:o(()=>[t[1]||(t[1]=r("thead",null,[r("tr",null,[r("th",{class:"text-left"},"Data"),r("th",{class:"text-left"},"Emitente"),r("th",{class:"text-right"},"Numera\xE7\xE3o Inicial"),r("th",{class:"text-right"},"Numera\xE7\xE3o Final"),r("th",{class:"text-right"},"Opera\xE7\xE3o"),r("th",{class:"text-right"},"Status")])],-1)),r("tbody",null,[(d(!0),h(w,null,C(s.inutilizadas,a=>(d(),h("tr",{key:a.id},[r("td",Z,c(a.dataHoraEnvio),1),r("td",tt,c(a.emitente),1),r("td",et,c(a.nNFIni),1),r("td",at,c(a.nNFFin),1),r("td",ot,c(a.operacao),1),r("td",st,c(a.status),1)]))),128))])]),_:1})])]),_:1})]),_:1},512)}var nt=y(W,[["render",it]]);const lt={components:{},computed:{documentosEncontrados(){return this.documentos.length>0}},data(){return{contatos:{},carregando:!1,documentos:[],termoBusca:null}},emits:["idDocumentoSelecionado"],methods:{async atualizar(){try{const s={},t=[],l=[];let u=[],n=this.termoBusca;this.carregando=!0,/^#\d+$/g.test(this.termoBusca)&&(n=this.termoBusca.slice(1));for(const i of this.componentProps.documentos){const a=await $db.hibrido.lista({table:"documento",where:i});u=u.concat(a)}for(const i of u)n&&Number(n)!==Number(i.numero)&&Number(n)!==Number(i.codigoDocumento)||(t.push(i),l.push(i.idContato),l.push(i.idEmpresa));t.sort((i,a)=>new Date(i.dataHoraFinalizado)>new Date(a.dataHoraFinalizado)?-1:1);for(const i of Array.from(new Set(l))){const a=await $db.contato.le({id:i});!(a!=null&&a.id)||(s[a.id]=a)}this.contatos=s,this.documentos=t.slice(0,30)}catch(s){console.log(s.message)}finally{this.carregando=!1}},hide(){this.componentProps.visivel=!1},selecionar(s){this.$emit("idDocumentoSelecionado",s)}},props:{componentProps:{default:()=>({visivel:!1,documentos:[]}),required:!0,type:Object}},watch:{"componentProps.visivel"(s){if(s){const t=setInterval(()=>{this.$refs.search&&(this.$refs.search.focus(),clearInterval(t))},100);this.atualizar()}s||(this.contatos={},this.carregando=!1,this.documentos=[],this.termoBusca=null)}}},rt={class:"col-xs-12 col-sm-12"},ct={key:0,class:"q-px-sm"},dt={class:"text-h6"},ut={key:1,class:"row justify-center q-pt-sm"},mt={key:2,class:"bg-light q-pa-lg round-borders text-black text-center"};function ft(s,t,l,u,n,i){return d(),f($,{modelValue:l.componentProps.visivel,"onUpdate:modelValue":t[1]||(t[1]=a=>l.componentProps.visivel=a),persistent:"",maximized:"",onKeyup:G(i.hide,["esc"])},{default:o(()=>[e(R,{class:"bg-white",container:"",view:"hHr lpR fFr"},{default:o(()=>[e(P,null,{default:o(()=>[e(k,null,{default:o(()=>[e(v,{dense:"",flat:"",icon:"arrow_back",round:"",onClick:i.hide},null,8,["onClick"]),e(E,{class:"row"},{default:o(()=>[r("div",rt,[e(j,{modelValue:n.termoBusca,"onUpdate:modelValue":[t[0]||(t[0]=a=>n.termoBusca=a),i.atualizar],color:"none",ref:"search",dark:"",dense:"",placeholder:"Filtre pelo n\xFAmero ou c\xF3digo",debounce:"600",clearable:"","clear-icon":"close"},null,8,["modelValue","onUpdate:modelValue"])])]),_:1})]),_:1})]),_:1}),e(Q,null,{default:o(()=>[e(B,null,{default:o(()=>[!n.carregando&&i.documentosEncontrados?(d(),h("div",ct,[O(s.$slots,"content",{documentos:n.documentos,contatos:n.contatos},()=>[e(T,{separator:""},{default:o(()=>[(d(!0),h(w,null,C(n.documentos,a=>F((d(),f(I,{key:a.id,clickable:"",onClick:D=>i.selecionar(a.id)},{default:o(()=>[e(p,{"no-wrap":""},{default:o(()=>[e(_,{caption:"",lines:"1"},{default:o(()=>[r("span",dt,c(a.operacao),1)]),_:2},1024),e(_,{caption:"",lines:"4"},{default:o(()=>[t[2]||(t[2]=r("span",{class:"text-weight-bold"},"Emitente",-1)),m(" "+c(n.contatos[a.idEmpresa].nome)+" - "+c(n.contatos[a.idEmpresa].numeroDocumentoNacional),1)]),_:2},1024),e(_,{caption:"",lines:"4"},{default:o(()=>[t[3]||(t[3]=r("span",{class:"text-weight-bold"},"Destinat\xE1rio",-1)),m(" "+c(n.contatos[a.idContato].nome)+" - "+c(n.contatos[a.idContato].numeroDocumentoNacional),1)]),_:2},1024)]),_:2},1024),e(p,{"no-wrap":"",side:""},{default:o(()=>[e(_,{caption:"",lines:"1"},{default:o(()=>[a.numero&&a.codigoDocumento?(d(),h(w,{key:0},[e(z,{class:"q-ml-sm",color:"positive",escuro:""},{default:o(()=>[m(" N\xFAm. #"+c(parseInt(a.numero)),1)]),_:2},1024),e(z,{class:"q-ml-sm",color:"positive",escuro:""},{default:o(()=>[m(" C\xF3d. #"+c(parseInt(a.codigoDocumento)),1)]),_:2},1024)],64)):g("",!0),a.numero&&a.codigoDocumento?g("",!0):(d(),f(z,{key:1,class:"q-ml-sm",color:"positive",escuro:""},{default:o(()=>[m(" ID #"+c(a.id.slice(-6)),1)]),_:2},1024))]),_:2},1024),e(_,{caption:"",lines:"1"},{default:o(()=>[e(z,{rounded:"",color:"tertiary",small:""},{default:o(()=>[m(c(a.status),1)]),_:2},1024)]),_:2},1024),e(_,{caption:"",lines:"2"},{default:o(()=>[t[4]||(t[4]=r("span",{class:"text-weight-bold"},"Emiss\xE3o",-1)),m(" "+c(s.$filters.dataHora(a.dataHoraEmissao)),1)]),_:2},1024),a.dataHoraFinalizado?(d(),f(_,{key:0,caption:"",lines:"2"},{default:o(()=>[t[5]||(t[5]=r("span",{class:"text-weight-bold"},"Finaliza\xE7\xE3o",-1)),m(" "+c(s.$filters.dataHora(a.dataHoraFinalizado)),1)]),_:2},1024)):g("",!0)]),_:2},1024)]),_:2},1032,["onClick"])),[[U]])),128))]),_:1})])])):g("",!0),n.carregando?(d(),h("div",ut,[e(K,{color:"faded",size:50})])):g("",!0),!n.carregando&&!i.documentosEncontrados?(d(),h("div",mt," N\xE3o foram encontrados registros com os crit\xE9rios selecionados. ")):g("",!0)]),_:3})]),_:3})]),_:3})]),_:3},8,["modelValue","onKeyup"])}var pt=y(lt,[["render",ft]]);const ht={components:{nfeInutilizacao:A,nfeFaixasInutilizadas:nt,PromptDocumento:pt,Tutorial:J},data(){return{promptDocumentoProps:{}}},methods:{abrirModalInutilizacao(){this.$refs.modalNFeInutilizacao.abrirModalInutilizacao()},abrirPromptDocumento(){this.promptDocumentoProps={visivel:!0,documentos:[{tipo:"Transfer\xEAncia",status:"Finalizado"},{tipo:"Transfer\xEAncia",status:"Enviado"},{tipo:"Remessa",status:"Finalizado"}]}},adicionarNFe(){$utils.gconsole.log("NFeLayout","adicionarNFe()"),$utils.emitter.emit("adicionarNFe")},async checarNota(s){let t,l,u;if(t=await $db.hibrido.lista({table:"documentoFiscalEletronico",where:{idDocumento:s}}),l=t.find(n=>n.situacao!=="Cancelado"),t||(u="Falha na consulta das notas",$q.notifyError(u)),u)throw new Error(u);return l},async gerarNFe(s){try{const t=await this.checarNota(s);this.promptDocumentoProps.visivel=!1;const l=await $db.hibrido.le({table:"documento",id:s}),u=l==null?void 0:l.operacao;if(!u)return;t||$utils.emitter.emit("gerarNFe",s,1,u),t&&$utils.emitter.emit("abrirNFe",t.id)}catch(t){console.log(t.message)}},abrirModalFaixasInutilizadas(){this.$refs.modalNFeFaixasInutilizadas.abrirModalfaixasInutilizadas()}},async created(){$utils.gconsole.log("NFeLayout","created()")}},_t={id:"NFeLayout"};function gt(s,t,l,u,n,i){const a=b("barraTopo"),D=b("Tutorial"),H=b("router-view"),M=b("nfeInutilizacao"),q=b("nfeFaixasInutilizadas"),S=b("PromptDocumento");return d(),h("div",_t,[e(P,{elevated:"",class:"bg-gradiente text-white"},{default:o(()=>[e(a),e(k,{class:"q-px-sm"},{default:o(()=>[e(E,null,{default:o(()=>t[0]||(t[0]=[m("Nota fiscal")])),_:1}),e(D,{componente:"nfeLayout"}),e(v,{onClick:i.adicionarNFe,icon:"add",label:"Novo",size:"md",flat:"",dense:"",round:"",class:"hideonmobile"},null,8,["onClick"]),e(v,{onClick:i.adicionarNFe,icon:"add",size:"md",flat:"",dense:"",round:"",class:"hideondesktop"},null,8,["onClick"]),e(v,{icon:"more_vert",size:"md",rounded:"",dense:"",flat:"",class:"q-ml-sm"},{default:o(()=>[e(X,null,{default:o(()=>[F((d(),f(T,{link:"",separator:""},{default:o(()=>[F((d(),f(I,{onClick:i.abrirModalInutilizacao,clickable:""},{default:o(()=>[e(p,{avatar:""},{default:o(()=>[e(x,{name:"healing"})]),_:1}),e(p,null,{default:o(()=>t[1]||(t[1]=[m("Inutiliza\xE7\xE3o de n\xFAmero NFe/NFCe")])),_:1})]),_:1},8,["onClick"])),[[N]]),F((d(),f(I,{onClick:i.abrirModalFaixasInutilizadas,clickable:""},{default:o(()=>[e(p,{avatar:""},{default:o(()=>[e(x,{name:"healing"})]),_:1}),e(p,null,{default:o(()=>t[2]||(t[2]=[m("Relat\xF3rio de faixas Inutilizadas")])),_:1})]),_:1},8,["onClick"])),[[N]]),F((d(),f(I,{onClick:i.abrirPromptDocumento,clickable:""},{default:o(()=>[e(p,{avatar:""},{default:o(()=>[e(x,{name:"account_balance"})]),_:1}),e(p,null,{default:o(()=>t[3]||(t[3]=[m("Gerar NF-e")])),_:1})]),_:1},8,["onClick"])),[[N]])]),_:1})),[[N]])]),_:1})]),_:1})]),_:1})]),_:1}),e(Q,null,{default:o(()=>[e(B,null,{default:o(()=>[e(H)]),_:1})]),_:1}),e(M,{ref:"modalNFeInutilizacao"},null,512),e(q,{ref:"modalNFeFaixasInutilizadas"},null,512),e(S,{onIdDocumentoSelecionado:i.gerarNFe,componentProps:n.promptDocumentoProps},null,8,["onIdDocumentoSelecionado","componentProps"])])}var vt=y(ht,[["render",gt]]);export{vt as default};
