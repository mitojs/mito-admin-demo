(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{NAIt:function(e,t,r){e.exports={TableWithHeader:"TableWithHeader--3JLPog",tableWithHeader:"TableWithHeader--3JLPog",header:"header--1T63AP"}},VobO:function(e,t,r){"use strict";r.d(t,"a",(function(){return V}));var n=r("2/Rp"),a=r("KrTs"),c=r("BMrR"),o=r("kPKH"),i=r("3S7+"),l=r("tsqr"),u=r("q1tI"),s=r.n(u),f=r("ngIt"),d=r("vlmH"),m=r("r/QG"),p=r("0lfv"),v=r("11+a"),b=r("8u7/"),g=r("Drea"),h=r("rqof"),y=r("wCAj"),j=r("NAIt"),E=r("vOnD");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  .ant-table-container {\n  }\n"]);return w=function(){return e},e}var I=Object(E.b)(y.a)(w()),x=function(e){return s.a.createElement("div",{className:j.TableWithHeader},s.a.createElement("div",{className:j.header},e.children),s.a.createElement(I,O({bordered:!0},e)))},S=r("+/Az"),k=r("ITV3"),P=r("wLGw"),A=r("G7kx"),C=r("AfVi");function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e,t,r,n,a,c,o){try{var i=e[c](o),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,a)}function H(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var c=e.apply(t,r);function o(e){D(c,n,a,o,i,"next",e)}function i(e){D(c,n,a,o,i,"throw",e)}o(void 0)}))}}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function K(){var e=W(["\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  padding: 0 10px;\n"]);return K=function(){return e},e}function L(){var e=W(["\n  display: flex;\n  align-items: center;\n"]);return L=function(){return e},e}function W(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var J=E.b.div(L()),U=E.b.div(K()),G=Object.entries(m.g).map((function(e){var t=T(e,2),r=t[0];return{text:t[1],value:r}}));function V(e){var t=T(Object(u.useState)([]),2),r=t[0],y=t[1],j=T(Object(u.useState)([]),2),E=j[0],O=j[1],w=T(Object(u.useState)(!0),2),I=w[0],N=w[1],z=T(Object(u.useState)(!0),2),D=z[0],q=z[1],K=T(Object(u.useState)(!0),2),L=K[0],W=K[1],V=T(Object(u.useState)(!0),2),B=V[0],M=V[1],Q=Object(u.useRef)(null);function $(){O([]),N(!0),q(!0),W(!0)}var _=function(){var t=H(regeneratorRuntime.mark((function t(){var r,n,a,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:[],n=c.length>1?c[1]:void 0,t.next=4,Object(S.a)({items:r,isCollect:n});case 4:a=t.sent,l.b.success(a.message),e.fetchData(),$();case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=[{title:function(){return s.a.createElement("div",{className:f.header},s.a.createElement("div",{className:f.title},"错误信息"))},key:"action",width:600,fixed:"left",render:function(e){return s.a.createElement("div",{className:f.project},s.a.createElement("div",{className:f.error,onClick:function(){return Object(p.j)(e.errorId)}},s.a.createElement("div",{className:f.url},e.url),s.a.createElement("div",{className:f.message},e.message),s.a.createElement("div",{className:f.timec},s.a.createElement(v.a,{style:{fontSize:16,color:m.n.blue,marginRight:8}}),s.a.createElement("span",{className:f.time},Object(p.d)(e.createdAt)," ~ ",Object(p.d)(e.updatedAt)),"[]"!==e.ossUrls&&s.a.createElement(i.a,{title:"存在录制回放"},s.a.createElement("div",{style:{height:"20px",marginLeft:"2px"}},s.a.createElement(d.a,{icon:"record"}))))),s.a.createElement(c.a,null,s.a.createElement(o.a,{flex:"auto"},s.a.createElement(J,null,s.a.createElement(k.a,{platform:e.platform,projectName:e.projectName}),s.a.createElement(C.a,{errorId:e.errorId,remark:e.remark}))),s.a.createElement(o.a,{flex:"200px"},s.a.createElement(J,{style:{justifyContent:"flex-end"}},s.a.createElement(i.a,{title:"收藏"},s.a.createElement("div",{style:{marginRight:"10px"}},s.a.createElement(h.a,{status:e.isCollect,size:24,onClick:function(){return _([{errorId:e.errorId,projectId:e.projectId}],!e.isCollect)}}))),s.a.createElement(P.a,{row:e})))))}},{title:"错误类型",dataIndex:"type",key:"type",width:140,render:function(e){return s.a.createElement("span",null,e)}},{title:"错误状态",dataIndex:"status",width:120,key:"status",filters:G,render:function(e){return s.a.createElement("span",null,s.a.createElement(a.a,{status:m.h[e]}),m.g[e])}},{title:"等级",dataIndex:"level",width:120,sorter:!0,key:"level",render:function(e){return s.a.createElement("span",null,s.a.createElement(a.a,{color:m.f[e],status:"processing"}),m.e[e])}},{title:"事件数",dataIndex:"eventSum",width:100,key:"eventSum",sorter:!0},{title:"用户数",dataIndex:"trackerSum",width:100,key:"trackerSum",sorter:!0}];Object(u.useEffect)((function(){var e=0===r.length,t=!!e||r.some((function(e){return[m.d.solved,m.d.solving].includes(e.status)})),n=!!e,a=!!e||r.some((function(e){return[m.d.solving,m.d.ignored].includes(e.status)}));N(t),q(n),W(a)}),[r]);var X={selectedRowKeys:E,onChange:function(e,t){console.log("selectedRowKeys",e),console.log("selectedRows",t),O(e),y(t)},onSelectAll:function(e,t,r){y(t)}},Y=function(){var t=H(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:$();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Z=function(){var t=!B;t?Q.current=setInterval((function(){console.log("setInterval"),e.fetchData({},!1)}),m.i):(console.log("clearInterval",Q.current),clearInterval(Q.current)),M(t)},ee=function(){return s.a.createElement(n.a,{onClick:Z,icon:B?s.a.createElement(b.a,null):s.a.createElement(g.a,null)},B?"暂停实时更新":"启用实时更新")};return s.a.createElement(x,{pagination:R(R({},e.pagination),{},{showTotal:function(e){return"共 ".concat(e," 条")},showSizeChanger:!0}),loading:e.loading,scroll:{x:1e3},rowKey:"errorId",columns:F,rowSelection:X,dataSource:e.tableData,onChange:e.onChange},s.a.createElement(A.c,{disabled:I,items:r,successUpdated:Y}),s.a.createElement(n.a,{disabled:D,onClick:function(){return _(r.map((function(e){return{errorId:e.errorId,projectId:e.projectId}})),!0)},icon:s.a.createElement(d.a,{icon:"fillstar",type:m.j.irregular,size:15}),style:{marginRight:10}},"收藏"),s.a.createElement(A.a,{disabled:L,items:r,successUpdated:Y}),s.a.createElement(U,null,s.a.createElement(ee,null)))}},ngIt:function(e,t,r){e.exports={project:"project--1b5Rr4",error:"error--m5b5EB",url:"url--3p7wA_",message:"message--hwq-0m",timec:"timec--3yqISc",time:"time--2Q90mL",info:"info--2Hgdjr",fav:"fav--32hz4H"}}}]);
//# sourceMappingURL=Errors~collect.597b4c14.chunk.js.map