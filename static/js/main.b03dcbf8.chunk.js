(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(12),a=n(3),i="ADD-MESSAGE",c="DELETE_MESSAGE",s={dialogsData:[{id:1,name:"Sasha",avatar:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},{id:2,name:"Masha",avatar:"https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"},{id:3,name:"Yulia",avatar:"https://i.pinimg.com/736x/f9/44/c4/f944c40e5d4027a3a0fe7dfa729cfc51.jpg"},{id:4,name:"Igor",avatar:"https://sun1-84.userapi.com/c854528/v854528114/25953e/DZIzha5iftQ.jpg"},{id:5,name:"Sergey",avatar:"https://authorsofmainstreet.files.wordpress.com/2016/01/file0001179129151.jpg"},{id:6,name:"Alexey",avatar:"https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-76.jpg"},{id:7,name:"Oleg",avatar:"https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-21.jpg"}],messagesData:[{id:1,message:"Hi",avatar:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},{id:2,message:"Hello! How are you?",avatar:"https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"},{id:3,message:"I make sites!!! Web-development is cool.",avatar:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},{id:4,message:"Glad to hear. :)",avatar:"https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"},{id:5,message:"What are you doing tonight?",avatar:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"}]},o=function(e){return{type:i,message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n={id:6,message:t.message,avatar:"https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"};return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[n])});case c:return Object(a.a)(Object(a.a)({},e),{},{messagesData:e.messagesData.filter((function(e){return e.id!=t.lastMessageId}))});default:return e}}},133:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return S})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return k})),n.d(t,"g",(function(){return C}));var r=n(10),a=n.n(r),i=n(19),c=n(12),s=n(3),o=n(17),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),r):e}))},l=(n(0),"FOLLOW"),d="UNFOLLOW",p="SET_USERS",f="SET_CURRENT_PAGE",j="SET_TOTAL_USERS_COUNT",b="TOGGLE_IS_FETCHING",h="TOGGLE_IS_FOLLOWING_PROGRESS",m={usersData:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},O=function(e){return{type:l,userID:e}},g=function(e){return{type:d,userID:e}},v=function(e){return{type:f,currentPage:e}},x=function(e){return{type:j,totalUsersCount:e}},w=function(e){return{type:b,isFetching:e}},S=function(e,t){return{type:h,isFetching:e,userId:t}},y=function(e,t){return function(){var n=Object(i.a)(a.a.mark((function n(r){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),r(v(e)),n.next=4,o.d.getUsers(e,t);case 4:i=n.sent,r(w(!1)),r((a=i.items,{type:p,usersData:a})),r(x(i.totalCount));case 8:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(i.a)(a.a.mark((function e(t,n,r,i){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(S(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(i(n)),t(S(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),k=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,o.d.followUser.bind(o.d),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,o.d.unfollowUser.bind(o.d),g);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{usersData:u(e.usersData,t.userID,"id",{followed:!0})});case d:return Object(s.a)(Object(s.a)({},e),{},{usersData:u(e.usersData,t.userID,"id",{followed:!1})});case p:return Object(s.a)(Object(s.a)({},e),{},{usersData:Object(c.a)(t.usersData)});case f:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case j:return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalUsersCount});case b:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case h:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},134:function(e,t,n){e.exports={navbar:"Navbar_navbar__QKhqv",item:"Navbar_item__3XZ_2",activeLink:"Navbar_activeLink__2-m3i"}},136:function(e,t,n){e.exports={friends:"Friends_friends__1c6P8"}},137:function(e,t,n){e.exports={friendItem:"FriendItem_friendItem__tA1dt"}},151:function(e,t,n){},152:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o}));n(0);var r=n(138),a=r.create({withCredentials:!0,headers:{"API-KEY":"58104371-4566-41cd-8503-b9344f9372ef"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},showUsersProfile:function(e){return console.warn("Obsolete method. Use profileAPI object."),c.showUsersProfile(e)}},c={showUsersProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateMyStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},updateMyPhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},updateMyProfile:function(e){return a.put("profile",{aboutMe:e.aboutMe,lookingForAJob:e.lookingForAJob,lookingForAJobDescription:e.lookingForAJobDescription,fullName:e.fullName,contacts:{github:e.github,vk:e.vk,facebook:e.facebook,instagram:e.instagram,twitter:e.twitter,website:e.website,youtube:e.youtube,mainLink:e.mainLink}}).then((function(e){return e.data}))}},s={showMyProfile:function(){return a.get("auth/me").then((function(e){return e.data}))},loginHere:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logOut:function(){return a.delete("auth/login").then((function(e){return e.data}))}},o={getCaptcha:function(){return a.get("security/get-captcha-url").then((function(e){return e.data}))}}},22:function(e,t,n){e.exports={item:"Nav_item__3crZ4",activeLink:"Nav_activeLink__2MPRi"}},27:function(e,t,n){e.exports={loginWrapper:"Login_loginWrapper__1BhhF",formSummaryError:"Login_formSummaryError__3AeYW"}},293:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,309)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},a=n(0),i=n.n(a),c=n(68),s=n.n(c),o=(n(151),n(7)),u=n(8),l=n(13),d=n(14),p=(n(152),n(134)),f=n.n(p),j=n(22),b=n.n(j),h=n(20),m=n(1),O=function(){return Object(m.jsx)("nav",{className:b.a.nav,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{className:b.a.item,children:Object(m.jsx)(h.b,{to:"/profile",className:function(e){return e.isActive?b.a.activeLink:""},children:"Profile"})}),Object(m.jsx)("li",{className:b.a.item,children:Object(m.jsx)(h.b,{to:"/dialogs",className:function(e){return e.isActive?b.a.activeLink:""},children:"Messages"})}),Object(m.jsx)("li",{className:b.a.item,children:Object(m.jsx)(h.b,{to:"/news",className:function(e){return e.isActive?b.a.activeLink:""},children:"News"})}),Object(m.jsx)("li",{className:b.a.item,children:Object(m.jsx)(h.b,{to:"/music",className:function(e){return e.isActive?b.a.activeLink:""},children:"Music"})}),Object(m.jsx)("li",{className:b.a.item,children:Object(m.jsx)(h.b,{to:"/users",className:function(e){return e.isActive?b.a.activeLink:""},children:"Users"})}),Object(m.jsx)("li",{className:b.a.item,children:Object(m.jsx)(h.b,{to:"/settings",className:function(e){return e.isActive?b.a.activeLink:""},children:"Settings"})})]})})},g=n(24),v=n(136),x=n.n(v),w=n(137),S=n.n(w),y=function(e){return Object(m.jsx)("li",{className:S.a.friendItem,children:Object(m.jsxs)(h.b,{to:"/dialogs/"+e.id,children:[Object(m.jsx)("img",{src:e.avatar}),Object(m.jsx)("div",{children:e.name})]})})},_=function(e){var t=e.friends.map((function(e){return Object(m.jsx)(y,{id:e.id,name:e.name,avatar:e.avatar},e.id)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Friends"}),Object(m.jsx)("ul",{className:x.a.friends,children:t})]})},k=Object(g.b)((function(e){return{friends:e.sidebar.friends}}))(_),C=function(){return Object(m.jsxs)("div",{className:f.a.navbar,children:[Object(m.jsx)(O,{}),Object(m.jsx)(k,{})]})},E=(n(159),function(){return Object(m.jsx)("div",{children:"News"})}),N=(n(160),function(){return Object(m.jsx)("div",{children:"Music"})}),U=(n(161),function(){return Object(m.jsx)("div",{children:"Settings"})}),D=n(5),L=n(3),M=n(94),P=n.n(M),I=function(e){return Object(m.jsxs)("header",{className:P.a.header,children:[Object(m.jsx)("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),Object(m.jsx)("div",{className:P.a.loginBlock,children:Object(m.jsx)("div",{children:e.isAuth?Object(m.jsxs)("div",{children:[e.login," - ",Object(m.jsx)("button",{onClick:e.logOutOnSite,children:"Logout"})]}):Object(m.jsx)(h.b,{to:"/login",children:"Login"})})})]})},A=n(10),T=n.n(A),F=n(19),R=n(17),z="react-samurai/auth/SET_USER_DATA",B="react-samurai/auth/GET_CAPTCHA_URL_SUCCESS",H={userId:null,email:null,login:null,isAuth:!1,password:null,rememberMe:!1,captchaUrl:null},G=function(e,t,n,r){return{type:z,payload:{userId:e,email:t,login:n,isAuth:r}}},W=function(e){return{type:B,payload:{captchaUrl:e}}},J=function(){return function(){var e=Object(F.a)(T.a.mark((function e(t){var n,r,a,i,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.showMyProfile();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,i=r.email,c=r.login,t(G(a,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(){return function(){var e=Object(F.a)(T.a.mark((function e(t){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.c.getCaptcha();case 2:n=e.sent,r=n.url,t(W(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:case B:return Object(L.a)(Object(L.a)({},e),t.payload);default:return e}},Z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)(I,Object(L.a)({},this.props))}}]),n}(i.a.Component),V=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logOutOnSite:function(){return function(){var e=Object(F.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.logOut();case 2:0===e.sent.resultCode&&(t(G(null,null,null,!1)),t(W(null)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Z),X=n(27),K=n.n(X),Q=n(294),$=n(295),ee=n(51),te=n(58),ne=n(97),re=n(67),ae=function(e){var t=Object(ne.a)({initialValues:{login:"",password:"",rememberMe:!1,captcha:null},validationSchema:re.a({login:re.b().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d").max(50,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),password:re.b().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c").max(30,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}),onSubmit:function(t,n){e.onSubmitFormik(t,n)}});return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Login Formik"}),Object(m.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(m.jsxs)("div",{className:K.a.formControl+" "+(t.touched.login&&t.errors.login?K.a.error:""),children:[Object(m.jsx)("input",{type:"text",placeholder:"Login",name:"login",id:"login",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.login}),t.touched.login&&t.errors.login?Object(m.jsx)("div",{children:t.errors.login}):null]}),Object(m.jsxs)("div",{className:K.a.formControl+" "+(t.touched.password&&t.errors.password?K.a.error:""),children:[Object(m.jsx)("input",{type:"password",placeholder:"Password",name:"password",id:"password",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.password}),t.touched.password&&t.errors.password?Object(m.jsx)("div",{children:t.errors.password}):null]}),Object(m.jsx)("div",{className:K.a.formControl+" "+(t.touched.password&&t.errors.password?K.a.error:""),children:Object(m.jsx)("input",{type:"checkbox",name:"rememberMe",id:"rememberMe",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.rememberMe})}),e.captchaUrl&&Object(m.jsx)("img",{src:e.captchaUrl}),e.captchaUrl&&Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"text",name:"captcha",id:"captcha",required:!0,onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.captcha})}),t.status&&Object(m.jsx)("div",{className:K.a.formSummaryError,children:t.status}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"Login"})})]})]})},ie=Object($.a)({form:"login",fields:["login","password","rememberMe"]})((function(e){var t=e.handleSubmit,n=e.error;return Object(m.jsxs)("form",{onSubmit:t,children:[Object(ee.c)("Login","login",[te.b],ee.a),Object(m.jsx)("div",{children:Object(m.jsx)(Q.a,{placeholder:"Password",name:"password",component:ee.a,validate:[te.b]})}),Object(m.jsxs)("div",{children:[Object(m.jsx)(Q.a,{type:"checkbox",name:"rememberMe",component:ee.a})," remember me"]}),n&&Object(m.jsx)("div",{className:K.a.formSummaryError,children:n}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Login"})})]})})),ce=function(e){return e.isAuth?Object(m.jsx)(D.a,{to:"/profile"}):Object(m.jsxs)("div",{className:K.a.loginWrapper,children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)(ie,{onSubmit:function(t){e.loginOnSite(t.login,t.password,t.rememberMe)}}),Object(m.jsx)(ae,{onSubmitFormik:function(t,n){n.setStatus(void 0),e.loginOnSite(t.login,t.password,t.rememberMe,t.captcha,n)},captchaUrl:e.captchaUrl})]})},se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)(ce,Object(L.a)({},this.props))}}]),n}(i.a.Component),oe=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,password:e.auth.password,rememberMe:e.auth.rememberMe,captchaUrl:e.auth.captchaUrl}}),{loginOnSite:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4?arguments[4]:void 0;return function(){var i=Object(F.a)(T.a.mark((function i(c){var s;return T.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,R.a.loginHere(e,t,n,r);case 2:0===(s=i.sent).resultCode?c(J()):(10===s.resultCode&&c(q()),a.setStatus(s.messages));case 4:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}()},getCaptchaUrl:q})(se),ue="INITIALIZED_SUCCESS",le={initialized:!1},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return t.type===ue?Object(L.a)(Object(L.a)({},e),{},{initialized:!0}):e},pe=n(92),fe=n(16),je=n(98),be=n(132),he={friends:[{id:1,name:"Sasha",avatar:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},{id:2,name:"Masha",avatar:"https://s6.hostingkartinok.com/uploads/images/2014/03/5dbd298fc0e0a062b2e103ff2d947004.jpeg"},{id:3,name:"Yulia",avatar:"https://i.pinimg.com/736x/f9/44/c4/f944c40e5d4027a3a0fe7dfa729cfc51.jpg"}]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he;return e},Oe=n(133),ge=n(146),ve=n(296),xe=Object(fe.c)({profilePage:je.b,dialogsPage:be.b,usersPage:Oe.a,sidebar:me,auth:Y,form:ve.a,app:de}),we=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.d,Se=Object(fe.e)(xe,we(Object(fe.a)(ge.a)));window.store=Se;var ye=Se,_e=i.a.lazy((function(){return n.e(4).then(n.bind(null,311))})),ke=i.a.lazy((function(){return n.e(3).then(n.bind(null,310))})),Ce=i.a.lazy((function(){return n.e(5).then(n.bind(null,312))})),Ee=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(m.jsxs)("div",{className:"app-wrapper",children:[Object(m.jsx)(V,{}),Object(m.jsx)(C,{}),Object(m.jsx)("div",{className:"app-wrapper-content",children:Object(m.jsx)(a.Suspense,{fallback:Object(m.jsx)(pe.a,{}),children:Object(m.jsxs)(D.d,{children:[Object(m.jsx)(D.b,{path:"/profile/*",element:Object(m.jsx)(ke,{})}),Object(m.jsx)(D.b,{path:"/dialogs/*",element:Object(m.jsx)(_e,{})}),Object(m.jsx)(D.b,{path:"/news/*",element:Object(m.jsx)(E,{})}),Object(m.jsx)(D.b,{path:"/music/*",element:Object(m.jsx)(N,{})}),Object(m.jsx)(D.b,{path:"/users/*",element:Object(m.jsx)(Ce,{})}),Object(m.jsx)(D.b,{path:"/settings/*",element:Object(m.jsx)(U,{})}),Object(m.jsx)(D.b,{path:"/login/*",element:Object(m.jsx)(oe,{})})]})})})]}):Object(m.jsx)(pe.a,{})}}]),n}(a.Component),Ne=Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(J());Promise.all([t]).then((function(){e({type:ue})}))}}})(Ee),Ue=function(e){return Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(h.a,{children:Object(m.jsx)(g.a,{store:ye,children:Object(m.jsx)(Ne,{})})})})};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(Ue,{})}),document.getElementById("root")),r()},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return j}));var r=n(3),a=n(93),i=n(69),c=n.n(i),s=(n(58),n(294)),o=(n(0),n(1)),u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,i=n&&r;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(i?c.a.error:""),children:[Object(o.jsx)("div",{children:a}),i&&Object(o.jsx)("span",{children:r})]})},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e,t,n,a,i){return Object(o.jsx)("div",{children:Object(o.jsx)(s.a,Object(r.a)({placeholder:e,name:t,component:a,validate:n},i))})}},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},69:function(e,t,n){e.exports={formControl:"FormsControls_formControl__37HNy",error:"FormsControls_error__1We00"}},92:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.3b24a6b9.svg",a=(n(0),n(1));t.a=function(e){return Object(a.jsx)("div",{role:"main",children:Object(a.jsx)("img",{src:r})})}},94:function(e,t,n){e.exports={header:"Header_header__33Rad",loginBlock:"Header_loginBlock__Ur8Wu"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"f",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"h",(function(){return w})),n.d(t,"e",(function(){return S})),n.d(t,"g",(function(){return y}));var r=n(10),a=n.n(r),i=n(19),c=n(12),s=n(3),o=n(17),u="ADD-POST",l="SET_USER_PROFILE",d="SET_USER_STATUS",p="DELETE_POST",f="SAVE_PHOTO_SUCCESS",j="UPDATE_PROFILE_SUCCESS",b="SET_EDIT_MODE",h={postsData:[{id:1,text:"Hi! How are you?",likes:7,avatar:"https://million-wallpapers.ru/wallpapers/5/51/small/455458761658281.jpg"},{id:2,text:"This is my first post.",likes:18,avatar:"https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"},{id:3,text:"I wanna be a programmer.",likes:1e3,avatar:"https://img3.goodfon.ru/original/320x240/f/89/elenasai-risounok-lico.jpg"}],profile:null,userStatus:"",infoEditMode:!1},m=function(e){return{type:u,post:e}},O=function(e){return{type:d,userStatus:e}},g=function(e){return{type:b,isEditMode:e}},v=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.showUsersProfile(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(O(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateMyStatus(e);case 2:0===t.sent.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateMyPhoto(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:f,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e,t){return function(){var n=Object(i.a)(a.a.mark((function n(r,i){var c,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=i().auth.userId,n.next=3,o.b.updateMyProfile(e);case 3:0===(s=n.sent).resultCode?(r(v(c)),r(g(!1))):t.setStatus(s.messages);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,text:t.post,likes:0,avatar:"https://rust.booknet.com/uploads/user_avatars_new/160/1557413030_859480.png"};return Object(s.a)(Object(s.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[n])});case l:case j:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case d:return Object(s.a)(Object(s.a)({},e),{},{userStatus:t.userStatus});case p:return Object(s.a)(Object(s.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!=t.postId}))});case f:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});case b:return Object(s.a)(Object(s.a)({},e),{},{infoEditMode:t.isEditMode});default:return e}}}},[[293,1,2]]]);
//# sourceMappingURL=main.b03dcbf8.chunk.js.map