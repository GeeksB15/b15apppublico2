import{_ as $,bt as S,bu as C,r as I,o as g,p as q,f as o,w as t,M as k,G as D,h as v,i as b,k as d,C as l,at as M,K as V,H as F,Q as m,N as Q,D as _,bb as f,aw as w,bx as P,b6 as z,d4 as A,d5 as u,d as E,m as y,t as p,z as H}from"./index.2cdadbf3.js";const T={data:function(){return{descricaoEmpresa:"",modalSped:!1,sped:{},spedErros:{empresa:"",dataInicio:"",dataFim:"",dataInventario:""}}},methods:{abrirModalSped(){$utils.gconsole.log("Sped","abrirModalSped"),this.modalSped=!0,this.sped={},this.spedErros={empresa:"",dataInicio:"",dataFim:"",dataInventario:""},this.descricaoEmpresa=""},async abrirmodalSpedEmpresas(){const a=await $g.promptContato.show({filtro:{ativo:!0,empresas:!0},placeholder:"Selecione a empresa"});this.selecionarEmpresa((a||{}).id)},validarSped(){return this.spedErros={empresa:this.sped.empresa?"":"Preenchimento obrigat\xF3rio",dataInicio:this.sped.dataInicio?"":"Preenchimento obrigat\xF3rio",dataFim:this.sped.dataFim?"":"Preenchimento obrigat\xF3rio",dataInventario:this.sped.dataInventario?"":"Preenchimento obrigat\xF3rio"},Object.values(this.spedErros).reduce((a,e)=>a&&!e,!0)},async gerarSped(){try{if($utils.gconsole.log("Sped","gerarSped",this.sped),!this.validarSped())return;S.show({spinner:C,spinnerColor:"amber",message:"Gerando arquivo de SPED"});const a=await $utils.executarApi("sped",this.sped);$utils.verificarErro(!a.sucesso,a.mensagem||"Erro na gera\xE7\xE3o do sped"),$utils.gconsole.log("Sped",`gerarSped: ${a.mensagem}
 arquivo: ${a.nomeArquivo}`),await $utils.dormir(2e3),this.$q.notifyPositive(a.mensagem),this.modalSped=!1,this.$parent.atualizar()}catch(a){this.$q.notifyError("Erro na gera\xE7\xE3o do sped",a)}finally{S.hide()}},async selecionarEmpresa(a){try{if(!a)return;const e=await $db.empresa.le({idContato:a});$utils.verificarErro(!e.length||!e[0].id,"N\xE3o foi poss\xEDvel recuperar os dados da empresa."),this.descricaoEmpresa=e[0].nome||"",this.sped.empresa=e[0].codigoEmpresa,this.sped.cnpj=e[0].numeroDocumentoNacional}catch(e){this.$q.notifyError("Erro ao selecionar a empresa.",e)}}}},j={class:"layout-padding"},N={class:"row q-col-gutter-x-sm"},B={class:"row justify-end"};function G(a,e,s,h,c,i){const n=I("campo");return g(),q("div",null,[o(_,{modelValue:a.modalSped,"onUpdate:modelValue":e[4]||(e[4]=r=>a.modalSped=r),"content-css":{width:"100vw",maxWidth:"768px"}},{default:t(()=>[o(k,{container:""},{default:t(()=>[o(D,null,{default:t(()=>[o(v,null,{default:t(()=>[o(b,null,{default:t(()=>e[5]||(e[5]=[d("SPED")])),_:1})]),_:1})]),_:1}),l("form",{onSubmit:e[3]||(e[3]=M((...r)=>i.gerarSped&&i.gerarSped(...r),["prevent"]))},[l("div",j,[l("div",N,[e[6]||(e[6]=l("div",{class:"col-12 q-mt-xm text-h2 text-weight-bold"},"Dados para gera\xE7\xE3o do SPED fiscal",-1)),o(n,{"model-value":a.descricaoEmpresa,class:"col-12",before:[{icon:"search",handler:i.abrirmodalSpedEmpresas}],rotulo:"Empresa",error:!!a.spedErros.empresa,errorMessage:a.spedErros.empresa,"somente-leitura":""},null,8,["model-value","before","error","errorMessage"]),o(n,{modelValue:a.sped.dataInicio,"onUpdate:modelValue":e[0]||(e[0]=r=>a.sped.dataInicio=r),class:"col-12 col-md-6",rotulo:"Data in\xEDcio",error:!!a.spedErros.dataInicio,errorMessage:a.spedErros.dataInicio,tipo:"data"},null,8,["modelValue","error","errorMessage"]),o(n,{modelValue:a.sped.dataFim,"onUpdate:modelValue":e[1]||(e[1]=r=>a.sped.dataFim=r),class:"col-12 col-md-6",rotulo:"Data final",error:!!a.spedErros.dataFim,errorMessage:a.spedErros.dataFim,tipo:"data"},null,8,["modelValue","error","errorMessage"]),o(n,{modelValue:a.sped.dataInventario,"onUpdate:modelValue":e[2]||(e[2]=r=>a.sped.dataInventario=r),class:"col-12 col-md-6",rotulo:"Data invent\xE1rio",error:!!a.spedErros.dataInventario,errorMessage:a.spedErros.dataInventario,tipo:"data"},null,8,["modelValue","error","errorMessage"])])]),o(V,null,{default:t(()=>[o(v,{color:"light"},{default:t(()=>[o(b,null,{default:t(()=>[l("div",B,[F(o(m,{flat:"",color:"tertiary",label:"Cancelar"},null,512),[[Q]]),o(m,{unelevated:"",color:"primary",type:"submit",label:"Gerar"})])]),_:1})]),_:1})]),_:1})],32)]),_:1})]),_:1},8,["modelValue"])])}var U=$(T,[["render",G]]);const O={components:{Sped:U},computed:{colunasSped(){return[{align:"left",name:"dataHoraSolicitacao",field:"dataHoraSolicitacao",label:"Data Solicita\xE7\xE3o",sortable:!0,format:this.$filters.dataHora},{align:"left",name:"situacao",field:"situacao",label:"Situacao",sortable:!0},{align:"center",name:"cnpj",field:"cnpj",label:"Empresa",sortable:!0},{align:"left",name:"dataInicio",field:"dataInicio",label:"Data In\xEDcio",sortable:!0,format:this.$filters.data},{align:"left",name:"dataFim",field:"dataFim",label:"Data Fim",sortable:!0,format:this.$filters.data},{align:"left",name:"dataInventario",field:"dataInventario",label:"Data Invent\xE1rio",sortable:!0,format:this.$filters.data}]}},data:function(){return{tabelaSped:[]}},methods:{abrirModalSped(){this.$refs.modalSped.abrirModalSped()},async atualizar(){f.log("ConfiguracoesSped","atualizar()");try{this.tabelaSped=await w.spedArquivo.leOnline()}catch(a){this.$q.notifyError("Erro na consulta dos arquivos Sped",a)}},async downloadSped(a){f.log("ConfiguracoesSped","downloadSped",a);function e(s,h){var c=document.createElement("a");c.setAttribute("href","data:attachment/text;charset=utf-8,"+encodeURIComponent(h)),c.setAttribute("download",s),c.click()}try{const s=await w.spedArquivo.baixaConteudoOnline(a);f.log("ConfiguracoesSped",`downloadSped
 arquivo: ${s[0].nome}
 tamanho: ${s[0].arquivo.length} kb`),P(!s||!s.length||!s[0].nome||!s[0].arquivo,"Arquivo Sped n\xE3o encontrado"),e(s[0].nome,s[0].arquivo)}catch(s){this.$q.notifyError("Erro na consulta do arquivo Sped",s)}}},created(){f.log("ConfiguracoesSped","created()"),this.atualizar()}},K={class:"u-container"},L={class:"text-left q-mt-lg"},R={row:""};function W(a,e,s,h,c,i){const n=I("sped");return g(),q("div",K,[l("div",L,[l("div",R,[o(m,{class:"q-ma-sm no-shadow",color:"primary",icon:"control_point",label:"Gerar SPED fiscal",onClick:i.abrirModalSped},null,8,["onClick"])])]),o(H,{class:"bg-white no-shadow"},{default:t(()=>[o(z,{title:"Hist\xF3rico de arquivos Sped",rows:a.tabelaSped,columns:i.colunasSped,"row-key":"id"},{body:t(r=>[o(A,{props:r},{default:t(()=>[o(u,{key:"dataHoraSolicitacao",props:r},{default:t(()=>[r.row.situacao==="Arquivo gerado"?(g(),E(m,{key:0,class:"no-shadow",color:"tertiary",size:"md",icon:"cloud_download",round:"",flat:"",onClick:J=>i.downloadSped(r.row.id)},{default:t(()=>[o(y,null,{default:t(()=>e[0]||(e[0]=[d("Download")])),_:1})]),_:2},1032,["onClick"])):(g(),E(m,{key:1,class:"no-shadow",color:"tertiary",size:"md",icon:"refresh",round:"",flat:"",onClick:i.atualizar},{default:t(()=>[o(y,null,{default:t(()=>e[1]||(e[1]=[d("Atualizar")])),_:1})]),_:1},8,["onClick"])),d(" "+p(a.$filters.dataHora(r.row.dataHoraSolicitacao)),1)]),_:2},1032,["props"]),o(u,{key:"situacao",props:r},{default:t(()=>[d(p(r.row.situacao),1)]),_:2},1032,["props"]),o(u,{key:"cnpj",props:r},{default:t(()=>[d(p(r.row.cnpj),1)]),_:2},1032,["props"]),o(u,{key:"dataInicio",props:r},{default:t(()=>[d(p(a.$filters.data(r.row.dataInicio)),1)]),_:2},1032,["props"]),o(u,{key:"dataFim",props:r},{default:t(()=>[d(p(a.$filters.data(r.row.dataFim)),1)]),_:2},1032,["props"]),o(u,{key:"dataInventario",props:r},{default:t(()=>[d(p(a.$filters.data(r.row.dataInventario)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1}),o(n,{ref:"modalSped"},null,512)])}var Y=$(O,[["render",W]]);export{Y as default};
