import{q as t,c as e}from"./p-481a1c31.js";import{h as n}from"./p-13539f84.js";(function(t){if(typeof t.requestSubmit=="function")return;t.requestSubmit=function(t){if(t){e(t,this);t.click()}else{t=document.createElement("input");t.type="submit";t.hidden=true;this.appendChild(t);t.click();this.removeChild(t)}};function e(t,e){t instanceof HTMLElement||n(TypeError,"parameter 1 is not of type 'HTMLElement'");t.type=="submit"||n(TypeError,"The specified element is not a submit button");t.form==e||n(DOMException,"The specified element is not owned by this form element","NotFoundError")}function n(t,e,n){throw new t("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+e+".",n)}})(HTMLFormElement.prototype);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const o="hidden-form-input";function r(t){return"checked"in t}const s=new WeakMap;const i=new WeakSet;function u(t,n){const o=e(n.parentElement,"[form]");if(o){return true}const r="calciteInternalFormComponentRegister";let s=false;t.addEventListener(r,(t=>{s=t.composedPath().some((t=>i.has(t)));t.stopPropagation()}),{once:true});n.dispatchEvent(new CustomEvent(r,{bubbles:true,composed:true}));return s}function c(t){const{formEl:e}=t;if(!e){return false}e.requestSubmit();return true}function f(t){t.formEl?.reset()}function l(t){const{el:e,value:n}=t;const o=m(t);if(!o||u(o,e)){return}t.formEl=o;t.defaultValue=n;if(r(t)){t.defaultChecked=t.checked}const c=(t.onFormReset||a).bind(t);o.addEventListener("reset",c);s.set(t.el,c);i.add(e)}function m(n){const{el:o,form:r}=n;return r?t(o,{id:r}):e(o,"form")}function a(){if(r(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue}function p(t){const{el:e,formEl:n}=t;if(!n){return}const o=s.get(e);n.removeEventListener("reset",o);s.delete(e);t.formEl=null;i.delete(e)}function d(t,e){t.defaultValue=e}const h=t=>{t.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:true}))};const b=t=>t.removeEventListener("change",h);function E(t){const{el:e,formEl:n,name:r,value:s}=t;const{ownerDocument:i}=e;const u=e.querySelectorAll(`input[slot="${o}"]`);if(!n||!r){u.forEach((t=>{b(t);t.remove()}));return}const c=Array.isArray(s)?s:[s];const f=[];const l=new Set;u.forEach((e=>{const n=c.find((t=>t==e.value));if(n!=null){l.add(n);w(t,e,n)}else{f.push(e)}}));let m;c.forEach((e=>{if(l.has(e)){return}let n=f.pop();if(!n){n=i.createElement("input");n.slot=o}if(!m){m=i.createDocumentFragment()}m.append(n);n.addEventListener("change",h);w(t,n,e)}));if(m){e.append(m)}f.forEach((t=>{b(t);t.remove()}))}function w(t,e,n){const{defaultValue:o,disabled:s,form:i,name:u,required:c}=t;e.defaultValue=o;e.disabled=s;e.name=u;e.required=c;e.tabIndex=-1;if(i){e.setAttribute("form",i)}else{e.removeAttribute("form")}if(r(t)){e.checked=t.checked;e.defaultChecked=t.defaultChecked;e.value=t.checked?n||"on":""}else{e.value=n||""}t.syncHiddenFormInput?.(e)}const T=({component:t})=>{E(t);return n("slot",{name:o})};export{T as H,d as a,l as c,p as d,m as f,f as r,c as s};
//# sourceMappingURL=p-27194fbc.js.map