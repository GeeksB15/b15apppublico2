import{_ as v,c7 as u,r as i,o as V,d as p,w as l,B as C,f as e,h as m,i as c,k as h,G as b,Q as n,M as _,D as g,at as w,C as S}from"./index.9759e0fb.js";import{C as T}from"./Campo.46efb835.js";const x={components:{Campo:T},data(){return{confirmado:!1}},emits:["cancelar","confirmar","update:modelValue"],methods:{eventoConfirmar(){u.log("OSTrocarStatus","eventoConfirmar",this.dados),this.confirmado=!0,this.eventoInput(!1),this.$emit("confirmar",this.dados)},eventoCancelar(){u.log("OSTrocarStatus","eventoCancelar",this.dados),this.confirmado=!1,this.eventoInput(!1)},eventoInput(s){this.$emit("update:modelValue",s)}},props:{modelValue:{required:!0,type:Boolean},dados:{required:!0,type:Object}},watch:{modelValue(s){s?this.confirmado=!1:this.confirmado||this.$emit("cancelar",this.dados)}}},O={container:"",class:"bg-white"};function y(s,o,a,B,Q,r){const d=i("campo"),f=i("row");return V(),p(S,{"model-value":a.modelValue,"onUpdate:modelValue":r.eventoInput},{default:l(()=>[C("div",O,[e(m,{class:"bg-primary text-white"},{default:l(()=>[e(c,null,{default:l(()=>[h("Trocar status da OS")]),_:1}),b(e(n,{flat:"",round:"",dense:"",icon:"close"},null,512),[[_]])]),_:1}),e(g,{onSubmit:w(r.eventoConfirmar,["prevent"]),class:"q-pa-md"},{default:l(()=>[e(f,{class:"q-col-gutter-sm"},{default:l(()=>[e(d,{modelValue:a.dados.nomeCliente,"onUpdate:modelValue":o[0]||(o[0]=t=>a.dados.nomeCliente=t),somenteLeitura:"",class:"col-12",rotulo:"Cliente"},null,8,["modelValue"]),e(d,{modelValue:a.dados.statusAtual,"onUpdate:modelValue":o[1]||(o[1]=t=>a.dados.statusAtual=t),somenteLeitura:"",class:"col-12",rotulo:"De"},null,8,["modelValue"]),e(d,{modelValue:a.dados.statusNovo,"onUpdate:modelValue":o[2]||(o[2]=t=>a.dados.statusNovo=t),somenteLeitura:"",class:"col-12",rotulo:"Para"},null,8,["modelValue"]),e(d,{modelValue:a.dados.observacao,"onUpdate:modelValue":o[3]||(o[3]=t=>a.dados.observacao=t),modelModifiers:{trim:!0},class:"col-12",maxlength:"50",rotulo:"Observa\xE7\xE3o"},null,8,["modelValue"])]),_:1}),e(m,{color:"light"},{default:l(()=>[e(c),e(n,{flat:"",color:"tertiary",onClick:r.eventoCancelar,label:"Cancelar"},null,8,["onClick"]),e(n,{unelevated:"",color:"primary",type:"submit",label:"Trocar"})]),_:1})]),_:1},8,["onSubmit"])])]),_:1},8,["model-value","onUpdate:modelValue"])}var N=v(x,[["render",y]]);export{N as O};
