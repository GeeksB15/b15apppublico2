import{_ as ae,r as A,o,p as q,f as l,w as e,d as r,e as s,h as _,ac as le,F as L,u as F,P as T,H as E,S as R,T as U,U as te,k as c,t as C,b5 as oe,N as D,l as re,i as X,j as g,aW as p,s as ie,q as se,m as v,Q as k,B as Q,aP as ne,b0 as de,b1 as ue,C as O,bg as ce,G as K,J as G,bL as me,I as J,br as fe,K as W,bh as be,v as ke,b2 as Y,M as he,bs as ye}from"./index.828e7912.js";const ve={data(){return{buscarPlaceHolder:"",buscar:"",filtros:!1,detalhes:!1,checkbox:!1}},emits:["atualizar","update:busca","update:checkBox","consultarSefazClick","checkBoxClick","criarClick","detalhesClick","exportaXLSClick","limparFiltrosClick","removerClick","restaurarClick"],methods:{onResize(){var m;this.buscarPlaceHolder=$utils.isMobile()?`Filtro: ${(m=this.mostrar)==null?void 0:m.titulo}`:"Filtro"},atualizar(){this.$emit("atualizar")},buscarAtualizar(){this.$emit("update:busca",this.buscar),this.$emit("atualizar")},consultarSefazClick(){this.$emit("consultarSefazClick")},checkBoxClick(){this.$emit("update:checkBox",this.checkbox),this.$emit("checkBoxClick")},criarClick(){this.$emit("criarClick")},detalhesClick(){this.detalhes=!this.detalhes,this.$emit("detalhesClick")},exportaXLSClick(){this.$emit("exportaXLSClick")},limparFiltrosClick(){this.$emit("limparFiltrosClick")},tab2Atualizar(m){this.tabSelecionada2.valor=m,this.$emit("atualizar")},removerClick(){this.$emit("removerClick")},restaurarClick(){this.$emit("restaurarClick")}},props:{carregando:{required:!1,default:!1,type:Boolean},lista:{default:()=>[],type:Array},permissao:{default:!0,type:Boolean},busca:{default:"",type:String},checkBox:{default:()=>!1,type:Boolean},mostrar:{default:()=>({barraTopo:!1,toolbarTitulo:!1,icone:"extension",titulo:"",buscar:!1,filtroAvancado:!1,btnAjuda:!1,btnAtualizar:!1,btnNovo:!1,toolbarAcoes:!1,checkBox:!1,btnRemover:!1,btnRestaurar:!1,centralizaTabs:!1,btnDetalhes:!1,btnExportaXLS:!1,btnMenuMais:!1,toolbarAdicao:!1,bannerMsg:""}),type:Object},tabSelecionada:{default:()=>({}),type:Object},tabs:{default:()=>[],type:Array},tabSelecionada2:{default:()=>({}),type:Object},tabs2:{default:()=>[],type:Array},paginacao:{default:()=>({atual:1,maximo:1,total:1,limite:25}),type:Object}},watch:{busca(m,i){this.buscar=m}}},xe={id:"Listagem"},_e={class:"text-subtitle2 text-weight-medium q-pb-sm q-mb-xs",style:{display:"flex","align-items":"center"}},Ce={class:"hideonmobile q-pl-xs"};function ge(m,i,a,we,u,n){var N,P;const Z=A("barra-topo"),$=A("ajuda"),ee=A("g-label"),V=A("g-col"),j=A("g-row");return o(),q("div",xe,[l(K,{elevated:"",class:"bg-transparent"},{default:e(()=>{var f,B,H,I;return[(f=a.mostrar)!=null&&f.barraTopo?(o(),r(Z,{key:0})):s("",!0),a.tabs2.length?(o(),r(_,{key:1,style:{"min-height":"auto"},class:"hideondesktop bg-gradiente text-white text-caption q-pt-sm q-pr-sm q-pb-none q-pl-sm"},{default:e(()=>{var h,y;return[l(le,{label:(y=(h=a.tabs2.find(b=>b.valor===a.tabSelecionada2.valor))==null?void 0:h.rotulo)!=null?y:a.tabSelecionada2.valor,"dropdown-icon":"expand_more","text-color":"white",flat:"",padding:"8px 4px"},{default:e(()=>[(o(!0),q(L,null,F(a.tabs2,b=>(o(),r(T,{link:"","no-border":"",key:b.valor},{default:e(()=>[E((o(),r(R,{onClick:x=>n.tab2Atualizar(b.valor),clickable:""},{default:e(()=>[l(U,null,{default:e(()=>[l(te,{class:"text-uppercase"},{default:e(()=>[c(C(b.rotulo),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[oe,b.valor!==a.tabSelecionada2.valor],[D]]),l(re)]),_:2},1024))),128))]),_:1},8,["label"])]}),_:1})):s("",!0),(B=a.mostrar)!=null&&B.toolbarTitulo?(o(),r(_,{key:2,class:"bg-gradiente text-white q-px-sm"},{default:e(()=>{var h,y,b,x,w,z;return[((h=a.mostrar)==null?void 0:h.icone)===""&&((y=a.mostrar)==null?void 0:y.titulo)===""?s("",!0):(o(),r(X,{key:0,class:"hideonmobile col-auto text-subtitle1 text-weight-bold q-pr-sm"},{default:e(()=>{var d,t;return[l(g,{name:(d=a.mostrar)==null?void 0:d.icone,size:"sm",class:"q-mx-sm"},null,8,["name"]),c(" "+C((t=a.mostrar)==null?void 0:t.titulo),1)]}),_:1})),l(p),(b=a.mostrar)!=null&&b.buscar?(o(),r(ie,{key:1,modelValue:u.buscar,"onUpdate:modelValue":[i[2]||(i[2]=d=>u.buscar=d),i[3]||(i[3]=d=>n.buscarAtualizar())],debounce:500,"clear-icon":"close",standout:"",filled:"",clearable:"",dense:"",dark:"",class:"maxw600",placeholder:u.buscarPlaceHolder},se({prepend:e(()=>{var d,t,S;return[(d=a.mostrar)!=null&&d.filtroAvancado?(o(),r(g,{key:0,onClick:i[0]||(i[0]=()=>{u.filtros=!u.filtros}),name:"mdi-filter",class:"hideonmobile text-white cursor-pointer"})):s("",!0),(t=a.mostrar)!=null&&t.filtroAvancado?s("",!0):(o(),r(g,{key:1,name:"mdi-filter"})),(S=a.mostrar)!=null&&S.filtroAvancado?(o(),r(v,{key:2,anchor:"bottom middle",self:"center middle"},{default:e(()=>[c(" Filtros Avan\xE7ados ")]),_:1})):s("",!0)]}),_:2},[a.tabs2.length?void 0:{name:"before",fn:e(()=>{var d;return[l(g,{name:(d=a.mostrar)==null?void 0:d.icone,color:"white",class:"showScreenIcon"},null,8,["name"])]}),key:"0"},(x=a.mostrar)!=null&&x.filtroAvancado?{name:"append",fn:e(()=>[l(g,{onClick:i[1]||(i[1]=()=>{u.filtros=!u.filtros}),name:"mdi-tune",class:"text-white cursor-pointer"}),l(v,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[c(" Filtros Avan\xE7ados ")]),_:1})]),key:"1"}:void 0]),1032,["modelValue","placeholder"])):s("",!0),l(p),(w=a.mostrar)!=null&&w.btnAjuda?(o(),r($,{key:2,class:"q-ml-xs"})):s("",!0),(z=a.mostrar)!=null&&z.btnAtualizar?(o(),r(k,{key:3,onClick:n.atualizar,flat:"",round:"",dense:"",icon:"refresh",color:"transparent","text-color":"white",class:"q-mx-sm"},{default:e(()=>[l(v,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[c("Atualizar")]),_:1})]),_:1},8,["onClick"])):s("",!0),Q(m.$slots,"botaoNovo",{},()=>{var d,t;return[((d=a.mostrar)==null?void 0:d.btnNovo)&&a.permissao?(o(),r(k,{key:0,onClick:n.criarClick,unelevated:"",icon:"add",label:"Novo",color:"primary","text-color":"white",class:"hideonmobile"},null,8,["onClick"])):s("",!0),((t=a.mostrar)==null?void 0:t.btnNovo)&&a.permissao?(o(),r(k,{key:1,onClick:n.criarClick,unelevated:"",round:"",icon:"add",color:"primary","text-color":"white",class:"hideondesktop"},null,8,["onClick"])):s("",!0)]},!0)]}),_:3})):s("",!0),(H=a.mostrar)!=null&&H.toolbarAcoes?(o(),r(_,{key:3,class:"bg-light text-tertiary q-px-sm"},{default:e(()=>{var h,y,b,x,w,z,d;return[(h=a.mostrar)!=null&&h.checkBox?(o(),r(ne,{key:0,modelValue:u.checkbox,"onUpdate:modelValue":[i[4]||(i[4]=t=>u.checkbox=t),i[5]||(i[5]=t=>n.checkBoxClick())],size:"md"},null,8,["modelValue"])):s("",!0),((y=a.mostrar)==null?void 0:y.btnRemover)&&a.permissao&&["Ativos","Ativo"].includes(a.tabSelecionada.valor)?(o(),r(k,{key:1,onClick:i[6]||(i[6]=t=>n.removerClick()),icon:"delete",size:"md",round:"",flat:"",dense:""},{default:e(()=>[l(v,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[c(" Remover ")]),_:1})]),_:1})):s("",!0),((b=a.mostrar)==null?void 0:b.btnRestaurar)&&a.permissao&&["Excluidos","Excluido"].includes(a.tabSelecionada.valor)?(o(),r(k,{key:2,onClick:i[7]||(i[7]=t=>n.restaurarClick()),icon:"restore_from_trash",size:"md",round:"",flat:"",dense:""},{default:e(()=>[l(v,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[c(" Restaurar ")]),_:1})]),_:1})):s("",!0),(x=a.mostrar)!=null&&x.centralizaTabs?(o(),r(p,{key:3})):s("",!0),a.tabs.length?(o(),r(de,{key:4,modelValue:a.tabSelecionada.valor,"onUpdate:modelValue":[i[8]||(i[8]=t=>a.tabSelecionada.valor=t),i[9]||(i[9]=t=>n.atualizar())],"outside-arrows":"","mobile-arrows":"",dense:"","inline-label":"","active-color":"primary","indicator-color":"primary",align:"left",class:"col-shrink tabsHorizontal"},{default:e(()=>[(o(!0),q(L,null,F(a.tabs,t=>(o(),r(ue,{key:t==null?void 0:t.valor,name:t==null?void 0:t.valor,icon:t==null?void 0:t.icone},{default:e(()=>{var S,M;return[O("span",_e,[c(C(t==null?void 0:t.rotulo)+" ",1),O("span",Ce,C(`${((S=a.tabSelecionada)==null?void 0:S.valor)===(t==null?void 0:t.valor)?"("+((M=a.paginacao)==null?void 0:M.total)+")":""}`),1)]),t.dica?(o(),r(v,{key:0,anchor:"bottom middle",self:"center middle"},{default:e(()=>[c(C(t==null?void 0:t.dica),1)]),_:2},1024)):s("",!0)]}),_:2},1032,["name","icon"]))),128))]),_:1},8,["modelValue"])):s("",!0),l(p),(w=a.mostrar)!=null&&w.btnDetalhes?(o(),r(k,{key:5,onClick:i[10]||(i[10]=t=>n.detalhesClick()),class:"hideonmobile",icon:u.detalhes?"keyboard_arrow_up":"keyboard_arrow_down",size:"md",round:"",flat:"",dense:""},{default:e(()=>[l(v,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[c(C(u.detalhes?"Fechar tudo":"Abrir tudo"),1)]),_:1})]),_:1},8,["icon"])):s("",!0),(z=a.mostrar)!=null&&z.btnExportaXLS?(o(),r(k,{key:6,onClick:i[11]||(i[11]=t=>n.exportaXLSClick()),icon:"mdi-download",size:"md",round:"",flat:"",dense:"",class:"hideonmobile"},{default:e(()=>[l(v,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[c(" Exportar ")]),_:1})]),_:1})):s("",!0),(d=a.mostrar)!=null&&d.btnMenuMais?(o(),r(k,{key:7,icon:"more_vert",size:"md",round:"",flat:"",dense:""},{default:e(()=>[l(ce,null,{default:e(()=>[E((o(),r(T,{link:"","no-border":"",separator:""},{default:e(()=>[Q(m.$slots,"menuExtras",{},void 0,!0)]),_:3})),[[D]])]),_:3})]),_:3})):s("",!0)]}),_:3})):s("",!0),(I=a.mostrar)!=null&&I.toolbarAdicao?(o(),r(_,{key:4,class:"bg-light q-px-sm hideonmobile",style:{border:"1px solid rgba(0, 0, 0, 0.12)"}},{default:e(()=>[l(R,{class:"full-width q-pa-none"},{default:e(()=>[Q(m.$slots,"adicaoRapida",{},void 0,!0)]),_:3})]),_:3})):s("",!0)]}),_:3}),l(J,null,{default:e(()=>[l(G,null,{default:e(()=>[l(me,{onResize:n.onResize},null,8,["onResize"]),l(j,null,{default:e(()=>[!a.carregando&&a.lista.length===0&&a.tabSelecionada.valor!=="Grupos"?(o(),r(V,{key:0,col:"grow",class:"q-px-xs"},{default:e(()=>[l(j,{justify:"center",bg:"bg-white",minHeight:"calc(100vh - 210px)!important"},{default:e(()=>[l(V,{self:"center"},{default:e(()=>[l(ee,{text:"caption center medium"},{default:e(()=>[c("Nenhum item a ser listado.")]),_:1})]),_:1})]),_:1})]),_:1})):(o(),r(V,{key:1,col:"grow",class:"q-px-xs"},{default:e(()=>[Q(m.$slots,"itemLista",{style:"overflow-y:scroll;"},void 0,!0)]),_:3}))]),_:3})]),_:3})]),_:3}),((N=a.paginacao)==null?void 0:N.maximo)>1?(o(),r(W,{key:0,class:"bg-light q-py-none q-px-sm"},{default:e(()=>[l(fe,{modelValue:a.paginacao.atual,"onUpdate:modelValue":[i[12]||(i[12]=f=>a.paginacao.atual=f),n.atualizar],max:a.paginacao.maximo,input:"",color:"tertiary",class:"justify-center"},null,8,["modelValue","onUpdate:modelValue","max"])]),_:1})):s("",!0),a.tabs2.length?(o(),r(Y,{key:1,"show-if-above":"","no-swipe-open":"","no-swipe-close":"",bordered:"",side:"left",breakpoint:999,width:230,class:"hideonmobile"},{default:e(()=>[l(be,{class:"fit q-pa-md"},{default:e(()=>[l(T,null,{default:e(()=>[(o(!0),q(L,null,F(a.tabs2,f=>(o(),r(R,{key:f.valor,class:"q-px-none q-py-sm text-uppercase"},{default:e(()=>[l(U,null,{default:e(()=>[l(k,{onClick:B=>n.tab2Atualizar(f.valor),label:f.rotulo,flat:"",ripple:"",unlevated:"",class:ke(["q-py-sm",f.valor===a.tabSelecionada2.valor?"bg-primary text-white":"bg-transparent text-tertyari"])},null,8,["onClick","label","class"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})):s("",!0),(P=a.mostrar)!=null&&P.filtroAvancado?(o(),r(Y,{key:2,modelValue:u.filtros,"onUpdate:modelValue":i[14]||(i[14]=f=>u.filtros=f),onKeyup:ye(n.atualizar,["enter"]),bordered:"",side:"right",class:"hide-scrollbar"},{default:e(()=>[l(he,{view:"hHh lpR lFr"},{default:e(()=>[l(K,{class:"bg-white"},{default:e(()=>[l(_,{class:"text-tertiary border-bottom"},{default:e(()=>[l(g,{name:"mdi-filter",class:"text-h5"}),l(X,null,{default:e(()=>[c("Filtros Avan\xE7ados")]),_:1}),l(k,{onClick:i[13]||(i[13]=f=>u.filtros=!u.filtros),icon:"close",round:"",flat:"",dense:""})]),_:1})]),_:1}),l(J,null,{default:e(()=>[l(G,{class:"q-pa-md"},{default:e(()=>[Q(m.$slots,"filtroCampos",{},void 0,!0)]),_:3})]),_:3}),l(W,{class:"bg-white"},{default:e(()=>[l(_,{class:"bg-white border-top"},{default:e(()=>[l(k,{onClick:n.limparFiltrosClick,label:"Limpar",color:"tertiary",flat:"",class:"fit"},null,8,["onClick"]),l(k,{onClick:n.atualizar,label:"Aplicar",color:"primary",unelevated:"",class:"fit"},null,8,["onClick"])]),_:1})]),_:1})]),_:3})]),_:3},8,["modelValue","onKeyup"])):s("",!0)])}var Se=ae(ve,[["render",ge],["__scopeId","data-v-7a424198"]]);export{Se as L};
