import{_ as O,a0 as L,$ as H,r as v,o as r,n as g,d as f,w as a,f as e,S as u,B as _,T as y,k as m,t as h,j as F,m as S,Q as V,az as z,O as w,F as N,s as D,R as C,G as T,M as A,e as k,l as P,c7 as q,bZ as B,bi as j,bW as M,y as W,b3 as U,b2 as G,bl as Q,bk as R}from"./index.334d0b54.js";import{a as Z,n as J}from"./nfePrincipal.c71985a5.js";import"./compactarValidarNFe.faf7fa84.js";import"./obterItens.73955c07.js";import"./codigosANP.a6c1a264.js";const K={components:{BadgeCopiarUid:L,Badge:H},data(){return{detalhesVisivel:!1,configImpressaoNFe:[]}},methods:{abrirNFe(){$utils.emitter.emit("abrirNFe",this.nota.id)},async configuraImpressao(s){const i=await $db.configuracoes.porNome("impressao.nfe",s);this.configImpressaoNFe=i.length?i.map(o=>({texto:"Imprimir DANFE",...o})):[{valor:"nfe-danfe",texto:"DANFE"},{valor:"nfe-danfe-simplificado",texto:"DANFE Simplificado"},{valor:"duplicata-mercantil",texto:"Duplicata Mercantil"}]}},mixins:[Z],props:{nota:{required:!0,type:Object}},async created(){var c,t,l;const s=(c=this.nota)==null?void 0:c.idDocumento,i=(l=(t=this.nota)==null?void 0:t.cpfCnpjEmitente)==null?void 0:l.replace(/\D/g,"");let o;if(s){const p=await $db.hibrido.le({table:"documento",id:s});o=p==null?void 0:p.idEmpresa}if(!o&&i){const b=(await $erp().empresa.toArray()).find(E=>{var d;return((d=E.numeroDocumentoNacional)==null?void 0:d.replace(/\D/g,""))===i});o=b==null?void 0:b.idContato}await this.configuraImpressao(o)}},X={class:"col-12"},Y={class:"col-12"},$={class:"text-tertiary q-col-gutter-xs"};function ee(s,i,o,c,t,l){const p=v("BadgeCopiarUid"),b=v("badge"),E=v("row");return r(),g(N,null,[o.nota.id?(r(),f(C,{key:0,"manual-focus":"",clickable:"",class:"items-center d-flex q-pa-xs"},{default:a(()=>[e(u,{avatar:"",center:"",class:"mw120"},{default:a(()=>[e(p,{id:o.nota.id,numero:o.nota.nNF,class:"q-mr-sm",cor:"positive"},null,8,["id","numero"])]),_:1}),e(u,{clickable:""},{default:a(()=>[e(E,{class:"items-center q-col-gutter-x-sm"},{default:a(()=>[_("div",{class:"col",onClick:i[0]||(i[0]=(...d)=>l.abrirNFe&&l.abrirNFe(...d))},[e(y,{class:"text-tertiary text-weight-bold"},{default:a(()=>[m(h(o.nota.xNomeDestinatario||"Destinat\xE1rio n\xE3o preenchido"),1)]),_:1}),e(E,{class:"hideondesktop items-center q-my-sm"},{default:a(()=>[_("div",X,[e(y,{caption:"",class:"text-tertiary"},{default:a(()=>[e(F,{name:"event"}),m(" "+h(s.$filters.data(o.nota.dataHoraEmissao)),1)]),_:1}),e(b,{cor:"tertiary",escuro:""},{default:a(()=>[m(h(o.nota.situacao)+h(o.nota.tpAmb==="2"?" - Homologa\xE7\xE3o":""),1)]),_:1})]),_("div",Y,[e(y,{caption:"",class:"text-tertiary text-weight-bold q-mt-sm"},{default:a(()=>[m(h(s.$filters.numero(o.nota.vNF,2))+" ",1),e(S,null,{default:a(()=>[m("Valor da nota")]),_:1})]),_:1})])]),_:1})])]),_:1})]),_:1}),e(u,{onClick:l.abrirNFe,avatar:"",class:"mw100 hideonmobile"},{default:a(()=>[e(y,{class:"text-tertiary"},{default:a(()=>[e(F,{name:"event"}),m(" "+h(s.$filters.data(o.nota.dataHoraEmissao)),1)]),_:1})]),_:1},8,["onClick"]),e(u,{onClick:l.abrirNFe,avatar:"",class:"mw100 hideonmobile"},{default:a(()=>[e(b,{cor:"tertiary",escuro:""},{default:a(()=>[m(h(o.nota.situacao)+h(o.nota.tpAmb==="2"?" - Homologa\xE7\xE3o":""),1)]),_:1})]),_:1},8,["onClick"]),e(u,{onClick:l.abrirNFe,class:"hideonmobile"},{default:a(()=>[e(y,{caption:"",class:"text-right text-tertiary text-weight-bold"},{default:a(()=>[m(h(s.$filters.numero(o.nota.vNF,2))+" ",1),e(S,null,{default:a(()=>[m("Valor da nota")]),_:1})]),_:1})]),_:1},8,["onClick"]),e(u,{side:"",top:""},{default:a(()=>[_("div",$,[e(V,{rounded:"",dense:"",flat:"",icon:s.emDigitacao?"edit":"remove_red_eye",color:"tertiary",class:"no-shadow q-ma-xs hideonmobile",size:"md",onClick:l.abrirNFe,style:{float:"right"}},null,8,["icon","onClick"]),e(V,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-ma-xs hideonmobile",size:"md",style:{float:"right"}},{default:a(()=>[e(z,null,{default:a(()=>[e(w,{link:"",separator:""},{default:a(()=>[(r(!0),g(N,null,D(t.configImpressaoNFe,d=>(r(),f(C,{clickable:"",key:d.valor,onClick:I=>{var n,x;return s.$imprimir(d.valor,(x=(n=o.nota)==null?void 0:n.id)!=null?x:"0")}},{default:a(()=>[e(u,{avatar:""},{default:a(()=>[e(F,{name:"mdi-printer"})]),_:1}),e(u,null,{default:a(()=>[e(y,null,{default:a(()=>[m(h(d.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(V,{rounded:"",dense:"",flat:"",icon:t.detalhesVisivel?"keyboard_arrow_up":"keyboard_arrow_down",size:"md",class:"no-shadow q-ma-xs hideonmobile",color:"tertiary",style:{float:"right"},onClick:i[1]||(i[1]=d=>t.detalhesVisivel=!t.detalhesVisivel)},null,8,["icon"]),e(V,{dense:"",flat:"",icon:"more_vert",round:"",size:"md",class:"hideondesktop"},{default:a(()=>[e(z,null,{default:a(()=>[T((r(),f(w,{link:"","no-border":"",separator:""},{default:a(()=>[e(C,{class:"hideondesktop",clickable:"",onClick:l.abrirNFe},{default:a(()=>[e(u,{avatar:""},{default:a(()=>[e(F,{name:s.emDigitacao?"edit":"remove_red_eye"},null,8,["name"])]),_:1}),e(u,null,{default:a(()=>[m(h(s.emDigitacao?"Editar":"Consultar"),1)]),_:1})]),_:1},8,["onClick"]),(r(!0),g(N,null,D(t.configImpressaoNFe,d=>(r(),f(C,{class:"hideondesktop",clickable:"",key:d.valor,onClick:I=>{var n,x;return s.$imprimir(d.valor,(x=(n=o.nota)==null?void 0:n.id)!=null?x:"0")}},{default:a(()=>[e(u,{avatar:""},{default:a(()=>[e(F,{name:"mdi-printer"})]),_:1}),e(u,null,{default:a(()=>[e(y,null,{default:a(()=>[m(h(d.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),e(C,{class:"hideondesktop",clickable:"",onClick:i[2]||(i[2]=d=>t.detalhesVisivel=!t.detalhesVisivel)},{default:a(()=>[e(u,{avatar:""},{default:a(()=>[e(F,{name:t.detalhesVisivel?"keyboard_arrow_up":"keyboard_arrow_down"},null,8,["name"])]),_:1}),e(u,null,{default:a(()=>[m(" Detalhes ")]),_:1})]),_:1})]),_:1})),[[A]])]),_:1})]),_:1})])]),_:1})]),_:1})):k("",!0),t.detalhesVisivel?(r(),f(C,{key:1,class:"q-px-xs"},{default:a(()=>[e(u,{class:"q-px-none fullWidth"},{default:a(()=>[e(F,{name:"business"}),m(" "+h(o.nota.xFantEmitente||o.nota.xNomeEmitente),1)]),_:1})]),_:1})):k("",!0),e(P)],64)}var ae=O(K,[["render",ee]]);const te={components:{nfeCard:ae,nfePrincipal:J},data(){return{dataFim:null,dataIni:null,grupos:[],notasEmDigitacao:[],notasEmitidas:[],notasOutras:[],tabSelecionada:""}},methods:{async atualizar(){q.log("NFeLista","atualizar()");try{this.$q.loading.show();let s=await $db.hibrido.lista({table:"documentoFiscalEletronico",where:{tipo:"NFe"}});if(this.dataIni&&this.dataFim){const o=new Date(this.dataIni).setHours(0,0,0,0),c=new Date(this.dataFim).setHours(23,59,59,0);s=s.filter(t=>{const l=new Date(t.dataHoraEmissao);return l>=o&&l<=c})}if(this.grupos.length){const o=this.grupos.map(c=>B(c.label).toUpperCase());s=s.filter(c=>{const t=B(c.chNFe.toUpperCase()+c.xNomeEmitente.toUpperCase()+c.xFantEmitente.toUpperCase()+c.cpfCnpjDestinatario.toUpperCase()+c.xNomeDestinatario.toUpperCase()+" "+String(c.nNF)+" ");let l=!0;for(const p of o)p.length>9||isNaN(Number(p))?l=l&&t.includes(p):l=l&&t.includes(" "+p+" ");return l})}s=j.exports.orderBy(s,["dataHoraEmissao"],["desc"]),this.notasEmDigitacao=s.filter(o=>["Em digita\xE7\xE3o"].includes(o.situacao)).slice(0,30),this.notasEmitidas=s.filter(o=>["Emitido","Carta de Corre\xE7\xE3o"].includes(o.situacao)).slice(0,30),this.notasOutras=s.filter(o=>!["Em digita\xE7\xE3o","Carta de Corre\xE7\xE3o","Emitido"].includes(o.situacao)).slice(0,30);let i=this.notasEmDigitacao.length?"notasEmDigitacao":"";i||(i=this.notasEmitidas.length?"notasEmitidas":""),i||(i=this.notasOutras.length?"notasEmitidas":""),this.tabSelecionada=i}catch(s){this.$q.notifyError("Erro ao carregar notas",s)}finally{this.$q.loading.hide()}},fechouNFe(s){q.log("NFeLista","fechouNFe()",s),s&&this.atualizar()},limparFiltro(){this.grupos=[],this.dataFim=new Date,this.dataIni=new Date(M().add(-7,"days"))}},created(){q.log("NFeLista","created()")},mounted(){q.log("NFeLista","mounted()"),this.limparFiltro(),this.atualizar()}},oe={class:"NFeLista q-pb-md q-px-none"},se={class:"u-container"},ie={class:"col-12 col-md-6"},le={class:"col"},ne=_("div",{class:"col-auto",style:{"align-items":"center",display:"flex"}},[_("label",null,"at\xE9")],-1),re={class:"col"},de={key:1,class:"q-pa-lg text-center"},ce=_("p",null,[_("small",null,"N\xE3o h\xE1 notas com o filtro selecionado")],-1),ue=[ce];function me(s,i,o,c,t,l){const p=v("gchips"),b=v("campo"),E=v("row"),d=v("nfeCard"),I=v("nfePrincipal");return r(),g("div",oe,[_("div",se,[e(W,{class:"q-pa-sm no-shadow"},{default:a(()=>[e(E,{class:"items-center q-col-gutter-md"},{default:a(()=>[_("div",ie,[e(p,{modelValue:t.grupos,"onUpdate:modelValue":[i[0]||(i[0]=n=>t.grupos=n),l.atualizar],placeholder:t.grupos.length?"":"Filtre por Empresa, Destinat\xE1rio, N\xFAmero...",before:[{icon:"mdi-filter",handler(){s.filtrar()}}]},null,8,["modelValue","onUpdate:modelValue","placeholder","before"])]),_("div",le,[e(b,{modelValue:t.dataIni,"onUpdate:modelValue":[i[1]||(i[1]=n=>t.dataIni=n),l.atualizar],tipo:"data",dense:"",outlined:""},null,8,["modelValue","onUpdate:modelValue"])]),ne,_("div",re,[e(b,{modelValue:t.dataFim,"onUpdate:modelValue":[i[2]||(i[2]=n=>t.dataFim=n),l.atualizar],tipo:"data",dense:"",outlined:""},null,8,["modelValue","onUpdate:modelValue"])])]),_:1})]),_:1})]),t.tabSelecionada?(r(),g(N,{key:0},[e(G,{modelValue:t.tabSelecionada,"onUpdate:modelValue":i[3]||(i[3]=n=>t.tabSelecionada=n),dense:"",class:"text-primary q-mt-md",align:"left",style:{"border-bottom":"1px solid #0000001f"}},{default:a(()=>[t.notasEmDigitacao.length?(r(),f(U,{key:0,label:"Em digita\xE7\xE3o",name:"notasEmDigitacao",active:""})):k("",!0),t.notasEmitidas.length?(r(),f(U,{key:1,label:"Emitidas",name:"notasEmitidas"})):k("",!0),t.notasOutras.length?(r(),f(U,{key:2,label:"Outras",name:"notasOutras"})):k("",!0)]),_:1},8,["modelValue"]),e(R,{modelValue:t.tabSelecionada,"onUpdate:modelValue":i[4]||(i[4]=n=>t.tabSelecionada=n),animated:"",class:"transparent q-pa-none"},{default:a(()=>[t.notasEmDigitacao.length?(r(),f(Q,{key:0,name:"notasEmDigitacao",class:"q-pa-none transparent"},{default:a(()=>[e(w,{class:"rounded-borders"},{default:a(()=>[(r(!0),g(N,null,D(t.notasEmDigitacao,n=>(r(),f(d,{key:n.id,nota:n},null,8,["nota"]))),128))]),_:1})]),_:1})):k("",!0),t.notasEmitidas.length?(r(),f(Q,{key:1,name:"notasEmitidas",class:"q-pa-none transparent"},{default:a(()=>[e(w,{class:"rounded-borders"},{default:a(()=>[(r(!0),g(N,null,D(t.notasEmitidas,n=>(r(),f(d,{key:n.id,nota:n},null,8,["nota"]))),128))]),_:1})]),_:1})):k("",!0),t.notasOutras.length?(r(),f(Q,{key:2,name:"notasOutras",class:"q-pa-none transparent"},{default:a(()=>[e(w,{class:"rounded-borders"},{default:a(()=>[(r(!0),g(N,null,D(t.notasOutras,n=>(r(),f(d,{key:n.id,nota:n},null,8,["nota"]))),128))]),_:1})]),_:1})):k("",!0)]),_:1},8,["modelValue"])],64)):(r(),g("div",de,ue)),e(I,{onFechar:l.fechouNFe},null,8,["onFechar"])])}var ge=O(te,[["render",me]]);export{ge as default};
