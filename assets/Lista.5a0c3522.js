import{_ as le,r as A,o,p as q,f as l,w as e,d as i,e as s,h as y,ac as te,F as Q,u as F,P as T,H as R,S as N,T as D,U as oe,k as m,t as _,b5 as X,N as O,l as re,i as K,j as x,aW as B,s as ie,q as se,m as h,Q as f,B as p,aP as ne,b0 as de,b1 as ue,C as j,bg as ce,G as Z,J as G,bL as me,I as J,br as fe,K as W,bh as be,v as ke,b2 as Y,M as he,bs as ve,Y as ye,Z as _e}from"./index.35cb5467.js";const xe={data(){return{buscarPlaceHolder:"",buscar:"",filtros:!1,detalhes:!1,checkbox:!1}},emits:["atualizar","update:busca","update:checkBox","consultarSefazClick","checkBoxClick","criarClick","detalhesClick","exportaXLSClick","limparFiltrosClick","removerClick","restaurarClick"],methods:{onResize(){var u;this.buscarPlaceHolder=$utils.isMobile()?`Filtro: ${(u=this.mostrar)==null?void 0:u.titulo}`:"Filtro"},atualizar(){this.$emit("atualizar")},buscarAtualizar(){this.$emit("update:busca",this.buscar),this.$emit("atualizar")},consultarSefazClick(){this.$emit("consultarSefazClick")},checkBoxClick(){this.$emit("update:checkBox",this.checkbox),this.$emit("checkBoxClick")},criarClick(){this.$emit("criarClick")},detalhesClick(){this.detalhes=!this.detalhes,this.$emit("detalhesClick")},exportaXLSClick(){this.$emit("exportaXLSClick")},limparFiltrosClick(){this.$emit("limparFiltrosClick")},tab2Atualizar(u){this.tabSelecionada2.valor=u,this.$emit("atualizar")},removerClick(){this.$emit("removerClick")},restaurarClick(){this.$emit("restaurarClick")}},props:{carregando:{required:!1,default:!1,type:Boolean},lista:{default:()=>[],type:Array},permissao:{default:!0,type:Boolean},busca:{default:"",type:String},checkBox:{default:()=>!1,type:Boolean},mostrar:{default:()=>({barraTopo:!1,toolbarTitulo:!1,icone:"extension",titulo:"",buscar:!1,filtroAvancado:!1,btnAjuda:!1,btnAtualizar:!1,btnNovo:!1,toolbarAcoes:!1,checkBox:!1,btnRemover:!1,btnRestaurar:!1,centralizaTabs:!1,btnDetalhes:!1,btnExportaXLS:!1,btnMenuMais:!1,toolbarAdicao:!1,bannerMsg:""}),type:Object},tabSelecionada:{default:()=>({}),type:Object},tabs:{default:()=>[],type:Array},tabSelecionada2:{default:()=>({}),type:Object},tabs2:{default:()=>[],type:Array},paginacao:{default:()=>({atual:1,maximo:1,total:1,limite:25}),type:Object}},watch:{busca(u,r){this.buscar=u}}},Ce=u=>(ye("data-v-443047a6"),u=u(),_e(),u),ge={class:"text-subtitle2 text-weight-medium q-pb-sm q-mb-xs",style:{display:"flex","align-items":"center"}},we={class:"hideonmobile q-pl-xs"},ze=Ce(()=>j("span",{class:"btnBuscaSefaz q-ml-sm"},"SEFAZ",-1));function Se(u,r,a,Ae,c,n){var E,P;const $=A("barra-topo"),ee=A("ajuda"),ae=A("g-label"),V=A("g-col"),I=A("g-row");return o(),q(Q,null,[l(Z,{elevated:"",class:"bg-transparent"},{default:e(()=>{var b,L,H,M;return[(b=a.mostrar)!=null&&b.barraTopo?(o(),i($,{key:0})):s("",!0),a.tabs2.length?(o(),i(y,{key:1,style:{"min-height":"auto"},class:"hideondesktop bg-gradiente text-white text-caption q-pt-sm q-pr-sm q-pb-none q-pl-sm"},{default:e(()=>[l(te,{label:a.tabs2.find(k=>k.valor===a.tabSelecionada2.valor).rotulo,"dropdown-icon":"expand_more","text-color":"white",flat:"",padding:"8px 4px"},{default:e(()=>[(o(!0),q(Q,null,F(a.tabs2,k=>(o(),i(T,{link:"","no-border":"",key:k.valor},{default:e(()=>[R((o(),i(N,{onClick:v=>n.tab2Atualizar(k.valor),clickable:""},{default:e(()=>[l(D,null,{default:e(()=>[l(oe,{class:"text-uppercase"},{default:e(()=>[m(_(k.rotulo),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[X,k.valor!==a.tabSelecionada2.valor],[O]]),l(re)]),_:2},1024))),128))]),_:1},8,["label"])]),_:1})):s("",!0),(L=a.mostrar)!=null&&L.toolbarTitulo?(o(),i(y,{key:2,class:"bg-gradiente text-white q-px-sm"},{default:e(()=>{var k,v,C,g,w,z;return[((k=a.mostrar)==null?void 0:k.icone)===""&&((v=a.mostrar)==null?void 0:v.titulo)===""?s("",!0):(o(),i(K,{key:0,class:"hideonmobile col-auto text-subtitle1 text-weight-bold q-pr-sm"},{default:e(()=>{var d,t;return[l(x,{name:(d=a.mostrar)==null?void 0:d.icone,size:"sm",class:"q-mx-sm"},null,8,["name"]),m(" "+_((t=a.mostrar)==null?void 0:t.titulo),1)]}),_:1})),l(B),(C=a.mostrar)!=null&&C.buscar?(o(),i(ie,{key:1,modelValue:c.buscar,"onUpdate:modelValue":[r[2]||(r[2]=d=>c.buscar=d),r[3]||(r[3]=d=>n.buscarAtualizar())],debounce:500,"clear-icon":"close",standout:"",filled:"",clearable:"",dense:"",dark:"",class:"maxw600",placeholder:c.buscarPlaceHolder},se({prepend:e(()=>{var d,t,S;return[(d=a.mostrar)!=null&&d.filtroAvancado?(o(),i(x,{key:0,onClick:r[0]||(r[0]=()=>{c.filtros=!c.filtros}),name:"mdi-filter",class:"hideonmobile text-white cursor-pointer"})):s("",!0),(t=a.mostrar)!=null&&t.filtroAvancado?s("",!0):(o(),i(x,{key:1,name:"mdi-filter"})),(S=a.mostrar)!=null&&S.filtroAvancado?(o(),i(h,{key:2,anchor:"bottom middle",self:"center middle"},{default:e(()=>[m(" Filtros Avan\xE7ados ")]),_:1})):s("",!0)]}),_:2},[a.tabs2.length?void 0:{name:"before",fn:e(()=>{var d;return[l(x,{name:(d=a.mostrar)==null?void 0:d.icone,color:"white",class:"showScreenIcon"},null,8,["name"])]}),key:"0"},(g=a.mostrar)!=null&&g.filtroAvancado?{name:"append",fn:e(()=>[l(x,{onClick:r[1]||(r[1]=()=>{c.filtros=!c.filtros}),name:"mdi-tune",class:"text-white cursor-pointer"}),l(h,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[m(" Filtros Avan\xE7ados ")]),_:1})]),key:"1"}:void 0]),1032,["modelValue","placeholder"])):s("",!0),l(B),(w=a.mostrar)!=null&&w.btnAjuda?(o(),i(ee,{key:2,class:"q-ml-xs"})):s("",!0),(z=a.mostrar)!=null&&z.btnAtualizar?(o(),i(f,{key:3,onClick:n.atualizar,flat:"",round:"",dense:"",icon:"refresh",color:"transparent","text-color":"white",class:"q-mx-sm"},{default:e(()=>[l(h,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[m("Atualizar")]),_:1})]),_:1},8,["onClick"])):s("",!0),p(u.$slots,"botaoNovo",{},()=>{var d,t;return[((d=a.mostrar)==null?void 0:d.btnNovo)&&a.permissao?(o(),i(f,{key:0,onClick:n.criarClick,unelevated:"",icon:"add",label:"Novo",color:"primary","text-color":"white",class:"hideonmobile"},null,8,["onClick"])):s("",!0),((t=a.mostrar)==null?void 0:t.btnNovo)&&a.permissao?(o(),i(f,{key:1,onClick:n.criarClick,unelevated:"",round:"",icon:"add",color:"primary","text-color":"white",class:"hideondesktop"},null,8,["onClick"])):s("",!0)]},!0)]}),_:3})):s("",!0),(H=a.mostrar)!=null&&H.toolbarAcoes?(o(),i(y,{key:3,class:"bg-light text-tertiary q-px-sm"},{default:e(()=>{var k,v,C,g,w,z,d;return[(k=a.mostrar)!=null&&k.checkBox?(o(),i(ne,{key:0,modelValue:c.checkbox,"onUpdate:modelValue":[r[4]||(r[4]=t=>c.checkbox=t),r[5]||(r[5]=t=>n.checkBoxClick())],size:"md"},null,8,["modelValue"])):s("",!0),((v=a.mostrar)==null?void 0:v.btnRemover)&&a.permissao&&["Ativos","Ativo"].includes(a.tabSelecionada.valor)?(o(),i(f,{key:1,onClick:r[6]||(r[6]=t=>n.removerClick()),icon:"delete",size:"md",round:"",flat:"",dense:""},{default:e(()=>[l(h,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[m(" Remover ")]),_:1})]),_:1})):s("",!0),((C=a.mostrar)==null?void 0:C.btnRestaurar)&&a.permissao&&["Excluidos","Excluido"].includes(a.tabSelecionada.valor)?(o(),i(f,{key:2,onClick:r[7]||(r[7]=t=>n.restaurarClick()),icon:"restore_from_trash",size:"md",round:"",flat:"",dense:""},{default:e(()=>[l(h,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[m(" Restaurar ")]),_:1})]),_:1})):s("",!0),(g=a.mostrar)!=null&&g.centralizaTabs?(o(),i(B,{key:3})):s("",!0),a.tabs.length?(o(),i(de,{key:4,modelValue:a.tabSelecionada.valor,"onUpdate:modelValue":[r[8]||(r[8]=t=>a.tabSelecionada.valor=t),r[9]||(r[9]=t=>n.atualizar())],"outside-arrows":"","mobile-arrows":"",dense:"","inline-label":"","active-color":"primary","indicator-color":"primary",align:"left",class:"col-shrink tabsHorizontal"},{default:e(()=>[(o(!0),q(Q,null,F(a.tabs,t=>(o(),i(ue,{key:t==null?void 0:t.valor,name:t==null?void 0:t.valor,icon:t==null?void 0:t.icone},{default:e(()=>{var S,U;return[j("span",ge,[m(_(t==null?void 0:t.rotulo)+" ",1),j("span",we,_(`${((S=a.tabSelecionada)==null?void 0:S.valor)===(t==null?void 0:t.valor)?"("+((U=a.paginacao)==null?void 0:U.total)+")":""}`),1)]),t.dica?(o(),i(h,{key:0,anchor:"bottom middle",self:"center middle"},{default:e(()=>[m(_(t==null?void 0:t.dica),1)]),_:2},1024)):s("",!0)]}),_:2},1032,["name","icon"]))),128))]),_:1},8,["modelValue"])):s("",!0),l(B),R(l(f,{unelevated:"",onClick:r[10]||(r[10]=t=>n.consultarSefazClick()),icon:"cloud_download",size:"md",color:"tertiary"},{default:e(()=>[ze,l(h,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[m("Buscar no Sefaz")]),_:1})]),_:1},512),[[X,a.tabs2.length&&a.tabSelecionada2.valor==="Nota no SEFAZ"]]),(w=a.mostrar)!=null&&w.btnDetalhes?(o(),i(f,{key:5,onClick:r[11]||(r[11]=t=>n.detalhesClick()),class:"hideonmobile",icon:c.detalhes?"keyboard_arrow_up":"keyboard_arrow_down",size:"md",round:"",flat:"",dense:""},{default:e(()=>[l(h,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[m(_(c.detalhes?"Fechar tudo":"Abrir tudo"),1)]),_:1})]),_:1},8,["icon"])):s("",!0),(z=a.mostrar)!=null&&z.btnExportaXLS?(o(),i(f,{key:6,onClick:r[12]||(r[12]=t=>n.exportaXLSClick()),icon:"mdi-download",size:"md",round:"",flat:"",dense:"",class:"hideonmobile"},{default:e(()=>[l(h,{anchor:"bottom middle",self:"center middle"},{default:e(()=>[m(" Exportar ")]),_:1})]),_:1})):s("",!0),(d=a.mostrar)!=null&&d.btnMenuMais?(o(),i(f,{key:7,icon:"more_vert",size:"md",round:"",flat:"",dense:""},{default:e(()=>[l(ce,null,{default:e(()=>[R((o(),i(T,{link:"","no-border":"",separator:""},{default:e(()=>[p(u.$slots,"menuExtras",{},void 0,!0)]),_:3})),[[O]])]),_:3})]),_:3})):s("",!0)]}),_:3})):s("",!0),(M=a.mostrar)!=null&&M.toolbarAdicao?(o(),i(y,{key:4,class:"bg-light q-px-sm hideonmobile",style:{border:"1px solid rgba(0, 0, 0, 0.12)"}},{default:e(()=>[l(N,{class:"full-width q-pa-none"},{default:e(()=>[p(u.$slots,"adicaoRapida",{},void 0,!0)]),_:3})]),_:3})):s("",!0)]}),_:3}),l(J,null,{default:e(()=>[l(G,null,{default:e(()=>[l(me,{onResize:n.onResize},null,8,["onResize"]),l(I,null,{default:e(()=>[!a.carregando&&a.lista.length===0&&a.tabSelecionada.valor!=="Grupos"?(o(),i(V,{key:0,col:"grow",class:"q-px-xs"},{default:e(()=>[l(I,{justify:"center",bg:"bg-white",minHeight:"calc(100vh - 210px)!important"},{default:e(()=>[l(V,{self:"center"},{default:e(()=>[l(ae,{text:"caption center medium"},{default:e(()=>[m("Nenhum item a ser listado.")]),_:1})]),_:1})]),_:1})]),_:1})):(o(),i(V,{key:1,col:"grow",class:"q-px-xs"},{default:e(()=>[p(u.$slots,"itemLista",{style:"overflow-y:scroll;"},void 0,!0)]),_:3}))]),_:3})]),_:3})]),_:3}),((E=a.paginacao)==null?void 0:E.maximo)>1?(o(),i(W,{key:0,class:"bg-light q-py-none q-px-sm"},{default:e(()=>[l(fe,{modelValue:a.paginacao.atual,"onUpdate:modelValue":[r[13]||(r[13]=b=>a.paginacao.atual=b),n.atualizar],max:a.paginacao.maximo,input:"",color:"tertiary",class:"justify-center"},null,8,["modelValue","onUpdate:modelValue","max"])]),_:1})):s("",!0),a.tabs2.length?(o(),i(Y,{key:1,"show-if-above":"","no-swipe-open":"","no-swipe-close":"",bordered:"",side:"left",breakpoint:999,width:230,class:"hideonmobile"},{default:e(()=>[l(be,{class:"fit q-pa-md"},{default:e(()=>[l(T,null,{default:e(()=>[(o(!0),q(Q,null,F(a.tabs2,b=>(o(),i(N,{key:b.valor,class:"q-px-none q-py-sm text-uppercase"},{default:e(()=>[l(D,null,{default:e(()=>[l(f,{onClick:L=>n.tab2Atualizar(b.valor),label:b.rotulo,flat:"",ripple:"",unlevated:"",class:ke(["q-py-sm",b.valor===a.tabSelecionada2.valor?"bg-primary text-white":"bg-transparent text-tertyari"])},null,8,["onClick","label","class"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})):s("",!0),(P=a.mostrar)!=null&&P.filtroAvancado?(o(),i(Y,{key:2,modelValue:c.filtros,"onUpdate:modelValue":r[15]||(r[15]=b=>c.filtros=b),onKeyup:ve(n.atualizar,["enter"]),bordered:"",side:"right",class:"hide-scrollbar"},{default:e(()=>[l(he,{view:"hHh lpR lFr"},{default:e(()=>[l(Z,{class:"bg-white"},{default:e(()=>[l(y,{class:"text-tertiary border-bottom"},{default:e(()=>[l(x,{name:"mdi-filter",class:"text-h5"}),l(K,null,{default:e(()=>[m("Filtros Avan\xE7ados")]),_:1}),l(f,{onClick:r[14]||(r[14]=b=>c.filtros=!c.filtros),icon:"close",round:"",flat:"",dense:""})]),_:1})]),_:1}),l(J,null,{default:e(()=>[l(G,{class:"q-pa-md"},{default:e(()=>[p(u.$slots,"filtroCampos",{},void 0,!0)]),_:3})]),_:3}),l(W,{class:"bg-white"},{default:e(()=>[l(y,{class:"bg-white border-top"},{default:e(()=>[l(f,{onClick:n.limparFiltrosClick,label:"Limpar",color:"tertiary",flat:"",class:"fit"},null,8,["onClick"]),l(f,{onClick:n.atualizar,label:"Aplicar",color:"primary",unelevated:"",class:"fit"},null,8,["onClick"])]),_:1})]),_:1})]),_:3})]),_:3},8,["modelValue","onKeyup"])):s("",!0)],64)}var qe=le(xe,[["render",Se],["__scopeId","data-v-443047a6"]]);export{qe as L};