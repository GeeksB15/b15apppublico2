<<<<<<<< HEAD:assets/QBreadcrumbs.30e21aab.js
import{ab as v,ct as h,cu as C,aj as n,a7 as r,j as k,aX as q,cv as _,cw as x,cx as y,a6 as S}from"./index.9759e0fb.js";var $=v({name:"QBreadcrumbsEl",props:{...h,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:s}){const{linkTag:u,linkAttrs:c,linkClass:o,navigateOnClick:d}=C(),l=n(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+o.value:"q-breadcrumbs__el--disable"),...c.value,onClick:d})),i=n(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const t=[];return e.icon!==void 0&&t.push(r(k,{class:i.value,name:e.icon})),e.label!==void 0&&t.push(e.label),r(u.value,{...l.value},q(s.default,t))}}});const Q=["",!0];var E=v({name:"QBreadcrumbs",props:{..._,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:s}){const u=x(e),c=n(()=>`flex items-center ${u.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),o=n(()=>e.separatorColor?` text-${e.separatorColor}`:""),d=n(()=>` text-${e.activeColor}`);return()=>{if(s.default===void 0)return;const l=y(S(s.default));if(l.length===0)return;let i=1;const t=[],m=l.filter(a=>a.type!==void 0&&a.type.name==="QBreadcrumbsEl").length,g=s.separator!==void 0?s.separator:()=>e.separator;return l.forEach(a=>{if(a.type!==void 0&&a.type.name==="QBreadcrumbsEl"){const b=i<m,f=a.props!==null&&Q.includes(a.props.disable),p=(b===!0?"":" q-breadcrumbs--last")+(f!==!0&&b===!0?d.value:"");i++,t.push(r("div",{class:`flex items-center${p}`},[a])),b===!0&&t.push(r("div",{class:"q-breadcrumbs__separator"+o.value},g()))}else t.push(a)}),r("div",{class:"q-breadcrumbs"},[r("div",{class:c.value},t)])}}});export{E as Q,$ as a};
========
import{ab as v,ct as h,cu as C,aj as n,a7 as r,j as k,aX as q,cv as _,cw as x,cx as y,a6 as S}from"./index.334d0b54.js";var $=v({name:"QBreadcrumbsEl",props:{...h,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:s}){const{linkTag:u,linkAttrs:c,linkClass:o,navigateOnClick:d}=C(),l=n(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+o.value:"q-breadcrumbs__el--disable"),...c.value,onClick:d})),i=n(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const t=[];return e.icon!==void 0&&t.push(r(k,{class:i.value,name:e.icon})),e.label!==void 0&&t.push(e.label),r(u.value,{...l.value},q(s.default,t))}}});const Q=["",!0];var E=v({name:"QBreadcrumbs",props:{..._,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:s}){const u=x(e),c=n(()=>`flex items-center ${u.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),o=n(()=>e.separatorColor?` text-${e.separatorColor}`:""),d=n(()=>` text-${e.activeColor}`);return()=>{if(s.default===void 0)return;const l=y(S(s.default));if(l.length===0)return;let i=1;const t=[],m=l.filter(a=>a.type!==void 0&&a.type.name==="QBreadcrumbsEl").length,g=s.separator!==void 0?s.separator:()=>e.separator;return l.forEach(a=>{if(a.type!==void 0&&a.type.name==="QBreadcrumbsEl"){const b=i<m,f=a.props!==null&&Q.includes(a.props.disable),p=(b===!0?"":" q-breadcrumbs--last")+(f!==!0&&b===!0?d.value:"");i++,t.push(r("div",{class:`flex items-center${p}`},[a])),b===!0&&t.push(r("div",{class:"q-breadcrumbs__separator"+o.value},g()))}else t.push(a)}),r("div",{class:"q-breadcrumbs"},[r("div",{class:c.value},t)])}}});export{E as Q,$ as a};
>>>>>>>> 7d21c0dfe9fe60ff7d81361a5b466fbe35d321e4:assets/QBreadcrumbs.4fdebe86.js
