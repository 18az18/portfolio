(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("express");var r=e.n(t);const n=require("cors");var o=e.n(n);const a=require("react");var i=e.n(a);const c=require("react-dom/server");var l=e.n(c);const s=require("react-router-dom/server"),u=require("isomorphic-style-loader/StyleContext");var d=e.n(u);const m=require("react-router-dom"),v=function(){return i().createElement("div",null,"Here is home.")},f=function(){return i().createElement("div",null,i().createElement(m.Routes,null,i().createElement(m.Route,{path:"/",element:i().createElement(v,null)})))};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const y=function(e){var t,r=new Set,n=l().renderToString(a.createElement(a.StrictMode,null,a.createElement(s.StaticRouter,{location:e.url,context:{}},a.createElement(d().Provider,{value:{insertCss:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.forEach((function(e){return r.add(e._getCss())}))}}},a.createElement(f,null)))));return'\n  <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8" />\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n        <title>Portfolio</title>\n        <script src="/bundle.js" defer><\/script>\n        <style>'.concat((t=r,function(e){if(Array.isArray(e))return p(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).join(""),'</style>\n        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />\n    </head>\n    <body>\n        <div id="root">').concat(n,"</div>    \n    </html>\n    ")};var h=r()();h.use(o()()),h.use(r().static("public")),h.get("*",(function(e,t){var r=y(e);t.send(r)}));var b=process.env.PORT||3e3;h.listen(b,(function(){console.log("listening on port ".concat(b))}))})();