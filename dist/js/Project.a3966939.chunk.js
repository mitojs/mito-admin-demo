(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8HXl":function(e,t,r){"use strict";r.r(t);var a=r("NUBc"),n=r("2/Rp"),c=r("ECub"),o=r("BMrR"),l=r("kPKH"),i=r("/ezw"),u=r("q1tI"),s=r.n(u),p=r("vpYL"),m=r("bx4M"),f=r("Tckk"),d=r("3S7+"),v=r("2YWX"),E=r("NiVk"),b=r("Lyp1"),g=r("Ty5D"),j=r("r/QG"),h=r("vlmH"),y=r("yC50"),O=r("L7ld"),x=r("/MKj"),w=r("m3XX"),S=r("sGsY"),N=r("lF1m"),P=r("yEEn"),k=r("vOnD");function z(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  .ant-statistic-title {\n    margin: 0 0 0 6px;\n    line-height: 25px;\n  }\n"]);return z=function(){return e},e}var I=Object(k.b)(S.a)(z());function C(e){var t=e.rateNum,r=e.title,a=void 0===r?"":r,n=e.fontSize,c=void 0===n?"16px":n,o=t>0,l=o?j.n.red:j.n.green;return s.a.createElement("div",null,s.a.createElement(I,{title:a,value:t,precision:1,valueStyle:{color:l,fontSize:c},prefix:0!==t&&(o?s.a.createElement(N.a,null):s.a.createElement(P.a,null)),suffix:"%"}))}var H=r("qoU+");function D(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  font-weight: 500;\n  margin-left: 4px;\n  /* color: ","; */\n"]);return D=function(){return e},e}var R=k.b.span(D(),(function(e){return e.theme.colors.blue})),U=function(e){var t=e.project,r=Object(g.f)(),a=Object(x.b)(),c=function(e){a({type:w.a,payload:e})},o=Object(y.a)(t.errorSum),l=Object(y.a)(t.pvSum),i=Object(y.a)(t.uvSum),u=[{name:"PV",data:t.chart.pvYesterday.map((function(e){return e.count}))},{name:"UV",data:t.chart.uvYesterday.map((function(e){return e.count}))},{name:"错误数",data:t.chart.errorYesterday.map((function(e){return e.count}))}];return s.a.createElement(m.a,{bordered:!0,extra:s.a.createElement("div",{className:O.projectHeader},s.a.createElement("div",{className:O.total},"负责人:",s.a.createElement(R,null,t.creatorUserName)),s.a.createElement("div",{className:O.total},"PV:",s.a.createElement(R,null,l)),s.a.createElement("div",{className:O.total},"UV:",s.a.createElement(R,null,i)),s.a.createElement("div",{className:O.total},"错误数:",s.a.createElement(R,null,o)),s.a.createElement(d.a,{title:"点击进入错误列表"},s.a.createElement(v.a,{onClick:function(){return e=t.projectId,c(e),void r.push("/errors");var e},style:{cursor:"pointer",marginRight:"6px",fontSize:"16px"}})),s.a.createElement(d.a,{title:"点击进入项目设置"},s.a.createElement(E.a,{onClick:function(){return e=t.projectId,void r.push("/project/".concat(e));var e},style:{cursor:"pointer",marginRight:"6px",fontSize:"16px"}})),s.a.createElement(d.a,{title:"近24小时统计数据"},s.a.createElement(b.a,{style:{cursor:"pointer",fontSize:"16px"}}))),size:"small",title:s.a.createElement("div",{className:O.cardTitle},s.a.createElement(d.a,{title:j.s[t.platform]},s.a.createElement(f.a,{shape:"square",className:O.cardBadge,size:20,icon:s.a.createElement(h.a,{icon:j.s[t.platform],type:j.j.square})})),s.a.createElement(n.a,{onClick:function(){return e=t.projectId,c(e),void r.push("/errorOverview");var e},type:"link"},t.name))},s.a.createElement("div",{style:{height:"280px",position:"relative"}},s.a.createElement(H.a,{series:u,xAxisData:t.chart.errorYesterday.map((function(e){return e.time}))}),s.a.createElement("div",{style:{position:"absolute",top:0,right:0,display:"flex",alignItems:"center"}},s.a.createElement("div",{style:{textAlign:"center",fontSize:"12px",color:"gray"}},"同比前一天"),s.a.createElement(C,{title:"PV:",rateNum:t.pvRate||(0!==t.pvSum?1/0:0)}),s.a.createElement(C,{title:"UV:",rateNum:t.uvRate||(0!==t.uvSum?1/0:0)}),s.a.createElement(C,{title:"错误数:",rateNum:t.errorRate||(0!==t.errorSum?1/0:0)}))))},L=r("fWk0"),V=r("0iz5");t.default=function(){var e=Object(V.a)((function(e){var t=e.current;return Object(L.e)({pageNum:Number(t),pageSize:4})}),{paginated:!0,onError:function(e){console.log("err",e)}}),t=e.data,r=e.loading,u=e.pagination,m=e.error,f=Object(g.f)(),d=function(){return s.a.createElement(o.a,{className:p.row,gutter:[20,20]},[1,2,3,4].map((function(e){return s.a.createElement(l.a,{key:e,span:12},s.a.createElement(i.a,{avatar:!0,active:!0,paragraph:{rows:8}}))})))};return m?s.a.createElement(d,null):s.a.createElement("div",{className:p.project},r?s.a.createElement(d,null):s.a.createElement("div",null,s.a.createElement(o.a,{className:p.row,gutter:[20,20]},t&&(t.list.length>0?t.list.map((function(e){return s.a.createElement(l.a,{key:e.projectId,title:e.name,span:12},s.a.createElement(U,{project:e}))})):s.a.createElement(l.a,{span:24},s.a.createElement(c.a,{image:c.a.PRESENTED_IMAGE_SIMPLE,description:s.a.createElement("span",null,"暂无项目")},s.a.createElement(n.a,{type:"primary",onClick:function(){f.push("/project/create")}},"创建项目"))))),s.a.createElement(a.a,{hideOnSinglePage:!0,style:{float:"right",marginRight:"20px"},onChange:u.onChange,current:t.pageNum,pageSize:t.pageSize,total:t.totalCount})))}},L7ld:function(e,t,r){e.exports={"card-title":"card-title--3uCVLJ",cardTitle:"card-title--3uCVLJ","card-badge":"card-badge--2EjuSf",cardBadge:"card-badge--2EjuSf",loading:"loading--3FBY9G","project-header":"project-header--1nHkH2",projectHeader:"project-header--1nHkH2",total:"total--3UXAn2"}},"qoU+":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("q1tI"),n=r.n(a),c=r("ujAs"),o=r.n(c),l=r("r/QG");function i(e){var t={series:e.series,colors:l.b,chart:{type:"area",height:280,zoom:{enabled:!0},toolbar:{show:!!e.toolbar}},dataLabels:{enabled:!1},title:{text:e.title||""},stroke:{curve:"smooth",show:!0,width:[3,2,1.5]},labels:e.xAxisData,yaxis:{opposite:!1,labels:{align:"left"}},fill:{opacity:1},legend:{tooltipHoverFormatter:function(e,t){return e+" : "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]},onItemHover:{highlightDataSeries:!0},horizontalAlign:"left",position:"top"}},r=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=new o.a(r.current,t);return e.render(),function(){e.destroy()}}),[e]),n.a.createElement("div",{ref:r})}},vpYL:function(e,t,r){e.exports={project:"project--1I9k5x",row:"row--xvS0ho"}},yC50:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("q1tI"),n=r("PHNs");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={start:0,duration:1,delay:0};function i(e){var t=Object(n.useCountUp)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({end:e},l)),r=t.countUp,i=t.update;return Object(a.useEffect)((function(){i(e)}),[e]),r}}}]);
//# sourceMappingURL=Project.a3966939.chunk.js.map