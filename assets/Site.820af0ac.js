import{_ as A,bN as E,r as b,o as c,p as _,f as s,w as l,h as S,j as y,i as k,k as V,G as U,J as D,C as r,s as u,W as p,A as g,d as q,e as T,F as w,u as x,aO as Q,t as C,Q as P,P as B,S as z,T as j,U as F,I,aU as N,K as H}from"./index.2cdadbf3.js";var L="/assets/imagem-modelo-carrossel.98567798.jpg";const M={components:{Arquivo:E},computed:{estaoTodasEmpresasComSiteAtivo:{get(){for(const o in this.empresas)if(!this.empresas[o].principal&&!this.empresas[o].ativoSite)return!1;return!0},set(o){for(const a in this.empresas)this.empresas[a].principal||(this.empresas[a].ativoSite=o)}},estaoTodasFormasDePagamentoComSiteAtivo:{get(){for(const o in this.formasPagamento)if(!this.formasPagamento[o].ativoSite)return!1;return!0},set(o){for(const a in this.formasPagamento)this.formasPagamento[a].ativoSite=o}}},data(){return{tabsSite:"home",empresas:[],formasPagamentoParaSincronizar:[],formasPagamento:[],empresaPrincipal:"",json:{siteUrl:"",ativo:!0,empresas:{},carrossel:[],slogan:"",descricao:"",formasPagamento:{},marketingDigital:{codigoTagHead:"",codigoTagBody:""}},arquivo:[]}},methods:{async atualizar(){var o,a,n,d,t;try{let i=await this.$utils.geeksApi({site:{funcao:"84C328A7-CEA7-4762-A703-C59DE8D53BF5"}});if(i=i.data.site,((o=i==null?void 0:i.carrossel)==null?void 0:o.length)&&this.tabsSite!=="produtos"&&(this.arquivo=i.carrossel.map(e=>({id:e.id,dataCriacao:$utils.dataAtual(),nome:e.nome,arquivo:e.imagemB64}))),this.empresas=await $db.empresa.le(),this.empresas=this.empresas.reduce((e,m)=>(e[m.id]={id:m.id,idContato:m.idContato,nome:m.nome,ativoSite:!1,principal:!1},e),{}),!$lodash.isEmpty(i.empresas)){this.json=i;for(let e in this.empresas)this.empresas[e].principal=!!((a=this.json.empresas[e])!=null&&a.principal),this.empresas[e].ativoSite=!!((n=this.json.empresas[e])!=null&&n.ativoSite),(d=this.json.empresas[e])!=null&&d.principal&&(this.empresaPrincipal=this.json.empresas[e].id);await this.sincronizarFormasDePagamento(!0)}if($lodash.isEmpty(i.empresas)){const e=Object.keys(this.empresas);e.length===1&&(this.empresaPrincipal=e[0],this.empresas[e[0]].ativoSite=!0),await this.sincronizarFormasDePagamento(!1)}let h=localStorage.getItem("bancoDeDados"),f=await $db.vitrine.ler(),v=((t=(await $db.vitrine.ler()).find(e=>e.banco===h))==null?void 0:t.url)||h;this.json.siteUrl=v}catch(i){this.$q.notifyError("Erro ao consultar banco",i)}},async salvar(){if(!this.empresaPrincipal){this.$q.notifyError("Selecione ao menos uma empresa principal");return}this.json.empresas=this.empresas,this.json.formasPagamento=this.formasPagamento,this.json.empresas[this.empresaPrincipal].principal=!0;let o=$utils.clonarV2(this.json);await this.$utils.geeksApi({site:{funcao:"E981897C-A205-441E-99DE-BECD16CB261A",...o}}),this.$q.notifyPositive("Salvo com sucesso!")},carrosselAtualizar(){this.json.carrossel=[];for(const o of this.$refs.arquivo.arquivo)this.json.carrossel.push({imagemB64:o.arquivo,nome:o.nome,id:o.id})},async baixarImagemModeloCarrossel(){const o=document.createElement("a");o.href=L,o.download="imagem-modelo.jpg",o.click()},async mudarEmpresaPrincipal(o){for(const a in this.empresas)o===a?(this.empresas[a].principal=!0,this.empresas[a].ativoSite=!0):this.empresas[a].principal=!1;await this.sincronizarFormasDePagamento(!0)},async sincronizarFormasDePagamento(o){this.formasPagamento=[];const a=this.empresas[this.empresaPrincipal];for(const n of this.formasPagamentoParaSincronizar){if(!n.ativo||n.idContatoEmpresa&&a&&n.idContatoEmpresa!==a.idContato)continue;const d={id:n.id,descricao:n.descricao,ativoSite:!1},t=o?this.json.formasPagamento.find(i=>i.id===n.id):null;d.ativoSite=t?t.ativoSite:!1,this.formasPagamento.push(d)}this.formasPagamento.sort(function(n,d){return n.descricao<d.descricao?-1:n.descricao>d.descricao?1:0})}},async created(){this.formasPagamentoParaSincronizar=await $db.formaPagamento.le(),await this.atualizar()}},O={id:"SiteConfiguracao"},G={class:"q-card bg-white q-px-md no-shadow"},J={class:"row items-center"},R={class:"col"},K={class:"col-auto text-right"},W={class:"q-card bg-white q-my-md no-shadow"},X={class:"q-px-md"},Y={class:"col-6 col-md-1"},Z={class:"col-6 col-md-1"},$={class:"col-12 col-md"},ee={class:"q-card bg-white q-my-md no-shadow"},ae={class:"q-px-md q-pb-md"},se={class:"row justify-end"},oe={class:"q-card bg-white q-my-md no-shadow"},te={class:"q-px-md q-pb-md"},ie={class:"q-card bg-white q-my-md no-shadow"},re={class:"q-px-md q-pb-md"},le={class:"q-card bg-white no-shadow"},ne={class:"q-px-md q-pb-md"};function me(o,a,n,d,t,i){const h=b("barraTopo"),f=b("row"),v=b("Arquivo");return c(),_("div",O,[s(U,null,{default:l(()=>[s(h),s(S,{class:"bg-transparent q-px-sm"},{default:l(()=>[s(y,{name:"mdi-earth",size:"sm"}),s(k,null,{default:l(()=>a[9]||(a[9]=[V("Site")])),_:1})]),_:1})]),_:1}),s(I,null,{default:l(()=>[s(D,{class:"u-container"},{default:l(()=>[r("div",G,[r("div",J,[r("div",R,[s(u,{readonly:"",type:"text",prefix:"b15.app/",label:"URL do Site",modelValue:t.json.siteUrl,"onUpdate:modelValue":a[0]||(a[0]=e=>t.json.siteUrl=e)},{prepend:l(()=>[s(y,{name:"mdi-earth",size:"32px"})]),_:1},8,["modelValue"])]),r("div",K,[s(p,{modelValue:t.json.ativo,"onUpdate:modelValue":a[1]||(a[1]=e=>t.json.ativo=e),label:"Ativo",class:"q-ma-md"},null,8,["modelValue"])])])]),r("div",W,[s(g,{group:"somegroup",icon:"business",label:"Empresas",class:"border-1","header-class":"bg-white text-tertiary","exact-active-class":"bg-white text-tertiary"},{default:l(()=>[Object.keys(t.empresas).length>1?(c(),q(p,{key:0,modelValue:i.estaoTodasEmpresasComSiteAtivo,"onUpdate:modelValue":a[2]||(a[2]=e=>i.estaoTodasEmpresasComSiteAtivo=e),label:"Selecionar todos"},null,8,["modelValue"])):T("",!0),r("div",X,[s(f,{class:"items-center borderBottom"},{default:l(()=>a[10]||(a[10]=[r("div",{class:"col-6 col-md-1"},"Principal",-1),r("div",{class:"col-6 col-md-1"},"Ativo",-1),r("div",{class:"col-12 col-md"},"Empresa",-1)])),_:1}),(c(!0),_(w,null,x(t.empresas,e=>(c(),q(f,{class:"items-center borderBottom",key:e.id},{default:l(()=>[r("div",Y,[s(Q,{modelValue:t.empresaPrincipal,"onUpdate:modelValue":[a[3]||(a[3]=m=>t.empresaPrincipal=m),i.mudarEmpresaPrincipal],val:e.id},null,8,["modelValue","val","onUpdate:modelValue"])]),r("div",Z,[s(p,{modelValue:e.ativoSite,"onUpdate:modelValue":m=>e.ativoSite=m,class:"col",disable:t.empresaPrincipal==e.id},null,8,["modelValue","onUpdate:modelValue","disable"])]),r("div",$,C(e.nome),1)]),_:2},1024))),128))])]),_:1})]),r("div",ee,[s(g,{group:"somegroup",icon:"mdi-view-carousel",label:"Carrossel",class:"border-1","header-class":"bg-white text-tertiary"},{default:l(()=>[r("div",ae,[r("div",se,[s(P,{flat:"",color:"primary",label:"Baixar imagem modelo",onClick:i.baixarImagemModeloCarrossel},null,8,["onClick"])]),s(v,{ref:"arquivo",onAtualizar:i.carrosselAtualizar,arquivo:t.arquivo},null,8,["onAtualizar","arquivo"])])]),_:1})]),r("div",oe,[s(g,{group:"somegroup",icon:"mdi-format-title",label:"Textos",class:"border-1","header-class":"bg-white text-tertiary"},{default:l(()=>[r("div",te,[s(u,{label:"Slogan",class:"q-mb-sm",modelValue:t.json.slogan,"onUpdate:modelValue":a[4]||(a[4]=e=>t.json.slogan=e)},null,8,["modelValue"]),s(u,{class:"bg-light q-px-sm",label:"Descri\xE7\xE3o",rows:"3",type:"textarea",modelValue:t.json.descricao,"onUpdate:modelValue":a[5]||(a[5]=e=>t.json.descricao=e)},null,8,["modelValue"])])]),_:1})]),r("div",ie,[s(g,{group:"somegroup",icon:"credit_card",label:"Formas de pagamento",class:"border-1","header-class":"bg-white text-tertiary"},{default:l(()=>[r("div",re,[s(B,{highlight:"","no-border":"",separator:"",class:"q-pt-none"},{default:l(()=>[s(p,{modelValue:i.estaoTodasFormasDePagamentoComSiteAtivo,"onUpdate:modelValue":a[6]||(a[6]=e=>i.estaoTodasFormasDePagamentoComSiteAtivo=e),label:"Selecionar todos"},null,8,["modelValue"]),(c(!0),_(w,null,x(t.formasPagamento,e=>(c(),q(z,{key:e.id,class:"q-pa-xs itemlista"},{default:l(()=>[s(j,{avatar:""},{default:l(()=>[s(p,{modelValue:e.ativoSite,"onUpdate:modelValue":m=>e.ativoSite=m},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),s(j,null,{default:l(()=>[s(F,null,{default:l(()=>[V(C(e.descricao),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1})]),r("div",le,[s(g,{group:"somegroup",icon:"mdi-code-tags",label:"C\xF3digos marketing digital",class:"border-1","header-class":"bg-white text-tertiary"},{default:l(()=>[r("div",ne,[s(u,{class:"bg-light q-px-md q-mb-md",label:"C\xF3digo na tag head",rows:"10",type:"textarea",modelValue:t.json.marketingDigital.codigoTagHead,"onUpdate:modelValue":a[7]||(a[7]=e=>t.json.marketingDigital.codigoTagHead=e)},null,8,["modelValue"]),s(u,{class:"bg-light q-px-md",label:"C\xF3digo ap\xF3s a tag de abertura body",rows:"10",type:"textarea",modelValue:t.json.marketingDigital.codigoTagBody,"onUpdate:modelValue":a[8]||(a[8]=e=>t.json.marketingDigital.codigoTagBody=e)},null,8,["modelValue"])])]),_:1})])]),_:1})]),_:1}),s(H,{class:"bg-light border-top",reveal:""},{default:l(()=>[s(S,{class:"u-container q-px-sm"},{default:l(()=>[s(N),s(P,{label:"Cancelar",color:"tertiary",flat:"",class:"q-ml-sm"}),s(P,{onClick:i.salvar,label:"Salvar",color:"primary",unelevated:""},null,8,["onClick"])]),_:1})]),_:1})])}var ce=A(M,[["render",me]]);export{ce as default};
