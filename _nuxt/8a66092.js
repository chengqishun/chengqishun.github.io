(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{443:function(e,t,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(56).default)("adee94de",content,!0,{sourceMap:!1})},456:function(e,t,n){"use strict";n(443)},457:function(e,t,n){var r=n(55)(!1);r.push([e.i,'.feature-section{background:url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/5.4c1d5ce.jpg) 50% no-repeat;background-size:cover}.feature-box{position:relative;width:843px;height:472px;margin-left:50px}.feature-box .feature-box .swiper-slide img{width:100%;height:100%}.feature-box .feature-next,.feature-box .feature-prev{width:39px;height:54px;position:absolute;top:50%;margin-top:-27px;cursor:pointer;background-size:contain;background-repeat:no-repeat}.feature-box .feature-prev{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ2IiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTAwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIG9mZnNldD0iMzAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgc3RvcC1vcGFjaXR5PSIuMSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTE0NS4wOTggMjAwdi0zNS4xNTlMNTAuOTQ0IDEwMGw5NC4xNTQtNjQuODQxVjBMMCAxMDB6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=);left:-50px}.feature-box .feature-next{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQxIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSI1MCUiIHgyPSIwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIG9mZnNldD0iMzAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgc3RvcC1vcGFjaXR5PSIuMSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMHYzNS4xNTlMOTEuNDk1IDEwMCAwIDE2NC44NDFWMjAwbDE0MS0xMDB6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=);right:-50px}.small-view{width:900px;margin-left:-50px;margin-top:28px;height:90px;background:url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwNDYgNjIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkfTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwMTIuODcgMTEuMTloNi45djM3aC02Ljl6TTE5Ljc4IDExLjE5aDYuOXYzN2gtNi45eiIvPjxwYXRoIGQ9Ik0yNi43OCAzMC4xOHYtMWg5ODZ2MXoiIG9wYWNpdHk9Ii41IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) 50% no-repeat;background-size:contain;display:flex;justify-content:space-between;align-items:center;padding:0 70px}.small-view .small-img-box{width:158px;height:90px;position:relative;cursor:pointer}.small-view .small-img-box img{vertical-align:top;width:158px;height:90px}.small-view .small-img-box:after{content:"";width:100%;height:100%;position:absolute;left:0;top:0;background:rgba(0,0,0,.5)}.small-view .small-img-box.active:after{background:0 0}',""]),e.exports=r},473:function(e,t,n){"use strict";n.r(t);var r=n(12),c=(n(79),n(80)),o=n.n(c),l={data:function(){var e=this;return{current:0,swiperOption:{pagination:{el:".feature-pagination",clickable:!0,type:"custom",renderCustom:function(t,n,r){e.current=n-1}}},features:{}}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://open.ys4fun.com/game-website-server/pass/game/image/list",{params:{websiteId:1,current:1,size:5,type:"gameFeature"}});case 2:n=t.sent,console.log(n),e.features=n.data.data;case 5:case"end":return t.stop()}}),t)})))()},methods:{prev:function(){this.$swiper.slidePrev()},next:function(){this.$swiper.slideNext()},setPage:function(i){this.$swiper.slideTo(i,600)}}},d=(n(456),n(54)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pc-index-section feature-section"},[n("div",{staticClass:"session-content"},[n("div",{staticClass:"content"},[n("div",{staticClass:"feature-box"},[n("div",{directives:[{name:"swiper",rawName:"v-swiper",value:e.swiperOption,expression:"swiperOption"}],staticClass:"feature-swiper"},[n("div",{staticClass:"swiper-wrapper"},e._l(e.features.records,(function(e){return n("div",{key:e.id,staticClass:"swiper-slide"},[n("img",{attrs:{src:e.pcUrl}})])})),0),e._v(" "),n("div",{staticClass:"feature-pagination swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})]),e._v(" "),n("div",{staticClass:"feature-prev",on:{click:e.prev}}),e._v(" "),n("div",{staticClass:"feature-next",on:{click:e.next}})]),e._v(" "),n("div",{staticClass:"small-view"},e._l(e.features.records,(function(t,r){return n("div",{key:t.id,staticClass:"small-img-box",class:{active:e.current===r},on:{click:function(t){return e.setPage(r)}}},[n("img",{attrs:{src:t.h5Url}})])})),0)])])])}),[],!1,null,null,null);t.default=component.exports}}]);