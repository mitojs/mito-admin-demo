(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2Lcx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n("wCAj"),a=n("mr32"),u=n("2/Rp"),o=n("tsqr"),c=n("q1tI"),i=n.n(c),l=n("UXYc"),f=n("Ty5D"),s=n("PNle"),m=n("r/QG"),d=n("VtrM"),b=n("0lfv"),p=n("kLXV"),y=n("Vl3Y"),v=n("5rEg");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t,n,r,a,u,o){try{var c=e[u](o),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function o(e){w(u,r,a,o,c,"next",e)}function c(e){w(u,r,a,o,c,"throw",e)}o(void 0)}))}}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,u=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n=e.fetchData,r=Object(c.useRef)(null),a=k(Object(c.useState)(!1),2),u=a[0],l=a[1],f=function(){var e=I(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.current.submit();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=I(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)(O({},t));case 2:r=e.sent,o.b.success(r.message),l(!1),n();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return l(e)};Object(c.useImperativeHandle)(t,(function(){return{showModal:d}}));return i.a.createElement(p.a,{onCancel:function(){r.current.resetFields(),d(!1)},onOk:f,visible:u,title:"新增团队",okText:"确认",cancelText:"取消"},i.a.createElement(y.a,h({ref:r,onFinish:m,labelAlign:"right"},{labelCol:{span:6},wrapperCol:{span:18}},{name:"edit-basic"}),i.a.createElement(y.a.Item,{label:"团队名称",name:"teamName",rules:[{required:!0,type:"string",max:20,message:"请输入团队名称"}]},i.a.createElement(v.a,null)),i.a.createElement(y.a.Item,{label:"钉钉通知地址",name:"dingtalkRobot",rules:[{required:!0,message:"请输入团队钉钉通知地址"}]},i.a.createElement(v.a,null))))}var x=Object(c.forwardRef)(P),C=n("/MKj"),R=n("m3XX");function A(e,t,n,r,a,u,o){try{var c=e[u](o),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function S(){var e=Object(f.f)(),t=Object(C.b)(),n=Object(d.b)("teamListFetch",s.h,{initialData:[],revalidateOnMount:!0}),p=n.data,y=n.mutate,v=Object(c.useRef)(null),h=Object(C.c)((function(e){return e.global.currentTeamId})),g=Object(C.c)((function(e){return e.global.currentUser})),O=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.f)(n);case 2:r=e.sent,o.b.success(r.message),t({type:R.b,payload:n}),y();case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function o(e){A(u,r,a,o,c,"next",e)}function c(e){A(u,r,a,o,c,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}(),j=[{title:"团队名",render:function(t){return i.a.createElement(u.a,{type:"link",onClick:function(){return e.push("/team/".concat(t.teamId))}},t.teamName)}},{title:"我的角色",dataIndex:"role",key:"role",render:function(e){return i.a.createElement(a.a,null,m.o[e])}},{title:"成员数",dataIndex:"memberCount",key:"memberCount"},{title:"项目数",dataIndex:"projectCount",key:"projectCount"},{title:"负责人",dataIndex:"ownerName",key:"ownerName"},{title:"创建时间",dataIndex:"createdAt",key:"createdAt",render:function(e){return i.a.createElement("div",null,Object(b.d)(e))}},{title:"操作",render:function(e,t){return h===t.teamId?i.a.createElement(u.a,{disabled:!0},"当前团队"):i.a.createElement(u.a,{type:"primary",onClick:function(){O(t.teamId)}},"切换团队")}}];return i.a.createElement(l.a,{title:"团队列表",rightRender:function(){return g.isAdmin&&i.a.createElement(u.a,{type:"link",onClick:function(){return v.current.showModal(!0)}},"创建团队")}},i.a.createElement(x,{ref:v,fetchData:y}),i.a.createElement(r.a,{bordered:!0,columns:j,rowKey:"teamId",dataSource:p,pagination:{hideOnSinglePage:!0}}))}},PNle:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"f",(function(){return u})),n.d(t,"i",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"j",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return m})),n.d(t,"e",(function(){return d}));var r=n("tPa5"),a=function(){return r.b.get("/team/list")},u=function(e){return r.b.put("/user/selected/teamId/".concat(e))},o=function(e){return r.b.get("/team/user/list/teamId/".concat(e))},c=function(e){return r.b.delete("/team/user",{data:e})},i=function(e){return r.b.get("/team/teamId/".concat(e))},l=function(e){return r.b.get("/user/search",{data:e})},f=function(e){return r.b.post("/team/users",e)},s=function(e,t){return r.b.put("/team/teamId/".concat(e),t)},m=function(e){return r.b.post("/team",e)},d=function(e){return r.b.put("/team/user/role",e)}}}]);
//# sourceMappingURL=team.18521b89.chunk.js.map