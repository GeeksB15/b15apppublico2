import{_,r as v,o as m,p as g,f as d,w as V,d as T,e as U,H as B,P as M,F as P,u as j,b5 as N}from"./index.6fe972ec.js";import"./xlsx.828573fe.js";import{L as H}from"./Lista.3d96a066.js";import{F as Q}from"./FaturaCard.2b12998f.js";import{F as J}from"./FaturaModal.6e7b8deb.js";import"./emitirNFe.35117289.js";import"./nfePrincipal.9feb692d.js";import"./compactarValidarNFe.4776950b.js";import"./obterItens.b31a4ccb.js";import"./codigosANP.a6c1a264.js";import"./DocumentosFiscais.368fb21e.js";import"./Campo.4bde3163.js";import"./ModalHistoricoStatus.6e97fca7.js";import"./VendaCard.506c3a78.js";import"./EnvelopeCard.bf9763f4.js";const X={components:{Lista:H,FaturaCard:Q,FaturaModal:J},data(){return{usuario:"",permissao:{vendedoresDigitadores:!1,outrasEmpresas:!1},carregar:!1,listaLayout:[],lista:[],mostrar:{header:!0,barraTopo:!0,toolbarTitulo:!0,icone:"request_quote",titulo:"Faturas",buscar:!0,filtroAvancado:!0,btnAjuda:!0,btnAtualizar:!0,btnNovo:!1,toolbarAcoes:!0,checkBox:!1,btnRemover:!1,btnRestaurar:!1,centralizaTabs:!1,btnDetalhes:!0,btnExportaXLS:!1,btnMenuMais:!1,toolbarAdicao:!1,bannerMsg:""},busca:"",filtrosOriginal:{},filtros:{cliente:null,idEmpresa:null,idContatoVendedor:null,idContatoDigitador:null,statusEnvio:null,tipoData:"Data Emiss\xE3o",data:{ini:"",fim:""},valorTotal:0},empresaOpcoes:[],vendedoresOpcoes:[],opcoesEnvio:[{value:"Enviados",label:"Enviados"},{value:"N\xE3o Enviados",label:"N\xE3o Enviados"}],opcoesData:[{value:"Data Emiss\xE3o",label:"Data Emiss\xE3o"},{value:"Data Finaliza\xE7\xE3o",label:"Data Finaliza\xE7\xE3o"}],tabSelecionada:{valor:""},tabs:[{valor:"Aberta",rotulo:"Abertas"},{valor:"Finalizada",rotulo:"Finalizado"},{valor:"",rotulo:"Todas"}],detalhesVisivel:!1,paginacao:{atual:1,maximo:1,total:1,limite:25}}},methods:{async atualizar(o){var t,e,l,a,r,n,c,p,h,s,D,E,L,y,C,F,q,S,w,O,k,z,x;try{$q.loading.show(),this.carregar=!1,this.qtdeItensCarregados=0,this.lista=[],this.tabSelecionadaAnt!==this.tabSelecionada.valor&&(this.paginacao.atual=1),this.tabSelecionadaAnt=this.tabSelecionada.valor;let{buscarDadosRecentes:A}=o!=null?o:{},i={},f={};A&&(i=await $utils.localIDB.getItem({objectStore:"dadosRecentes",id:"FaturaLista_"+((t=this.usuario)==null?void 0:t.id)}),i!=null&&i._id&&(this.tabSelecionada.valor=i==null?void 0:i.tabSelecionada,this.busca=(i==null?void 0:i.busca)||"",this.filtros={cliente:((e=i==null?void 0:i.filtros)==null?void 0:e.cliente)||null,idEmpresa:((l=i==null?void 0:i.filtros)==null?void 0:l.idEmpresa)||null,idContatoVendedor:((a=i==null?void 0:i.filtros)==null?void 0:a.idContatoVendedor)||null,idContatoDigitador:((r=i==null?void 0:i.filtros)==null?void 0:r.idContatoDigitador)||null,statusEnvio:((n=i==null?void 0:i.filtros)==null?void 0:n.statusEnvio)||null,tipoData:((c=i==null?void 0:i.filtros)==null?void 0:c.tipoData)||"Data Emiss\xE3o",data:{ini:((h=(p=i==null?void 0:i.filtros)==null?void 0:p.data)==null?void 0:h.ini)||"",fim:((D=(s=i==null?void 0:i.filtros)==null?void 0:s.data)==null?void 0:D.fim)||""},valorTotal:((E=i==null?void 0:i.filtros)==null?void 0:E.valorTotal)||0},this.compareObject(this.filtrosOriginal,this.filtros)&&(this.$refs.faturaLista.filtros=!0))),this.busca=((L=this.busca)==null?void 0:L.trim())||"",this.filtros.termoBusca=this.busca,this.filtros.cliente=(C=(y=this.filtros)==null?void 0:y.cliente)==null?void 0:C.trim(),this.filtros=$utils.eliminarVazios(this.filtros),this.filtros.status=this.tabSelecionada.valor,f=$utils.clonarV2(this.filtros),this.filtros.tipoData==="Data Emiss\xE3o"&&(f.periodo={dataIni:(q=(F=this.filtros)==null?void 0:F.data)==null?void 0:q.ini,dataFim:(w=(S=this.filtros)==null?void 0:S.data)==null?void 0:w.fim}),this.filtros.tipoData==="Data Finaliza\xE7\xE3o"&&(f.finalizado={dataIni:(k=(O=this.filtros)==null?void 0:O.data)==null?void 0:k.ini,dataFim:(x=(z=this.filtros)==null?void 0:z.data)==null?void 0:x.fim}),this.permissao.vendedoresDigitadores||(f.idContatoVendedor=this.usuario.id),delete f.tipoData,delete f.data,/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(this.busca)&&(delete f.termoBusca,this.tabSelecionada.valor="",this.paginacao.atual=1,this.filtros.status="",f.status="",f.idFatura=this.busca);const u=await $db.fatura.leListaCompleta({filtros:f,page:this.paginacao.atual,limit:this.paginacao.limite,sort:["dataHoraFinalizado","dataHoraEmissao"],dir:["desc","desc"]});let I=!0;for(const b of u==null?void 0:u.data)this.listaLayout.hasOwnProperty(b.id)||(this.listaLayout[b.id]={detalhes:!1}),this.listaLayout[b.id].detalhes||(I=!1);this.$refs.faturaLista.detalhes=I,this.lista=u==null?void 0:u.data,this.paginacao.total=u==null?void 0:u.total,this.paginacao.maximo=u==null?void 0:u.totalPages,i={_id:"FaturaLista_"+this.usuario.id,tabSelecionada:this.tabSelecionada.valor,busca:this.filtros.termoBusca,filtros:$utils.clonarV2(this.filtros)},await $utils.localIDB.setItem({objectStore:"dadosRecentes",data:i})}catch{$q.notify({message:"Erro ao carregar faturas.",type:"negative"}),$q.loading.hide()}finally{this.lista.length===0&&$q.loading.hide()}},async executar(o){if(this.$refs.faturaModal.venda.status){for(const t of this.tabs)if(t.valor.indexOf(this.$refs.faturaModal.venda.status)!==-1){this.tabSelecionada.valor=t.valor;break}this.$refs.faturaModal.venda.status==="Or\xE7amento"&&(this.filtros.data="Data Emiss\xE3o")}await this.atualizar()},detalhesClick(){this.detalhesVisivel=!this.detalhesVisivel,this.lista.forEach(o=>{this.$refs[o.id][0].detalhesVisivel=this.detalhesVisivel,this.listaLayout[o.id].detalhes=this.detalhesVisivel})},verificarListaLayout(o){let{id:t,acao:e,estado:l}=o!=null?o:{};if(e="detalhes"){let a=!0;t&&(this.listaLayout[t].detalhes=l!=null?l:!this.listaLayout[t].detalhes);for(const r of this.lista)this.listaLayout[r.id].detalhes&&(this.$refs[r.id][0].detalhesVisivel=!0),this.listaLayout[r.id].detalhes||(a=!1);this.detalhesVisivel=a,this.$refs.faturaLista.detalhes=a}},async limparFiltrosClick(){this.filtros=$utils.clonar(this.filtrosOriginal),await this.atualizar()},async configurarPermissao(){this.permissao={vendedoresDigitadores:await $db.permissao.objeto("Diretiva_RelatorioVenda_VerTodos"),outrasEmpresas:await $db.permissao.objeto("Diretiva_Venda/Fatura_OutrasLojas_VerTodos")}},async configurarVendedores(){const o=(await $db.contato.ler({filtros:{ativo:!0,vendedores:!0}})).data;o==null||o.sort((t,e)=>{var l;return(l=t==null?void 0:t.nome)==null?void 0:l.localeCompare(e==null?void 0:e.nome)}),o.forEach(t=>{this.vendedoresOpcoes.push({label:t.nome,value:t.id})})},async configurarEmpresas(){const o=[];let t=[];if(!this.permissao.outrasEmpresas){t=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data;for(const e of t)o.push({label:e.nome,value:e.id})}if(this.permissao.outrasEmpresas){t=await $db.empresa.ler({filtro:{ativo:!0}});for(const e of t)o.push({label:e.nome,value:e.idContato})}this.empresaOpcoes=o==null?void 0:o.sort((e,l)=>{var a;return(a=e==null?void 0:e.label)==null?void 0:a.localeCompare(l==null?void 0:l.label)})},async abrirItem(o){this.$router.replace({params:{id:o}}).finally(()=>{this.$refs.faturaModal.mostrar({id:o})})},compareObject(o,t,e=[]){const l=Object.keys(o);for(const a of l)if(!e.includes(a)){if(typeof o[a]=="object"&&o[a]!==null){if(!this.compareObject(o[a],t[a],e))continue;return!0}else if(o[a]!==t[a])return!0}return!1},carregou(){this.qtdeItensCarregados=this.qtdeItensCarregados+1,this.qtdeItensCarregados===this.lista.length&&(this.carregar=!0,this.verificarListaLayout({acao:"detalhes"}),$q.loading.hide())}},async created(){this.usuario=JSON.parse(localStorage.getItem("usuario")),this.filtrosOriginal=$utils.clonar(this.filtros),await this.configurarPermissao(),await this.configurarVendedores(),await this.configurarEmpresas(),this.$route.params.id&&this.$route.params.id.length?(this.abrirItem(this.$route.params.id),this.busca=this.$route.params.id,await this.atualizar()):await this.atualizar({buscarDadosRecentes:!0})}},G={id:"FaturaLista"};function K(o,t,e,l,a,r){const n=v("campo"),c=v("FaturaCard"),p=v("Lista"),h=v("fatura-modal");return m(),g("div",G,[d(p,{ref:"faturaLista",busca:a.busca,"onUpdate:busca":t[10]||(t[10]=s=>a.busca=s),onAtualizar:r.atualizar,onLimparFiltrosClick:r.limparFiltrosClick,onDetalhesClick:r.detalhesClick,lista:a.lista,tabSelecionada:a.tabSelecionada,tabs:a.tabs,paginacao:a.paginacao,mostrar:a.mostrar},{filtroCampos:V(()=>[d(n,{modelValue:a.filtros.cliente,"onUpdate:modelValue":t[0]||(t[0]=s=>a.filtros.cliente=s),debounce:500,before:[{icon:"search"}],dense:"",rotulo:"Por cliente ou respons\xE1vel",class:"col-12 q-mt-md"},null,8,["modelValue"]),d(n,{modelValue:a.filtros.idEmpresa,"onUpdate:modelValue":t[1]||(t[1]=s=>a.filtros.idEmpresa=s),options:a.empresaOpcoes,clearable:"",dense:"",tipo:"seletor",rotulo:"Por empresa",class:"col-12 q-mt-lg"},null,8,["modelValue","options"]),a.permissao.vendedoresDigitadores?(m(),T(n,{key:0,modelValue:a.filtros.idContatoVendedor,"onUpdate:modelValue":t[2]||(t[2]=s=>a.filtros.idContatoVendedor=s),options:a.vendedoresOpcoes,clearable:"",dense:"",tipo:"seletor",rotulo:"Vendedor",class:"col-12 q-mt-lg"},null,8,["modelValue","options"])):U("",!0),a.permissao.vendedoresDigitadores?(m(),T(n,{key:1,modelValue:a.filtros.idContatoDigitador,"onUpdate:modelValue":t[3]||(t[3]=s=>a.filtros.idContatoDigitador=s),options:a.vendedoresOpcoes,clearable:"",dense:"",tipo:"seletor",rotulo:"Digitador",class:"col-12 q-mt-lg"},null,8,["modelValue","options"])):U("",!0),d(n,{modelValue:a.filtros.statusEnvio,"onUpdate:modelValue":t[4]||(t[4]=s=>a.filtros.statusEnvio=s),options:a.opcoesEnvio,clearable:"",dense:"",tipo:"seletor",rotulo:"Status Envio",class:"col-12 q-mt-lg"},null,8,["modelValue","options"]),d(n,{modelValue:a.filtros.tipoData,"onUpdate:modelValue":t[5]||(t[5]=s=>a.filtros.tipoData=s),options:a.opcoesData,tipo:"seletor",dense:"",rotulo:"Selecionar data para filtro",class:"col-12 q-mt-xl"},null,8,["modelValue","options"]),d(n,{modelValue:a.filtros.data.ini,"onUpdate:modelValue":t[6]||(t[6]=s=>a.filtros.data.ini=s),clearable:"",dense:"",tipo:"data",rotulo:"Emiss\xE3o de",class:"col-12 q-mt-md"},null,8,["modelValue"]),d(n,{modelValue:a.filtros.data.fim,"onUpdate:modelValue":t[7]||(t[7]=s=>a.filtros.data.fim=s),clearable:"",dense:"",tipo:"data",rotulo:"Emiss\xE3o at\xE9",class:"col-12 q-mt-xs"},null,8,["modelValue"]),d(n,{modelValue:a.filtros.valorTotal,"onUpdate:modelValue":t[8]||(t[8]=s=>a.filtros.valorTotal=s),debounce:500,dense:"",tipo:"decimal",min:"0",decimals:"4",zerosDireita:"2",rotulo:"Valor total maior que",class:"col-12 q-mt-xl"},null,8,["modelValue"]),d(n,{modelValue:a.paginacao.limite,"onUpdate:modelValue":t[9]||(t[9]=s=>a.paginacao.limite=s),tipo:"quantidade",dense:"",rotulo:"Quantidade por p\xE1gina",min:"1",class:"col-12 q-mt-xl"},null,8,["modelValue"])]),itemLista:V(()=>[B(d(M,{bordered:"",class:"bg-white q-mb-xs rounded-borders"},{default:V(()=>[(m(!0),g(P,null,j(a.lista,s=>(m(),g("div",{key:s.id,class:"itemHover"},[d(c,{onExecutar:r.executar,onCarregou:r.carregou,ref_for:!0,ref:s.id,onVerificarListaLayout:r.verificarListaLayout,id:s.id,layout:"lista"},null,8,["onExecutar","onCarregou","onVerificarListaLayout","id"])]))),128))]),_:1},512),[[N,a.carregar]])]),_:1},8,["busca","onAtualizar","onLimparFiltrosClick","onDetalhesClick","lista","tabSelecionada","tabs","paginacao","mostrar"]),d(h,{ref:"faturaModal"},null,512)])}var fa=_(X,[["render",K]]);export{fa as default};
