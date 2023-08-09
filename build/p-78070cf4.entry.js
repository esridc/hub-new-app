import{r as t,c as e,h as i,F as a,g as n,H as o}from"./p-13539f84.js";import{p as s,t as r,q as c,i as l}from"./p-481a1c31.js";import{u as d}from"./p-7b97aed3.js";import{a as h,s as f,c as m}from"./p-04967691.js";import{c as u}from"./p-e6be3162.js";import{S as p}from"./p-96f32c04.js";import{H as g}from"./p-e0d9a6c4.js";import{S as b,C as v,I as x}from"./p-ecc50ed7.js";import{c as y,d as w}from"./p-ca4dc356.js";import{c as k,s as z,d as E,u as D}from"./p-bafdfe3e.js";import{c as H,b as C,u as S,a as j,r as _,F as T}from"./p-52161fd9.js";import{g as A}from"./p-30b0f762.js";import{c as F,d as L}from"./p-8afc0e61.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";import"./p-58421494.js";const O="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{border-block-end:1px solid;position:sticky;inset-block-start:0px;z-index:400;inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;position:sticky;inset-block-end:0px;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;min-block-size:3rem;padding:0.5rem}.fab-container{position:sticky;inset-block-end:0px;z-index:300;margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}";const P=class{constructor(i){t(this,i);this.calcitePanelClose=e(this,"calcitePanelClose",6);this.calcitePanelScroll=e(this,"calcitePanelScroll",6);this.resizeObserver=u("resize",(()=>this.resizeHandler()));this.resizeHandler=()=>{const{panelScrollEl:t}=this;if(!t||typeof t.scrollHeight!=="number"||typeof t.offsetHeight!=="number"){return}t.tabIndex=t.scrollHeight>t.offsetHeight?0:-1};this.setContainerRef=t=>{this.containerEl=t};this.setCloseRef=t=>{this.closeButtonEl=t};this.setBackRef=t=>{this.backButtonEl=t};this.panelKeyDownHandler=t=>{if(this.closable&&t.key==="Escape"&&!t.defaultPrevented){this.close();t.preventDefault()}};this.close=()=>{this.closed=true;this.calcitePanelClose.emit()};this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()};this.handleHeaderActionsStartSlotChange=t=>{const e=t.target.assignedElements({flatten:true});this.hasStartActions=!!e.length};this.handleHeaderActionsEndSlotChange=t=>{const e=t.target.assignedElements({flatten:true});this.hasEndActions=!!e.length};this.handleHeaderMenuActionsSlotChange=t=>{const e=t.target.assignedElements({flatten:true});this.hasMenuItems=!!e.length};this.handleHeaderContentSlotChange=t=>{const e=t.target.assignedElements({flatten:true});this.hasHeaderContent=!!e.length};this.handleFooterSlotChange=t=>{const e=t.target.assignedElements({flatten:true});this.hasFooterContent=!!e.length};this.handleFooterActionsSlotChange=t=>{const e=t.target.assignedElements({flatten:true});this.hasFooterActions=!!e.length};this.handleFabSlotChange=t=>{const e=t.target.assignedElements({flatten:true});this.hasFab=!!e.length};this.setPanelScrollEl=t=>{var e,i;this.panelScrollEl=t;(e=this.resizeObserver)===null||e===void 0?void 0:e.disconnect();if(t){(i=this.resizeObserver)===null||i===void 0?void 0:i.observe(t);this.resizeHandler()}};this.closed=false;this.disabled=false;this.closable=false;this.headingLevel=undefined;this.loading=false;this.heading=undefined;this.description=undefined;this.menuOpen=false;this.messageOverrides=undefined;this.messages=undefined;this.hasStartActions=false;this.hasEndActions=false;this.hasMenuItems=false;this.hasHeaderContent=false;this.hasFooterContent=false;this.hasFooterActions=false;this.hasFab=false;this.defaultMessages=undefined;this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){y(this);k(this)}async componentWillLoad(){h(this);await z(this)}componentDidLoad(){f(this)}componentDidRender(){d(this)}disconnectedCallback(){var t;w(this);E(this);(t=this.resizeObserver)===null||t===void 0?void 0:t.disconnect()}effectiveLocaleChange(){D(this,this.effectiveLocale)}async setFocus(){await m(this);s(this.containerEl)}async scrollContentTo(t){var e;(e=this.panelScrollEl)===null||e===void 0?void 0:e.scrollTo(t)}renderHeaderContent(){const{heading:t,headingLevel:e,description:a,hasHeaderContent:n}=this;const o=t?i(g,{class:v.heading,level:e},t):null;const s=a?i("span",{class:v.description},a):null;return!n&&(o||s)?i("div",{class:v.headerContent,key:"header-content"},o,s):null}renderHeaderSlottedContent(){return i("div",{class:v.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},i("slot",{name:b.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:t}=this;return i("div",{class:{[v.headerActionsStart]:true,[v.headerActions]:true},hidden:!t,key:"header-actions-start"},i("slot",{name:b.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{close:t,hasEndActions:e,messages:a,closable:n}=this;const o=a.close;const s=n?i("calcite-action",{"aria-label":o,icon:x.close,onClick:t,text:o,ref:this.setCloseRef}):null;const r=i("slot",{name:b.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange});const c=e||s;return i("div",{class:{[v.headerActionsEnd]:true,[v.headerActions]:true},hidden:!c,key:"header-actions-end"},r,s)}renderMenu(){const{hasMenuItems:t,messages:e,menuOpen:a}=this;return i("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!t,key:"menu",label:e.options,open:a,placement:"bottom-end"},i("calcite-action",{icon:x.menu,slot:p.trigger,text:e.options}),i("slot",{name:b.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:t,hasStartActions:e,hasEndActions:a,closable:n,hasMenuItems:o}=this;const s=this.renderHeaderContent();const r=t||s||e||a||n||o;return i("header",{class:v.header,hidden:!r},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),s,this.renderHeaderActionsEnd(),this.renderMenu())}renderFooterNode(){const{hasFooterContent:t,hasFooterActions:e}=this;const a=t||e;return i("footer",{class:v.footer,hidden:!a},i("slot",{key:"footer-slot",name:b.footer,onSlotchange:this.handleFooterSlotChange}),i("slot",{key:"footer-actions-slot",name:b.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){const{hasFab:t}=this;const e=i("slot",{key:"default-slot"});const a=t?i("section",{class:v.contentContainer},e):e;return i("div",{class:{[v.contentWrapper]:true,[v.contentContainer]:!t,[v.contentHeight]:t},onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},a,this.renderFab())}renderFab(){return i("div",{class:v.fabContainer,hidden:!this.hasFab},i("slot",{name:b.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{loading:t,panelKeyDownHandler:e,closed:n,closable:o}=this;const s=i("article",{"aria-busy":r(t),class:v.container,hidden:n,onKeyDown:e,tabIndex:o?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return i(a,null,t?i("calcite-scrim",{loading:t}):null,s)}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};P.style=O;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const M={container:"container",arrow:"arrow"};const R=500;const B="aria-describedby";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */function I(t){const{referenceElement:e}=t;return(typeof e==="string"?c(t,{id:e}):e)||null}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */class ${constructor(){this.registeredElements=new WeakMap;this.hoverTimeout=null;this.registeredElementCount=0;this.queryTooltip=t=>{const{registeredElements:e}=this;const i=t.find((t=>e.has(t)));return e.get(i)};this.keyDownHandler=t=>{if(t.key==="Escape"&&!t.defaultPrevented){const{activeTooltipEl:e}=this;if(e&&e.open){this.clearHoverTimeout();this.toggleTooltip(e,false);const i=I(e);if(i instanceof Element&&i.contains(t.target)){t.preventDefault()}}}};this.queryHoveredTooltip=t=>{const{activeTooltipEl:e}=this;if(e&&t.includes(e)){this.clearHoverTimeout();return}const i=this.queryTooltip(t);if(i){this.toggleHoveredTooltip(i,true)}else if(e){this.toggleHoveredTooltip(e,false)}};this.pointerMoveHandler=t=>{const e=t.composedPath();this.clearHoverTimeout();this.hoverTimeout=window.setTimeout((()=>this.queryHoveredTooltip(e)),R)};this.pointerDownHandler=t=>{if(!l(t)){return}const e=this.queryTooltip(t.composedPath());this.clickedTooltip=e;if(e?.closeOnClick){this.toggleTooltip(e,false);this.clearHoverTimeout()}};this.focusInHandler=t=>{this.queryFocusedTooltip(t,true)};this.focusOutHandler=t=>{this.queryFocusedTooltip(t,false)};this.toggleHoveredTooltip=(t,e)=>{if(e){this.closeExistingTooltip()}this.toggleTooltip(t,e)}}registerElement(t,e){this.registeredElementCount++;this.registeredElements.set(t,e);if(this.registeredElementCount===1){this.addListeners()}}unregisterElement(t){if(this.registeredElements.delete(t)){this.registeredElementCount--}if(this.registeredElementCount===0){this.removeListeners()}}addListeners(){document.addEventListener("keydown",this.keyDownHandler,{capture:true});document.addEventListener("pointermove",this.pointerMoveHandler,{capture:true});document.addEventListener("pointerdown",this.pointerDownHandler,{capture:true});document.addEventListener("focusin",this.focusInHandler,{capture:true});document.addEventListener("focusout",this.focusOutHandler,{capture:true})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler,{capture:true});document.removeEventListener("pointermove",this.pointerMoveHandler,{capture:true});document.removeEventListener("pointerdown",this.pointerDownHandler,{capture:true});document.removeEventListener("focusin",this.focusInHandler,{capture:true});document.removeEventListener("focusout",this.focusOutHandler,{capture:true})}clearHoverTimeout(){window.clearTimeout(this.hoverTimeout)}closeExistingTooltip(){const{activeTooltipEl:t}=this;if(t){this.toggleTooltip(t,false)}}toggleFocusedTooltip(t,e){this.closeExistingTooltip();if(e){this.clearHoverTimeout()}this.toggleTooltip(t,e)}toggleTooltip(t,e){t.open=e;if(e){this.activeTooltipEl=t}}queryFocusedTooltip(t,e){const i=this.queryTooltip(t.composedPath());if(!i||i===this.clickedTooltip){this.clickedTooltip=null;return}this.toggleFocusedTooltip(i,e)}}const q='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, 901);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^=top]) .arrow{inset-block-end:-4px}:host([data-placement^=bottom]) .arrow{inset-block-start:-4px}:host([data-placement^=right]) .arrow,:host([data-placement^=left]) .arrow{direction:ltr;text-align:start}:host([data-placement^=left]) .arrow{inset-inline-end:-4px}:host([data-placement^=right]) .arrow{inset-inline-start:-4px}.container{position:relative;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}';const K=new $;const N=class{constructor(i){t(this,i);this.calciteTooltipBeforeClose=e(this,"calciteTooltipBeforeClose",6);this.calciteTooltipClose=e(this,"calciteTooltipClose",6);this.calciteTooltipBeforeOpen=e(this,"calciteTooltipBeforeOpen",6);this.calciteTooltipOpen=e(this,"calciteTooltipOpen",6);this.guid=`calcite-tooltip-${A()}`;this.hasLoaded=false;this.openTransitionProp="opacity";this.setTransitionEl=t=>{this.transitionEl=t;F(this)};this.setUpReferenceElement=(t=true)=>{this.removeReferences();this.effectiveReferenceElement=I(this.el);H(this,this.effectiveReferenceElement,this.el);const{el:e,referenceElement:i,effectiveReferenceElement:a}=this;if(t&&i&&!a){console.warn(`${e.tagName}: reference-element id "${i}" was not found.`,{el:e})}this.addReferences()};this.getId=()=>this.el.id||this.guid;this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t){return}const e=this.getId();if("setAttribute"in t){t.setAttribute(B,e)}K.registerElement(t,this.el)};this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t){return}if("removeAttribute"in t){t.removeAttribute(B)}K.unregisterElement(t)};this.closeOnClick=false;this.label=undefined;this.offsetDistance=C;this.offsetSkidding=0;this.open=false;this.overlayPositioning="absolute";this.placement="auto";this.referenceElement=undefined;this.effectiveReferenceElement=undefined}offsetDistanceOffsetHandler(){this.reposition(true)}offsetSkiddingHandler(){this.reposition(true)}openHandler(t){if(t){this.reposition(true)}else{S(this.el)}}overlayPositioningHandler(){this.reposition(true)}placementHandler(){this.reposition(true)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){F(this);this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){if(this.referenceElement&&!this.effectiveReferenceElement){this.setUpReferenceElement()}this.reposition(true);this.hasLoaded=true}disconnectedCallback(){this.removeReferences();j(this,this.effectiveReferenceElement,this.el);L(this)}async reposition(t=false){const{el:e,effectiveReferenceElement:i,placement:a,overlayPositioning:n,offsetDistance:o,offsetSkidding:s,arrowEl:r}=this;return _(this,{floatingEl:e,referenceEl:i,overlayPositioning:n,placement:a,offsetDistance:o,offsetSkidding:s,includeArrow:true,arrowEl:r,type:"tooltip"},t)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:t,label:e,open:a}=this;const n=t&&a;const s=!n;return i(o,{"aria-hidden":r(s),"aria-label":e,"aria-live":"polite","calcite-hydrated-hidden":s,id:this.getId(),role:"tooltip"},i("div",{class:{[T.animation]:true,[T.animationActive]:n},ref:this.setTransitionEl},i("div",{class:M.arrow,ref:t=>this.arrowEl=t}),i("div",{class:M.container},i("slot",null))))}get el(){return n(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};N.style=q;export{P as calcite_panel,N as calcite_tooltip};
//# sourceMappingURL=p-78070cf4.entry.js.map