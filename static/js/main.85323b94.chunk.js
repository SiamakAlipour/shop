(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,c){},134:function(e,t,c){},135:function(e,t,c){},147:function(e,t,c){},148:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){},152:function(e,t,c){},153:function(e,t,c){},192:function(e,t,c){},193:function(e,t,c){},194:function(e,t,c){},195:function(e,t,c){},196:function(e,t,c){},197:function(e,t,c){},198:function(e,t,c){},199:function(e,t,c){},200:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(14),r=c.n(i),a=(c(134),c(8)),o=(c(135),c(110)),l=c.n(o),j=c(16),u="SEARCH_ADD",d="PRODUCTS_ALL",b="CHECKOUT_ADD",O="CHECKOUT_COUNT",h="CHECKOUT_REMOVE",m="CHECKOUT_TOTALCOST",p="MESSAGE_ADD",x="MESSAGE_REMOVE",f=c(28),v=c(113),_=c.n(v),g=c(260),N=c(2);var y=function(){var e=Object(j.d)((function(e){return e.checkout})),t=Object(n.useState)(!0),c=Object(a.a)(t,2),s=c[0],i=(c[1],Object(n.useRef)()),r=Object(j.c)();return Object(N.jsxs)("div",{className:"header",children:[Object(N.jsx)("div",{className:"header__wrapper",children:Object(N.jsxs)("form",{className:"header__searchBox",onSubmit:function(e){e.preventDefault();var t=i.current.value;r({type:u,payload:{value:t}})},children:[Object(N.jsx)("input",{type:"text",placeholder:"\u062c\u0633\u062a\u062c\u0648...",ref:i}),Object(N.jsx)(l.a,{})]})}),Object(N.jsx)("div",{className:"header__loginRegister",children:Object(N.jsx)("ul",{children:s?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(f.b,{to:"/",children:Object(N.jsx)("li",{children:"\u062e\u0627\u0646\u0647"})}),Object(N.jsx)(f.b,{to:"/account",children:Object(N.jsx)("li",{children:"\u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc"})}),Object(N.jsx)(f.b,{to:"/checkout",children:Object(N.jsx)("li",{children:Object(N.jsxs)(g.a,{className:"header__basketIcon",children:[Object(N.jsx)(_.a,{}),0===e.length?null:Object(N.jsx)("div",{className:"header__basketBadge",children:e.length})]})})})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(f.b,{to:"/",children:Object(N.jsx)("li",{children:"\u062e\u0627\u0646\u0647"})}),Object(N.jsx)(f.b,{to:"/account/login",children:Object(N.jsx)("li",{children:"\u0648\u0631\u0648\u062f"})}),Object(N.jsx)(f.b,{to:"/account/register",children:Object(N.jsx)("li",{children:"\u062b\u0628\u062a \u0646\u0627\u0645"})})]})})})]})},C=(c(147),c(17));c(148);var k=function(e){var t=e.image,c=e.url,n=void 0===c?"#":c;return Object(N.jsxs)("div",{className:"ads",children:[Object(N.jsx)("h1",{children:"ADS"}),Object(N.jsx)("a",{href:n,children:Object(N.jsx)("img",{src:t,alt:""})})]})};c(149);var w=function(e){var t=e.content,c=e.title,n=e.icons;return Object(N.jsxs)("div",{className:"widget",children:[Object(N.jsx)("h3",{className:"widget__name",children:c}),t,Object(N.jsx)("div",{className:"widget__footer",children:n})]})};c(150);var S=function(){var e=Object(N.jsxs)("div",{className:"widget__content",children:[Object(N.jsx)("p",{children:"\u0645\u0627 \u0631\u0627 \u062f\u0631 \u0634\u0628\u06a9\u0647 \u0647\u0627\u06cc \u0627\u062c\u062a\u0645\u0627\u0639\u06cc \u062f\u0646\u0628\u0627\u0644 \u06a9\u0646\u06cc\u062f"}),Object(N.jsxs)("div",{className:"widget__icons",children:[Object(N.jsx)("a",{href:"#",children:Object(N.jsx)("img",{className:"widget__icons--style",src:"https://www.freepnglogos.com/uploads/telegram-logo-2.png",alt:""})}),Object(N.jsx)("a",{href:"#",children:Object(N.jsx)("img",{className:"widget__icons--style",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png",alt:""})})]})]});return Object(N.jsxs)("div",{className:"sidebar",children:[Object(N.jsx)(w,{title:"\u0634\u0628\u06a9\u0647 \u0647\u0627\u06cc \u0627\u062c\u062a\u0645\u0627\u0639\u06cc",content:e}),Object(N.jsx)(w,{title:"\u0634\u0628\u06a9\u0647 \u0647\u0627\u06cc \u0627\u062c\u062a\u0645\u0627\u0639\u06cc",content:e})]})},I=(c(151),c(152),c(114)),E=c.n(I),T=function(e,t){return{type:O,payload:{id:e,count:t}}},F=function(e,t){return{type:m,payload:{id:e,totalCost:t}}},A=function(e,t){return{type:p,payload:{info:e,message:t}}},P=function(){return{type:x}};var R=function(e){var t=e.id,c=e.name,s=e.image,i=e.description,r=e.price,o=Object(n.useState)(r),l=Object(a.a)(o,2),u=l[0],d=l[1];Object(n.useEffect)((function(){var e=(new Intl.NumberFormat).format(r);d(e)}),[r]);var O=Object(j.d)((function(e){return e.checkout})),h=Object(j.c)();return Object(N.jsxs)("div",{className:"product",children:[Object(N.jsxs)("div",{className:"product__content",children:[Object(N.jsx)("img",{src:s,alt:""}),Object(N.jsx)("p",{className:"product__name",children:c}),Object(N.jsx)("p",{className:"product__description",children:i})]}),Object(N.jsxs)("div",{className:"product__footer ",children:[Object(N.jsx)("p",{className:"text-success",children:u}),Object(N.jsx)(g.a,{color:"inherit",onClick:function(){if(O.some((function(e){return e.id===t}))){var e=O.findIndex((function(e){return e.id===t}));console.log(e),h(T(t,O[e].count+1)),h(F(t,O[e].unitPrice*(O[e].count+1))),h(A("alert-success","\u062a\u0639\u062f\u0627\u062f \u06a9\u0627\u0644\u0627 \u0628\u0647 ".concat(O[e].count+1," \u0627\u0641\u0632\u0627\u06cc\u0634 \u06cc\u0627\u0641\u062a")))}else h(function(e,t,c,n){return{type:b,payload:{id:e,name:t,description:c,unitPrice:n}}}(t,c,i,r)),h(A("alert-success","\u0628\u0647 \u0633\u0628\u062f \u06a9\u0627\u0644\u0627 \u0627\u0636\u0627\u0641\u0647 \u0634\u062f"))},children:Object(N.jsx)(E.a,{})})]})]})},D=(c(153),c(261)),L=c(253),B=c(262),U=c(255),M=c(115),H=c.n(M),q=c(58),K=c.n(q),G=c(79),J=c(80),V=c.n(J),z=V.a.create({baseURL:"http://127.0.0.1:8001/api/products"});var Q=Object(j.b)((function(e){return{product:e.product.items}}),(function(e){return{allProducts:function(){return e(function(){var e=Object(G.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.get("/").then((function(e){t({type:d,payload:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.allProducts,c=e.product,s=Object(n.useState)(),i=Object(a.a)(s,2),r=i[0],o=i[1],l=Object(n.useState)(!1),j=Object(a.a)(l,2),u=j[0],d=j[1],b=Object(n.useState)(1),O=Object(a.a)(b,2),h=O[0],m=O[1],p=Object(n.useState)(9),x=Object(a.a)(p,1)[0],f=Object(n.useState)("0"),v=Object(a.a)(f,2),_=v[0],g=v[1],y=function(e){g(e.currentTarget.attributes["data-value"].value)};Object(n.useEffect)((function(){t()}),[]),Object(n.useEffect)((function(){o(c),r&&d(!1)}),[c]);var C=h*x,k=C-x,w=null===r||void 0===r?void 0:r.slice(k,C);return Object(N.jsxs)("div",{className:"feed",children:[Object(N.jsxs)("div",{className:"feed__header",children:[Object(N.jsx)("h3",{children:"\u0645\u062d\u0635\u0648\u0644\u0627\u062a"}),Object(N.jsxs)("div",{className:"feed__category",children:[Object(N.jsx)(D.a,{id:"label",style:{fontFamily:"IRANSans"},children:"\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc"}),Object(N.jsxs)(L.a,{labelId:"label",style:{fontFamily:"IRANSans"},id:"select",value:_,children:[Object(N.jsx)(B.a,{style:{fontFamily:"IRANSans"},value:"0",onClick:y,children:"\u062a\u0627\u0632\u0647 \u062a\u0631\u06cc\u0646 \u0647\u0627"}),Object(N.jsx)(B.a,{style:{fontFamily:"IRANSans"},value:"1",onClick:y,children:"Twenty"})]})]})]}),Object(N.jsx)("div",{className:"feed__content",children:u?Object(N.jsx)(H.a,{type:"Oval",color:"#212121",height:100,width:100}):Object(N.jsxs)("div",{className:"feed__products",children:[Object(N.jsx)("div",{className:"feed__productsList",children:null===w||void 0===w?void 0:w.map((function(e){return Object(N.jsx)(R,{id:e._id,name:e.name,image:e.image,price:e.price,description:e.description},e._id)}))}),Object(N.jsx)(U.a,{style:{direction:"ltr"},count:Math.ceil((null===r||void 0===r?void 0:r.length)/x),onChange:function(e,t){return m(t)}})]})})]})})),W=(c(192),c(193),c(116)),X=c.n(W);var Y=function(e){var t=e.info,c=e.message,s=Object(j.c)();return Object(n.useEffect)((function(){c&&setTimeout((function(){return s(P())}),1500)})),c?Object(N.jsxs)("div",{className:"alert ".concat(t," message"),children:[c,Object(N.jsx)(g.a,{color:"error",onClick:function(){return s(P())},children:Object(N.jsx)(X.a,{})})]}):null};var Z=function(){var e=Object(j.d)((function(e){return e.message})),t=Object(a.a)(e,2);return t[0],t[1],Object(j.c)(),Object(N.jsxs)("div",{className:"main",children:[Object(N.jsxs)("div",{className:"main__banner",children:[Object(N.jsx)("div",{className:"main__bannerImage"}),Object(N.jsxs)("div",{className:"main__ads",children:[Object(N.jsx)(k,{image:"https://picsum.photos/468/60"}),Object(N.jsx)(k,{image:"https://picsum.photos/468/60"}),Object(N.jsx)(k,{image:"https://picsum.photos/468/60"})]})]}),Object(N.jsxs)("div",{className:"main__content",children:[Object(N.jsx)(Q,{}),Object(N.jsx)(S,{})]})]})};c(194);var $=function(){return Object(N.jsx)("div",{className:"footer",children:Object(N.jsx)("h1",{children:"footer"})})};c(195);var ee=function(){return Object(N.jsx)("div",{className:"register",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("form",{action:"",className:"register__form form-control",children:[Object(N.jsx)("input",{type:"text",placeholder:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",className:"register__input form-control"}),Object(N.jsx)("input",{type:"password",placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",className:"register__input form-control"}),Object(N.jsx)("input",{type:"password",placeholder:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631",className:"register__input form-control"}),Object(N.jsx)("input",{type:"email",className:"register__input form-control",placeholder:"\u0627\u06cc\u0645\u06cc\u0644"}),Object(N.jsxs)("div",{className:"register__formCheck",children:[Object(N.jsx)("input",{type:"checkbox",className:"form-check-input",id:"rememberCheckBox"}),Object(N.jsxs)("label",{htmlFor:"rememberCheckBox",children:[Object(N.jsx)("a",{href:"#",children:"\u0642\u0648\u0627\u0646\u06cc\u0646"})," \u0631\u0627 \u0642\u0628\u0648\u0644 \u062f\u0627\u0631\u0645"]})]}),Object(N.jsx)("button",{className:"btn btn-primary",children:"\u062b\u0628\u062a \u0646\u0627\u0645"})]})})})};c(196);var te=function(){return Object(N.jsx)("div",{className:"login",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("form",{action:"",className:"login__form form-control",children:[Object(N.jsx)("input",{type:"text",placeholder:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",className:" login__input form-control"}),Object(N.jsx)("input",{type:"password",placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",className:" login__input form-control"}),Object(N.jsxs)("div",{className:"login__formCheck",children:[Object(N.jsx)("input",{type:"checkbox",className:"form-check-input",id:"rememberCheckBox"}),Object(N.jsx)("label",{htmlFor:"rememberCheckBox",children:"\u0645\u0631\u0627 \u0628\u0647 \u062e\u0627\u0637\u0631 \u0628\u0633\u067e\u0627\u0631"})]}),Object(N.jsx)("button",{className:"btn btn-success",children:"\u0648\u0631\u0648\u062f"})]})})})};c(107),c(197);var ce=function(e){var t=e.option,c=Object(n.useState)(),s=Object(a.a)(c,2),i=s[0],r=s[1];return 0===t?Object(N.jsx)("div",{className:"option",children:Object(N.jsxs)("div",{className:"option__addProduct form-control",children:[Object(N.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0646\u0627\u0645 \u06a9\u0627\u0644\u0627",required:!0}),Object(N.jsx)("input",{type:"text",className:"form-control",placeholder:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u06a9\u0627\u0644\u0627",required:!0}),Object(N.jsx)("input",{type:"file",className:"form-control",placeholder:"",required:!0}),Object(N.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0642\u06cc\u0645\u062a \u06a9\u0627\u0644\u0627",value:i,onChange:function(e){var t=e.target;if(isNaN(parseInt(t.value)))r();else{var c=t.value.replace(/\D/g,""),n=parseInt(c).toLocaleString();r(n)}},required:!0}),Object(N.jsx)("input",{type:"button",value:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0644\u0627",className:"btn btn-primary"})]})}):1===t?Object(N.jsx)("div",{className:"option",children:"1"}):2===t?Object(N.jsx)("div",{className:"option",children:"2"}):3===t?Object(N.jsx)("div",{className:"option",children:"3"}):void 0},ne=(V.a.create({baseURL:"http://127.0.0.1:8001/api/users"}),function(){localStorage.removeItem("user")});var se=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(!0),o=Object(a.a)(r,2),l=o[0];return o[1],s.a.useEffect((function(){console.log(c)})),Object(N.jsxs)("div",{className:"account",children:[Object(N.jsx)("div",{className:"account__sideOptions",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)(f.b,{to:"/",className:"active",children:Object(N.jsx)("li",{children:"\u062e\u0627\u0646\u0647"})}),l?Object(N.jsx)("li",{onClick:function(){return i(0)},children:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0644\u0627"}):null,l?Object(N.jsx)("li",{onClick:function(){return i(1)},children:"\u0645\u062f\u06cc\u0631\u06cc\u062a \u06a9\u0627\u0631\u0628\u0631\u0627\u0646"}):null,Object(N.jsx)(f.b,{to:"/checkout",children:Object(N.jsx)("li",{children:"\u0633\u0628\u062f \u062e\u0631\u06cc\u062f"})}),Object(N.jsx)("li",{onClick:function(){return i(3)},children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc"}),Object(N.jsx)("li",{onClick:function(){return ne()},children:"\u062e\u0631\u0648\u062c \u0627\u0632 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc"})]})}),Object(N.jsx)("div",{className:"account__content",children:Object(N.jsx)(ce,{option:c})})]})},ie=(c(198),c(254)),re=c(118),ae=c.n(re),oe=(c(199),c(117)),le=c.n(oe);var je=function(e){var t=e.id,c=e.name,s=e.description,i=e.unitCost,r=e.totalCost,o=e.countCh,l=Object(n.useRef)(),u=Object(n.useState)(o),d=Object(a.a)(u,2),b=d[0],O=d[1],m=Object(j.c)(),p=Object(j.d)((function(e){return e.message})),x=Object(a.a)(p,2),f=(x[0],x[1],function(e){return(new Intl.NumberFormat).format(e)});return Object(N.jsxs)("div",{className:"checkoutItem",children:[Object(N.jsxs)("div",{className:"checkoutItem__info",children:[Object(N.jsx)("h4",{children:c}),Object(N.jsx)("p",{children:s})]}),Object(N.jsxs)("div",{className:"checkoutItem__buyInfo",children:[Object(N.jsxs)("div",{className:"checkoutItem__unitCost",children:["\u0642\u06cc\u0645\u062a \u0648\u0627\u062d\u062f : ",f(i)," "]}),Object(N.jsxs)("div",{className:"checkoutItem__totalCost",children:["\u0642\u06cc\u0645\u062a \u06a9\u0644 : ",f(r)]}),Object(N.jsx)("input",{type:"number",min:"0",className:"form-control",ref:l,value:b,onChange:function(e){var c=l.current.value*i;m(T(t,parseInt(l.current.value))),m(F(t,c)),O(e.target.value)}}),Object(N.jsx)(g.a,{color:"error",onClick:function(){m(function(e){return{type:h,payload:{id:e}}}(t)),m(m(A("alert-danger","\u0627\u0632 \u0633\u0628\u062f \u06a9\u0627\u0644\u0627 \u062d\u0630\u0641 \u0634\u062f")))},children:Object(N.jsx)(le.a,{})})]})]})};var ue=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),r=Object(a.a)(i,2),o=r[0],l=r[1],u=Object(j.d)((function(e){return e.checkout}));return Object(j.c)(),Object(n.useEffect)((function(){var e,t=0;u.map((function(e){return t+=e.unitPrice*e.count})),isNaN(t)?s(0):s((e=t,(new Intl.NumberFormat).format(e)))}),[u]),Object(n.useEffect)((function(){u.map((function(e){return console.log(e)}))}),[u]),Object(N.jsxs)("div",{className:"checkout",children:[Object(N.jsxs)("div",{className:"checkout__header",children:[Object(N.jsx)("h3",{children:"\u0633\u0628\u062f \u062e\u0631\u06cc\u062f"}),Object(N.jsxs)("div",{className:"checkout__wraper",children:[Object(N.jsx)(ie.a,{endIcon:Object(N.jsx)(ae.a,{}),onClick:function(){return l(!0)},loading:o,loadingPosition:"end",variant:"contained",children:"\u0646\u0647\u0627\u06cc\u06cc \u06a9\u0631\u062f\u0646 \u062e\u0631\u06cc\u062f"}),Object(N.jsxs)("p",{className:"text-success",children:["\u0645\u062c\u0645\u0648\u0639 \u062e\u0631\u06cc\u062f : ",c]})]})]}),Object(N.jsx)("div",{className:"container",children:Object(N.jsx)("div",{className:"checkout__products",children:null===u||void 0===u?void 0:u.map((function(e,t){return Object(N.jsx)(je,{id:e.id,name:e.name,description:e.description,unitCost:e.unitPrice,totalCost:e.totalCost,countCh:e.count},t)}))})})]})};var de=function(){var e=Object(j.d)((function(e){return e.message})),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(f.a,{children:[Object(N.jsx)(y,{}),Object(N.jsx)(Y,{info:c,message:n}),Object(N.jsxs)(C.c,{children:[Object(N.jsx)(C.a,{path:"/account/register",children:Object(N.jsx)(ee,{})}),Object(N.jsx)(C.a,{path:"/account/login",children:Object(N.jsx)(te,{})}),Object(N.jsx)(C.a,{path:"/checkout",children:Object(N.jsx)(ue,{})}),Object(N.jsx)(C.a,{path:"/account",children:Object(N.jsx)(se,{})}),Object(N.jsxs)(C.a,{path:"/",children:[Object(N.jsx)(Z,{}),Object(N.jsx)($,{})]})]})]})})},be=c(60),Oe=c(119),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"test",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload.value;default:return e}},me=c(46),pe=c(256),xe={items:[{_id:Object(pe.a)(),name:"product 1",description:"best product 1",image:"https://picsum.photos/301/300",price:25e3},{_id:Object(pe.a)(),name:"product 2",description:"best product 2",image:"https://picsum.photos/301/300",price:5e4},{_id:Object(pe.a)(),name:"product 1",description:"best product 1",image:"https://picsum.photos/303/300",price:25e3},{_id:Object(pe.a)(),name:"product 2",description:"best product 2",image:"https://picsum.photos/301/301",price:5e4},{_id:Object(pe.a)(),name:"product 1",description:"best product 1",image:"https://picsum.photos/306/300",price:253e3},{_id:Object(pe.a)(),name:"dad 2",description:"best product 2",image:"https://picsum.photos/301/300",price:52e4}]},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case d:return Object(me.a)(Object(me.a)({},e),{},{items:n});default:return e}},ve=[],_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case b:return e.push({id:n.id,name:n.name,description:n.description,unitPrice:n.unitPrice,totalCost:n.unitPrice,count:1}),e;case O:return e.map((function(e){return e.id!==n.id?e:Object(me.a)(Object(me.a)({},e),{},{count:n.count})}));case m:return e.map((function(e){return e.id!==n.id?e:Object(me.a)(Object(me.a)({},e),{},{totalCost:n.totalCost})}));case h:return e.filter((function(e){return e.id!==n.id}));default:return e}},ge=[null,null],Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case p:return[n.info,n.message];case x:return"";default:return e}},ye=Object(be.b)({search:he,product:fe,checkout:_e,message:Ne}),Ce=Object(be.d)(ye,Object(be.c)(Object(be.a)(Oe.a),window.devToolsExtension?window.devToolsExtension():function(e){return e})),ke=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,264)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(j.a,{store:Ce,children:Object(N.jsx)(de,{})})}),document.getElementById("root")),ke()}},[[200,1,2]]]);
//# sourceMappingURL=main.85323b94.chunk.js.map