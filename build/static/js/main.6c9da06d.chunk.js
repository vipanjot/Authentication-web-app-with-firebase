(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{15:function(e,t,n){e.exports={auth:"AuthForm_auth__1K9g_",control:"AuthForm_control__1555b",actions:"AuthForm_actions__3FmGh",toggle:"AuthForm_toggle__3f0fI"}},16:function(e,t,n){e.exports={form:"QuoteForm_form__bn8wo",loading:"QuoteForm_loading__CUF3u",control:"QuoteForm_control__2lPMj",actions:"QuoteForm_actions__3l5xt"}},21:function(e,t,n){e.exports={form:"ProfileForm_form__2XW45",control:"ProfileForm_control__1ctbv",action:"ProfileForm_action__2wbql"}},24:function(e,t,n){e.exports={header:"MainNavigation_header__21bwU",logo:"MainNavigation_logo__2YZGx"}},27:function(e,t,n){e.exports={list:"QuoteList_list__16U1a",sorting:"QuoteList_sorting__KaBuQ"}},38:function(e,t,n){e.exports={main:"Layout_main__2BDkU"}},39:function(e,t,n){e.exports={profile:"UserProfile_profile__2U6H6"}},40:function(e,t,n){e.exports={starting:"StartingPageContent_starting__1tElO"}},41:function(e,t,n){e.exports={card:"Card_card__385jW"}},42:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__MbGVF"}},43:function(e,t,n){e.exports={item:"QuoteItem_item__3NphH"}},44:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__yBiqc"}},54:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(20),c=n.n(r),o=n(3),a=n(5),s=(n(54),n(4)),i=n(1),u=n(24),l=n.n(u),d=n(13),j=Object(d.b)({name:"auth",initialState:{user:null,token:null,userId:null,error:null,loading:!1,loggedIn:!1},reducers:{error:function(e,t){e.loading=t.payload.loading,e.error=t.payload.error},logIn:function(e,t){e.token=t.payload.token,e.userId=t.payload.userId,e.loading=t.payload.loading,e.authRedirectPath=t.payload.path,e.loggedIn=t.payload.loggedIn,e.user=t.payload.user},logout:function(e,t){e.token=t.payload.token,e.userId=t.payload.userId,e.loggedIn=t.payload.loggedIn,e.user=t.payload.user}}}),b=j.actions,h=j,x=n(37),p=n.n(x),O=function(e){return function(t){setTimeout((function(){}),1e3*e)}},f=n(0),g=function(){var e,t=Object(o.b)(),n=Object(o.c)((function(e){return e.auth.loggedIn})),r=Object(o.c)((function(e){return e.auth.user}));null!==r&&n&&(e=r.split("@")[0].toUpperCase());return Object(f.jsxs)("header",{className:l.a.header,children:[Object(f.jsx)(a.b,{to:"/",children:Object(f.jsx)("div",{className:l.a.logo,children:n?e:"React Auth"})}),Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[!n&&Object(f.jsx)("li",{children:Object(f.jsx)(a.b,{to:"/auth",children:"Login"})}),n&&Object(f.jsx)("li",{children:Object(f.jsx)(a.b,{to:"/profile",children:"Profile"})}),n&&Object(f.jsx)("li",{children:Object(f.jsx)(a.b,{to:"/new-quote",children:"Add Quote"})}),n&&Object(f.jsx)("li",{children:Object(f.jsx)(a.b,{to:"/quotes",children:"Quotes"})}),n&&Object(f.jsx)("li",{children:Object(f.jsx)("button",{onClick:function(){t((localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),function(e){e(b.logout({token:null,userId:null,loggedIn:!1}))}))},children:"Logout"})})]})})]})},m=n(38),_=n.n(m),v=function(e){return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)(g,{}),Object(f.jsx)("main",{className:_.a.main,children:e.children})]})},w=n(21),y=n.n(w),I=function(){return Object(f.jsxs)("form",{className:y.a.form,children:[Object(f.jsxs)("div",{className:y.a.control,children:[Object(f.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(f.jsx)("input",{type:"password",id:"new-password"})]}),Object(f.jsx)("div",{className:y.a.action,children:Object(f.jsx)("button",{children:"Change Password"})})]})},k=n(39),q=n.n(k),N=function(){return Object(f.jsxs)("section",{className:q.a.profile,children:[Object(f.jsx)("h1",{children:"Your User Profile"}),Object(f.jsx)(I,{})]})},S=n(18),F=n(15),A=n.n(F),P=function(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=Object(o.b)(),r=Object(o.c)((function(e){return e.auth.loading})),c=Object(o.c)((function(e){return e.auth.error})),a=Object(i.useState)(!0),s=Object(S.a)(a,2),u=s[0],l=s[1],d=Object(i.useState)(!1),j=Object(S.a)(d,2),h=(j[0],j[1]);return Object(f.jsxs)("section",{className:A.a.auth,children:[Object(f.jsx)("h1",{children:u?"Login":"Sign Up"}),Object(f.jsxs)("form",{onSubmit:function(r){r.preventDefault();var c=e.current.value,o=t.current.value;h(!0),n(function(e,t,n){return function(r){var c={email:e,password:t,returnSecureToken:!0};r(b.logIn({loading:!0}));var o="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAUzjT7FMXo0mtJ1ckAsE-auLn-0NJfe30";n&&(o="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAUzjT7FMXo0mtJ1ckAsE-auLn-0NJfe30"),p.a.post(o,c).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),localStorage.setItem("email",e.data.email),r(b.logIn({token:e.data.idToken,userId:e.data.localId,loading:!1,user:e.data.email,path:"/",loggedIn:!0})),r(O(e.data.expiresIn))})).catch((function(e){r(b.error({error:e.message,loading:!1}))}))}}(c,o,u))},children:[Object(f.jsxs)("div",{className:A.a.control,children:[Object(f.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(f.jsx)("input",{type:"email",id:"email",placeholder:"example@ex.com",required:!0,ref:e})]}),Object(f.jsxs)("div",{className:A.a.control,children:[Object(f.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(f.jsx)("input",{type:"password",id:"password",required:!0,ref:t}),c||null]}),Object(f.jsxs)("div",{className:A.a.actions,children:[!r&&Object(f.jsx)("button",{children:u?"Login":"Create Account"}),r&&Object(f.jsx)("p",{children:"Sending request..."}),Object(f.jsx)("button",{type:"button",className:A.a.toggle,onClick:function(){l((function(e){return!e}))},children:u?"Create new account":"Login with existing account"})]})]})]})},L=function(){return Object(f.jsx)(P,{})},C=n(40),E=n.n(C),D=function(){return Object(f.jsx)("section",{className:E.a.starting,children:Object(f.jsx)("h1",{children:"Welcome on Board!"})})},Q=function(){return Object(f.jsx)(D,{})},U=n(41),T=n.n(U),R=function(e){return Object(f.jsx)("div",{className:T.a.card,children:e.children})},J=n(42),B=n.n(J),M=function(){return Object(f.jsx)("div",{className:B.a.spinner})},z=n(16),Y=n.n(z),G=function(e){var t=Object(i.useRef)(),n=Object(i.useRef)(),r=Object(o.c)((function(e){return e.auth.token})),c=Object(o.c)((function(e){return e.auth.userId}));return Object(f.jsx)(R,{children:Object(f.jsxs)("form",{className:Y.a.form,onSubmit:function(o){o.preventDefault();var a=t.current.value,s=n.current.value;e.onAddQuote({author:a,text:s,userId:c,date:(new Date).toLocaleString()},r)},children:[e.isLoading&&Object(f.jsx)("div",{className:Y.a.loading,children:Object(f.jsx)(M,{})}),Object(f.jsxs)("div",{className:Y.a.control,children:[Object(f.jsx)("label",{htmlFor:"author",children:"Author"}),Object(f.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(f.jsxs)("div",{className:Y.a.control,children:[Object(f.jsx)("label",{htmlFor:"text",children:"Text"}),Object(f.jsx)("textarea",{id:"text",rows:"5",ref:n})]}),Object(f.jsx)("div",{className:Y.a.actions,children:Object(f.jsx)("button",{className:"btn",children:"Add Quote"})})]})})},H=n(19),W=n(11),X=n.n(W),K=n(14);function V(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.res,error:null,status:"complete"}:"FAIL"===t.type?{data:null,error:t.error.message,status:"complete"}:e}var Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.useReducer)(V,{status:t?"pending":null,data:null,error:null}),r=Object(S.a)(n,2),c=r[0],o=r[1],a=Object(i.useCallback)(function(){var t=Object(K.a)(X.a.mark((function t(n,r,c,a){var s;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o({type:"SEND"}),t.prev=1,t.next=4,e(n,r,c,a);case 4:s=t.sent,o({type:"SUCCESS",res:s}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),o({type:"FAIL",error:t.t0.message||"something went wrong"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n,r,c){return t.apply(this,arguments)}}(),[e]);return Object(H.a)({sendRequest:a},c)},$="https://quotes-bf578-default-rtdb.firebaseio.com/";function ee(e,t){return te.apply(this,arguments)}function te(){return(te=Object(K.a)(X.a.mark((function e(t,n){var r,c,o;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/quotes.json?auth="+n,e.next=3,fetch("".concat($).concat(r),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return c=e.sent,e.next=6,c.json();case 6:if(o=e.sent,c.ok){e.next=9;break}throw new Error(o.message)||"could not create a quote";case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=Object(K.a)(X.a.mark((function e(t,n){var r,c,o,a,s;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="?auth="+n+'&orderBy="userId"&equalTo="'+t+'"',e.next=3,fetch("".concat($,"/quotes.json").concat(r," "));case 3:return c=e.sent,e.next=6,c.json();case 6:if(o=e.sent,c.ok){e.next=9;break}throw new Error(o.message)||"could not create a quote";case 9:for(s in a=[],o)a.push(Object(H.a)({id:s},o[s]));return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e,t,n){return oe.apply(this,arguments)}function oe(){return(oe=Object(K.a)(X.a.mark((function e(t,n,r){var c,o,a,s;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="?auth="+r,e.next=3,fetch("".concat($,"/quotes/").concat(t,".json").concat(c," "));case 3:return o=e.sent,e.next=6,o.json();case 6:if(a=e.sent,o.ok){e.next=9;break}throw new Error(o.message)||"could not create a quote";case 9:return s=Object(H.a)({id:t},a),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ae=function(){var e=Object(o.c)((function(e){return e.auth.token})),t=Z(ee),n=t.sendRequest,r=t.status,c=Object(s.g)();Object(i.useEffect)((function(){"complete"===r&&c.push("/quotes")}),[r,c]);return Object(f.jsx)(G,{onAddQuote:function(t){n(t,e)}})},se=n(43),ie=n.n(se),ue=function(e){return Object(f.jsxs)("li",{className:ie.a.item,children:[Object(f.jsxs)("figure",{children:[Object(f.jsx)("blockquote",{children:Object(f.jsx)("p",{children:e.text})}),Object(f.jsx)("figcaption",{children:e.author})]}),Object(f.jsx)(a.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},le=n(27),de=n.n(le),je=function(e){var t,n,r=Object(s.g)(),c=Object(s.h)(),o="asc"===new URLSearchParams(c.search).get("sort"),a=(t=e.quotes,n=o,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)("div",{className:de.a.sorting,children:Object(f.jsxs)("button",{onClick:function(){r.push({pathname:c.pathname,search:"?sort=".concat(o?"desc":"asc")})},children:["Sort ",o?"Descending":"Ascending"]})}),Object(f.jsx)("ul",{className:de.a.list,children:a.map((function(e){return Object(f.jsx)(ue,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},be=function(){var e=Object(s.g)(),t=Object(o.c)((function(e){return e.auth.userId})),n=Object(o.c)((function(e){return e.auth.token})),r=Z(ne,!0),c=r.sendRequest,a=r.status,u=r.data;return Object(i.useEffect)((function(){c(t,n)}),[c,t,n]),"pending"===a?Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)("h1",{style:{color:"#38015c"},children:"Processing..."})}):u&&0!==u.length?Object(f.jsx)(je,{quotes:u}):(alert("List is empty.Please add some new Quotes."),e.push("/new-quote"),Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)("h1",{style:{color:"#38015c"},children:"Empty"})}))},he=n(44),xe=n.n(he),pe=function(e){return Object(f.jsxs)("figure",{className:xe.a.quote,children:[Object(f.jsx)("p",{children:e.text}),Object(f.jsx)("figcaption",{children:e.author})]})},Oe=function(){var e=Object(s.i)().quoteId,t=Object(o.c)((function(e){return e.auth.userId})),n=Object(o.c)((function(e){return e.auth.token})),r=Z(ce,!0),c=r.sendRequest,a=r.data,u=r.status;return Object(i.useEffect)((function(){c(e,t,n)}),[c,e,t,n]),"pending"===u?Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)("h1",{style:{color:"#008080"},children:"Processing..."})}):Object(f.jsx)(i.Fragment,{children:Object(f.jsx)(pe,{text:a.text,author:a.date})})};var fe=function(){Object(o.b)()((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date);else{var r=localStorage.getItem("userId"),c=localStorage.getItem("email");e(b.logIn({token:t,userId:r,loggedIn:!0,user:c})),e(O((n.getTime()-(new Date).getTime())/1e3))}}}));var e=Object(o.c)((function(e){return e.auth.loggedIn}));return Object(f.jsx)(v,{children:Object(f.jsxs)(s.d,{children:[Object(f.jsx)(s.b,{path:"/",exact:!0,children:Object(f.jsx)(Q,{})}),Object(f.jsx)(s.b,{path:"/new-quote",exact:!0,children:Object(f.jsx)(ae,{})}),Object(f.jsxs)(s.b,{path:"/quotes",exact:!0,children:[e&&Object(f.jsx)(be,{}),!e&&Object(f.jsx)(s.a,{to:"/auth"})]}),Object(f.jsx)(s.b,{path:"/quotes/:quoteId",children:Object(f.jsx)(Oe,{})}),!e&&Object(f.jsx)(s.b,{path:"/auth",children:Object(f.jsx)(L,{})}),Object(f.jsxs)(s.b,{path:"/profile",children:[e&&Object(f.jsx)(N,{}),!e&&Object(f.jsx)(s.a,{to:"/auth"})]}),Object(f.jsx)(s.b,{path:"*",children:Object(f.jsx)(s.a,{to:"/"})})]})})},ge=Object(d.b)({name:"quote",initialState:{quotes:[]},reducers:{delete:function(e,t){e.quotes=t.payload.quotes,console.log(t.payload.quotes)}}}),me=(ge.actions,ge),_e=Object(d.a)({reducer:{auth:h.reducer,quotes:me.reducer}});c.a.render(Object(f.jsx)(o.a,{store:_e,children:Object(f.jsx)(a.a,{children:Object(f.jsx)(fe,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.6c9da06d.chunk.js.map