import{_ as Z,$ as oo,a0 as eo,r as V,o as f,p as U,f as e,w as a,Q as b,bg as ao,P as F,H as p,d as A,S as G,T as h,j as $,U as k,k as c,N as q,F as D,u as P,t as _,m as S,l as z,b5 as C,z as io,O as L,au as so,s as O,R as ro,D as N,M as I,G as H,h as Q,i as R,C as M,aP as v,I as X,v as B,aW as to,e as J,cL as lo}from"./index.0f3d3525.js";import{l as uo}from"./ListaAntiga.720c5a56.js";import{g as no,a as co,b as mo}from"./g-label.06b1fe45.js";import{o as W}from"./open-url.e581073d.js";const po={components:{lista:uo,"g-row":no,"g-col":co,"g-label":mo,Avatar:oo,Badge:eo},data:function(){return{termoBusca:"",tabSelecionada:{valor:"Todos"},tabs:[],lista:[],listaOriginal:[],listaLayout:[],grupo:[],usuarios:[],telaAdicionarUsuario:{codigoGrupo:"",codigoContato:"",nome:"",cpf:"",senha:"",mostraSenha:!0,mostrar:!1},permissao:{titulo:"",mostrar:!1,buscaPermissao:"",expandirPermissao:!0,pais:[],ret:[],u:{},tipo:"",codigoGrupo:0},empresaUsuarios:{empresa:"",usuario:[],mostrar:!1},paginacao:{atual:1,maximo:1,total:1,limite:25}}},computed:{permissaoUsuarioCheckboxTodos(){return this.permissao.ret.itens.reduce((o,i)=>o!==i.permissaoUsuario?null:o,this.permissao.ret.itens[0].permissaoUsuario)},permissaoGrupoCheckboxTodos(){return this.permissao.ret.itens.reduce((o,i)=>o!==i.permissaoGrupo?null:o,this.permissao.ret.itens[0].permissaoGrupo)}},methods:{async atualizar(){try{$q.loading.show(),this.clienteSistema=JSON.parse(localStorage.getItem("clienteSistema"))||{};const o=await $utils.geeksApi({grupo:{funcao:"9C93290F-BEDD-4051-A0F5-FA01D961CCF4",codigoClienteSistema:this.clienteSistema.codigoClienteSistema},usuario:{funcao:"E4E43C26-D0B7-4CFB-9F13-BBFA9F11E847",codigoClienteSistema:this.clienteSistema.codigoClienteSistema,termoBusca:this.termoBusca}});this.grupo=o.data.grupo.sort((i,r)=>{var t,d;return((t=i.descricao)==null?void 0:t.toLowerCase())<((d=r.descricao)==null?void 0:d.toLowerCase())?-1:1}),this.usuario=o.data.usuario.sort((i,r)=>{var t,d;return((t=i.nome)==null?void 0:t.toLowerCase())<((d=r.nome)==null?void 0:d.toLowerCase())?-1:1}),this.tabs=[];for(const i of this.grupo)this.tabs.push({rotulo:i.descricao,value:i.codigoGrupo});this.tabs.push({rotulo:"Todos",value:"Todos"}),this.tabs.push({rotulo:"Grupos",value:"Grupos"}),this.listaOriginal=$utils.clonarV2(this.usuario),this.tabSelecionada.valor==="Todos"?this.lista=this.usuario:this.lista=this.usuario.filter(i=>i.codigoGrupo===this.tabSelecionada.valor),this.tabSelecionada.valor==="Grupos"?this.lista.total=this.grupo.length:this.lista.total||(this.lista.total=this.lista.total=this.lista.length),this.paginacao.total=this.lista.total}catch(o){$q.notifyError("Erro iniciar",o)}finally{$q.loading.hide()}},permissao_filtro_atualiza(){for(const r of this.permissao.ret.itens)r.mostrar=this.permissao.buscaPermissao.length<=2||!!r.descricao.toLowerCase().match(this.permissao.buscaPermissao.toLowerCase());const o=this.permissao.ret.itens;function i(r){const t=o.find(d=>r.codigoPai===d.codigoObjeto);if(!t){console.log("Orf\xE3o",r.codigoObjeto,r.descricao);return}t.mostrar=!0,t.codigoPai&&i(t)}for(const r of o)r.mostrar&&r.codigoPai&&i(r)},async grupo_incluir_click(){$q.dialog({title:"Qual o nome do grupo?",preventClose:!0,prompt:{model:"",isValid:o=>o.length>0,type:"text"},cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Criar",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(async o=>{try{$q.loading.show();const i=await $utils.geeksApi({grupo:{funcao:"240A354B-DADC-4133-B359-F578E28572F5",descricao:o,codigoClienteSistema:this.clienteSistema.codigoClienteSistema}});if(i.data.grupo.erro){$q.notifyError(i.data.grupo.erro),$q.loading.hide();return}await this.atualizar()}catch(i){$q.notifyError("Erro ao cadastrar grupo.",i)}finally{$q.loading.hide()}})},async grupo_editar_click(o){$q.dialog({title:"Novo nome do grupo:",preventClose:!0,prompt:{model:"",isValid:i=>i.length>0,type:"text"},cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Editar",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(async i=>{try{$q.loading.show();const r=await $utils.geeksApi({grupo:{funcao:"9A886DAF-E5D4-4DAC-9933-6168074CE916",codigoGrupo:o.codigoGrupo,descricao:i,codigoClienteSistema:this.clienteSistema.codigoClienteSistema}});if(r.data.grupo.erro){$q.notifyError(r.data.grupo.erro),$q.loading.hide();return}await this.atualizar()}catch(r){$q.notifyError("Erro ao editar nome do grupo.",r)}finally{$q.loading.hide()}})},async grupo_excluir_click(o){$q.dialog({title:"Remover grupo",message:`Deseja remover o grupo: ${o.descricao}?`,cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},ok:{label:"Sim",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(async()=>{try{const i=await $utils.geeksApi({grupo:{funcao:"D328D819-AA47-453D-B455-1620E229BFFC",codigoGrupo:o.codigoGrupo}});if(i.data.grupo.erro){$q.notifyError(i.data.grupo.erro);return}await this.atualizar()}catch{$q.notifyError("Houve um erro ao remover o grupo. Tente novamente")}})},async usuario_seleciona_click(){const o=await $g.promptContato.show({filtro:{ativo:!0},placeholder:"Selecione um usu\xE1rio"});o&&(this.telaAdicionarUsuario.nome=o.nome,this.telaAdicionarUsuario.cpf=o.numeroDocumentoNacional,this.telaAdicionarUsuario.codigoContato=o.codigoContato)},async usuario_incluir_show(o){if(!(!!$db.usuario.logado.administrador&&[1,2].includes($db.usuario.logado.grupoInterno))&&$utils.sistemaPai()==="b15"){console.log("Encaminhar para Suporte"),W("https://api.whatsapp.com/send?phone="+"551621116161");return}const r=this.telaAdicionarUsuario;if(o===void 0){r.codigoUsuario=null,r.codigoGrupo="",r.nome="",r.cpf="",r.mostrar=!0;return}r.codigoUsuario=null,r.codigoGrupo=o.codigoGrupo,r.nome=o.nome,r.cpf=o.numeroDocumentoNacional,r.mostrar=!0},async usuario_editar_show(o){const i=this.telaAdicionarUsuario;i.codigoUsuario=o.codigoUsuario,i.codigoGrupo=o.codigoGrupo,i.nome=o.nome,i.cpf=o.numeroDocumentoNacional,i.mostrar=!0},async usuario_alterar_senha_show(o){$q.dialog({title:"Informe a nova senha:",preventClose:!0,prompt:{model:"",isValid:i=>i.length>=6,type:"password",hint:"* A senha deve conter no m\xEDnimo 6 caracteres"},cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Atualizar",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(async i=>{try{$q.loading.show(),await $utils.geeksApi({grupo:{funcao:"96C436BE-FCDE-4595-BFFC-AFA4D6E75802",senha:i,codigoUsuario:this.telaAdicionarUsuario.codigoUsuario}})}catch(r){$q.notifyError("Erro ao alterar senha.",r)}finally{$q.loading.hide(),this.telaAdicionarUsuario.mostrar=!1}})},async usuario_gravar_click(){try{$q.loading.show();const o=$utils.clonar(this.telaAdicionarUsuario);o.funcao="00937915-77BD-4FFD-9681-313CC6031C30",o.codigoClienteSistema=this.clienteSistema.codigoClienteSistema,o.numeroDocumentoNacional=o.cpf;const i=await $utils.geeksApi({gravarUsuario:o});if(i.data.gravarUsuario.erro!==""){$q.notifyError(i.data.gravarUsuario.erro),$q.loading.hide();return}await this.atualizar()}catch(o){$q.notifyError("Erro ao adicionar usu\xE1rio ao grupo",o)}finally{$q.loading.hide()}},async usuario_excluir_click(o){if(!(!!$db.usuario.logado.administrador&&[1,2].includes($db.usuario.logado.grupoInterno))&&$utils.sistemaPai()==="b15"){console.log("Encaminhar para Suporte"),W("https://api.whatsapp.com/send?phone="+"551621116161");return}$q.dialog({title:"Remover usu\xE1rio",message:`Deseja remover o usu\xE1rio: ${o.nome} do grupo?`,cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},ok:{label:"Sim",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(async()=>{try{$q.loading.show(),await $utils.geeksApi({usuarioRemover:{funcao:"ED2D686D-D3ED-4777-BBEE-2C5A9CC4EBB0",codigoUsuario:o.codigoUsuario,codigoClienteSistema:this.clienteSistema.codigoClienteSistema}}),await this.atualizar()}catch(r){$q.notifyError("Houve um erro ao remover o usu\xE1rio do grupo",r)}finally{$q.loading.hide()}})},async permissoes_atualiza({codigoClienteSistema:o,codigoUsuario:i,codigoGrupo:r}){const t=(await $utils.geeksApi({itens:{funcao:"1C308EF4-D1FC-49E5-9195-71112132823E",codigoClienteSistema:o},permissaoUsuario:{funcao:"54493700-6637-4007-84D5-21573F039170",codigoClienteSistema:o,codigoUsuario:i},permissaoGrupo:{funcao:"004DB447-F92F-4A91-852B-5895B64E93E9",codigoGrupo:r}})).data;for(const d of t.itens)d.permissaoUsuario=!!t.permissaoUsuario.find(l=>l.codigoObjeto===d.codigoObjeto),d.permissaoGrupo=!!t.permissaoGrupo.find(l=>l.codigoObjeto===d.codigoObjeto),d.permissaoUsuarioOriginal=!!t.permissaoUsuario.find(l=>l.codigoObjeto===d.codigoObjeto),d.permissaoGrupoOriginal=!!t.permissaoGrupo.find(l=>l.codigoObjeto===d.codigoObjeto),d.mostrar=!0,d.aberto=!0;t.itens=$lodash.orderBy(t.itens,["ordem","descricao"],["asc","asc"]),globalThis.itens=t.itens,this.permissao.ret=t},async grupo_permissao_show(o){o.codigoUsuario=0,this.permissao.titulo=o.descricao,this.permissao.codigoGrupo=o.codigoGrupo,await this.permissoes_atualiza(o),this.permissao.tipo="grupo",this.permissao_filtro_atualiza(),this.permissao.mostrar=!0},async grupo_permissao_gravar_click(){const o=[],i=[];for(const r of this.grupoPermissao.permissaoOriginal)this.grupoPermissao.permissao.find(t=>t===r)||i.push(this.grupoPermissao.ret.find(t=>t.descricao===r).codigoGrupoPermissao);for(const r of this.grupoPermissao.permissao)this.grupoPermissao.permissaoOriginal.find(t=>t===r)||o.push(this.grupoPermissao.ret.find(t=>t.descricao===r).codigoGrupoPermissao);console.log("ativar",o,o.join(",")),console.log("inativar",i,i.join(",")),(await $utils.geeksApi({ret:{funcao:"53385537-7D4E-460B-8113-FED2D02D7017",ativar:o,inativar:i}})).data.ret,this.grupo_permissao_show(this.grupoPermissao.g)},async usuario_permissao_show(o){this.permissao.titulo=`${o.nome} - ${this.grupo.find(i=>i.codigoGrupo===o.codigoGrupo).descricao}`,this.permissao.codigoGrupo=o.codigoGrupo,this.permissao.u=o,await this.permissoes_atualiza(o),this.permissao.tipo="usuario",this.permissao.mostrar=!0},async usuario_permissao_gravar_click(){if(this.permissao.tipo==="usuario"){const r=[],t=[];for(const d of this.permissao.ret.itens)d.permissaoUsuario!==d.permissaoUsuarioOriginal&&(d.permissaoUsuario?r.push(d.codigoObjeto):t.push(d.codigoObjeto));console.log("ativar",r,r.join(",")),console.log("inativar",t,t.join(",")),(await $utils.geeksApi({ret:{funcao:"EDB935DC-96C9-48A0-8D7B-6EA6534C9DBD",ativar:r,inativar:t,codigoUsuario:this.permissao.u.codigoUsuario,codigoClienteSistema:this.clienteSistema.codigoClienteSistema}})).data.ret}const o=[],i=[];for(const r of this.permissao.ret.itens)r.permissaoGrupo!==r.permissaoGrupoOriginal&&(r.permissaoGrupo?o.push(r.codigoObjeto):i.push(r.codigoObjeto));console.log("grupo ativa",o,o.join(",")),console.log("grupo inativar",i,i.join(",")),o.length+i.length>0&&await $utils.geeksApi({ret:{funcao:"53385537-7D4E-460B-8113-FED2D02D7017",ativar:o,inativar:i,codigoGrupo:this.permissao.codigoGrupo}}),this.permissao.mostrar=!1},usuario_permissao_pai_usuario_click(o){for(const i of this.permissao.ret.itens.filter(r=>r.codigoPai===o.codigoPai))i.permissaoUsuario=o.usuarioPermissao},usuario_permissao_pai_grupo_click(o){for(const i of this.permissao.ret.itens.filter(r=>r.codigoPai===o.codigoPai))i.permissaoGrupo=o.grupoPermissao},usuario_permissao_pai_atualizar(o){const i=this.permissao.ret.itens.filter(d=>d.codigoPai===o.codigoPai)[0];let r=i.permissaoUsuario,t=i.permissaoGrupo;for(const d of this.permissao.ret.itens.filter(l=>l.codigoPai===o.codigoPai))if(d.permissaoGrupo!==t){t=null;break}for(const d of this.permissao.ret.itens.filter(l=>l.codigoPai===o.codigoPai))if(d.permissaoUsuario!==r){r=null;break}o.grupoPermissao=t,o.usuarioPermissao=r},async usuario_permissao_empresa_show(o){const i=(await $db.empresa.leOnlinePlat({codigoClienteSistema:this.clienteSistema.codigoClienteSistema})).sort((t,d)=>{var l,E;return((l=t.nome)==null?void 0:l.toLowerCase())<((E=d.nome)==null?void 0:E.toLowerCase())?-1:1}),r=await $utils.geeksApi({permissao:{funcao:"E0982E1C-87EC-4506-8293-675407D3312C",usuarioCpf:o.numeroDocumentoNacional}});for(const t of i)t.ativo=!!r.data.permissao.find(d=>d.empresaCnpj===t.numeroDocumentoNacional),t.ativoOriginal=t.ativo;this.empresaUsuarios.empresa=i,this.empresaUsuarios.usuario=o,this.usuario_permissao_empresa_atualizar_pai(),this.empresaUsuarios.mostrar=!this.empresaUsuarios.mostrar},async usuario_permissao_empresa_gravar(){const o=[],i=[];for(const r of this.empresaUsuarios.empresa)r.ativo!==r.ativoOriginal&&(r.ativo?o.push(r.numeroDocumentoNacional):i.push(r.numeroDocumentoNacional));console.log("ativar",o,o.join(",")),console.log("inativar",i,i.join(",")),await $utils.geeksApi({ret:{funcao:"46CC046D-A712-4C46-A1FF-98ED27C403B7",ativar:o,inativar:i,usuarioCpf:this.empresaUsuarios.usuario.numeroDocumentoNacional}})},usuario_permissao_empresa_atualizar_pai(){this.empresaUsuarios.usuario.ativo=this.empresaUsuarios.empresa[0].ativo;for(const o of this.empresaUsuarios.empresa)if(this.empresaUsuarios.usuario.ativo!==o.ativo){this.empresaUsuarios.usuario.ativo=null;break}},permissao_ativar_todos_click(o,i){let r="permissaoUsuario";o==="grupo"&&(r="permissaoGrupo");const t=this.permissao.ret.itens;function d(l){const E=t.filter(x=>l.codigoObjeto===x.codigoPai);for(const x of E)x[r]=l[r],d(x)}if(i[r]===!0&&t.filter(l=>i.codigoObjeto===l.codigoPai).length>0){$q.dialog({title:"Ativar todas as permiss\xF5es",preventClose:!0,cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},ok:{label:"Sim",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(async()=>{d(i)});return}d(i)}},mounted(){this.atualizar()}},go={class:"u-container"};function fo(o,i,r,t,d,l){const E=V("Avatar"),x=V("Badge"),K=V("lista"),y=V("g-label"),m=V("g-col"),w=V("g-row"),T=V("avatar"),Y=V("badge");return f(),U("div",null,[e(K,{titulo:"",icone:"",buscaCampo:o.termoBusca,"onUpdate:buscaCampo":i[2]||(i[2]=s=>o.termoBusca=s),onFiltro_change:l.atualizar,tabSelecionada:o.tabSelecionada,tabs:o.tabs,lista:o.lista,listaLayout:o.listaLayout,paginacao:o.paginacao,permissaoNovo:!0,filtros:[],permissaoExtras:!1,mostrarFiltrosAvancados:!1,checkboxVisible:!1,exportarXLSXVisible:!1,abrirTodosVisible:!1,showQuickAdd:!1,removerTodosVisible:!1,opcoesMarca:!1,opcoesGrupo:!1,opcoesSubGrupo:!1,opcoesTipo:!1,opcoesStatus:!1,multiplosBtnNovo:!1,style:{"margin-top":"-16px"}},{botaoNovo:a(()=>[e(b,{unelevated:"",icon:"add",label:"Novo",color:"primary","text-color":"white",class:"hideonmobile"},{default:a(()=>[e(ao,null,{default:a(()=>[e(F,{link:"","no-border":"",separator:""},{default:a(()=>[p((f(),A(G,{clickable:"",onClick:i[0]||(i[0]=s=>l.grupo_incluir_click())},{default:a(()=>[e(h,{avatar:""},{default:a(()=>[e($,{name:"add"})]),_:1}),e(h,null,{default:a(()=>[e(k,null,{default:a(()=>[c("Grupo")]),_:1})]),_:1})]),_:1})),[[q]]),p((f(),A(G,{clickable:"",onClick:i[1]||(i[1]=s=>l.usuario_incluir_show(o.grupo.find(u=>u.codigoGrupo===o.tabSelecionada.valor)))},{default:a(()=>[e(h,{avatar:""},{default:a(()=>[e($,{name:"add"})]),_:1}),e(h,null,{default:a(()=>[e(k,null,{default:a(()=>[c("Usu\xE1rio")]),_:1})]),_:1})]),_:1})),[[q]])]),_:1})]),_:1})]),_:1})]),itemLista:a(()=>[e(F,{bordered:"",class:"bg-white q-mb-xs rounded-borders"},{default:a(()=>[(f(!0),U(D,null,P(o.lista,(s,u)=>(f(),U("div",{key:u,class:"itemHover"},[e(G,{"manual-focus":"",class:"q-py-sm q-px-xs",style:{"flex-wrap":"wrap!important"}},{default:a(()=>[e(h,{class:"col-12 col-sm no-margin"},{default:a(()=>[e(G,{class:"q-pa-none"},{default:a(()=>[e(h,{class:"col-auto items-center"},{default:a(()=>[e(E,{imagem:null,rotulo:s.apelido,tamanho:"40",style:{display:"flex","align-self":"center"}},null,8,["rotulo"])]),_:2},1024),e(h,{class:"col"},{default:a(()=>[e(k,{lines:"2",class:"text-tertiary text-weight-bold ellipsis-2-lines"},{default:a(()=>[c(_(s.nome),1)]),_:2},1024),e(k,{caption:"",lines:"1",class:"text-tertiary ellipsis"},{default:a(()=>[c(_(s.apelido),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(h,{class:"col-grow col-sm-3 col-md-2 colq-pl-sm no-margin"},{default:a(()=>[e(k,{lines:"1",color:"tertiary",class:"ellipsis"},{default:a(()=>[c(_(s.numeroDocumentoNacional),1)]),_:2},1024),e(k,{caption:"",lines:"1",color:"tertiary",class:"ellipsis"},{default:a(()=>{var n;return[e(x,{rotulo:(n=o.grupo.find(g=>g.codigoGrupo===s.codigoGrupo))==null?void 0:n.descricao,cor:"tertiary",escuro:"",rounded:""},null,8,["rotulo"])]}),_:2},1024)]),_:2},1024),e(h,{class:"col-shrink q-pl-sm no-margin"},{default:a(()=>[e(k,{class:"text-tertiary text-weight-bold text-right"},{default:a(()=>[e(b,{onClick:n=>l.usuario_editar_show(s),icon:"edit",size:"md",rounded:"",flat:"",dense:"",color:"primary",class:"q-mr-sm"},{default:a(()=>[e(S,{anchor:"bottom middle",self:"center middle"},{default:a(()=>[c("Editar usu\xE1rio")]),_:1})]),_:2},1032,["onClick"]),e(b,{onClick:n=>l.usuario_permissao_show(s),icon:"admin_panel_settings",size:"md",rounded:"",flat:"",dense:"",color:"primary",class:"q-mr-sm"},{default:a(()=>[e(S,{anchor:"bottom middle",self:"center middle"},{default:a(()=>[c("Editar permiss\xF5es")]),_:1})]),_:2},1032,["onClick"]),e(b,{onClick:n=>l.usuario_permissao_empresa_show(s),icon:"business",size:"md",rounded:"",flat:"",dense:"",color:"primary",class:"q-mr-sm"},{default:a(()=>[e(S,{anchor:"bottom middle",self:"center middle"},{default:a(()=>[c("Permiss\xE3o empresa")]),_:1})]),_:2},1032,["onClick"]),e(b,{onClick:n=>l.usuario_excluir_click(s),icon:"delete",size:"md",rounded:"",flat:"",dense:"",color:"tertiary"},{default:a(()=>[e(S,{anchor:"bottom middle",self:"center middle"},{default:a(()=>[c("Excluir usu\xE1rio")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(z)]))),128)),(f(!0),U(D,null,P(o.grupo,(s,u)=>p((f(),U("div",{key:u,class:"itemHover"},[e(G,{"manual-focus":"",class:"q-py-sm q-px-xs",style:{"flex-wrap":"wrap!important"}},{default:a(()=>[e(h,{class:"col-12 col-sm no-margin"},{default:a(()=>[e(G,{class:"q-pa-none"},{default:a(()=>[e(h,{class:"col-auto items-center"},{default:a(()=>[e(E,{imagem:null,rotulo:s.descricao,tamanho:"40",style:{display:"flex","align-self":"center"}},null,8,["rotulo"])]),_:2},1024),e(h,{class:"col"},{default:a(()=>[e(k,{lines:"2",class:"text-tertiary text-weight-bold ellipsis-2-lines"},{default:a(()=>[c(_(s.descricao),1)]),_:2},1024),e(k,{caption:"",lines:"1",class:"text-tertiary ellipsis"},{default:a(()=>[c(" C\xF3digo "+_(s.codigoGrupo),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(h,{class:"col-12 col-sm-shrink q-pl-sm no-margin"},{default:a(()=>[e(k,{class:"text-tertiary text-weight-bold text-right"},{default:a(()=>[e(b,{onClick:n=>l.grupo_editar_click(s),icon:"edit",size:"md",rounded:"",flat:"",dense:"",color:"primary",class:"q-mr-sm"},{default:a(()=>[e(S,{anchor:"bottom middle",self:"center middle"},{default:a(()=>[c("Editar grupo")]),_:1})]),_:2},1032,["onClick"]),e(b,{onClick:n=>l.grupo_permissao_show(s),icon:"admin_panel_settings",size:"md",rounded:"",flat:"",dense:"",color:"primary",class:"q-mr-sm"},{default:a(()=>[e(S,{anchor:"bottom middle",self:"center middle"},{default:a(()=>[c("Editar permiss\xF5es")]),_:1})]),_:2},1032,["onClick"]),e(b,{onClick:n=>l.grupo_excluir_click(s),icon:"delete",size:"md",rounded:"",flat:"",dense:"",color:"tertiary"},{default:a(()=>[e(S,{anchor:"bottom middle",self:"center middle"},{default:a(()=>[c("Excluir grupo")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(z)])),[[C,o.tabSelecionada.valor==="Grupos"]])),128))]),_:1})]),_:1},8,["buscaCampo","onFiltro_change","tabSelecionada","tabs","lista","listaLayout","paginacao"]),e(N,{modelValue:o.telaAdicionarUsuario.mostrar,"onUpdate:modelValue":i[8]||(i[8]=s=>o.telaAdicionarUsuario.mostrar=s),persistent:""},{default:a(()=>[e(io,{style:{width:"500px","max-width":"80vw"}},{default:a(()=>[e(L,null,{default:a(()=>[p(e(y,{text:"h6"},{default:a(()=>[c("Adicionar usu\xE1rio")]),_:1},512),[[C,!o.telaAdicionarUsuario.codigoUsuario]]),p(e(y,{text:"h6"},{default:a(()=>[c("Atualizar usu\xE1rio")]),_:1},512),[[C,o.telaAdicionarUsuario.codigoUsuario]])]),_:1}),e(L,{class:"q-py-none"},{default:a(()=>[e(so,{modelValue:o.telaAdicionarUsuario.codigoGrupo,"onUpdate:modelValue":i[3]||(i[3]=s=>o.telaAdicionarUsuario.codigoGrupo=s),options:o.grupo,"option-value":"codigoGrupo","option-label":s=>s===null?"":s.descricao,label:"Grupo","map-options":"","emit-value":"",filled:"",dense:"",hint:"",class:"q-mb-md"},null,8,["modelValue","options","option-label"]),e(O,{modelValue:o.telaAdicionarUsuario.nome,"onUpdate:modelValue":i[4]||(i[4]=s=>o.telaAdicionarUsuario.nome=s),onClick:l.usuario_seleciona_click,label:"Nome",filled:"",dense:"",readonly:"",disable:!!o.telaAdicionarUsuario.codigoUsuario,hint:o.telaAdicionarUsuario.codigoUsuario?"":"Clique para selecionar o usu\xE1rio",class:"q-mb-md"},{append:a(()=>[e($,{onClick:l.usuario_seleciona_click,name:"search",class:"cursor-pointer"},null,8,["onClick"])]),_:1},8,["modelValue","onClick","disable","hint"]),e(O,{modelValue:o.telaAdicionarUsuario.cpf,"onUpdate:modelValue":i[5]||(i[5]=s=>o.telaAdicionarUsuario.cpf=s),label:"CPF",filled:"",dense:"",readonly:"",disable:!!o.telaAdicionarUsuario.codigoUsuario,hint:o.telaAdicionarUsuario.codigoUsuario?"":"* CPF obrigat\xF3rio (preenchido ao selecionar usu\xE1rio)",class:"q-mb-md"},null,8,["modelValue","disable","hint"]),p(e(O,{modelValue:o.telaAdicionarUsuario.senha,"onUpdate:modelValue":i[7]||(i[7]=s=>o.telaAdicionarUsuario.senha=s),type:o.telaAdicionarUsuario.mostraSenha?"password":"text",label:"Senha",filled:"",dense:"",hint:"* A senha deve conter no m\xEDnimo 6 caracteres",rules:[s=>s.length>=6||"A senha deve conter no m\xEDnimo 6 caracteres"]},{append:a(()=>[e($,{onClick:i[6]||(i[6]=s=>o.telaAdicionarUsuario.mostraSenha=!o.telaAdicionarUsuario.mostraSenha),name:o.telaAdicionarUsuario.mostraSenha?"visibility_off":"visibility",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["modelValue","type","rules"]),[[C,!o.telaAdicionarUsuario.codigoUsuario]])]),_:1}),e(ro,{align:"right",class:"text-primary"},{default:a(()=>[p(e(b,{label:"Cancelar",flat:"",color:"tertiary"},null,512),[[q]]),p(e(b,{onClick:l.usuario_gravar_click,label:"Adicionar",color:"primary"},null,8,["onClick"]),[[q]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(N,{modelValue:o.permissao.mostrar,"onUpdate:modelValue":i[16]||(i[16]=s=>o.permissao.mostrar=s),maximized:""},{default:a(()=>[e(I,{container:"",class:"bg-white"},{default:a(()=>[e(H,{class:"bg-white text-tertiary"},{default:a(()=>[e(Q,{class:"bg-primary text-white"},{default:a(()=>[p(e(b,{icon:"arrow_back",round:"",flat:"",dense:""},null,512),[[q]]),e(R,null,{default:a(()=>[e(y,{lines:"1"},{default:a(()=>[c("Alterar permiss\xF5es de: "+_(o.permissao.titulo),1)]),_:1})]),_:1}),p(e(b,{onClick:l.usuario_permissao_gravar_click,label:"Salvar",color:"white","text-color":"primary",unelevated:""},null,8,["onClick"]),[[q]])]),_:1}),M("div",go,[e(w,{gutter:"sm-x",justify:"center"},{default:a(()=>[e(m,{col:"12 sm10 md7",bordered:"bottom"},{default:a(()=>[e(Q,{class:"no-padding"},{default:a(()=>[e(O,{modelValue:o.permissao.buscaPermissao,"onUpdate:modelValue":[i[9]||(i[9]=s=>o.permissao.buscaPermissao=s),l.permissao_filtro_atualiza],onClear:i[10]||(i[10]=s=>o.permissao.buscaPermissao=""),debounce:500,placeholder:"Filtrar","clear-icon":"close",standout:"",filled:"",clearable:"",dense:""},{prepend:a(()=>[e($,{name:"mdi-filter",color:"grey-6"})]),after:a(()=>[e(b,{onClick:l.atualizar,icon:"refresh",size:"17.5px",round:"",flat:"",dense:"",color:"grey-6",class:"q-ml-xs"},null,8,["onClick"])]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),e(w,{items:"center"},{default:a(()=>[e(m,{col:"xs"},{default:a(()=>[e(b,{onClick:i[11]||(i[11]=()=>{const s=!o.permissao.ret.itens.find(u=>u.codigoPai===0).aberto;o.permissao.ret.itens.forEach(u=>u.aberto=s)}),icon:o.permissao.ret.itens.find(s=>s.codigoPai===0).aberto?"expand_less":"expand_more",size:"17.5px",round:"",flat:"",dense:"",color:"grey-6"},null,8,["icon"])]),_:1}),p(e(m,{col:"xs-shrink",text:"center"},{default:a(()=>[e(v,{onClick:i[12]||(i[12]=()=>{o.v=!o.permissao.ret.itens[0].permissaoUsuario,o.permissao.ret.itens.forEach(s=>s.permissaoUsuario=o.v)}),modelValue:l.permissaoUsuarioCheckboxTodos,"onUpdate:modelValue":i[13]||(i[13]=s=>l.permissaoUsuarioCheckboxTodos=s)},null,8,["modelValue"]),e(y,{style:{"font-size":"11px"}},{default:a(()=>[c("Usu\xE1rio")]),_:1})]),_:1},512),[[C,o.permissao.tipo==="usuario"]]),e(m,{col:"xs-shrink",text:"center"},{default:a(()=>[e(v,{onClick:i[14]||(i[14]=()=>{o.v=!o.permissao.ret.itens[0].permissaoGrupo,o.permissao.ret.itens.forEach(s=>s.permissaoGrupo=o.v)}),modelValue:l.permissaoGrupoCheckboxTodos,"onUpdate:modelValue":i[15]||(i[15]=s=>l.permissaoGrupoCheckboxTodos=s)},null,8,["modelValue"]),e(y,{style:{"font-size":"11px"}},{default:a(()=>[c("Grupo")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),e(X,{class:"u-container"},{default:a(()=>[e(w,{gutter:"sm-x",mg:"lg-y",justify:"center"},{default:a(()=>[e(m,{col:"12 sm10 md7"},{default:a(()=>[(f(!0),U(D,null,P(o.permissao.ret.itens.filter(s=>s.codigoPai===0),s=>p((f(),A(w,{key:s.codigoObjeto,mg:"md-b"},{default:a(()=>[e(m,{col:"12"},{default:a(()=>[e(w,{bg:"bg-grey-3",items:"center"},{default:a(()=>[e(m,{col:"xs",onClick:()=>{s.aberto=!s.aberto},class:B(o.permissao.ret.itens.filter(u=>u.codigoPai===s.codigoObjeto).length>0?"cursor-pointer":"")},{default:a(()=>[e(y,{icon:o.permissao.ret.itens.filter(u=>u.codigoPai===s.codigoObjeto).length>0?s.aberto?"expand_less xs":"expand_more xs":"",class:B(o.permissao.ret.itens.filter(u=>u.codigoPai===s.codigoObjeto).length>0?"":"g-mg-left"),text:"medium"},{default:a(()=>[c(_(s.descricao),1)]),_:2},1032,["icon","class"])]),_:2},1032,["onClick","class"]),e(m,{col:"xs-shrink"},{default:a(()=>[p(e(v,{modelValue:s.permissaoUsuario,"onUpdate:modelValue":u=>s.permissaoUsuario=u,onClick:u=>l.permissao_ativar_todos_click("usuario",s)},null,8,["modelValue","onUpdate:modelValue","onClick"]),[[C,o.permissao.tipo==="usuario"]])]),_:2},1024),e(m,{col:"xs-shrink"},{default:a(()=>[e(v,{modelValue:s.permissaoGrupo,"onUpdate:modelValue":u=>s.permissaoGrupo=u,onClick:u=>l.permissao_ativar_todos_click("grupo",s)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),p(e(m,{col:"12"},{default:a(()=>[(f(!0),U(D,null,P(o.permissao.ret.itens.filter(u=>u.codigoPai===s.codigoObjeto),u=>p((f(),A(w,{key:u.codigoObjeto,items:"center",class:"g-mg-left"},{default:a(()=>[e(m,{col:"xs",onClick:()=>{u.aberto=!u.aberto},class:B(o.permissao.ret.itens.filter(n=>n.codigoPai===u.codigoObjeto).length>0?"cursor-pointer":"")},{default:a(()=>[e(y,{icon:o.permissao.ret.itens.filter(n=>n.codigoPai===u.codigoObjeto).length>0?u.aberto?"expand_less xs":"expand_more xs":"",text:"medium"},{default:a(()=>[c(_(u.descricao),1)]),_:2},1032,["icon"])]),_:2},1032,["onClick","class"]),e(m,{col:"xs-shrink"},{default:a(()=>[p(e(v,{modelValue:u.permissaoUsuario,"onUpdate:modelValue":n=>u.permissaoUsuario=n,onClick:n=>l.permissao_ativar_todos_click("usuario",u)},null,8,["modelValue","onUpdate:modelValue","onClick"]),[[C,o.permissao.tipo==="usuario"]])]),_:2},1024),e(m,{col:"xs-shrink"},{default:a(()=>[e(v,{modelValue:u.permissaoGrupo,"onUpdate:modelValue":n=>u.permissaoGrupo=n,onClick:n=>l.permissao_ativar_todos_click("grupo",u)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:2},1024),p(e(m,{col:"12"},{default:a(()=>[(f(!0),U(D,null,P(o.permissao.ret.itens.filter(n=>n.codigoPai===u.codigoObjeto),n=>p((f(),A(w,{key:n.codigoObjeto,items:"center",class:"g-mg-left g-mg-bottom"},{default:a(()=>[e(m,{col:"xs",onClick:()=>{n.aberto=!n.aberto},class:B(o.permissao.ret.itens.filter(g=>g.codigoPai===n.codigoObjeto).length>0?"cursor-pointer":"")},{default:a(()=>[e(y,{icon:o.permissao.ret.itens.filter(g=>g.codigoPai===n.codigoObjeto).length>0?n.aberto?"expand_less xs":"expand_more xs":"subdirectory_arrow_right",text:o.permissao.ret.itens.filter(g=>g.codigoPai===n.codigoObjeto).length>0?"medium":""},{default:a(()=>[c(_(n.descricao),1)]),_:2},1032,["icon","text"])]),_:2},1032,["onClick","class"]),e(m,{col:"xs-shrink"},{default:a(()=>[p(e(v,{modelValue:n.permissaoUsuario,"onUpdate:modelValue":g=>n.permissaoUsuario=g,onClick:g=>l.permissao_ativar_todos_click("usuario",n)},null,8,["modelValue","onUpdate:modelValue","onClick"]),[[C,o.permissao.tipo==="usuario"]])]),_:2},1024),e(m,{col:"xs-shrink"},{default:a(()=>[e(v,{modelValue:n.permissaoGrupo,"onUpdate:modelValue":g=>n.permissaoGrupo=g,onClick:g=>l.permissao_ativar_todos_click("grupo",n)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:2},1024),p(e(m,{col:"12"},{default:a(()=>[(f(!0),U(D,null,P(o.permissao.ret.itens.filter(g=>g.codigoPai===n.codigoObjeto),g=>p((f(),A(w,{key:g.codigoObjeto,items:"center",class:"g-mg-left g-mg-bottom"},{default:a(()=>[e(m,{col:"xs"},{default:a(()=>[e(y,{icon:"subdirectory_arrow_right"},{default:a(()=>[c(_(g.descricao),1)]),_:2},1024)]),_:2},1024),e(m,{col:"xs-shrink"},{default:a(()=>[p(e(v,{modelValue:g.permissaoUsuario,"onUpdate:modelValue":j=>g.permissaoUsuario=j},null,8,["modelValue","onUpdate:modelValue"]),[[C,o.permissao.tipo==="usuario"]])]),_:2},1024),e(m,{col:"xs-shrink"},{default:a(()=>[e(v,{modelValue:g.permissaoGrupo,"onUpdate:modelValue":j=>g.permissaoGrupo=j},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)),[[C,g.mostrar]])),128))]),_:2},1536),[[C,n.aberto]])]),_:2},1024)),[[C,n.mostrar]])),128))]),_:2},1536),[[C,u.aberto]])]),_:2},1024)),[[C,u.mostrar]])),128))]),_:2},1536),[[C,s.aberto]])]),_:2},1024)),[[C,s.mostrar]])),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(N,{modelValue:o.empresaUsuarios.mostrar,"onUpdate:modelValue":i[19]||(i[19]=s=>o.empresaUsuarios.mostrar=s),maximized:""},{default:a(()=>[e(I,{container:"",class:"bg-light"},{default:a(()=>[e(H,{class:"bg-light text-tertiary"},{default:a(()=>[e(Q,{class:"bg-primary text-white q-pa-sm"},{default:a(()=>[p(e(b,{dense:"",flat:"",icon:"arrow_back",round:""},null,512),[[q]]),e(R,null,{default:a(()=>[c("Permiss\xE3o de usu\xE1rios")]),_:1}),e(to),p(e(b,{onClick:l.usuario_permissao_empresa_gravar,label:"Salvar","text-color":"primary",color:"white",unelevated:""},null,8,["onClick"]),[[q]])]),_:1}),e(w,{gutter:"sm",items:"center"},{default:a(()=>[e(m,{col:"xs-shrink"},{default:a(()=>[e(T,{imagem:o.empresaUsuarios.usuario.imagem,rotulo:o.empresaUsuarios.usuario.apelido,tamanho:"40",style:{display:"flex","align-self":"center"}},null,8,["imagem","rotulo"])]),_:1}),e(m,{col:"xs"},{default:a(()=>[e(y,{text:"body1 medium"},{default:a(()=>[c(_(o.empresaUsuarios.usuario.apelido),1)]),_:1}),e(y,{text:"caption"},{default:a(()=>[c(_(o.empresaUsuarios.usuario.numeroDocumentoNacional),1)]),_:1})]),_:1}),e(m,{col:"xs-shrink"},{default:a(()=>[e(v,{modelValue:o.empresaUsuarios.usuario.ativo,"onUpdate:modelValue":i[17]||(i[17]=s=>o.empresaUsuarios.usuario.ativo=s),onClick:i[18]||(i[18]=()=>{this.empresaUsuarios.empresa.forEach(s=>{s.ativo=this.empresaUsuarios.usuario.ativo})})},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(X,null,{default:a(()=>[e(F,{bordered:"",class:"bg-white q-ma-xs rounded-borders"},{default:a(()=>[(f(!0),U(D,null,P(o.empresaUsuarios.empresa,(s,u)=>(f(),U("div",{key:u,class:"itemHover"},[e(G,{clickable:"","manual-focus":"",class:"q-py-sm q-px-xs"},{default:a(()=>[e(h,{class:"col-xs no-margin"},{default:a(()=>[e(G,{class:"q-pa-none"},{default:a(()=>[e(h,{class:"col-auto items-center"},{default:a(()=>[e(T,{imagem:s.imagem,rotulo:s.nome,tamanho:"40",style:{display:"flex","align-self":"center"}},null,8,["imagem","rotulo"])]),_:2},1024),e(h,{class:"col"},{default:a(()=>[e(k,{lines:"2",class:"text-tertiary text-weight-bold ellipsis-2-lines"},{default:a(()=>[c(_(s.nome),1)]),_:2},1024),e(k,{caption:"",lines:"2",class:"text-tertiary ellipsis"},{default:a(()=>[c(_(s.apelido),1)]),_:2},1024),e(h,{class:"hideondesktop q-mt-sm"},{default:a(()=>[M("div",null,[s.numeroDocumentoNacional?(f(),A(Y,{key:0,cor:"tertiary",escuro:"",class:"q-mr-xs"},{default:a(()=>[c(_(s.numeroDocumentoNacional),1)]),_:2},1024)):J("",!0)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(h,{class:"hideonmobile maxw180 q-pl-sm no-margin"},{default:a(()=>[s.numeroDocumentoNacional?(f(),A(lo,{key:0,color:"tertiary","multi-line":"",class:"col-auto q-mx-auto q-py-xs"},{default:a(()=>[c(_(s.numeroDocumentoNacional),1)]),_:2},1024)):J("",!0)]),_:2},1024),e(h,{class:"col-xs-shrink no-margin"},{default:a(()=>[e(v,{modelValue:s.ativo,"onUpdate:modelValue":n=>s.ativo=n,onClick:l.usuario_permissao_empresa_atualizar_pai},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:2},1024)]),_:2},1024),e(z)]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var ko=Z(po,[["render",fo]]);export{ko as default};
