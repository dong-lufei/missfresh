(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["add"],{"1ace":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"product-add-container"},[r("a-steps",{attrs:{current:e.current}},e._l(e.steps,(function(e){return r("a-step",{key:e.title,attrs:{title:e.title}})})),1),r("div",{staticClass:"steps-content"},[0===e.current?r("BasicInfo",{ref:"ruleForm",attrs:{tempForm:e.tempForm}}):e._e(),1===e.current?r("SaleInfo",{attrs:{tempForm:e.tempForm}}):e._e()],1),r("div",{staticClass:"steps-action"},[e.current<e.steps.length-1?r("a-button",{attrs:{type:"primary"},on:{click:e.next}},[e._v(" 下一步 ")]):e._e(),e.current>0?r("a-button",{staticClass:"pre",staticStyle:{"margin-left":"8px"},on:{click:e.prev}},[e._v(" 返回上一步 ")]):e._e(),e.current==e.steps.length-1?r("a-button",{attrs:{type:"primary"},on:{click:e.done}},[e._v(" 完成 ")]):e._e()],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"edit-form-container"},[r("a-form-model",{ref:"ruleForm",attrs:{model:e.tempForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-model-item",{attrs:{label:"标题",required:"",prop:"title"}},[r("a-input",{model:{value:e.tempForm.title,callback:function(t){e.$set(e.tempForm,"title",t)},expression:"tempForm.title"}})],1),r("a-form-model-item",{attrs:{label:"商品描述",prop:"desc"}},[r("a-input",{model:{value:e.tempForm.desc,callback:function(t){e.$set(e.tempForm,"desc",t)},expression:"tempForm.desc"}})],1),r("a-form-model-item",{attrs:{label:"商品类目",required:"",prop:"category"}},[r("a-select",{attrs:{placeholder:"请选择商品类别"},on:{change:e.changeCategory},model:{value:e.tempForm.category,callback:function(t){e.$set(e.tempForm,"category",t)},expression:"tempForm.category"}},e._l(e.categoryList,(function(t){return r("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1),r("a-select",{attrs:{placeholder:"请添加子类目"},model:{value:e.tempForm.c_item,callback:function(t){e.$set(e.tempForm,"c_item",t)},expression:"tempForm.c_item"}},e._l(e.categoryItems,(function(t){return r("a-select-option",{key:t,attrs:{value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:"商品标签",prop:"tags",required:""}},[r("a-select",{attrs:{mode:"tags",size:e.size,placeholder:"请选择标签","default-value":["包邮,最晚次日达"]},model:{value:e.tempForm.tags,callback:function(t){e.$set(e.tempForm,"tags",t)},expression:"tempForm.tags"}},[r("a-select-option",{attrs:{value:"包邮,最晚次日达"}},[e._v(" 包邮,最晚次日达 ")])],1)],1)],1)],1)},o=[],s=r("c405"),c={props:["tempForm"],data:function(){return{labelCol:{span:4},wrapperCol:{span:14},categoryList:[],categoryItems:[],size:"default",rules:{}}},created:function(){var e=this;Object(s["a"])().then((function(t){console.log(t),e.categoryList=t.data}))},methods:{changeCategory:function(e){for(var t=0;t<this.categoryList.length;t++)this.categoryList[t].id===e&&(this.categoryItems=this.categoryList[t].c_item)}}},u=c,l=(r("6398"),r("2877")),p=Object(l["a"])(u,i,o,!1,null,"2e02f6a0",null),m=p.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sale-info-container"},[r("a-form-model",{ref:"ruleForm",attrs:{model:e.tempForm,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-model-item",{attrs:{label:"商品售价",required:"",prop:"price"}},[r("a-input",{model:{value:e.tempForm.price,callback:function(t){e.$set(e.tempForm,"price",t)},expression:"tempForm.price"}})],1),r("a-form-model-item",{attrs:{label:"折扣价格",prop:"price_off"}},[r("a-input",{model:{value:e.tempForm.price_off,callback:function(t){e.$set(e.tempForm,"price_off",t)},expression:"tempForm.price_off"}})],1),r("a-form-model-item",{attrs:{label:"商品库存",required:"",prop:"inventory"}},[r("a-input",{model:{value:e.tempForm.inventory,callback:function(t){e.$set(e.tempForm,"inventory",t)},expression:"tempForm.inventory"}})],1),r("a-form-model-item",{attrs:{label:"计量单位",prop:"unit",required:""}},[r("a-input",{model:{value:e.tempForm.unit,callback:function(t){e.$set(e.tempForm,"unit",t)},expression:"tempForm.unit"}})],1),r("a-form-model-item",{attrs:{label:"商品相册",prop:"images",required:""}},[r("a-upload",{attrs:{action:"https://mallapi.duyiedu.com/upload/images?appkey="+e.$store.state.login.user.appkey,name:"avatar","list-type":"picture-card","file-list":e.fileList},on:{preview:e.handlePreview,change:e.handleChange}},[e.fileList.length<8?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[e._v(" Upload ")])],1):e._e()]),r("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)],1)],1)},d=[],h=r("1da1");r("96cf"),r("d3b7"),r("d81d"),r("99af");function g(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return r(e)}}))}var v={props:["tempForm"],data:function(){return{labelCol:{span:4},wrapperCol:{span:14},categoryList:[],categoryItems:[],size:"default",rules:{},previewVisible:!1,previewImage:"",fileList:[]}},created:function(){var e=this;Object(s["a"])().then((function(t){e.categoryList=t.data})),this.tempForm.images.length&&(this.fileList=this.tempForm.images.map((function(e,t){return{uid:t,name:"image".concat(t,".png"),status:"done",url:e}})))},methods:{onSubmit:function(){this.$refs.ruleForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},handleCancel:function(){this.previewVisible=!1,console.log(333)},handlePreview:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.url||e.preview){r.next=4;break}return r.next=3,g(e.originFileObj);case 3:e.preview=r.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return r.stop()}}),r)})))()},handleChange:function(e){var t=e.fileList;if(this.fileList=t,t.length&&"done"===t[0].status){for(var r=[],n=0;n<t.length;n++)t[n].response&&r.push(t[n].response.data.url);this.tempForm.images=[].concat(r)}else 0===t.length&&(this.tempForm.images=[])}}},b=v,F=(r("eb15"),Object(l["a"])(b,f,d,!1,null,"abda6dea",null)),y=F.exports,w=r("c4c8"),_={components:{BasicInfo:m,SaleInfo:y},data:function(){return{current:0,tempForm:{title:"",desc:"",category:"",c_items:[],tags:[],price:0,price_off:0,inventory:0,unit:"",images:[]},steps:[{title:"填写商品基本信息"},{title:"填写商品销售信息"}]}},created:function(){var e=this,t=this.$route.params.id;t&&Object(w["c"])(t).then((function(t){e.tempForm=t}))},methods:{next:function(){if(!this.tempForm.title||!this.tempForm.category||!this.tempForm.tags.length)return alert("必填项未填完整");this.current++},prev:function(){this.current--},done:function(){if(!this.tempForm.price||!this.tempForm.inventory||!this.tempForm.unit||!this.tempForm.images.length)return alert("必填项未填完整");console.log(this.$route.params),this.$route.params.id?(Object(w["d"])(this.tempForm).then((function(e){console.log(e)})),this.$message.success("编辑商品成功")):(Object(w["b"])(this.tempForm).then((function(e){console.log(e)})),this.$message.success("新增商品成功")),this.$router.push({name:"ProductList"})}}},x=_,k=(r("8ee6"),Object(l["a"])(x,n,a,!1,null,"1d94f224",null));t["default"]=k.exports},"217b1":function(e,t,r){},"43cf":function(e,t,r){},"521c":function(e,t,r){},6398:function(e,t,r){"use strict";r("521c")},"8ee6":function(e,t,r){"use strict";r("217b1")},c405:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("1da1"),a=(r("96cf"),r("0c6d"));function i(e){return o.apply(this,arguments)}function o(){return o=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("/category/all",{params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}},c4c8:function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return f}));var n=r("1da1"),a=(r("96cf"),r("0c6d"));function i(e){return o.apply(this,arguments)}function o(){return o=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("/products/all",{params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function s(e){return c.apply(this,arguments)}function c(){return c=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].delete("/products/".concat(t.id));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function u(e){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].post("/products/add",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return m=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("/products/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return d=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].put("/products/edit",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}},eb15:function(e,t,r){"use strict";r("43cf")}}]);
//# sourceMappingURL=add.8c3778f1.js.map