import{_ as E,r as m,o as d,d as p,w as i,f as e,z as M,h as q,i as I,k as c,C,d8 as S,p as _,v as O,t as y,Q as h,D as Q,$ as z,a0 as U,cG as H,aM as j,bk as L,bz as R,e as $,y as G,m as k,bg as X,P as J,H as A,S as b,T as u,j as x,U as v,N as V,cM as K,G as W,J as Y,I as Z}from"./index.a5f5d5a1.js";import{M as oo}from"./ContatoCombinar.f09d5ae3.js";import{i as to}from"./importarArquivoXlsx.9e071968.js";import{M as ao}from"./MenuAbas.4336b827.js";import"./xlsx.7d59d296.js";const eo={id:{tipo:"id"},idContato:{tipo:"id"},logradouro:{tipo:"texto"},numero:{tipo:"texto"},complemento:{tipo:"texto"},condominio:{tipo:"texto"},bairro:{tipo:"texto"},cep:{tipo:"texto"},ibgeCod:{tipo:"texto"},municipio:{tipo:"texto"},uf:{tipo:"texto"},pais:{tipo:"texto"},grupo:{tipo:"texto"},cidadeCodChave:{tipo:"texto"},observacao:{tipo:"texto"},idCidade:{tipo:"id"}},ro={id:{tipo:"id"},tipoTelefone:{tipo:"texto"},telefone:{tipo:"texto"},observacao:{tipo:"texto"},idContato:{tipo:"id"}},D={endereco:{lista:eo},telefone:{lista:ro},id:{tipo:"id"},codigoContato:{tipo:"numerico"},nome:{tipo:"texto"},apelido:{tipo:"texto"},numeroDocumentoNacional:{tipo:"texto"},idContatoAssistente:{tipo:"id"},idContatoIndicacao:{tipo:"id"},idContatoMatriz:{tipo:"id"},idContatoTransportadora:{tipo:"id"},idContatoVendedor:{tipo:"id"},idFormaPagamento:{tipo:"id"},idItemTabelaPreco:{tipo:"id"},idEmpresaCarteira:{tipo:"id"},tipoDocumentoNacional:{tipo:"texto"},numeroDocumentoEstadual:{tipo:"texto"},numeroDocumentoMunicipal:{tipo:"texto"},site:{tipo:"texto"},email:{tipo:"texto"},emailNfe:{tipo:"texto"},sexo:{tipo:"texto"},segmento:{tipo:"texto"},condutaObservacao:{tipo:"texto"},condutaRestricao:{tipo:"texto"},observacao:{tipo:"texto"},observacaoConsulta:{tipo:"texto"},dataAbertura:{tipo:"dataHora"},dataCadastro:{tipo:"dataHora"},dataAlteracao:{tipo:"dataHora"},dataConsulta:{tipo:"dataHora"},codigoContatoVendedor:{tipo:"numerico"},codigoContatoAssistente:{tipo:"numerico"},codigoContatoIndicacao:{tipo:"numerico"},codigoContatoTransportadora:{tipo:"numerico"},codigoItemTabelaPreco:{tipo:"numerico"},codigoFormaPagamento:{tipo:"numerico"},condicaoPagamento:{tipo:"texto"},codigoAntigo:{tipo:"texto"},imagem:{tipo:"texto"},codigoGrupo:{tipo:"numerico"},ativo:{tipo:"logico"},excluido:{tipo:"logico"},codigoContatoPlataforma:{tipo:"numerico"},regime:{tipo:"texto"},observacaoNFE:{tipo:"texto"},limiteCredito:{tipo:"texto"},nSerieCert:{tipo:"texto"},codigoUsuario:{tipo:"texto"},crmCurvaABC:{tipo:"texto"},crmValorTotalVendasPeriodo:{tipo:"texto"},crmValorTotalOrcamentos:{tipo:"texto"},crmDataUltimoOrcamento:{tipo:"dataHora"},crmValorTotalVendasMesAtual:{tipo:"texto"},crmMetaProximaVenda:{tipo:"texto"},crmMargem:{tipo:"texto"},crmDataPrimeraVenda:{tipo:"dataHora"},crmDiasUltimaVenda:{tipo:"texto"},crmFrequenciaVenda:{tipo:"texto"},crmFrequenciaStatus:{tipo:"texto"},crmStatusFinanceiro:{tipo:"texto"},crmAcao:{tipo:"texto"},crmDataUltimoContato:{tipo:"dataHora"},cobrancaDataPrevisao:{tipo:"dataHora"},creditoUtilizado:{tipo:"decimal"},creditoDevolucao:{tipo:"decimal"},creditoDisponivel:{tipo:"decimal"},idUsuario:{tipo:"id"}},io={alterados:0,arquivo:null,cor:"text-negative",corFinal:"",erro:"",erros:0,incluidos:0,listaErros:[],mensagem:"",mensagemFinal:"",modalResultado:!1},no={data(){return{importar:$utils.clonarV2(io)}},emits:["update:modelValue"],methods:{beforeShow(){this.importar.arquivo=null,this.importar.mensagem="",this.importar.mensagemFinal="",this.importar.erro=""},hide(){this.$emit("update:modelValue",!1)},async prepareFile(t){const o=r=>new Promise((s,n)=>{const a=new FileReader;a.readAsBinaryString(r),a.onload=()=>s(a.result),a.onerror=l=>n(l)});try{const r=await o(t[0]);await this.importarArquivo(r),this.hide(),this.$q.notify({type:"positive",message:"Importa\xE7\xE3o realizada com sucesso"})}catch(r){this.importar.erro="Ocorreu erro ao importar contatos",this.$q.notifyError(this.importar.erro,r)}},templateDownload(){window.open("/statics/downloads/B15-Importar-ou-Atualizar-Contatos.xlsx","_self")},async importarArquivo(t){try{this.importar.modalResultado=!0,this.importar.mensagem="Carregando o arquivo .xlsx",this.importarLista=await $erp().contato.toArray();const o={Contato:D,ContatoTelefone:D.telefone.lista,ContatoEndereco:D.endereco.lista};await to(t,o,this.importarCallbackParcial,this.importarCallbackErro,this.importarCallbackFinal)}catch(o){o.name&&o.name==="ErroValidacao"?(this.importar.erro=o.message,this.$q.notifyError(o.message,o)):(this.importar.erro="Ocorreu erro ao importar arquivo xlsx",this.$q.notifyError(this.importar.erro,o))}},async importarCallbackErro(t,o){this.importar.erros++,this.importar.listaErros.length<20&&this.importar.listaErros.push({linha:t,mensagem:o})},async importarCallbackFinal(t){this.importar.incluidos+this.importar.alterados>0?this.importar.erros>0?(this.importar.corFinal="bg-warning",this.importar.mensagemFinal="Importa\xE7\xE3o realizada parcialmente!"):(this.importar.corFinal="bg-positive text-white",this.importar.mensagemFinal="Importa\xE7\xE3o conclu\xEDda com sucesso!"):this.importar.erros>0?(this.importar.corFinal="text-negative",this.importar.mensagemFinal="Importa\xE7\xE3o n\xE3o realizada!"):(this.importar.corFinal="bg-warning",this.importar.mensagemFinal="Importa\xE7\xE3o n\xE3o realizada!")},acertarEnderecos(t){for(const o of t.atual.endereco){o.id=$utils.uuid(),o.idContato=t.atual.id;let r=(o.cep||"").replace(/[^0-9]/g,"");r.length===8&&(o.cep=r.substr(0,5)+"-"+r.substr(5,3)),o.pais||(o.pais="Brasil")}for(const o of t.original.endereco||[]){let r=t.atual.endereco.find(s=>{let n=$utils.diferencaNivel1(s,o);return delete n.id,Object.keys(n).length===0});r?r.id=o.id:t.atual.endereco.push(o)}},acertarTelefones(t){for(const o of t.atual.telefone)o.id=$utils.uuid(),o.idContato=t.atual.id;for(const o of t.original.telefone||[]){let r=t.atual.telefone.find(s=>{let n=$utils.diferencaNivel1(s,o);return delete n.id,Object.keys(n).length===0});r?r.id=o.id:t.atual.telefone.push(o)}},async importarCallbackParcial(t){const o=t.Contato[0];t.ContatoEndereco&&(o.endereco=t.ContatoEndereco),t.ContatoTelefone&&(o.telefone=t.ContatoTelefone);const r=t.chaves.length>0?a=>t.chaves.reduce((l,g)=>l&&a[g]===o[g],!0):a=>!1,s=this.importarLista.filter(r);if(o.numeroDocumentoNacional){const a=this.importarLista.filter(l=>l.numeroDocumentoNacional===o.numeroDocumentoNacional);if(a.length>1)throw new $utils.ErroValidacao(`NumeroDocumentoNacional deve ser \xFAnico (${o.numeroDocumentoNacional})`);if(a.length===1){if(s.length===0)throw new $utils.ErroValidacao(`NumeroDocumentoNacional deve ser \xFAnico (${o.numeroDocumentoNacional})`);if(a[0].id!==s[0].id)throw new $utils.ErroValidacao(`NumeroDocumentoNacional deve ser \xFAnico (${o.numeroDocumentoNacional})`)}}const n=$utils.dataAtual();if(s.length===0){const a={...$db.contato.vazio,dataCadastro:n,dataAlteracao:n,...o,id:$utils.uuid()};let l={atual:a,original:{}};this.acertarEnderecos(l),this.acertarTelefones(l),await $db.contato.gravaImportarContato(l),this.importarLista.push(a),this.importar.incluidos++}else if(s.length===1){let a=await $db.contato.leCompletoV2(s[0].id);o.id=a.atual.id,Object.assign(a.atual,o),this.acertarEnderecos(a),this.acertarTelefones(a),await $db.contato.gravaImportarContato(a),this.importar.alterados++}else{const a=t.chaves.map(l=>l+": "+o[l]).join(", ");throw new $utils.ErroValidacao(`Existem ${s.length} contatos no banco com a chave (${a})`)}}},props:{modelValue:{required:!0,type:Boolean}}},so={class:"q-pa-md"};function lo(t,o,r,s,n,a){const l=m("row");return d(),p(Q,{modelValue:r.modelValue,onBeforeShow:a.beforeShow,onHide:a.hide},{default:i(()=>[e(M,null,{default:i(()=>[e(q,{class:"text-tertiary"},{default:i(()=>[e(I,null,{default:i(()=>[c(" Importar contatos ")]),_:1})]),_:1}),C("div",so,[e(S,{label:"Selecione o arquivo (.xlsx)","hide-upload-btn":"","auto-upload":"",factory:a.prepareFile},null,8,["factory"]),n.importar.erro?(d(),_("div",{key:0,class:O(["row","q-pa-sm",n.importar.cor])},y(n.importar.erro),3)):(d(),p(l,{key:1,class:"q-mt-md justify-center"},{default:i(()=>[e(h,{color:"primary",flat:"",icon:"cloud_download",onClick:a.templateDownload,label:"Baixar arquivo modelo (.xlsx)"},null,8,["onClick"])]),_:1}))])]),_:1})]),_:1},8,["modelValue","onBeforeShow","onHide"])}var co=E(no,[["render",lo]]);const mo={components:{Avatar:z,Badge:U,Tutorial:H,ModalCombinarContato:oo,ImportarContatos:co,MenuAbas:ao},computed:{badge(){return this.contato.ativo?this.contato.condutaRestricao?{cor:"negative",rotulo:"Restri\xE7\xE3o"}:this.contato.condutaObservacao?{cor:"warning",rotulo:"Observa\xE7\xE3o"}:!1:{cor:"tertiary",rotulo:"Exclu\xEDdo"}},badgeDetalhes(){const{ativo:t,condutaRestricao:o,condutaObservacao:r}=this.contato;return t&&(o||r)||!1},podeAcessar(){return!this.contatoConsumidor&&!!this.contato},telefone(){let t=this.contato.telefone;return!t||!t.length?!1:(t=t.find(o=>o.tipo==="Principal")||t[0],t.telefone)},usuario(){return $db.usuario.logado}},data(){return{contato:$db.contato.vazio,carregando:!1,modalCombinar:!1,contatosInativosModal:!1,modalImportar:!1,contatoConsumidor:!1,sincronismoStatus:j.status}},methods:{async buscarContato(){const t=await $g.promptContato.show({filtro:{ativo:!0,somenteCarteira:!0},placeholder:"Selecione o contato"});$lodash.get(t,"id")&&($db.contato.selecionado=await $db.contato.le({id:t.id}),this.$router.push({name:this.$route.name,params:{id:t.id}}))},async adicionarContato(){!!this.$refs.componentefilho&&!!this.$refs.componentefilho.desejaDescartar&&!await this.$refs.componentefilho.desejaDescartar()||$q.dialog({message:"Qual \xE9 o nome completo?",preventClose:!0,prompt:{type:"text"},title:"Cadastrar contato",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Criar",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(async t=>{try{$q.loading.show();let o="";const r=($db.usuario.logado.cpf||"").replace(/\D/g,"");if(r){await $db.contato.carregarMemoria();let a;for(const l of $db.contato.contatos)if((l.numeroDocumentoNacional||"").replace(/\D/g,"")===r){a=l.id;break}a&&(await $erp().contatoGrupo.where({idContato:a}).toArray()).find(w=>~["vendedor","vendedora","vendedores","vendedor(a)"].indexOf((w.descricao||"").toLowerCase()))&&(o=a)}const s={id:L(),nome:t,ativo:!0,idContatoVendedor:o};await $db.contato.grava({contato:s});let n="AtendimentoContato";this.$route.name.indexOf("Atendimento")!==-1&&(n=this.$route.name),this.$router.push({name:n,params:{id:s.id}})}catch(o){$q.notifyError("Erro ao cadastrar contato.",o)}finally{$q.loading.hide()}})},async buscarContatoExcluido(){if(!!this.$refs.componentefilho&&!!this.$refs.componentefilho.desejaDescartar&&!await this.$refs.componentefilho.desejaDescartar())return;const t=await $g.promptContato.show({filtro:{ativo:!1,somenteCarteira:!0}});t.id&&this.$router.push({name:this.$route.name,params:{id:t.id}})},async carregarContato(){var t,o;if(!this.carregando){this.carregando=!0;try{let r=this.$route.params.id;r=r==="0"?null:r;let s={};this.contatoConsumidor=!1,r&&(s=await $db.contato.le({id:r}),r=(s||{}).id);const n=await $db.hibrido.lista({table:"configuracoes",columns:["valor"],where:{nome:"venda.codigoconsumidor"}}),a=Number((o=(t=n==null?void 0:n[0])==null?void 0:t.valor)!=null?o:0);if(s.codigoContato===a)this.contatoConsumidor=!0;else if(!r&&!!a){const l=await $erp().contato.where({codigoContato:a}).toArray();R(!l.length||!l[0].id,"Contato consumidor n\xE3o encontrado."),s=l[0],r=s.id,this.contatoConsumidor=!0}if(!r)return;this.contato=$db.contato.selecionado=s,localStorage.setItem("contatoSelecionado",r)}catch(r){this.$q.notifyError("Erro ao carregar contato",r)}finally{this.carregando=!1}}},copiarUid(){const t=this.$refs.uid;t.type="text";try{t.select(),document.execCommand("copy"),this.$q.notify({message:"Copiado!",type:"info"})}catch{this.$q.notify("Erro ao copiar.")}t.type="hidden",window.getSelection().removeAllRanges()},async selecionarCombinarContatos(t){}},watch:{"$route.params.id"(t){~this.$route.name.indexOf("Atendimento")&&this.carregarContato()},"sincronismoStatus.concluidoErp"(){~this.$route.name.indexOf("Atendimento")&&this.carregarContato()}},created(){this.carregarContato(),$utils.emitter.off("carregarContatoAtendimentoLayout"),$utils.emitter.on("carregarContatoAtendimentoLayout",this.carregarContato),$utils.emitter.off("adicionarContato"),$utils.emitter.on("adicionarContato",this.adicionarContato)}},uo={id:"Atendimento"},po={key:0},fo={class:"u-container"},ho={key:0,class:"bg-white q-pa-xl text-center"},go=C("strong",null,"consumidor",-1),Co={class:"text-center q-mt-sm"};function bo(t,o,r,s,n,a){const l=m("barraTopo"),g=m("avatar"),w=m("badge"),N=m("Tutorial"),T=m("router-view"),F=m("MenuAbas"),P=m("ImportarContatos"),B=m("ModalCombinarContato");return d(),_("div",uo,[e(W,{class:"bg-gradiente text-white"},{default:i(()=>[e(l),e(q,{class:"u-container q-px-sm"},{default:i(()=>[e(g,{imagem:n.contato.imagem,rotulo:a.podeAcessar?n.contato.apelido:!1,tamanho:"40"},null,8,["imagem","rotulo"]),e(I,null,{subtitle:i(()=>[a.telefone?(d(),_("span",po,y(a.telefone),1)):$("",!0)]),default:i(()=>[c(y(n.contato.apelido)+" ",1),a.badge?(d(),p(w,G({key:0},a.badge,{denso:"",escuro:"",class:"q-ml-sm"}),{default:i(()=>[a.badgeDetalhes?(d(),p(k,{key:0,class:"Atendimento-badgeDetalhes"},{default:i(()=>[c(y(a.badgeDetalhes),1)]),_:1})):$("",!0)]),_:1},16)):$("",!0)]),_:1}),e(h,{onClick:a.buscarContato,icon:"search",flat:"",dense:"",round:"",size:"md"},{default:i(()=>[e(k,{anchor:"bottom middle",self:"center middle"},{default:i(()=>[c("Buscar contato")]),_:1})]),_:1},8,["onClick"]),e(h,{onClick:a.adicionarContato,icon:"person_add",flat:"",dense:"",round:"",size:"md"},{default:i(()=>[e(k,{anchor:"bottom middle",self:"center middle"},{default:i(()=>[c("Criar contato")]),_:1})]),_:1},8,["onClick"]),e(N,{componente:"AtendimentoLayout"}),e(h,{icon:"more_vert",flat:"",dense:"",round:"",size:"md"},{default:i(()=>[e(X,null,{default:i(()=>[e(J,{link:"","no-border":"",separator:""},{default:i(()=>[A((d(),p(b,{onClick:a.buscarContatoExcluido,clickable:""},{default:i(()=>[e(u,{avatar:""},{default:i(()=>[e(x,{name:"search"})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[c("Buscar exclu\xEDdos")]),_:1})]),_:1})]),_:1},8,["onClick"])),[[V]]),A((d(),p(b,{onClick:o[0]||(o[0]=f=>n.modalImportar=!0),clickable:""},{default:i(()=>[e(u,{avatar:""},{default:i(()=>[e(x,{name:"import_export"})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[c("Importar contatos")]),_:1})]),_:1})]),_:1})),[[V]]),e(b,{onClick:o[1]||(o[1]=()=>{this.modalCombinar=!0}),clickable:""},{default:i(()=>[e(u,{avatar:""},{default:i(()=>[e(x,{name:"compare_arrows"})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[c("Combinar contatos duplicados")]),_:1})]),_:1})]),_:1}),e(b,{onClick:a.copiarUid,clickable:""},{default:i(()=>[e(u,{avatar:""},{default:i(()=>[e(x,{name:"file_copy"})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[c("Copiar c\xF3digo do contato")]),_:1})]),_:1}),A(C("input",{type:"hidden","onUpdate:modelValue":o[2]||(o[2]=f=>n.contato.id=f),ref:"uid"},null,512),[[K,n.contato.id]])]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(Z,null,{default:i(()=>[e(Y,null,{default:i(()=>[e(F,{objetoPai:"atendimento"},{default:i(()=>[C("div",fo,[!a.podeAcessar&&!["AtendimentoVenda","AtendimentoFatura"].includes(t.$route.name)?(d(),_("div",ho,[c(" N\xE3o \xE9 poss\xEDvel acessar este recurso como "),go,c(". Por favor, cadastre ou selecione um contato. "),C("div",Co,[e(h,{onClick:a.adicionarContato,unelevated:"",icon:"person_add",label:"Novo contato",color:"primary",class:"q-ma-sm"},null,8,["onClick"]),e(h,{onClick:a.buscarContato,unelevated:"",icon:"search",label:"Buscar contato",color:"primary",class:"q-ma-sm"},null,8,["onClick"])])])):(d(),p(T,{key:1,ref:"componentefilho"},null,512))])]),_:1})]),_:1})]),_:1}),e(P,{modelValue:n.modalImportar,"onUpdate:modelValue":o[3]||(o[3]=f=>n.modalImportar=f)},null,8,["modelValue"]),e(B,{modelValue:n.modalCombinar,"onUpdate:modelValue":o[4]||(o[4]=f=>n.modalCombinar=f)},null,8,["modelValue"])])}var $o=E(mo,[["render",bo]]);export{$o as default};
