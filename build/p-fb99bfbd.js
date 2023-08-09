import{f as t}from"./p-13539f84.js";import{c as o}from"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const n=new Set;let f;const s={childList:true};function c(t){if(!f){f=o("mutation",e)}f.observe(t.el,s)}function i(t){n.delete(t.el);e(f.takeRecords());f.disconnect();for(const[t]of n.entries()){f.observe(t,s)}}function e(o){o.forEach((({target:o})=>{t(o)}))}export{c,i as d};
//# sourceMappingURL=p-fb99bfbd.js.map