import{_ as c,r as f,o as m,d as p,w as t,f as a,M as h,G as _,h as v,H as Q,Q as s,N as y,i as w,k as n,be as C,P as b,S as g,T as u,j as k,I as $,J as z,D as I}from"./index.2cdadbf3.js";import P from"./ContatoFicha.f26159e6.js";const x={components:{ContatoFicha:P},data(){return{id:"",contato:{},visivel:!1}},emits:["atualizar"],methods:{async atualizar({id:o}){this.id=o;try{this.$q.loading.show()}finally{this.$q.loading.hide()}},async duplicarItem(o){try{let e=await $db.item.duplica(o);await this.atualizar(e),$q.notifyPositive("O produto foi duplicado com sucesso.")}catch(e){$q.notifyError("Ocorreu erro ao duplicar Produto",e)}},async show({id:o}){return this.visivel=!0,this.id=o,this.atualizar({id:o})},fechar(){this.$router.replace({params:{id:""}}).finally(()=>{this.$emit("atualizar")})}}};function D(o,e,F,H,i,l){const d=f("contatoFicha");return m(),p(I,{modelValue:i.visivel,"onUpdate:modelValue":e[1]||(e[1]=r=>i.visivel=r),onHide:l.fechar,maximized:""},{default:t(()=>[a(h,{container:"",view:"hHh LpR fFf",class:"bg-light"},{default:t(()=>[a(_,null,{default:t(()=>[a(v,null,{default:t(()=>[Q(a(s,{icon:"arrow_back",flat:"",round:""},null,512),[[y]]),a(w,null,{default:t(()=>e[2]||(e[2]=[n("Contato")])),_:1}),a(s,{icon:"more_vert",flat:"",round:""},{default:t(()=>[a(C,null,{default:t(()=>[a(b,{link:"","no-border":"",separator:""},{default:t(()=>[a(g,{onClick:e[0]||(e[0]=r=>l.duplicarItem(o.item.id)),clickable:""},{default:t(()=>[a(u,{avatar:""},{default:t(()=>[a(k,{name:"control_point_duplicate"})]),_:1}),a(u,null,{default:t(()=>e[3]||(e[3]=[n("Duplicar Contato")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a($,{class:"u-container"},{default:t(()=>[a(z,null,{default:t(()=>[a(d,{id:i.id},null,8,["id"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onHide"])}var q=c(x,[["render",D]]);export{q as m};
