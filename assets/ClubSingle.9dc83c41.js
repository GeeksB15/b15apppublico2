import{Q as O}from"./QSpinnerDots.deda3454.js";import{_ as F,p as C,o as n,i as u,w as d,f as c,K as N,A as Q,B as k,C as j,D as S,L as z,E as T,e as E,t as y,G as B,H as M,d as g,F as I,r as x,x as i,I as R,bm as L,y as U,ac as h,ag as W,bX as H,bY as J,an as X,bi as Y,bZ as G,l as m,b2 as K,b3 as Z,b6 as $,Q as ee,j as te,a4 as oe,W as se,X as re}from"./index.e8d0ea55.js";import{Q as V,a as A}from"./QCarousel.52996056.js";import{F as ae,B as ie,C as ne}from"./RodapeSite.c3888e36.js";import"./open-url.4ceac5a5.js";import"./QBtnGroup.5b5d7ce3.js";const le={data(){return{estaAberto:!1,exibeBotaoAddNoCarrinho:!1,produto:{},produtosParaComprarJunto:{},urlsImagenId:null}},methods:{async abrir(o,t,s,r){var v;const e=[],l=await $db.arquivo.lista({tipoArquivo:"itemImagem",idTabelaMaster:o.id});for(const f of l)f.id!=o.id&&e.push({id:f.id,url:`https://southamerica-east1-b15node-178618.cloudfunctions.net/storage/${f.name}`});this.urlsImagenId=((v=e[0])==null?void 0:v.id)||null,this.produto={...o,urlImagem:r,urlsImagen:e},this.produtosParaComprarJunto={...t},this.exibeBotaoAddNoCarrinho=s,this.estaAberto=!0,this.$emit("abriu",o.id)},salvarNoCarrinho(){this.$emit("salvarNoCarrinho",{produtoSelecionado:this.produto,outrosProdutos:this.produtosParaComprarJunto})}}},de=["src"],ce=["src"];function ue(o,t,s,r,e,l){const v=C("g-col"),f=C("g-row");return n(),u(U,{modelValue:e.estaAberto,"onUpdate:modelValue":t[1]||(t[1]=b=>e.estaAberto=b),onHide:t[2]||(t[2]=b=>o.$emit("fechou"))},{default:d(()=>[c(N,{view:"hHh LpR fFf",container:"",class:"bg-white"},{default:d(()=>[c(Q,null,{default:d(()=>[c(k,null,{default:d(()=>[j(c(S,{icon:"arrow_back",flat:"",round:"",dense:""},null,512),[[z]]),c(T,null,{default:d(()=>[E(y(e.produto.descricao),1)]),_:1})]),_:1})]),_:1}),c(B,null,{default:d(()=>[c(M,null,{default:d(()=>{var b,q,D;return[((b=e.produto)==null?void 0:b.urlsImagen)&&((D=(q=e.produto)==null?void 0:q.urlsImagen)==null?void 0:D.length)?(n(),u(V,{key:0,modelValue:e.urlsImagenId,"onUpdate:modelValue":t[0]||(t[0]=_=>e.urlsImagenId=_),swipeable:"",navigation:"",arrows:"","transition-prev":"scale","transition-next":"scale",class:"no-shadow","control-color":"tertiary",style:{position:"absolute",width:"100%",height:"100%"}},{default:d(()=>{var _;return[(n(!0),g(I,null,x((_=e.produto)==null?void 0:_.urlsImagen,a=>(n(),u(A,{key:a.id,name:a==null?void 0:a.id,class:"column no-wrap flex-center"},{default:d(()=>[i("img",{src:a==null?void 0:a.url,style:{display:"block",width:"100%",margin:"0 auto"}},null,8,de)]),_:2},1032,["name"]))),128))]}),_:1},8,["modelValue"])):(n(),u(f,{key:1,gutter:"md",items:"center",width:"100%",height:"100%",style:{position:"absolute"}},{default:d(()=>[c(v,null,{default:d(()=>{var _;return[i("img",{src:(_=e.produto)==null?void 0:_.urlImagem,style:{display:"block",width:"100%",margin:"0 auto"}},null,8,ce)]}),_:1})]),_:1}))]}),_:1})]),_:1}),c(R,{class:"bg-white text-tertiary"},{default:d(()=>[c(k,{class:"text-h5 text-weight-bold border-top"},{default:d(()=>[c(L),i("span",null,"R$ "+y(o.$filters.numero(e.produto.valorVenda,2)),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}var he=F(le,[["render",ue]]);const pe={},me=i("h5",null," IMAGEM DE CLUB INATIVO VAI AQUI ",-1),fe=[me];function ge(o,t){return n(),g("div",null,fe)}var be=F(pe,[["render",ge]]);const _e=[h("rect",{y:"10",width:"15",height:"120",rx:"6"},[h("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),h("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),h("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6"},[h("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),h("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),h("rect",{x:"60",width:"15",height:"140",rx:"6"},[h("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),h("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),h("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6"},[h("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),h("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),h("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6"},[h("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),h("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})])];var ve=W({name:"QSpinnerBars",props:H,setup(o){const{cSize:t,classes:s}=J(o);return()=>h("svg",{class:s.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg"},_e)}});const we={components:{FooterSite:ae,BarraTopoEmpresa:ie,CarrinhoCompras:ne,DetalhesDoProduto:he,ClubInativo:be},data(){return{slide:X("1"),dados:{},banco:"",contatos:[],contatoPrincipal:{telefone:{}},gruposItens:{},filterSelect:"",filterOptions:[],openedF:!1,mostrarLogo:!1,qtd:{},contato:[],formasPagamento:[],item:[],urlImagemItem:{},carrinhoItens:{},carregando:!0,possuiWhatsapp:!1,possuiCarrinho:!1,searchText:""}},methods:{searchProduct(o){const t=$utils.tratamentoCompletoString(o).split(" ");let s=$utils.clonarV2(this.gruposItensOriginal),r={};if(t.length>0||(r=s),t.length>0)for(const e in s)for(const l of s[e]){const v=$utils.tratamentoCompletoString(l.descricaoConcatenada);let f=!0;for(const b of t)if(!~v.indexOf(b)){f=!1;break}!f||(r[e]||(r[e]=[]),r[e].push(l))}this.gruposItens=r},injetarIdDoProdutoNaURL(o){const t=`${window.location.protocol}//${window.location.host}${window.location.pathname}?produtoId=${o}`;window.history.pushState({path:t},"",t)},limparIdDoProdutoDaURL(){const o=`${window.location.protocol}//${window.location.host}${window.location.pathname}`;window.history.pushState({path:o},"",o)},abrirProdutoInjetadoNaURL(){const{produtoId:o}=this.$route.query;if(!o)return;const t=this.item.find(s=>s.id===o);!t||this.verDetalhesDoProduto(t)},async atualizar(){var s;const o=await this.$utils.geeksApi({site:{funcao:"639A3247-947F-41F7-97E3-296A8C5BCFED"},itens:{funcao:"6AA367D8-5683-48B5-8F35-75B4FF37DEFD"}},{bancoDeDados:this.banco,convidado:!0});this.dados=o.data.site,(s=this.dados.carrossel)!=null&&s.length&&(this.slide=this.dados.carrossel[0].id),this.carregando=!1,this.contatoPrincipal=this.dados.contatoPrincipal,this.possuiWhatsapp=!!this.dados.telefoneWhatsapp,this.contatos=this.dados.contatoEmpresasSite,this.dados.formasPagamento.map(r=>{r.ativoSite&&this.formasPagamento.push({rotulo:r.descricao,valor:r.id})});for(const r of this.dados.itens){const e=`https://southamerica-east1-b15node-178618.cloudfunctions.net/storage/${this.banco}/vitrine/${r}`;this.urlImagemItem[r]=e}const t=o.data.itens;this.montarGrupos(t)},zerarProdutosQueEstavamNoCarrinho(o){for(const t of o)this.qtd[t]=0;this.carrinhoItens={},this.openedF=!1},updateCart(o,t){this.$refs.carrinho.atualizarCarrinho(o,t),this.carrinhoItens[o.id]={...o,quantidade:t};const s=Object.keys(this.carrinhoItens).length;this.openedF=!this.$q.platform.is.mobile&&!!s,Object.keys(this.carrinhoItens).reduce((r,e)=>r+this.carrinhoItens[e].quantidade,0)!==0?this.possuiCarrinho=!0:this.possuiCarrinho=!1},carrinhoAtualizado(o){this.carrinhoItens=o;for(const s of Object.keys(o))this.qtd[s]=o[s].quantidade;const t=Object.keys(this.carrinhoItens).length;this.openedF=!this.$q.platform.is.mobile&&!!t,Object.keys(this.carrinhoItens).reduce((s,r)=>s+this.carrinhoItens[r].quantidade,0)!==0?this.possuiCarrinho=!0:this.possuiCarrinho=!1},removerItemDoCarrinho(o){this.qtd[o]=0,delete this.carrinhoItens[o],Object.keys(this.carrinhoItens).length||(this.openedF=!1),Object.keys(this.carrinhoItens).reduce((t,s)=>t+this.carrinhoItens[s].quantidade,0)!==0?this.possuiCarrinho=!0:this.possuiCarrinho=!1},onFilterChange(){this.goToAnchor(this.filterSelect)},montarGrupos(o){let t=[];for(const r of this.dados.itens){const e=o.find(l=>l.id===r);!e||t.push(e)}this.item=t,o=Y.exports.orderBy(this.item,"descricao","asc");let s={};o.map(r=>{const e=(r==null?void 0:r.grupo)||"Outros";s[e]||(s[e]=[],this.filterOptions.push({label:e,value:this.criarSlug(e)})),s[e].push(r)}),this.gruposItens=s,this.gruposItensOriginal=$utils.clonarV2(s);for(const r of t)this.qtd[r.id]=0;for(const r of Object.keys(this.carrinhoItens))this.qtd[r]=this.carrinhoItens[r].quantidade;Object.keys(this.carrinhoItens).reduce((r,e)=>r+this.carrinhoItens[e].quantidade,0)!==0?this.possuiCarrinho=!0:this.possuiCarrinho=!1},async verDetalhesDoProduto(o){const t=this.pegarProdutosRandomicosParaComprarJunto(o),s={...o,quantidade:this.qtd[o.id]};this.$refs.detalhesDoProduto.abrir(s,t,this.possuiWhatsapp,this.urlImagemItem[o.id])},salvarProdutosDaModalDeDetalhes(o){const{produtoSelecionado:t,outrosProdutos:s}=o;this.carrinhoItens[t.id]=t,this.qtd[t.id]=t.quantidade,this.updateCart(t,t.quantidade);for(const r of Object.keys(s)){const e=s[r];this.carrinhoItens[e.id]=e,this.qtd[e.id]=e.quantidade,this.updateCart(e,e.quantidade)}},pegarProdutosRandomicosParaComprarJunto(o){const t=this.item.sort((e,l)=>.5-Math.random()),s={};let r=0;for(const e of t){if(r>3)break;e.id!==o.id&&!this.qtd[e.id]&&(s[e.id]={...e,quantidade:0},r++)}return s},irParaProdutos(){const o=this.filterOptions[0].value;this.goToAnchor(o)},criarSlug(o){return G(o.replace(" ",""))},goToAnchor(o){document.getElementById(o).scrollIntoView({behavior:"smooth"})},injetarTags(){const{codigoTagHead:o,codigoTagBody:t}=this.dados.marketingDigital;o&&document.head.insertAdjacentHTML("beforeend",o),t&&document.body.insertAdjacentHTML("afterend",t)},pesquisaPorVozExiste(){return!!(window.SpeechRecognition||window.webkitSpeechRecognition)},pesquisaPorVoz(){$q.loading.show({spinner:ve,spinnerColor:"primary",spinnerSize:140,backgroundColor:"white"});const o=window.SpeechRecognition||window.webkitSpeechRecognition;if(!o)return;const t=new o;t.continuous=!0,t.start(),t.onresult=s=>{const r=s.resultIndex,e=s.results[r][0].transcript;this.searchText=e,this.searchProduct(e)},setTimeout(()=>{t.stop(),$q.loading.hide()},5e3)}},async created(){const o=await $db.vitrine.ler();this.banco=o.find(s=>`/${s.url}`===this.$route.path).banco,localStorage.getItem("bancoDeDados")||localStorage.setItem("bancoDeDados",JSON.stringify(this.banco)),await this.atualizar(),this.injetarTags(),this.abrirProdutoInjetadoNaURL()}},Ce=o=>(se("data-v-6a0eff90"),o=o(),re(),o),ye={class:"u-container q-px-sm"},Ie={class:"u-container q-px-none"},xe={class:"hideonmobile"},Pe={class:"hideondesktop"},qe={class:"bg-light q-pb-md q-pt-xl"},De={class:"u-container"},ke={id:"slogan"},Se={class:"q-display-1 text-primary q-mt-lg q-mb-xl text-center"},Ve={class:"text-subtitle1 text-tertiary q-mb-xl text-center",style:{"font-weight":"400"}},Ae={class:"q-pa-md q-my-none q-mx-auto",style:{"max-width":"999px"}},Fe={id:"produtos"},Ne=["id"],Qe={class:"text-h6 text-tertiary q-ma-none"},Te={class:"row q-col-gutter-md items-stretch q-py-md products"},Be={class:"row full-height bg-white rounded-borders overflow-hidden shadow-14 arredondado"},Re=["onClick"],Oe=["src"],je=["onClick"],ze=["onClick"],Ee={class:"text-h5 text-right text-tertiary"},Me={class:"col-12 self-end q-px-sm"},Le={id:"mapaD"},Ue={class:"row"},We=Ce(()=>i("div",{class:"text-body1 q-mr-sm"},"Total",-1)),He={class:"text-body1 q-mr-sm"};function Je(o,t,s,r,e,l){const v=C("carrinho-compras"),f=C("BarraTopoEmpresa"),b=C("campo"),q=C("FooterSite"),D=C("DetalhesDoProduto"),_=C("ClubInativo");return n(),g(I,null,[e.carregando?(n(),u(O,{key:0,color:"primary",size:"10em",style:{"-moz-transform":"translateX(-50%) translateY(-50%)","-webkit-transform":"translateX(-50%) translateY(-50%)","-o-transform":"translateX(-50%) translateY(-50%)","-ms-transform":"translateX(-50%) translateY(-50%)",transform:"translateX(-50%) translateY(-50%)",position:"fixed",top:"50%",left:"50%"}})):m("",!0),e.dados.ativo?(n(),u(N,{key:1,class:"Club",id:"ClubeSingle",view:"lHr lpR lFr"},{default:d(()=>[c(Q,null,{default:d(()=>[i("div",ye,[e.mostrarLogo?m("",!0):(n(),u(K,{key:0,"inline-label":"","indicator-color":"transparent","mobile-arrows":"","outside-arrows":"",align:"left",class:"bg-primary text-white no-shadow"},{default:d(()=>[(n(!0),g(I,null,x(e.filterOptions,(a,w)=>(n(),u(Z,{flat:"","text-color":"white",name:a.label,label:a.label,key:w,onClick:p=>l.goToAnchor(a.value)},null,8,["name","label","onClick"]))),128))]),_:1}))])]),_:1}),e.possuiWhatsapp?(n(),u($,{key:0,modelValue:e.openedF,"onUpdate:modelValue":t[0]||(t[0]=a=>e.openedF=a),side:"right",bordered:""},{default:d(()=>[c(v,{ref:"carrinho",onCarrinhoAtualizado:l.carrinhoAtualizado,onItemRemovido:l.removerItemDoCarrinho,onCarrinhoLimpado:l.zerarProdutosQueEstavamNoCarrinho,formasPagamento:e.formasPagamento,contatoPrincipal:e.contatoPrincipal,banco:e.banco},null,8,["onCarrinhoAtualizado","onItemRemovido","onCarrinhoLimpado","formasPagamento","contatoPrincipal","banco"])]),_:1},8,["modelValue"])):m("",!0),c(B,null,{default:d(()=>[i("div",Ie,[c(f,{contatoPrincipal:e.contatoPrincipal,onVerProdutos:l.irParaProdutos,onVerEndereco:t[1]||(t[1]=a=>l.goToAnchor("mapaD"))},null,8,["contatoPrincipal","onVerProdutos"])]),i("div",xe,[e.dados.carrossel&&e.dados.carrossel.length?(n(),u(V,{key:0,modelValue:e.slide,"onUpdate:modelValue":t[2]||(t[2]=a=>e.slide=a),"transition-prev":"scale","transition-next":"scale","control-color":"white",height:"480px",class:"bg-primary text-white no-shadow hideonmobile",swipeable:"",animated:"",navigation:"",padding:"",arrows:""},{default:d(()=>[(n(!0),g(I,null,x(e.dados.carrossel,a=>(n(),u(A,{key:a.id,name:a.id,"img-src":a.imagemB64,class:"column no-wrap flex-center"},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue"])):m("",!0)]),i("div",Pe,[e.dados.carrossel&&e.dados.carrossel.length?(n(),u(V,{key:0,modelValue:e.slide,"onUpdate:modelValue":t[3]||(t[3]=a=>e.slide=a),"transition-prev":"scale","transition-next":"scale","control-color":"white",height:"280px",class:"bg-primary text-white shadow-1 rounded-borders",swipeable:"",animated:"",navigation:"",padding:"",arrows:""},{default:d(()=>[(n(!0),g(I,null,x(e.dados.carrossel,a=>(n(),u(A,{key:a.id,name:a.id,"img-src":a.imagemB64,class:"column no-wrap flex-center"},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue"])):m("",!0)]),i("div",qe,[i("div",De,[i("div",ke,[i("div",Se,y(e.dados.slogan),1),i("div",Ve,y(e.dados.descricao),1)]),i("div",Ae,[c(ee,{debounce:500,outlined:"",modelValue:e.searchText,"onUpdate:modelValue":[t[4]||(t[4]=a=>e.searchText=a),l.searchProduct],placeholder:"Pesquisar por produto",class:"bg-white"},{append:d(()=>[l.pesquisaPorVozExiste?(n(),u(S,{key:0,onClick:l.pesquisaPorVoz,icon:"mic",size:"lg",flat:"",round:"",dense:"",color:"primary"},null,8,["onClick"])):m("",!0),c(te,{name:"search",size:"md",color:"primary",class:"q-mr-sm"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),i("div",Fe,[(n(!0),g(I,null,x(e.gruposItens,(a,w)=>(n(),g("section",{key:w,id:l.criarSlug(w),class:"q-px-sm q-pb-none q-pt-xl"},[i("div",Qe,y(w),1),i("div",Te,[(n(!0),g(I,null,x(a,p=>(n(),g("div",{class:"col-6 col-sm-4 col-md-2 q-mb-md",key:p.id},[i("div",Be,[i("div",{onClick:P=>l.verDetalhesDoProduto(p),class:"col-12 self-start cursor-pointer"},[i("img",{src:this.urlImagemItem[p.id],style:{width:"100%",margin:"0 auto",display:"block"}},null,8,Oe)],8,Re),i("div",{onClick:P=>l.verDetalhesDoProduto(p),style:{"min-height":"50px"},class:"col-12 self-start text-tertiary q-pt-sm q-px-sm cursor-pointer"},y(p.descricao),9,je),i("div",{onClick:P=>l.verDetalhesDoProduto(p),class:"col-12 self-end q-pt-sm q-pb-xs q-px-sm cursor-pointer"},[i("div",Ee,[i("b",null,"R$ "+y(o.$filters.numero(p.valorVenda,2)),1)])],8,ze),i("div",Me,[e.possuiWhatsapp?(n(),u(oe,{key:0,class:"full-width"})):m("",!0),e.possuiWhatsapp?(n(),u(b,{key:1,modelValue:e.qtd[p.id],"onUpdate:modelValue":[P=>e.qtd[p.id]=P,P=>l.updateCart(p,e.qtd[p.id])],min:"0",tipo:"quantidade",borderless:"",dense:""},null,8,["modelValue","onUpdate:modelValue"])):m("",!0)])])]))),128))])],8,Ne))),128))])])]),i("div",Le,[c(q,{"contato-principal":e.contatoPrincipal},null,8,["contato-principal"])])]),_:1}),e.possuiWhatsapp&&e.possuiCarrinho?(n(),u(R,{key:1,class:"mobile-only",bordered:"",color:"primary"},{default:d(()=>[c(k,null,{default:d(()=>[c(T,null,{default:d(()=>[i("div",Ue,[We,i("div",He,"R$ "+y(o.$filters.numero(Object.keys(e.carrinhoItens).reduce((a,w)=>a+e.carrinhoItens[w].quantidade*e.carrinhoItens[w].valorVenda,0),2)),1)])]),_:1}),c(S,{label:"Finalizar",color:"white","text-color":"primary",onClick:t[5]||(t[5]=a=>e.openedF=!e.openedF),unelevated:""})]),_:1})]),_:1})):m("",!0)]),_:1})):m("",!0),c(D,{ref:"detalhesDoProduto",onSalvarNoCarrinho:l.salvarProdutosDaModalDeDetalhes,onAbriu:l.injetarIdDoProdutoNaURL,onFechou:l.limparIdDoProdutoDaURL},null,8,["onSalvarNoCarrinho","onAbriu","onFechou"]),!e.dados.ativo&&!e.carregando?(n(),u(_,{key:2})):m("",!0)],64)}var et=F(we,[["render",Je],["__scopeId","data-v-6a0eff90"]]);export{et as default};
