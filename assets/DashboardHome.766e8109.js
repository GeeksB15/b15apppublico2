import{_ as N,b8 as G,b9 as M,ba as L,aw as c,aK as R,bb as J,bc as W,aJ as Q,ax as I,ay as Z,bd as K,b2 as X,r as v,o as d,p as _,f as a,w as e,Q as w,C as l,e as P,aU as Y,be as z,H as O,d as b,P as S,S as u,T as r,j as m,k as o,N as F,h as B,U as k,t as g,m as y,F as E,u as V,l as H,i as j,G as $,J as aa,bf as T,X as ea,z as U,I as ta}from"./index.2261bb35.js";import{_ as sa}from"./Grafico.55a002d4.js";import{_ as oa}from"./b15-white.58ad6516.js";import{_ as ra}from"./optidados-white.e4237b1d.js";import"./Chart.71506bb0.js";const ia={components:{UsuarioAlterarSenha:G,VendaModal:M,PromptBuscaOnline:L},computed:{config(){return c.configuracoes.valores},statusBanco(){return i=>{const t="";return!t||t==="100"?"":`${this.$filters.numero(t,2)}%`}}},data(){return{dbContato:c.contato,dbUsuario:c.usuario,sistemaPai:"",clienteSistema:{sistema:""},clienteSistemaBaixados:[],bancos:[],campos:{},dialogAlterarSenha:!1,permissoes:{},sincronismoStatus:R.status}},methods:{abrirEntidadeOnline(i){let t="AtendimentoContato";~this.$route.name.indexOf("Atendimento")&&(t=this.$route.name),this.$router.push({name:t,params:{id:i.id}})},abrirPromptBuscaOnline(){this.$refs.promptBuscaOnline.mostrar()},adicionarContato(){$utils.emitter.emit("adicionarContato")},adicionarOrcamento(){this.$refs.vendaModal.mostrar()},irParaAtendimento(){const i=localStorage.getItem("contatoSelecionado");this.$router.push({name:"Atendimento",params:{id:i||"0"}})},abrirZap(){this.sistemaPai==="optisoul"&&window.open("https://api.whatsapp.com/send?phone=5519986085252&text=Preciso%20de%20uma%20ajuda","_blank"),this.sistemaPai!=="optisoul"&&window.open("https://api.whatsapp.com/send?phone=551621116161&text=Preciso%20de%20uma%20ajuda","_blank")},async sincronizar(){J.log("BarraTopo","sincronizar()"),R.descarregarErp(),R.descarregarPlataforma()},onClickAlterarSenha(){this.dialogAlterarSenha=!0},alternarMenu(){$db.app.menuVisivel.value=!$db.app.menuVisivel.value},desconectar(){c.usuario.desconecta(),window.location.reload()},imprimir:W,async mostrarTabelas(){let i=await Q.getDatabaseNames();i.splice(i.indexOf("plataforma"),1);const t={};for(const p of i){const C=(await I(p).tables).sort((s,n)=>s.name.localeCompare(n.name));for(const s of C){const n=await s.count();t.hasOwnProperty(s.name)||(t[s.name]={}),t[s.name][p]=n}}return console.table(t),t},async restaurar(){if(await Z.sincronismoFila.count()>0){this.$q.notifyError("N\xE3o pode restaurar! H\xE1 dados no dispositivo que n\xE3o foram sincronizados.");return}for(const i of this.bancos)if(await I(i.bancoDeDados).sincronismoFila.count()>0){this.$q.notifyError(`N\xE3o pode restaurar! H\xE1 dados do banco '${i.bancoDeDados}' no dispositivo que n\xE3o foram sincronizados.`);return}try{await new Promise((i,t)=>{this.$q.dialog({title:"Tem certeza?",message:"Esta opera\xE7\xE3o vai apagar todos os dados de seu dispositivo! Para confirmar digite a palavra 'RESTAURAR'.",prompt:{model:"",isValid:p=>p.toUpperCase()==="RESTAURAR",type:"text",class:"bg-light"},cancel:{label:"CANCELAR",push:!0,color:"tertiary",flat:!0},ok:{label:"RESTAURAR",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(p=>{i()}).onCancel(()=>{t()})})}catch{return}this.$q.loading.show({message:"Restaurando"});try{const i=await Q.getDatabaseNames();for(const p of i)await I(p,"delete");const t=localStorage.getItem("dispositivoCliente");localStorage.clear(),t&&localStorage.setItem("dispositivoCliente",t),window.location.reload()}catch(i){this.$q.notifyError("Erro na opera\xE7\xE3o de restaurar",i)}finally{this.$q.loading.hide()}},async selecionaBancoDados(i){this.clienteSistema=i||{},c.cache.set("reload","1"),c.cache.set("bancoDeDados",i.bancoDeDados||""),c.cache.setJson("clienteSistema",i),this.$router.push({name:"Home"})}},props:{restricao:Boolean},async mounted(){this.clienteSistemaBaixados=JSON.parse(localStorage.getItem("clienteSistemaBaixados")),this.clienteSistema=JSON.parse(localStorage.getItem("clienteSistema"))||{},this.bancos=await K.sincronismo.le(),this.sistemaPai=X(),this.permissoes={atendimento:await c.permissao.objeto("atendimento"),admCustom:await c.permissao.objeto("admcustom"),admEnvelopes:await c.permissao.objeto("admenvelopes"),admOS:await c.permissao.objeto("admos"),funilVendas:await c.permissao.objeto("crmfunil"),item:await c.permissao.objeto("item"),importarReceita:await c.permissao.objeto("importarReceita"),caixa:await c.permissao.objeto("caixa"),cockpit:await c.permissao.objeto("cockpit"),nfe:await c.permissao.objeto("nfe")}}},na={class:"BarraTopo"},la={style:{height:"30px"}},da={key:0,src:ra,alt:"Optidados",style:{height:"30px"},class:"q-mr-md"},ca={class:"q-pa-none q-my-none items-center justify-center full-height column"};function ua(i,t,p,C,s,n){const f=v("avatar"),h=v("row"),A=v("usuario-alterar-senha"),D=v("PromptBuscaOnline"),q=v("VendaModal");return d(),_("div",na,[a(B,{class:"bg-gradiente text-primary q-px-sm"},{default:e(()=>[a(w,{onClick:n.alternarMenu,icon:"menu",flat:"",round:"",dense:"",color:"white",class:"q-mr-sm"},null,8,["onClick"]),l("div",la,[t[1]||(t[1]=l("img",{src:oa,alt:"B15",style:{height:"30px"},class:"q-mr-md"},null,-1)),s.sistemaPai==="optisoul"?(d(),_("img",da)):P("",!0)]),a(Y),a(w,{onClick:n.abrirPromptBuscaOnline,icon:"search",flat:"",round:"",dense:"",color:"white"},null,8,["onClick"]),a(w,{icon:"add",flat:"",round:"",dense:"",color:"white"},{default:e(()=>[a(z,null,{default:e(()=>[O((d(),b(S,{link:"","no-border":"",separator:""},{default:e(()=>[a(u,{onClick:n.adicionarContato,clickable:""},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"person",size:"sm"})]),_:1}),a(r,null,{default:e(()=>t[2]||(t[2]=[o("Contato")])),_:1})]),_:1},8,["onClick"]),a(u,{onClick:n.adicionarOrcamento,clickable:""},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"add_shopping_cart",size:"sm"})]),_:1}),a(r,null,{default:e(()=>t[3]||(t[3]=[o("Or\xE7amento/Venda")])),_:1})]),_:1},8,["onClick"])]),_:1})),[[F]])]),_:1})]),_:1})]),_:1}),a(B,{class:"bg-gradiente text-white q-py-sm"},{default:e(()=>[a(h,{class:"items-center q-mx-none q-px-none q-py-xs"},{default:e(()=>[l("div",ca,[a(f,{imagem:s.dbUsuario.logado.img,rotulo:s.dbUsuario.logado.nome,tamanho:"40",onClick:n.sincronizar},null,8,["imagem","rotulo","onClick"]),a(z,{class:"BarraTopo-usuarioPopover q-py-sm"},{default:e(()=>[a(S,{"no-border":""},{default:e(()=>[a(u,null,{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(f,{imagem:s.dbUsuario.logado.img,rotulo:s.dbUsuario.logado.nome,tamanho:"38"},null,8,["imagem","rotulo"])]),_:1}),a(r,{class:"q-pl-sm"},{default:e(()=>[a(k,null,{default:e(()=>[o(g(s.dbUsuario.logado.nome),1)]),_:1}),a(k,{caption:""},{default:e(()=>[o(g(s.dbUsuario.logado.cpf),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(S,{class:"q-ma-md bordered",dense:""},{default:e(()=>[a(u,{dense:"",class:"text-tertiary",clickable:""},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"storage"})]),_:1}),a(r,null,{default:e(()=>[a(k,null,{default:e(()=>[o(g(s.clienteSistema.bancoDeDados),1)]),_:1}),a(k,{caption:"",class:"text-caption"},{default:e(()=>[o(g(s.clienteSistema.sistema),1)]),_:1})]),_:1}),a(r,{side:""},{default:e(()=>[o(g(n.statusBanco(s.clienteSistema.bancoDeDados)),1)]),_:1}),a(y,null,{default:e(()=>t[4]||(t[4]=[o("Base")])),_:1}),a(z,null,{default:e(()=>[a(S,{link:""},{default:e(()=>[(d(!0),_(E,null,V(s.clienteSistemaBaixados,x=>(d(),_(E,{key:x.idClienteSistema},[O((d(),b(u,{clickable:"",class:"text-tertiary q-py-xs",onClick:Pa=>n.selecionaBancoDados(x),dense:""},{default:e(()=>[a(r,null,{default:e(()=>[a(k,null,{default:e(()=>[o(g(x.bancoDeDados),1)]),_:2},1024),a(k,{caption:"",class:"text-caption"},{default:e(()=>[o(g(x.sistema),1)]),_:2},1024)]),_:2},1024),a(r,{side:""},{default:e(()=>[o(g(n.statusBanco(x.bancoDeDados)),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[F]]),a(H)],64))),128)),O((d(),b(u,{to:{name:"AutenticacaoBancos",params:{operacao:"selecionar"}},class:"text-tertiary",clickable:"",dense:""},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"settings"})]),_:1}),a(r,null,{default:e(()=>[a(k,null,{default:e(()=>t[5]||(t[5]=[o("Selecionar bases")])),_:1})]),_:1})]),_:1})),[[F]])]),_:1})]),_:1})]),_:1}),a(u,{onClick:n.mostrarTabelas,dense:"",class:"text-tertiary"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"data_usage"})]),_:1}),a(r,null,{default:e(()=>t[6]||(t[6]=[o("0 gb")])),_:1}),a(y,null,{default:e(()=>t[7]||(t[7]=[o("Espa\xE7o")])),_:1})]),_:1},8,["onClick"]),a(u,{to:{name:"PainelSincronismo"},dense:"",class:"text-tertiary",clickable:""},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"swap_calls"})]),_:1}),a(r,null,{default:e(()=>[o(g("Fila enviar: "+String(s.sincronismoStatus.tamanhoFila)),1)]),_:1}),a(y,null,{default:e(()=>t[8]||(t[8]=[o("Fila de sincrinismo para enviar")])),_:1})]),_:1})]),_:1}),O((d(),b(S,null,{default:e(()=>[a(u,{onClick:n.abrirZap,clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"contact_support"})]),_:1}),a(r,null,{default:e(()=>t[9]||(t[9]=[o("Ajuda")])),_:1})]),_:1},8,["onClick"]),p.restricao?P("",!0):(d(),b(u,{key:0,to:{name:"Configuracoes"},clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"settings"})]),_:1}),a(r,null,{default:e(()=>t[10]||(t[10]=[o("Configura\xE7\xF5es")])),_:1})]),_:1})),a(u,{onClick:n.restaurar,clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"warning"})]),_:1}),a(r,null,{default:e(()=>t[11]||(t[11]=[o("Restaurar e sair")])),_:1})]),_:1},8,["onClick"]),a(u,{onClick:n.onClickAlterarSenha,clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"mdi-lock-open-outline"})]),_:1}),a(r,null,{default:e(()=>t[12]||(t[12]=[o("Alterar senha")])),_:1})]),_:1},8,["onClick"]),!!s.dbUsuario.logado.administrador&&[1,2].includes(s.dbUsuario.logado.grupoInterno)?(d(),b(u,{key:1,to:{name:"CriarBanco"},clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"mdi-database-plus"})]),_:1}),a(r,null,{default:e(()=>t[13]||(t[13]=[o("Criar banco")])),_:1})]),_:1})):P("",!0),s.sistemaPai==="b15"?(d(),b(u,{key:2,to:{name:"FaturaB15"},clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"attach_money"})]),_:1}),a(r,null,{default:e(()=>t[14]||(t[14]=[o("Fatura B-15")])),_:1})]),_:1})):P("",!0),s.sistemaPai==="optisoul"?(d(),b(u,{key:3,to:{name:"FaturaB15Optidados"},clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"attach_money"})]),_:1}),a(r,null,{default:e(()=>t[15]||(t[15]=[o("Fatura B-15 Optidados")])),_:1})]),_:1})):P("",!0),a(u,{onClick:n.desconectar,clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(m,{name:"exit_to_app"})]),_:1}),a(r,null,{default:e(()=>t[16]||(t[16]=[o("Sair")])),_:1})]),_:1},8,["onClick"])]),_:1})),[[F]])]),_:1})]),a(j,null,{default:e(()=>[o(g(s.dbUsuario.logado.nome),1)]),_:1})]),_:1})]),_:1}),a(A,{modelValue:s.dialogAlterarSenha,"onUpdate:modelValue":t[0]||(t[0]=x=>s.dialogAlterarSenha=x)},null,8,["modelValue"]),a(D,{ref:"promptBuscaOnline",onSelecionar:n.abrirEntidadeOnline},null,8,["onSelecionar"]),a(q,{ref:"vendaModal"},null,512)])}var ma=N(ia,[["render",ua]]);const pa={components:{Grafico:sa,BarraTopoDashboardHome:ma},computed:{},data(){return{links:{},jsonGrupos:[{sistema:"",titulo:"Grupo 1",itens:[{descricao:"Item 1",imagem:"https://cdn.quasar.dev/img/mountains.jpg",link:"/producoes"},{descricao:"Item 2",imagem:"https://cdn.quasar.dev/img/mountains.jpg",link:"http://www.google.com"},{descricao:"Image avatar",imagem:"https://cdn.quasar.dev/img/mountains.jpg",link:"#"},{descricao:"Image avatar",imagem:"https://cdn.quasar.dev/img/mountains.jpg",link:"#"},{descricao:"Image avatar",imagem:"https://cdn.quasar.dev/img/mountains.jpg",link:"#"}]},{titulo:"Grupo 2",itens:[{descricao:"Image avatar",imagem:"https://cdn.quasar.dev/img/mountains.jpg",link:"#"},{descricao:"Image avatar",imagem:"https://cdn.quasar.dev/img/mountains.jpg",link:"#"},{descricao:"Item 3",imagem:"https://cdn.quasar.dev/img/mountains.jpg",link:"#"},{descricao:"Item 4",imagem:"https://cdn.quasar.dev/img/mountains.jpg",link:"#"},{descricao:"Image avatar",imagem:"https://cdn.quasar.dev/img/mountains.jpg",link:"#"}]}],graficoFluxo:{labels:["01","04","05","06","07","08","11","12","13","14","15","18","19","20","21","22","25","26","27","28","29"],datasets:[{label:"Venda",backgroundColor:"rgba(33, 186, 69, 0.5)",borderColor:"rgb(33, 186, 69)",borderWidth:1,data:[50,35,75,60,50,35,75,60,50,35,75,60,50,35,75,60,50,35,75,60,50]},{label:"Or\xE7amento",borderColor:"rgba(0, 0, 0, 0.15)",borderWidth:1,data:[0,22,0,15,0,0,0,50,0,0,0,0,0,0,0,18,0,0,0,0,0]},{label:"Perdida",backgroundColor:"rgba(219, 40, 40, 0.5)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[0,0,12,15,0,0,0,0,10,0,0,0,0,0,0,0,5,0,0,0,0]}]},graficoOpcoesFluxo:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]},legend:{position:"top"}}}},methods:{cadastrarProduto(){console.log("cadastrar produto"),window.location="/item"},cadastrarCliente(){console.log("cadastrar cliente"),window.location="/contatos"},fazerVenda(){console.log("fazer venda"),window.location="/vendas"},gerenciarFinancas(){console.log("gerenciar financas"),window.location="/plataforma15/57"},navegarPara(i){console.log("navegar para"),window.location=i},async buscarGruposELinks(){const i=(await $utils.geeksApi({ret:{funcao:"099420F9-82D6-4E1B-BEFB-8BA1697B0710",filtros:{},limit:50}})).data.ret;let t=[],p={};i.data.forEach(C=>{t.push(C.grupo);const s=C.grupo;let n=[];n=i.data.filter(function(f){return f.grupo.indexOf(s)!==-1}),p=JSON.parse(`{"${s}": { "grupo": "${s}", "itens": []}}`),n.forEach(f=>{let h={descricao:f.descricao,imagem:f.imagemB64,link:f.link};p[s].itens.push(h)}),this.links=Object.assign(this.links,p)}),console.log("links",this.links)}},mounted(){this.buscarGruposELinks()}},ga={id:"DashboardHome"},fa={class:"col-12 q-mb-md"},ba={class:"q-pr-sm"},_a={class:"q-pr-sm"},ha={class:"q-pr-sm"},xa={class:"q-pr-sm"},ka={class:"col-12 q-mb-xl"},va=["src"],wa={class:"col-12 q-mb-xl"},ya={class:"text-right"},Ca={class:"row"},qa={class:"col-12"},Sa={class:"text-right"},Ba={class:"row"};function Da(i,t,p,C,s,n){const f=v("BarraTopoDashboardHome"),h=v("row"),A=v("grafico");return d(),_("div",ga,[a($,{class:"bg-gradiente text-white"},{default:e(()=>[a(f)]),_:1}),a(ta,null,{default:e(()=>[a(aa,{class:"u-container"},{default:e(()=>[a(h,{class:"q-pa-md"},{default:e(()=>[l("div",fa,[t[0]||(t[0]=l("h1",{class:"text-subtitle1 text-weight-bold q-mb-md"},"O que deseja fazer?",-1)),a(T,{style:{height:"120px","max-width":"100%"}},{default:e(()=>[a(h,{class:"no-wrap"},{default:e(()=>[l("div",ba,[a(w,{icon:"extension",label:"Cadastrar Produtos",flat:"",stack:"",unelevated:"",color:"tertiary",size:"md",class:"custom-button text-h6 bg-white",onClick:n.cadastrarProduto},null,8,["onClick"])]),l("div",_a,[a(w,{icon:"person_add",label:"Cadastrar Cliente",flat:"",stack:"",unelevated:"",color:"tertiary",size:"md",class:"custom-button text-h6 bg-white",onClick:n.cadastrarCliente},null,8,["onClick"])]),l("div",ha,[a(w,{icon:"shopping_cart",label:"Fazer uma Venda",flat:"",stack:"",unelevated:"",color:"tertiary",size:"md",class:"custom-button text-h6 bg-white",onClick:n.fazerVenda},null,8,["onClick"])]),l("div",xa,[a(w,{icon:"attach_money",label:"Gerenciar Finan\xE7as",flat:"",stack:"",unelevated:"",color:"tertiary",size:"md",class:"custom-button text-h6 bg-white",onClick:n.gerenciarFinancas},null,8,["onClick"])])]),_:1})]),_:1})]),l("div",ka,[t[1]||(t[1]=l("h2",{class:"text-subtitle1 text-weight-bold q-mb-md"},"Veja como \xE9 f\xE1cil!",-1)),a(T,{class:"bg-white q-py-sm q-px-md rounded-borders",style:{height:"380px","max-height":"400px","max-width":"100%"}},{default:e(()=>[a(h,{class:"no-wrap"},{default:e(()=>[(d(!0),_(E,null,V(s.links,D=>(d(),_("div",{key:D,class:"q-pr-sm"},[a(k,{header:"",class:"q-px-none text-subtitle1 text-weight-medium"},{default:e(()=>[o(g(D.grupo),1)]),_:2},1024),a(S,{bordered:"",style:{width:"280px",height:"300px","overflow-y":"auto"},class:"glassEffect rounded-borders"},{default:e(()=>[(d(!0),_(E,null,V(D.itens,q=>(d(),_("div",{key:q,class:"bg-white itemsHover"},[O((d(),b(u,{clickable:"",onClick:x=>n.navegarPara(q.link)},{default:e(()=>[a(r,null,{default:e(()=>[o(g(q.descricao),1)]),_:2},1024),a(r,{avatar:""},{default:e(()=>[l("img",{src:q.imagem,height:"30"},null,8,va)]),_:2},1024)]),_:2},1032,["onClick"])),[[ea]]),a(H)]))),128))]),_:2},1024)]))),128))]),_:1})]),_:1})]),l("div",wa,[t[8]||(t[8]=l("h2",{class:"text-subtitle1 text-weight-bold q-mb-md"},"Faturamento do ano",-1)),a(U,{class:"no-shadow q-px-md q-pb-md"},{default:e(()=>[a(B,{class:"q-px-none"},{default:e(()=>[a(m,{name:"shopping_cart",size:"24px",class:"text-tertiary"}),a(j,{class:"text-tertiary"},{default:e(()=>t[2]||(t[2]=[o(" Faturamento ")])),_:1})]),_:1}),t[7]||(t[7]=l("div",{class:"progress full-width q-mt-xs"},[l("div",{class:"progress-bar progress-bar-animated progress-bar-striped bg-green-10",style:{width:"50%"}}),l("div",{class:"progress-bar progress-bar-animated progress-bar-striped bg-green-3",style:{width:"50%"}})],-1)),a(B,{color:"transparent",class:"minh30 text-dark q-px-none"},{default:e(()=>[a(j,{class:"text-body1 text-weight-bold q-px-none"},{default:e(()=>[t[4]||(t[4]=o(" 999.999,99 ")),a(y,null,{default:e(()=>t[3]||(t[3]=[o(" Recebido ")])),_:1})]),_:1}),l("small",ya,[t[6]||(t[6]=o(" 999.999,99 ")),a(y,null,{default:e(()=>t[5]||(t[5]=[o(" Receber ")])),_:1})])]),_:1}),l("div",Ca,[a(A,{class:"col",type:"bar",data:s.graficoFluxo,options:s.graficoOpcoesFluxo},null,8,["data","options"])])]),_:1})]),l("div",qa,[t[15]||(t[15]=l("h2",{class:"text-subtitle1 text-weight-bold q-mb-md"},"Finan\xE7as em dia",-1)),a(U,{class:"no-shadow q-px-md q-pb-md"},{default:e(()=>[a(B,{class:"q-px-none"},{default:e(()=>[a(m,{name:"attach_money",size:"24px",class:"text-tertiary"}),a(j,{class:"text-tertiary"},{default:e(()=>t[9]||(t[9]=[o(" Finan\xE7as ")])),_:1})]),_:1}),t[14]||(t[14]=l("div",{class:"progress full-width q-mt-xs"},[l("div",{class:"progress-bar progress-bar-animated progress-bar-striped bg-green-10",style:{width:"50%"}}),l("div",{class:"progress-bar progress-bar-animated progress-bar-striped bg-green-3",style:{width:"50%"}})],-1)),a(B,{color:"transparent",class:"minh30 text-dark q-px-none"},{default:e(()=>[a(j,{class:"text-body1 text-weight-bold q-px-none"},{default:e(()=>[t[11]||(t[11]=o(" 999.999,99 ")),a(y,null,{default:e(()=>t[10]||(t[10]=[o(" Recebido ")])),_:1})]),_:1}),l("small",Sa,[t[13]||(t[13]=o(" 999.999,99 ")),a(y,null,{default:e(()=>t[12]||(t[12]=[o(" Receber ")])),_:1})])]),_:1}),l("div",Ba,[a(A,{class:"col",type:"bar",data:s.graficoFluxo,options:s.graficoOpcoesFluxo},null,8,["data","options"])])]),_:1})])]),_:1})]),_:1})]),_:1})])}var Ra=N(pa,[["render",Da]]);export{Ra as default};
