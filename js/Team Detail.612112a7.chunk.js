(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JpGk:function(e,t,r){e.exports={teamManagement:"teamManagement--3lpsKP"}},LrL6:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return te}));var n=r("BMrR"),a=r("wCAj"),o=r("kPKH"),u=r("3S7+"),i=r("zeV3"),c=r("NJEC"),l=r("2/Rp"),s=r("mr32"),f=r("tsqr"),m=r("q1tI"),d=r.n(m),p=r("JpGk"),b=r("UXYc"),v=r("Xp2A"),y=r("yaNz");function h(e){var t=e.height,r=e.children;return d.a.createElement("div",{className:y.HoverCard,style:{height:t?"".concat(t,"px"):""}},r)}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function O(e){var t=e.title,r=e.text,n=e.btnTxt,a=e.btnCb,o=g(e,["title","text","btnTxt","btnCb"]);return d.a.createElement(h,o,d.a.createElement("div",{className:v.editWrapper},d.a.createElement("span",{style:{fontWeight:500,fontSize:"14px"}},t),d.a.createElement("div",{className:v.content},d.a.createElement("span",{className:v.txt},r),n&&d.a.createElement(l.a,{className:v.btn,type:"link",onClick:function(e){return a(e)}},n))))}var j=r("PNle"),w=r("Ty5D"),E=r("r/QG"),x=r("kLXV"),k=r("2fM7"),I=r("sEfC"),S=r.n(I);function A(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function P(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){A(o,n,a,u,i,"next",e)}function i(e){A(o,n,a,u,i,"throw",e)}u(void 0)}))}}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N=k.a.Option;function T(e){var t=e.visible,r=e.close,a=e.getTeamUserList,u=Object(w.h)().id,i=Number(u),c=R(Object(m.useState)([]),2),l=c[0],s=c[1],p=R(Object(m.useState)([]),2),b=p[0],v=p[1],y=function(){var e=P(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)({teamId:i,userIds:b.map((function(e){return e.value}))});case 2:t=e.sent,f.b.success(t.message),a(),r();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=P(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.j)({fuzzyName:t});case 2:r=e.sent,s(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=S()(h,400);return d.a.createElement(x.a,{title:"添加新成员",okButtonProps:{disabled:0===b.length},onOk:y,onCancel:function(){r()},visible:t,okText:"添加"},d.a.createElement("div",null,d.a.createElement(n.a,null,d.a.createElement(o.a,{span:24},d.a.createElement(k.a,{size:"large",mode:"multiple",labelInValue:!0,value:b,optionLabelProp:"label",allowClear:!0,placeholder:"请输入用户名或者email",filterOption:!1,onSearch:g,onChange:function(e,t){v(e)},style:{width:"100%"}},l.map((function(e){return d.a.createElement(N,{key:e.userId,value:e.userId,label:e.name},e.name," ",e.email," ",e.mobile)})))))))}var M=r("VtrM"),z=r("0lfv"),D=r("Vl3Y"),H=r("5rEg");function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){J(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function X(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){W(o,n,a,u,i,"next",e)}function i(e){W(o,n,a,u,i,"throw",e)}u(void 0)}))}}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(e,t){var r=e.teamName,n=e.teamId,a=e.dingtalkRobot,o=e.fetchData,u=Object(m.useRef)(null),i=q(Object(m.useState)(!1),2),c=i[0],l=i[1],s=function(){var e=X(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.current.submit();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=X(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)(n,V({},t));case 2:r=e.sent,f.b.success(r.message),l(!1),o();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){return l(e)};Object(m.useImperativeHandle)(t,(function(){return{showModal:b}}));return d.a.createElement(x.a,{onCancel:function(){u.current.resetFields(),b(!1)},onOk:s,visible:c,title:"编辑团队信息",okText:"确认",cancelText:"取消"},d.a.createElement(D.a,L({ref:u,onFinish:p,labelAlign:"right"},{labelCol:{span:6},wrapperCol:{span:18}},{initialValues:{teamName:r,dingtalkRobot:a},name:"edit-basic"}),d.a.createElement(D.a.Item,{label:"团队名称",name:"teamName",rules:[{required:!0,type:"string",max:20,message:"请输入团队名称"}]},d.a.createElement(H.a,null)),d.a.createElement(D.a.Item,{label:"钉钉通知地址",name:"dingtalkRobot",rules:[{required:!0,message:"请输入团队钉钉通知地址"}]},d.a.createElement(H.a,null))))}var G=Object(m.forwardRef)(F),Y=r("yT8E");function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function B(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function Q(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){B(o,n,a,u,i,"next",e)}function i(e){B(o,n,a,u,i,"throw",e)}u(void 0)}))}}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ee=[{height:70,title:"团队名称",text:"横向中台小组"},{height:70,title:"钉钉通知地址",text:"dingtalk：~~"},{height:70,title:"更新时间",text:"2020-09-01 12:12:00"},{height:70,title:"创建时间",text:"2020-09-01 12:12:00"}];function te(){var e=Object(w.h)().id,t=Number(e),r=Object(m.useRef)(null),v=Object(m.useRef)(null),y=Z(Object(m.useState)(!1),2),h=y[0],g=y[1],x=Z(Object(m.useState)(ee),2),k=x[0],I=x[1],S=Z(Object(m.useState)({}),2),A=S[0],P=S[1],R=Z(Object(m.useState)({}),2),C=R[0],N=R[1],D=Z(Object(m.useState)(0),2),H=D[0],L=D[1],U=Object(M.b)("getTeamUserList",(function(){return Object(j.i)(t)})),V=U.data,J=(U.error,U.mutate);Object(m.useEffect)((function(){if(Array.isArray(V)&&V.length>0){var e=V.find((function(e){return e.isMe}));e&&L(e.role)}}),[V]);var W=function(){var e=Q(regeneratorRuntime.mark((function e(){var r,n,a,o,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.g)(t);case 2:r=e.sent,n=r.teamName,a=r.dingtalkRobot,o=r.createdAt,u=r.updatedAt,k[0].text=n,k[1].text=a,k[2].text=Object(z.d)(u),k[3].text=Object(z.d)(o),I(k),P(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Q(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)({userId:r,teamId:t});case 2:n=e.sent,f.b.success(n.message),J();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){W()}),[]);var q=function(e){X(e)},K=[{title:"姓名",key:"userName",width:160,render:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.userName),e.isMe?d.a.createElement(s.a,{style:{marginLeft:"10px"},color:E.n.blue},"当前账号"):"")}},{title:"角色",dataIndex:"role",key:"role",render:function(e){return d.a.createElement(s.a,null,E.o[e])}},{title:"邮箱",dataIndex:"email",key:"email"},{title:"加入时间",key:"createdAt",dataIndex:"createdAt",render:function(e){return d.a.createElement("div",null,Object(z.d)(e))}},{title:"操作",key:"action",render:function(e,t){var r=H<t.role?d.a.createElement(i.b,{size:"middle"},d.a.createElement(l.a,{onClick:function(){return function(e){N(e),v.current.showModal(!0)}(t)}},"更改角色"),d.a.createElement(c.a,{onConfirm:function(){return q(t.userId)},title:'确定将"'.concat(t.userName,'"移出该团队吗？'),okText:"移出",cancelText:"取消"},d.a.createElement(l.a,{danger:!0},"移出"))):"",n=1===t.role?d.a.createElement(u.a,{title:"你是team leader，请先指派另一位成员为team leader"},d.a.createElement(l.a,{disabled:!0,danger:!0},"退出团队")):d.a.createElement(i.b,{size:"middle"},d.a.createElement(c.a,{onConfirm:function(){return q(t.userId)},title:"确定要推出该团队吗？",okText:"退出团队",cancelText:"取消"},d.a.createElement(l.a,{danger:!0},"退出团队")));return t.isMe?n:r}}];return d.a.createElement("div",{className:p.teamManagement},d.a.createElement(T,{visible:h,getTeamUserList:J,close:function(){return g(!1)}}),d.a.createElement(G,$({ref:r},A,{fetchData:W})),d.a.createElement(Y.a,{ref:v,params:{teamId:t,userId:C.userId},putRoleFetch:j.e,meRole:H,fetchData:J,isTeam:!0,curUserInfo:C}),d.a.createElement(n.a,null,d.a.createElement(o.a,{span:8,push:16},d.a.createElement(b.a,{title:"团队信息",btnTxt:"编辑团队信息",btnCb:function(){r.current.showModal(!0)}},k.map((function(e,t){var r=e.height,n=e.title,a=e.text;return d.a.createElement(O,{height:r,title:n,text:a,key:t})})))),d.a.createElement(o.a,{span:16,pull:8,style:{paddingRight:20}},d.a.createElement(b.a,{title:"团队成员列表",btnTxt:"添加新成员",btnCb:function(){g(!0)}},d.a.createElement(a.a,{bordered:!0,rowKey:"userId",columns:K,dataSource:V,pagination:{hideOnSinglePage:!0}})))))}},PNle:function(e,t,r){"use strict";r.d(t,"h",(function(){return a})),r.d(t,"f",(function(){return o})),r.d(t,"i",(function(){return u})),r.d(t,"c",(function(){return i})),r.d(t,"g",(function(){return c})),r.d(t,"j",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"d",(function(){return f})),r.d(t,"a",(function(){return m})),r.d(t,"e",(function(){return d}));var n=r("tPa5"),a=function(){return n.b.get("/team/list")},o=function(e){return n.b.put("/user/selected/teamId/".concat(e))},u=function(e){return n.b.get("/team/user/list/teamId/".concat(e))},i=function(e){return n.b.delete("/team/user",{data:e})},c=function(e){return n.b.get("/team/teamId/".concat(e))},l=function(e){return n.b.get("/user/search",{data:e})},s=function(e){return n.b.post("/team/users",e)},f=function(e,t){return n.b.put("/team/teamId/".concat(e),t)},m=function(e){return n.b.post("/team",e)},d=function(e){return n.b.put("/team/user/role",e)}},Xp2A:function(e,t,r){e.exports={editWrapper:"editWrapper--3NWMYk",content:"content--1gwko1",txt:"txt--hAv6XK"}},yaNz:function(e,t,r){e.exports={HoverCard:"HoverCard--21nrRH",hoverCard:"HoverCard--21nrRH"}}}]);
//# sourceMappingURL=Team Detail.612112a7.chunk.js.map