import{_ as w,r as u,o as m,d as c,w as i,f as e,L as q,E as _,h as p,Q as h,i as f,k as v,H as F,I,B as s,y as D,as as Q,j as g,at as V,e as C,J as P,bb as k,C as O}from"./index.9759e0fb.js";const b={data(){return{apontamento:{dataIni:new Date,dataFim:$utils.dataAtual(),equipamento:null,operador:null,quantidade:0,peso:0},dataIni:new Date,dataFim:new Date,horaIni:new Date,horaFim:new Date,operadores:null,equipamentos:null,calcularPesoQtd:!0,descricaoOperador:"",visivel:!1,item:{peso:6,quantidade:1}}},emits:["incluirApontamento"],computed:{},methods:{async show(){await this.carregarEquipamentos(),await this.carregarOperadores(),this.visivel=!0},async carregarEquipamentos(){console.log("carregar equipamentos");let l=await $db.item.leRefatorado({filtros:{tipo:"Equipamento"}});this.equipamentos=l.data.map(a=>({rotulo:a.descricao,valor:a.id}))},async carregarOperadores(){console.log("carregar operadores");let l=await $db.contato.leRefatorado({filtros:{}});this.operadores=l.data.map(a=>({rotulo:a.nome,valor:a.id}))},selecionarOperador(l,a){this.apontamento.operador=this.operadores},async concluir(){typeof this.dataIni=="string"&&(this.dataIni=new Date(this.dataIni)),typeof this.dataFim=="string"&&(this.dataFim=new Date(this.dataFim)),this.dataIni=new Date(this.dataIni),this.dataFim=new Date(this.dataFim);let l=this.dataIni.getFullYear()+"-"+("0"+(this.dataIni.getMonth()+1)).slice(-2)+"-"+("0"+this.dataIni.getDate()).slice(-2),a=this.dataFim.getFullYear()+"-"+("0"+(this.dataFim.getMonth()+1)).slice(-2)+"-"+("0"+this.dataFim.getDate()).slice(-2);if(l+="T"+this.horaIni+":00",a+="T"+this.horaFim+":00",this.apontamento.dataIni=new Date(l),this.apontamento.dataFim=new Date(a),isNaN(this.apontamento.dataIni.getTime()))return this.$q.notifyError("Data e horario de inicio invalido"),!1;if(isNaN(this.apontamento.dataFim.getTime()))return this.$q.notifyError("Data e horario de fim invalido"),!1;this.$emit("incluirApontamento",this.apontamento),this.fechar()},fechar(l){l&&l.stopPropagation(),this.$emit("update:modelValue",!1),this.apontamento={dataIni:new Date,dataFim:$utils.dataAtual(),equipamento:null,operador:null,quantidade:0,peso:0},this.dataIni=new Date,this.horaIni=new Date,this.horaFim=new Date,this.dataFim=new Date,this.dataFim=new Date,this.visivel=!1},calcularPeso(){this.calcularPesoQtd&&(this.apontamento.peso=this.apontamento.quantidade*this.item.peso)},calcularQuantidade(){this.calcularPesoQtd&&(this.apontamento.quantidade=this.apontamento.peso/this.item.peso)},async btSelecionarOperador_click(){const l=await $g.promptContato.show({filtro:{ativo:!0,operadores:!0},placeholder:"Selecione o operador"});$lodash.get(l,"id")&&(this.apontamento.operador=l.id,this.descricaoOperador=l.apelido||"")},operadorLimpar(){this.contato.idContatoOperador="",this.descricaoOperador=""}}},y={class:"col"},E={class:"col"},U={class:"col"},Y={class:"col"},B={class:"col"},N={class:"col"},T={class:"col"},x={class:"col"},M={class:"col"},A={class:"col"},H=s("span",{class:"text-tertiary"},null,-1),S=s("span",{class:"text-positive float-right"},null,-1);function L(l,a,K,z,t,r){const n=u("campo"),d=u("row");return m(),c(O,{modelValue:t.visivel,"onUpdate:modelValue":a[11]||(a[11]=o=>t.visivel=o),persistent:"",maximized:"",onKeyup:k(r.fechar,["esc"])},{default:i(()=>[e(q,{class:"bg-white",container:""},{default:i(()=>[e(_,null,{default:i(()=>[e(p,null,{default:i(()=>[e(h,{dense:"",flat:"",icon:"arrow_back",round:"",onClick:r.fechar},null,8,["onClick"]),e(f,null,{default:i(()=>[v(" Produ\xE7\xE3o de Item ")]),_:1})]),_:1})]),_:1}),e(F,null,{default:i(()=>[e(I,null,{default:i(()=>[s("div",y,[e(D,{class:"q-pa-sm q-ml-sm no-shadow"},{default:i(()=>[e(d,{class:"items-center q-col-gutter-md"},{default:i(()=>[s("div",E,[s("div",U,[e(n,{class:"col-md-6",modelValue:t.dataIni,"onUpdate:modelValue":a[0]||(a[0]=o=>t.dataIni=o),tipo:"data",format:"DD/MM/YYYY",rotulo:"Inicio da Produ\xE7\xE3o"},null,8,["modelValue"])]),s("div",Y,[e(n,{class:"col-6",modelValue:t.horaIni,"onUpdate:modelValue":a[1]||(a[1]=o=>t.horaIni=o),tipo:"hora",format:"HH:mm:ss",rotulo:"Inicio da Produ\xE7\xE3o"},null,8,["modelValue"])])]),s("div",B,[s("div",N,[e(n,{class:"col-md-6",modelValue:t.dataFim,"onUpdate:modelValue":a[2]||(a[2]=o=>t.dataFim=o),tipo:"data",format:"DD/MM/YYYY",rotulo:"Fim da Produ\xE7\xE3o"},null,8,["modelValue"])]),s("div",T,[e(n,{class:"col-6",modelValue:t.horaFim,"onUpdate:modelValue":a[3]||(a[3]=o=>t.horaFim=o),tipo:"hora",format:"HH:mm:ss",rotulo:"Fim da Produ\xE7\xE3o"},null,8,["modelValue"])])])]),_:1}),e(d,{class:"items-center q-col-gutter-md"},{default:i(()=>[s("div",{class:"col",onClick:a[5]||(a[5]=(...o)=>r.carregarEquipamentos&&r.carregarEquipamentos(...o))},[e(n,{modelValue:t.apontamento.equipamento,"onUpdate:modelValue":a[4]||(a[4]=o=>t.apontamento.equipamento=o),opcoes:t.equipamentos,tipo:"seletor",rotulo:"Equipamento"},null,8,["modelValue","opcoes"])]),s("div",{class:"col",onClick:a[7]||(a[7]=(...o)=>r.carregarOperadores&&r.carregarOperadores(...o))},[e(Q,{dense:"",rounded:"",modelValue:t.descricaoOperador,"onUpdate:modelValue":a[6]||(a[6]=o=>t.descricaoOperador=o),label:"Operador",options:["a","b"],disable:l.podeAlterarOperador,onFilter:r.btSelecionarOperador_click,class:"col-12 col-sm-4"},{append:i(()=>[t.descricaoOperador!==""?(m(),c(g,{key:0,name:"close",onClick:V(r.operadorLimpar,["stop"]),class:"cursor-pointer"},null,8,["onClick"])):C("",!0),e(g,{name:"search",onClick:V(r.btSelecionarOperador_click,["stop"]),class:"cursor-pointer"},null,8,["onClick"])]),_:1},8,["modelValue","disable","onFilter"])])]),_:1}),e(d,{class:"items-center q-col-gutter-md"},{default:i(()=>[s("div",x,[e(n,{modelValue:t.apontamento.quantidade,"onUpdate:modelValue":a[8]||(a[8]=o=>t.apontamento.quantidade=o),tipo:"quantidade",onBlur:r.calcularPeso,rotulo:"Quantidade produzida"},null,8,["modelValue","onBlur"])]),s("div",M,[e(n,{modelValue:t.calcularPesoQtd,"onUpdate:modelValue":a[9]||(a[9]=o=>t.calcularPesoQtd=o),tipo:"logico",rotulo:"Calcular Quantidade X Peso"},null,8,["modelValue"])]),s("div",A,[e(n,{modelValue:t.apontamento.peso,"onUpdate:modelValue":a[10]||(a[10]=o=>t.apontamento.peso=o),tipo:"decimal",onBlur:r.calcularQuantidade,rotulo:"Peso em quilos"},null,8,["modelValue","onBlur"])])]),_:1})]),_:1})])]),_:1})]),_:1}),e(P,{class:"bg-light"},{default:i(()=>[e(p,null,{default:i(()=>[e(f,null,{default:i(()=>[H,S]),_:1}),e(h,{class:"q-ml-sm no-shadow float-right",color:"primary",label:"Concluir",onClick:r.concluir,unelevated:""},null,8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onKeyup"])}var j=w(b,[["render",L]]);export{j as P};
