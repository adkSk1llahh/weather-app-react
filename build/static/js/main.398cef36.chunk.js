(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),i=a(3),o=(a(9),a(0)),d="1bb1a0d44d9627a2e6a71821ffc14eb1",j="https://api.openweathermap.org/data/2.5/";var l=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)({}),r=Object(i.a)(s,2),l=r[0],h=r[1];return Object(o.jsx)("div",{className:"undefined"!=typeof l.main&&l.main.temp>16?"app warm":"app",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"search...",onChange:function(e){return n(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(j,"weather?q=").concat(a,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){h(e),n(""),console.log(e)}))}})}),"undefined"!=typeof l.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[l.name,", ",l.sys.country]}),Object(o.jsx)("div",{className:"date",children:function(){var e=String(new window.Date);return e=e.slice(3,15)}()})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(l.main.temp)," C"]}),Object(o.jsx)("div",{className:"weather",children:l.weather[0].main})]})]}):""]})})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.398cef36.chunk.js.map