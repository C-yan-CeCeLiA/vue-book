webpackJsonp([4],{WoZw:function(o,e){},"il+h":function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("UeVD"),a=t("gyMJ"),r={name:"add",data:function(){return{book:{}}},methods:{Add:function(){Object(a.a)(this.book),this.$router.push("/list")}},components:{MHeader:n.a}},i={render:function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[t("MHeader",[o._v("收藏")]),o._v(" "),t("div",{staticClass:"content"},[t("ul",[t("li",[t("label",{attrs:{for:"bookName"}},[o._v("书名\n          "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.bookName,expression:"book.bookName"}],attrs:{type:"text",name:"",id:"bookName"},domProps:{value:o.book.bookName},on:{input:function(e){e.target.composing||o.$set(o.book,"bookName",e.target.value)}}})])]),o._v(" "),t("li",[t("label",{attrs:{for:"bookInfo"}},[o._v("信息\n          "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.bookInfo,expression:"book.bookInfo"}],attrs:{type:"text",name:"",id:"bookInfo"},domProps:{value:o.book.bookInfo},on:{input:function(e){e.target.composing||o.$set(o.book,"bookInfo",e.target.value)}}})])]),o._v(" "),t("li",[t("label",{attrs:{for:"bookPrice"}},[o._v("价格\n          "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:o.book.bookPrice,expression:"book.bookPrice",modifiers:{number:!0}}],attrs:{type:"text",name:"",id:"bookPrice"},domProps:{value:o.book.bookPrice},on:{input:function(e){e.target.composing||o.$set(o.book,"bookPrice",o._n(e.target.value))},blur:function(e){o.$forceUpdate()}}})])]),o._v(" "),t("li",[t("label",{attrs:{for:"bookCover"}},[o._v("封面\n          "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.bookCover,expression:"book.bookCover"}],attrs:{type:"text",name:"",id:"bookCover"},domProps:{value:o.book.bookCover},on:{input:function(e){e.target.composing||o.$set(o.book,"bookCover",e.target.value)}}})])]),o._v(" "),t("li",[t("button",{on:{click:o.Add}},[o._v("添加")])])])])],1)},staticRenderFns:[]};var b=t("VU/8")(r,i,!1,function(o){t("WoZw")},"data-v-0fb3064a",null);e.default=b.exports}});
//# sourceMappingURL=4.dfd702af9c5e8513dce0.js.map