import{r as t,c as i,h as e,g as n}from"./p-13539f84.js";import{l as a}from"./p-481a1c31.js";import"./p-30b0f762.js";import"./p-5f83161a.js";const s='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content;flex-direction:row;flex-wrap:wrap;align-items:stretch;justify-content:space-between}:host([layout=vertical]){flex:1 1 auto;flex-direction:column}:host([layout=horizontal]){display:grid;grid-template-areas:"items" "content"}';const o=class{constructor(e){t(this,e);this.calciteStepperItemChange=i(this,"calciteStepperItemChange",6);this.calciteInternalStepperItemChange=i(this,"calciteInternalStepperItemChange",6);this.itemMap=new Map;this.items=[];this.enabledItems=[];this.icon=false;this.layout="horizontal";this.numbered=false;this.numberingSystem=undefined;this.selectedItem=null;this.scale="m"}componentDidLoad(){if(typeof this.currentPosition!=="number"){this.calciteInternalStepperItemChange.emit({position:0})}}render(){return e("slot",{onSlotchange:t=>{const i=t.currentTarget.assignedElements().filter((t=>(t===null||t===void 0?void 0:t.tagName)==="CALCITE-STEPPER-ITEM"));const e=Array(i.length).fill("1fr").join(" ");this.el.style.gridTemplateAreas=e;this.el.style.gridTemplateColumns=e}})}calciteInternalStepperItemKeyEvent(t){const i=t.detail.item;const e=t.target;switch(i.key){case"ArrowDown":case"ArrowRight":a(this.enabledItems,e,"next");break;case"ArrowUp":case"ArrowLeft":a(this.enabledItems,e,"previous");break;case"Home":a(this.enabledItems,e,"first");break;case"End":a(this.enabledItems,e,"last");break}t.stopPropagation()}registerItem(t){const i=t.target;const{content:e,position:n}=t.detail;this.itemMap.set(i,{position:n,content:e});this.items=this.sortItems();this.enabledItems=this.filterItems();t.stopPropagation()}updateItem(t){const{position:i}=t.detail;if(typeof i==="number"){this.currentPosition=i;this.selectedItem=t.target}this.calciteInternalStepperItemChange.emit({position:i})}handleUserRequestedStepperItemSelect(){this.calciteStepperItemChange.emit()}async nextStep(){const t=this.getEnabledStepIndex(this.currentPosition+1,"next");if(typeof t!=="number"){return}this.updateStep(t)}async prevStep(){const t=this.getEnabledStepIndex(this.currentPosition-1,"previous");if(typeof t!=="number"){return}this.updateStep(t)}async goToStep(t){const i=t-1;if(this.currentPosition!==i){this.updateStep(i)}}async startStep(){const t=this.getEnabledStepIndex(0,"next");if(typeof t!=="number"){return}this.updateStep(t)}async endStep(){const t=this.getEnabledStepIndex(this.items.length-1,"previous");if(typeof t!=="number"){return}this.updateStep(t)}getEnabledStepIndex(t,i="next"){var e;const{items:n,currentPosition:a}=this;let s=t;while((e=n[s])===null||e===void 0?void 0:e.disabled){s=s+(i==="previous"?-1:1)}return s!==a&&s<n.length&&s>=0?s:null}updateStep(t){this.currentPosition=t;this.calciteInternalStepperItemChange.emit({position:t})}sortItems(){const{itemMap:t}=this;return Array.from(t.keys()).sort(((i,e)=>t.get(i).position-t.get(e).position))}filterItems(){return this.items.filter((t=>!t.disabled))}get el(){return n(this)}};o.style=s;export{o as calcite_stepper};
//# sourceMappingURL=p-7e7461f4.entry.js.map