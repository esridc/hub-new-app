import{r as i,c as a,h as t,g as c}from"./p-13539f84.js";const n="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}";const e=class{constructor(t){i(this,t);this.calciteInternalAccordionChange=a(this,"calciteInternalAccordionChange",6);this.items=[];this.sorted=false;this.sortItems=i=>i.sort(((i,a)=>i.position-a.position)).map((i=>i.item));this.appearance="solid";this.iconPosition="end";this.iconType="chevron";this.scale="m";this.selectionMode="multiple"}componentDidLoad(){if(!this.sorted){this.items=this.sortItems(this.items);this.sorted=true}}render(){const i=this.appearance==="transparent";return t("div",{class:{"accordion--transparent":i,accordion:!i}},t("slot",null))}registerCalciteAccordionItem(i){const a={item:i.target,parent:i.detail.parent,position:i.detail.position};if(this.el===a.parent){this.items.push(a)}i.stopPropagation()}updateActiveItemOnChange(i){this.requestedAccordionItem=i.detail.requestedAccordionItem;this.calciteInternalAccordionChange.emit({requestedAccordionItem:this.requestedAccordionItem});i.stopPropagation()}get el(){return c(this)}};e.style=n;export{e as calcite_accordion};
//# sourceMappingURL=p-27d01e65.entry.js.map