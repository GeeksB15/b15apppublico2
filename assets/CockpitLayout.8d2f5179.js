import{_ as k,$ as S,cG as j,r as u,o as l,p as $,f as r,w as i,h as D,i as y,k as m,t as B,d,Q as f,m as x,e as h,bg as V,H as I,S as N,T as b,j as Q,N as P,G as R,J as T,C as q,dM as J,I as O}from"./index.aa2e3840.js";import{M as U}from"./MenuAbas.f4b9524e.js";import{J as A}from"./JsonViewer.cca50f61.js";const M={components:{Avatar:S,MenuAbas:U,Tutorial:j,JsonViewer:A},data(){return{contato:{},permissoes:{},sistemaPai:""}},methods:{async atualizar(){try{await this.obterContatoUsuario()}catch(e){$q.notifyError("N\xE3o foi poss\xEDvel carregar os dados do cockpit",e)}},async criarObjStoreIDB(){if(!("indexedDB"in window)){console.log("Navegador sem suporte ao IndexedDB");return}let e=indexedDB.open("cockpit",1);return e.onupgradeneeded=function(a){var t=a.target.result;t.createObjectStore("consultasRecentes",{keyPath:"id"}).createIndex("id","id",{unique:!0})},new Promise((a,t)=>{e.onsuccess=function(o){a()},e.onerror=function(o){a()}})},salvarObjIDb(e){if(!("indexedDB"in window))return;let a,t,o;return a=new Promise((s,n)=>{o=s}),t=indexedDB.open("cockpit",1),t.onsuccess=function(){t=t.result.transaction(["consultasRecentes"],"readwrite").objectStore("consultasRecentes").put(e),t.onsuccess=function(c){o()},t.onerror=function(c){o()}},a},obterObjIDb(e){if(!("indexedDB"in window))return;let a,t,o;return a=new Promise((s,n)=>{o=s}),t=indexedDB.open("cockpit",1),t.onsuccess=function(){t=t.result.transaction(["consultasRecentes"],"readwrite").objectStore("consultasRecentes").get(e),t.onsuccess=function(c){o(c.target.result)},t.onerror=function(c){o()}},a},async obterContatoUsuario(){const e=JSON.parse(localStorage.getItem("usuario"))||{},a=this.$route.params.id,t=e.numeroDocumentoNacional;let o={};if(t){if(a&&(o=await $erp().contato.get(a)||{},(!o.ativo||o.excluido||o.numeroDocumentoNacional!==t)&&(o={})),!o.id){let s;s=await $erp().contato.where({numeroDocumentoNacional:t}).toArray(),o=s.find(n=>n.ativo&&!n.excluido&&n.codigoUsuario)||{}}this.selecionarContato(o)}if(!o.id){this.$q.notifyError("Usu\xE1rio logado n\xE3o encontrado. Selecione um vendedor para continuar.");const s=await $g.promptContato.show({filtro:{ativo:!0,vendedores:!0},placeholder:"Selecione o usu\xE1rio"});if(!s){const n=localStorage.getItem("contatoSelecionado");this.$router.push({name:"Atendimento",params:{id:n||"0"}}),this.$q.notifyError("Selecione um vendedor para acessar o cockpit.");return}$lodash.get(s,"id")&&this.selecionarContato(s)}},async btBuscar_click(){const e=await $g.promptContato.show({filtro:{ativo:!0,vendedores:!0},placeholder:"Selecione o usu\xE1rio"});$lodash.get(e,"id")&&this.selecionarContato(e)},selecionarContato(e){e.id&&(this.contato={id:e.id,nome:e.nome||"",apelido:e.apelido||"",imagem:e.imagem||""},this.$router.push({name:this.$route.name==="Cockpit"?"CockpitVendedor":this.$route.name,params:{id:e.id||""}}),this.salvarConsultaRecente())},async salvarConsultaRecente(){await this.criarObjStoreIDB();let e,a;e=JSON.parse(localStorage.getItem("clienteSistema"))||{},a=e.codigoClienteSistema,this.salvarObjIDb({id:a,idContato:this.contato.id})},async mostrarJsonViewer(){await this.$refs.jsonViewer.show(this)}},updated(){this.$route.path==="/cockpit"&&this.atualizar()},mounted(){this.permissoes={obterUsuario:!1,envelope:!1,vendas:!1,faturas:!1},$db.permissao.objeto("Diretiva_Cockpit_MudarUsuario").then(e=>{this.permissoes.obterUsuario=e}),$db.permissao.objeto("cockpit/envelope").then(e=>{this.permissoes.envelope=e}),$db.permissao.objeto("cockpit/vendas").then(e=>{this.permissoes.vendas=e}),$db.permissao.objeto("cockpit/faturas").then(e=>{this.permissoes.faturas=e}),this.sistemaPai=$utils.sistemaPai(),this.atualizar()}},z={id:"CockpitLayout"},E={class:"u-container"};function L(e,a,t,o,s,n){const c=u("barraTopo"),v=u("Avatar"),_=u("Tutorial"),w=u("RouterView"),g=u("MenuAbas"),C=u("JsonViewer");return l(),$("div",z,[r(R,{class:"bg-gradiente text-white"},{default:i(()=>[r(c),r(D,{class:"u-container q-px-sm"},{default:i(()=>[r(v,{imagem:s.contato.imagem,rotulo:s.contato.apelido,tamanho:"40"},null,8,["imagem","rotulo"]),r(y,null,{default:i(()=>[m(B(s.contato.nome),1)]),_:1}),s.permissoes.obterUsuario?(l(),d(f,{key:0,onClick:n.btBuscar_click,icon:"search",size:"md",flat:"",dense:"",round:""},{default:i(()=>[r(x,{anchor:"bottom middle",self:"center middle"},{default:i(()=>[m("Buscar vendedor/empresa")]),_:1})]),_:1},8,["onClick"])):h("",!0),r(_,{componente:"CockpitLayout"}),e.$db.usuario.desenvolvedor()?(l(),d(f,{key:1,icon:"more_vert",size:"md",round:"",flat:"",dense:""},{default:i(()=>[r(V,null,{default:i(()=>[I((l(),d(N,{onClick:a[0]||(a[0]=p=>n.mostrarJsonViewer()),clickable:""},{default:i(()=>[r(b,{avatar:""},{default:i(()=>[r(Q,{name:"mdi-file-replace",size:"sm"})]),_:1}),r(b,null,{default:i(()=>[m("Ver Objeto")]),_:1})]),_:1})),[[P]])]),_:1})]),_:1})):h("",!0)]),_:1})]),_:1}),r(O,null,{default:i(()=>[r(T,null,{default:i(()=>[r(g,{objetoPai:"cockpit"},{default:i(()=>[q("div",E,[r(w,null,{default:i(({Component:p})=>[(l(),d(J(p),{usuario:s.contato},null,8,["usuario"]))]),_:1})])]),_:1})]),_:1})]),_:1}),r(C,{ref:"jsonViewer"},null,512)])}var K=k(M,[["render",L]]);export{K as default};