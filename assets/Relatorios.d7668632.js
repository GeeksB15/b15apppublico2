import{_ as E,r as b,o as t,p as s,f as r,w as a,G as x,J as $,d as l,P as y,F as m,u as p,U as D,k as n,t as d,e as i,S as c,ax as v,y as _,T as u,I as w,C as g,b2 as V}from"./index.a5f5d5a1.js";const C={components:{},computed:{abas(){return[{label:"Financeiro",to:{name:"RelatoriosFinanceiro",params:{id:this.$route.params.id}},children:[{label:"DRE",to:{name:"FinanceiroDRE",params:{id:this.$route.params.id}}},{label:"Balan\xE7o",to:{name:"FinanceiroBalanco",params:{id:this.$route.params.id}}},{label:"Fluxo de Caixa",to:{name:"FinanceiroFluxo",params:{id:this.$route.params.id}}},{label:"Resultado",to:{name:"FinanceiroResultado",params:{id:this.$route.params.id}}}]},{label:"Vendas",to:{name:"RelatoriosVendas",params:{id:this.$route.params.id}},children:[{label:"DRE",to:{name:"FinanceiroDRE",params:{id:this.$route.params.id}}}]},{label:"Estoque",to:{name:"RelatoriosEstoque",params:{id:this.$route.params.id}},children:[{label:"DRE",to:{name:"FinanceiroDRE",params:{id:this.$route.params.id}}}]},{label:"Faturamento",to:{name:"RelatoriosFaturamento",params:{id:this.$route.params.id}},children:[{label:"DRE",to:{name:"FinanceiroDRE",params:{id:this.$route.params.id}}}]},{label:"Fiscal",to:{name:"RelatoriosFiscal",params:{id:this.$route.params.id}},children:[{label:"DRE",to:{name:"FinanceiroDRE",params:{id:this.$route.params.id}}}]},{label:"Compras",to:{name:"RelatoriosCompras",params:{id:this.$route.params.id}},children:[{label:"DRE",to:{name:"FinanceiroDRE",params:{id:this.$route.params.id}}}]}]}},data(){return{data:"",drawer:!0}},methods:{toogleMenu(){this.drawer=!this.drawer}},mounted(){}},Q={id:"Relatorios"},B={class:"background q-pa-md"};function I(L,f,P,q,R,h){const k=b("barraTopo"),F=b("router-view");return t(),s("div",Q,[r(x,{class:"bg-gradiente text-white"},{default:a(()=>[r(k)]),_:1}),r(w,null,{default:a(()=>[r($,{class:"q-px-md"},{default:a(()=>[this.$route.name==="RelatoriosLayout"?(t(),l(y,{key:0,link:"","no-border":"",separator:"",class:"hideondesktop"},{default:a(()=>[(t(!0),s(m,null,p(h.abas,e=>(t(),s("span",{key:e.label,class:"text-tertiary"},[e.children?(t(),l(D,{key:0,header:""},{default:a(()=>[n(d(e.label),1)]),_:2},1024)):i("",!0),e.children?i("",!0):(t(),l(c,v(_({key:1},e)),{default:a(()=>[r(u,null,{default:a(()=>[n(d(e.label),1)]),_:2},1024)]),_:2},1040)),e.children?(t(!0),s(m,{key:2},p(e.children,o=>(t(),l(c,_(o,{key:o.label}),{default:a(()=>[r(u,{caption:""},{default:a(()=>[n(d(o.label),1)]),_:2},1024)]),_:2},1040))),128)):i("",!0)]))),128))]),_:1})):i("",!0),r(F,{onMyEvent:h.toogleMenu},null,8,["onMyEvent"])]),_:1})]),_:1}),r(V,{modelValue:R.drawer,"onUpdate:modelValue":f[0]||(f[0]=e=>R.drawer=e),side:"left","content-class":"mydrawerL"},{default:a(()=>[g("div",B,[r(y,{link:"","no-border":"",separator:""},{default:a(()=>[(t(!0),s(m,null,p(h.abas,e=>(t(),s("span",{key:e.label},[e.children?(t(),l(u,{key:0,header:""},{default:a(()=>[n(d(e.label),1)]),_:2},1024)):i("",!0),e.children?i("",!0):(t(),l(c,_({key:1},e,{class:"text-tertiary"}),{default:a(()=>[r(u,null,{default:a(()=>[n(d(e.label),1)]),_:2},1024)]),_:2},1040)),e.children?(t(!0),s(m,{key:2},p(e.children,o=>(t(),l(c,_(o,{class:"text-tertiary",key:o.label}),{default:a(()=>[r(u,{caption:""},{default:a(()=>[n(d(o.label),1)]),_:2},1024)]),_:2},1040))),128)):i("",!0)]))),128))]),_:1})])]),_:1},8,["modelValue"])])}var N=E(C,[["render",I],["__scopeId","data-v-5567f474"]]);export{N as default};
