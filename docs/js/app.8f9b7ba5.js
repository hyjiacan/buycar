(function(e){function t(t){for(var r,a,o=t[0],u=t[1],c=t[2],l=0,f=[];l<o.length;l++)a=o[l],s[a]&&f.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},s={app:0},i=[];function o(e){return u.p+"js/"+({result:"result"}[e]||e)+"."+{result:"d9af8491"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={result:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({result:"result"}[e]||e)+"."+{result:"e7cda6f6"}[e]+".css",s=u.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===s))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){c=f[o],l=c.getAttribute("data-href");if(l===r||l===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){a[e]=0}));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=s[e]=[t,n]});t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e),c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}s[e]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"216c":function(e,t,n){"use strict";var r=n("43af"),a=n.n(r);a.a},"43af":function(e,t,n){},5348:function(e,t,n){"use strict";var r=n("c79e"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[e.isResultPage?n("div",{staticClass:"btn-back",on:{click:function(t){return e.$router.back()}}},[e._v("\n            << 返回\n        ")]):n("div",{staticClass:"title"},[e._v("\n            验车助手\n        ")]),n("div",{staticClass:"info"},[e._v("\n            通过 "+e._s(e.pass.length)+" 项, 有问题 "+e._s(e.fail.length)+" 项 , 剩下 "+e._s(e.option.length-e.pass.length-e.fail.length)+" 项 / 共 "+e._s(e.option.length)+" 项\n        ")])]),n("router-view")],1)},s=[],i=n("cebc"),o=n("db2e"),u=n("2f62"),c={name:"App",data:function(){return{option:o}},computed:Object(i["a"])({},Object(u["b"])({pass:function(e){return e.pass},fail:function(e){return e.fail}}),{isResultPage:function(){return"/result"===this.$route.path}})},l=c,f=(n("5348"),n("2877")),p=Object(f["a"])(l,a,s,!1,null,"41f5fc7d",null),d=p.exports,m=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._l(e.option,function(e,t){return n("check-item",{key:e.key,attrs:{data:e,index:t+1}})}),n("div",{staticClass:"footer"},[n("button",{staticClass:"btn-reset",on:{click:e.onReset}},[e._v("清除状态")]),n("button",{staticClass:"btn-submit",on:{click:e.onComplete}},[e._v("完成")])])],2)},v=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"check-item",class:{pass:1===e.itemStatus,fail:-1===e.itemStatus}},[n("div",{staticClass:"index"},[e._v(e._s(e.index))]),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[e._v(e._s(e.data.key))]),n("div",{staticClass:"remark"},[e._v(e._s(e.data.remark))])]),n("div",{staticClass:"buttons"},[n("button",{staticClass:"btn-fail",on:{click:function(t){return e.changeStatus(-1)}}},[e._v("有问题")]),n("button",{staticClass:"btn-pass",on:{click:function(t){return e.changeStatus(1)}}},[e._v("通过")])])])},g=[],b=(n("c5f6"),{name:"CheckItem",props:{index:{type:Number},data:{type:Object}},methods:{changeStatus:function(e){var t=this.index-1;1===e?this.$store.commit("passItem",t):-1===e&&this.$store.commit("failItem",t)}},computed:Object(i["a"])({},Object(u["b"])({pass:function(e){return e.pass},fail:function(e){return e.fail}}),{itemStatus:function(){return-1!==this.pass.indexOf(this.index-1)?1:-1!==this.fail.indexOf(this.index-1)?-1:0}})}),y=b,_=(n("216c"),Object(f["a"])(y,k,g,!1,null,"7f74de88",null)),x=_.exports,O={name:"home",components:{CheckItem:x},data:function(){return{option:o}},methods:{onReset:function(){window.confirm("此操作不可恢复，确定要清除检查状态吗？")&&this.$store.commit("reset")},onComplete:function(){this.$router.push("result")}}},C=O,w=(n("7dfd"),Object(f["a"])(C,h,v,!1,null,"445b2f38",null)),I=w.exports;r["a"].use(m["a"]);var j=new m["a"]({routes:[{path:"/",name:"home",component:I},{path:"/result",name:"result",component:function(){return n.e("result").then(n.bind(null,"eeac"))}}]});n("28a5");function S(e,t){var n=new Date;if(n.setDate(n.getDate()+65535),!Array.isArray(t)){var r=P(e);if(r.indexOf(t))return;r.push(t),t=r}t=t.join(","),document.cookie="".concat(e,"=").concat(t,";expires=").concat(n.toGMTString())}function P(e){if(!document.cookie.length)return[];var t=document.cookie.indexOf(e+"=");if(-1===t)return[];t=t+e.length+1;var n=document.cookie.indexOf(";",t);-1===n&&(n=document.cookie.length);var r=unescape(document.cookie.substring(t,n));return r?r.split(",").map(function(e){return parseInt(e)}):[]}var E={getItem:P,setItem:S};r["a"].use(u["a"]);var $={state:{pass:E.getItem("pass"),fail:E.getItem("fail")},getters:{getPass:function(){return E.getItem("pass")},getFail:function(){return E.getItem("fail")}},mutations:{passItem:function(e,t){var n=e.fail.indexOf(t);-1!==n&&e.fail.splice(n,1),-1===e.pass.indexOf(t)&&e.pass.push(t),E.setItem("pass",e.pass),E.setItem("fail",e.fail)},failItem:function(e,t){var n=e.pass.indexOf(t);-1!==n&&e.pass.splice(n,1),-1===e.fail.indexOf(t)&&e.fail.push(t),E.setItem("pass",e.pass),E.setItem("fail",e.fail)},reset:function(e){e.pass=[],e.fail=[],E.setItem("pass",e.pass),E.setItem("fail",e.fail)}},actions:{}};console.log($);var A=new u["a"].Store($);r["a"].config.productionTip=!1,new r["a"]({router:j,store:A,render:function(e){return e(d)}}).$mount("#app")},"7dfd":function(e,t,n){"use strict";var r=n("f8d2"),a=n.n(r);a.a},c79e:function(e,t,n){},db2e:function(e){e.exports=[{key:"铭牌@出厂日期",remark:"出厂日期应该在三个月内"},{key:"铭牌@与合格证参数致",remark:"合格证的参数与铭牌是否一致，若不一致，表示车型有问题"},{key:"随车附件是否齐全",remark:"千斤顶，三角牌，扳手，灭火器"},{key:"外观@车漆",remark:"在阳光下观察，是否有划痕或修补过的印迹"},{key:"车内@车窗",remark:"检查车窗升降是否顺畅"},{key:"车内@仪表",remark:"仪表各功能显示是否正常"},{key:"车内@换档",remark:"换档是否顺畅"},{key:"车内@显示屏",remark:"显示屏功能是否正常"},{key:"车内@空调",remark:"制冷制热是否正常"},{key:"车内@倒车辅助",remark:"倒车雷达与倒车影像功能是否正确"},{key:"外观@车轮胎",remark:"胎毛是否存在，检查轮胎是否存在异常磨损"},{key:"车内@仪表显示里程",remark:"里程一般不超过50KM"},{key:"车内@坐椅",remark:"是否存在伤痕"},{key:"发动机舱@水渍/锈迹",remark:"有水渍/锈迹表示可能是泡水车"},{key:"发动机舱@螺丝拆卸痕迹",remark:"若有拆卸痕迹说明车辆经过维修或换件"},{key:"发动机舱@查看机油颜色以及粘稠度",remark:"如果颜色过深或很稀，表示机油已经使用较长时间，此时要怀疑是否调过里程表"},{key:"底盘(安装发动机保护板前,举升查看)",remark:"是否存在剐蹭痕迹/漏油"},{key:"试驾@是否有异响",remark:"有异响这车得换，表示有部件松况"},{key:"赠品",remark:"检查该送的是不是都送了"}]},f8d2:function(e,t,n){}});
//# sourceMappingURL=app.8f9b7ba5.js.map