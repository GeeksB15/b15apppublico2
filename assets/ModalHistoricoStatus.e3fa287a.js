import{_ as Q,$ as H,r as U,o as l,d as u,w as o,f as e,M as k,G as q,h as D,i as S,k as g,H as C,Q as T,N,I as V,J as A,C as m,P as B,p as b,F as w,u as E,l as I,e as h,S as L,T as x,U as y,t as d,j as $,D as F}from"./index.aa8c459a.js";const P={components:{Avatar:H},computed:{dadosEncontrados(){return(this.dados.status||[]).length}},data(){return{dados:{status:[],contatos:{}},visivel:!1}},methods:{async exibirHistorico(c){var _,v,t;let i;try{i=setTimeout(()=>{$q.loading.show({message:"Carregando informa\xE7\xF5es...",boxClass:"bg-grey-2 text-grey-9",spinnerColor:"primary"})},500);const n=await $db.documentoStatus.leHistoricoOnline(c);for(const s of n){const a=[];let r,p,f;!(s.cpfUsuario||((_=s.cpfUsuario)==null?void 0:_.replace(/\D/g,"")))||this.dados.contatos[s.cpfUsuario]||this.dados.contatos[(v=s.cpfUsuario)==null?void 0:v.replace(/\D/g,"")]||(r=s.cpfUsuario,p=await $erp().contato.where({numeroDocumentoNacional:r}).toArray(),Array.prototype.push.apply(a,p),r=(t=s.cpfUsuario)==null?void 0:t.replace(/\D/g,""),r&&r!==s.cpfUsuario&&(p=await $erp().contato.where({numeroDocumentoNacional:r}).toArray(),Array.prototype.push.apply(a,p)),f=a[0],f&&(this.dados.contatos[s.cpfUsuario]={nome:f.nome,imagem:f.imagem}))}this.dados.status=n}catch(n){this.$q.notify({type:"negative",message:n.message})}finally{clearTimeout(i),$q.loading.hide()}},async mostrar(c){const{idDocumento:i}=c;if(await this.exibirHistorico(i),!(this.dados.status||[]).length){this.$q.notify({type:"warning",message:"N\xE3o h\xE1 hist\xF3rico dispon\xEDvel."});return}this.visivel=!0},onHide(){this.dados={status:[],contatos:{}}}}},M={class:"layout-padding",container:""},O={class:"q-mr-sm"},j={class:"q-mr-md"};function z(c,i,_,v,t,n){const s=U("avatar");return l(),u(F,{modelValue:t.visivel,"onUpdate:modelValue":i[0]||(i[0]=a=>t.visivel=a),onHide:n.onHide},{default:o(()=>[e(k,{view:"hHh LpR fFf",container:"",class:"bg-white"},{default:o(()=>[e(q,null,{default:o(()=>[e(D,null,{default:o(()=>[e(S,null,{default:o(()=>[g("Hist\xF3rico do Status")]),_:1}),C(e(T,{dense:"",flat:"",icon:"close",round:""},null,512),[[N]])]),_:1})]),_:1}),e(V,null,{default:o(()=>[e(A,null,{default:o(()=>[m("div",M,[n.dadosEncontrados?(l(),u(B,{key:0,"no-border":"",dense:"",class:"q-my-md"},{default:o(()=>[(l(!0),b(w,null,E(t.dados.status,(a,r)=>(l(),b(w,{key:a.codigoDocumentoStatus},[r?(l(),u(I,{key:0})):h("",!0),e(L,{class:"item-center q-my-sm"},{default:o(()=>[e(x,{avatar:""},{default:o(()=>[e(s,{imagem:(t.dados.contatos[a.cpfUsuario]||{}).imagem,rotulo:(t.dados.contatos[a.cpfUsuario]||{}).nome,tamanho:"40"},null,8,["imagem","rotulo"])]),_:2},1024),e(x,null,{default:o(()=>[a.observacao?(l(),u(y,{key:0,class:"text-body1 text-weight-regular text-black q-pb-sm"},{default:o(()=>[g(d(a.observacao),1)]),_:2},1024)):h("",!0),t.dados.contatos[a.cpfUsuario]?(l(),u(y,{key:1,caption:"",class:"q-pb-xs"},{default:o(()=>[m("strong",null,d((t.dados.contatos[a.cpfUsuario]||{}).nome),1)]),_:2},1024)):h("",!0),e(y,{class:"text-body2 text-weight-light text-black"},{default:o(()=>[m("span",O,d(a.statusOriginal),1),m("span",null,[e($,{name:"east",color:"primary",class:"q-mr-sm"}),g(d(a.statusFinalizado),1)])]),_:2},1024),e(y,{class:"text-body2"},{default:o(()=>[m("span",j,d(c.$filters.data(a.dataHoraEmissao)),1),g(d(c.$filters.hora(a.dataHoraEmissao)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)],64))),128))]),_:1})):h("",!0)])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onHide"])}var J=Q(P,[["render",z]]);export{J as M};