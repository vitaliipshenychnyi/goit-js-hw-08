!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector(".feedback-form"),i="feedback-form-state",o={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,m=d||v||Function("return this")(),g=Object.prototype.toString,p=Math.max,b=Math.min,y=function(){return m.Date.now()};function S(e,t,n){var i,o,r,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(a);function m(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function g(e){return c=e,f=setTimeout(h,t),s?m(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=r}function h(){var e=y();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?b(n,r-(e-c)):n}(e))}function w(e){return f=void 0,v&&i?m(e):(i=o=void 0,u)}function T(){var e=y(),n=S(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return g(l);if(d)return f=setTimeout(h,t),m(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,O(n)&&(s=!!n.leading,r=(d="maxWait"in n)?p(j(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:w(y())},T}function O(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(O(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=O(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var i=l.test(e);return i||c.test(e)?s(e.slice(2),i?2:8):f.test(e)?NaN:+e}o=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(a);return O(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:i,maxWait:t,trailing:o})};var h=n.elements,w=h.email,T=h.message;function x(){if(localStorage.getItem(i)){var e=JSON.parse(localStorage.getItem(i));e.email&&w.setAttribute("value",e.email),T.textContent=e.message}else w.removeAttribute("value"),T.textContent=""}n.addEventListener("input",o((function(){var e={email:"",message:""};e.email=w.value,e.message=T.value,localStorage.setItem(i,JSON.stringify(e))}),500)),document.addEventListener("DOMContentLoaded",x),n.addEventListener("submit",(function(e){if(e.preventDefault(),!localStorage.getItem(i))return;console.log(JSON.parse(localStorage.getItem(i))),localStorage.clear(),n.reset(),x()}))}();
//# sourceMappingURL=03-feedback.3fb77f6a.js.map
