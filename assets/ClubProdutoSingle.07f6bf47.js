import{_ as T,r as b,o as f,d as v,w as t,f as e,G as B,C as s,h as g,i as C,aI as A,p as w,e as I,Q as m,b2 as R,I as M,J as N,t as p,aO as S,m as E,k as q,F as U,u as z,z as V,O as y,R as L,l as H,K as O,D as P,H as F,N as Q,s as _,M as G}from"./index.a5f5d5a1.js";import{C as j}from"./Campo.e3115967.js";import{B as J,F as K,C as W}from"./RodapeSite.88b03b18.js";import{_ as X}from"./b15-white.58ad6516.js";import"./open-url.a9a562aa.js";const Y={components:{Campo:j,BarraTopoEmpresa:J,FooterSite:K,CarrinhoCompras:W},computed:{},data(){return{filterSelect:"",filterOptions:[],opened:!1,openedM:!1,openedC:!1,openedF:!1,mostrarLogo:!1,qtd:{},dados:{},dadosE:{},contato:[],contatoEndereco:[],contatoTelefone:[],formasPagamento:[],item:[],cartItems:[],address:"",product:[],upSell:[],id:"",contatoPrincipal:{telefone:{}}}},methods:{updateCart(n,a,u,d,o){const c=this.cartItems.findIndex(r=>r.cod===n);c!==-1?u===0?this.cartItems=this.cartItems.filter(r=>r.cod!==n):this.cartItems[c].qtd=u:this.cartItems.push({cod:n,name:a,qtd:u,price:d,imagem:o}),localStorage.setItem("cartItemsStoraged",JSON.stringify(this.cartItems))},async atualizar(){let n=(await this.$utils.geeksApi({contato:{funcao:"010B5481-B61E-47A4-9557-20A0763B5F8E"}},{bancoDeDados:this.banco,convidado:!0})).data.contato,a=[],u={},d=await this.$utils.geeksApi({site:{funcao:"84C328A7-CEA7-4762-A703-C59DE8D53BF5"}},{bancoDeDados:this.banco,convidado:!0});this.dadosE=d.data.site,d=d.data.site;for(let r in d.empresas)a.push(n.filter(i=>i.id===d.empresas[r].idContato)[0]);for(let r in d.empresas)d.empresas[r].principal&&(u=n.filter(i=>i.id===d.empresas[r].idContato)[0]);console.log("dadosE",d),this.contatoPrincipal=u,this.contatos=a,d.formasPagamento.map(r=>{r.ativoSite&&this.formasPagamento.push({rotulo:r.descricao,valor:r.id})});const o=await this.$utils.geeksApi({clubsingle:{funcao:"D0405D75-055F-4202-80CE-76CBDF8EE0A7"}});this.cartItems.forEach(r=>{this.qtd[r.cod]=r.qtd});let c=0;this.item=o.data.clubsingle.item.reduce((r,i)=>(i.Grupo!==""&&(r[i.Grupo]=[...r[i.Grupo]||[],i],c<4&&i.Imagem!==""&&i.CodigoItem!=="2"&&(this.upSell.push(i),c++)),r),{}),console.log("this.upSell",this.upSell),this.product=o.data.clubsingle.item.find((r,i)=>r.CodigoItem==="2"),console.log("this.product",this.product),this.contato=o.data.clubsingle.contato,console.log("this.contato",this.contato),this.contatoEndereco=o.data.clubsingle.contatoEndereco,this.address=this.contatoEndereco[0].Logradouro+", ",this.address+=this.contatoEndereco[0].Numero+", ",this.address+=this.contatoEndereco[0].Complemento+", ",this.address+=this.contatoEndereco[0].Bairro+", ",this.address+=this.contatoEndereco[0].Municipio+"-",this.address+=this.contatoEndereco[0].UF,console.log("this.address",this.address),this.contatoTelefone=o.data.clubsingle.contatoTelefone,console.log("this.contatoTelefone",this.contatoTelefone)},abrirClub(){this.opened=!0,console.log(this.opened)},userHasScrolled(n){this.mostrarLogo=n.position>=102},goTo(n){this.$router.push(n)}},async created(){await this.atualizar()}},Z={class:"u-container q-px-none"},$={class:"u-container q-px-none"},ee={class:"q-display-1 text-primary q-pl-sm q-mt-xl"},oe={class:"text-h5 text-tertiary q-pl-sm"},te={class:"row q-my-lg"},se={class:"col-12 col-md-6 col-lg-4"},le=["src"],ae={class:"col-12 col-md-6 col-lg-8 text-tertiary text-subtitle1"},re={class:"text-body2 q-px-md",style:{"white-space":"pre-line"}},ne=s("p",{class:"text-tertiary q-mb-none",style:{"text-decoration":"line-through"},hidden:""},"De R$ 50,00",-1),ie={class:"q-display-1 text-primary"},de=s("small",{class:"q-title",hidden:""},"por ",-1),ce=s("p",{class:"text-tertiary q-mb-none",hidden:""},"em at\xE9 10x de R$ 3,50 sem juros",-1),me={color:"transparent",class:"q-px-sm q-mt-sm q-mb-none hideondesktop"},pe=s("p",{class:"text-tertiary q-mb-none",style:{"text-decoration":"line-through"}},"De R$ 50,00",-1),ue=s("div",{class:"q-display-1 text-primary"},[s("small",{class:"q-title"},"por "),s("strong",null,"R$ 35,00")],-1),he=s("p",{class:"text-tertiary q-mb-none"},"em at\xE9 10x de R$ 3,50 sem juros",-1),fe={class:"q-title text-primary q-mt-xl q-mb-sm q-pl-sm"},ge={class:"row q-mb-lg"},_e=["src"],be={class:"text-h5 q-mb-none"},qe={class:"row"},ye={class:"text-body1 q-mr-sm"},Ce={class:"text-body1 q-mr-sm"},xe=s("div",{class:"text-subtitle1 text-white"},"Minha empresa",-1),ve=s("div",{class:"text-subtitle1 text-white"},"Cadastre-se",-1);function we(n,a,u,d,o,c){const r=b("carrinho-compras"),i=b("q-scroll-observable"),k=b("BarraTopoEmpresa"),x=b("campo"),D=b("FooterSite");return f(),v(G,{class:"Club",id:"ClubeSingle",view:"lHr lpR lFr"},{default:t(()=>[e(B,{class:"topbar"},{default:t(()=>[s("div",Z,[e(g,{color:"none",class:"q-px-none"},{default:t(()=>[e(C,{class:"q-px-none hideonmobile"},{default:t(()=>[e(A,{name:"fade"},{default:t(()=>[o.mostrarLogo?(f(),w("img",{key:0,src:X,alt:"",height:"28",onClick:a[0]||(a[0]=l=>c.goTo("/club"))})):I("",!0)]),_:1})]),_:1}),e(m,{flat:"",color:"white",label:"Minha empresa",class:"q-mx-sm",onClick:a[1]||(a[1]=l=>o.openedM=!0)}),e(m,{color:"white",flat:"",label:"Cadastre-se",class:"q-mx-sm hideonmobile",onClick:a[2]||(a[2]=l=>o.openedC=!0)}),e(m,{color:"white","text-color":"primary",label:"Entrar",class:"q-mx-sm",onClick:a[3]||(a[3]=l=>n.openURL("https://app.b15.com.br"))})]),_:1})])]),_:1}),e(R,{"show-if-above":"",modelValue:o.openedF,"onUpdate:modelValue":a[4]||(a[4]=l=>o.openedF=l),side:"right",bordered:""},{default:t(()=>[e(r,{ref:"carrinho",onCarrinhoAtualizado:n.carrinhoAtualizado,formasPagamento:o.formasPagamento,contatoPrincipal:o.contatoPrincipal,banco:n.banco},null,8,["onCarrinhoAtualizado","formasPagamento","contatoPrincipal","banco"])]),_:1},8,["modelValue"]),e(M,{style:{"padding-top":"0 !important"}},{default:t(()=>[e(N,{style:{"min-height":"auto"}},{default:t(()=>[s("div",$,[e(i,{onScroll:c.userHasScrolled},null,8,["onScroll"]),e(k,{contatoPrincipal:o.contatoPrincipal},null,8,["contatoPrincipal"]),s("div",ee,[s("strong",null,p(o.product.Descricao),1)]),s("div",oe,p(o.product.Marca),1),s("div",te,[s("div",se,[s("img",{src:o.product.Imagem,style:{width:"100%"}},null,8,le)]),s("div",ae,[s("pre",re,p(o.product.Observacao),1),e(g,{color:"transparent",class:"q-px-md q-my-lg hideonmobile"},{default:t(()=>[e(C,{class:"q-px-none"},{default:t(()=>[ne,s("div",ie,[de,s("strong",null,p(n.$filters.numero(o.product.ValorVenda,2)),1)]),ce]),_:1}),e(S,{class:"col-3 q-px-sm",style:{"margin-top":"-18px"}},{default:t(()=>[e(x,{min:"0",tipo:"quantidade","onUpdate:modelValue":[a[5]||(a[5]=l=>c.updateCart(o.product.CodigoItem,o.product.Descricao,o.qtd[o.product.CodigoItem],o.product.ValorVenda,o.product.Imagem)),a[6]||(a[6]=l=>o.qtd[o.product.CodigoItem]=l)],borderless:"",modelValue:o.qtd[o.product.CodigoItem]},null,8,["modelValue"]),e(E,null,{default:t(()=>[q("Quantidade")]),_:1})]),_:1})]),_:1}),s("div",me,[pe,ue,he,e(S,{class:"q-px-sm q-mt-xs"},{default:t(()=>[e(x,{min:"0",tipo:"quantidade",borderless:"",modelValue:o.qtd,"onUpdate:modelValue":[a[7]||(a[7]=l=>o.qtd=l),a[8]||(a[8]=l=>c.updateCart(o.item,o.qtd[o.item.CodigoItem]))]},null,8,["modelValue"]),e(E,null,{default:t(()=>[q("Quantidade")]),_:1})]),_:1})])])]),s("div",fe,[e(m,{color:"primary",dense:"",flat:"",icon:"mdi-shopping",round:"",size:"xl",disabled:""}),q(" Compre junto: ")]),s("div",ge,[(f(!0),w(U,null,z(o.upSell,l=>(f(),w("div",{class:"col-12 col-md-3 q-mb-md",key:l.id},[e(V,{class:"q-ma-sm bg-white full-height q-pa-none"},{default:t(()=>[l.Imagem?(f(),v(y,{key:0,class:"full-width q-pa-none self-start cursor-pointer arredondadoT"},{default:t(()=>[s("img",{src:l.Imagem,style:{width:"100%",margin:"0 auto",display:"block"},class:"arredondadoT"},null,8,_e)]),_:2},1024)):I("",!0),e(y,{class:"q-my-none q-py-xs full-width self-start cursor-pointer"},{default:t(()=>[q(p(l.Descricao),1)]),_:2},1024),e(y,{class:"full-width q-py-xs self-start text-right cursor-pointer"},{default:t(()=>[s("p",be,[s("strong",null,"R$ "+p(n.$filters.numero(l.ValorVenda,2)),1)])]),_:2},1024),e(L,{class:"self-end full-width q-py-none"},{default:t(()=>[e(H,{class:"full-width"}),e(g,{color:"none",class:"q-px-none"},{default:t(()=>[e(C,{class:"q-px-none text-left"},{default:t(()=>[e(x,{min:"0",tipo:"quantidade",borderless:"",modelValue:o.qtd[l.CodigoItem],"onUpdate:modelValue":[h=>o.qtd[l.CodigoItem]=h,h=>c.updateCart(l,o.qtd[l.CodigoItem])],dense:""},null,8,["modelValue","onUpdate:modelValue"]),e(E,null,{default:t(()=>[q("Quantidade")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),128))])]),e(D,{"contato-principal":o.contatoPrincipal,id:"mapaD"},null,8,["contato-principal"])]),_:1})]),_:1}),o.cartItems.length&&o.openedF===!1?(f(),v(O,{key:0,bordered:"",color:"primary"},{default:t(()=>[e(g,null,{default:t(()=>[e(C,null,{default:t(()=>[s("div",qe,[s("div",ye,p(o.cartItems.reduce((l,h)=>l+h.qtd,0))+" itens",1),s("div",Ce,"R$ "+p(n.$filters.numero(o.cartItems.reduce((l,h)=>l+h.qtd*h.price,0),2)),1)])]),_:1}),e(m,{label:"Finalizar",color:"white","text-color":"primary",onClick:a[9]||(a[9]=l=>o.openedF=!o.openedF),unelevated:""})]),_:1})]),_:1})):I("",!0),e(P,{modelValue:o.openedM,"onUpdate:modelValue":a[10]||(a[10]=l=>o.openedM=l)},{default:t(()=>[e(V,{class:"bg-light col-12 col-md-8 col-lg-6",style:{"min-width":"320px"}},{default:t(()=>[e(g,{class:"text-white bg-primary"},{default:t(()=>[F(e(m,{dense:"",flat:"",color:"white",icon:"arrow_back",round:""},null,512),[[Q]]),xe]),_:1}),e(y,{class:"layout-padding q-pa-md"},{default:t(()=>[e(_,{color:"tertiary",label:"Login"}),e(_,{color:"tertiary",label:"Senha"}),e(m,{color:"primary",label:"Enviar",class:"q-mt-sm"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(P,{modelValue:o.openedC,"onUpdate:modelValue":a[11]||(a[11]=l=>o.openedC=l)},{default:t(()=>[e(V,{class:"bg-light col-12 col-md-8 col-lg-6",style:{"min-width":"320px"}},{default:t(()=>[e(g,{class:"text-white bg-primary"},{default:t(()=>[F(e(m,{dense:"",flat:"",color:"white",icon:"arrow_back",round:""},null,512),[[Q]]),ve]),_:1}),e(y,{class:"layout-padding q-pa-md"},{default:t(()=>[e(_,{color:"tertiary",label:"Nome"}),e(_,{color:"tertiary",label:"E-mail"}),e(_,{color:"tertiary",label:"Telefone"}),e(_,{color:"tertiary",label:"CPF/CNPJP"}),e(m,{color:"primary",label:"Enviar",class:"q-mt-sm"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Fe=T(Y,[["render",we]]);export{Fe as default};
