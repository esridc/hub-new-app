import{d as t}from"./p-13539f84.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const n=new WeakMap;function i(t){if(t.propertyName===this.openTransitionProp&&t.target===this.transitionEl){this.open?this.onBeforeOpen():this.onBeforeClose()}}function s(t){if(t.propertyName===this.openTransitionProp&&t.target===this.transitionEl){this.open?this.onOpen():this.onClose()}}function o(n,i=false){t((()=>{if(n.transitionEl){const t=getComputedStyle(n.transitionEl).transition.split(" ");const s=t.findIndex((t=>t===n.openTransitionProp));const o=t[s+1];if(o==="0s"){(i?n[n.transitionProp]:n.open)?n.onBeforeOpen():n.onBeforeClose();(i?n[n.transitionProp]:n.open)?n.onOpen():n.onClose()}else{n.transitionEl.addEventListener("transitionstart",(()=>{(i?n[n.transitionProp]:n.open)?n.onBeforeOpen():n.onBeforeClose()}),{once:true});n.transitionEl.addEventListener("transitionend",(()=>{(i?n[n.transitionProp]:n.open)?n.onOpen():n.onClose()}),{once:true})}}}))}function e(t){a(t);if(t.transitionEl){const o=i.bind(t);const e=s.bind(t);n.set(t,[t.transitionEl,o,e]);t.transitionEl.addEventListener("transitionstart",o);t.transitionEl.addEventListener("transitionend",e)}}function a(t){if(!n.has(t)){return}const[i,s,o]=n.get(t);i.removeEventListener("transitionstart",s);i.removeEventListener("transitionend",o);n.delete(t)}export{e as c,a as d,o};
//# sourceMappingURL=p-8afc0e61.js.map