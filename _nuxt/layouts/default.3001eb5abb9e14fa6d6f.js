webpackJsonp([5],{"/Bxn":function(t,a,s){"use strict";var e=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"navbar navbar-expand-md justify-content-between navbar-dark"},[this._m(0),a("span",{staticClass:"navbar-text pull-right"},[a("a",{staticClass:"nav-link underline-on-hover",attrs:{href:"#","data-toggle":"modal","data-target":"#contact-modal"}},[a("contact-modal",{staticClass:"footer-link-text"})],1)])])};e._withStripped=!0;var n={render:e,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"main-navigation"}},[a("ul",{staticClass:"navbar-nav form-inline"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"m-2",attrs:{href:"/"}},[a("span",{staticClass:"footer-link-text"},[this._v("Home")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"m-2",attrs:{href:"/about"}},[a("span",{staticClass:"footer-text-link"},[this._v("About")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"m-2",attrs:{href:"https://medium.com/oobfest",target:"_blank"}},[a("span",{staticClass:"footer-link text"},[this._v("Blog")])])])])])}]};a.a=n},"8I9K":function(t,a,s){var e=s("UxZR");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("4c234f5a",e,!1,{sourceMap:!1})},A4Ga:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("font-awesome-icon",{attrs:{icon:"envelope"}}),s("b-button",{staticClass:"footer-link-text",attrs:{variant:"link"},on:{click:t.showModal}},[t._v("Contact")]),s("b-modal",{ref:"contactModal",attrs:{title:"Contact"}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-form-label",attrs:{for:"contact-name"}},[t._v("Full Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.contactFormData.name,expression:"contactFormData.name"}],staticClass:"form-control",attrs:{id:"contact-name",type:"text",name:"name",required:""},domProps:{value:t.contactFormData.name},on:{input:function(a){a.target.composing||t.$set(t.contactFormData,"name",a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-form-label",attrs:{for:"contact-email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.contactFormData.email,expression:"contactFormData.email"}],staticClass:"form-control",attrs:{id:"contact-email",type:"email",name:"email",required:""},domProps:{value:t.contactFormData.email},on:{input:function(a){a.target.composing||t.$set(t.contactFormData,"email",a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-form-label",attrs:{for:"contact-subject"}},[t._v("Subject")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.contactFormData.subject,expression:"contactFormData.subject"}],staticClass:"form-control",attrs:{id:"contact-subject",type:"text",name:"subject"},domProps:{value:t.contactFormData.subject},on:{input:function(a){a.target.composing||t.$set(t.contactFormData,"subject",a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-form-label",attrs:{for:"contact-message"}},[t._v("Message")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contactFormData.message,expression:"contactFormData.message"}],staticClass:"form-control",attrs:{id:"contact-message",name:"message",required:""},domProps:{value:t.contactFormData.message},on:{input:function(a){a.target.composing||t.$set(t.contactFormData,"message",a.target.value)}}})]),s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{staticClass:"m-1",attrs:{variant:"secondary"},on:{click:t.hideModal}},[t._v("Cancel")]),s("b-button",{staticClass:"m-1",attrs:{variant:"primary"},on:{click:t.send}},[t._v("Send")])],1)])],1)};e._withStripped=!0;var n={render:e,staticRenderFns:[]};a.a=n},AQP4:function(t,a,s){"use strict";var e=s("c8G3"),n=s("A4Ga"),o=!1;var i=function(t){o||s("ibv7")},r=s("VU/8")(e.a,n.a,!1,i,"data-v-b667aa70",null);r.options.__file="components/ContactModal.vue",a.a=r.exports},BjPr:function(t,a,s){"use strict";var e=s("I8H5"),n=s("I7Zh");a.a={components:{Navigation:e.a,NavigationFooter:n.a}}},I7Zh:function(t,a,s){"use strict";var e=s("Ne5S"),n=!1;var o=function(t){n||s("8I9K")},i=s("VU/8")(null,e.a,!1,o,"data-v-6d75a2aa",null);i.options.__file="components/NavigationFooter.vue",a.a=i.exports},I8H5:function(t,a,s){"use strict";var e=s("ykLW"),n=s("/Bxn"),o=s("VU/8")(e.a,n.a,!1,null,null,null);o.options.__file="components/Navigation.vue",a.a=o.exports},Ma2J:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("BjPr"),n=s("W2vO"),o=!1;var i=function(t){o||s("olDW")},r=s("VU/8")(e.a,n.a,!1,i,"data-v-314f53c6",null);r.options.__file="layouts/default.vue",a.default=r.exports},Ne5S:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"container-fluid"},[s("div",{staticClass:"navbar navbar-expand-md justify-content-between navbar-dark"},[s("div",{attrs:{id:"footer-menu"}},[s("ul",{staticClass:"navbar-nav form-inline"},[s("li",{staticClass:"nav-item"},[s("span",[t._v("  ")]),s("font-awesome-icon",{attrs:{icon:["fab","facebook"]}}),t._m(0),s("span",{staticClass:"d-none d-md-inline"},[t._v("| ")])],1),s("li",{staticClass:"nav-item"},[s("span",[t._v("  ")]),s("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),t._m(1),s("span",{staticClass:"d-none d-md-inline"},[t._v("| ")])],1),s("li",{staticClass:"nav-item"},[s("span",[t._v("  ")]),s("font-awesome-icon",{attrs:{icon:["fab","instagram"]}}),t._m(2),s("span",{staticClass:"d-none d-md-inline"},[t._v("| ")])],1),s("li",{staticClass:"nav-item"},[s("span",[t._v("  ")]),s("font-awesome-icon",{attrs:{icon:["fab","flickr"]}}),t._m(3),s("span",{staticClass:"d-none d-md-inline"},[t._v("| ")])],1),s("li",{staticClass:"nav-item"},[s("span",[t._v("  ")]),s("font-awesome-icon",{attrs:{icon:["fab","github"]}}),t._m(4),s("span",{staticClass:"d-none d-md-inline"},[t._v("| ")])],1),s("li",{staticClass:"nav-item"},[s("span",[t._v(" ")]),s("font-awesome-icon",{attrs:{icon:["fab","medium"]}}),t._m(5)],1)])])])])};e._withStripped=!0;var n={render:e,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"m-2",attrs:{href:"https://www.facebook.com/oobfest"}},[a("span",{staticClass:"footer-link-text"},[this._v("Facebook")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"m-2",attrs:{href:"https://www.twitter.com/oobfest"}},[a("span",{staticClass:"footer-link-text"},[this._v("Twitter")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"m-2",attrs:{href:"https://www.instagram.com/oobfest"}},[a("span",{staticClass:"footer-link-text"},[this._v("Instagram")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"m-2",attrs:{href:"https://www.flickr.com/photos/oob_pics"}},[a("span",{staticClass:"footer-link-text"},[this._v("Flickr")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"m-2",attrs:{href:"https://github.com/oobfest"}},[a("span",{staticClass:"footer-link-text"},[this._v("GitHub")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"m-2",attrs:{href:"https://medium.com/oobfest"}},[a("span",{staticClass:"footer-link-text"},[this._v("Medium")])])}]};a.a=n},UxZR:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,"footer[data-v-6d75a2aa]{background-color:#0a0a0a}.navbar[data-v-6d75a2aa]{padding:1.5em}",""])},W2vO:function(t,a,s){"use strict";var e=function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("main",[a("div",{staticClass:"container-fluid"},[a("navigation"),a("nuxt")],1),a("navigation-footer")],1)])};e._withStripped=!0;var n={render:e,staticRenderFns:[]};a.a=n},ZyWe:function(t,a,s){t.exports=s.p+"img/marcella-arguello-cropped-dark-min.64c40bf.jpeg"},c8G3:function(t,a,s){"use strict";var e=s("mtWM"),n=s.n(e);a.a={data:function(){return{contactFormData:{name:"",email:"",subject:"",message:""}}},methods:{send:function(){this.hideModal();var t=new URLSearchParams;t.append("name",this.contactFormData.name),t.append("email",this.contactFormData.email),t.append("subject",this.contactFormData.subject),t.append("message",this.contactFormData.message),n.a.post("https://app.oobfest.com/api/email/contact",t).then(function(t){alert("Message sent!")}).catch(function(t){alert("Error :("),console.log(t)})},showModal:function(){this.$refs.contactModal.show()},hideModal:function(){this.$refs.contactModal.hide()}}}},dNBQ:function(t,a,s){var e=s("kxFB");(t.exports=s("FZ+f")(!1)).push([t.i,".background-graphic[data-v-314f53c6]{background:url("+e(s("ZyWe"))+") no-repeat bottom fixed;background-size:cover}",""])},ibv7:function(t,a,s){var e=s("q6t7");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("08a5a747",e,!1,{sourceMap:!1})},olDW:function(t,a,s){var e=s("dNBQ");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("09df995e",e,!1,{sourceMap:!1})},q6t7:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".btn-link[data-v-b667aa70]{font-size:21px}",""])},ykLW:function(t,a,s){"use strict";var e=s("AQP4");a.a={components:{ContactModal:e.a}}}});