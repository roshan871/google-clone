(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{57:function(e,c,s){},58:function(e,c,s){},59:function(e,c,s){},60:function(e,c,s){},71:function(e,c,s){},73:function(e,c,s){"use strict";s.r(c);var t=s(0),a=s.n(t),n=s(19),i=s.n(n),r=(s(57),s(58),s(59),s(5)),o=s(46),l=s.n(o),j=s(89),d=s(40),h=s(16),b=(s(60),s(34)),u=s.n(b),O=s(45),m=s.n(O),x=s(88),g=s(4),_=s(1),p=Object(t.createContext)(),v=function(e){var c=e.reducer,s=e.initialState,a=e.children;return Object(_.jsx)(p.Provider,{value:Object(t.useReducer)(c,s),children:a})},f=function(){return Object(t.useContext)(p)},N=s(37),P="SET_SEARCH_TERM",w=function(e,c){return console.log(c),c.type===P?Object(N.a)(Object(N.a)({},e),{},{term:c.term}):e};var y=function(e){var c=e.hideButtons,s=void 0!==c&&c,a=f(),n=Object(h.a)(a,2);Object(d.a)(n[0]);var i=n[1],r=Object(t.useState)(""),o=Object(h.a)(r,2),l=o[0],j=o[1],b=Object(g.f)(),O=function(e){e.preventDefault(),console.log("You hit the search button >>>",l),i({type:P,term:l}),b.push("/search")};return Object(_.jsxs)("form",{className:"search",children:[Object(_.jsxs)("div",{className:"search__input",children:[Object(_.jsx)(u.a,{className:"search__inputIcon"}),Object(_.jsx)("input",{value:l,onChange:function(e){return j(e.target.value)}}),Object(_.jsx)(m.a,{})]}),s?Object(_.jsxs)("div",{className:"search__buttons",children:[Object(_.jsx)(x.a,{className:"search__buttonsHidden",type:"submit",variant:"outlined",onClick:O,children:"Google-search"}),Object(_.jsx)(x.a,{className:"search__buttonsHidden",variant:"outlined",children:"I'm Feeling Lucky"})]}):Object(_.jsxs)("div",{className:"search__buttons",children:[Object(_.jsx)(x.a,{type:"submit",variant:"outlined",onClick:O,children:"Google-search"}),Object(_.jsx)(x.a,{variant:"outlined",children:"I'm Feeling Lucky"})]})]})};var S=function(){return Object(_.jsxs)("div",{className:"home",children:[Object(_.jsxs)("div",{className:"home__header",children:[Object(_.jsxs)("div",{className:"home__headerLeft",children:[Object(_.jsx)(r.b,{to:"/about",children:"About"}),Object(_.jsx)(r.b,{to:"/store",children:"Store"})]}),Object(_.jsxs)("div",{className:"home__headerRight",children:[Object(_.jsx)(r.b,{to:"/gmail",children:"Gmail"}),Object(_.jsx)(r.b,{to:"/images",children:"Images"}),Object(_.jsx)(l.a,{}),Object(_.jsx)(j.a,{})]})]}),Object(_.jsxs)("div",{className:"home__body",children:[Object(_.jsx)("img",{src:"https://www.solopress.com/blog/wp-content/uploads/2015/09/google-new-logo.jpeg",alt:"gogle-log"}),Object(_.jsx)("div",{className:"home__inputContainer",children:Object(_.jsx)(y,{})})]})]})},k=(s(71),s(39)),C=s.n(k),I=s(47),A=function(e){var c=Object(t.useState)(null),s=Object(h.a)(c,2),a=s[0],n=s[1];return Object(t.useEffect)((function(){var c=function(){var c=Object(I.a)(C.a.mark((function c(){return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyCTHH0mc38Z6RJ_uAub1HcW1ViCSly8Oiw","&cx=").concat("7b329093cab8af08d","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}));case 1:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[e]),{data:a}},R=s(48),T=s.n(R),H=s(49),L=s.n(H);var E=function(){var e=f(),c=Object(h.a)(e,2),s=c[0].term,t=void 0===s?"tesla":s,a=(c[1],A(t).data);return console.log(a),Object(_.jsxs)("div",{className:"searchPage",children:[Object(_.jsxs)("div",{className:"searchPage__header",children:[Object(_.jsx)(r.b,{to:"/",children:Object(_.jsx)("img",{className:"searchPage-logo",src:"https://www.solopress.com/blog/wp-content/uploads/2015/09/google-new-logo.jpeg",alt:""})}),Object(_.jsxs)("div",{className:"searchPage__headerBody",children:[Object(_.jsx)(y,{hideButtons:!0}),Object(_.jsxs)("div",{className:"searchPage__options",children:[Object(_.jsxs)("div",{className:"searchPage__optionsLeft",children:[Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(u.a,{}),Object(_.jsx)(r.b,{to:"/all",children:"All"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(T.a,{}),Object(_.jsx)(r.b,{to:"/news",children:"News"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(L.a,{}),Object(_.jsx)(r.b,{to:"/images",children:"Images"})]}),Object(_.jsx)("div",{className:"searchPage__option",children:Object(_.jsx)(r.b,{to:"/shopping",children:"Shopping"})}),Object(_.jsx)("div",{className:"searchPage__option",children:Object(_.jsx)(r.b,{to:"/maps",children:"Maps"})}),Object(_.jsx)("div",{className:"searchPage__option",children:Object(_.jsx)(r.b,{to:"/more",children:"More"})})]}),Object(_.jsxs)("div",{className:"searchPage__optionsRight",children:[Object(_.jsx)("div",{className:"searchPage__option",children:Object(_.jsx)(r.b,{to:"/settings",children:"Settings"})}),Object(_.jsx)("div",{className:"searchPage__option",children:Object(_.jsx)(r.b,{to:"/tools",children:"Tools"})})]})]})]})]}),t&&Object(_.jsxs)("div",{className:"searchPage__results",children:[Object(_.jsxs)("p",{className:"searchPage__resultCount",children:["About ",null===a||void 0===a?void 0:a.searchInformation.formattedTotalResults," results (",null===a||void 0===a?void 0:a.searchInformation.formattedSearchTime," seconds) for ",t]}),null===a||void 0===a?void 0:a.items.map((function(e){var c,s,t,a,n,i;return Object(_.jsxs)("div",{className:"searchPage__result",children:[Object(_.jsxs)("a",{className:"searchPage__resultLink",href:e.link,children:[(null===(c=e.pagemap)||void 0===c||null===(s=c.cse_image)||void 0===s?void 0:s.length)>0&&(null===(t=e.pagemap)||void 0===t||null===(a=t.cse_image[0])||void 0===a?void 0:a.src)&&Object(_.jsx)("img",{className:"searchPage__resultImage",src:null===(n=e.pagemap)||void 0===n||null===(i=n.cse_image[0])||void 0===i?void 0:i.src,alt:""}),e.displayLink]}),Object(_.jsx)("a",{className:"searchPage__resultTitle",href:e.link,children:Object(_.jsx)("h2",{children:e.title})}),Object(_.jsx)("p",{className:"searchPage__resultSnippet",children:e.snippet})]})}))]})]})};var B=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(r.a,{children:Object(_.jsxs)(g.c,{children:[Object(_.jsx)(g.a,{path:"/search",children:Object(_.jsx)(E,{})}),Object(_.jsx)(g.a,{path:"/",children:Object(_.jsx)(S,{})})]})})})};i.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(v,{initialState:{term:null},reducer:w,children:Object(_.jsx)(B,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.7eec2f54.chunk.js.map