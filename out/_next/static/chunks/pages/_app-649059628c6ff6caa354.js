_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("cha2")}])},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("q1tI"),o=r.n(n),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=o.a.createContext&&o.a.createContext(a),s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function l(e){return e&&e.map((function(e,t){return o.a.createElement(e.tag,s({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return o.a.createElement(f,s({attr:s({},e.attr)},t),l(e.child))}}function f(e){var t=function(t){var r,n=e.attr,a=e.size,c=e.title,l=i(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&o.a.createElement("title",null,c),e.children)};return void 0!==c?o.a.createElement(c.Consumer,null,(function(e){return t(e)})):t(a)}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),o=r("284h");t.__esModule=!0,t.default=void 0;var a=o(r("q1tI")),c=r("elyg"),s=r("nOHt"),i=r("vNVm"),l={};function u(e,t,r,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,s.useRouter)(),o=r&&r.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],s=r[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):s||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,b=e.replace,m=e.shallow,v=e.scroll,j=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var y=a.Children.only(h),O=y&&"object"===typeof y&&y.ref,g=(0,i.useIntersection)({rootMargin:"200px"}),x=n(g,2),w=x[0],k=x[1],N=a.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,a.useEffect)((function(){var e=k&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof j?j:r&&r.locale,o=l[d+"%"+p+(n?"%"+n:"")];e&&!o&&u(r,d,p,{locale:n})}),[p,d,k,j,t,r]);var E={ref:N,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,r,d,p,b,m,v,j)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(r,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var L="undefined"!==typeof j?j:r&&r.locale,P=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(p,L,r&&r.locales,r&&r.domainLocales);E.href=P||(0,c.addBasePath)((0,c.addLocale)(p,L,r&&r.defaultLocale))}return a.default.cloneElement(y,E)};t.default=f},cha2:function(e,t,r){"use strict";r.r(t);var n=r("nKUr");function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r("q1tI"),c=(r("zPlV"),r("YFqc")),s=r.n(c),i=r("v7au"),l=r("rCLJ");function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(i){o=!0,a=i}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(){var e=f(a.useState(!1),2),t=e[0],r=e[1];return a.useEffect((function(){var e=document.querySelector("html");t?e.classList.add("dark"):e.classList.remove("dark")}),[t]),Object(n.jsxs)("div",{className:"flex justify-center items-center absolute top-6 right-6",children:[Object(n.jsx)("span",{className:"",children:Object(n.jsx)("svg",{className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})}),Object(n.jsx)("div",{className:"w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1 cursor-pointer transition-color ".concat(t&&"bg-gray-700"),onClick:function(){return r((function(e){return!e}))},children:Object(n.jsx)("div",{className:"bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ".concat(t&&"translate-x-7")})}),Object(n.jsx)("span",{className:"",children:Object(n.jsx)("svg",{className:"h-6 w-6 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]})},p=function(e){var t=e.url,r=e.children;return Object(n.jsx)("a",{href:t,children:Object(n.jsx)("div",{className:"rounded-full p-2 bg-white dark:bg-gray-700 opacity-90 hover:bg-green-500 dark:hover:bg-green-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-300",children:r})})},h=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsxs)("div",{className:"flex flex-col sm:flex-row mt-12 mb-0 sm:mb-6 space-x-6 items-center border-gray-200 dark:border-gray-700 pb-6",children:[Object(n.jsx)("img",{src:"/pic.jpeg",alt:"Image of Kasper",className:"rounded shadow h-32"}),Object(n.jsxs)("div",{className:"space-y-3 m-4 sm:m-0",children:[Object(n.jsx)(s.a,{href:"/",children:Object(n.jsx)("a",{children:Object(n.jsx)("h1",{className:"text-4xl font-black items-stretch text-gray-900 dark:text-gray-100",children:"Hi! I'm Kasper Laursen \ud83d\udc4b"})})}),Object(n.jsx)("p",{children:"On this site I posts about whatever interests me."}),Object(n.jsxs)("div",{className:"flex space-x-4 text-3xl justify-center sm:justify-start",children:[Object(n.jsx)(p,{url:"https://github.com/kasperlaursen",children:Object(n.jsx)(i.a,{})}),Object(n.jsx)(p,{url:"https://www.linkedin.com/in/habber/",children:Object(n.jsx)(l.a,{})})]})]})]})]})};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return Object(n.jsxs)("div",{className:"mx-auto max-w-4xl px-8",children:[Object(n.jsx)(h,{}),Object(n.jsx)(t,m({},r))]})}},vNVm:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,i=(0,o.useRef)(),l=(0,o.useState)(!1),u=n(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r("q1tI"),a=r("0G5g"),c="undefined"!==typeof IntersectionObserver;var s=new Map},zPlV:function(e,t,r){}},[[0,0,2,4,6,1]]]);