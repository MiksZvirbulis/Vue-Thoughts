(function(t){function e(e){for(var n,s,u=e[0],i=e[1],l=e[2],h=0,d=[];h<u.length;h++)s=u[h],o[s]&&d.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/<Vue-Thoughts>/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"02b6":function(t,e,r){},"1cb3":function(t,e,r){"use strict";var n=r("02b6"),o=r.n(n);o.a},"206d":function(t,e,r){"use strict";var n=r("9cbb"),o=r.n(n);o.a},"21da":function(t,e,r){"use strict";var n=r("6fa3"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("ul",{attrs:{id:"navigation"}},[t.auth.loggedIn?r("li",[r("router-link",{attrs:{to:"/"}},[t._v("Thoughts")])],1):t._e(),t.auth.loggedIn?r("li",[r("router-link",{attrs:{to:"/add"}},[t._v("Add Thought")])],1):t._e(),t.auth.loggedIn?r("li",[r("router-link",{attrs:{to:"/logout"}},[t._v("Logout")])],1):t._e(),t.auth.loggedIn?t._e():r("li",[r("router-link",{attrs:{to:"/signup"}},[t._v("Signup")])],1),t.auth.loggedIn?t._e():r("li",[r("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)]),r("router-view")],1)},a=[],s=r("cebc"),u=r("2f62"),i={name:"app",computed:Object(s["a"])({},Object(u["d"])(["auth"])),methods:Object(s["a"])({},Object(u["b"])(["loggedIn"])),created:function(){}},l=i,c=(r("5c0b"),r("2877")),h=Object(c["a"])(l,o,a,!1,null,null,null),d=h.exports,p=(r("20d6"),r("96cf"),r("3b8d")),g=r("bc3a"),m=r.n(g),f="http://mikscode.com/api/thoughts",v={thoughts:[]},b={listThoughts:function(t){return t.thoughts}},w=localStorage.getItem("token")?localStorage.getItem("token"):"",T={fetchThoughts:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,m.a.get("".concat(f,"/list/").concat(r),{headers:{Token:w}});case 3:o=t.sent,200===o.status?n("setThoughts",o.data):console.log(o.error);case 5:case"end":return t.stop()}},t)}));function e(e,r){return t.apply(this,arguments)}return e}(),addThought:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,m.a.post("".concat(f,"/add"),r,{headers:{Token:w}});case 3:o=t.sent,200===o.status?n("newThought",Object(s["a"])({},r,{id:o.data})):console.log(o.error);case 5:case"end":return t.stop()}},t)}));function e(e,r){return t.apply(this,arguments)}return e}(),removeThought:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,m.a.post("".concat(f,"/delete/").concat(r.thoughtId),{userId:r.userId},{headers:{Token:w}});case 3:o=t.sent,200===o.status?n("deleteThought",r.thoughtId):console.log(o.error);case 5:case"end":return t.stop()}},t)}));function e(e,r){return t.apply(this,arguments)}return e}(),editThought:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,m.a.put("".concat(f,"/update/").concat(r.id),r,{headers:{Token:w}});case 3:o=t.sent,200===o.status?n("updateThought",r):console.log(o.error);case 5:case"end":return t.stop()}},t)}));function e(e,r){return t.apply(this,arguments)}return e}()},_={setThoughts:function(t,e){return t.thoughts=e},newThought:function(t,e){return t.thoughts.unshift(e)},deleteThought:function(t,e){return t.thoughts=t.thoughts.filter(function(t){return t.id!==e})},updateThought:function(t,e){var r=t.thoughts.findIndex(function(t){return t.id===e.id});t.thoughts[r]=e}},x={state:v,getters:b,actions:T,mutations:_},I="http://mikscode.com/api/thoughts",O={errors:[],userId:null,loggedIn:!1},j={},y={signupUser:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,m.a.post("".concat(I,"/signup"),r);case 3:o=t.sent,200===o.status?n("newUser"):console.log(o.error);case 5:case"end":return t.stop()}},t)}));function e(e,r){return t.apply(this,arguments)}return e}(),loginUser:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,m.a.post("".concat(I,"/login"),r);case 3:if(o=t.sent,200!==o.status){t.next=9;break}return n("authUser",o.data),t.abrupt("return",!0);case 9:if(401!==o.status){t.next=14;break}return n("authUserFailed"),t.abrupt("return",!1);case 14:return n("authUserFailed"),t.abrupt("return",!1);case 16:case"end":return t.stop()}},t)}));function e(e,r){return t.apply(this,arguments)}return e}(),logoutUser:function(t){var e=t.commit;e("authUserFailed")},loggedIn:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e){var r,n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.commit,!localStorage.getItem("token")||!localStorage.getItem("userId")){t.next=15;break}return n={userId:localStorage.getItem("userId"),token:localStorage.getItem("token")},t.next=5,m.a.post("".concat(I,"/checkUser"),n);case 5:if(o=t.sent,200!==o.status){t.next=11;break}return r("loggedInSuccess",n.userId),t.abrupt("return",!0);case 11:return r("loggedInFail"),t.abrupt("return",!1);case 13:t.next=17;break;case 15:return r("loggedInFail"),t.abrupt("return",!1);case 17:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},k={newUser:function(t){return t.errors=[]},authUser:function(t,e){t.loggedIn=!0,t.userId=e.userId,localStorage.setItem("userId",e.userId),localStorage.setItem("token",e.token)},authUserFailed:function(t){t.loggedIn=!1,t.userId=null,localStorage.removeItem("userId"),localStorage.removeItem("token")},loggedInSuccess:function(t,e){t.loggedIn=!0,t.userId=e},loggedInFail:function(t){t.loggedIn=!1,t.userId=null}},S={state:O,getters:j,actions:y,mutations:k};n["a"].use(u["a"]);var U=new u["a"].Store({modules:{thoughts:x,auth:S}}),C=r("8c4f"),P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("404: Page not Found")])])}],R={name:"NotFound"},F=R,$=Object(c["a"])(F,P,E,!1,null,null,null),D=$.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"thoughts"}},t._l(t.listThoughts,function(t){return r("div",{key:t.id},[r("Thought",{attrs:{thought:t}})],1)}),0)},N=[],M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"thought"}},[t.editMode?r("form",{on:{submit:function(e){return e.preventDefault(),t.noForm(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.editedTitle,expression:"editedTitle"}],attrs:{type:"text"},domProps:{value:t.editedTitle},on:{input:function(e){e.target.composing||(t.editedTitle=e.target.value)}}}),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editedContent,expression:"editedContent"}],domProps:{value:t.editedContent},on:{input:function(e){e.target.composing||(t.editedContent=e.target.value)}}}),r("div",{staticClass:"actions"},[r("button",{staticClass:"small cancel",attrs:{type:"button"},on:{click:function(e){return t.editToText(!1)}}},[t._v("Discard")]),r("button",{staticClass:"small delete",attrs:{type:"button"},on:{click:t.deleteThought}},[t._v("Delete")]),r("button",{staticClass:"small save",attrs:{type:"button"},on:{click:t.saveThought}},[t._v("Save")])])]):r("div",[r("div",{staticClass:"title",on:{click:t.textToEdit}},[t._v(t._s(t.editedTitle))]),r("div",{staticClass:"content",on:{click:t.textToEdit}},[t._v(t._s(t.limitContent(t.editedContent,220)))])]),r("div",{staticClass:"date"},[t._v("Last Updated: "+t._s(t.thought.lastUpdated.slice(0,-4)))])])])},q=[],A={name:"Thought",props:["thought"],data:function(){return{editMode:!1,editedContent:this.thought.content,editedTitle:this.thought.title}},computed:Object(s["a"])({},Object(u["d"])(["auth"])),methods:Object(s["a"])({},Object(u["b"])(["removeThought","editThought"]),{limitContent:function(t,e){return t.length>=e?t.substring(0,e)+"...":t},deleteThought:function(){var t=confirm("Are you sure you want to delete this thought?");!0===t&&this.removeThought({thoughtId:this.thought.id,userId:this.auth.userId})},saveThought:function(){this.editedContent===this.thought.content&&this.editedTitle===this.thought.title||this.editThought(Object(s["a"])({},this.thought,{content:this.editedContent,title:this.editedTitle,lastUpdated:(new Date).toUTCString(),userId:this.auth.userId})),this.editToText(!0)},textToEdit:function(){this.editMode=!0},editToText:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.editMode=!1,this.editedContent=t?this.editedContent:this.thought.content,this.editedTitle=t?this.editedTitle:this.thought.title},noForm:function(){return!1}})},J=A,Y=(r("b856"),Object(c["a"])(J,M,q,!1,null,"721bd944",null)),H=Y.exports,V={name:"Home",components:{Thought:H},computed:Object(s["a"])({},Object(u["c"])(["listThoughts"]),Object(u["d"])(["auth"])),created:function(){this.fetchThoughts(this.auth.userId)},data:function(){return{thoughts:[]}},methods:Object(s["a"])({},Object(u["b"])(["fetchThoughts"]))},W=V,z=(r("1cb3"),Object(c["a"])(W,L,N,!1,null,"ecff68b6",null)),B=z.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"addThought"}},[r("form",{attrs:{novalidate:"true"},on:{submit:t.validateForm}},[r("h3",[t._v("Add Thought")]),t.errors.length?r("p",[r("ul",{attrs:{id:"errors"}},t._l(t.errors,function(e){return r("li",{key:e},[t._v("― "+t._s(e))])}),0)]):t._e(),r("label",{attrs:{for:"title"}},[t._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"Text",id:"title",name:"title",placeholder:"Summarise your Thought"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),r("label",{attrs:{for:"content"}},[t._v("Thought")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{id:"content",name:"content",placeholder:"What's on your mind?"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),r("button",[t._v("Add Thought")])])])},K=[],Q={name:"addThought",data:function(){return{title:null,content:null,errors:[]}},computed:Object(u["d"])(["auth"]),methods:Object(s["a"])({},Object(u["b"])(["addThought"]),{validateForm:function(t){t.preventDefault(),this.errors=[];var e=this.title,r=this.content;if(e?e.length<=3?this.errors.push("The title should be longer than 3 characters!"):e.length>=50&&this.errors.push("Title should be no longer than 50 characters!"):this.errors.push("Title has been left empty!"),r?r.length<=5?this.errors.push("The content should be longer than 5 characters!"):r.length>=300&&this.errors.push("The content should be no longer than 300 characters!"):this.errors.push("Thought has been left empty!"),!this.errors.length){var n={title:e,content:r,date:(new Date).toUTCString(),lastUpdated:(new Date).toUTCString(),userId:this.auth.userId};this.addThought(n),this.$router.push("/")}}})},X=Q,Z=(r("8c55"),Object(c["a"])(X,G,K,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"signup"}},[r("form",{attrs:{novalidate:"true"},on:{submit:t.validateForm}},[r("h3",[t._v("Signup")]),t.errors.length?r("p",[r("ul",{attrs:{id:"errors"}},t._l(t.errors,function(e){return r("li",{key:e},[t._v("― "+t._s(e))])}),0)]):t._e(),r("label",{attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",id:"email",name:"email",placeholder:"Your email address..."},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),r("label",{attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",name:"password",placeholder:"Password here..."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("button",[t._v("Signup")])])])},rt=[],nt={name:"signup",data:function(){return{email:null,password:null,errors:[]}},methods:Object(s["a"])({},Object(u["b"])(["signupUser"]),{validateForm:function(t){t.preventDefault(),this.errors=[];var e=this.email,r=this.password;if(e||this.errors.push("Email has been left empty!"),r?r.length<=8?this.errors.push("The password should be longer than 8 characters!"):r.length>=25&&this.errors.push("The password should be no longer than 25 characters!"):this.errors.push("Password has been left empty!"),!this.errors.length){var n={email:e,password:r,signedUpDate:(new Date).toUTCString()};this.signupUser(n),this.$router.push("/login")}}})},ot=nt,at=(r("21da"),Object(c["a"])(ot,et,rt,!1,null,null,null)),st=at.exports,ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"signup"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.validateForm(e)}}},[r("h3",[t._v("Login")]),t.errors.length?r("p",[r("ul",{attrs:{id:"errors"}},t._l(t.errors,function(e){return r("li",{key:e},[t._v("― "+t._s(e))])}),0)]):t._e(),r("label",{attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",id:"email",name:"email",placeholder:"Your email address..."},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),r("label",{attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",name:"password",placeholder:"Password here..."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("button",[t._v("Login")])])])},it=[],lt={name:"login",data:function(){return{email:null,password:null,errors:[]}},methods:Object(s["a"])({},Object(u["b"])(["loginUser"]),{validateForm:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,r,n,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.errors=[],e=this.email,r=this.password,e||this.errors.push("Email has been left empty!"),r||this.errors.push("Password has been left empty!"),this.errors.length||(n={email:e,password:r,authTime:(new Date).toUTCString()},this.loginUser(n).then(function(t){!0===t&&o.$router.push("/")}));case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})},ct=lt,ht=(r("206d"),Object(c["a"])(ct,ut,it,!1,null,null,null)),dt=ht.exports,pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("Logging out...")])])}],mt={name:"logout",computed:Object(s["a"])({},Object(u["d"])(["auth"])),methods:Object(s["a"])({},Object(u["b"])(["logoutUser"])),created:function(){!0===this.auth.loggedIn&&this.logoutUser(),this.$router.push("/login")}},ft=mt,vt=Object(c["a"])(ft,pt,gt,!1,null,null,null),bt=vt.exports;n["a"].use(C["a"]);var wt=new C["a"]({mode:"history",routes:[{path:"/",component:B,meta:{requiredLogin:!0}},{path:"/add",component:tt,meta:{requiredLogin:!0}},{path:"/signup",component:st},{path:"/login",component:dt},{path:"/logout",component:bt,meta:{requiredLogin:!0}},{path:"/404",component:D},{path:"*",redirect:"/404"}]});wt.beforeEach(function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e,r,n){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U.dispatch("loggedIn");case 2:o=t.sent,e.matched.some(function(t){return t.meta.requiredLogin})&&!1===o?n("/login"):n();case 4:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}());var Tt=wt;n["a"].config.productionTip=!1,new n["a"]({store:U,router:Tt,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),o=r.n(n);o.a},"5e27":function(t,e,r){},"6fa3":function(t,e,r){},"72d0":function(t,e,r){},"8c55":function(t,e,r){"use strict";var n=r("72d0"),o=r.n(n);o.a},"9cbb":function(t,e,r){},b856:function(t,e,r){"use strict";var n=r("d905"),o=r.n(n);o.a},d905:function(t,e,r){}});
//# sourceMappingURL=app.581189d3.js.map