import{_ as C,br as s,bb as m,bR as E,bx as t,bt as N,bu as z,bw as w,bA as y,by as v,r as c,o as P,d as $,w as l,f as n,z as J,h as D,i as S,k as U,H as g,Q as f,N as h,C as p,at as q,D as M}from"./index.2cdadbf3.js";import{c as F,a as I}from"./compactarValidarNFe.8e1d2e37.js";const Q={data:function(){return{metadados:s,idEmitente:"",infInut:F.executa(s.infInut,{})}},methods:{async abrirModalInutilizacao(){m.log("ConfiguracoesDocumentosFiscais","abrirModalInutilizacao"),this.infInut=F.executa(s.infInut,{tpAmb:await $db.configuracoes.leValorNumerico("nfce.homologacao")===1?"2":"1",mod:"",cUF:"",ano:E().format("YY"),CNPJ:"",serie:String(await $db.configuracoes.leValorNumerico("nfce.padrao.serie",1)),nNFIni:"",nNFFin:"",xJust:"Ocorreu uma falha que pulou a sequ\xEAncia de numera\xE7\xE3o"}),this.$refs.dialogInutilizacao.show()},async inutilizarNota(){let e="Erro na inutiliza\xE7\xE3o";try{m.log("ConfiguracoesDocumentosFiscais","inutilizarNota",this.infInut),t(!this.infInut.CNPJ||!this.infInut.cUF,"Empresa n\xE3o selecionada"),t(!this.infInut.mod,"Modelo n\xE3o preenchido"),t(!this.infInut.serie,"Serie n\xE3o preenchida"),t(!this.infInut.nNFIni,"N\xFAmero inicial n\xE3o preenchido"),t(!this.infInut.xJust,"Justificativa n\xE3o preenchida"),this.infInut.nNFFin||(this.infInut.nNFFin=this.infInut.nNFIni);let o=I.executa(s.infInut,this.infInut);if(I.erros.length){$g.modalAlerta.show({titulo:"Erro de valida\xE7\xE3o",erros:I.erros});return}N.show({spinner:z,spinnerColor:"amber",message:"Selecionando Certificado e Trasmitindo Inutiliza\xE7\xE3o"}),e="Ocorreu um erro ao Transmitir";const i=await w.inutilizar(s,o,this.idEmpresa);if(i.status==="Erro"){m.log("ConfiguracoesDocumentosFiscais",i);const u=[...(i.mensagem||"").split(`
`),...(i.complemento||"").split(`
`)];$g.modalAlerta.show({titulo:i.status,erros:u});return}this.$q.notifyPositive(i.mensagem),this.$refs.dialogInutilizacao.hide()}catch(o){this.$q.notifyError(e,o)}finally{N.hide()}},async selecionarEmpresaInutilizacao(e){try{const o=e.id;if(!o)return;let i=await $db.contato.le({id:o});this.idEmpresa=o,t(!i||!i.id,"N\xE3o foi poss\xEDvel recuperar os dados da empresa."),t(!i.numeroDocumentoNacional,"Empresa emitente sem CNPJ cadastrado"),i.enderecos=await $db.contatoEndereco.le({idContato:o}),t(!i.enderecos||i.enderecos.length===0,"N\xE3o foi poss\xEDvel recuperar o endere\xE7o da empresa emitente"),i.enderecoPrincipal=i.enderecos.find(u=>u.grupo==="Principal"),i.enderecoPrincipal||(i.enderecoPrincipal=i.enderecos[0]||{}),t(!i.enderecoPrincipal.uf,"Empresa emitente sem UF cadastrado"),this.infInut.cUF=String(y[(i.enderecoPrincipal.uf||"").trim()]),this.infInut.CNPJ=v(i.numeroDocumentoNacional)}catch(o){this.$q.notifyError("Erro ao selecionar a empresa.",o)}}}},T={class:"layout-padding"},A={class:"q-mt-lg text-right"};function k(e,o,i,u,B,d){const b=c("SeletorContato"),r=c("campo"),V=c("row");return P(),$(M,{ref:"dialogInutilizacao"},{default:l(()=>[n(J,{class:"q-dialog-plugin"},{default:l(()=>[n(D,{class:"bg-primary text-white"},{default:l(()=>[n(S,null,{default:l(()=>o[7]||(o[7]=[U("Inutiliza\xE7\xE3o de n\xFAmero NFe/NFCe")])),_:1}),g(n(f,{dense:"",flat:"",icon:"close",round:""},null,512),[[h]])]),_:1}),p("div",T,[p("form",{class:"q-pa-md",onSubmit:o[6]||(o[6]=q((...a)=>d.inutilizarNota&&d.inutilizarNota(...a),["prevent"]))},[n(V,{class:"q-col-gutter-md"},{default:l(()=>[n(b,{modelValue:e.idEmitente,"onUpdate:modelValue":o[0]||(o[0]=a=>e.idEmitente=a),col:"12",filtro:{ativo:!0,empresas:!0},rotulo:"Empresa",onSelecionar:d.selecionarEmpresaInutilizacao},null,8,["modelValue","onSelecionar"]),n(r,{modelValue:e.infInut.mod,"onUpdate:modelValue":o[1]||(o[1]=a=>e.infInut.mod=a),col:"3",dica:e.metadados.infInut.mod._doc,opcoes:e.metadados.infInut.mod._enumeration,"rotulo-fixo":e.metadados.infInut.mod._titulo,tipo:"seletor"},null,8,["modelValue","dica","opcoes","rotulo-fixo"]),n(r,{modelValue:e.infInut.serie,"onUpdate:modelValue":o[2]||(o[2]=a=>e.infInut.serie=a),modelModifiers:{trim:!0},col:"3",dica:e.metadados.infInut.serie._doc,rotulo:e.metadados.infInut.serie._titulo},null,8,["modelValue","dica","rotulo"]),n(r,{modelValue:e.infInut.nNFIni,"onUpdate:modelValue":o[3]||(o[3]=a=>e.infInut.nNFIni=a),modelModifiers:{trim:!0},col:"3",dica:e.metadados.infInut.nNFIni._doc,rotulo:e.metadados.infInut.nNFIni._titulo},null,8,["modelValue","dica","rotulo"]),n(r,{modelValue:e.infInut.nNFFin,"onUpdate:modelValue":o[4]||(o[4]=a=>e.infInut.nNFFin=a),modelModifiers:{trim:!0},col:"3",dica:e.metadados.infInut.nNFFin._doc,rotulo:e.metadados.infInut.nNFFin._titulo},null,8,["modelValue","dica","rotulo"]),n(r,{modelValue:e.infInut.xJust,"onUpdate:modelValue":o[5]||(o[5]=a=>e.infInut.xJust=a),modelModifiers:{trim:!0},col:"12",dica:e.metadados.infInut.xJust._doc,rotulo:e.metadados.infInut.xJust._titulo,tipo:"textoArea"},null,8,["modelValue","dica","rotulo"])]),_:1}),p("div",A,[g(n(f,{flat:"",color:"tertiary",label:"Cancelar"},null,512),[[h]]),n(f,{unelevated:"",color:"primary",type:"submit",label:"Inutilizar"})])],32)])]),_:1})]),_:1},512)}var G=C(Q,[["render",k]]);export{G as n};
