(function(t){function e(e){for(var a,o,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"202a":function(t,e,n){"use strict";var a=n("6767"),i=n.n(a);i.a},"302b":function(t,e,n){"use strict";var a=n("9b1d"),i=n.n(a);i.a},"3bbec":function(t,e,n){t.exports=n.p+"img/thank2.48019063.gif"},"426f":function(t,e,n){t.exports=n.p+"img/thank5.2aede83a.gif"},"4b4e":function(t,e,n){"use strict";var a=n("87b1"),i=n.n(a);i.a},"4dc9":function(t,e,n){t.exports=n.p+"img/thank7.a946a3d3.gif"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"build-test__wrapper",attrs:{id:"app"}},[t.showFeedbackForm?[t._m(0),a("NameInput",{attrs:{name:t.postData.name},on:{input:t.setName}}),a("TextInput",{attrs:{feedback:t.postData.feedback},on:{input:t.setFeedback}}),a("SubmitButton",{attrs:{disabled:t.isSubmitButtonDisabled},on:{submit:t.sendFeedback}}),t.isRequestVisible?a("div",[a("h3",[t._v(" Guest name: "+t._s(t.postData.name)+" ")]),a("hr"),a("p",[t._v(" Feedback: "+t._s(t.postData.feedback)+" ")])]):t._e()]:a("div",{attrs:{id:"thank_you"}},[t._m(1),a("br"),a("div",{staticClass:"build-test-u-flex-column"},[a("img",{staticClass:"build-test-app__image",attrs:{src:n("c41c")("./thank"+t.randomNumber+".gif"),alt:"Thank you!"}})])])],2)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"build-test-u-white-color build-test__title"},[t._v(" Frontend Developer Love in Eindhoven, "),n("br"),t._v(" This is "),n("em",[t._v("Anastasia Dragich")]),t._v(" with "),n("em",[t._v('"Building Test Strategy Topic"')]),t._v("... ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"build-test-u-white-color build-test__title"},[t._v(" Thanks a lot! "),n("br"),n("em",[t._v("Anastasia Dragich")]),t._v(" appreciates your input ")])}],o=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"build-test-u-flex-column build-test-u-spacer"},[n("label",{staticClass:"build-test__input-label build-test-u-spacer build-test-u-lightgrey-color"},[t._v(" Kindly asking you to provide your name ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.innerValue,expression:"innerValue"}],staticClass:"build-test__input build-test-u-spacer",attrs:{type:"text",placeholder:"Jhon Doe 😎"},domProps:{value:t.innerValue},on:{input:[function(e){e.target.composing||(t.innerValue=e.target.value)},function(e){return t.$emit("input",e.target.value)}]}})])},u=[],c=(n("b0c0"),{name:"NameInput",props:{name:{type:String,required:!0}},data:function(){return{innerValue:this.name}}}),l=c,p=(n("302b"),n("2877")),f=Object(p["a"])(l,s,u,!1,null,"8f438c34",null),b=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"build-test-u-flex-column build-test-u-spacer"},[n("label",{staticClass:"build-test-u-spacer build-test-u-lightgrey-color"},[t._v(" Kindly asking you to provide your feedback about the content ")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.innerValue,expression:"innerValue"}],staticClass:"build-test__textarea build-test-u-spacer",domProps:{value:t.innerValue},on:{input:[function(e){e.target.composing||(t.innerValue=e.target.value)},function(e){return t.$emit("input",e.target.value)}]}})])},m=[],h={name:"TextInput",props:{feedback:{type:String,required:!0}},data:function(){return{innerValue:this.feedback}}},v=h,g=(n("4b4e"),Object(p["a"])(v,d,m,!1,null,"4447879b",null)),_=g.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"build-test__button",class:{"build-test__button--disabled":t.disabled},attrs:{type:"button"},on:{click:t.submit}},[n("span",{staticClass:"build-test__button-text"},[t.disabled?[t._v(" First give me some data... ")]:[t._v(" Let it go! ")]],2)])},y=[],O={name:"SubmitButton",props:{disabled:{type:Boolean,default:!1}},methods:{submit:function(){!this.disabled&&this.$emit("submit")}}},x=O,w=(n("202a"),Object(p["a"])(x,k,y,!1,null,"3f4a7af6",null)),j=w.exports,D=n("59ca"),C=n.n(D),F=(n("66ce"),{apiKey:"AIzaSyAiro_Ma1VKAFX93hGCy2CjmCTY9FtArxM",authDomain:"build-test-app.firebaseapp.com",databaseURL:"https://build-test-app.firebaseio.com",projectId:"build-test-app",storageBucket:"build-test-app.appspot.com"}),P=F;C.a.initializeApp(P);var S=C.a.database();function T(t){var e=S.ref().child("feedbacks").push().key,n={};return n["/feedbacks/"+e]=t,S.ref().update(n)}var V=n("2f62");function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M={name:"App",components:{NameInput:b,TextInput:_,SubmitButton:j},data:function(){return{showFeedbackForm:!0}},computed:E({},Object(V["c"])(["postData","isRequestVisible"]),{isSubmitButtonDisabled:function(){return!this.postData.feedback},randomNumber:function(){return Math.floor(Math.random()*Math.floor(9))}}),methods:E({},Object(V["b"])(["setName","setFeedback"]),{sendFeedback:function(){T(this.postData).then(this.showThankYou)},showThankYou:function(){this.showFeedbackForm=!1}})},$=M,A=(n("034f"),Object(p["a"])($,i,r,!1,null,null,null)),B=A.exports;a["a"].use(V["a"]);var I=new V["a"].Store({state:{postData:{name:"",feedback:""},isRequestVisible:!1},mutations:{setName:function(t,e){t.postData.name=e},setFeedback:function(t,e){t.postData.feedback=e},showRequest:function(t){t.isRequestVisible=!0}},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({store:I,render:function(t){return t(B)}}).$mount("#app")},6767:function(t,e,n){},"79d7":function(t,e,n){t.exports=n.p+"img/thank1.74939819.gif"},"7bab":function(t,e,n){t.exports=n.p+"img/thank8.50f41a89.gif"},"85ec":function(t,e,n){},"87b1":function(t,e,n){},"9b1d":function(t,e,n){},b875:function(t,e,n){t.exports=n.p+"img/thank4.5f320341.gif"},ba46:function(t,e,n){t.exports=n.p+"img/thank9.d902f6b0.gif"},c41c:function(t,e,n){var a={"./thank0.gif":"d525","./thank1.gif":"79d7","./thank2.gif":"3bbec","./thank3.gif":"dceb","./thank4.gif":"b875","./thank5.gif":"426f","./thank6.gif":"cf0a","./thank7.gif":"4dc9","./thank8.gif":"7bab","./thank9.gif":"ba46"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="c41c"},cf0a:function(t,e,n){t.exports=n.p+"img/thank6.3e252474.gif"},d525:function(t,e,n){t.exports=n.p+"img/thank0.f30b7770.gif"},dceb:function(t,e,n){t.exports=n.p+"img/thank3.ee88c0c9.gif"}});
//# sourceMappingURL=app.8ed4ed7d.js.map