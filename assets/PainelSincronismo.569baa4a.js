import{_ as r,o as e,d,w as a,f as i,h as m,i as u,k as _,B as s,l as c,t as l,Q as h,I as p}from"./index.334d0b54.js";const v={data(){return{campos:{subir:"",descer:"",ultimoSincronismo:"",calcular:"",ultimoCalcular:""},dbSincronismo:$db.sincronismo}},methods:{async atualizar(){try{this.$utils.gconsole.log("PainelSincronismo","atualizar"),this.$q.loading.show();const o=await this.$utils.geeksApi({consultarFilas:{funcao:"BC338DFC-2E63-4D26-8688-59CCBDBDEFFE"}});this.campos=o.data.consultarFilas}catch(o){this.$q.notifyError("Erro na comunica\xE7\xE3o com o servidor",o)}finally{this.$q.loading.hide()}}},mounted(){this.$utils.gconsole.log("PainelSincronismo","mounted"),this.atualizar()}},g={class:"u-container"},w={class:"row q-col-gutter-sm q-pb-sm no-shadow"},f={class:"col-12 col-md-2"},q={class:"bg-white q-mt-md fit"},b={class:"row items-start"},C={class:"col q-pa-md"},y=s("div",{class:"row text-body1"},"Processar no servidor",-1),S=s("div",{class:"row q-pt-md"},[s("small",null,"Inf. recebida")],-1),B={class:"row"},k=s("div",{class:"row q-pt-md"},[s("small",null,"Inf. a descer")],-1),x={class:"row"},E=s("div",{class:"row q-pt-md"},[s("small",null,"\xDAltimo sincronismo")],-1),P={class:"row"},Q=s("div",{class:"row q-pt-md"},[s("small",null,"Calcular")],-1),$={class:"row"},D=s("div",{class:"row q-pt-md"},[s("small",null,"\xDAltimo c\xE1lculo")],-1),F={class:"row"},z={class:"col-auto q-py-sm"},T={class:"col-12 col-md-10"},I={class:"bg-white q-mt-md q-pa-md fit"},N=s("div",{class:"row text-body1"},[s("strong",null,"Eventos (log)")],-1);function V(o,A,j,G,t,n){return e(),d(p,null,{default:a(()=>[i(m,{class:"bg-gradiente text-white"},{default:a(()=>[i(u,null,{default:a(()=>[_(" Painel sincronismo ")]),_:1})]),_:1}),s("div",g,[s("div",w,[s("div",f,[s("div",q,[s("div",b,[s("div",C,[y,i(c,{class:"q-mt-md"}),S,s("div",B,[s("strong",null,l(t.campos.subir),1)]),k,s("div",x,[s("strong",null,l(t.campos.descer),1)]),E,s("div",P,[s("strong",null,l(o.$filters.hora(t.campos.ultimoSincronismo)),1)]),Q,s("div",$,[s("strong",null,l(t.campos.calcular),1)]),D,s("div",F,[s("strong",null,l(o.$filters.hora(t.campos.ultimoCalcular)),1)])]),s("div",z,[i(h,{color:"primary",dense:"",flat:"",icon:"refresh",onClick:n.atualizar,round:""},null,8,["onClick"])])])])]),s("div",T,[s("div",I,[N,i(c,{class:"q-mt-md"}),s("pre",null,l(t.dbSincronismo.log),1)])])])])]),_:1})}var J=r(v,[["render",V]]);export{J as default};
