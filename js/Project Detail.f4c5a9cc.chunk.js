(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5/6w":function(e,t,r){"use strict";r.r(t);var n,a=r("BMrR"),o=r("kPKH"),c=r("q1tI"),i=r.n(c),u=r("Ty5D"),l=r("/MKj"),s=r("rfrl"),f="项目基本详情",m="拉取项目基本详情",p="get project source map",d="fetch project source map",b="get menber",y=(Object(s.a)((function(e,t){var r=t.type,n=t.payload;switch(r){case f:e.detail=n;break;case p:e.detailSourceMap=n;break;case b:e.detailMemberList=n;break;default:return e}}),{detail:{apiKey:"",frame:"",id:0,platform:"",memberNum:0,name:"",ownerId:0,ownerName:"",role:0,teamId:0,updateAt:0,members:[],createAt:0},detailSourceMap:[],detailMemberList:[],projectList:[]}),r("5rFJ")),v=r("szSY"),h=r("fWk0");function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=(g(n={},d,regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.b)(h.h,t.payload);case 2:return r=e.sent,e.next=5,Object(y.e)({type:p,payload:r});case 5:case"end":return e.stop()}}),e)}))),g(n,"创建sourcemap",regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.b)(h.a,t.payload);case 2:case"end":return e.stop()}}),e)}))),n),j=(Object(v.j)(O),r("bx4M")),w=r("wCAj"),E=r("3S7+"),S=r("zeV3"),x=r("NJEC"),k=r("2/Rp"),I=r("Sdc0"),P=r("mr32"),A=r("tsqr"),C=r("xw9R"),R=r("r/QG"),T=r("kLXV"),N=r("aJyg"),M=r("LvDl"),F=r.n(M);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function V(e){var t=e.leftColumns,r=e.rightColumns,n=L(e,["leftColumns","rightColumns"]);return i.a.createElement(N.a,D({},n,{showSelectAll:!1}),(function(e){var n=e.direction,a=e.filteredItems,o=e.onItemSelectAll,c=e.onItemSelect,u=e.selectedKeys,l=e.disabled,s="left"===n?t:r,f={getCheckboxProps:function(e){return{disabled:l||e.disabled}},onSelectAll:function(e,t){var r=t.filter((function(e){return!e.disabled})).map((function(e){return e.key})),n=e?F.a.difference(r,u):F.a.difference(u,r);o(n,e)},onSelect:function(e,t){var r=e.key;c(r,t)},selectedRowKeys:u};return i.a.createElement(w.a,{rowSelection:f,columns:s,dataSource:a,size:"small",style:{pointerEvents:l?"none":null},onRow:function(e){var t=e.key,r=e.disabled;return{onClick:function(){r||l||c(t,!u.includes(t))}}}})}))}function K(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||G(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function J(e,t,r,n,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function $(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){J(o,n,a,c,i,"next",e)}function i(e){J(o,n,a,c,i,"throw",e)}c(void 0)}))}}function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||G(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){if(e){if("string"==typeof e)return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?W(e,t):void 0}}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function X(e){var t=e.modalVisible,r=e.detail,n=e.currentMember,a=e.setUpdate,o=Y(t,2),l=o[0],s=o[1],f=Y(Object(c.useState)([]),2),m=f[0],p=f[1],d=Y(Object(c.useState)([]),2),b=d[0],y=d[1],v=Y(Object(c.useState)([]),2),g=v[0],O=v[1],j=Y(Object(c.useState)([]),2),w=j[0],E=(j[1],Y(Object(c.useState)(w),2)),S=E[0],x=E[1],k=Y(Object(c.useState)(!1),2),I=k[0],C=(k[1],Y(Object(c.useState)(!1),2)),N=C[0],M=(C[1],Object(u.h)().id),D=Number(M),L=n.map((function(e){return e.userId}));Object(c.useEffect)((function(){x(L)}),[n]),Object(c.useEffect)((function(){(function(){var e=$(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.teamId){e.next=5;break}return e.next=3,Object(h.i)(r.teamId);case 3:t=e.sent,p(t.map((function(e){return q(q({},e),{},{key:e.userId})})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r.teamId]);var U=[{dataIndex:"userName",title:"用户人",render:function(e,t){return i.a.createElement("span",null,t.userName?t.userName:t.isMe?"(You)":"")}},{dataIndex:"email",title:"邮箱📮"},{dataIndex:"role",title:"团队角色",render:function(e){return i.a.createElement(P.a,null,R.o[e])}}],z=function(){var e=$(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.n)({projectId:D,deleteUserIds:F.a.without.apply(F.a,[g].concat(K(w))),addUserIds:F.a.without.apply(F.a,[b].concat(K(L)))});case 2:t=e.sent,A.b.success(t.message),s(!1),a((function(e){return!e}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=$(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"left"==r?(y(F.a.without.apply(F.a,[b].concat(K(n)))),O(F.a.uniq([].concat(K(g),K(n))))):(y(F.a.uniq([].concat(K(b),K(n)))),O(F.a.without.apply(F.a,[g].concat(K(n))))),x(t);case 2:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();return i.a.createElement(T.a,{title:"更新成员",centered:!0,visible:l,onOk:z,onCancel:function(){return s(!1)},width:1e3},i.a.createElement(V,{dataSource:m||[],targetKeys:S,disabled:I,showSearch:N,onChange:J,filterOption:function(e,t){return-1!==t.title.indexOf(e)||-1!==t.tag.indexOf(e)},leftColumns:U,rightColumns:[{dataIndex:"userName",title:"用户人"}]}))}var _=r("yT8E");function B(e,t,r,n,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function H(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){B(o,n,a,c,i,"next",e)}function i(e){B(o,n,a,c,i,"throw",e)}c(void 0)}))}}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ee(e){var t=e.detail,r=Object(u.h)().id,n=Number(r),a=Object(c.useRef)(null),o=Q(Object(c.useState)([]),2),l=o[0],s=o[1],f=Q(Object(c.useState)(0),2),m=f[0],p=f[1],d=Q(Object(c.useState)({}),2),b=d[0],y=d[1],v=Q(Object(c.useState)(!1),2),g=v[0],O=v[1],T=Object(c.useState)(!1),N=function(){var e=H(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.g)(n);case 2:t=e.sent,s(t),(r=t.find((function(e){return e.isMe})))&&p(r.role);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){N()}),[g]);var M=function(){var e=H(regeneratorRuntime.mark((function e(t,r){var a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={projectId:n,notify:Number(t),userId:r.userId},e.next=3,Object(h.j)(a);case 3:o=e.sent,A.b.success(o);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),F=function(){var e=H(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.b)({userId:t,projectId:n});case 2:r=e.sent,A.b.success(r),N();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=[{title:"姓名",dataIndex:"userName"},{title:"邮箱",dataIndex:"email"},{title:"角色",render:function(e){return i.a.createElement(P.a,null,R.k[e.role])}},{title:"消息通知",render:function(e){return i.a.createElement(I.a,{onChange:function(t){return M(t,e)},defaultChecked:!!e.notify})}},{title:"操作",render:function(e){var t=m<e.role?i.a.createElement(S.b,{size:"middle"},i.a.createElement(k.a,{onClick:function(){return y(e),void a.current.showModal(!0)}},"更改角色"),i.a.createElement(x.a,{onConfirm:function(){return F(e.userId)},title:'确定将"'.concat(e.userName,'"移出该项目吗？'),okText:"移出",cancelText:"取消"},i.a.createElement(k.a,{danger:!0},"移出"))):"",r=1===e.role?i.a.createElement(E.a,{title:"你是project leader，请先指派另一位成员为project leader"},i.a.createElement(k.a,{disabled:!0,danger:!0},"退出项目")):i.a.createElement(S.b,{size:"middle"},i.a.createElement(x.a,{onConfirm:function(){return F(e.userId)},title:"确定要推出该项目吗？",okText:"退出项目",cancelText:"取消"},i.a.createElement(k.a,{type:"link",danger:!0},"退出项目")));return e.isMe?r:t}}];return i.a.createElement(j.a,{extra:i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:C.editable,onClick:function(){return T[1](!0)}},"添加")),className:C.card,title:"项目成员"},i.a.createElement(_.a,{ref:a,params:{projectId:n,userId:b.userId},putRoleFetch:h.m,meRole:m,fetchData:N,isTeam:!0,curUserInfo:b}),i.a.createElement(X,{modalVisible:T,detail:t,currentMember:l,setUpdate:O}),i.a.createElement(w.a,{dataSource:l,pagination:!1,rowKey:"userId",columns:D}))}var te=r("5rEg"),re=r("wFql"),ne=r("afGv"),ae=r("8z0m"),oe=r("LtfV");function ce(e,t,r,n,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ue(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var le=ae.a.Dragger,se=function(e){var t=ie(Object(c.useState)(!1),2),r=t[0],n=t[1],a=ie(Object(c.useState)([]),2),o=a[0],u=a[1],l=i.a.cloneElement(e.trigger,{onClick:function(){n(!0),u([])}}),s={name:"file",method:"POST",withCredentials:!0,headers:{"X-Requested-With":null},fileList:o,action:"//apigw.@url.com/api/spider-fileupload/1.0/upload",onChange:function(e){u(e.fileList)}},f=function(){var t,r=(t=regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((r=o.filter((function(e){return"done"===e.status}))).length>0)){t.next=5;break}if("function"!=typeof e.onConfirm){t.next=5;break}return t.next=5,e.onConfirm(r.map((function(e){return e.response.result})));case 5:n(!1);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function c(e){ce(o,n,a,c,i,"next",e)}function i(e){ce(o,n,a,c,i,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,l,i.a.createElement(T.a,{title:"上传source map",onCancel:function(){return n(!1)},onOk:f,visible:r},i.a.createElement(le,s,i.a.createElement("p",{className:"ant-upload-drag-icon"},i.a.createElement(oe.a,null)),i.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),i.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"))))},fe=r("RCxd"),me=r("0lfv");function pe(e,t,r,n,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function de(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return be(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ye=re.a.Text,ve=[{title:"文件名",dataIndex:"fileName",ellipsis:!0},{title:"文件地址",dataIndex:"url",render:function(e){return i.a.createElement("div",{style:{wordWrap:"break-word",wordBreak:"break-word"}},e)},width:600},{title:"上传时间",dataIndex:"createdAt",render:function(e){return Object(me.d)(new Date(e).getTime())}}],he=function(){var e=Object(u.h)().id,t=de(Object(c.useState)([]),2),r=t[0],n=t[1],a=de(Object(c.useState)(""),2),o=a[0],l=a[1],s=de(Object(c.useState)([]),2),f=s[0],m=s[1],p=function(){Object(h.h)({projectId:+e,fileName:o}).then((function(e){n(e)}))};Object(c.useEffect)((function(){p()}),[o]);return i.a.createElement(j.a,{extra:i.a.createElement(i.a.Fragment,null,f.length>0&&i.a.createElement("span",{onClick:function(){var t,r;T.a.confirm({icon:i.a.createElement(fe.a,null),content:"确定删除soucemap？",onOk:(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.c)({ids:f,projectId:+e});case 2:return A.b.success("删除成功"),t.next=5,p();case 5:case"end":return t.stop()}}),t)})),r=function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function c(e){pe(o,n,a,c,i,"next",e)}function i(e){pe(o,n,a,c,i,"throw",e)}c(void 0)}))},function(){return r.apply(this,arguments)})})}},i.a.createElement(ye,{className:ne.delete,type:"danger"},"删除")),i.a.createElement(se,{onConfirm:function(t){return Object(h.a)({items:t.map((function(e){return{fileName:e.fileName,url:e.fullPath}})),projectId:+e}).then((function(){A.b.success("上传成功！"),p()}))},trigger:i.a.createElement("span",{className:ne.editable},"上传Source Map")})),className:ne.card,bordered:!1,title:"sourceMap"},i.a.createElement(te.a,{onKeyDown:function(e){13===e.keyCode&&l(e.currentTarget.value)},className:ne.searchInput,placeholder:"根据文件名搜索"}),i.a.createElement(w.a,{rowSelection:{type:"checkbox",onChange:function(e){m(e)}},pagination:!1,rowKey:"id",columns:ve,dataSource:r}))},ge=r("UXYc"),Oe=r("vOnD"),je=r("Vl3Y"),we=r("2fM7");function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function xe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(r),!0).forEach((function(t){ke(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ke(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ie(e,t,r,n,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function Pe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Ce=we.a.Option,Re={labelCol:{span:4},wrapperCol:{span:20}},Te=Object.entries(R.s).map((function(e){var t=Pe(e,2),r=t[0],n=t[1];return{value:Number(r),label:n}})),Ne=function(e){var t=Pe(Object(c.useState)(!1),2),r=t[0],n=t[1],a=Pe(je.a.useForm(),1)[0],o=e.projectName,u=e.platform,l=e.git,s=e.projectId,f=e.fetchTable,m=function(){return n(!0)},p=function(){return n(!1)},d=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.validateFields();case 2:return t=a.getFieldsValue(),e.next=5,Object(h.l)(s,t);case 5:r=e.sent,A.b.success(r.message),f(),p();case 9:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){Ie(o,n,a,c,i,"next",e)}function i(e){Ie(o,n,a,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}(),b=i.a.createElement("span",{onClick:m},"修改"),y=i.a.isValidElement(e.trigger)?i.a.cloneElement(e.trigger,xe(xe({},e.trigger.props),{},{onClick:m})):b;return i.a.createElement(i.a.Fragment,null,y,i.a.createElement(T.a,{onCancel:p,onOk:d,visible:r,title:"修改基本信息",okText:"确认",cancelText:"取消"},i.a.createElement(je.a,Ee({form:a,initialValues:{projectName:o,platform:u,git:l}},Re,{name:"edit-basic"}),i.a.createElement(je.a.Item,{label:"项目名称",name:"projectName",rules:[{required:!0,message:"请输入项目名称"}]},i.a.createElement(te.a,{placeholder:"请输入"})),i.a.createElement(je.a.Item,{label:"git地址",name:"git",rules:[{required:!0,message:"请输入git地址"}]},i.a.createElement(te.a,{placeholder:"请输入项目git地址"})),i.a.createElement(je.a.Item,{label:"平台",name:"platform"},i.a.createElement(we.a,{style:{width:120}},Te.map((function(e){return i.a.createElement(Ce,{key:e.value,value:e.value},e.label)})))))))};Ne.defaultProps={visible:!1,name:"",platform:""};var Me=Ne,Fe=r("G3dp"),De=r("kOIZ"),Le=r("KrTs");function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(r),!0).forEach((function(t){qe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function qe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ze(e,t,r,n,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function Je(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){ze(o,n,a,c,i,"next",e)}function i(e){ze(o,n,a,c,i,"throw",e)}c(void 0)}))}}function $e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ye(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ye(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ge(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  border-right: 1px solid rgba(0, 0, 0, 0.06);\n"]);return Ge=function(){return e},e}var We=we.a.Option,Xe=je.a.Item,_e="",Be=Object(Oe.b)(o.a)(Ge());function He(e,t){var r=$e(Object(c.useState)(!1),2),n=r[0],u=r[1],l=$e(Object(c.useState)([]),2),s=l[0],f=l[1],m=Object(c.useRef)([]),p=$e(je.a.useForm(),1)[0],d=e.errorLevelConfig,b=e.callback,y=function(e){return u(e)};Object(c.useEffect)((function(){Array.isArray(null==d?void 0:d.config)&&d.config.length>0&&n&&(m.current=d.config,f(m.current),p.setFieldsValue({errorType:d.config[0].type,levels:d.config[0].data,isEvent:d.isEvent}),_e=d.config[0].type)}),[e.errorLevelConfig,n]);var v=function(){var e=Je(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.validateFields();case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),A.b.warning("请检查错误等级数量间的大小！"),e.abrupt("return");case 9:return m.current.find((function(e){return e.type===_e})).data=p.getFieldsValue().levels.map((function(e){return Ue(Ue({},e),{},{value:Number(e.value)})})),e.next=12,b({isEvent:p.getFieldValue("isEvent"),config:m.current});case 12:y(!1);case 13:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Je(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.validateFields();case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),p.setFieldsValue({errorType:_e}),e.abrupt("return");case 9:m.current.find((function(e){return e.type===_e})).data=p.getFieldsValue().levels.map((function(e){return Ue(Ue({},e),{},{value:Number(e.value)})})),f(JSON.parse(JSON.stringify(m.current))),p.setFieldsValue({levels:m.current.find((function(e){return e.type===t})).data}),_e=t;case 13:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useImperativeHandle)(t,(function(){return{showModal:y}}));return i.a.createElement(T.a,{onCancel:function(){p.resetFields(),y(!1)},onOk:v,width:1e3,visible:n,title:"错误等级配置",okText:"确认",cancelText:"取消",maskClosable:!1},i.a.createElement(a.a,null,i.a.createElement(Be,{span:12},i.a.createElement(je.a,Ve({form:p,labelAlign:"right"},{labelCol:{span:4},wrapperCol:{span:18}}),i.a.createElement(Xe,{label:"错误类型",name:"errorType"},i.a.createElement(we.a,{onChange:function(e){return h(e)}},Array.isArray(m.current)&&m.current.map((function(e){return i.a.createElement(We,{value:e.type,key:e.type},e.type)})))),i.a.createElement(je.a.List,{name:"levels"},(function(e,t){t.add,t.remove;return i.a.createElement(i.a.Fragment,null,e.map((function(e,t){return i.a.createElement("div",{key:e.key},i.a.createElement(Xe,{name:[e.fieldKey,"value"],rules:[{required:!0,message:"请输入错误等级对应数量"},function(e){var r=e.getFieldValue;return{validator:function(e,n){if(0===t)return Promise.resolve();var a=r("levels")[t-1].value;return n&&Number(n)>Number(a)?Promise.reject("当前等级数量需要比上一级小"):Promise.resolve()}}}],key:e.key,label:"P".concat(t+1)},i.a.createElement(te.a,{type:"number"})))})))})),i.a.createElement(Xe,{valuePropName:"checked",label:"等级划分",name:"isEvent"},i.a.createElement(I.a,{checkedChildren:"事件数",unCheckedChildren:"用户数"})))),i.a.createElement(o.a,{span:12},i.a.createElement(Qe,{errorLevelArr:s}))))}function Qe(e){return i.a.createElement("div",null,e.errorLevelArr.map((function(e){return i.a.createElement(a.a,{key:e.type,gutter:[10,10]},i.a.createElement(o.a,{span:8,style:{textAlign:"right"}},e.type),e.data.map((function(e){return i.a.createElement(o.a,{key:e.level},i.a.createElement(Le.a,{status:"processing",color:R.f[e.level]||"gray"}),"P",e.level,":",e.value)})))})))}var Ze=Object(c.forwardRef)(He);function et(e,t,r,n,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function tt(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  color: #1890ff;\n  margin-left: 8px;\n  cursor: pointer;\n"]);return tt=function(){return e},e}re.a.Text,re.a.Link;var rt=re.a.Paragraph,nt=Oe.b.span(tt());function at(e){var t=e.detail,r=e.fetchProjectInfo,n=Object(c.useRef)(null),u=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.k)(t.projectId,n);case 2:a=e.sent,A.b.success(a.message),r();case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){et(o,n,a,c,i,"next",e)}function i(e){et(o,n,a,c,i,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}();return i.a.createElement(ge.a,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,"基本信息"),i.a.createElement(Me,{trigger:i.a.createElement(nt,null,i.a.createElement(Fe.a,null)),git:t.git,projectId:t.projectId,platform:t.platform,projectName:t.name,fetchTable:r}))},i.a.createElement(a.a,{gutter:[0,8]},i.a.createElement(o.a,{span:8},"项目名称：",i.a.createElement("a",{href:t.git,target:"_blank",rel:"noreferrer"},t.name)),i.a.createElement(o.a,{span:8},"语言：",R.s[t.platform]),i.a.createElement(o.a,{span:8},"成员个数：",t.memberCount),i.a.createElement(o.a,{span:8},"创建时间：",Object(me.d)(t.createdAt)),i.a.createElement(o.a,{span:8},"更新时间：",Object(me.d)(t.updatedAt)),i.a.createElement(o.a,{span:8},"错误等级配置：",i.a.createElement(k.a,{type:"link",onClick:function(){return n.current.showModal(!0)}},"点击配置"),i.a.createElement(Ze,{ref:n,callback:u,errorLevelConfig:t.errorLevelConfig})),i.a.createElement(o.a,{span:24},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("span",null,"script:"),i.a.createElement(rt,{code:!0,copyable:!0},Object(De.a)(t.apikey))))))}function ot(e,t,r,n,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function ct(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return it(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return it(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function it(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=Object(u.h)(),t=e.id,r=ct(Object(c.useState)({}),2),n=r[0],s=r[1],f=Object(l.b)(),p=function(){var e,r=(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.f)(Number(t));case 2:r=e.sent,s(r);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){ot(o,n,a,c,i,"next",e)}function i(e){ot(o,n,a,c,i,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return Object(c.useEffect)((function(){p()}),[]),Object(c.useEffect)((function(){f({type:m,payload:{projectId:e.id}})}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{gutter:[20,20]},i.a.createElement(o.a,{span:24},i.a.createElement(at,{detail:n,fetchProjectInfo:p}))),i.a.createElement(a.a,{gutter:[20,20]},i.a.createElement(o.a,{span:24},i.a.createElement(ee,{detail:n}))),i.a.createElement(a.a,{gutter:[20,20]},i.a.createElement(o.a,{span:24},i.a.createElement(he,null))))}},afGv:function(e,t,r){e.exports={"detail-layout":"detail-layout--3v0Lg0",detailLayout:"detail-layout--3v0Lg0",edit:"edit--2vomQk",editable:"editable--3au294",card:"card--DCqoPj",column:"column--3U_iYu","search-input":"search-input--3L-sTE",searchInput:"search-input--3L-sTE",delete:"delete--2Ib2bT"}},kOIZ:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c}));var n=r("LeJ0"),a=r("0lfv");function o(e){return'\n  // 将以下脚本放入header标签中\n  <script src="'.concat(n.a.sdkCdn,'" apikey="').concat(e,'" customTag="" crossorigin="anonymous"><\/script>\n  ').concat('<script src="https://static.@url.com/f2e/mito/mitoRRweb.min.js" defer="defer" crossorigin="anonymous"><\/script>',"\n  ")}function c(e){var t=n.a.wxMitoSDK.split("/").pop();return Object(a.c)(n.a.wxMitoSDK,t),"//原生小程序\nimport * as MITO from './".concat(t,"';\n// 需要将文件的下载移到对应路径\n  MITO.init({\n  apikey: '").concat(e,"',\n  trackKey: '',\n  // 预定义的枚举值，去接入指南查看对应项目枚举值\n  appId: ''\n});\n\n// uni-app main.js\n// 需要将文件的下载移到对应路径\nimport * as MITO from './").concat(t,"';\nimport Vue from 'vue';\n\nMITO.init({\n  apikey: '").concat(e,"',\n  trackKey: '',\n  // 预定义的枚举值，去接入指南查看对应项目枚举值\n  appId: ''\n});\nVue.use(MITO.MitoVue);")}},xw9R:function(e,t,r){e.exports={card:"card--2MWvio",editable:"editable--Y5gl_6"}}}]);
//# sourceMappingURL=Project Detail.f4c5a9cc.chunk.js.map