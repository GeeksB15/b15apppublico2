<<<<<<<< HEAD:assets/QgEquipe.d85e7ac7.js
import{_ as w,Z as C,aE as _,r as k,o as h,n as f,B as e,G as E,b0 as j,f as n,cs as V,w as i,F as v,s as x,d as q,z as $,y as P,i as m,k as s,t as a,N as p,O as Q}from"./index.9759e0fb.js";const B={components:{Avatar:C},data(){return{empresas:[],vendedores:{}}},props:{carregando:{default:!0,required:!0,type:Boolean},dados:{default:()=>({}),required:!0,type:Object}},methods:{async obterEmpresas(){this.empresas=[];const o=(await _.contato.ler({filtros:{ativo:!0,empresas:!0}})).data,c=new Set((this.dados.equipe||[]).map(g=>g.codigoEmpresa)),r=[];c.forEach(g=>{const l=o.find(b=>b.codigoContato===g);r.push({codigoContato:l.codigoContato,nome:l.nome})}),this.empresas=r},async obterVendedores(){let o=(await _.contato.ler({filtros:{ativo:!0,usuario:!0}})).data;o=o.concat((await _.contato.ler({filtros:{ativo:!0,vendedores:!0}})).data);const c={};o.forEach(r=>{c[r.codigoContato]||(c[r.codigoContato]=r)}),this.vendedores=c}},watch:{carregando(){this.carregando||this.obterVendedores().then(()=>{this.obterEmpresas()})}},mounted(){this.obterVendedores().then(()=>{this.obterEmpresas()})}},H={class:"CockpitReceber"},S={class:"q-pb-md"},M={class:"no-shadow"},N={class:"col-12"},O={style:{"font-size":"70%"}},R={class:"row q-mb-xs items-center"},T={class:"col-12 col-lg-6"},z={class:"row q-mb-sm"},A={class:"col"},D=e("div",{class:"row"},[e("div",{class:"progress"},[e("div",{class:"progress-bar bg-primary",style:{width:"62%"}}),e("div",{class:"progress-bar bg-info",style:{width:"5%"}}),e("div",{class:"progress-bar progress-bar-animated progress-bar-striped bg-success",style:{width:"33%"}})])],-1),F={class:"row"},I={class:"q-title text-weight-bold text-left text-primary q-mt-xs q-pb-none col-12 col-md",style:{"line-height":"22px"}},L=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}},"M\xEAs",-1),G={class:"q-title text-weight-bold text-center text-blue-5 q-mt-xs q-pb-none col-12 col-md",style:{"line-height":"22px"}},Z=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}},"Hoje",-1),J={class:"q-title text-weight-bold text-right text-positive q-mt-xs q-pb-none col-12 col-md",style:{"line-height":"22px"}},K=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}},"Proje\xE7\xE3o",-1),U={class:"col-12 col-lg-6"},W={class:"row"},X={class:"col-6 col-lg-3 q-mb-sm blocks"},Y={class:"col-6 col-lg-3 q-mb-sm blocks"},ee={class:"col-6 col-lg-3 q-mb-sm blocks"},te={class:"col-6 col-lg-3 q-mb-sm blocks"},oe={class:"text-right q-mt-sm"};function se(o,c,r,g,l,b){const y=k("avatar");return h(),f("div",H,[e("div",S,[e("div",M,[e("div",N,[e("span",O,[E(n(V,{color:"primary",size:20},null,512),[[j,r.carregando]])])]),n(Q,{class:"q-my-sm"},{default:i(()=>[(h(!0),f(v,null,x(l.empresas,d=>(h(),q($,{key:d.codigoContato,"default-opened":"",label:d.nome},{default:i(()=>[(h(!0),f(v,null,x(r.dados.equipe.filter(t=>t.codigoEmpresa===d.codigoContato),t=>(h(),q(P,{key:t.codigoContatoVendedor,class:"extratoItem bg-white q-my-md q-py-sm q-px-md"},{default:i(()=>[e("div",R,[e("div",T,[e("div",z,[e("div",A,[n(y,{class:"avatar float-left",imagem:l.vendedores[t.codigoContatoVendedor].imagem,rotulo:l.vendedores[t.codigoContatoVendedor].nome,tamanho:"40"},null,8,["imagem","rotulo"]),n(m,null,{default:i(()=>[s(a(l.vendedores[t.codigoContatoVendedor].nome)+" ",1),e("div",null,a(d.nome),1)]),_:2},1024)])]),D,e("div",F,[e("div",I,[s("R$ "+a(o.$filters.numero(t.faturamentoPeriodo,2))+" ",1),L]),e("div",G,[s("R$ "+a(o.$filters.numero(t.faturamentoHoje,2))+" ",1),Z]),e("div",J,[s("R$ "+a(o.$filters.numero(t.faturamentoProjecao,2))+" ",1),K])])]),e("div",U,[e("div",W,[e("div",X,[n(m,{class:"text-h5 text-weight-bold text-center text-blue-8"},{default:i(()=>[s(a(o.$filters.numero(t.ticketMedioPeriodo,2)),1)]),_:2},1024),n(p,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[s(" Ticket M\xE9dio ")]),_:1})]),e("div",Y,[n(m,{class:"text-h5 text-weight-bold text-center text-blue-8"},{default:i(()=>[s(a(o.$filters.numero(t.pendenciasOrcamentos,0)),1)]),_:2},1024),n(p,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[s(" Or\xE7amento(s) ")]),_:1})]),e("div",ee,[n(m,{class:"text-h5 text-weight-bold text-center text-blue-8"},{default:i(()=>[s(a(o.$filters.numero(t.conversoesHoje,0))+" / "+a(o.$filters.numero(t.atendimentosHoje,0)),1)]),_:2},1024),n(p,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[s(" Atendimento c/ vendas hoje ")]),_:1})]),e("div",te,[n(m,{class:"text-h5 text-weight-bold text-center text-blue-8"},{default:i(()=>[s(a(o.$filters.numero(t.conversoesPeriodo,0))+" / "+a(o.$filters.numero(t.atendimentosPeriodo,0)),1)]),_:2},1024),n(p,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[s(" Atendimento c/ vendas per\xEDodo ")]),_:1})])])])])]),_:2},1024))),128)),e("p",oe,[s("M\xEAs "),e("strong",null,a(o.$filters.numero(r.dados.equipe.filter(t=>t.codigoEmpresa===d.codigoContato).reduce((t,u)=>t+u.faturamentoPeriodo,0),2)),1),s(" - Hoje "),e("strong",null,a(o.$filters.numero(r.dados.equipe.filter(t=>t.codigoEmpresa===d.codigoContato).reduce((t,u)=>t+u.faturamentoHoje,0),2)),1),s(" - Proje\xE7\xE3o "),e("strong",null,a(o.$filters.numero(r.dados.equipe.filter(t=>t.codigoEmpresa===d.codigoContato).reduce((t,u)=>t+u.faturamentoProjecao,0),2)),1)])]),_:2},1032,["label"]))),128))]),_:1})])])])}var re=w(B,[["render",se]]);export{re as default};
========
import{_ as w,Z as C,aE as _,r as k,o as h,n as f,B as e,G as E,b0 as j,f as n,cs as V,w as i,F as v,s as x,d as q,z as $,y as P,i as m,k as s,t as a,N as p,O as Q}from"./index.334d0b54.js";const B={components:{Avatar:C},data(){return{empresas:[],vendedores:{}}},props:{carregando:{default:!0,required:!0,type:Boolean},dados:{default:()=>({}),required:!0,type:Object}},methods:{async obterEmpresas(){this.empresas=[];const o=(await _.contato.ler({filtros:{ativo:!0,empresas:!0}})).data,c=new Set((this.dados.equipe||[]).map(g=>g.codigoEmpresa)),r=[];c.forEach(g=>{const l=o.find(b=>b.codigoContato===g);r.push({codigoContato:l.codigoContato,nome:l.nome})}),this.empresas=r},async obterVendedores(){let o=(await _.contato.ler({filtros:{ativo:!0,usuario:!0}})).data;o=o.concat((await _.contato.ler({filtros:{ativo:!0,vendedores:!0}})).data);const c={};o.forEach(r=>{c[r.codigoContato]||(c[r.codigoContato]=r)}),this.vendedores=c}},watch:{carregando(){this.carregando||this.obterVendedores().then(()=>{this.obterEmpresas()})}},mounted(){this.obterVendedores().then(()=>{this.obterEmpresas()})}},H={class:"CockpitReceber"},S={class:"q-pb-md"},M={class:"no-shadow"},N={class:"col-12"},O={style:{"font-size":"70%"}},R={class:"row q-mb-xs items-center"},T={class:"col-12 col-lg-6"},z={class:"row q-mb-sm"},A={class:"col"},D=e("div",{class:"row"},[e("div",{class:"progress"},[e("div",{class:"progress-bar bg-primary",style:{width:"62%"}}),e("div",{class:"progress-bar bg-info",style:{width:"5%"}}),e("div",{class:"progress-bar progress-bar-animated progress-bar-striped bg-success",style:{width:"33%"}})])],-1),F={class:"row"},I={class:"q-title text-weight-bold text-left text-primary q-mt-xs q-pb-none col-12 col-md",style:{"line-height":"22px"}},L=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}},"M\xEAs",-1),G={class:"q-title text-weight-bold text-center text-blue-5 q-mt-xs q-pb-none col-12 col-md",style:{"line-height":"22px"}},Z=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}},"Hoje",-1),J={class:"q-title text-weight-bold text-right text-positive q-mt-xs q-pb-none col-12 col-md",style:{"line-height":"22px"}},K=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}},"Proje\xE7\xE3o",-1),U={class:"col-12 col-lg-6"},W={class:"row"},X={class:"col-6 col-lg-3 q-mb-sm blocks"},Y={class:"col-6 col-lg-3 q-mb-sm blocks"},ee={class:"col-6 col-lg-3 q-mb-sm blocks"},te={class:"col-6 col-lg-3 q-mb-sm blocks"},oe={class:"text-right q-mt-sm"};function se(o,c,r,g,l,b){const y=k("avatar");return h(),f("div",H,[e("div",S,[e("div",M,[e("div",N,[e("span",O,[E(n(V,{color:"primary",size:20},null,512),[[j,r.carregando]])])]),n(Q,{class:"q-my-sm"},{default:i(()=>[(h(!0),f(v,null,x(l.empresas,d=>(h(),q($,{key:d.codigoContato,"default-opened":"",label:d.nome},{default:i(()=>[(h(!0),f(v,null,x(r.dados.equipe.filter(t=>t.codigoEmpresa===d.codigoContato),t=>(h(),q(P,{key:t.codigoContatoVendedor,class:"extratoItem bg-white q-my-md q-py-sm q-px-md"},{default:i(()=>[e("div",R,[e("div",T,[e("div",z,[e("div",A,[n(y,{class:"avatar float-left",imagem:l.vendedores[t.codigoContatoVendedor].imagem,rotulo:l.vendedores[t.codigoContatoVendedor].nome,tamanho:"40"},null,8,["imagem","rotulo"]),n(m,null,{default:i(()=>[s(a(l.vendedores[t.codigoContatoVendedor].nome)+" ",1),e("div",null,a(d.nome),1)]),_:2},1024)])]),D,e("div",F,[e("div",I,[s("R$ "+a(o.$filters.numero(t.faturamentoPeriodo,2))+" ",1),L]),e("div",G,[s("R$ "+a(o.$filters.numero(t.faturamentoHoje,2))+" ",1),Z]),e("div",J,[s("R$ "+a(o.$filters.numero(t.faturamentoProjecao,2))+" ",1),K])])]),e("div",U,[e("div",W,[e("div",X,[n(m,{class:"text-h5 text-weight-bold text-center text-blue-8"},{default:i(()=>[s(a(o.$filters.numero(t.ticketMedioPeriodo,2)),1)]),_:2},1024),n(p,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[s(" Ticket M\xE9dio ")]),_:1})]),e("div",Y,[n(m,{class:"text-h5 text-weight-bold text-center text-blue-8"},{default:i(()=>[s(a(o.$filters.numero(t.pendenciasOrcamentos,0)),1)]),_:2},1024),n(p,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[s(" Or\xE7amento(s) ")]),_:1})]),e("div",ee,[n(m,{class:"text-h5 text-weight-bold text-center text-blue-8"},{default:i(()=>[s(a(o.$filters.numero(t.conversoesHoje,0))+" / "+a(o.$filters.numero(t.atendimentosHoje,0)),1)]),_:2},1024),n(p,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[s(" Atendimento c/ vendas hoje ")]),_:1})]),e("div",te,[n(m,{class:"text-h5 text-weight-bold text-center text-blue-8"},{default:i(()=>[s(a(o.$filters.numero(t.conversoesPeriodo,0))+" / "+a(o.$filters.numero(t.atendimentosPeriodo,0)),1)]),_:2},1024),n(p,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[s(" Atendimento c/ vendas per\xEDodo ")]),_:1})])])])])]),_:2},1024))),128)),e("p",oe,[s("M\xEAs "),e("strong",null,a(o.$filters.numero(r.dados.equipe.filter(t=>t.codigoEmpresa===d.codigoContato).reduce((t,u)=>t+u.faturamentoPeriodo,0),2)),1),s(" - Hoje "),e("strong",null,a(o.$filters.numero(r.dados.equipe.filter(t=>t.codigoEmpresa===d.codigoContato).reduce((t,u)=>t+u.faturamentoHoje,0),2)),1),s(" - Proje\xE7\xE3o "),e("strong",null,a(o.$filters.numero(r.dados.equipe.filter(t=>t.codigoEmpresa===d.codigoContato).reduce((t,u)=>t+u.faturamentoProjecao,0),2)),1)])]),_:2},1032,["label"]))),128))]),_:1})])])])}var re=w(B,[["render",se]]);export{re as default};
>>>>>>>> 7d21c0dfe9fe60ff7d81361a5b466fbe35d321e4:assets/QgEquipe.4f558d9a.js
