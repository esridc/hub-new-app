import{a as n}from"./p-13539f84.js";import{c as o}from"./p-008bb4e2.js";import{g as s}from"./p-4c9bfba7.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const t={};const r={};async function a(o){const i=s(o);if(t[i]){return t[i]}if(!r[i]){r[i]=fetch(n(`./assets/date-picker/nls/${i}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${i}" not found or invalid, falling back to english`);return a("en")}))}const c=await r[i];t[i]=c;return c}function i(n){return n.map(((n,s)=>o(n,s===1)))}export{a,i as g};
//# sourceMappingURL=p-ccdc4f9e.js.map