import{_ as N,Z as Q,r as E,o as m,p as h,f as a,w as e,a$ as M,a_ as S,b5 as q,C as b,k as _,t as v,Q as C,F as P,u as T,d as y,aP as z,e as D,m as H,z as V,P as O,S as B,T as w,j as k,U as F,H as $,b3 as R,b6 as U,b4 as j,O as A,R as G,N as I,D as L}from"./index.f13aeeb6.js";import{F as Z,T as J}from"./FaturaModal.55cd4bbd.js";import{_ as K}from"./Grafico.ac454c7a.js";import"./DocumentosFiscais.a3773ae7.js";import"./Campo.7b10885b.js";import"./compactarValidarNFe.d1270c48.js";import"./obterItens.f6bcac86.js";import"./codigosANP.a6c1a264.js";import"./emitirNFe.35117289.js";import"./VendaCard.d37280f0.js";import"./ModalHistoricoStatus.e794ffb5.js";import"./EnvelopeCard.08d73dce.js";import"./Chart.89bc1dd7.js";const W={components:{Badge:Q,FaturaModal:Z,TituloCard:J,Grafico:K},data(){return{contato:{},tab:"tab-1",graficoMensal:{labels:["Em dia","Dentro do m\xEAs","Fora do m\xEAs","Inadimplente","Outros"],datasets:[{backgroundColor:["green","yellow","orange","red","gray"],data:[0,0,0,0,0]}]},graficoOpcoesMensal:{responsive:!0,maintainAspectRatio:!1},historicoColunas:[{name:"dataPagamento",label:"Data",field:"dataPagamento",sortable:!0,format:this.$filters.data},{name:"formaDePagamento",label:"Forma",field:"formaDePagamento",sortable:!0},{name:"parcela",label:"Parcelas",field:"parcela"},{name:"valor",label:"Valor",field:"valor",format:i=>this.$filters.numero(i,2)}],titulosCliente:[],titulosEmAberto:[],titulosHistorico:[],creditoCliente:{},saldo:0,documentos:{},modalFatura:{idFatura:"",idTitulo:"",titulos:[]},carregandoIdEmpresas:!0,idEmpresasPermissao:[],pagamentoMultiploVisivel:!1,valorPagMultiplo:0}},methods:{async calculaDadosGraficoPizza(){let i=[];const o=await $db.financeiroTitulo.le({idContato:this.contato.id});for(const d of o){const t=(d.dataPagamento||"").substr(0,10),l=(d.dataVencimentoOriginal||"").substr(0,10),c=$utils.dataAtual().substr(0,10);let u="Outros",s="tertiary";l&&(t?t<=l?(u="Em dia",s="positive"):t.substr(0,7)===l.substr(0,7)?(u="Dentro do m\xEAs",s="warning"):(u="Fora do m\xEAs",s="orange"):l<c&&(u="Inadimplente",s="negative")),i.push({eixo:u,cor:s,valor:d.valorRealizado||0,dataPagamento:t,data:t||(d.dataVencimento||"").substr(0,10),dataVencimentoOriginal:l})}let r={"Em dia":{q:0,v:0},"Dentro do m\xEAs":{q:0,v:0},"Fora do m\xEAs":{q:0,v:0},Inadimplente:{q:0,v:0},Outros:{q:0,v:0}};for(const d of i)r[d.eixo].q+=1,r[d.eixo].v+=d.valor;this.graficoMensal.datasets[0].data=[r["Em dia"].q,r["Dentro do m\xEAs"].q,r["Fora do m\xEAs"].q,r.Inadimplente.q,r.Outros.q],this.titulosCliente=i},executar(i){this.atualizar()},async receberTitulo(i,o=!1){let r=[],d=[],t=await $db.contato.le({id:i.idEmpresa}),l={},c=await $db.contato.le({id:i.idContato}),u={},s={};t.id||this.$q.notify("Erro ao recuperar informa\xE7\xF5es da Empresa."),r=await $db.contatoEndereco.leNew({idContato:t.id}),r.length&&(l=r[0]),c.id||this.$q.notify("Erro ao recuperar informa\xE7\xF5es do Contato."),r=await $db.contatoEndereco.leNew({idContato:c.id}),d=await $db.contatoTelefone.leNew({idContato:c.id}),r.length&&(u=r[0]),d.length&&(s=d[0]);let p=await $db.fatura.leNew({status:"Aberta",idContato:c.id,idEmpresa:t.id});for(const f of $lodash.orderBy(p,"dataHoraEmissao","desc")){if(o)return f.id;try{this.modalFatura={idTitulo:i.id},await this.$refs.faturaModal.mostrar({id:f.id}),o&&await this.$refs.faturaModal.fechar()}catch(x){this.$q.notifyError("N\xE3o foi poss\xEDvel adicionar este t\xEDtulo a uma fatura.",x)}await this.$forceUpdate();return}try{let f={id:$utils.uuid(),status:"Aberta",tipo:"Fatura",dataHoraEmissao:$utils.dataAtual(),calcularAutomatico:"Sim",idEmpresa:t.id,descricaoEmpresa:t.nome||"",numeroDocumentoEmpresa:t.numeroDocumentoNacional||"",inscricaoMunicipalEmpresa:t.numeroDocumentoMunicipal||"",idEmpresaEndereco:l.id||"",idContato:c.id,descricaoContato:c.nome||"",idContatoEndereco:u.id||"",numeroDocumentoContato:c.numeroDocumentoNacional||"",descricaoContatoEndereco:"".concat(u.logradouro||"",", ",u.numero||""," ",u.complemento||""," - ",u.bairro||""," - ",u.cep||""," - ",u.municipio||"","/",u.uf||""),telefoneContato:s.telefone||"",emailContato:c.email||"",regimeContato:c.regime||"",observacaoFaturamento:"",optanteSimplesNacional:t.regime==="SimplesNacional"?"1":"0",freteSeparado:!1,operacao:"Faturamento",tipoFrete:"CIF",totalDesconto:0,totalPercentualDesconto:0,subTotal:0,totalDocumento:0};if(await $db.documento.grava({atual:f}),o)return f.id;this.modalFatura={idTitulo:i.id},this.$refs.faturaModal.mostrar({id:f.id})}catch(f){this.$q.notifyError("N\xE3o foi poss\xEDvel adicionar este t\xEDtulo a uma fatura.",f)}await this.$forceUpdate()},async atualizar(){var c,u;if(this.contato=await $erp().contato.get((c=this.$route.params.id)!=null?c:""),!((u=this.contato)!=null&&u.id))return;this.titulosEmAberto=[],this.titulosHistorico=[];const i=await $db.financeiroTitulo.le({idContato:this.contato.id,emAberto:!0}),o=await $db.financeiroTitulo.le({idContato:this.contato.id,emAberto:!1});this.titulosEmAberto=$lodash.orderBy(i,"dataVencimento","asc"),this.titulosHistorico=$lodash.orderBy(o,"dataPagamento","desc"),this.carregandoIdEmpresas=!0,$db.contato.ler({filtros:{ativo:!0,empresas:!0}}).then(s=>{this.idEmpresasPermissao=s.data.map(p=>p.id),this.carregandoIdEmpresas=!1});let r=await $db.contatoCreditoExtrato.le({idContato:this.contato.id});r=$lodash.orderBy(r,"dataEmissao","asc");let d=0,t={};r=r.filter(s=>s.tipo==="Cr\xE9dito Devolu\xE7\xE3o").reduce((s,p)=>{const f=this.$filters.data(p.dataEmissao);return s[f]||(s[f]=[]),p.documentoId&&!t[p.documentoId]&&(t[p.documentoId]=$db.hibrido.le({table:"documento",id:p.documentoId})),d+=p.creditoDevolucao,p.saldo=$utils.arredondar(d),s[f].push(p),s},{}),this.saldo=$utils.arredondar(d);let l={};for(const s in t)l[s]=await t[s];this.documentos=l,this.creditoCliente=r,await this.calculaDadosGraficoPizza()},async gerarPagamentoMultiplo(){if(this.valorPagMultiplo<=0){$q.notifyError("O valor informado deve ser maior que 0"),this.valorPagMultiplo=0;return}const i=[],o=await this.selecionarEmpresa(),r=this.titulosEmAberto.filter(l=>l.idEmpresa===o.id);if(!r.length){$q.notifyError("N\xE3o h\xE1 titulos pendentes para a empresa Selecionada."),this.valorPagMultiplo=0;return}let d=0;r.forEach(l=>{d<=this.valorPagMultiplo&&!l.idFatura&&(console.log("entrou"),i.push(l),d+=l.valorTotal)});const t=await this.receberTitulo(r[0],!0);this.modalFatura={idTitulo:i.map(l=>l.id)},await this.$refs.faturaModal.mostrar({id:t}),await this.$forceUpdate()},async selecionarEmpresa(){const i={ativo:!0,empresas:!0},o=await $g.promptContato.show({filtro:i,placeholder:"Selecione"});if(!o)throw new Error("Nenhum contato selecionado");return o},pagamentoMultiploModal(){this.pagamentoMultiploVisivel=!0,this.valorPagMultiplo=0}},watch:{"$route.params.id"(){this.atualizar()}},mounted(){this.atualizar()}},X={class:"AtendimentoFinanceiro"},Y={class:"q-mt-md q-mb-md text-h6"},tt={key:0},ot={key:1},at={class:"q-mt-md q-mb-md text-h6"},et={header:"",class:"text-weight-bold"},it={key:0,style:{margin:"0","text-align":"right",color:"red"},class:"text-weight-bold"},rt={key:1,style:{margin:"0","text-align":"right",color:"#4caf50"},class:"text-weight-bold"},lt={key:2,style:{margin:"0","text-align":"right",color:"red"}},st={key:3,style:{margin:"0","text-align":"right"}},nt={class:"col-12 col-md-6"},dt={class:"col-12 col-md-6"},ut={key:0},mt={key:1};function ct(i,o,r,d,t,l){const c=E("titulo-card"),u=E("badge"),s=E("grafico"),p=E("row"),f=E("fatura-modal"),x=E("campo");return m(),h("div",X,[a(S,{modelValue:t.tab,"onUpdate:modelValue":o[0]||(o[0]=n=>t.tab=n),class:"bg-transparent q-mt-lg text-primary",color:"transparent",align:"left"},{default:e(()=>[a(M,{label:"Em aberto",name:"tab-1"}),a(M,{label:"Cr\xE9dito do Cliente",name:"tab-2"}),a(M,{label:"Hist\xF3rico",name:"tab-3"})]),_:1},8,["modelValue"]),a(j,{modelValue:t.tab,"onUpdate:modelValue":o[2]||(o[2]=n=>t.tab=n),animated:"",class:"q-mb-md"},{default:e(()=>[a(q,{class:"bg-white",name:"tab-1"},{default:e(()=>[b("div",Y,[_(" Total R$ "+v(i.$filters.numero(t.titulosEmAberto.reduce((n,g)=>n+g.valorTotal,0),2))+" ",1),a(C,{color:"primary",icon:"attach_money",label:"Receber v\xE1rios",style:{float:"right"},onClick:o[1]||(o[1]=n=>l.pagamentoMultiploModal())})]),t.titulosEmAberto.length?(m(),h("div",tt,[(m(!0),h(P,null,T(t.titulosEmAberto,n=>(m(),h("div",{key:n.id},[a(c,{dados:n,class:"q-mb-md",onExecutar:l.executar},{default:e(()=>[t.carregandoIdEmpresas?(m(),y(z,{key:0,dense:"",flat:"",class:"no-shadow q-ma-xs",style:{float:"right"}})):D("",!0),!t.carregandoIdEmpresas&&!n.cheque&&t.idEmpresasPermissao.includes(n.idEmpresa)?(m(),y(C,{key:1,color:"primary",dense:"",flat:"",rounded:"",icon:"save_alt",size:"md",unelevated:"",onClick:g=>l.receberTitulo(n)},{default:e(()=>[a(H,null,{default:e(()=>o[6]||(o[6]=[_("Receber")])),_:1})]),_:2},1032,["onClick"])):D("",!0)]),_:2},1032,["dados","onExecutar"])]))),128))])):(m(),h("div",ot," N\xE3o h\xE1 titulos em aberto para este contato "))]),_:1}),a(q,{class:"bg-white",name:"tab-2"},{default:e(()=>[b("div",at," Saldo R$ "+v(i.$filters.numero(t.saldo,2)),1),a(V,{class:"no-shadow"},{default:e(()=>[(m(!0),h(P,null,T(Object.keys(t.creditoCliente),n=>(m(),h("div",{key:n,class:"q-pa-none text-left"},[b("label",et,v(n),1),a(O,{highlight:"",style:{width:"100%"}},{default:e(()=>[(m(!0),h(P,null,T(t.creditoCliente[n],g=>(m(),y(B,{key:g.id},{default:e(()=>[g.creditoDevolucao<0?(m(),y(w,{key:0,avatar:""},{default:e(()=>[a(k,{name:"trending_down",color:"red"})]),_:1})):(m(),y(w,{key:1,icon:"trending_up",avatar:""},{default:e(()=>[a(k,{name:"trending_up",color:"green-6"})]),_:1})),a(w,null,{default:e(()=>[a(F,null,{default:e(()=>[_(v(g.documentoTipo),1)]),_:2},1024),a(F,{caption:""},{default:e(()=>o[7]||(o[7]=[_(" Saldo ")])),_:1})]),_:2},1024),a(w,{avatar:""},{default:e(()=>[a(u,{class:"q-mx-sm",escuro:"",cor:"green-6",denso:"",round:""},{default:e(()=>[_(" #"+v(parseInt((t.documentos[g.documentoId]||{}).numero)||(g.documentoId||"").slice(-6)),1)]),_:2},1024)]),_:2},1024),a(w,{right:""},{default:e(()=>[g.creditoDevolucao<0?(m(),h("p",it,v(i.$filters.numero(g.creditoDevolucao,2)),1)):(m(),h("p",rt,v(i.$filters.numero(g.creditoDevolucao,2)),1)),g.saldo<0?(m(),h("p",lt,[b("small",null,v(i.$filters.numero(g.saldo,2)),1)])):(m(),h("p",st,[b("small",null,v(i.$filters.numero(g.saldo,2)),1)]))]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]))),128))]),_:1})]),_:1}),a(q,{class:"bg-white",name:"tab-3"},{default:e(()=>[a(p,null,{default:e(()=>[b("div",nt,[$(b("div",null,[o[8]||(o[8]=b("div",{class:"text-h6 text-tertiary"}," Perfil ",-1)),a(p,{class:"q-mt-md"},{default:e(()=>[a(s,{type:"pie",data:t.graficoMensal,options:t.graficoOpcoesMensal,class:"col-12"},null,8,["data","options"])]),_:1})],512),[[R,t.titulosCliente.length]])]),b("div",dt,[o[9]||(o[9]=b("div",{class:"text-h6 text-tertiary"}," Hist\xF3rico ",-1)),t.titulosHistorico.length?(m(),h("div",ut,[a(U,{columns:t.historicoColunas,rows:t.titulosHistorico,"rows-per-page-options":[12],grid:""},null,8,["columns","rows"])])):(m(),h("div",mt," N\xE3o h\xE1 titulos pagos "))])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(f,{ref:"faturaModal",receberTitulo:{id:t.modalFatura.idTitulo},onExecutar:l.executar},null,8,["receberTitulo","onExecutar"]),a(L,{ref:"pagamentoMultiplo",modelValue:t.pagamentoMultiploVisivel,"onUpdate:modelValue":o[5]||(o[5]=n=>t.pagamentoMultiploVisivel=n),persistent:""},{default:e(()=>[a(V,{style:{"min-width":"350px"}},{default:e(()=>[a(A,null,{default:e(()=>o[10]||(o[10]=[b("div",{class:"text-h6"},"Qual o valor a receber?",-1)])),_:1}),a(A,{class:"q-pt-none"},{default:e(()=>[a(x,{rotulo:"Valor a receber",modelValue:t.valorPagMultiplo,"onUpdate:modelValue":o[3]||(o[3]=n=>t.valorPagMultiplo=n),decimals:"4",value:"0",prefix:"R$",tipo:"decimal"},null,8,["modelValue"])]),_:1}),a(G,{align:"right",class:"text-primary"},{default:e(()=>[$(a(C,{flat:"",label:"Cancelar",color:"tertiary"},null,512),[[I]]),$(a(C,{flat:"",label:"Receber",onClick:o[4]||(o[4]=n=>l.gerarPagamentoMultiplo()),class:"bg-primary",textColor:"white"},null,512),[[I]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var qt=N(W,[["render",ct]]);export{qt as default};
