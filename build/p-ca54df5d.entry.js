import{r as t,c as i,h as e,H as n,g as o}from"./p-13539f84.js";import{a as s,i as a,e as r,g as l,b as c}from"./p-481a1c31.js";import{s as u,c as h,d,H as m}from"./p-27194fbc.js";import{u as b}from"./p-7b97aed3.js";import{n as p}from"./p-62d90ff5.js";import{c as f,d as v,g}from"./p-38f7fcb9.js";import{s as x,a as w,c as y}from"./p-04967691.js";import{n as k,i as z,p as j,s as I,a as D,c as W,d as E,B as C}from"./p-ca4dc356.js";import{c as L}from"./p-e6be3162.js";import{C as N}from"./p-5f83161a.js";import{u as _,c as F,d as B,s as H}from"./p-bafdfe3e.js";import"./p-30b0f762.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const P={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",numberButtonWrapper:"number-button-wrapper",buttonItemHorizontal:"number-button-item--horizontal",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper",numberButtonItem:"number-button-item"};const A={action:"action"};const R="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host input{outline-color:transparent}:host input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:1;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}:host .inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";const V=class{constructor(e){t(this,e);this.calciteInternalInputNumberFocus=i(this,"calciteInternalInputNumberFocus",6);this.calciteInternalInputNumberBlur=i(this,"calciteInternalInputNumberBlur",6);this.calciteInputNumberInput=i(this,"calciteInputNumberInput",7);this.calciteInputNumberChange=i(this,"calciteInputNumberChange",6);this.previousValueOrigin="initial";this.mutationObserver=L("mutation",(()=>this.setDisabledAction()));this.userChangedValue=false;this.keyDownHandler=t=>{if(this.readOnly||this.disabled){return}if(this.isClearable&&t.key==="Escape"){this.clearInputValue(t);t.preventDefault()}if(t.key==="Enter"&&!t.defaultPrevented){if(u(this)){t.preventDefault()}}};this.clearInputValue=t=>{this.setNumberValue({committing:true,nativeEvent:t,origin:"user",value:""})};this.emitChangeIfUserModified=()=>{if(this.previousValueOrigin==="user"&&this.value!==this.previousEmittedNumberValue){this.calciteInputNumberChange.emit();this.setPreviousEmittedNumberValue(this.value)}};this.inputNumberBlurHandler=()=>{this.calciteInternalInputNumberBlur.emit();this.emitChangeIfUserModified()};this.clickHandler=t=>{const i=s(this.el,"action");if(t.target!==i){this.setFocus()}};this.inputNumberFocusHandler=()=>{this.calciteInternalInputNumberFocus.emit()};this.inputNumberInputHandler=t=>{if(this.disabled||this.readOnly){return}const i=t.target.value;k.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const e=k.delocalize(i);if(t.inputType==="insertFromPaste"){if(!z(e)){t.preventDefault()}this.setNumberValue({nativeEvent:t,origin:"user",value:j(e)});this.childNumberEl.value=this.localizedValue}else{this.setNumberValue({nativeEvent:t,origin:"user",value:e})}};this.inputNumberKeyDownHandler=t=>{if(this.disabled||this.readOnly){return}if(t.key==="ArrowUp"){t.preventDefault();this.nudgeNumberValue("up",t);return}if(t.key==="ArrowDown"){this.nudgeNumberValue("down",t);return}const i=[...p,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(t.altKey||t.ctrlKey||t.metaKey){return}const e=t.shiftKey&&t.key==="Tab";if(i.includes(t.key)&&(!t.shiftKey||e)){if(t.key==="Enter"){this.emitChangeIfUserModified()}return}k.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};if(t.key===k.decimal){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&this.childNumberEl.value.indexOf(k.decimal)===-1){return}}if(/[eE]/.test(t.key)){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&!/[eE]/.test(this.childNumberEl.value)){return}}if(t.key==="-"){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&this.childNumberEl.value.split("-").length<=2){return}}t.preventDefault()};this.nudgeNumberValue=(t,i)=>{if(i instanceof KeyboardEvent&&i.repeat){return}const e=this.maxString?parseFloat(this.maxString):null;const n=this.minString?parseFloat(this.minString):null;const o=150;this.incrementOrDecrementNumberValue(t,e,n,i);if(this.nudgeNumberValueIntervalId){window.clearInterval(this.nudgeNumberValueIntervalId)}let s=true;this.nudgeNumberValueIntervalId=window.setInterval((()=>{if(s){s=false;return}this.incrementOrDecrementNumberValue(t,e,n,i)}),o)};this.nudgeButtonPointerUpAndOutHandler=t=>{if(!a(t)){return}window.clearInterval(this.nudgeNumberValueIntervalId)};this.nudgeButtonPointerDownHandler=t=>{if(!a(t)){return}t.preventDefault();const i=t.target.dataset.adjustment;if(!this.disabled){this.nudgeNumberValue(i,t)}};this.hiddenInputChangeHandler=t=>{if(t.target.name===this.name){this.setNumberValue({value:t.target.value,origin:"direct"})}t.stopPropagation()};this.setChildNumberElRef=t=>{this.childNumberEl=t};this.setInputNumberValue=t=>{if(!this.childNumberEl){return}this.childNumberEl.value=t};this.setPreviousEmittedNumberValue=t=>{this.previousEmittedNumberValue=this.normalizeValue(t)};this.setPreviousNumberValue=t=>{this.previousValue=this.normalizeValue(t)};this.setNumberValue=({committing:t=false,nativeEvent:i,origin:e,previousValue:n,value:o})=>{k.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const s=I(this.numberingSystem&&this.numberingSystem!=="latn"||D!=="latn"?k.delocalize(o):o);const a=o&&!s?z(this.previousValue)?this.previousValue:"":s;const r=k.localize(a);this.localizedValue=r;this.setPreviousNumberValue(n!==null&&n!==void 0?n:this.value);this.previousValueOrigin=e;this.userChangedValue=e==="user"&&this.value!==a;this.value=["-","."].includes(a)?"":a;if(e==="direct"){this.setInputNumberValue(r);this.setPreviousEmittedNumberValue(r)}if(i){const i=this.calciteInputNumberInput.emit();if(i.defaultPrevented){this.value=this.previousValue;this.localizedValue=k.localize(this.previousValue)}else if(t){this.emitChangeIfUserModified()}}};this.inputNumberKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)};this.alignment="start";this.autofocus=false;this.clearable=false;this.disabled=false;this.form=undefined;this.groupSeparator=false;this.hidden=false;this.icon=undefined;this.iconFlipRtl=false;this.label=undefined;this.loading=false;this.numberingSystem=undefined;this.localeFormat=false;this.max=undefined;this.min=undefined;this.maxLength=undefined;this.minLength=undefined;this.name=undefined;this.numberButtonType="vertical";this.placeholder=undefined;this.prefixText=undefined;this.readOnly=false;this.required=false;this.scale="m";this.status="idle";this.step=undefined;this.autocomplete=undefined;this.inputMode="decimal";this.enterKeyHint=undefined;this.suffixText=undefined;this.editingEnabled=false;this.value="";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale="";this.defaultMessages=undefined;this.localizedValue=undefined;this.slottedActionElDisabledInternally=false}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var t;this.maxString=((t=this.max)===null||t===void 0?void 0:t.toString())||null}minWatcher(){var t;this.minString=((t=this.min)===null||t===void 0?void 0:t.toString())||null}onMessagesChange(){}valueWatcher(t,i){if(!this.userChangedValue){this.setNumberValue({origin:"direct",previousValue:i,value:t==null||t==""?"":z(t)?t:this.previousValue||""});this.warnAboutInvalidNumberValue(t)}this.userChangedValue=false}updateRequestedIcon(){this.requestedIcon=r({},this.icon,"number")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleWatcher(t){_(this,this.effectiveLocale);k.numberFormatOptions={locale:t,numberingSystem:this.numberingSystem,useGrouping:false}}connectedCallback(){var t;W(this);F(this);this.scale=l(this.el,"scale",this.scale);this.inlineEditableEl=this.el.closest("calcite-inline-editable");if(this.inlineEditableEl){this.editingEnabled=this.inlineEditableEl.editingEnabled||false}f(this);h(this);this.setPreviousEmittedNumberValue(this.value);this.setPreviousNumberValue(this.value);this.warnAboutInvalidNumberValue(this.value);this.setNumberValue({origin:"connected",value:z(this.value)?this.value:""});(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true});this.setDisabledAction();this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}componentDidLoad(){x(this)}disconnectedCallback(){var t;v(this);d(this);E(this);B(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}async componentWillLoad(){var t,i;w(this);this.maxString=(t=this.max)===null||t===void 0?void 0:t.toString();this.minString=(i=this.min)===null||i===void 0?void 0:i.toString();this.requestedIcon=r({},this.icon,"number");await H(this)}componentShouldUpdate(t,i,e){if(e==="value"&&t&&!z(t)){this.setNumberValue({origin:"reset",value:i});return false}return true}componentDidRender(){b(this)}async setFocus(){var t;await y(this);(t=this.childNumberEl)===null||t===void 0?void 0:t.focus()}async selectText(){var t;(t=this.childNumberEl)===null||t===void 0?void 0:t.select()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(t,i,e,n){const{value:o}=this;const s=t==="up"?1:-1;const a=this.step==="any"?1:Math.abs(this.step||1);const r=new C(o!==""?o:"0");const l=r.add(`${a*s}`);const c=()=>typeof e==="number"&&!isNaN(e)&&l.subtract(`${e}`).isNegative;const u=()=>typeof i==="number"&&!isNaN(i)&&!l.subtract(`${i}`).isNegative;const h=c()?`${e}`:u()?`${i}`:l.toString();this.setNumberValue({committing:true,nativeEvent:n,origin:"user",value:h})}onFormReset(){this.setNumberValue({origin:"reset",value:this.defaultValue})}syncHiddenFormInput(t){var i,e,n,o;t.type="number";t.min=(e=(i=this.min)===null||i===void 0?void 0:i.toString(10))!==null&&e!==void 0?e:"";t.max=(o=(n=this.max)===null||n===void 0?void 0:n.toString(10))!==null&&o!==void 0?o:""}setDisabledAction(){const t=s(this.el,"action");if(!t){return}if(this.disabled){if(t.getAttribute("disabled")==null){this.slottedActionElDisabledInternally=true}t.setAttribute("disabled","")}else if(this.slottedActionElDisabledInternally){t.removeAttribute("disabled");this.slottedActionElDisabledInternally=false}}normalizeValue(t){return z(t)?t:""}warnAboutInvalidNumberValue(t){if(t&&!z(t)){console.warn(`The specified value "${t}" cannot be parsed, or is out of range.`)}}render(){const t=c(this.el);const i=e("div",{class:P.loader},e("calcite-progress",{label:this.messages.loading,type:"indeterminate"}));const o=e("button",{"aria-label":this.messages.clear,class:P.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},e("calcite-icon",{icon:"x",scale:this.scale==="l"?"m":"s"}));const s=e("calcite-icon",{class:P.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:this.scale==="l"?"m":"s"});const a=this.numberButtonType==="horizontal";const r=e("button",{"aria-hidden":"true",class:{[P.numberButtonItem]:true,[P.buttonItemHorizontal]:a},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerUpAndOutHandler,onPointerUp:this.nudgeButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},e("calcite-icon",{icon:"chevron-up",scale:this.scale==="l"?"m":"s"}));const l=e("button",{"aria-hidden":"true",class:{[P.numberButtonItem]:true,[P.buttonItemHorizontal]:a},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerUpAndOutHandler,onPointerUp:this.nudgeButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},e("calcite-icon",{icon:"chevron-down",scale:this.scale==="l"?"m":"s"}));const u=e("div",{class:P.numberButtonWrapper},r,l);const h=e("div",{class:P.prefix},this.prefixText);const d=e("div",{class:P.suffix},this.suffixText);const b=e("input",{"aria-label":g(this),autocomplete:this.autocomplete,autofocus:this.autofocus?true:null,defaultValue:this.defaultValue,disabled:this.disabled?true:null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:undefined,onBlur:this.inputNumberBlurHandler,onFocus:this.inputNumberFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputNumberKeyUpHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,type:"text",value:this.localizedValue,ref:this.setChildNumberElRef});return e(n,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},e("div",{class:{[P.inputWrapper]:true,[N.rtl]:t==="rtl"}},this.numberButtonType==="horizontal"&&!this.readOnly?l:null,this.prefixText?h:null,e("div",{class:P.wrapper},b,this.isClearable?o:null,this.requestedIcon?s:null,this.loading?i:null),e("div",{class:P.actionWrapper},e("slot",{name:A.action})),this.numberButtonType==="vertical"&&!this.readOnly?u:null,this.suffixText?d:null,this.numberButtonType==="horizontal"&&!this.readOnly?r:null,e(m,{component:this})))}static get assetsDirs(){return["assets"]}get el(){return o(this)}static get watchers(){return{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleWatcher"]}}};V.style=R;export{V as calcite_input_number};
//# sourceMappingURL=p-ca54df5d.entry.js.map