import{bA as a,a5 as t,bB as p}from"./index.9759e0fb.js";function f(r){const o=Object.assign({noopener:!0},r),e=[];for(const i in o){const n=o[i];n===!0?e.push(i):(p(n)||typeof n=="string"&&n!=="")&&e.push(i+"="+n)}return e.join(",")}function s(r,o,e){let i=window.open;if(a.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)i=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(r,{openExternal:!0})}const n=i(r,"_blank",f(e));if(n)return a.is.desktop&&n.focus(),n;o&&o()}var v=(r,o,e)=>{if(a.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(i=>{i?window.SafariViewController.show({url:r},t,o):s(r,o,e)});return}return s(r,o,e)};export{v as o};
