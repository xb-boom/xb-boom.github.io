(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42f0f6fe"],{"6c4e":function(t,n,e){"use strict";e("98e2")},"78b4":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"attention"},[e("top-nav",{attrs:{title:"我的关注"}}),e("div",{staticClass:"content"},t._l(t.list,(function(n){return e("div",{key:n.collect_id,staticClass:"list-div"},[e("section",[e("img",{attrs:{src:n.avatar,alt:""}})]),e("section",{staticClass:"list-name"},[e("p",{staticClass:"p-name"},[e("span",[t._v(t._s(n.teacher_name))]),e("span",{staticClass:"guanzhu"},[t._v("已关注")])]),e("p",{staticClass:"p-deatil"},[t._v(t._s(n.introduction))])]),e("section",{staticClass:"btn",on:{click:function(e){return t.look(n)}}},[e("span",[t._v("查看详情")])])])})),0)],1)},o=[],c=e("ebd8"),a=e("7b12"),i={components:{topNav:c["a"]},name:"",data:function(){return{list:[],obj:{page:1,limit:5,type:2}}},created:function(){var t=this;Object(a["r"])(this.obj).then((function(n){console.log(n),t.list=n.data.data.list}))},methods:{look:function(t){this.$router.push({path:"/teaDetail",query:{id:t.teacher_id}})}}},u=i,s=(e("6c4e"),e("2877")),f=Object(s["a"])(u,r,o,!1,null,"23959597",null);n["default"]=f.exports},"7b12":function(t,n,e){"use strict";e.d(n,"p",(function(){return o})),e.d(n,"i",(function(){return c})),e.d(n,"n",(function(){return a})),e.d(n,"k",(function(){return i})),e.d(n,"m",(function(){return u})),e.d(n,"b",(function(){return s})),e.d(n,"j",(function(){return f})),e.d(n,"l",(function(){return l})),e.d(n,"t",(function(){return d})),e.d(n,"x",(function(){return p})),e.d(n,"r",(function(){return g})),e.d(n,"o",(function(){return h})),e.d(n,"a",(function(){return m})),e.d(n,"u",(function(){return b})),e.d(n,"s",(function(){return v})),e.d(n,"v",(function(){return _})),e.d(n,"d",(function(){return y})),e.d(n,"h",(function(){return k})),e.d(n,"e",(function(){return w})),e.d(n,"c",(function(){return C})),e.d(n,"g",(function(){return x})),e.d(n,"f",(function(){return j})),e.d(n,"q",(function(){return I})),e.d(n,"w",(function(){return $}));e("99af");var r=e("bf48"),o=function(){return r["a"].get("/banner")},c=function(){return r["a"].get("/recommend/appIndex")},a=function(t){return r["a"].get("/teacher/".concat(t,"?"))},i=function(t){return r["a"].get("/teacher/info/".concat(t,"?"))},u=function(t){return r["a"].post("/teacher/mainCourse",{teacher_id:t,limit:10,page:1})},s=function(t){return r["a"].get("/teacher/collect/".concat(t))},f=function(t){return r["a"].post("/information/detail",{information_id:t})},l=function(t){return r["a"].post("/login",t)},d=function(){return r["a"].get("/userInfo")},p=function(t){return r["a"].put("/user",t)},g=function(t){return r["a"].get("/collect"+"?page=".concat(t.page)+"&limit=".concat(t.limit)+"&type=".concat(t.type))},h=function(){return r["a"].get("/myStudy/2")},m=function(t){return r["a"].post("/public/img",t)},b=function(t){return r["a"].get("courseBasis?page=".concat(t.page,"&limit=10&order_by=").concat(t.num))},v=function(){return r["a"].get("courseClassify")},_=function(t){return r["a"].get("courseBasis?limit=10&page=1&course_type=0&keywords=".concat(t))},y=function(t){return r["a"].get("/courseInfo/basis_id=".concat(t,"?"))},k=function(t){return r["a"].post("/courseChapter",{id:t})},w=function(t){return r["a"].get("/spellGroupInfo/".concat(t,"/course?"))},C=function(t){return r["a"].post("/courseComment",{id:t,limit:100,page:1})},x=function(t){return r["a"].post("/collect",{course_basis_id:t,type:1})},j=function(t){return r["a"].post("/collect/cancel/227/1",{collect_id:t})},I=function(t,n){return r["a"].post("/order/downOrder",{shop_id:t,type:n})},$=function(t){return r["a"].get("/myStudy/course/".concat(t))}},"98e2":function(t,n,e){},"99af":function(t,n,e){"use strict";var r=e("23e7"),o=e("d039"),c=e("e8b5"),a=e("861d"),i=e("7b0b"),u=e("50c4"),s=e("8418"),f=e("65f0"),l=e("1dde"),d=e("b622"),p=e("2d00"),g=d("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",b=p>=51||!o((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),v=l("concat"),_=function(t){if(!a(t))return!1;var n=t[g];return void 0!==n?!!n:c(t)},y=!b||!v;r({target:"Array",proto:!0,forced:y},{concat:function(t){var n,e,r,o,c,a=i(this),l=f(a,0),d=0;for(n=-1,r=arguments.length;n<r;n++)if(c=-1===n?a:arguments[n],_(c)){if(o=u(c.length),d+o>h)throw TypeError(m);for(e=0;e<o;e++,d++)e in c&&s(l,d,c[e])}else{if(d>=h)throw TypeError(m);s(l,d++,c)}return l.length=d,l}})},a3a5:function(t,n,e){},bf48:function(t,n,e){"use strict";var r=e("bc3a"),o=e.n(r),c=e("2b0e"),a=o.a.create({baseURL:"http://120.53.31.103:84/api/app",timeout:1e4,headers:{deviceType:"H5"}});a.interceptors.request.use((function(t){return c["a"].$loading.show(),localStorage.getItem("token")&&(t.headers.Authorization="Bearer ".concat(localStorage.getItem("token"))),t}),(function(t){console.log(t)})),a.interceptors.response.use((function(t){if(c["a"].$loading.hide(),"当前登录token无效，请重新登录"!=t.data.msg)return t}),(function(t){switch(t.code){case 500:console.log("服务器错误");break;case 404:console.log("页面找不到了");break;default:console.log("网络连接错误");break}})),n["a"]=a},ebd8:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topnav"},[e("span",{on:{click:t.back}},[e("van-icon",{attrs:{name:"arrow-left"}})],1),e("span",[t._v(" "+t._s(t.title)+" ")]),e("span",[t._t("default")],2)])},o=[],c={name:"topnav",props:["title"],data:function(){return{}},created:function(){},methods:{back:function(){this.$router.go(-1)}}},a=c,i=(e("fe26"),e("2877")),u=Object(i["a"])(a,r,o,!1,null,"92da6bc6",null);n["a"]=u.exports},fe26:function(t,n,e){"use strict";e("a3a5")}}]);
//# sourceMappingURL=chunk-42f0f6fe.b428c232.js.map