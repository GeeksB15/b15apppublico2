import{_ as w,cd as z,bq as k,r as v,o as u,n as y,B as s,G as V,b0 as P,f as r,cs as C,w as i,N as n,k as m,d as f,t as q,e as g,y as h,bt as N}from"./index.9759e0fb.js";const G={data(){return{dados:{},opcoes:{}}},methods:{atualizar({dados:e,opcoes:d}){}}},S={components:{GraficoPizza:G},computed:{tipos(){return{graficoPizza:{type:"pie",labels:this.dados.estoque[1].filter(e=>e.estoque).map(e=>e.tipo),datasets:[{label:"Valor de Custo",backgroundColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],data:this.dados.estoque[1].filter(e=>e.estoque).map(e=>e.estoque)}],cfg:{responsive:!0}}}},grupos(){return{graficoPizza:{type:"pie",labels:this.dados.estoque[4].filter(e=>e.estoque).map(e=>e.grupo),datasets:[{label:"Valor de Custo",backgroundColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],data:this.dados.estoque[4].filter(e=>e.estoque).map(e=>e.estoque)}],cfg:{responsive:!0}}}},marcas(){return{graficoPizza:{type:"pie",labels:this.dados.estoque[2].filter(e=>e.estoque).map(e=>e.marca),datasets:[{label:"Valor de Custo",backgroundColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],data:this.dados.estoque[2].filter(e=>e.estoque).map(e=>e.estoque)}],cfg:{responsive:!0}}}},giro(){let e=z(this.dados.estoque[3]),d=e,t=e,_=[];d=d.sort((l,a)=>{const o=(l.faixaVenda||"").match(/\d+/gi),c=(a.faixaVenda||"").match(/\d+/gi);return Number(o[0])>Number(c[0])?o[1]&&c[1]&&Number(o[1])<Number(c[1])?-1:1:-1}),d=new Set(d.map(l=>l.faixaVenda)),d=["",...d],d=d.map((l,a)=>({name:"faixa"+a,label:l,field:"faixa"+a,align:"left"})),t=t.sort((l,a)=>{const o=(l.faixaGiro||"").match(/\d+/gi),c=(a.faixaGiro||"").match(/\d+/gi);return Number(o[0])>Number(c[0])?o[1]&&c[1]&&Number(o[1])<Number(c[1])?-1:1:-1}),t=new Set(t.map(l=>l.faixaGiro));for(const l of t){let a=0,o={faixa0:l};for(const c of d.filter(b=>b.label)){const b=e.reduce((p,x)=>x.faixaVenda===c.label&&x.faixaGiro===l?p+x.custoTotal:p,0);a+=b,o[c.name]=this.$filters.numero(b,2)}o.totais=this.$filters.numero(a,2),_.push(o)}return{columns:d,tableData:_}}},data(){return{sistemaPai:""}},props:{carregando:{default:!0,required:!0,type:Boolean},dados:{default:()=>({}),required:!0,type:Object}},created(){this.sistemaPai=k()}},T={class:"row q-col-gutter-sm q-mt-sm q-pb-md"},B={class:"col-12",style:{float:"right"}},D={style:{"font-size":"70%"}},Q={class:"col-12 q-mt-sm"},j={class:"row justify-around"},E={class:"text-h5 text-weight-bold text-center q-mt-sm q-pb-none",style:{"line-height":"22px"}},M={class:"text-primary"},O=s("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Custo Total ",-1),U={class:"text-h5 text-weight-bold text-center q-mt-sm q-pb-none",style:{"line-height":"22px"}},A={class:"text-primary"},F=s("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Unidades ",-1),H={class:"text-h5 text-weight-bold text-center q-mt-sm q-pb-none",style:{"line-height":"22px"}},I={class:"text-primary"},J=s("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Valor Venda ",-1),K={class:"text-h5 text-weight-bold text-center q-mt-sm q-pb-none",style:{"line-height":"22px"}},L={class:"text-primary"},R=s("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Margem ",-1),W={key:0,class:"col-6"},X={key:1,class:"col-6"},Y={class:"col-6"},Z={class:"col-12"};function $(e,d,t,_,l,a){const o=v("grafico-pizza");return u(),y("div",T,[s("div",B,[s("span",D,[V(r(C,{color:"primary",size:20},null,512),[[P,t.carregando]])])]),s("div",Q,[r(h,{inline:"",color:"white",class:"fit no-shadow"},{default:i(()=>[r(n,{class:"text-tertiary q-title q-pb-sm"},{default:i(()=>[m("Estoque")]),_:1}),!t.carregando&&t.dados.estoque&&t.dados.estoque[0]&&t.dados.estoque[0][0]?(u(),f(n,{key:0},{default:i(()=>[s("div",j,[s("div",E,[s("div",M,q(e.$filters.numero(t.dados.estoque[0][0].estoqueCusto,2)),1),O]),s("div",U,[s("div",A,q(e.$filters.numero(t.dados.estoque[0][0].qtdeSku,0)),1),F]),s("div",H,[s("div",I,q(e.$filters.numero(t.dados.estoque[0][0].estoqueVenda,2)),1),J]),s("div",K,[s("div",L,q(e.$filters.numero(t.dados.estoque[0][0].margem,0))+"% ",1),R])])]),_:1})):g("",!0)]),_:1})]),l.sistemaPai==="optisoul"?(u(),y("div",W,[r(h,{inline:"",color:"white",class:"fit no-shadow"},{default:i(()=>[r(n,{class:"text-tertiary q-title q-pb-sm"},{default:i(()=>[m("Tipos")]),_:1}),!t.carregando&&t.dados.estoque&&t.dados.estoque[1]?(u(),f(n,{key:0},{default:i(()=>[r(o,{class:"col-12",dados:a.tipos.graficoPizza,opcoes:a.tipos.graficoPizza.cfg},null,8,["dados","opcoes"])]),_:1})):g("",!0)]),_:1})])):(u(),y("div",X,[r(h,{inline:"",color:"white",class:"fit no-shadow"},{default:i(()=>[r(n,{class:"text-tertiary q-title q-pb-sm"},{default:i(()=>[m("Grupos")]),_:1}),!t.carregando&&t.dados.estoque&&t.dados.estoque[1]?(u(),f(n,{key:0},{default:i(()=>[r(o,{class:"col-12",dados:a.grupos.graficoPizza,opcoes:a.grupos.graficoPizza.cfg},null,8,["dados","opcoes"])]),_:1})):g("",!0)]),_:1})])),s("div",Y,[r(h,{inline:"",color:"white",class:"fit no-shadow"},{default:i(()=>[r(n,{class:"text-tertiary q-title q-pb-sm"},{default:i(()=>[m("Marcas")]),_:1}),!t.carregando&&t.dados.estoque&&t.dados.estoque[2]?(u(),f(n,{key:0},{default:i(()=>[r(o,{class:"col-12",dados:a.marcas.graficoPizza,opcoes:a.marcas.graficoPizza.cfg},null,8,["dados","opcoes"])]),_:1})):g("",!0)]),_:1})]),s("div",Z,[r(h,{inline:"",color:"white",class:"fit no-shadow"},{default:i(()=>[r(n,{class:"text-tertiary q-title q-pb-sm"},{default:i(()=>[m("Giro")]),_:1}),!t.carregando&&t.dados.estoque&&t.dados.estoque[3]?(u(),f(n,{key:0},{default:i(()=>[r(N,{rows:a.giro.tableData,columns:a.giro.columns,class:"no-shadow text-left col-12","hide-bottom":""},null,8,["rows","columns"])]),_:1})):g("",!0)]),_:1})])])}var te=w(S,[["render",$]]);export{te as default};
