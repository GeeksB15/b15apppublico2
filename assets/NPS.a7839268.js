import{_ as q,o as n,d as g,w as r,f as s,I as p,J as x,h as b,Q as t,e as c,i as w,j as f,C as o,p as m,t as y,aM as u,s as v,H as k,b3 as C,M as _}from"./index.2cdadbf3.js";const h={data(){return{voted:!1,grade:1,observacao:"",elogios:"",sugestoes:"",sistema:JSON.parse(localStorage.getItem("clienteSistema")),dispositivo:{id:"",detalhe:""},online:navigator.onLine}},methods:{vote(d){this.voted=!0,this.grade=d},async gravar(){try{$q.loading.show(),await $db.nps.gravar({nota:this.grade,elogios:this.elogios,sugestoes:this.sugestoes})}catch(d){console.error(d)}finally{this.$q.notifyPositive("Obrigado por responder nossa pesquisa."),await this.$router.push("/"),$q.loading.hide()}}}},z={key:0},Q={key:0},V={class:"row",id:"pontuacao",style:{"margin-left":"-4px"}},S={key:1,class:"row animate-pop"},N={class:"col-12 q-mb-sm"},B={class:"q-title text-weight-medium text-white q-ma-xs"},I={class:"col-12 col-lg-6 q-my-sm"},P={class:"col-12 col-lg-6 q-my-sm"},E={class:"col-12 q-mt-sm"},T={key:1};function A(d,e,D,J,a,i){return n(),g(_,{class:"gradienteAzul"},{default:r(()=>[s(p,{class:"q-pa-none q-ma-none"},{default:r(()=>[s(x,{class:"u-container",style:{"min-height":"auto"}},{default:r(()=>[s(b,{color:"transparent","text-color":"white",class:"q-py-sm q-mb-sm q-px-none"},{default:r(()=>[a.voted===!0?(n(),g(t,{key:0,dense:"",flat:"",icon:"arrow_back",round:"",onClick:e[0]||(e[0]=l=>a.voted=!1)})):c("",!0),s(w,null,{default:r(()=>[s(f,{name:"sentiment_satisfied_alt",color:"white",class:"q-mr-sm q-pr-xs q-headline"}),e[14]||(e[14]=o("span",{class:"q-subheading text-white text-weight-medium"},"Pesquisa de Satisfa\xE7\xE3o",-1))]),_:1})]),_:1}),a.online===!0?(n(),m("div",z,[a.voted===!1?(n(),m("span",Q,[e[15]||(e[15]=o("div",{class:"row q-mb-sm"},[o("div",{class:"col-12"},[o("p",{class:"q-title text-weight-medium text-white q-ma-xs"}," Qual a probabilidade de voc\xEA indicar o B15 para um amigo ou parceiro? "),o("p",{class:"q-body q-ma-xs",style:{color:"rgba(255,255,255,.6)"}}," Escolha uma nota de 1 a 10. ")])],-1)),o("div",V,[s(t,{color:"red-10",size:"lg",label:"1",class:"q-ma-xs col-12 col-md",onClick:e[1]||(e[1]=l=>i.vote(1))}),s(t,{color:"red-8",size:"lg",label:"2",class:"q-ma-xs col-12 col-md",onClick:e[2]||(e[2]=l=>i.vote(2))}),s(t,{color:"orange-8",size:"lg",label:"3",class:"q-ma-xs col-12 col-md",onClick:e[3]||(e[3]=l=>i.vote(3))}),s(t,{color:"amber-6",size:"lg",label:"4",class:"q-ma-xs col-12 col-md",onClick:e[4]||(e[4]=l=>i.vote(4))}),s(t,{color:"yellow-14",size:"lg",label:"5",class:"q-ma-xs col-12 col-md",onClick:e[5]||(e[5]=l=>i.vote(5))}),s(t,{color:"lime",size:"lg",label:"6",class:"q-ma-xs col-12 col-md",onClick:e[6]||(e[6]=l=>i.vote(6))}),s(t,{color:"light-green",size:"lg",label:"7",class:"q-ma-xs col-12 col-md",onClick:e[7]||(e[7]=l=>i.vote(7))}),s(t,{color:"light-green-6",size:"lg",label:"8",class:"q-ma-xs col-12 col-md",onClick:e[8]||(e[8]=l=>i.vote(8))}),s(t,{color:"green",size:"lg",label:"9",class:"q-ma-xs col-12 col-md",onClick:e[9]||(e[9]=l=>i.vote(9))}),s(t,{color:"green-8",size:"lg",label:"10",class:"q-ma-xs col-12 col-md",onClick:e[10]||(e[10]=l=>i.vote(10))})])])):c("",!0),a.voted===!0?(n(),m("div",S,[o("div",N,[o("p",B,"Voc\xEA deu nota "+y(a.grade)+".",1)]),o("div",I,[s(u,{class:"q-px-sm"},{default:r(()=>[s(v,{class:"bg-light q-px-md",modelValue:a.sugestoes,"onUpdate:modelValue":e[11]||(e[11]=l=>a.sugestoes=l),label:"Sugest\xF5es",rows:"3",type:"textarea"},null,8,["modelValue"])]),_:1})]),o("div",P,[s(u,{class:"q-px-sm"},{default:r(()=>[s(v,{class:"bg-light q-px-md",modelValue:a.elogios,"onUpdate:modelValue":e[12]||(e[12]=l=>a.elogios=l),label:"Elogios",rows:"3",type:"textarea"},null,8,["modelValue"])]),_:1})]),k(o("div",E,[s(t,{color:"primary",size:"lg",label:"ENVIAR",onClick:e[13]||(e[13]=l=>i.gravar()),class:"full-width q-mx-sm"})],512),[[C,a.online===!0]])])):c("",!0)])):(n(),m("div",T,e[16]||(e[16]=[o("span",null,[o("div",{class:"row q-mb-sm"},[o("div",{class:"col-12"},[o("p",{class:"q-title text-weight-medium text-white q-ma-xs"}," \xC9 necess\xE1rio estar on-line para responder a pesquisa! ")])])],-1)])))]),_:1})]),_:1})]),_:1})}var M=q(h,[["render",A],["__scopeId","data-v-2a3949e0"]]);export{M as default};
