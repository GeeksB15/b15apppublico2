import{_ as C,r as l,o as r,p as m,f as a,w as e,P as z,F as A,u as B,S as x,T as i,e as f,U as p,C as u,k as c,t as d,m as y,d as _,j as H,l as N}from"./index.f584915f.js";import{L as Q}from"./Lista.54d74534.js";import{J as $}from"./JsonViewer.40bbd6ea.js";const S={components:{Lista:Q,JsonViewer:$},data(){return{lista:[],mostrar:{header:!0,barraTopo:!0,toolbarTitulo:!0,icone:"analytics",titulo:"Logs",filtroAvancado:!0,buscar:!0,btnAjuda:!0,btnAtualizar:!0,btnNovo:!1,toolbarAcoes:!0,checkBox:!1,btnRemover:!1,btnRestaurar:!1,centralizaTabs:!1,btnDetalhes:!1,btnExportaXLS:!1,btnMenuMais:!1,toolbarAdicao:!1,bannerMsg:""},busca:"",paginacao:{atual:1,maximo:1,total:1,limite:25}}},methods:{async abrir(t){const o=$utils.clonar(this.lista[t]);await this.$refs.jsonViewer.show(o)},async atualizar(){try{$q.loading.show(),this.lista=await $db.log.ler()}catch(t){$q.notifyError(t.message)}finally{$q.loading.hide()}}},async mounted(){this.atualizar()}},T={id:"LogLista"},I={key:0,class:"mw80 text-center"},U={class:"text-weight-medium q-mr-xs"},j={class:"text-weight-medium"};function J(t,o,M,D,n,b){const g=l("BadgeCopiarUid"),L=l("avatar"),h=l("g-col"),q=l("g-label"),k=l("g-row"),v=l("Lista"),V=l("JsonViewer");return r(),m("div",T,[a(v,{ref:"logLista",busca:n.busca,"onUpdate:busca":o[0]||(o[0]=s=>n.busca=s),lista:n.lista,paginacao:n.paginacao,mostrar:n.mostrar,onAtualizar:b.atualizar},{itemLista:e(()=>[a(z,{bordered:"",class:"bg-white q-mb-xs rounded-borders"},{default:e(()=>[(r(!0),m(A,null,B(n.lista,(s,w)=>(r(),m("div",{key:w,class:"itemHover"},[a(x,{onClick:E=>b.abrir(w),clickable:"","manual-focus":"",class:"q-py-sm q-px-xs items-center"},{default:e(()=>[a(i,{class:"hideonmobile col-auto q-pr-sm no-margin"},{default:e(()=>[s.id?(r(),m("div",I,[a(g,{id:s.id,numero:s.id.slice(-8),cor:"positive",dica:"ID Log"},null,8,["id","numero"])])):f("",!0)]),_:2},1024),a(i,{class:"col no-margin"},{default:e(()=>[a(x,{class:"q-pa-none"},{default:e(()=>[a(i,{class:"col-auto items-center"},{default:e(()=>[a(L,{rotulo:s.usuarioNome,tamanho:"40",style:{display:"flex","align-self":"center"}},null,8,["rotulo"])]),_:2},1024),a(i,{class:"col"},{default:e(()=>[a(p,{lines:"2",class:"text-weight-bold ellipsis-2-lines"},{default:e(()=>[u("span",null,[c(d(s.mensagem||"Sem mensagem")+" ",1),a(y,{anchor:"bottom middle",self:"center middle"},{default:e(()=>o[1]||(o[1]=[c("Mensagem")])),_:1})])]),_:2},1024),a(p,{caption:""},{default:e(()=>[u("span",null,[c(d(s.usuarioNome)+" ",1),a(y,{anchor:"bottom middle",self:"center middle"},{default:e(()=>o[2]||(o[2]=[c("Usu\xE1rio")])),_:1})])]),_:2},1024),a(i,{class:"hideondesktop q-mt-sm"},{default:e(()=>[a(k,{mg:"xs-b"},{default:e(()=>[s.id?(r(),_(h,{key:0,col:"12",class:"q-mt-xs"},{default:e(()=>[a(g,{id:s.id,escuro:"",cor:"positive",numero:s.id.slice(-8),class:"q-mr-sm"},null,8,["id","numero"])]),_:2},1024)):f("",!0),s.dataHora?(r(),_(h,{key:1,col:"12",class:"q-mt-xs"},{default:e(()=>[a(q,null,{default:e(()=>[u("span",U,d(t.$filters.data(s.dataHora)),1),c(" "+d(t.$filters.hora(s.dataHora)),1)]),_:2},1024)]),_:2},1024)):f("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(i,{class:"hideonmobile maxw150 q-pl-sm no-margin cursor-pointer"},{default:e(()=>[s.dataHora?(r(),_(p,{key:0,caption:"",lines:"1",class:"ellipsis"},{default:e(()=>[u("span",null,[a(H,{name:"mdi-calendar-today",class:"q-mr-xs"}),u("span",j,d(t.$filters.data(s.dataHora)),1),c(" "+d(t.$filters.hora(s.dataHora)),1)])]),_:2},1024)):f("",!0)]),_:2},1024)]),_:2},1032,["onClick"]),a(N)]))),128))]),_:1})]),_:1},8,["busca","lista","paginacao","mostrar","onAtualizar"]),a(V,{ref:"jsonViewer"},null,512)])}var X=C(S,[["render",J]]);export{X as default};
