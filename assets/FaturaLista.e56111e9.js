import{_ as I,r as b,o as f,p as v,f as n,w as g,d as A,e as T,H as U,P as _,F as B,u as M,b5 as j}from"./index.e29ebbcd.js";import"./xlsx.ba54a6c1.js";import{L as N}from"./Lista.68a2ff82.js";import{F as P}from"./FaturaCard.0a58a988.js";import{F as H}from"./FaturaModal.1e46d998.js";import"./emitirNFe.35117289.js";import"./nfePrincipal.7214524e.js";import"./compactarValidarNFe.72c3d1e0.js";import"./obterItens.e9ed677f.js";import"./codigosANP.a6c1a264.js";import"./DocumentosFiscais.7bd8cf60.js";import"./Campo.fcab1b12.js";import"./ModalHistoricoStatus.a9efd79e.js";import"./VendaCard.c47e3bdc.js";import"./EnvelopeCard.ad698e85.js";const Q={components:{Lista:N,FaturaCard:P,FaturaModal:H},data(){return{carregar:!1,itens:[],usuario:"",permissao:{vendedoresDigitadores:!1,outrasEmpresas:!1},lista:[],mostrar:{barraTopo:!0,toolbarTitulo:!0,icone:"request_quote",titulo:"Faturas",buscar:!0,filtroAvancado:!0,btnAjuda:!0,btnAtualizar:!0,btnNovo:!1,toolbarAcoes:!0,checkBox:!1,btnRemover:!1,btnRestaurar:!1,centralizaTabs:!1,btnDetalhes:!0,btnExportaXLS:!1,btnMenuMais:!1,toolbarAdicao:!1,bannerMsg:""},busca:"",detalhesVisivel:!1,tabSelecionada:{valor:""},tabs:[{valor:"Aberta",rotulo:"Abertas"},{valor:"Finalizada",rotulo:"Finalizado"},{valor:"",rotulo:"Todas"}],filtrosOriginal:{},filtros:{cliente:null,idEmpresa:null,idContatoVendedor:null,idContatoDigitador:null,statusEnvio:null,tipoData:"Data Emiss\xE3o",data:{ini:"",fim:""},valorTotal:0},empresaOpcoes:[],vendedoresOpcoes:[],opcoesEnvio:[{value:"Enviados",label:"Enviados"},{value:"N\xE3o Enviados",label:"N\xE3o Enviados"}],opcoesData:[{value:"Data Emiss\xE3o",label:"Data Emiss\xE3o"},{value:"Data Finaliza\xE7\xE3o",label:"Data Finaliza\xE7\xE3o"}],paginacao:{atual:1,maximo:1,total:1,limite:25}}},methods:{async atualizar(o){var t,e,l,a,m,r,c,p,h,s,V,D,E,F,C,y,q,w,k,z,O,S,x;try{$q.loading.show(),this.carregar=!1,this.itens=[];let{buscarDadosRecentes:L}=o!=null?o:{},i={},u={};L&&(i=await $utils.localIDB.getItem({objectStore:"dadosRecentes",id:"FaturaLista_"+((t=this.usuario)==null?void 0:t.id)}),i!=null&&i._id&&(this.tabSelecionada.valor=i==null?void 0:i.tabSelecionada,this.busca=(i==null?void 0:i.busca)||"",this.filtros={cliente:((e=i==null?void 0:i.filtros)==null?void 0:e.cliente)||null,idEmpresa:((l=i==null?void 0:i.filtros)==null?void 0:l.idEmpresa)||null,idContatoVendedor:((a=i==null?void 0:i.filtros)==null?void 0:a.idContatoVendedor)||null,idContatoDigitador:((m=i==null?void 0:i.filtros)==null?void 0:m.idContatoDigitador)||null,statusEnvio:((r=i==null?void 0:i.filtros)==null?void 0:r.statusEnvio)||null,tipoData:((c=i==null?void 0:i.filtros)==null?void 0:c.tipoData)||"Data Emiss\xE3o",data:{ini:((h=(p=i==null?void 0:i.filtros)==null?void 0:p.data)==null?void 0:h.ini)||"",fim:((V=(s=i==null?void 0:i.filtros)==null?void 0:s.data)==null?void 0:V.fim)||""},valorTotal:((D=i==null?void 0:i.filtros)==null?void 0:D.valorTotal)||0},this.compareObject(this.filtrosOriginal,this.filtros)&&(this.$refs.faturaLista.filtros=!0))),this.busca=((E=this.busca)==null?void 0:E.trim())||"",this.filtros.termoBusca=this.busca,this.filtros.cliente=(C=(F=this.filtros)==null?void 0:F.cliente)==null?void 0:C.trim(),this.filtros=$utils.eliminarVazios(this.filtros),this.filtros.status=this.tabSelecionada.valor,u=$utils.clonarV2(this.filtros),this.filtros.tipoData==="Data Emiss\xE3o"&&(u.periodo={dataIni:(q=(y=this.filtros)==null?void 0:y.data)==null?void 0:q.ini,dataFim:(k=(w=this.filtros)==null?void 0:w.data)==null?void 0:k.fim}),this.filtros.tipoData==="Data Finaliza\xE7\xE3o"&&(u.finalizado={dataIni:(O=(z=this.filtros)==null?void 0:z.data)==null?void 0:O.ini,dataFim:(x=(S=this.filtros)==null?void 0:S.data)==null?void 0:x.fim}),this.permissao.vendedoresDigitadores||(u.idContatoVendedor=this.usuario.id),delete u.tipoData,delete u.data,/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(this.busca)&&(delete u.termoBusca,this.tabSelecionada.valor="",this.filtros.status="",u.status="",u.idFatura=this.busca);const d=await $db.fatura.leListaCompleta({filtros:u,page:this.paginacao.atual,limit:this.paginacao.limite,sort:["dataHoraFinalizado","dataHoraEmissao"],dir:["desc","desc"]});this.lista=d==null?void 0:d.data,this.paginacao.total=d==null?void 0:d.total,this.paginacao.maximo=d==null?void 0:d.totalPages,i={_id:"FaturaLista_"+this.usuario.id,tabSelecionada:this.tabSelecionada.valor,busca:this.filtros.termoBusca,filtros:$utils.clonarV2(this.filtros)},await $utils.localIDB.setItem({objectStore:"dadosRecentes",data:i})}catch{$q.notify({message:"Erro ao carregar faturas.",type:"negative"}),$q.loading.hide()}finally{if(this.lista.length===0){this.carregar=!0,$q.loading.hide();return}this.carregar||setTimeout(async()=>{this.carregar=!0,$q.loading.hide()},2e3)}},async executar(o){if(this.$refs.faturaModal.venda.status){for(const t of this.tabs)if(t.valor.indexOf(this.$refs.faturaModal.venda.status)!==-1){this.tabSelecionada.valor=t.valor;break}this.$refs.faturaModal.venda.status==="Or\xE7amento"&&(this.filtros.data="Data Emiss\xE3o")}await this.atualizar()},detalhesClick(){this.detalhesVisivel=!this.detalhesVisivel,this.lista.forEach(o=>{this.$refs[o.id][0].detalhesVisivel=this.detalhesVisivel})},async limparFiltrosClick(){this.filtros=$utils.clonar(this.filtrosOriginal),await this.atualizar()},async configurarPermissao(){this.permissao={vendedoresDigitadores:await $db.permissao.objeto("Diretiva_RelatorioVenda_VerTodos"),outrasEmpresas:await $db.permissao.objeto("Diretiva_Venda/Fatura_OutrasLojas_VerTodos")}},async configurarVendedores(){const o=(await $db.contato.ler({filtros:{ativo:!0,vendedores:!0}})).data;o==null||o.sort((t,e)=>{var l;return(l=t==null?void 0:t.nome)==null?void 0:l.localeCompare(e==null?void 0:e.nome)}),o.forEach(t=>{this.vendedoresOpcoes.push({label:t.nome,value:t.id})})},async configurarEmpresas(){const o=[];let t=[];if(!this.permissao.outrasEmpresas){t=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data;for(const e of t)o.push({label:e.nome,value:e.id})}if(this.permissao.outrasEmpresas){t=await $db.empresa.ler({filtro:{ativo:!0}});for(const e of t)o.push({label:e.nome,value:e.idContato})}this.empresaOpcoes=o==null?void 0:o.sort((e,l)=>{var a;return(a=e==null?void 0:e.label)==null?void 0:a.localeCompare(l==null?void 0:l.label)})},async abrirItem(o){this.$router.replace({params:{id:o}}).finally(()=>{this.$refs.faturaModal.mostrar({id:o})})},compareObject(o,t,e=[]){const l=Object.keys(o);for(const a of l)if(!e.includes(a)){if(typeof o[a]=="object"&&o[a]!==null){if(!this.compareObject(o[a],t[a],e))continue;return!0}else if(o[a]!==t[a])return!0}return!1},async carregou(o){if(this.itens.push({id:o}),this.itens.length>=25||this.itens.length===this.lista.length){this.carregar=!0,$q.loading.hide();return}}},async created(){this.usuario=JSON.parse(localStorage.getItem("usuario")),this.filtrosOriginal=$utils.clonar(this.filtros),await this.configurarPermissao(),await this.configurarVendedores(),await this.configurarEmpresas(),this.$route.params.id&&this.$route.params.id.length?(this.abrirItem(this.$route.params.id),this.busca=this.$route.params.id,await this.atualizar()):await this.atualizar({buscarDadosRecentes:!0})}},J={id:"FaturaLista"};function X(o,t,e,l,a,m){const r=b("campo"),c=b("FaturaCard"),p=b("Lista"),h=b("fatura-modal");return f(),v("div",J,[n(p,{ref:"faturaLista",busca:a.busca,"onUpdate:busca":t[10]||(t[10]=s=>a.busca=s),onAtualizar:m.atualizar,onLimparFiltrosClick:m.limparFiltrosClick,onDetalhesClick:m.detalhesClick,lista:a.lista,tabSelecionada:a.tabSelecionada,tabs:a.tabs,paginacao:a.paginacao,mostrar:a.mostrar},{filtroCampos:g(()=>[n(r,{modelValue:a.filtros.cliente,"onUpdate:modelValue":t[0]||(t[0]=s=>a.filtros.cliente=s),debounce:500,before:[{icon:"search"}],dense:"",rotulo:"Por cliente ou respons\xE1vel",class:"col-12 q-mt-md"},null,8,["modelValue"]),n(r,{modelValue:a.filtros.idEmpresa,"onUpdate:modelValue":t[1]||(t[1]=s=>a.filtros.idEmpresa=s),options:a.empresaOpcoes,clearable:"",dense:"",tipo:"seletor",rotulo:"Por empresa",class:"col-12 q-mt-lg"},null,8,["modelValue","options"]),a.permissao.vendedoresDigitadores?(f(),A(r,{key:0,modelValue:a.filtros.idContatoVendedor,"onUpdate:modelValue":t[2]||(t[2]=s=>a.filtros.idContatoVendedor=s),options:a.vendedoresOpcoes,clearable:"",dense:"",tipo:"seletor",rotulo:"Vendedor",class:"col-12 q-mt-lg"},null,8,["modelValue","options"])):T("",!0),a.permissao.vendedoresDigitadores?(f(),A(r,{key:1,modelValue:a.filtros.idContatoDigitador,"onUpdate:modelValue":t[3]||(t[3]=s=>a.filtros.idContatoDigitador=s),options:a.vendedoresOpcoes,clearable:"",dense:"",tipo:"seletor",rotulo:"Digitador",class:"col-12 q-mt-lg"},null,8,["modelValue","options"])):T("",!0),n(r,{modelValue:a.filtros.statusEnvio,"onUpdate:modelValue":t[4]||(t[4]=s=>a.filtros.statusEnvio=s),options:a.opcoesEnvio,clearable:"",dense:"",tipo:"seletor",rotulo:"Status Envio",class:"col-12 q-mt-lg"},null,8,["modelValue","options"]),n(r,{modelValue:a.filtros.tipoData,"onUpdate:modelValue":t[5]||(t[5]=s=>a.filtros.tipoData=s),options:a.opcoesData,tipo:"seletor",dense:"",rotulo:"Selecionar data para filtro",class:"col-12 q-mt-xl"},null,8,["modelValue","options"]),n(r,{modelValue:a.filtros.data.ini,"onUpdate:modelValue":t[6]||(t[6]=s=>a.filtros.data.ini=s),clearable:"",dense:"",tipo:"data",rotulo:"Emiss\xE3o de",class:"col-12 q-mt-md"},null,8,["modelValue"]),n(r,{modelValue:a.filtros.data.fim,"onUpdate:modelValue":t[7]||(t[7]=s=>a.filtros.data.fim=s),clearable:"",dense:"",tipo:"data",rotulo:"Emiss\xE3o at\xE9",class:"col-12 q-mt-xs"},null,8,["modelValue"]),n(r,{modelValue:a.filtros.valorTotal,"onUpdate:modelValue":t[8]||(t[8]=s=>a.filtros.valorTotal=s),debounce:500,dense:"",tipo:"decimal",min:"0",decimals:"4",zerosDireita:"2",rotulo:"Valor total maior que",class:"col-12 q-mt-xl"},null,8,["modelValue"]),n(r,{modelValue:a.paginacao.limite,"onUpdate:modelValue":t[9]||(t[9]=s=>a.paginacao.limite=s),tipo:"quantidade",dense:"",rotulo:"Quantidade por p\xE1gina",min:"1",class:"col-12 q-mt-xl"},null,8,["modelValue"])]),itemLista:g(()=>[U(n(_,{bordered:"",class:"bg-white q-mb-xs rounded-borders"},{default:g(()=>[(f(!0),v(B,null,M(a.lista,s=>(f(),v("div",{key:s.id,class:"itemHover"},[n(c,{onExecutar:m.executar,onCarregou:m.carregou,ref_for:!0,ref:s.id,id:s.id,layout:"lista"},null,8,["onExecutar","onCarregou","id"])]))),128))]),_:1},512),[[j,a.carregar]])]),_:1},8,["busca","onAtualizar","onLimparFiltrosClick","onDetalhesClick","lista","tabSelecionada","tabs","paginacao","mostrar"]),n(h,{ref:"faturaModal"},null,512)])}var da=I(Q,[["render",X]]);export{da as default};
