import{q as t,c as n}from"./p-481a1c31.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const c="calciteInternalLabelClick";const e="calciteInternalLabelConnected";const o="calciteInternaLabelDisconnected";const s="calcite-label";const i=new WeakMap;const r=new WeakMap;const u=new WeakMap;const a=new Set;const l=c=>{const{id:e}=c;const o=e&&t(c,{selector:`${s}[for="${e}"]`});if(o){return o}const i=n(c,s);if(!i||f(i,c)){return null}return i};function f(t,n){let c;const e="custom-element-ancestor-check";const o=e=>{e.stopImmediatePropagation();const o=e.composedPath();c=o.slice(o.indexOf(n),o.indexOf(t))};t.addEventListener(e,o,{once:true});n.dispatchEvent(new CustomEvent(e,{composed:true,bubbles:true}));t.removeEventListener(e,o);const s=c.filter((c=>c!==n&&c!==t)).filter((t=>t.tagName?.includes("-")));return s.length>0}function m(t){const n=l(t.el);if(i.has(n)||!n&&a.has(t)){return}const s=k.bind(t);if(n){t.labelEl=n;const l=b.bind(t);i.set(t.labelEl,l);t.labelEl.addEventListener(c,l);a.delete(t);document.removeEventListener(e,r.get(t));u.set(t,s);document.addEventListener(o,s)}else if(!a.has(t)){s();document.removeEventListener(o,u.get(t))}}function d(t){a.delete(t);document.removeEventListener(e,r.get(t));document.removeEventListener(o,u.get(t));r.delete(t);u.delete(t);if(!t.labelEl){return}const n=i.get(t.labelEl);t.labelEl.removeEventListener(c,n);i.delete(t.labelEl)}function h(t){return t.label||t.labelEl?.textContent?.trim()||""}function b(t){if(this.disabled){return}const n=this.el.contains(t.detail.sourceEvent.target);if(n){return}this.onLabelClick(t)}function p(){if(a.has(this)){m(this)}}function k(){a.add(this);const t=r.get(this)||p.bind(this);r.set(this,t);document.addEventListener(e,t)}export{o as a,m as c,d,h as g,e as l};
//# sourceMappingURL=p-38f7fcb9.js.map