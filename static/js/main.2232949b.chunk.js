(this["webpackJsonpnews-feed"]=this["webpackJsonpnews-feed"]||[]).push([[0],{20:function(e,c,t){},21:function(e,c,t){},42:function(e,c,t){},43:function(e,c,t){},44:function(e,c,t){},45:function(e,c,t){"use strict";t.r(c);var a=t(2),s=t.n(a),r=t(14),n=t.n(r),i=(t(20),t(21),t(0));var j=function(){return Object(i.jsx)("header",{className:"main__header",children:Object(i.jsx)("nav",{className:"main__navbar",children:Object(i.jsx)("div",{className:"main_navbar__logo",children:"news feed"})})})},d=t(5),l=t(15),b=t.n(l);t(42);var o=function(e){var c=e.image,t=e.title,a=e.description,s=e.url;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card__left",children:Object(i.jsx)("div",{className:"card__image",children:Object(i.jsx)("img",{src:c,alt:""})})}),Object(i.jsxs)("div",{className:"card__right",children:[Object(i.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("h3",{children:t})}),Object(i.jsx)("p",{children:a}),Object(i.jsx)("div",{className:"card__actions",children:Object(i.jsx)("a",{href:"https://twitter.com/share?url=".concat(s),target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("i",{className:"fab fa-twitter"})})})]})]})};t(43);var O=function(){return Object(i.jsxs)("div",{className:"card__loading",children:[Object(i.jsx)("div",{className:"card_loading__left",children:Object(i.jsx)("div",{className:"card_loading__image"})}),Object(i.jsxs)("div",{className:"card_loading__right",children:[Object(i.jsx)("div",{className:"card_loading__title"}),Object(i.jsx)("div",{className:"card_loading__paragraph"}),Object(i.jsx)("div",{className:"card_loading__paragraph"}),Object(i.jsx)("div",{className:"card_loading__half__paragraph"})]})]})};var h=function(e){var c=e.setQuery,t=Object(a.useRef)();return Object(i.jsxs)("div",{className:"search",children:[Object(i.jsx)("input",{ref:t,type:"search"}),Object(i.jsx)("div",{className:"search__button",children:Object(i.jsx)("button",{onClick:function(){c(t.current.value)},children:"pesquisar"})})]})};t(44);var x=function(){var e=Object(a.useState)(null),c=Object(d.a)(e,2),t=c[0],s=c[1],r=Object(a.useState)(""),n=Object(d.a)(r,2),j=n[0],l=n[1];return Object(a.useEffect)((function(){b.a.get("https://gnews.io/api/v4/top-headlines?q=".concat(j,"&country=br&token=4bce93083d302e826bdf9db97580c270")).then((function(e){console.log(e.data.articles),s(e.data.articles)}))}),[j]),Object(i.jsx)("div",{className:"home__page",children:Object(i.jsxs)("div",{className:"feed",children:[Object(i.jsx)(h,{setQuery:l}),t?t.map((function(e){return Object(i.jsx)(o,{image:e.image,title:e.title,description:e.description,url:e.url},e.content)})):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{}),Object(i.jsx)(O,{}),Object(i.jsx)(O,{}),Object(i.jsx)(O,{}),Object(i.jsx)(O,{}),Object(i.jsx)(O,{}),Object(i.jsx)(O,{}),Object(i.jsx)(O,{}),Object(i.jsx)(O,{}),Object(i.jsx)(O,{})]})]})})};var _=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsx)(x,{})]})};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(_,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2232949b.chunk.js.map