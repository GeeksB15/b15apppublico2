import{_ as T,$ as B,cc as F,c7 as p,aE as D,bi as E,bZ as k,cI as R,aF as L,r as _,o as m,d as w,w as r,f as t,h as V,i as z,k as g,Q as q,b6 as M,j as h,B as l,as as H,n as x,F as j,s as Z,t as v,e as A,y as G,u as K,N as P,m as U,az as X,G as J,O as W,R as Q,S as y,T as I,M as Y,I as $}from"./index.9759e0fb.js";import{C as oo}from"./Campo.46efb835.js";import{O as eo}from"./OSTrocarStatus.b384465b.js";import{M as ao}from"./ModalHistoricoStatus.6f2e687b.js";import{d as to}from"./vuedraggable.umd.84f54a00.js";const so={components:{Badge:B,Campo:oo,OSTrocarStatus:eo,ModalHistoricoStatus:ao,draggable:to},data(){return{drawer:!0,showfilters:!1,empresaOpcoes:[],empresaSelecionada:null,entregueInicio:new Date(new Date(F()).toDateString()),entregueFim:new Date(new Date(F()).toDateString()),fraseFiltro:"",listas:{Processando:[],Entregue:[]},trocarStatusDados:{},trocarStatusModal:!1,periodoOpcoes:[{label:"Hoje",value:0},{label:"Uma semana",value:7},{label:"Um m\xEAs",value:30}],prazoSelecionado:null,prazoOpcoes:[{label:"Em dia",value:"bordaVerdeOS"},{label:"Entrega para esta semana",value:"bordaAmarelaOS"},{label:"Entrega atrasada",value:"bordaVermelhaOS"}]}},methods:{async eventoEnd(){for(const s in this.listas)for(const o of this.listas[s])if(o.status!==s){p.log("AdmOS","eventoEnd De:",o.status,"Para:",s,"codigo:",o.codigoDocumento),this.trocarStatusDados={codigoContatoResponsavel:o.codigoContatoResponsavel,codigoDocumento:o.codigoDocumento,codigoUsuario:null,nomeCliente:o.nomeCliente,observacao:"",statusAtual:o.status,statusNovo:s},this.trocarStatusModal=!0;return}},async eventoConfirmarTroca(s){p.log("AdmOS","eventoConfirmaTroca",{...s}),this.$q.loading.show();try{let o;$db.usuario.logado.cpf&&(o=(await $db.contato.ler({filtros:{termoBusca:$db.usuario.logado.cpf}})).data.find(a=>{var e;return a.numeroDocumentoNacional.replace(/\D/g,"")===((e=$db.usuario.logado.cpf)==null?void 0:e.replace(/\D/g,""))})),s.cpfUsuario=o==null?void 0:o.numeroDocumentoNacional,await D.os.trocaStatusOnline(s),this.$q.notifyPositive("Status trocado com sucesso"),this.atualiza()}catch(o){this.$q.notifyError("Erro na troca de status",o)}finally{this.$q.loading.hide()}},eventoCancelarTroca(s){p.log("AdmOS","eventoCancelarTroca",s),this.atualiza()},async empresaOpcoesCarregar(){const s=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data;this.empresaOpcoes=s.map(o=>({label:o.nome,value:o.codigoContato,id:o.id}))},filtraDebounce(){E.exports.debounce(this.refazFiltro,700)()},refazFiltro(){p.log("AdmOSs","refazFiltro()",this.fraseFiltro,this.empresaSelecionada);const s=k(this.fraseFiltro.toUpperCase()).split(" ").filter(o=>o!=="");for(const o in this.listas)for(const n of this.listas[o]){const a=k(n.id.toUpperCase()+n.nomeCliente.toUpperCase()+n.nomeResponsavel.toUpperCase()+" "+String(n.numeroVenda)+"  "+String(n.numeroOS)+" ");let e=!0;for(const c of s)isNaN(Number(c))?e=e&&a.includes(c):e=e&&a.includes(" "+c+" ");this.empresaSelecionada&&(e=e&&this.empresaSelecionada.value===n.codigoEmpresa),n.mostra=e}},async atualiza(){try{const s=await D.os.leAdmOSOnline({entregueInicio:this.entregueInicio,entregueFim:this.entregueFim,empresas:this.empresaOpcoes.map(a=>a.id)});p.log("AdmOS","atualiza()",s.length),R(!s||!s.length,"N\xE3o h\xE1 ordens de servi\xE7o");let o=await D.configuracoes.le({nome:"vendas.os.status"});o=o.filter(a=>!["Processando","Entregue"].includes(a.texto));const n={Processando:[]};for(const a of E.exports.orderBy(o,"valor","asc").map(e=>e.texto))n[a]=[];n.Entregue=[];for(const a of s){let e="bordaVerdeOS",c="",f="Normal";if(a.status==="Entregue"){if(!!a.dataHoraPrevisto&&!!a.dataHoraFinalizado){const S=new Date(new Date(a.dataHoraPrevisto).toDateString()),d=(new Date(new Date(a.dataHoraFinalizado).toDateString())-S)/(1e3*60*60*24);e=d>=0?"bordaVermelhaOS":d>-7?"bordaAmarelaOS":"bordaVerdeOS",c=d>=0?"negative":d>-7?"warning":"",f=d>=0?"Atrasado":d>-7?"Aten\xE7\xE3o":"Normal"}}else if(a.dataHoraPrevisto){const S=new Date(new Date(a.dataHoraPrevisto).toDateString()),d=(new Date(new Date().toDateString())-S)/(1e3*60*60*24);e=d>=0?"bordaVermelhaOS":d>-7?"bordaAmarelaOS":"bordaVerdeOS",c=d>=0?"negative":d>-7?"warning":"",f=d>=0?"Atrasado":d>-7?"Aten\xE7\xE3o":"Normal"}const b={id:a.id,codigoCompra:a.codigoCompra||"-",codigoContatoResponsavel:a.codigoContatoResponsavel,codigoDocumento:a.codigoDocumento,codigoContato:a.codigoContato,codigoEmpresa:a.codigoEmpresa,descricaoEmpresa:a.descricaoEmpresa,descricao:a.descricao,corBorda:e,corLabel:c,txtLabel:f,dataHoraEmissao:new Date(a.dataHoraEmissao),dataHoraFinalizado:new Date(a.dataHoraFinalizado),dataHoraRetorno:new Date(a.dataHoraRetorno),dataHoraPrevisto:new Date(a.dataHoraPrevisto),mostra:!0,nomeCliente:a.nomeCliente||"-",nomeResponsavel:a.nomeResponsavel||"-",numeroVenda:a.numeroVenda?String(a.numeroVenda):"-",numeroOS:a.numeroOS?String(a.numeroOS):"-",status:a.status};n[a.status]&&n[a.status].push(b)}this.listas=n,this.refazFiltro()}catch(s){this.$q.notifyError("Erro na consulta online de oss",s)}},async irParaAtendimento(s){const o=await L().contato.where({codigoContato:s}).first()||{};o.id&&this.$router.push({name:"Atendimento",params:{id:o.id}})}},watch:{entregueInicio(){p.log("AdmOSs","entregueInicio"),this.atualiza()},entregueFim(){p.log("AdmOSs","entregueFim"),this.atualiza()}},async created(){p.log("AdmOSs","created()"),await this.empresaOpcoesCarregar(),this.atualiza()}},ro={class:"q-pa-md"},io={class:"row overflowXOS filterfalse"},lo={class:"q-pa-none"},no={key:0,class:"row"},co={class:"col-12"},uo={class:"q-pa-md"},mo={class:"row q-mt-xs"},po={class:"col-6"},go={class:"col-6 justify-end q-pr-xs",style:{display:"flex"}},fo={class:"text-subtitle1"},ho={class:"text-caption"},vo={class:"col-11"},bo={key:0,style:{background:"rgb(236, 239, 241)","border-radius":"50px","text-align":"center",display:"inline-block",width:"22px",height:"22px","line-height":"22px","margin-right":"3px"}},So={style:{background:"rgb(236, 239, 241)","border-radius":"50px","text-align":"center",display:"inline-block",width:"22px",height:"22px","line-height":"22px","margin-right":"3px"}},_o={class:"text-caption",style:{display:"inline-block","margin-right":"6px"}},wo={style:{background:"rgb(236, 239, 241)","border-radius":"50px","text-align":"center",display:"inline-block",width:"22px",height:"22px","line-height":"22px","margin-right":"3px"}},xo={class:"text-caption",style:{display:"inline-block"}},yo={class:"col-1 self-end"};function Co(s,o,n,a,e,c){const f=_("campo"),b=_("badge"),S=_("draggable"),C=_("OS-trocar-status"),d=_("modal-historico-status");return m(),w($,{class:"AdmOS",id:"AdmOS"},{default:r(()=>[t(V,{class:"bg-gradiente text-white"},{default:r(()=>[t(z,null,{default:r(()=>[g("Adm. OS")]),_:1}),t(q,{icon:"mdi-filter",round:"",dense:"",flat:"",onClick:o[0]||(o[0]=u=>e.showfilters=!e.showfilters)})]),_:1}),t(M,{modelValue:e.showfilters,"onUpdate:modelValue":o[5]||(o[5]=u=>e.showfilters=u),bordered:"",side:"right"},{default:r(()=>[t(V,{color:"white",class:"text-tertiary"},{default:r(()=>[t(h,{class:"text-h5",name:"mdi-filter"}),t(z,null,{default:r(()=>[g("Filtro Avan\xE7ado")]),_:1}),t(q,{dense:"",flat:"",icon:"close",round:"",onClick:o[1]||(o[1]=u=>e.showfilters=!e.showfilters)})]),_:1}),l("div",ro,[t(f,{modelValue:e.fraseFiltro,"onUpdate:modelValue":[o[2]||(o[2]=u=>e.fraseFiltro=u),c.filtraDebounce],rotulo:"Por cliente ou respons\xE1vel",dense:""},null,8,["modelValue","onUpdate:modelValue"]),t(H,{modelValue:e.prazoSelecionado,"onUpdate:modelValue":o[3]||(o[3]=u=>e.prazoSelecionado=u),options:e.prazoOpcoes,clearable:"",label:"Por prazo"},null,8,["modelValue","options"]),t(H,{modelValue:e.empresaSelecionada,"onUpdate:modelValue":[o[4]||(o[4]=u=>e.empresaSelecionada=u),c.refazFiltro],options:e.empresaOpcoes,clearable:"",label:"Por empresa"},null,8,["modelValue","options","onUpdate:modelValue"])])]),_:1},8,["modelValue"]),l("div",io,[(m(!0),x(j,null,Z(e.listas,(u,O)=>(m(),x("div",{key:O,class:"no-shadow col q-px-none coluna"},[l("div",lo,[t(V,{class:"no-shadow q-py-none q-px-sm text-white"},{default:r(()=>[t(z,{class:"q-py-none"},{default:r(()=>[g(v(O),1)]),_:2},1024)]),_:2},1024),O==="Entregue"?(m(),x("div",no,[l("div",co,[l("div",uo,[t(f,{modelValue:e.entregueInicio,"onUpdate:modelValue":o[6]||(o[6]=i=>e.entregueInicio=i),rotulo:"In\xEDcio",tipo:"data"},null,8,["modelValue"]),t(f,{modelValue:e.entregueFim,"onUpdate:modelValue":o[7]||(o[7]=i=>e.entregueFim=i),rotulo:"Fim",tipo:"data"},null,8,["modelValue"])])])])):A("",!0),t(S,{class:"dragAreaOS",delay:"250",list:u,group:"osGroup",draggable:".extratoOS",onEnd:c.eventoEnd,itemKey:"id"},{item:r(({element:i})=>[i.mostra&&(e.prazoSelecionado===null||e.prazoSelecionado===i.corBorda)?(m(),w(G,{key:0,class:K(["q-pa-sm q-pb-md q-my-sm q-mb-md shadow-1 extratoOS bg-white",i.corBorda])},{default:r(()=>[l("div",mo,[l("div",po,[i.corLabel?(m(),w(b,{key:0,cor:i.corLabel,escuro:"",class:"q-mx-xs",rotulo:i.txtLabel},null,8,["cor","rotulo"])):(m(),w(b,{key:1,class:"q-mx-xs",rotulo:i.txtLabel},null,8,["rotulo"]))]),l("div",go,[t(b,{cor:"grey-1",class:"q-mx-sm",icone:"shopping_cart",rotulo:i.numeroVenda},null,8,["rotulo"]),t(b,{cor:"grey-8",escuro:"",icone:"assignment_turned_in",rotulo:i.numeroOS},null,8,["rotulo"])])]),t(P,{class:"q-pa-xs"},{default:r(()=>[l("div",fo,v(i.nomeCliente),1),l("span",ho,v(i.descricao),1)]),_:2},1024),t(P,{class:"row q-pa-xs q-pb-none q-mt-md"},{default:r(()=>[l("div",vo,[i.descricaoEmpresa?(m(),x("div",bo,[t(h,{name:"business",color:"grey-7",size:"14px"}),t(U,null,{default:r(()=>[g(v(i.descricaoEmpresa),1)]),_:2},1024)])):A("",!0),l("div",So,[t(h,{name:"person",color:"grey-7",size:"14px"})]),l("div",_o,v(i.nomeResponsavel),1),l("div",wo,[t(h,{name:"calendar_today",color:"grey-7",size:"14px"})]),l("div",xo,[g(v(s.$filters.data(i.dataHoraFinalizado>new Date("1970-01-01T00:00:00.000Z")?i.dataHoraFinalizado:i.dataHoraPrevisto))+" ",1),t(U,null,{default:r(()=>[g(v(i.dataHoraFinalizado>new Date("1970-01-01T00:00:00.000Z")?"Finalizado em":"Previsto para"),1)]),_:2},1024)])]),l("div",yo,[t(h,{name:"more_vert",color:"blue-grey-6",style:{color:"grey",float:"right","text-align":"right","font-size":"1.2rem",cursor:"pointer"},onMouseOver:"this.style.color='black'",onMouseOut:"this.style.color='grey'"},{default:r(()=>[t(X,null,{default:r(()=>[J((m(),w(W,{link:"",separator:""},{default:r(()=>[t(Q,{clickable:"",onClick:N=>s.$refs.modalHistoricoStatus.mostrar({idDocumento:i.id})},{default:r(()=>[t(y,{avatar:""},{default:r(()=>[t(h,{name:"history"})]),_:1}),t(y,null,{default:r(()=>[t(I,null,{default:r(()=>[g("Hist\xF3rico do Status")]),_:1})]),_:1})]),_:2},1032,["onClick"]),t(Q,{clickable:"",onClick:N=>c.irParaAtendimento(i.codigoContato)},{default:r(()=>[t(y,{avatar:""},{default:r(()=>[t(h,{name:"launch"})]),_:1}),t(y,null,{default:r(()=>[t(I,null,{default:r(()=>[g("Ir para o Atendimentos")]),_:1})]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)),[[Y]])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1032,["class"])):A("",!0)]),_:2},1032,["list","onEnd"])])]))),128))]),t(C,{modelValue:e.trocarStatusModal,"onUpdate:modelValue":o[8]||(o[8]=u=>e.trocarStatusModal=u),dados:e.trocarStatusDados,onConfirmar:c.eventoConfirmarTroca,onCancelar:c.eventoCancelarTroca},null,8,["modelValue","dados","onConfirmar","onCancelar"]),t(d,{ref:"modalHistoricoStatus"},null,512)]),_:1})}var Fo=T(so,[["render",Co]]);export{Fo as default};