import{_ as A,a0 as j,dl as F,r as I,o as p,p as y,C as c,f as e,w as o,j as z,au as M,q as U,S as V,ax as P,b9 as H,T as v,U as C,W as L,t as f,e as w,F as E,u as T,i as W,k as u,d as R,Q as q,bg as D,P as O,H as B,N as S,h as G,b8 as J,d6 as N,dm as $,d7 as x}from"./index.a5f5d5a1.js";import{E as K}from"./EnvelopeCard.dd3d7e1d.js";import"./emitirNFe.35117289.js";import"./DocumentosFiscais.e7abeeeb.js";import"./Campo.e3115967.js";import"./compactarValidarNFe.0517b1bc.js";import"./obterItens.5c765a4f.js";import"./codigosANP.a6c1a264.js";import"./ModalHistoricoStatus.ffd13738.js";const X={components:{Badge:j,EnvelopeCard:K,Receita:F},data(){return{columns:[{name:"distancia",align:"left",field:"distancia",style:"font-weight:bold;min-width:110px"},{name:"adicao",align:"center",field:"adicao"},{name:"esferico",align:"center",field:"esferico"},{name:"cilindrico",align:"center",field:"cilindrico"},{name:"eixo",align:"center",field:"eixo"},{name:"prisma",align:"center",field:"prisma"},{name:"base",align:"center",field:"base"},{name:"dnp",align:"center",field:"dnp"}],contato:{},configImpressaoReceita:{},receitas:[],idsEnvelopeReceita:{},permissaoVisualizarEnvelopes:!1,filtro:{},filtros:{pacientes:{todos:[],selecionados:[]},medicos:{todos:[],selecionados:[]},validade:{todos:[{label:"Vencido",value:"vencido"},{label:"\xC0 vencer",value:"aVencer"}],selecionados:[]}}}},methods:{async permissoes(){this.permissaoVisualizarEnvelopes=await $db.permissao.objeto("atendimento//venda")},async configuraImpressaoReceita(a){if(this.configImpressaoReceita[a])return;let s=[];const l=await $db.configuracoes.porNome("impressao.receita",a);l.length?s=l.map(d=>({texto:"Imprimir Receita",...d})):s=[{valor:"receita-qrcode",texto:"Imprimir Receita"},{valor:"laudo-optometrico",texto:"Imprimir Laudo Optom\xE9trico"}];const _=$utils.clonarV2(this.configImpressaoReceita);_[a]=s,this.configImpressaoReceita=_},dadosTabela(a,s){const l=[],_=$lodash.get(s,`prisma.${a}.valor`),d=$lodash.get(s,`prisma.${a}.base`,"").trim();let h,b,n,m,k,t=[{label:"Longe",value:"longe"},{label:"M\xE9dio",value:"medio"},{label:"Perto",value:"perto"}];for(const r of t)h=$lodash.get(s,`dioptria.${a}.${r.value}.adicao`),b=$lodash.get(s,`dioptria.${a}.${r.value}.esferico`),n=$lodash.get(s,`dioptria.${a}.${r.value}.cilindrico`),m=$lodash.get(s,`dioptria.${a}.${r.value}.eixo`),k=$lodash.get(s,`dioptria.${a}.${r.value}.dnp`),(b||n||m||k)&&l.push({distancia:r.label,adicao:h,esferico:b,cilindrico:n,eixo:m,prisma:_,base:d,dnp:k});return l},habilitaPerto(a){let s=!1,l=!1;return($lodash.get(a,"dioptria.od.longe.esferico")||$lodash.get(a,"dioptria.od.longe.cilindrico")||$lodash.get(a,"dioptria.od.longe.eixo")||$lodash.get(a,"dioptria.od.longe.dnp")||$lodash.get(a,"dioptria.oe.longe.esferico")||$lodash.get(a,"dioptria.oe.longe.cilindrico")||$lodash.get(a,"dioptria.oe.longe.eixo")||$lodash.get(a,"dioptria.oe.longe.dnp"))&&(l=!0),!l&&($lodash.get(a,"dioptria.od.perto.cilindrico")||$lodash.get(a,"dioptria.od.perto.eixo")||$lodash.get(a,"dioptria.oe.perto.cilindrico")||$lodash.get(a,"dioptria.oe.perto.eixo"))&&(s=!0),s},async abrirModalReceita(a,s){try{let l;if(a){const _=await $db.hibrido.le({table:"documento",id:a});_.idEmpresa&&(l=_.idEmpresa)}if((!a||!l)&&(l=(await $g.promptContato.show({filtro:{ativo:!0,empresas:!0},placeholder:"Selecione a empresa"})||{}).id),!l)return;this.$refs.modalReceita.mostrar({id:a||$utils.uuid(),idEmpresa:l,duplicarReceita:s})}catch(l){this.$q.notifyError("Ocorreu um erro ao carregar a receita.",l)}},async atualizar(){const a=$utils.logarIni("AtendimentoOticaReceita",this.contato.id);await $tryLoading(async()=>{const s={idContato:this.contato.id,idsPaciente:[],idsMedico:[],validade:"",...this.filtro};if(!s.idContato)return;let l=(await $db.receita.leListaCompleta({where:{idContato:s.idContato}})).map($db.receita.montaReceita);const _={},d={};for(let n in l)_[l[n].medico.id]={nome:l[n].medico.nome},d[l[n].paciente.id]={nome:l[n].paciente.nome};const h=[];for(const n in _)h.push({value:n,label:_[n].nome});this.filtros.medicos.todos=h;const b=[];for(const n in d)b.push({value:n,label:d[n].nome});if(this.filtros.pacientes.todos=b,this.filtros.pacientes.selecionados.length&&(l=l.filter(n=>this.filtros.pacientes.selecionados.find(m=>m.value===n.paciente.id))),this.filtros.medicos.selecionados.length&&(l=l.filter(n=>this.filtros.medicos.selecionados.find(m=>m.value===n.medico.id))),this.filtros.validade.selecionados.length===1){const n=new Date().setHours(0,0,0,0);this.filtros.validade.selecionados.find(m=>m.value==="vencido")&&(l=l.filter(m=>new Date(m.validade).setHours(0,0,0,0)<n)),this.filtros.validade.selecionados.find(m=>m.value==="aVencer")&&(l=l.filter(m=>new Date(m.validade).setHours(0,0,0,0)>=n))}for(const n of l)this.idsEnvelopeReceita[n.id]=n.envelopes.sort((m,k)=>new Date(k.dataHoraEmissao)-new Date(m.dataHoraEmissao)).map(({id:m})=>m),this.configuraImpressaoReceita(n.idEmpresa);this.receitas=$lodash.orderBy(l,"data","desc")}),$utils.logarFim(a,1)},async excluirReceita(a){this.$q.dialog({message:"Esta a\xE7\xE3o ir\xE1 excluir a receita.",title:"Tem certeza?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(async()=>{try{await $db.receita.exclui(a),this.$q.notifyPositive("Receita exclu\xEDda com sucesso.")}catch(s){this.$q.notifyError("Ocorreu um erro ao excluir a receita.",s)}this.atualizar()})},async carregarContato(){const a=this.$route.params.id;this.contato=await $db.contato.le({id:a})}},watch:{async"$route.params.id"(){await this.carregarContato(),this.atualizar()}},async mounted(){await this.permissoes(),await this.carregarContato(),this.atualizar()}},Y={class:"q-mt-md full-width float-left"},Z={class:"bg-white q-px-md q-pb-md rounded-borders"},ee={class:"col-1 col-md-auto"},oe={class:"col-11 col-md",icon:"person"},ae={class:"col-6 col-md",icon:"healing"},te={class:"col-6 col-md",icon:"calendar_today"},ie={key:0,class:"bg-white q-pa-xl text-center rounded-borders"},le=c("p",{class:"text-caption"},"Para incluir, utilize o bot\xE3o de adi\xE7\xE3o.",-1),se={class:"q-pa-md"},de={class:"col-12 col-md-4"},ne=c("span",{class:"text-body2"},"Paciente: ",-1),re={class:"col-12 col-md-4"},ce=c("span",{class:"text-body2"},"M\xE9dico: ",-1),ue={class:"col-12 col-md-2"},me=c("span",{class:"text-body2"},"Data: ",-1),pe={class:"col-12 col-md-2"},fe=c("span",{class:"text-body2"},"Validade: ",-1),he={key:0,class:"col-12",style:{"word-wrap":"break-word"}},_e=c("strong",{class:"text-body2"},"Observa\xE7\xE3o:",-1),ge={style:{"font-weight":"bold !important","font-size":"120%",color:"black"}};function ve(a,s,l,_,d,h){const b=I("row"),n=I("badge"),m=I("envelopeCard"),k=I("receita");return p(),y("div",Y,[c("div",Z,[e(b,{class:"q-col-gutter-md items-center"},{default:o(()=>[c("div",ee,[e(z,{name:"mdi-filter",size:"sm",class:"text-tertiary"})]),c("div",oe,[e(M,{outlined:"",dense:"",modelValue:d.filtros.pacientes.selecionados,"onUpdate:modelValue":[s[0]||(s[0]=t=>d.filtros.pacientes.selecionados=t),h.atualizar],multiple:"",options:d.filtros.pacientes.todos,label:"Paciente"},U({_:2},[d.filtros.pacientes.todos.length>1?{name:"option",fn:o(({itemProps:t,opt:r,selected:i,toggleOption:g})=>[e(V,P(H(t)),{default:o(()=>[e(v,null,{default:o(()=>[e(C,{innerHTML:r.label},null,8,["innerHTML"])]),_:2},1024),e(v,{side:""},{default:o(()=>[e(L,{"model-value":i,"onUpdate:modelValue":Q=>g(r)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1040)]),key:"0"}:void 0]),1032,["modelValue","options","onUpdate:modelValue"])]),c("div",ae,[e(M,{outlined:"",dense:"",modelValue:d.filtros.medicos.selecionados,"onUpdate:modelValue":[s[1]||(s[1]=t=>d.filtros.medicos.selecionados=t),h.atualizar],"map-options":"",multiple:"",options:d.filtros.medicos.todos,label:"M\xE9dico"},U({_:2},[d.filtros.medicos.todos.length>1?{name:"option",fn:o(({itemProps:t,opt:r,selected:i,toggleOption:g})=>[e(V,P(H(t)),{default:o(()=>[e(v,null,{default:o(()=>[e(C,{innerHTML:r.label},null,8,["innerHTML"])]),_:2},1024),e(v,{side:""},{default:o(()=>[e(L,{"model-value":i,"onUpdate:modelValue":Q=>g(r)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1040)]),key:"0"}:void 0]),1032,["modelValue","options","onUpdate:modelValue"])]),c("div",te,[e(M,{outlined:"",dense:"",modelValue:d.filtros.validade.selecionados,"onUpdate:modelValue":[s[2]||(s[2]=t=>d.filtros.validade.selecionados=t),h.atualizar],multiple:"",options:d.filtros.validade.todos,label:"Validade"},{option:o(({itemProps:t,opt:r,selected:i,toggleOption:g})=>[e(V,P(H(t)),{default:o(()=>[e(v,null,{default:o(()=>[e(C,{innerHTML:r.label},null,8,["innerHTML"])]),_:2},1024),e(v,{side:""},{default:o(()=>[e(L,{"model-value":i,"onUpdate:modelValue":Q=>g(r)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onUpdate:modelValue"])])]),_:1})]),d.receitas.length?w("",!0):(p(),y("div",ie,[c("p",null,"N\xE3o h\xE1 receitas cadastradas para o contato "+f((d.contato.nome||"").trim())+".",1),le])),c("div",null,[(p(!0),y(E,null,T(d.receitas,t=>(p(),y("div",{class:"bg-white q-mt-md rounded-borders",key:t.id},[e(G,null,{default:o(()=>{var r,i;return[e(W,null,{default:o(()=>[u("Receita")]),_:1}),e(n,{class:"q-mr-md",cor:"positive",escuro:""},{default:o(()=>[u(f(t.id?"#"+t.id.substr(-6,6):""),1)]),_:2},1024),((r=d.configImpressaoReceita[t.idEmpresa])==null?void 0:r.length)>1?(p(),R(q,{key:0,color:"tertiary",dense:"",flat:"",icon:"print",round:""},{default:o(()=>[e(D,null,{default:o(()=>[e(O,{link:"",separator:""},{default:o(()=>[(p(!0),y(E,null,T(d.configImpressaoReceita[t.idEmpresa],g=>(p(),R(V,{clickable:"",key:g.valor,onClick:Q=>a.$imprimir(g.valor,(t||{}).id||"0")},{default:o(()=>[e(v,{avatar:""},{default:o(()=>[e(z,{name:"print"})]),_:1}),e(v,null,{default:o(()=>[e(C,null,{default:o(()=>[u(f(g.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)):w("",!0),((i=d.configImpressaoReceita[t.idEmpresa])==null?void 0:i.length)===1?(p(),R(q,{key:1,color:"tertiary",dense:"",flat:"",icon:"print",round:"",onClick:g=>a.$imprimir(d.configImpressaoReceita[t.idEmpresa][0].valor,(t||{}).id||"0")},null,8,["onClick"])):w("",!0),e(q,{color:"primary",dense:"",flat:"",icon:"edit",onClick:g=>h.abrirModalReceita(t.id,!1),round:""},null,8,["onClick"]),e(q,{color:"tertiary",flat:"",icon:"more_vert",round:""},{default:o(()=>[e(D,null,{default:o(()=>[e(O,{link:"",separator:""},{default:o(()=>[B((p(),R(V,{clickable:"",onClick:g=>h.abrirModalReceita(t.id,!0)},{default:o(()=>[e(v,{avatar:""},{default:o(()=>[e(z,{name:"file_copy"})]),_:1}),e(v,null,{default:o(()=>[e(C,null,{default:o(()=>[u("Duplicar")]),_:1})]),_:1})]),_:2},1032,["onClick"])),[[S]]),d.idsEnvelopeReceita[t.id].length?w("",!0):B((p(),R(V,{key:0,clickable:"",onClick:g=>h.excluirReceita(t.id)},{default:o(()=>[e(v,{avatar:""},{default:o(()=>[e(z,{name:"delete"})]),_:1}),e(v,null,{default:o(()=>[e(C,null,{default:o(()=>[u("Remover")]),_:1})]),_:1})]),_:2},1032,["onClick"])),[[S]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]}),_:2},1024),c("div",se,[e(b,{class:"q-col-gutter-md q-mb-md"},{default:o(()=>[c("div",de,[ne,c("strong",null,f(t.paciente.nome),1)]),c("div",re,[ce,c("strong",null,f(t.medico.nome),1)]),c("div",ue,[me,c("strong",null,f(a.$filters.data(t.data)),1)]),c("div",pe,[fe,c("strong",null,f(a.$filters.data(t.validade)),1)]),t.observacoes?(p(),y("div",he,[_e,c("p",null,f(t.observacoes),1)])):w("",!0)]),_:2},1024),e(b,{class:"q-col-gutter-md q-mb-md"},{default:o(()=>[(p(),y(E,null,T(["od","oe"],r=>e(J,{key:r,class:"col-xs-12 col-md-6 no-shadow",rows:h.dadosTabela(r,t.prescricao),columns:d.columns,"row-key":"name",separator:"cell",dense:"","hide-bottom":""},{header:o(i=>[e(N,null,{default:o(()=>[e($,{key:"distancia",props:i,style:{"min-width":"110px","max-width":"110px"}},{default:o(()=>[c("span",ge,[r==="od"?(p(),y(E,{key:0},[u("Olho Direito")],64)):w("",!0),r==="oe"?(p(),y(E,{key:1},[u("Olho Esquerdo")],64)):w("",!0)])]),_:2},1032,["props"]),e($,{key:"adicao",props:i},{default:o(()=>[u("Adi\xE7\xE3o")]),_:2},1032,["props"]),e($,{key:"esferico",props:i},{default:o(()=>[u("Esf\xE9rico")]),_:2},1032,["props"]),e($,{key:"cilindrico",props:i},{default:o(()=>[u("Cil\xEDndrico")]),_:2},1032,["props"]),e($,{key:"eixo",props:i},{default:o(()=>[u("Eixo")]),_:2},1032,["props"]),e($,{key:"prisma",props:i},{default:o(()=>[u("Prisma")]),_:2},1032,["props"]),e($,{key:"base",props:i},{default:o(()=>[u("Base")]),_:2},1032,["props"]),e($,{key:"dnp",props:i},{default:o(()=>[u("DNP")]),_:2},1032,["props"])]),_:2},1024)]),body:o(i=>[e(N,{props:i},{default:o(()=>[e(x,{key:"distancia",props:i},{default:o(()=>[u(f(i.row.distancia),1)]),_:2},1032,["props"]),e(x,{key:"adicao",props:i},{default:o(()=>[u(f(a.$filters.numeroSinal(i.row.adicao,2)),1)]),_:2},1032,["props"]),e(x,{key:"esferico",props:i},{default:o(()=>[u(f(a.$filters.numeroSinal(i.row.esferico,2)),1)]),_:2},1032,["props"]),e(x,{key:"cilindrico",props:i},{default:o(()=>[u(f(a.$filters.numeroSinal(i.row.cilindrico,2)),1)]),_:2},1032,["props"]),e(x,{key:"eixo",props:i},{default:o(()=>[u(f(i.row.eixo),1)]),_:2},1032,["props"]),e(x,{key:"prisma",props:i},{default:o(()=>[u(f(i.row.prisma),1)]),_:2},1032,["props"]),e(x,{key:"base",props:i},{default:o(()=>[u(f(i.row.base),1)]),_:2},1032,["props"]),e(x,{key:"dnp",props:i},{default:o(()=>[u(f(a.$filters.numeroOuBranco(i.row.dnp,2)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:2},1032,["rows","columns"])),64))]),_:2},1024),d.permissaoVisualizarEnvelopes?(p(),R(b,{key:0,class:"q-col-gutter-md"},{default:o(()=>[(p(!0),y(E,null,T(d.idsEnvelopeReceita[t.id],r=>(p(),R(m,{key:r,id:r,class:"col-12"},null,8,["id"]))),128))]),_:2},1024)):w("",!0)])]))),128))]),e(k,{ref:"modalReceita",onAtualizar:h.atualizar},null,8,["onAtualizar"]),e(q,{round:"",color:"primary",class:"fixed",icon:"add",size:"lg",style:{right:"18px",bottom:"18px"},onClick:s[3]||(s[3]=t=>h.abrirModalReceita("",!1))})])}var Ee=A(X,[["render",ve]]);export{Ee as default};
