import{ab as w,aj as u,a6 as t,dd as M,_ as q,Y as y,r as f,o as _,p as b,C,F as $,u as H,d as B,w as v,f as i,s as k,bq as E,at as S,Q as T,K as z}from"./index.2cdadbf3.js";var Q=w({name:"QChatMessage",props:{sent:Boolean,label:String,bgColor:String,textColor:String,name:String,avatar:String,text:Array,stamp:String,size:String,labelHtml:Boolean,nameHtml:Boolean,textHtml:Boolean,stampHtml:Boolean},setup(e,{slots:a}){const n=u(()=>e.sent===!0?"sent":"received"),x=u(()=>`q-message-text-content q-message-text-content--${n.value}`+(e.textColor!==void 0?` text-${e.textColor}`:"")),r=u(()=>`q-message-text q-message-text--${n.value}`+(e.bgColor!==void 0?` text-${e.bgColor}`:"")),h=u(()=>"q-message-container row items-end no-wrap"+(e.sent===!0?" reverse":"")),g=u(()=>e.size!==void 0?`col-${e.size}`:""),l=u(()=>({msg:e.textHtml===!0?"innerHTML":"textContent",stamp:e.stampHtml===!0?"innerHTML":"textContent",name:e.nameHtml===!0?"innerHTML":"textContent",label:e.labelHtml===!0?"innerHTML":"textContent"}));function p(s){return a.stamp!==void 0?[s,t("div",{class:"q-message-stamp"},a.stamp())]:e.stamp?[s,t("div",{class:"q-message-stamp",[l.value.stamp]:e.stamp})]:[s]}function o(s,m){const d=m===!0?s.length>1?c=>c:c=>t("div",[c]):c=>t("div",{[l.value.msg]:c});return s.map((c,A)=>t("div",{key:A,class:r.value},[t("div",{class:x.value},p(d(c)))]))}return()=>{const s=[];a.avatar!==void 0?s.push(a.avatar()):e.avatar!==void 0&&s.push(t("img",{class:`q-message-avatar q-message-avatar--${n.value}`,src:e.avatar,"aria-hidden":"true"}));const m=[];a.name!==void 0?m.push(t("div",{class:`q-message-name q-message-name--${n.value}`},a.name())):e.name!==void 0&&m.push(t("div",{class:`q-message-name q-message-name--${n.value}`,[l.value.name]:e.name})),a.default!==void 0?m.push(o(M(a.default()),!0)):e.text!==void 0&&m.push(o(e.text)),s.push(t("div",{class:g.value},m));const d=[];return a.label!==void 0?d.push(t("div",{class:"q-message-label"},a.label())):e.label!==void 0&&d.push(t("div",{class:"q-message-label",[l.value.label]:e.label})),d.push(t("div",{class:h.value},s)),t("div",{class:`q-message q-message-${n.value}`},d)}}});const V={components:{Avatar:y},data(){return{dialogos:[],estaEnviando:!1,mensagem:""}},methods:{async carregarAnotacoes(){var e=await $db.contatoAnotacao.leAnotacoesDeUmContato(this.$route.params.id);e.forEach(a=>{a.mensagens=a.mensagens.toString().split(`
`).filter(n=>n!=null&&n!=="")}),this.dialogos=e},async enviarMensagem(){try{if(this.estaEnviando||!this.mensagem)return;this.estaEnviando=!0,await $db.contatoAnotacao.grava({id:$utils.uuid(),descricao:this.mensagem,idContato:this.$route.params.id,tipo:"Atendimento 4.0",dataHora:$utils.dataAtual(),cpfUsuario:$db.usuario.logado.numeroDocumentoNacional}),await this.carregarAnotacoes(),this.mensagem="",this.$nextTick(this.rolarMensagens)}catch(e){this.$q.notifyError("Ocorreu um erro ao enviar mensagem",e)}finally{this.estaEnviando=!1}},rolarMensagens(){const e=this.$refs.mensagens;e.scrollTop=e.scrollHeight}},watch:{"$route.params.id"(){this.carregarAnotacoes()}},created(){this.carregarAnotacoes()},mounted(){this.rolarMensagens()}},N={class:"ChatMensagens-mensagens q-pa-sm",ref:"mensagens"},L={class:"u-container"};function D(e,a,n,x,r,h){const g=f("avatar"),l=f("g-col"),p=f("g-row");return _(),b($,null,[C("div",N,[(_(!0),b($,null,H(r.dialogos,(o,s)=>(_(),B(Q,{key:s,class:"q-py-sm",name:o.usuarioApelido,sent:o.enviado,stamp:o.rotulo,text:o.mensagens},{avatar:v(()=>[i(g,{imagem:o.usuarioImagem,rotulo:o.usuarioApelido,tamanho:"38"},null,8,["imagem","rotulo"])]),_:2},1032,["name","sent","stamp","text"]))),128))],512),i(z,{class:"bg-light"},{default:v(()=>[C("div",L,[i(p,{gutter:"md",items:"center",bg:"bg-white",class:"ChatMensagens-enviar"},{default:v(()=>[i(l,{col:"grow"},{default:v(()=>[i(k,{modelValue:r.mensagem,"onUpdate:modelValue":a[0]||(a[0]=o=>r.mensagem=o),modelModifiers:{trim:!0},disabled:r.estaEnviando,loading:r.estaEnviando,onKeydown:a[1]||(a[1]=E(S(()=>{},["stop"]),["enter"])),type:"textarea",placeholder:"Digite sua mensagem",filled:"",dense:"",borderless:"",rows:"4"},null,8,["modelValue","disabled","loading"])]),_:1}),i(l,{col:"shrink"},{default:v(()=>[i(T,{onClick:h.enviarMensagem,icon:"send",size:"lg",round:"",flat:"",color:"primary"},null,8,["onClick"])]),_:1})]),_:1})])]),_:1})],64)}var F=q(V,[["render",D]]);const K={components:{ChatMensagens:F}},U={class:"AtendimentoAnotacoes bg-light rounded-borders"};function I(e,a,n,x,r,h){const g=f("chat-mensagens");return _(),b("div",U,[i(g,{class:"AtendimentoAnotacoes-mensagens",style:{height:"100%"}})])}var O=q(K,[["render",I]]);export{O as default};
