import{_ as l,r as n,aw as d,H as u,o as p,d as m,y as f}from"./index.aa8c459a.js";const h={data(){return{cfop:"",descricaoCfop:""}},emits:["update:modelValue"],methods:{async abrirPrompt(){try{if(this.somenteLeitura)return;const e=await $g.promptCfop.show({});this.selecionar(e)}catch(e){this.$q.notifyError("Erro ao abrir itens",e)}},async atualizar(){try{const e=this.modelValue&&this.modelValue.toString().length===4?(await $db.cfop.le({cfop:Number(this.modelValue)}))[0]||{}:{};this.descricaoCfop=this.modelValue&&this.modelValue.toString().length===4?e.descr||"CFOP inv\xE1lido":"Forne\xE7a um CFOP (4 d\xEDgitos)",this.cfop=String(e.cfop)||""}catch(e){this.$q.notifyError("Ocorreu erro ao consultar CFOP",e)}},selecionar(e){try{if(!e||!e.cfop)return;this.descricaoCfop=e.descr||"CFOP inv\xE1lido",this.cfop=String(e.cfop)||"",this.updateValue()}catch(r){this.$q.notifyError("Erro ao selecionar",r)}},updateValue(){this.$emit("update:modelValue",String(this.cfop)),this.$nextTick(()=>{this.atualizar()})}},props:{modelValue:{default:"",type:String},somenteLeitura:{type:Boolean}},watch:{modelValue(e){e!==this.cfop&&this.atualizar()}},created(){this.atualizar()}};function V(e,r,a,g,t,o){const i=n("campo"),s=d("mask");return u((p(),m(i,f({modelValue:t.cfop,"onUpdate:modelValue":r[0]||(r[0]=c=>t.cfop=c),maxlength:"4",ajuda:t.descricaoCfop,rotulo:"CFOP",dica:"C\xF3digo Fiscal de Opera\xE7\xF5es e Presta\xE7\xF5es das entradas e sa\xEDdas de mercadorias",onBlur:o.updateValue,after:a.somenteLeitura?void 0:[{icon:"search",handler:o.abrirPrompt}]},e.$attrs),null,16,["modelValue","ajuda","onBlur","after"])),[[s,"####"]])}var y=l(h,[["render",V]]);export{y as S};