import{r as i,h as t,g as a}from"./p-13539f84.js";import{c as n}from"./p-dee74110.js";import{f as e}from"./p-481a1c31.js";import"./p-30b0f762.js";import"./p-5f83161a.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const o={swatch:"swatch",noColorIcon:"no-color-icon"};const r={borderLight:"rgba(0, 0, 0, 0.3)",borderDark:"rgba(255, 255, 255, 0.15)"};const c="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:visible;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.no-color-icon{position:absolute;inset:0px;block-size:100%;inline-size:100%}";const s=class{constructor(t){i(this,t);this.active=false;this.color=undefined;this.scale="m"}handleColorChange(i){this.internalColor=n(i)}componentWillLoad(){this.handleColorChange(this.color)}render(){const{active:i,el:a,internalColor:n}=this;const c=i?"100%":"0";const s=n.hex();const l=e(a);const m=l==="light"?r.borderLight:r.borderDark;return t("svg",{class:o.swatch,xmlns:"http://www.w3.org/2000/svg"},t("title",null,s),t("rect",{fill:s,height:"100%",id:"swatch",rx:c,stroke:m,"stroke-width":"2",style:{"clip-path":`inset(0 round ${c})`},width:"100%"}))}get el(){return a(this)}static get watchers(){return{color:["handleColorChange"]}}};s.style=c;export{s as calcite_color_picker_swatch};
//# sourceMappingURL=p-acc6fb96.entry.js.map