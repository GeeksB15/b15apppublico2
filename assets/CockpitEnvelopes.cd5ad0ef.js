import{_ as Q,Z as N,r as D,o as p,n as y,f as o,w as t,B as u,h as U,i as $,d as C,Q as v,az as S,G as b,R as E,S as _,j as V,k as l,M as F,e as J,y as A,t as d,b0 as P,cs as M,N as k,bt as q,bu as I,bv as m,b7 as x,av as j,bj as T,O as H,F as z,s as B,T as R}from"./index.9759e0fb.js";import{I as W}from"./Icone.aea930ba.js";import{o as L}from"./open-url.672c9160.js";import{J as G}from"./JsonViewer.452da2fa.js";const Z={components:{Avatar:N,Icone:W,JsonViewer:G},computed:{colunas(){return{envelopes:[{name:"nroVenda",label:"N.\xB0 Venda",field:"numero",align:"left"},{name:"nroEnvelope",label:"N.\xB0 Envelope",field:"numero",align:"left"},{name:"status",label:"Status",field:"status",sortable:!0,align:"left"},{name:"dataHoraPrevisto",label:"Previs\xE3o de Entrega",field:"dataHoraPrevisto",sortable:!0,align:"center"},{name:"nome",label:"Cliente",field:"nome",sortable:!0,align:"left"},{name:"telefone",label:"Telefone",field:"telefone",align:"left"},{name:"valor",label:"Valor",field:"valor",align:"left"},{name:"imprimir",field:"idVenda",align:"center"}]}}},data(){return{carregando:!0,cockpit:{envelopesAtrasados:[],envelopesHoje:[],envelopesAEntregar:[]},contato:{},empresas:[],nomesEmpresasSelecionadas:[],configImpressaoEnvelope:{},filtro:{codigoClienteSistema:"",codigoContatoUsuario:"",empresas:[],periodo:{ini:"",fim:""}}}},watch:{"$route.params.id"(){this.atualizar()}},methods:{irParaAtendimentoVenda(a){this.$router.push({name:"AtendimentoVenda",params:{id:a}})},async abrirTelefone(a){if(!a.telefone)return;const r=a.tipoTelefone==="WhatsApp"?"https://api.whatsapp.com/send?"+(a.aniversario?"text=Parab\xE9ns, "+a.nome+"&":"")+"phone=":"tel:+";L(r+await $utils.formatarTelefone(a))},async configuraImpressaoEnvelope(a){for(const r of a)this.configImpressaoEnvelope[r.idEmpresa]||(this.configImpressaoEnvelope[r.idEmpresa]=[{valor:"envelope",texto:"Imprimir Envelope"},{valor:"envelopeMini",texto:"Imprimir Envelope Mini"}])},telefoneIcone(a){return{Celular:{color:"dark",name:"phone_iphone",size:"18px"},Comercial:{color:"dark",name:"phone",size:"18px"},Fixo:{color:"dark",name:"phone",size:"18px"},Principal:{color:"orange",name:"star",size:"18px"},WhatsApp:{cor:"whatsapp",nome:"whatsapp",tamanho:18}}[a]||{color:"dark",name:"phone",size:"18px"}},removerEmpresa(a){const r=this.empresas.find(n=>n.nome===a.value[0]);r&&(this.filtro.empresas=this.filtro.empresas.filter(n=>n!==r.codigoContato),this.filtrar())},selecionarEmpresa(a){this.filtro.empresas.includes(a.value)?this.nomesEmpresasSelecionadas=this.nomesEmpresasSelecionadas.slice(0,this.nomesEmpresasSelecionadas.length-1):(this.filtro.empresas.push(a.value),this.nomesEmpresasSelecionadas.splice(this.nomesEmpresasSelecionadas.length-1,1,a.label),this.filtrar())},async obterContatos(a){let r={};for(const n of a)if(n.idContato&&!r[n.idContato]){const f=await $erp().contato.get(n.idContato);f&&f.id&&(r[n.idContato]={imagem:f.imagem||""})}this.contato=r},async obterConsultaRecente(){await this.criarObjStoreIDB();const a=String(this.codigoClienteSistema)+"_"+String(this.codigoContatoUsuario)+"/envelopes";let r=await this.obterObjIDb(a);if(r){this.filtro={codigoClienteSistema:this.codigoClienteSistema,codigoContatoUsuario:this.codigoContatoUsuario,empresas:r.empresas,dataConsulta:new Date(r.dataConsulta),periodo:r.periodo},this.nomesEmpresasSelecionadas=[];for(const f of this.filtro.empresas){const c=this.empresas.find(i=>i.codigoContato===f);c&&this.nomesEmpresasSelecionadas.push(c.nome)}const n=r.dados;return await this.obterContatos([...n.envelopesAtrasados,...n.envelopesHoje,...n.envelopesAEntregar]),await this.configuraImpressaoEnvelope([...n.envelopesAtrasados,...n.envelopesHoje,...n.envelopesAEntregar]),this.acertarDatas(n),this.cockpit=n,!0}return!1},acertarDatas(a){const r=new Date(new Date().setHours(0,0,0,0)).toISOString().replace(/\d{4}-\d{2}-\d{2}/g,"");a.envelopesAtrasados.forEach(n=>{n.dataHoraPrevisto=(n.dataHoraPrevisto||"").replace(/T.+$/g,r)}),a.envelopesHoje.forEach(n=>{n.dataHoraPrevisto=(n.dataHoraPrevisto||"").replace(/T.+$/g,r)}),a.envelopesAEntregar.forEach(n=>{n.dataHoraPrevisto=(n.dataHoraPrevisto||"").replace(/T.+$/g,r)})},async salvarConsultaRecente(){await this.criarObjStoreIDB(),this.salvarObjIDb({id:String(this.filtro.codigoClienteSistema)+"_"+String(this.filtro.codigoContatoUsuario)+"/envelopes",periodo:this.filtro.periodo,dataConsulta:this.filtro.dataConsulta.toISOString(),empresas:this.filtro.empresas,dados:this.cockpit})},async criarObjStoreIDB(){if(!("indexedDB"in window)){console.log("Navegador sem suporte ao IndexedDB");return}let a=indexedDB.open("cockpit",1);return a.onupgradeneeded=function(r){var n=r.target.result;n.createObjectStore("consultasRecentes",{keyPath:"id"}).createIndex("id","id",{unique:!0})},new Promise((r,n)=>{a.onsuccess=function(f){r()},a.onerror=function(f){r()}})},salvarObjIDb(a){if(!("indexedDB"in window))return;let r,n,f;return r=new Promise((c,i)=>{f=c}),n=indexedDB.open("cockpit",1),n.onsuccess=function(){n=n.result.transaction(["consultasRecentes"],"readwrite").objectStore("consultasRecentes").put($utils.clonarV2(a)),n.onsuccess=function(h){f()},n.onerror=function(h){f()}},r},obterObjIDb(a){if(!("indexedDB"in window))return;let r,n,f;return r=new Promise((c,i)=>{f=c}),n=indexedDB.open("cockpit",1),n.onsuccess=function(){n=n.result.transaction(["consultasRecentes"],"readwrite").objectStore("consultasRecentes").get(a),n.onsuccess=function(h){f(h.target.result)},n.onerror=function(h){f()}},r},async filtrar(){this.carregando=!0,this.contato={},this.filtro.periodo.ini=new Date(this.filtro.periodo.ini).toISOString(),this.filtro.periodo.fim=new Date(this.filtro.periodo.fim).toISOString(),this.filtro.dataConsulta=new Date;let a=await this.$utils.geeksApi({"cockpit-envelopes":{funcao:"490EEF31-364A-426F-BF03-9AA08F529496",codigoClienteSistema:this.filtro.codigoClienteSistema,codigoContatoUsuario:this.filtro.codigoContatoUsuario,empresas:this.filtro.empresas,periodo:this.filtro.periodo}});a=a.data["cockpit-envelopes"],await this.obterContatos([...a.envelopesAtrasados,...a.envelopesHoje,...a.envelopesAEntregar]),await this.configuraImpressaoEnvelope([...a.envelopesAtrasados,...a.envelopesHoje,...a.envelopesAEntregar]),this.acertarDatas(a),this.cockpit=a,this.salvarConsultaRecente(),this.carregando=!1},async atualizar(){try{let a,r,n;const f=this.$route.params.id;$utils.verificarErro(!f,"Id do contato n\xE3o encontrado"),n=(await $erp().contato.get(f)||{}).codigoContato,$utils.verificarErro(!n,"Contato n\xE3o encontrado"),a=JSON.parse(localStorage.getItem("clienteSistema"))||{},r=a.codigoClienteSistema,$utils.verificarErro(!r,"Cliente Sistema n\xE3o encontrado"),this.codigoClienteSistema=r,this.codigoContatoUsuario=n;let i=await $erp().empresa.toArray();this.empresas=i.map(w=>({codigoContato:w.codigoContato,nome:w.nome,apelido:w.apelido,numeroDocumentoNacional:w.numeroDocumentoNacional}));let h,g;h=new Date(new Date(new Date().setDate(1)).setHours(0,0,0,0)),g=new Date(new Date(new Date(h).setMonth(h.getMonth()+1)).setDate(0)),this.nomesEmpresasSelecionadas=[],this.filtro=JSON.parse(this.filtroT||null)||{codigoClienteSistema:this.codigoClienteSistema,codigoContatoUsuario:this.codigoContatoUsuario,empresas:[],dataConsulta:new Date,periodo:{ini:h,fim:g}},this.nomesEmpresasSelecionadas=[];for(const w of this.filtro.empresas){const e=this.empresas.find(s=>s.codigoContato===w);e&&this.nomesEmpresasSelecionadas.push(e.nome)}if(!this.filtroT&&await this.obterConsultaRecente()&&(this.carregando=!1,!(new Date-new Date(this.filtro.dataConsulta)>5*6e4)))return;this.filtrar()}catch(a){this.$q.notifyError("N\xE3o foi poss\xEDvel carregar os dados do cockpit",a)}},async mostrarJsonViewer(){await this.$refs.jsonViewer.show(this)}},props:{filtroT:String},mounted(){this.atualizar()}},K={id:"cockpitenvelope"},X={class:"col-12"},Y={class:"filters row content-stretch justify-between q-pt-sm q-pr-sm q-mt-md q-mb-md q-col-gutter-x-sm bg-white",style:{"border-radius":"5px","min-height":"50px"}},ee={class:"col-11"},oe={class:"row q-mb-sm"},te={class:"row q-col-gutter-sm q-pb-md"},ae={class:"col-12",style:{float:"right"}},ne={style:{"font-size":"70%"}},re={class:"col-12"},ie={class:"row items-center"},se={class:"row items-center"},le={class:"row items-center"},ce={class:"row items-center"},de={class:"col-12"},me={class:"row items-center"},ue={class:"row items-center"},fe={class:"row items-center"},pe={class:"row items-center"},he={class:"col-12"},ve={class:"row items-center"},we={class:"row items-center"},Ce={class:"row items-center"},_e={class:"row items-center"};function ge(a,r,n,f,c,i){const h=D("q-chips-input"),g=D("avatar"),w=D("JsonViewer");return p(),y("div",K,[o(A,{class:"shadow-3 filters row no-shadow"},{default:t(()=>[u("div",X,[o(U,{"text-color":"black",class:"no-shadow q-pa-none",color:"transparent"},{default:t(()=>[o($,{class:"q-pa-none"},{default:t(()=>[u("div",Y,[u("div",ee,[u("div",oe,[o(h,{modelValue:c.nomesEmpresasSelecionadas,"onUpdate:modelValue":r[0]||(r[0]=e=>c.nomesEmpresasSelecionadas=e),color:"tertiary",class:"col q-mx-md",placeholder:"Filtre por Empresa",onRemove:i.removerEmpresa},null,8,["modelValue","onRemove"])])]),a.$db.usuario.desenvolvedor()?(p(),C(v,{key:0,icon:"more_vert",round:"",flat:""},{default:t(()=>[o(S,null,{default:t(()=>[b((p(),C(E,{clickable:"",onClick:r[1]||(r[1]=e=>i.mostrarJsonViewer())},{default:t(()=>[o(_,{avatar:""},{default:t(()=>[o(V,{name:"mdi-file-replace",size:"sm"})]),_:1}),o(_,null,{default:t(()=>[l("Ver Objeto")]),_:1})]),_:1})),[[F]])]),_:1})]),_:1})):J("",!0),o(v,{icon:"mdi-refresh",round:"",dense:"",flat:"",color:"tertiary",class:"no-shadow",onClick:i.filtrar},null,8,["onClick"])])]),_:1})]),_:1})])]),_:1}),u("div",te,[u("div",ae,[u("span",ne,[l(" Atualizado em: "+d(a.$filters.dataHora(this.filtro.dataConsulta))+" ",1),b(o(M,{color:"primary",size:20},null,512),[[P,c.carregando]])])]),u("div",re,[o(A,{inline:"",color:"white",class:"fit no-shadow"},{default:t(()=>[o(k,{class:"text-tertiary q-title q-pb-sm"},{default:t(()=>[l(" Atrasados ")]),_:1}),o(k,null,{default:t(()=>[b(o(q,{rows:c.cockpit.envelopesAtrasados,columns:i.colunas.envelopes,class:"no-shadow text-left"},{body:t(e=>[o(I,{props:e,style:{cursor:"pointer"}},{default:t(()=>[o(m,{key:"nroVenda",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(e.row.nroVenda),1)]),_:2},1032,["props","onClick"]),o(m,{key:"nroEnvelope",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(e.row.nroEnvelope),1)]),_:2},1032,["props","onClick"]),o(m,{key:"status",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(e.row.status),1)]),_:2},1032,["props","onClick"]),o(m,{key:"dataHoraPrevisto",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(a.$filters.data(e.row.dataHoraPrevisto)),1)]),_:2},1032,["props","onClick"]),o(m,{key:"nome",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[u("div",ie,[o(g,{imagem:(c.contato[e.row.idContato]||{}).imagem,rotulo:e.row.nome,tamanho:"40",class:"q-mr-sm"},null,8,["imagem","rotulo"]),l(" "+d(e.row.nome),1)])]),_:2},1032,["props","onClick"]),o(m,{key:"telefone",props:e,onClick:s=>i.abrirTelefone(e.row)},{default:t(()=>[u("div",se,[o(v,{color:"none",dense:"",flat:"",round:""},{default:t(()=>[(p(),C(x(e.row.tipoTelefone==="WhatsApp"?"icone":"q-icon"),j(T(i.telefoneIcone(e.row.tipoTelefone))),null,16))]),_:2},1024),l(" "+d(e.row.telefone),1)])]),_:2},1032,["props","onClick"]),o(m,{key:"valor",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[u("div",le,[o(v,{color:"none",class:"q-mx-xs",dense:"",flat:"",round:"",icon:"shopping_cart"}),l(" "+d(a.$filters.numero(e.row.valor||0,2)),1)])]),_:2},1032,["props","onClick"]),o(m,{key:"imprimir",props:e},{default:t(()=>[u("div",ce,[o(v,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-ma-xs",size:"md",style:{float:"right"}},{default:t(()=>[o(S,null,{default:t(()=>[o(H,{link:"",separator:""},{default:t(()=>[(p(!0),y(z,null,B(c.configImpressaoEnvelope[e.row.idEmpresa],s=>(p(),C(E,{clickable:"",key:s.valor,onClick:O=>a.$imprimir(s.valor,e.row.idVenda)},{default:t(()=>[o(_,{avatar:""},{default:t(()=>[o(V,{name:"print"})]),_:1}),o(_,null,{default:t(()=>[o(R,null,{default:t(()=>[l(d(s.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),[[P,!c.carregando]])]),_:1})]),_:1})]),u("div",de,[o(A,{inline:"",color:"white",class:"fit no-shadow"},{default:t(()=>[o(k,{class:"text-tertiary q-title q-pb-sm"},{default:t(()=>[l(" Para hoje ")]),_:1}),o(k,null,{default:t(()=>[b(o(q,{rows:c.cockpit.envelopesHoje,columns:i.colunas.envelopes,class:"no-shadow text-left"},{body:t(e=>[o(I,{props:e,style:{cursor:"pointer"}},{default:t(()=>[o(m,{key:"nroVenda",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(e.row.nroVenda),1)]),_:2},1032,["props","onClick"]),o(m,{key:"nroEnvelope",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(e.row.nroEnvelope),1)]),_:2},1032,["props","onClick"]),o(m,{key:"status",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(e.row.status),1)]),_:2},1032,["props","onClick"]),o(m,{key:"dataHoraPrevisto",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(a.$filters.data(e.row.dataHoraPrevisto)),1)]),_:2},1032,["props","onClick"]),o(m,{key:"nome",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[u("div",me,[o(g,{imagem:(c.contato[e.row.idContato]||{}).imagem,rotulo:e.row.nome,tamanho:"40",class:"q-mr-sm"},null,8,["imagem","rotulo"]),l(" "+d(e.row.nome),1)])]),_:2},1032,["props","onClick"]),o(m,{key:"telefone",props:e,onClick:s=>i.abrirTelefone(e.row)},{default:t(()=>[u("div",ue,[o(v,{color:"none",dense:"",flat:"",round:""},{default:t(()=>[(p(),C(x(e.row.tipoTelefone==="WhatsApp"?"icone":"q-icon"),j(T(i.telefoneIcone(e.row.tipoTelefone))),null,16))]),_:2},1024),l(" "+d(e.row.telefone),1)])]),_:2},1032,["props","onClick"]),o(m,{key:"valor",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[u("div",fe,[o(v,{color:"none",class:"q-mx-xs",dense:"",flat:"",round:"",icon:"shopping_cart"}),l(" "+d(a.$filters.numero(e.row.valor||0,2)),1)])]),_:2},1032,["props","onClick"]),o(m,{key:"imprimir",props:e},{default:t(()=>[u("div",pe,[o(v,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-ma-xs",size:"md",style:{float:"right"}},{default:t(()=>[o(S,null,{default:t(()=>[o(H,{link:"",separator:""},{default:t(()=>[(p(!0),y(z,null,B(c.configImpressaoEnvelope[e.row.idEmpresa],s=>(p(),C(E,{clickable:"",key:s.valor,onClick:O=>a.$imprimir(s.valor,e.row.idVenda)},{default:t(()=>[o(_,{avatar:""},{default:t(()=>[o(V,{name:"print"})]),_:1}),o(_,null,{default:t(()=>[o(R,null,{default:t(()=>[l(d(s.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),[[P,!c.carregando]])]),_:1})]),_:1})]),u("div",he,[o(A,{inline:"",color:"white",class:"fit no-shadow"},{default:t(()=>[o(k,{class:"text-tertiary q-title q-pb-sm"},{default:t(()=>[l(" A Entregar ")]),_:1}),o(k,null,{default:t(()=>[b(o(q,{rows:c.cockpit.envelopesAEntregar,columns:i.colunas.envelopes,class:"no-shadow text-left"},{body:t(e=>[o(I,{props:e,style:{cursor:"pointer"}},{default:t(()=>[o(m,{key:"nroVenda",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(e.row.nroVenda),1)]),_:2},1032,["props","onClick"]),o(m,{key:"nroEnvelope",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(e.row.nroEnvelope),1)]),_:2},1032,["props","onClick"]),o(m,{key:"status",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(e.row.status),1)]),_:2},1032,["props","onClick"]),o(m,{key:"dataHoraPrevisto",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[l(d(a.$filters.data(e.row.dataHoraPrevisto)),1)]),_:2},1032,["props","onClick"]),o(m,{key:"nome",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[u("div",ve,[o(g,{imagem:(c.contato[e.row.idContato]||{}).imagem,rotulo:e.row.nome,tamanho:"40",class:"q-mr-sm"},null,8,["imagem","rotulo"]),l(" "+d(e.row.nome),1)])]),_:2},1032,["props","onClick"]),o(m,{key:"telefone",props:e,onClick:s=>i.abrirTelefone(e.row)},{default:t(()=>[u("div",we,[o(v,{color:"none",dense:"",flat:"",round:""},{default:t(()=>[(p(),C(x(e.row.tipoTelefone==="WhatsApp"?"icone":"q-icon"),j(T(i.telefoneIcone(e.row.tipoTelefone))),null,16))]),_:2},1024),l(" "+d(e.row.telefone),1)])]),_:2},1032,["props","onClick"]),o(m,{key:"valor",props:e,onClick:s=>i.irParaAtendimentoVenda(e.row.idContato)},{default:t(()=>[u("div",Ce,[o(v,{color:"none",class:"q-mx-xs",dense:"",flat:"",round:"",icon:"shopping_cart"}),l(" "+d(a.$filters.numero(e.row.valor||0,2)),1)])]),_:2},1032,["props","onClick"]),o(m,{key:"imprimir",props:e},{default:t(()=>[u("div",_e,[o(v,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-ma-xs",size:"md",style:{float:"right"}},{default:t(()=>[o(S,null,{default:t(()=>[o(H,{link:"",separator:""},{default:t(()=>[(p(!0),y(z,null,B(c.configImpressaoEnvelope[e.row.idEmpresa],s=>(p(),C(E,{clickable:"",key:s.valor,onClick:O=>a.$imprimir(s.valor,e.row.idVenda)},{default:t(()=>[o(_,{avatar:""},{default:t(()=>[o(V,{name:"print"})]),_:1}),o(_,null,{default:t(()=>[o(R,null,{default:t(()=>[l(d(s.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),[[P,!c.carregando]])]),_:1})]),_:1})])]),o(w,{ref:"jsonViewer"},null,512)])}var Ee=Q(Z,[["render",ge]]);export{Ee as default};
