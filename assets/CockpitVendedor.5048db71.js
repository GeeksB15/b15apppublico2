import{_ as O,o as w,p as A,f as o,bL as Y,C as a,L as b,B as $,e as y,$ as J,r as P,w as i,au as L,q as G,j as R,S as I,ax as B,b9 as q,T as M,U as W,W as K,d as S,Q as x,bg as X,H as p,k as l,N as Z,z as k,t as d,b5 as h,aR as ee,v as T,O as g,m as V,b8 as E,d6 as N,d7 as C,dM as z,F as H}from"./index.edbe5130.js";import{I as te}from"./Icone.a193d4fa.js";import{o as oe}from"./open-url.f377895c.js";import{J as ie}from"./JsonViewer.0b3c3e25.js";const re={name:"Gauge",data(){return{load:!1,width:300,height:150,widthBefore:210,heightBefore:105}},props:{target:{default:0,type:Number},current:{default:0,type:Number},dg1:{default:"#c0392b",type:String},dg2:{default:"#f1c40f",type:String},dg3:{default:"#1abc9c",type:String},color:{default:"#f2f2f2",type:String},colorCenter:{default:"#fff",type:String}},methods:{scale(){this.width=Number(window.getComputedStyle(this.$refs.gaugeContent).width.replace("px","")),this.height=this.width/2,this.widthBefore=this.width-this.width*(30/100),this.heightBefore=this.height-this.height*(30/100),this.angle(this.current,this.target)},angle(t,r){if(this.$refs.gaugeCircleMask){const u=Number(t),e=Number(r);let s=0;u===0||e===0?s=0:u>e||u===e?s=180:u<e&&(s=u*180/e),this.$refs.gaugeCircleMask.style.transform=`rotate(${s}deg)`,this.$refs.gaugeCircleMask.style["-webkit-transform"]=`rotate(${s}deg)`,this.$refs.gaugeCircleMask.style["-moz-transform"]=`rotate(${s}deg)`}}},mounted(){this.scale(),setTimeout(()=>{this.load=!0},260)},watch:{current:{handler(t){this.angle(t,this.target)},immediate:!0},target:{handler(t){this.angle(this.current,t)},immediate:!0}}},ae={ref:"gaugeContent",class:"gaugeContent"};function ne(t,r,c,u,e,s){return w(),A("div",ae,[o(Y,{onResize:s.scale},null,8,["onResize"]),a("div",{class:"gaugeMask",style:b(`width:${e.width}px; height:${e.height}px;`)},[a("div",{class:"gaugeCircle",style:b(`width:${e.width}px; height:${e.height}px; background:linear-gradient(to right, ${c.dg1} 0%, ${c.dg2} 50%, ${c.dg3} 100%);`)},[a("div",{class:"gaugeCircle-before",style:b(`width:${e.widthBefore}px; height:${e.heightBefore}px; margin-left:-${e.heightBefore}px; background: ${c.colorCenter};`)},[a("div",{class:"gaugeContentText",style:b(`width:${e.widthBefore}px; height:${e.heightBefore}px; margin-left:-${e.heightBefore}px; background: ${c.colorCenter};`)},[$(t.$slots,"default",{},void 0,!0)],4)],4)],4),a("div",{ref:"gaugeCircleMask",class:"gaugeCircleMask",style:b(`width:${e.width}px; height:${e.width}px;`)},[e.load?(w(),A("div",{key:0,class:"gaugeCircleMask-before",style:b(`width: ${e.width}px; height: ${e.height}px; background:${c.color};`)},null,4)):y("",!0)],4)],4)],512)}var se=O(re,[["render",ne],["__scopeId","data-v-69a1f783"]]);const le={components:{Avatar:J,Icone:te,JsonViewer:ie,Gauge:se},computed:{faturamentoProgressBar(){let t,r,c,u,e,s={};return r=this.cockpit.faturamento.periodo||0,c=this.cockpit.faturamento.hoje||0,u=this.cockpit.faturamento.projecao||0,t=$utils.arredondar(u),e=$utils.arredondar((r-c)*100/t),s.periodo="width:"+e+"%",e=$utils.arredondar(c*100/t),s.hoje="width:"+e+"%",e=$utils.arredondar((u-r)*100/t),s.projecao="width:"+e+"%",s},colunas(){return{aniversariantes:[{name:"imagem",label:"",field:"imagem",align:"left"},{name:"nome",label:"Nome",field:"nome",sortable:!0,align:"left"},{name:"telefone",label:"Telefone",field:"telefone",align:"left"},{name:"aniversario",label:"Data",field:"aniversario",align:"left"}],posVenda:[{name:"imagem",label:"",field:"imagem",align:"left"},{name:"nome",label:"Cliente",field:"nome",sortable:!0,align:"left"},{name:"telefone",label:"Telefone",field:"telefone",align:"left"},{name:"nroVenda",label:"Venda",field:"numero",align:"left"},...this.sistemaPai==="optisoul"?[{name:"nroEnvelope",label:"Envelope",field:"numero",align:"left"}]:[],{name:"valor",label:"Valor",field:"valor",align:"left"}]}}},data(){return{sistemaPai:"",metasPermissao:!1,carregando:!0,cockpit:{faturamento:{periodo:0,hoje:0,projecao:0},ticketMedio:{ticketMedioPeriodo:0,ticketMedioPeriodoAnoAnterior:0,percentualTicketPeriodoRelAnterior:0,ticketMedioYeartoDate:0,ticketMedioYeartoDateAnoAnterior:0,percentualTicketMedioYeartoDateRelAnterior:0,maiorVendaPeriodo:0,maiorVendaPeriodoNumeroFatura:0,maiorVendaPeriodoNomeCliente:"",maiorVendaHistoria:0},conversao:{conversoesHoje:0,atendimentosHoje:0,conversoesPeriodo:0,atendimentosPeriodo:0},pendencias:{orcamentos:0,envelopesAtrasados:0,envelopesHoje:0,envelopesAEntregar:0,tarefas:0},parametros:{periodoIni:0,periodoFim:0,periodoIniAnoAnterior:0,periodoFimAnoAnterior:0,ytDDia1:0,ytDHoje:0,ytDAnoAnteriorDia1:0,ytDAnoAnteriorHoje:0},posVenda:[],aniversariantes:[],metas:[]},contato:{},empresas:[],nomesEmpresasSelecionadas:[],filtro:{codigoClienteSistema:"",codigoContatoUsuario:"",empresas:[],periodo:{ini:"",fim:""}}}},props:{usuario:Object},methods:{irParaCockpitVendas(){this.$router.push({name:"CockpitVendas",params:{id:this.$route.params.id,periodo:{ini:this.cockpit.pendencias.orcamentosPeriodoIni,fim:this.cockpit.pendencias.orcamentosPeriodoFim}}})},irParaCockpitEnvelopes(){this.$router.push({name:"CockpitEnvelopes",params:{id:this.$route.params.id,filtroT:JSON.stringify(this.filtro)}})},irParaAtendimentoContato(t){this.$router.push({name:"AtendimentoContato",params:{id:t}})},irParaAtendimentoVenda(t){this.$router.push({name:"AtendimentoVenda",params:{id:t}})},abrirURL:oe,async abrirTelefone(t){var u,e,s,v,D,m;if(!(t!=null&&t.telefone))return;let r;t.aniversario&&(r=await $db.configuracoes.le({nome:"cockpit.msg.aniversario"}),r=r.length?r[0].valor:`Parab\xE9ns, ${t.apelido}`,r=r.replace("[Nome]",t.nome),r=r.replace("[Apelido]",t.apelido),r=r.replace("[PrimeiroNome]",(s=(e=(u=t.nome)==null?void 0:u.split(" "))==null?void 0:e[0])!=null?s:""),r=r.replace("[PrimeiroApelido]",(m=(D=(v=t.apelido)==null?void 0:v.split(" "))==null?void 0:D[0])!=null?m:""));const c=t.tipoTelefone==="WhatsApp"?"https://api.whatsapp.com/send?"+(t.aniversario?`text=${r}`:"")+"&phone=":"tel:+";this.abrirURL(c+await $utils.formatarTelefone(t))},telefoneIcone(t){return{Celular:{color:"dark",name:"phone_iphone",size:"18px"},Comercial:{color:"dark",name:"phone",size:"18px"},Fixo:{color:"dark",name:"phone",size:"18px"},Principal:{color:"orange",name:"star",size:"18px"},WhatsApp:{cor:"whatsapp",nome:"whatsapp",tamanho:18}}[t]||{color:"dark",name:"phone",size:"18px"}},async obterContatos(t){let r={};for(const c of t)if(c.idContato&&!r[c.idContato]){const u=await $erp().contato.get(c.idContato);u&&u.id&&(r[c.idContato]={imagem:u.imagem||""})}this.contato=r},async obterConsultaRecente(){await this.criarObjStoreIDB();const t=String(this.codigoClienteSistema)+"_"+String(this.codigoContatoUsuario)+"/vendedor";let r=await this.obterObjIDb(t);if(r){this.filtro={codigoClienteSistema:this.codigoClienteSistema,codigoContatoUsuario:this.codigoContatoUsuario,empresas:r.empresas,dataConsulta:new Date(r.dataConsulta),periodo:r.periodo},this.nomesEmpresasSelecionadas=[];for(const u of this.filtro.empresas){const e=this.empresas.find(s=>s.codigoContato===u);e&&this.nomesEmpresasSelecionadas.push(e.nome)}const c=r.dados;return await this.obterContatos([...c.posVenda,...c.aniversariantes]),this.acertarDatas(c),this.cockpit=c,!0}return!1},async salvarConsultaRecente(){await this.criarObjStoreIDB(),this.salvarObjIDb({id:String(this.filtro.codigoClienteSistema)+"_"+String(this.filtro.codigoContatoUsuario)+"/vendedor",periodo:this.filtro.periodo,dataConsulta:this.filtro.dataConsulta.toISOString(),empresas:this.filtro.empresas,dados:this.cockpit})},async criarObjStoreIDB(){if(!("indexedDB"in window)){console.log("Navegador sem suporte ao IndexedDB");return}let t=indexedDB.open("cockpit",1);return t.onupgradeneeded=function(r){r.target.result.createObjectStore("consultasRecentes",{keyPath:"id"}).createIndex("id","id",{unique:!0})},new Promise((r,c)=>{t.onsuccess=function(u){r()},t.onerror=function(u){r()}})},salvarObjIDb(t){if(!("indexedDB"in window))return;let r,c,u;return r=new Promise((e,s)=>{u=e}),c=indexedDB.open("cockpit",1),c.onsuccess=function(){c=c.result.transaction(["consultasRecentes"],"readwrite").objectStore("consultasRecentes").put($utils.clonarV2(t)),c.onsuccess=function(v){u()},c.onerror=function(v){u()}},r},obterObjIDb(t){if(!("indexedDB"in window))return;let r,c,u;return r=new Promise((e,s)=>{u=e}),c=indexedDB.open("cockpit",1),c.onsuccess=function(){c=c.result.transaction(["consultasRecentes"],"readwrite").objectStore("consultasRecentes").get(t),c.onsuccess=function(v){u(v.target.result)},c.onerror=function(v){u()}},r},async filtrar(){this.carregando=!0,this.contato={},this.filtro.periodo.ini=new Date(this.filtro.periodo.ini).toISOString(),this.filtro.periodo.fim=new Date(this.filtro.periodo.fim).toISOString(),this.filtro.dataConsulta=new Date;let t=await this.$utils.geeksApi({"cockpit-vendedor":{funcao:"2E4C5B9C-11FC-49BF-A3FD-C4696ABC4879",codigoClienteSistema:this.filtro.codigoClienteSistema,codigoContatoUsuario:this.filtro.codigoContatoUsuario,codigoUsuario:$db.usuario.logado.codigoUsuario,empresas:$utils.clonarV2(this.filtro.empresas).map(r=>r.codigoContato),periodo:this.filtro.periodo}});t=t.data["cockpit-vendedor"],await this.obterContatos([...t.posVenda,...t.aniversariantes]),this.acertarDatas(t),this.cockpit=t,this.salvarConsultaRecente(),this.carregando=!1},acertarDatas(t){const r=new Date(new Date().setHours(0,0,0,0)).toISOString().replace(/\d{4}-\d{2}-\d{2}/g,"");t.parametros.periodoIni=(t.parametros.periodoIni||"").replace(/T.+$/g,r),t.parametros.periodoFim=(t.parametros.periodoFim||"").replace(/T.+$/g,r),t.parametros.periodoIniAnoAnterior=(t.parametros.periodoIniAnoAnterior||"").replace(/T.+$/g,r),t.parametros.periodoFimAnoAnterior=(t.parametros.periodoFimAnoAnterior||"").replace(/T.+$/g,r),t.parametros.ytDDia1=(t.parametros.ytDDia1||"").replace(/T.+$/g,r),t.parametros.ytDHoje=(t.parametros.ytDHoje||"").replace(/T.+$/g,r),t.parametros.ytDAnoAnteriorDia1=(t.parametros.ytDAnoAnteriorDia1||"").replace(/T.+$/g,r),t.parametros.ytDAnoAnteriorHoje=(t.parametros.ytDAnoAnteriorHoje||"").replace(/T.+$/g,r)},async atualizar(t=!0){try{let r,c,u;u=(await $erp().contato.get(this.usuario.id)||{}).codigoContato,r=JSON.parse(localStorage.getItem("clienteSistema"))||{},c=r.codigoClienteSistema,this.codigoClienteSistema=c,this.codigoContatoUsuario=u;const v=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data.map(f=>f.id);let D=(await $erp().empresa.toArray()).filter(f=>~v.indexOf(f.idContato));this.empresas=D.map(f=>({codigoContato:f.codigoContato,nome:f!=null&&f.sigla?f==null?void 0:f.sigla:f.apelido+" - "+f.numeroDocumentoNacional,apelido:f.apelido,numeroDocumentoNacional:f.numeroDocumentoNacional}));let m,j;if(m=new Date(new Date(new Date().setDate(1)).setHours(0,0,0,0)),j=new Date(new Date(new Date(m).setMonth(m.getMonth()+1)).setDate(0)),this.nomesEmpresasSelecionadas=[],this.filtro={codigoClienteSistema:this.codigoClienteSistema,codigoContatoUsuario:this.codigoContatoUsuario,empresas:[],dataConsulta:new Date,periodo:{ini:m,fim:j}},t&&await this.obterConsultaRecente()&&(this.carregando=!1,!(new Date-new Date(this.filtro.dataConsulta)>5*6e4)))return;this.filtrar()}catch(r){$q.notifyError("N\xE3o foi poss\xEDvel carregar os dados do cockpit",r)}},async mostrarJsonViewer(){await this.$refs.jsonViewer.show(this)}},watch:{"$route.params.id"(){!~this.$route.name.indexOf("CockpitVendedor")||this.atualizar()},"filtro.periodo.ini"(){console.log("filtro.periodo.ini",this.filtro.periodo.ini)}},async created(){this.sistemaPai=$utils.sistemaPai(),this.metasPermissao=await $db.permissao.objeto("configuracoes/metas"),this.atualizar()}},ce={id:"cockipitvendedor"},de={class:"col-12 col-md-6"},ue={class:"col"},me=a("div",{class:"col-auto",style:{"align-items":"center",display:"flex"}},[a("label",null,"at\xE9")],-1),fe={class:"col"},pe={class:"row q-col-gutter-md q-mb-md"},he={class:"col-12 flex items-center justify-between"},ge={style:{"font-size":"70%"}},ve=a("div",null,null,-1),_e={class:"progress"},we={class:"row justify-between"},ke={class:"text-left text-blue-8 q-mt-sm q-pb-none",style:{"line-height":"22px"}},Ce={class:"text-h5 text-weight-bold"},be={class:"text-center text-blue-8 q-mt-sm q-pb-none",style:{"line-height":"22px"}},xe={class:"text-h5 text-weight-bold"},ye={class:"text-right text-positive q-mt-sm q-pb-none",style:{"line-height":"22px"}},Ae={class:"text-h5 text-weight-bold"},De={key:0,class:"col-12 col-md-4"},Pe={class:"row justify-center"},Se={class:"col-11 col-sm-10 col-md-11 col-lg-10"},Ve={class:"text-h4 text-weight-bold text-center text-blue-8 q-px-none"},je={class:"text-body1 text-tertiary text-weight-regular text-center q-px-none"},Me={class:"col-6 col-md-3"},Te={class:"row justify-around items-center"},Be={class:"col"},qe={class:"col"},Re=a("br",null,null,-1),Ie=a("strong",null,"/",-1),Ee=a("br",null,null,-1),Ne=a("br",null,null,-1),ze=a("div",null,null,-1),He={class:"col-6 col-md-3"},Oe=a("br",null,null,-1),Fe={class:"col-6 col-md-3"},Ue={class:"text-tertiary"},Qe={class:"col-6 col-md-3"},Ye={class:"text-tertiary"},$e={key:1,class:"col-12"},Je={class:"row justify-around items-center"},Le={class:"col-4 col-md-auto"},Ge={class:"col-4 col-md-auto"},We={class:"col-4 col-md-auto"},Ke={class:"col-12 col-md-6"},Xe={class:"row items-center justify-between"},Ze={class:"row items-center no-wrap"},et={class:"row items-center"},tt={class:"col-12 col-md-6"},ot={class:"row items-center no-wrap"};function it(t,r,c,u,e,s){const v=P("campo"),D=P("row"),m=P("g-label"),j=P("Gauge"),f=P("avatar"),F=P("JsonViewer");return w(),A("div",ce,[o(k,{class:"q-pa-sm no-shadow"},{default:i(()=>[o(D,{class:"q-col-gutter-md items-center"},{default:i(()=>[a("div",de,[o(L,{modelValue:e.filtro.empresas,"onUpdate:modelValue":[r[0]||(r[0]=n=>e.filtro.empresas=n),s.filtrar],options:e.empresas,"option-value":"codigoContato",label:"Filtre por Empresa","option-label":"nome",dense:"",outlined:"","use-chips":"",multiple:""},G({prepend:i(()=>[o(R,{name:"mdi-filter"})]),_:2},[e.empresas.length>1?{name:"option",fn:i(({itemProps:n,opt:_,selected:U,toggleOption:Q})=>[o(I,B(q(n)),{default:i(()=>[o(M,null,{default:i(()=>[o(W,{innerHTML:_.nome},null,8,["innerHTML"])]),_:2},1024),o(M,{side:""},{default:i(()=>[o(K,{"model-value":U,"onUpdate:modelValue":rt=>Q(_)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1040)]),key:"0"}:void 0]),1032,["modelValue","onUpdate:modelValue","options"])]),a("div",ue,[o(v,{modelValue:e.filtro.periodo.ini,"onUpdate:modelValue":r[1]||(r[1]=n=>e.filtro.periodo.ini=n),tipo:"data",onBlur:s.filtrar,outlined:""},null,8,["modelValue","onBlur"])]),me,a("div",fe,[o(v,{modelValue:e.filtro.periodo.fim,"onUpdate:modelValue":r[2]||(r[2]=n=>e.filtro.periodo.fim=n),tipo:"data",onBlur:s.filtrar,outlined:""},null,8,["modelValue","onBlur"])]),a("div",null,[t.$db.usuario.desenvolvedor()?(w(),S(x,{key:0,icon:"more_vert",round:"",flat:""},{default:i(()=>[o(X,null,{default:i(()=>[p((w(),S(I,{clickable:"",onClick:r[3]||(r[3]=n=>s.mostrarJsonViewer())},{default:i(()=>[o(M,{avatar:""},{default:i(()=>[o(R,{name:"mdi-file-replace",size:"sm"})]),_:1}),o(M,null,{default:i(()=>[l("Ver Objeto")]),_:1})]),_:1})),[[Z]])]),_:1})]),_:1})):y("",!0)])]),_:1})]),_:1}),a("div",pe,[a("div",he,[a("span",ge,[l(" Atualizado em: "+d(t.$filters.dataHora(this.filtro.dataConsulta))+" ",1),p(o(ee,{color:"primary",size:20},null,512),[[h,e.carregando]])]),o(x,{onClick:r[4]||(r[4]=n=>s.atualizar(!1)),round:"",flat:"",color:"primary",size:"sm",icon:"refresh"})]),a("div",{class:T(["col-12",e.metasPermissao?"col-md-2":"col-md-3"])},[o(k,{color:"white",inline:"",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[l(" Pend\xEAncias ")]),_:1}),p(a("div",null,[o(m,{onClick:s.irParaCockpitVendas,text:"h3 bold center",color:"text-negative",class:"cursor-pointer"},{default:i(()=>[l(d(t.$filters.numero(e.cockpit.pendencias.orcamentos)),1)]),_:1},8,["onClick"]),o(m,{text:"center"},{default:i(()=>[l("Or\xE7amentos")]),_:1})],512),[[h,!e.carregando]]),ve]),_:1})]),_:1})],2),a("div",{class:T(["col-12",e.metasPermissao?"col-md-6":"col-md-9"])},[o(k,{color:"white",inline:"",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[l(" Faturamento ")]),_:1}),p(a("div",null,[a("div",_e,[a("div",{class:"progress-bar bg-primary",style:b(s.faturamentoProgressBar.periodo)},null,4),a("div",{class:"progress-bar progress-bar-striped bg-info",style:b(s.faturamentoProgressBar.hoje)},null,4),a("div",{class:"progress-bar progress-bar-animated progress-bar-striped bg-success",style:b(s.faturamentoProgressBar.projecao)},null,4)]),a("div",we,[a("div",ke,[a("span",Ce," R$ "+d(t.$filters.numero(e.cockpit.faturamento.periodo,2)),1),o(m,{text:"body1 regular",color:"text-tertiary"},{default:i(()=>[l("Per\xEDodo")]),_:1})]),a("div",be,[a("span",xe," R$ "+d(t.$filters.numero(e.cockpit.faturamento.hoje,2)),1),o(m,{text:"body1 regular",color:"text-tertiary"},{default:i(()=>[l("sendo Hoje")]),_:1})]),a("div",ye,[a("span",Ae," R$ "+d(t.$filters.numero(e.cockpit.faturamento.projecao,2)),1),o(m,{text:"body1 regular",color:"text-tertiary"},{default:i(()=>[l("Proje\xE7\xE3o Final")]),_:1})])])],512),[[h,!e.carregando]])]),_:1})]),_:1})],2),e.metasPermissao?(w(),A("div",De,[o(k,{color:"white",inline:"",class:"fit no-shadow"},{default:i(()=>[o(g,null,{default:i(()=>[o(m,{text:"h6",style:{position:"absolute",top:"15px",left:"16px"}},{default:i(()=>[l("Meta")]),_:1}),a("div",Pe,[a("div",Se,[o(j,{current:e.cockpit.metas.metaFaturamentoPeriodo,target:e.cockpit.metas.metaTotal,dg1:"#ef5350",dg2:"#ffb74d",dg3:"#8bc34a",color:"#f2f2f2",colorCenter:"#ffffff"},{default:i(()=>[a("div",Ve,d(t.$filters.numero(e.cockpit.metas.metaPercentual,1))+"% ",1),a("div",je," R$ "+d(t.$filters.numero(e.cockpit.metas.metaTotal,2)),1)]),_:1},8,["current","target"])])])]),_:1}),o(V,{anchor:"bottom middle",self:"center middle"},{default:i(()=>[l(" R$ "+d(t.$filters.numero(e.cockpit.faturamento.periodo,2)),1)]),_:1})]),_:1})])):y("",!0),a("div",Me,[o(k,{color:"white",inline:"",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[l(" Atendimento c/ vendas ")]),_:1}),p(a("div",Te,[a("div",Be,[o(m,{text:"h4 bold center",color:"text-blue-8"},{default:i(()=>[l(d(t.$filters.numero(e.cockpit.conversao.conversoesHoje))+"/"+d(t.$filters.numero(e.cockpit.conversao.atendimentosHoje)),1)]),_:1}),o(m,{text:"center"},{default:i(()=>[l("Hoje")]),_:1})]),a("div",qe,[o(m,{text:"h4 bold center",color:"text-blue-8"},{default:i(()=>[l(d(t.$filters.numero(e.cockpit.conversao.conversoesPeriodo))+"/"+d(t.$filters.numero(e.cockpit.conversao.atendimentosPeriodo)),1)]),_:1}),o(m,{text:"center"},{default:i(()=>[l("Per\xEDodo")]),_:1})]),o(V,{anchor:"bottom middle",self:"center middle",offset:[0,40],class:"text-center"},{default:i(()=>[l(" Quantidade de faturamento "),Re,Ie,Ee,l(" Quantidade de documentos realizados "),Ne,l(" (Vendas, Or\xE7amentos, Cancelados e Outros) ")]),_:1})],512),[[h,!e.carregando]]),ze]),_:1})]),_:1})]),a("div",He,[o(k,{color:"white",inline:"",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[l(" Maior Venda Per\xEDodo ")]),_:1}),p(o(m,{text:"h4 bold left",color:"text-blue-8"},{default:i(()=>[l(d(t.$filters.numero(e.cockpit.ticketMedio.maiorVendaPeriodo,2))+" ",1),o(x,{icon:"mdi-trophy",color:"amber-7",round:"",unelevated:"",dense:"",class:"float-right"})]),_:1},512),[[h,!e.carregando]]),p(a("small",null,[l(" Recorde Hist\xF3rico "),a("strong",null,d(t.$filters.numero(e.cockpit.ticketMedio.maiorVendaHistoria,2)),1)],512),[[h,!e.carregando]]),o(V,{anchor:"bottom middle",self:"center middle"},{default:i(()=>[l(" Fatura N\xB0. "+d(e.cockpit.ticketMedio.maiorVendaPeriodoNumeroFatura),1),Oe,l(" Cliente: "+d(e.cockpit.ticketMedio.maiorVendaPeriodoNomeCliente),1)]),_:1})]),_:1})]),_:1})]),a("div",Fe,[o(k,{color:"white",inline:"",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[l(" Ticket M\xE9dio Per\xEDodo ")]),_:1}),p(o(m,{text:"h4 bold left",color:"text-blue-8"},{default:i(()=>[l(d(t.$filters.numero(e.cockpit.ticketMedio.ticketMedioPeriodo,2))+" ",1),o(x,{icon:"mdi-bell",round:"",dense:"",unelevated:"",class:"float-right",color:e.cockpit.ticketMedio.percentualTicketMedioYeartoDateRelAnterior>=0?"positive":"negative"},null,8,["color"])]),_:1},512),[[h,!e.carregando]]),p(a("small",{class:T(e.cockpit.ticketMedio.percentualTicketPeriodoRelAnterior>=0?"text-positive":"text-negative")},[a("span",Ue,d(t.$filters.numero(e.cockpit.ticketMedio.ticketMedioPeriodoAnoAnterior,2)),1),l(" (\u0394 "+d(t.$filters.numero(e.cockpit.ticketMedio.percentualTicketPeriodoRelAnterior,2))+"%) ",1)],2),[[h,!e.carregando]]),o(V,{anchor:"bottom middle",self:"center middle"},{default:i(()=>[l(d(t.$filters.data(e.cockpit.parametros.periodoIniAnoAnterior))+" "+d(t.$filters.data(e.cockpit.parametros.periodoFimAnoAnterior))+" do ano anterior ",1)]),_:1})]),_:1})]),_:1})]),a("div",Qe,[o(k,{inline:"",color:"white",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[l(" M\xE9dio YtD ")]),_:1}),p(o(m,{text:"h4 bold left",color:"text-blue-8"},{default:i(()=>[l(d(t.$filters.numero(e.cockpit.ticketMedio.ticketMedioYeartoDate,2))+" ",1),o(x,{icon:"mdi-bell",round:"",unelevated:"",dense:"",class:"float-right",color:e.cockpit.ticketMedio.percentualTicketMedioYeartoDateRelAnterior>=0?"positive":"negative"},null,8,["color"])]),_:1},512),[[h,!e.carregando]]),p(a("small",{class:T(e.cockpit.ticketMedio.percentualTicketMedioYeartoDateRelAnterior>=0?"text-positive":"text-negative")},[a("span",Ye,d(t.$filters.numero(e.cockpit.ticketMedio.ticketMedioYeartoDateAnoAnterior,2)),1),l(" (\u0394 "+d(t.$filters.numero(e.cockpit.ticketMedio.percentualTicketMedioYeartoDateRelAnterior,2))+"%) ",1)],2),[[h,!e.carregando]]),o(V,{anchor:"bottom middle",self:"center middle"},{default:i(()=>[l(d(t.$filters.data(e.cockpit.parametros.ytDAnoAnteriorDia1))+" "+d(t.$filters.data(e.cockpit.parametros.ytDAnoAnteriorHoje))+" do ano anterior ",1)]),_:1})]),_:1})]),_:1})]),e.sistemaPai==="optisoul"?(w(),A("div",$e,[o(k,{inline:"",color:"white",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[l(" Envelopes ")]),_:1}),p(a("div",Je,[a("div",Le,[a("div",{onClick:r[5]||(r[5]=(...n)=>s.irParaCockpitEnvelopes&&s.irParaCockpitEnvelopes(...n)),class:"text-h4 text-weight-bold text-center text-negative cursor-pointer"},d(t.$filters.numero(e.cockpit.pendencias.envelopesAtrasados)),1),o(g,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[l(" Atrasados ")]),_:1})]),a("div",Ge,[a("div",{onClick:r[6]||(r[6]=(...n)=>s.irParaCockpitEnvelopes&&s.irParaCockpitEnvelopes(...n)),class:"text-h4 text-weight-bold text-center text-negative cursor-pointer"},d(t.$filters.numero(e.cockpit.pendencias.envelopesHoje)),1),o(g,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[l(" Para hoje ")]),_:1})]),a("div",We,[a("div",{onClick:r[7]||(r[7]=(...n)=>s.irParaCockpitEnvelopes&&s.irParaCockpitEnvelopes(...n)),class:"text-h4 text-weight-bold text-center text-negative cursor-pointer"},d(t.$filters.numero(e.cockpit.pendencias.envelopesAEntregar)),1),o(g,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[l(" A Entregar ")]),_:1})])],512),[[h,!e.carregando]])]),_:1})]),_:1})])):y("",!0),a("div",Ke,[o(k,{inline:"",color:"white",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[l(" P\xF3s-venda ")]),_:1}),p(o(E,{rows:e.cockpit.posVenda,columns:s.colunas.posVenda,class:"no-shadow text-left"},{body:i(n=>[o(N,{props:n,style:{cursor:"pointer"}},{default:i(()=>[o(C,{key:"imagem",props:n,onClick:_=>s.irParaAtendimentoVenda(n.row.idContato)},{default:i(()=>[a("div",Xe,[o(f,{imagem:(e.contato[n.row.idContato]||{}).imagem,rotulo:n.row.nome,tamanho:"40",class:"q-mr-sm"},null,8,["imagem","rotulo"])])]),_:2},1032,["props","onClick"]),o(C,{key:"nome",props:n,onClick:_=>s.irParaAtendimentoVenda(n.row.idContato)},{default:i(()=>[l(d(n.row.nome),1)]),_:2},1032,["props","onClick"]),o(C,{key:"telefone",props:n,onClick:_=>s.abrirTelefone({...n.row}),class:"text-no-wrap"},{default:i(()=>[a("div",Ze,[o(x,{color:"none",dense:"",flat:"",round:""},{default:i(()=>[(w(),S(z(n.row.tipoTelefone==="WhatsApp"?"icone":"q-icon"),B(q(s.telefoneIcone(n.row.tipoTelefone))),null,16))]),_:2},1024),l(" "+d(n.row.telefone),1)])]),_:2},1032,["props","onClick"]),o(C,{key:"nroVenda",props:n,onClick:_=>s.irParaAtendimentoVenda(n.row.idContato)},{default:i(()=>[n.row.nroVenda?(w(),A(H,{key:0},[l("#"+d(n.row.nroVenda),1)],64)):y("",!0)]),_:2},1032,["props","onClick"]),e.sistemaPai==="optisoul"?(w(),S(C,{key:"nroEnvelope",props:n,onClick:_=>s.irParaAtendimentoVenda(n.row.idContato)},{default:i(()=>[n.row.nroEnvelope?(w(),A(H,{key:0},[l("#"+d(n.row.nroEnvelope),1)],64)):y("",!0)]),_:2},1032,["props","onClick"])):y("",!0),o(C,{key:"valor",props:n,onClick:_=>s.irParaAtendimentoVenda(n.row.idContato)},{default:i(()=>[a("div",et,[o(x,{color:"none",class:"q-mx-xs",dense:"",flat:"",round:"",icon:"shopping_cart"}),l(" "+d(t.$filters.numero(n.row.valor||0,2)),1)])]),_:2},1032,["props","onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),[[h,!e.carregando]])]),_:1})]),_:1})]),a("div",tt,[o(k,{inline:"",color:"white",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[l(" Aniversariantes ")]),_:1}),p(o(E,{rows:e.cockpit.aniversariantes,columns:s.colunas.aniversariantes,class:"no-shadow text-left"},{body:i(n=>[o(N,{props:n,style:{cursor:"pointer"}},{default:i(()=>[o(C,{key:"imagem",props:n,onClick:_=>s.irParaAtendimentoContato(n.row.idContato)},{default:i(()=>[o(f,{imagem:(e.contato[n.row.idContato]||{}).imagem,rotulo:n.row.nome,tamanho:"40"},null,8,["imagem","rotulo"])]),_:2},1032,["props","onClick"]),o(C,{key:"nome",props:n,onClick:_=>s.irParaAtendimentoContato(n.row.idContato)},{default:i(()=>[l(d(n.row.nome),1)]),_:2},1032,["props","onClick"]),o(C,{key:"telefone",props:n,onClick:_=>s.abrirTelefone({...n.row,aniversario:!0})},{default:i(()=>[a("div",ot,[o(x,{color:"none",dense:"",flat:"",round:""},{default:i(()=>[(w(),S(z(n.row.tipoTelefone==="WhatsApp"?"icone":"q-icon"),B(q(s.telefoneIcone(n.row.tipoTelefone))),null,16))]),_:2},1024),l(" "+d(n.row.telefone),1)])]),_:2},1032,["props","onClick"]),o(C,{key:"aniversario",props:n,onClick:_=>s.irParaAtendimentoContato(n.row.idContato)},{default:i(()=>[l(d(n.row.aniversario),1)]),_:2},1032,["props","onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),[[h,!e.carregando]])]),_:1})]),_:1})])]),o(F,{ref:"jsonViewer"},null,512)])}var ct=O(le,[["render",it]]);export{ct as default};
