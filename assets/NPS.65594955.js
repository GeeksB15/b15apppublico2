<<<<<<<< HEAD:assets/NPS.65594955.js
import{_ as q,o as d,d as u,w as n,f as s,H as x,I as b,h as _,Q as t,e as m,i as w,j as h,n as c,B as o,t as f,a$ as v,q as p,G as y,b0 as k,L as C,X as z,Y as S}from"./index.9759e0fb.js";const Q={data(){return{voted:!1,grade:1,observacao:"",elogios:"",sugestoes:"",sistema:JSON.parse(localStorage.getItem("clienteSistema")),dispositivo:{id:"",detalhe:""},online:navigator.onLine}},methods:{vote(r){this.voted=!0,this.grade=r},async gravar(){try{$q.loading.show(),await $db.nps.gravar({nota:this.grade,elogios:this.elogios,sugestoes:this.sugestoes})}catch(r){console.error(r)}finally{this.$q.notifyPositive("Obrigado por responder nossa pesquisa."),await this.$router.push("/"),$q.loading.hide()}}}},g=r=>(z("data-v-2a3949e0"),r=r(),S(),r),V=g(()=>o("span",{class:"q-subheading text-white text-weight-medium"},"Pesquisa de Satisfa\xE7\xE3o",-1)),I={key:0},B={key:0},N=g(()=>o("div",{class:"row q-mb-sm"},[o("div",{class:"col-12"},[o("p",{class:"q-title text-weight-medium text-white q-ma-xs"}," Qual a probabilidade de voc\xEA indicar o B15 para um amigo ou parceiro? "),o("p",{class:"q-body q-ma-xs",style:{color:"rgba(255,255,255,.6)"}}," Escolha uma nota de 1 a 10. ")])],-1)),P={class:"row",id:"pontuacao",style:{"margin-left":"-4px"}},E={key:1,class:"row animate-pop"},L={class:"col-12 q-mb-sm"},T={class:"q-title text-weight-medium text-white q-ma-xs"},A={class:"col-12 col-lg-6 q-my-sm"},D={class:"col-12 col-lg-6 q-my-sm"},O={class:"col-12 q-mt-sm"},U={key:1},j=g(()=>o("span",null,[o("div",{class:"row q-mb-sm"},[o("div",{class:"col-12"},[o("p",{class:"q-title text-weight-medium text-white q-ma-xs"}," \xC9 necess\xE1rio estar on-line para responder a pesquisa! ")])])],-1)),F=[j];function G(r,e,H,J,a,i){return d(),u(C,{class:"gradienteAzul"},{default:n(()=>[s(x,{class:"q-pa-none q-ma-none"},{default:n(()=>[s(b,{class:"u-container",style:{"min-height":"auto"}},{default:n(()=>[s(_,{color:"transparent","text-color":"white",class:"q-py-sm q-mb-sm q-px-none"},{default:n(()=>[a.voted===!0?(d(),u(t,{key:0,dense:"",flat:"",icon:"arrow_back",round:"",onClick:e[0]||(e[0]=l=>a.voted=!1)})):m("",!0),s(w,null,{default:n(()=>[s(h,{name:"sentiment_satisfied_alt",color:"white",class:"q-mr-sm q-pr-xs q-headline"}),V]),_:1})]),_:1}),a.online===!0?(d(),c("div",I,[a.voted===!1?(d(),c("span",B,[N,o("div",P,[s(t,{color:"red-10",size:"lg",label:"1",class:"q-ma-xs col-12 col-md",onClick:e[1]||(e[1]=l=>i.vote(1))}),s(t,{color:"red-8",size:"lg",label:"2",class:"q-ma-xs col-12 col-md",onClick:e[2]||(e[2]=l=>i.vote(2))}),s(t,{color:"orange-8",size:"lg",label:"3",class:"q-ma-xs col-12 col-md",onClick:e[3]||(e[3]=l=>i.vote(3))}),s(t,{color:"amber-6",size:"lg",label:"4",class:"q-ma-xs col-12 col-md",onClick:e[4]||(e[4]=l=>i.vote(4))}),s(t,{color:"yellow-14",size:"lg",label:"5",class:"q-ma-xs col-12 col-md",onClick:e[5]||(e[5]=l=>i.vote(5))}),s(t,{color:"lime",size:"lg",label:"6",class:"q-ma-xs col-12 col-md",onClick:e[6]||(e[6]=l=>i.vote(6))}),s(t,{color:"light-green",size:"lg",label:"7",class:"q-ma-xs col-12 col-md",onClick:e[7]||(e[7]=l=>i.vote(7))}),s(t,{color:"light-green-6",size:"lg",label:"8",class:"q-ma-xs col-12 col-md",onClick:e[8]||(e[8]=l=>i.vote(8))}),s(t,{color:"green",size:"lg",label:"9",class:"q-ma-xs col-12 col-md",onClick:e[9]||(e[9]=l=>i.vote(9))}),s(t,{color:"green-8",size:"lg",label:"10",class:"q-ma-xs col-12 col-md",onClick:e[10]||(e[10]=l=>i.vote(10))})])])):m("",!0),a.voted===!0?(d(),c("div",E,[o("div",L,[o("p",T,"Voc\xEA deu nota "+f(a.grade)+".",1)]),o("div",A,[s(v,{class:"q-px-sm"},{default:n(()=>[s(p,{class:"bg-light q-px-md",modelValue:a.sugestoes,"onUpdate:modelValue":e[11]||(e[11]=l=>a.sugestoes=l),label:"Sugest\xF5es",rows:"3",type:"textarea"},null,8,["modelValue"])]),_:1})]),o("div",D,[s(v,{class:"q-px-sm"},{default:n(()=>[s(p,{class:"bg-light q-px-md",modelValue:a.elogios,"onUpdate:modelValue":e[12]||(e[12]=l=>a.elogios=l),label:"Elogios",rows:"3",type:"textarea"},null,8,["modelValue"])]),_:1})]),y(o("div",O,[s(t,{color:"primary",size:"lg",label:"ENVIAR",onClick:e[13]||(e[13]=l=>i.gravar()),class:"full-width q-mx-sm"})],512),[[k,a.online===!0]])])):m("",!0)])):(d(),c("div",U,F))]),_:1})]),_:1})]),_:1})}var X=q(Q,[["render",G],["__scopeId","data-v-2a3949e0"]]);export{X as default};
========
import{_ as q,o as d,d as u,w as n,f as s,H as x,I as b,h as _,Q as t,e as m,i as w,j as h,n as c,B as o,t as f,a$ as v,q as p,G as y,b0 as k,L as C,X as z,Y as S}from"./index.334d0b54.js";const Q={data(){return{voted:!1,grade:1,observacao:"",elogios:"",sugestoes:"",sistema:JSON.parse(localStorage.getItem("clienteSistema")),dispositivo:{id:"",detalhe:""},online:navigator.onLine}},methods:{vote(r){this.voted=!0,this.grade=r},async gravar(){try{$q.loading.show(),await $db.nps.gravar({nota:this.grade,elogios:this.elogios,sugestoes:this.sugestoes})}catch(r){console.error(r)}finally{this.$q.notifyPositive("Obrigado por responder nossa pesquisa."),await this.$router.push("/"),$q.loading.hide()}}}},g=r=>(z("data-v-2a3949e0"),r=r(),S(),r),V=g(()=>o("span",{class:"q-subheading text-white text-weight-medium"},"Pesquisa de Satisfa\xE7\xE3o",-1)),I={key:0},B={key:0},N=g(()=>o("div",{class:"row q-mb-sm"},[o("div",{class:"col-12"},[o("p",{class:"q-title text-weight-medium text-white q-ma-xs"}," Qual a probabilidade de voc\xEA indicar o B15 para um amigo ou parceiro? "),o("p",{class:"q-body q-ma-xs",style:{color:"rgba(255,255,255,.6)"}}," Escolha uma nota de 1 a 10. ")])],-1)),P={class:"row",id:"pontuacao",style:{"margin-left":"-4px"}},E={key:1,class:"row animate-pop"},L={class:"col-12 q-mb-sm"},T={class:"q-title text-weight-medium text-white q-ma-xs"},A={class:"col-12 col-lg-6 q-my-sm"},D={class:"col-12 col-lg-6 q-my-sm"},O={class:"col-12 q-mt-sm"},U={key:1},j=g(()=>o("span",null,[o("div",{class:"row q-mb-sm"},[o("div",{class:"col-12"},[o("p",{class:"q-title text-weight-medium text-white q-ma-xs"}," \xC9 necess\xE1rio estar on-line para responder a pesquisa! ")])])],-1)),F=[j];function G(r,e,H,J,a,i){return d(),u(C,{class:"gradienteAzul"},{default:n(()=>[s(x,{class:"q-pa-none q-ma-none"},{default:n(()=>[s(b,{class:"u-container",style:{"min-height":"auto"}},{default:n(()=>[s(_,{color:"transparent","text-color":"white",class:"q-py-sm q-mb-sm q-px-none"},{default:n(()=>[a.voted===!0?(d(),u(t,{key:0,dense:"",flat:"",icon:"arrow_back",round:"",onClick:e[0]||(e[0]=l=>a.voted=!1)})):m("",!0),s(w,null,{default:n(()=>[s(h,{name:"sentiment_satisfied_alt",color:"white",class:"q-mr-sm q-pr-xs q-headline"}),V]),_:1})]),_:1}),a.online===!0?(d(),c("div",I,[a.voted===!1?(d(),c("span",B,[N,o("div",P,[s(t,{color:"red-10",size:"lg",label:"1",class:"q-ma-xs col-12 col-md",onClick:e[1]||(e[1]=l=>i.vote(1))}),s(t,{color:"red-8",size:"lg",label:"2",class:"q-ma-xs col-12 col-md",onClick:e[2]||(e[2]=l=>i.vote(2))}),s(t,{color:"orange-8",size:"lg",label:"3",class:"q-ma-xs col-12 col-md",onClick:e[3]||(e[3]=l=>i.vote(3))}),s(t,{color:"amber-6",size:"lg",label:"4",class:"q-ma-xs col-12 col-md",onClick:e[4]||(e[4]=l=>i.vote(4))}),s(t,{color:"yellow-14",size:"lg",label:"5",class:"q-ma-xs col-12 col-md",onClick:e[5]||(e[5]=l=>i.vote(5))}),s(t,{color:"lime",size:"lg",label:"6",class:"q-ma-xs col-12 col-md",onClick:e[6]||(e[6]=l=>i.vote(6))}),s(t,{color:"light-green",size:"lg",label:"7",class:"q-ma-xs col-12 col-md",onClick:e[7]||(e[7]=l=>i.vote(7))}),s(t,{color:"light-green-6",size:"lg",label:"8",class:"q-ma-xs col-12 col-md",onClick:e[8]||(e[8]=l=>i.vote(8))}),s(t,{color:"green",size:"lg",label:"9",class:"q-ma-xs col-12 col-md",onClick:e[9]||(e[9]=l=>i.vote(9))}),s(t,{color:"green-8",size:"lg",label:"10",class:"q-ma-xs col-12 col-md",onClick:e[10]||(e[10]=l=>i.vote(10))})])])):m("",!0),a.voted===!0?(d(),c("div",E,[o("div",L,[o("p",T,"Voc\xEA deu nota "+f(a.grade)+".",1)]),o("div",A,[s(v,{class:"q-px-sm"},{default:n(()=>[s(p,{class:"bg-light q-px-md",modelValue:a.sugestoes,"onUpdate:modelValue":e[11]||(e[11]=l=>a.sugestoes=l),label:"Sugest\xF5es",rows:"3",type:"textarea"},null,8,["modelValue"])]),_:1})]),o("div",D,[s(v,{class:"q-px-sm"},{default:n(()=>[s(p,{class:"bg-light q-px-md",modelValue:a.elogios,"onUpdate:modelValue":e[12]||(e[12]=l=>a.elogios=l),label:"Elogios",rows:"3",type:"textarea"},null,8,["modelValue"])]),_:1})]),y(o("div",O,[s(t,{color:"primary",size:"lg",label:"ENVIAR",onClick:e[13]||(e[13]=l=>i.gravar()),class:"full-width q-mx-sm"})],512),[[k,a.online===!0]])])):m("",!0)])):(d(),c("div",U,F))]),_:1})]),_:1})]),_:1})}var X=q(Q,[["render",G],["__scopeId","data-v-2a3949e0"]]);export{X as default};
>>>>>>>> 7d21c0dfe9fe60ff7d81361a5b466fbe35d321e4:assets/NPS.feeacd31.js
