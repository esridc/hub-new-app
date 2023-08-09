import{r as t,c as i,h as e,H as s,g as a}from"./p-13539f84.js";import{g as n,b as h,c,e as r,s as o}from"./p-06d93235.js";import{c as l,a as d,s as f}from"./p-04967691.js";import{c as u,d as m,n as p}from"./p-ca4dc356.js";import{c as D,d as v,s as g,u as y}from"./p-bafdfe3e.js";import{g as w,a as A}from"./p-23a7e02f.js";import"./p-481a1c31.js";import"./p-30b0f762.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";import"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const C=2;const k="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1);vertical-align:top}:host([scale=s]){max-inline-size:216px}:host([scale=m]){max-inline-size:286px}:host([scale=l]){max-inline-size:398px}";const x=class{constructor(e){t(this,e);this.calciteDatePickerChange=i(this,"calciteDatePickerChange",6);this.calciteDatePickerRangeChange=i(this,"calciteDatePickerRangeChange",6);this.keyDownHandler=t=>{if(t.key==="Escape"){this.reset()}};this.monthHeaderSelectChange=t=>{const i=new Date(t.detail);if(!this.range){this.activeDate=i}else{if(this.activeRange==="end"){this.activeEndDate=i}else{this.activeStartDate=i}this.mostRecentRangeValue=i}};this.monthActiveDateChange=t=>{const i=new Date(t.detail);if(!this.range){this.activeDate=i}else{if(this.activeRange==="end"){this.activeEndDate=i}else{this.activeStartDate=i}this.mostRecentRangeValue=i}};this.monthHoverChange=t=>{if(!this.range){this.hoverRange=undefined;return}const{valueAsDate:i}=this;const e=Array.isArray(i)&&i[0];const s=Array.isArray(i)&&i[1];const a=new Date(t.detail);this.hoverRange={focused:this.activeRange||"start",start:e,end:s};if(!this.proximitySelectionDisabled){if(s){const t=n(a,e);const i=n(a,s);if(i>0){this.hoverRange.end=a;this.hoverRange.focused="end"}else if(t<0){this.hoverRange.start=a;this.hoverRange.focused="start"}else if(t>i){this.hoverRange.start=a;this.hoverRange.focused="start"}else{this.hoverRange.end=a;this.hoverRange.focused="end"}}else{if(e){if(a<e){this.hoverRange={focused:"start",start:a,end:e}}else{this.hoverRange.end=a;this.hoverRange.focused="end"}}}}else{if(!s){if(a<e){this.hoverRange={focused:"start",start:a,end:e}}else{this.hoverRange.end=a;this.hoverRange.focused="end"}}else{this.hoverRange=undefined}}t.stopPropagation()};this.monthMouseOutChange=()=>{if(this.hoverRange){this.hoverRange=undefined}};this.reset=()=>{var t,i,e,s,a;const{valueAsDate:n}=this;if(!Array.isArray(n)&&n&&(n===null||n===void 0?void 0:n.getTime())!==((t=this.activeDate)===null||t===void 0?void 0:t.getTime())){this.activeDate=new Date(n)}if(Array.isArray(n)){if(n[0]&&((i=n[0])===null||i===void 0?void 0:i.getTime())!==(this.activeStartDate instanceof Date&&((e=this.activeStartDate)===null||e===void 0?void 0:e.getTime()))){this.activeStartDate=new Date(n[0])}if(n[1]&&((s=n[1])===null||s===void 0?void 0:s.getTime())!==(this.activeStartDate instanceof Date&&((a=this.activeEndDate)===null||a===void 0?void 0:a.getTime()))){this.activeEndDate=new Date(n[1])}}};this.monthDateChange=t=>{const i=new Date(t.detail);const e=h(i);if(!this.range&&e===h(this.valueAsDate)){return}if(!this.range){this.value=e||"";this.valueAsDate=i||null;this.activeDate=i||null;this.calciteDatePickerChange.emit();return}const s=this.getStartDate();const a=this.getEndDate();if(!s||!a&&i<s){if(s){this.setEndDate(new Date(s))}if(this.activeRange=="end"){this.setEndDate(i)}else{this.setStartDate(i)}}else if(!a){this.setEndDate(i)}else{if(!this.proximitySelectionDisabled){if(this.activeRange){if(this.activeRange=="end"){this.setEndDate(i)}else{this.setStartDate(i)}}else{const t=n(i,s);const e=n(i,a);if(e===0||t<0){this.setStartDate(i)}else if(t===0||e<0){this.setEndDate(i)}else if(t<e){this.setStartDate(i)}else{this.setEndDate(i)}}}else{this.setStartDate(i)}}this.calciteDatePickerChange.emit()};this.activeDate=undefined;this.activeRange=undefined;this.value=undefined;this.headingLevel=undefined;this.valueAsDate=undefined;this.minAsDate=undefined;this.maxAsDate=undefined;this.min=undefined;this.max=undefined;this.numberingSystem=undefined;this.scale="m";this.range=false;this.proximitySelectionDisabled=false;this.messageOverrides=undefined;this.messages=undefined;this.activeStartDate=undefined;this.activeEndDate=undefined;this.startAsDate=undefined;this.endAsDate=undefined;this.effectiveLocale="";this.defaultMessages=undefined;this.localeData=undefined;this.hoverRange=undefined}activeDateWatcher(t){if(this.activeRange==="end"){this.activeEndDate=t}}valueAsDateWatcher(t){if(this.range&&Array.isArray(t)){const{activeStartDate:i,activeEndDate:e}=this;const s=t[0];const a=t[1];this.activeStartDate=i!==s&&s;this.activeEndDate=e!==a&&a}else if(t&&t!==this.activeDate){this.activeDate=t}}onMinChanged(t){if(t){this.minAsDate=c(t)}}onMaxChanged(t){if(t){this.maxAsDate=c(t)}}onMessagesChange(){}async setFocus(){await l(this);this.el.focus()}connectedCallback(){u(this);D(this);if(Array.isArray(this.value)){this.valueAsDate=w(this.value)}else if(this.value){this.valueAsDate=c(this.value)}if(this.min){this.minAsDate=c(this.min)}if(this.max){this.maxAsDate=c(this.max)}}disconnectedCallback(){m(this);v(this)}async componentWillLoad(){d(this);await this.loadLocaleData();this.onMinChanged(this.min);this.onMaxChanged(this.max);await g(this)}componentDidLoad(){f(this)}render(){var t;const i=r(this.range&&Array.isArray(this.valueAsDate)?this.valueAsDate[0]:this.valueAsDate,this.minAsDate,this.maxAsDate);let a=this.getActiveDate(i,this.minAsDate,this.maxAsDate);const n=this.range&&Array.isArray(this.valueAsDate)?r(this.valueAsDate[1],this.minAsDate,this.maxAsDate):null;const h=this.getActiveEndDate(n,this.minAsDate,this.maxAsDate);if((this.activeRange==="end"||((t=this.hoverRange)===null||t===void 0?void 0:t.focused)==="end"&&(!this.proximitySelectionDisabled||n))&&h){a=h}if(this.range&&this.mostRecentRangeValue){a=this.mostRecentRangeValue}const c=this.range&&this.activeRange?this.activeRange==="start"?this.minAsDate:i||this.minAsDate:this.minAsDate;const o=this.range&&this.activeRange?this.activeRange==="start"?n||this.maxAsDate:this.maxAsDate:this.maxAsDate;return e(s,{onBlur:this.reset,onKeyDown:this.keyDownHandler,role:"application"},this.renderCalendar(a,o,c,i,n))}effectiveLocaleChange(){y(this,this.effectiveLocale)}valueHandler(t){if(Array.isArray(t)){this.valueAsDate=w(t)}else if(t){this.valueAsDate=c(t)}}async loadLocaleData(){p.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:false};this.localeData=await A(this.effectiveLocale)}renderCalendar(t,i,s,a,n){return this.localeData&&[e("calcite-date-picker-month-header",{activeDate:t,headingLevel:this.headingLevel||C,localeData:this.localeData,max:i,messages:this.messages,min:s,onCalciteInternalDatePickerSelect:this.monthHeaderSelectChange,scale:this.scale,selectedDate:this.activeRange==="end"?n:a||new Date}),e("calcite-date-picker-month",{activeDate:t,endDate:this.range?n:undefined,hoverRange:this.hoverRange,localeData:this.localeData,max:i,min:s,onCalciteInternalDatePickerActiveDateChange:this.monthActiveDateChange,onCalciteInternalDatePickerHover:this.monthHoverChange,onCalciteInternalDatePickerMouseOut:this.monthMouseOutChange,onCalciteInternalDatePickerSelect:this.monthDateChange,scale:this.scale,selectedDate:this.activeRange==="end"?n:a,startDate:this.range?a:undefined})]}getEndDate(){return Array.isArray(this.valueAsDate)&&this.valueAsDate[1]||undefined}setEndDate(t){const i=this.getStartDate();const e=t?o(t):t;this.value=[h(i),h(t)];this.valueAsDate=[i,t];this.mostRecentRangeValue=e;this.calciteDatePickerRangeChange.emit();this.activeEndDate=t||null}getStartDate(){return Array.isArray(this.valueAsDate)&&this.valueAsDate[0]}setStartDate(t){const i=this.getEndDate();this.value=[h(t),h(i)];this.valueAsDate=[t,i];this.mostRecentRangeValue=t;this.calciteDatePickerRangeChange.emit();this.activeStartDate=t||null}getActiveDate(t,i,e){return r(this.activeDate,i,e)||t||r(new Date,i,e)}getActiveEndDate(t,i,e){return r(this.activeEndDate,i,e)||t||r(new Date,i,e)}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{activeDate:["activeDateWatcher"],valueAsDate:["valueAsDateWatcher"],min:["onMinChanged"],max:["onMaxChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange","loadLocaleData"],value:["valueHandler"]}}};x.style=k;export{x as calcite_date_picker};
//# sourceMappingURL=p-c87cdfc5.entry.js.map