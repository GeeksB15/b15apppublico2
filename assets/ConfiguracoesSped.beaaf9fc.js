<<<<<<<< HEAD:assets/ConfiguracoesSped.beaaf9fc.js
import{_ as $,cg as v,ch as q,r as I,o as h,n as _,f as e,w as t,L as C,E as k,h as S,i as b,k as i,B as l,at as D,J as M,G as V,Q as m,M as F,C as Q,c7 as f,aE as E,ci as P,bt as A,bu as z,bv as c,d as w,m as y,t as u,y as H}from"./index.9759e0fb.js";const T={data:function(){return{descricaoEmpresa:"",modalSped:!1,sped:{},spedErros:{empresa:"",dataInicio:"",dataFim:"",dataInventario:""}}},methods:{abrirModalSped(){$utils.gconsole.log("Sped","abrirModalSped"),this.modalSped=!0,this.sped={},this.spedErros={empresa:"",dataInicio:"",dataFim:"",dataInventario:""},this.descricaoEmpresa=""},async abrirmodalSpedEmpresas(){const a=await $g.promptContato.show({filtro:{ativo:!0,empresas:!0},placeholder:"Selecione a empresa"});this.selecionarEmpresa((a||{}).id)},validarSped(){return this.spedErros={empresa:this.sped.empresa?"":"Preenchimento obrigat\xF3rio",dataInicio:this.sped.dataInicio?"":"Preenchimento obrigat\xF3rio",dataFim:this.sped.dataFim?"":"Preenchimento obrigat\xF3rio",dataInventario:this.sped.dataInventario?"":"Preenchimento obrigat\xF3rio"},Object.values(this.spedErros).reduce((a,r)=>a&&!r,!0)},async gerarSped(){try{if($utils.gconsole.log("Sped","gerarSped",this.sped),!this.validarSped())return;v.show({spinner:q,spinnerColor:"amber",message:"Gerando arquivo de SPED"});const a=await $utils.executarApi("sped",this.sped);$utils.verificarErro(!a.sucesso,a.mensagem||"Erro na gera\xE7\xE3o do sped"),$utils.gconsole.log("Sped",`gerarSped: ${a.mensagem}
========
import{_ as $,cg as v,ch as q,r as I,o as h,n as _,f as e,w as t,L as C,E as k,h as S,i as b,k as i,B as l,at as D,J as M,G as V,Q as m,M as F,C as Q,c7 as f,aE as E,ci as P,bt as A,bu as z,bv as c,d as w,m as y,t as u,y as H}from"./index.334d0b54.js";const T={data:function(){return{descricaoEmpresa:"",modalSped:!1,sped:{},spedErros:{empresa:"",dataInicio:"",dataFim:"",dataInventario:""}}},methods:{abrirModalSped(){$utils.gconsole.log("Sped","abrirModalSped"),this.modalSped=!0,this.sped={},this.spedErros={empresa:"",dataInicio:"",dataFim:"",dataInventario:""},this.descricaoEmpresa=""},async abrirmodalSpedEmpresas(){const a=await $g.promptContato.show({filtro:{ativo:!0,empresas:!0},placeholder:"Selecione a empresa"});this.selecionarEmpresa((a||{}).id)},validarSped(){return this.spedErros={empresa:this.sped.empresa?"":"Preenchimento obrigat\xF3rio",dataInicio:this.sped.dataInicio?"":"Preenchimento obrigat\xF3rio",dataFim:this.sped.dataFim?"":"Preenchimento obrigat\xF3rio",dataInventario:this.sped.dataInventario?"":"Preenchimento obrigat\xF3rio"},Object.values(this.spedErros).reduce((a,r)=>a&&!r,!0)},async gerarSped(){try{if($utils.gconsole.log("Sped","gerarSped",this.sped),!this.validarSped())return;v.show({spinner:q,spinnerColor:"amber",message:"Gerando arquivo de SPED"});const a=await $utils.executarApi("sped",this.sped);$utils.verificarErro(!a.sucesso,a.mensagem||"Erro na gera\xE7\xE3o do sped"),$utils.gconsole.log("Sped",`gerarSped: ${a.mensagem}
>>>>>>>> 7d21c0dfe9fe60ff7d81361a5b466fbe35d321e4:assets/ConfiguracoesSped.496bf00f.js
 arquivo: ${a.nomeArquivo}`),await $utils.dormir(2e3),this.$q.notifyPositive(a.mensagem),this.modalSped=!1,this.$parent.atualizar()}catch(a){this.$q.notifyError("Erro na gera\xE7\xE3o do sped",a)}finally{v.hide()}},async selecionarEmpresa(a){try{if(!a)return;const r=await $db.empresa.le({idContato:a});$utils.verificarErro(!r.length||!r[0].id,"N\xE3o foi poss\xEDvel recuperar os dados da empresa."),this.descricaoEmpresa=r[0].nome||"",this.sped.empresa=r[0].codigoEmpresa,this.sped.cnpj=r[0].numeroDocumentoNacional}catch(r){this.$q.notifyError("Erro ao selecionar a empresa.",r)}}}},j={class:"layout-padding"},B={class:"row q-col-gutter-x-sm"},G=l("div",{class:"col-12 q-mt-xm text-h2 text-weight-bold"},"Dados para gera\xE7\xE3o do SPED fiscal",-1),N={class:"row justify-end"};function U(a,r,s,g,p,d){const n=I("campo");return h(),_("div",null,[e(Q,{modelValue:a.modalSped,"onUpdate:modelValue":r[4]||(r[4]=o=>a.modalSped=o),"content-css":{width:"100vw",maxWidth:"768px"}},{default:t(()=>[e(C,{container:""},{default:t(()=>[e(k,null,{default:t(()=>[e(S,null,{default:t(()=>[e(b,null,{default:t(()=>[i("SPED")]),_:1})]),_:1})]),_:1}),l("form",{onSubmit:r[3]||(r[3]=D((...o)=>d.gerarSped&&d.gerarSped(...o),["prevent"]))},[l("div",j,[l("div",B,[G,e(n,{"model-value":a.descricaoEmpresa,class:"col-12",before:[{icon:"search",handler:d.abrirmodalSpedEmpresas}],rotulo:"Empresa",error:!!a.spedErros.empresa,errorMessage:a.spedErros.empresa,"somente-leitura":""},null,8,["model-value","before","error","errorMessage"]),e(n,{modelValue:a.sped.dataInicio,"onUpdate:modelValue":r[0]||(r[0]=o=>a.sped.dataInicio=o),class:"col-12 col-md-6",rotulo:"Data in\xEDcio",error:!!a.spedErros.dataInicio,errorMessage:a.spedErros.dataInicio,tipo:"data"},null,8,["modelValue","error","errorMessage"]),e(n,{modelValue:a.sped.dataFim,"onUpdate:modelValue":r[1]||(r[1]=o=>a.sped.dataFim=o),class:"col-12 col-md-6",rotulo:"Data final",error:!!a.spedErros.dataFim,errorMessage:a.spedErros.dataFim,tipo:"data"},null,8,["modelValue","error","errorMessage"]),e(n,{modelValue:a.sped.dataInventario,"onUpdate:modelValue":r[2]||(r[2]=o=>a.sped.dataInventario=o),class:"col-12 col-md-6",rotulo:"Data invent\xE1rio",error:!!a.spedErros.dataInventario,errorMessage:a.spedErros.dataInventario,tipo:"data"},null,8,["modelValue","error","errorMessage"])])]),e(M,null,{default:t(()=>[e(S,{color:"light"},{default:t(()=>[e(b,null,{default:t(()=>[l("div",N,[V(e(m,{flat:"",color:"tertiary",label:"Cancelar"},null,512),[[F]]),e(m,{unelevated:"",color:"primary",type:"submit",label:"Gerar"})])]),_:1})]),_:1})]),_:1})],32)]),_:1})]),_:1},8,["modelValue"])])}var O=$(T,[["render",U]]);const L={components:{Sped:O},computed:{colunasSped(){return[{align:"left",name:"dataHoraSolicitacao",field:"dataHoraSolicitacao",label:"Data Solicita\xE7\xE3o",sortable:!0,format:this.$filters.dataHora},{align:"left",name:"situacao",field:"situacao",label:"Situacao",sortable:!0},{align:"center",name:"cnpj",field:"cnpj",label:"Empresa",sortable:!0},{align:"left",name:"dataInicio",field:"dataInicio",label:"Data In\xEDcio",sortable:!0,format:this.$filters.data},{align:"left",name:"dataFim",field:"dataFim",label:"Data Fim",sortable:!0,format:this.$filters.data},{align:"left",name:"dataInventario",field:"dataInventario",label:"Data Invent\xE1rio",sortable:!0,format:this.$filters.data}]}},data:function(){return{tabelaSped:[]}},methods:{abrirModalSped(){this.$refs.modalSped.abrirModalSped()},async atualizar(){f.log("ConfiguracoesSped","atualizar()");try{this.tabelaSped=await E.spedArquivo.leOnline()}catch(a){this.$q.notifyError("Erro na consulta dos arquivos Sped",a)}},async downloadSped(a){f.log("ConfiguracoesSped","downloadSped",a);function r(s,g){var p=document.createElement("a");p.setAttribute("href","data:attachment/text;charset=utf-8,"+encodeURIComponent(g)),p.setAttribute("download",s),p.click()}try{const s=await E.spedArquivo.baixaConteudoOnline(a);f.log("ConfiguracoesSped",`downloadSped
 arquivo: ${s[0].nome}
 tamanho: ${s[0].arquivo.length} kb`),P(!s||!s.length||!s[0].nome||!s[0].arquivo,"Arquivo Sped n\xE3o encontrado"),r(s[0].nome,s[0].arquivo)}catch(s){this.$q.notifyError("Erro na consulta do arquivo Sped",s)}}},created(){f.log("ConfiguracoesSped","created()"),this.atualizar()}},J={class:"u-container"},R={class:"text-left q-mt-lg"},W={row:""};function K(a,r,s,g,p,d){const n=I("sped");return h(),_("div",J,[l("div",R,[l("div",W,[e(m,{class:"q-ma-sm no-shadow",color:"primary",icon:"control_point",label:"Gerar SPED fiscal",onClick:d.abrirModalSped},null,8,["onClick"])])]),e(H,{class:"bg-white no-shadow"},{default:t(()=>[e(A,{title:"Hist\xF3rico de arquivos Sped",rows:a.tabelaSped,columns:d.colunasSped,"row-key":"id"},{body:t(o=>[e(z,{props:o},{default:t(()=>[e(c,{key:"dataHoraSolicitacao",props:o},{default:t(()=>[o.row.situacao==="Arquivo gerado"?(h(),w(m,{key:0,class:"no-shadow",color:"tertiary",size:"md",icon:"cloud_download",round:"",flat:"",onClick:X=>d.downloadSped(o.row.id)},{default:t(()=>[e(y,null,{default:t(()=>[i("Download")]),_:1})]),_:2},1032,["onClick"])):(h(),w(m,{key:1,class:"no-shadow",color:"tertiary",size:"md",icon:"refresh",round:"",flat:"",onClick:d.atualizar},{default:t(()=>[e(y,null,{default:t(()=>[i("Atualizar")]),_:1})]),_:1},8,["onClick"])),i(" "+u(a.$filters.dataHora(o.row.dataHoraSolicitacao)),1)]),_:2},1032,["props"]),e(c,{key:"situacao",props:o},{default:t(()=>[i(u(o.row.situacao),1)]),_:2},1032,["props"]),e(c,{key:"cnpj",props:o},{default:t(()=>[i(u(o.row.cnpj),1)]),_:2},1032,["props"]),e(c,{key:"dataInicio",props:o},{default:t(()=>[i(u(a.$filters.data(o.row.dataInicio)),1)]),_:2},1032,["props"]),e(c,{key:"dataFim",props:o},{default:t(()=>[i(u(a.$filters.data(o.row.dataFim)),1)]),_:2},1032,["props"]),e(c,{key:"dataInventario",props:o},{default:t(()=>[i(u(a.$filters.data(o.row.dataInventario)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1}),e(n,{ref:"modalSped"},null,512)])}var Z=$(L,[["render",K]]);export{Z as default};
