import{_ as V,r as p,o as s,p as l,f as n,w as m,C as u,j as A,z as k,d as x,A as b,br as c,e as o,F as _,u as z,P as v}from"./index.a5f5d5a1.js";import{F as w}from"./FaturaCard.d0e54b55.js";import{G as y}from"./GChipsV2.2edfb238.js";import{n as q}from"./nfePrincipal.6e4f3cb0.js";import"./DocumentosFiscais.e7abeeeb.js";import"./Campo.e3115967.js";import"./compactarValidarNFe.0517b1bc.js";import"./obterItens.5c765a4f.js";import"./codigosANP.a6c1a264.js";import"./emitirNFe.35117289.js";import"./FaturaModal.50607e7f.js";import"./VendaCard.c1f57c8b.js";import"./ModalHistoricoStatus.ffd13738.js";import"./EnvelopeCard.dd3d7e1d.js";const I={components:{FaturaCard:w,GChipsV2:y,nfePrincipal:q},computed:{temFaturasAbertas(){return!!this.faturasAbertas.length},temFaturasFinalizadas(){return!!this.faturasFinalizadas.length},temFaturasCanceladas(){return!!this.faturasCanceladas.length},temRegistros(){return this.temFaturasAbertas||this.temFaturasFinalizadas||this.temFaturasCanceladas}},data(){return{contato:null,grupos:[],faturasAbertas:[],faturasFinalizadas:[],faturasCanceladas:[],totalFaturasAbertas:0,totalFaturasCanceladas:0,totalFaturasFinalizadas:0,filtro:{},tipoData:"",tiposData:[{label:"Emiss\xE3o",value:"emissao"},{label:"Finalizado",value:"finalizado"}],dataIni:null,dataFim:null,carregando:!1,faturasPorSecao:"10",faturasPorSecaoOpts:[{value:"5",label:"5"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"20",label:"20"},{value:"25",label:"25"},{value:"50",label:"50"}],faturaCardPagination:{maxPages:7,perPage:5,faturasAbertas:{page:1,min:1,max:1},faturasFinalizadas:{page:1,min:1,max:1},faturasCanceladas:{page:1,min:1,max:1}}}},methods:{async atualizar(){const i=$utils.logarIni("AtendimentoFatura");await $tryLoading(async()=>{await this.filtrar()},{mensagem:"Carregando faturas...",erro:"Ocorreu um erro ao consultar faturas",carregando:t=>this.carregando=t}),$utils.logarFim(i,1)},executar(i){this.atualizar()},fechouNFe(i){i&&$utils.emitter.emit("atualizarDocumentosFiscais")},async filtrar(){var P,a,r,C,g,h,f,F,e;let i,t,d;i=await $db.fatura.filtrar({where:{idContato:this.contato.id,periodo:{dataIni:this.dataIni,dataFim:this.dataFim},status:"aberta",grupos:this.grupos},page:this.faturaCardPagination.faturasAbertas.page,limit:5}),t=await $db.fatura.filtrar({where:{idContato:this.contato.id,periodo:{dataIni:this.dataIni,dataFim:this.dataFim},status:"finalizada",grupos:this.grupos},page:this.faturaCardPagination.faturasFinalizadas.page,limit:5}),d=await $db.fatura.filtrar({where:{idContato:this.contato.id,periodo:{dataIni:this.dataIni,dataFim:this.dataFim},status:"cancelada",grupos:this.grupos},page:this.faturaCardPagination.faturasCanceladas.page,limit:5}),this.faturaCardPagination.faturasAbertas.max=(P=i.totalPages)!=null?P:0,this.faturaCardPagination.faturasFinalizadas.max=(a=t.totalPages)!=null?a:0,this.faturaCardPagination.faturasCanceladas.max=(r=d.totalPages)!=null?r:0,this.faturasAbertas=(C=i.data)!=null?C:[],this.faturasFinalizadas=(g=t.data)!=null?g:[],this.faturasCanceladas=(h=d.data)!=null?h:[],this.totalFaturasAbertas=$filters.numero((f=i.somaTotalDocumento)!=null?f:0,2),this.totalFaturasFinalizadas=$filters.numero((F=t.somaTotalDocumento)!=null?F:0,2),this.totalFaturasCanceladas=$filters.numero((e=d.somaTotalDocumento)!=null?e:0,2)},async limparFiltro(){this.grupos=[],this.dataFim=new Date;const i=new Date;if(i.setFullYear(i.getFullYear()-2),this.dataIni=i,this.contato.codigoContato){const t=await $db.configuracoes.leValorNumerico("venda.codigoconsumidor");this.contato.codigoContato===t&&(this.dataIni=this.dataFim)}}},watch:{"$route.params.id"(){const i=this.$route.params.id;!i||$db.contato.le({id:i}).then(t=>{this.contato=t,this.limparFiltro().then(()=>{this.atualizar()})})}},mounted(){$utils.emitter.off("atualizarAtendimentoFatura"),$utils.emitter.on("atualizarAtendimentoFatura",this.atualizar);const i=this.$route.params.id;!i||$db.contato.le({id:i}).then(t=>{this.contato=t,this.limparFiltro().then(()=>{this.atualizar()}).catch(d=>{$q.notifyError("Ops! Ocorreu um erro",d)})}).catch(t=>{$q.notifyError("Ops! Ocorreu um erro",t)})},unmounted(){$utils.emitter.off("atualizarAtendimentoFatura")}},E={class:"AtendimentoFatura q-pb-md"},U={class:"col-12 col-md-6"},B={class:"col"},D=u("div",{class:"col-auto",style:{"align-items":"center",display:"flex"}},[u("label",null,"at\xE9")],-1),j={class:"col"},N={key:0,class:"row justify-end q-mb-md"},R={class:"row"},O={key:1,class:"row justify-end q-mb-md"},T={key:0,class:"row justify-end q-mb-md"},Q={class:"row"},G={key:1,class:"row justify-end q-mb-md"},L={key:0,class:"row justify-end q-mb-md"},S={class:"row"},Y={key:1,class:"row justify-end q-mb-md"},H={key:1,class:"q-pa-lg text-center"},J=u("p",null,[u("small",null,"Registros n\xE3o encontrados")],-1),K=[J];function M(i,t,d,P,a,r){const C=p("GChipsV2"),g=p("campo"),h=p("row"),f=p("fatura-card"),F=p("nfePrincipal");return s(),l("div",E,[n(k,{class:"q-pa-sm q-mx-sm no-shadow"},{default:m(()=>[n(h,{class:"items-center q-col-gutter-md"},{default:m(()=>[u("div",U,[n(C,{modelValue:a.grupos,"onUpdate:modelValue":[t[0]||(t[0]=e=>a.grupos=e),r.filtrar],class:"q-px-none",placeholder:"Filtre por C\xF3digo, N\xFAmero..."},{prepend:m(()=>[n(A,{name:"mdi-filter"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),u("div",B,[n(g,{modelValue:a.dataIni,"onUpdate:modelValue":t[1]||(t[1]=e=>a.dataIni=e),tipo:"data",onBlur:r.atualizar,dense:"",outlined:""},null,8,["modelValue","onBlur"])]),D,u("div",j,[n(g,{modelValue:a.dataFim,"onUpdate:modelValue":t[2]||(t[2]=e=>a.dataFim=e),tipo:"data",onBlur:r.atualizar,dense:"",outlined:""},null,8,["modelValue","onBlur"])])]),_:1})]),_:1}),!a.carregando&&r.temRegistros?(s(),x(v,{key:0,class:"no-border"},{default:m(()=>[r.temFaturasAbertas?(s(),x(b,{key:0,"default-opened":"",label:`Abertas (Total R$ ${a.totalFaturasAbertas})`,group:"faturasAbertas"},{default:m(()=>[a.faturaCardPagination.faturasAbertas.max>1?(s(),l("div",N,[n(c,{modelValue:a.faturaCardPagination.faturasAbertas.page,"onUpdate:modelValue":t[3]||(t[3]=e=>a.faturaCardPagination.faturasAbertas.page=e),min:a.faturaCardPagination.faturasAbertas.min,max:a.faturaCardPagination.faturasAbertas.max,ellipses:"","max-pages":a.faturaCardPagination.maxPages,class:"float-right",onClick:r.filtrar},null,8,["modelValue","min","max","max-pages","onClick"])])):o("",!0),u("div",R,[(s(!0),l(_,null,z(a.faturasAbertas,e=>(s(),l("div",{class:"q-px-sm full-width",key:e.id},[n(f,{id:e.id,onExecutar:r.executar,class:"q-mb-md"},null,8,["id","onExecutar"])]))),128))]),a.faturaCardPagination.faturasAbertas.max>1?(s(),l("div",O,[n(c,{modelValue:a.faturaCardPagination.faturasAbertas.page,"onUpdate:modelValue":t[4]||(t[4]=e=>a.faturaCardPagination.faturasAbertas.page=e),min:a.faturaCardPagination.faturasAbertas.min,max:a.faturaCardPagination.faturasAbertas.max,ellipses:"","max-pages":a.faturaCardPagination.maxPages,class:"float-right",onClick:r.filtrar},null,8,["modelValue","min","max","max-pages","onClick"])])):o("",!0)]),_:1},8,["label"])):o("",!0),r.temFaturasFinalizadas?(s(),x(b,{key:1,"default-opened":"",label:`Finalizadas (Total R$ ${a.totalFaturasFinalizadas})`,group:"faturasFinalizadas"},{default:m(()=>[a.faturaCardPagination.faturasFinalizadas.max>1?(s(),l("div",T,[n(c,{modelValue:a.faturaCardPagination.faturasFinalizadas.page,"onUpdate:modelValue":t[5]||(t[5]=e=>a.faturaCardPagination.faturasFinalizadas.page=e),min:a.faturaCardPagination.faturasFinalizadas.min,max:a.faturaCardPagination.faturasFinalizadas.max,ellipses:"","max-pages":a.faturaCardPagination.maxPages,class:"float-right",onClick:r.filtrar},null,8,["modelValue","min","max","max-pages","onClick"])])):o("",!0),u("div",Q,[(s(!0),l(_,null,z(a.faturasFinalizadas,e=>(s(),l("div",{class:"q-px-sm full-width",key:e.id},[n(f,{id:e.id,onExecutar:r.executar,class:"q-mb-md"},null,8,["id","onExecutar"])]))),128))]),a.faturaCardPagination.faturasFinalizadas.max>1?(s(),l("div",G,[n(c,{modelValue:a.faturaCardPagination.faturasFinalizadas.page,"onUpdate:modelValue":t[6]||(t[6]=e=>a.faturaCardPagination.faturasFinalizadas.page=e),min:a.faturaCardPagination.faturasFinalizadas.min,max:a.faturaCardPagination.faturasFinalizadas.max,ellipses:"","max-pages":a.faturaCardPagination.maxPages,class:"float-right",onClick:r.filtrar},null,8,["modelValue","min","max","max-pages","onClick"])])):o("",!0)]),_:1},8,["label"])):o("",!0),r.temFaturasCanceladas?(s(),x(b,{key:2,"default-opened":"",label:`Canceladas (Total R$ ${a.totalFaturasCanceladas})`,group:"faturasCanceladas"},{default:m(()=>[a.faturaCardPagination.faturasCanceladas.max>1?(s(),l("div",L,[n(c,{modelValue:a.faturaCardPagination.faturasCanceladas.page,"onUpdate:modelValue":t[7]||(t[7]=e=>a.faturaCardPagination.faturasCanceladas.page=e),min:a.faturaCardPagination.faturasCanceladas.min,max:a.faturaCardPagination.faturasCanceladas.max,ellipses:"","max-pages":a.faturaCardPagination.maxPages,class:"float-right",onClick:r.filtrar},null,8,["modelValue","min","max","max-pages","onClick"])])):o("",!0),u("div",S,[(s(!0),l(_,null,z(a.faturasCanceladas,e=>(s(),l("div",{class:"q-px-sm full-width",key:e.id},[n(f,{id:e.id,onExecutar:r.executar,class:"q-mb-md"},null,8,["id","onExecutar"])]))),128))]),a.faturaCardPagination.faturasCanceladas.max>1?(s(),l("div",Y,[n(c,{modelValue:a.faturaCardPagination.faturasCanceladas.page,"onUpdate:modelValue":t[8]||(t[8]=e=>a.faturaCardPagination.faturasCanceladas.page=e),min:a.faturaCardPagination.faturasCanceladas.min,max:a.faturaCardPagination.faturasCanceladas.max,ellipses:"","max-pages":a.faturaCardPagination.maxPages,class:"float-right",onClick:r.filtrar},null,8,["modelValue","min","max","max-pages","onClick"])])):o("",!0)]),_:1},8,["label"])):o("",!0)]),_:1})):o("",!0),!a.carregando&&!r.temRegistros?(s(),l("div",H,K)):o("",!0),n(F,{onFechar:r.fechouNFe},null,8,["onFechar"])])}var da=V(I,[["render",M]]);export{da as default};
