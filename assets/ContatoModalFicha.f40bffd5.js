import{_ as c,r as f,o as m,d as p,w as t,f as a,M as h,G as _,h as v,H as Q,Q as s,N as y,i as w,k as n,bg as C,P as b,S as g,T as u,j as k,I as $,J as z,D as I}from"./index.828e7912.js";import P from"./ContatoFicha.5ecece83.js";const x={components:{ContatoFicha:P},data(){return{id:"",contato:{},visivel:!1}},emits:["atualizar"],methods:{async atualizar({id:e}){this.id=e;try{this.$q.loading.show()}finally{this.$q.loading.hide()}},async duplicarItem(e){try{let o=await $db.item.duplica(e);await this.atualizar(o),$q.notifyPositive("O produto foi duplicado com sucesso.")}catch(o){$q.notifyError("Ocorreu erro ao duplicar Produto",o)}},async show({id:e}){return this.visivel=!0,this.id=e,this.atualizar({id:e})},fechar(){this.$router.replace({params:{id:""}}).finally(()=>{this.$emit("atualizar")})}}};function D(e,o,F,H,i,l){const d=f("contatoFicha");return m(),p(I,{modelValue:i.visivel,"onUpdate:modelValue":o[1]||(o[1]=r=>i.visivel=r),onHide:l.fechar,maximized:""},{default:t(()=>[a(h,{container:"",view:"hHh LpR fFf",class:"bg-light"},{default:t(()=>[a(_,null,{default:t(()=>[a(v,null,{default:t(()=>[Q(a(s,{icon:"arrow_back",flat:"",round:""},null,512),[[y]]),a(w,null,{default:t(()=>[n("Contato")]),_:1}),a(s,{icon:"more_vert",flat:"",round:""},{default:t(()=>[a(C,null,{default:t(()=>[a(b,{link:"","no-border":"",separator:""},{default:t(()=>[a(g,{onClick:o[0]||(o[0]=r=>l.duplicarItem(e.item.id)),clickable:""},{default:t(()=>[a(u,{avatar:""},{default:t(()=>[a(k,{name:"control_point_duplicate"})]),_:1}),a(u,null,{default:t(()=>[n("Duplicar Contato")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a($,{class:"u-container"},{default:t(()=>[a(z,null,{default:t(()=>[a(d,{id:i.id},null,8,["id"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onHide"])}var q=c(x,[["render",D]]);export{q as m};
