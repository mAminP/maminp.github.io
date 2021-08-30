(window.webpackJsonp=window.webpackJsonp||[]).push([[15,14,18],{638:function(t,e,r){"use strict";var c=r(639);e.a=c.a},651:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return v}));var c=r(652),n=r(30),o=Object(n.e)("v-card__actions"),l=Object(n.e)("v-card__subtitle"),h=Object(n.e)("v-card__text"),v=Object(n.e)("v-card__title");c.a},653:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var c=r(27),n=r(13);function o(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return n.default.extend({name:"toggleable",model:{prop:e,event:r},props:Object(c.a)({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(c.a)(t,e,(function(t){this.isActive=!!t})),Object(c.a)(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(r,t)})),t)})}o()},654:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var c=r(27),n=(r(83),r(13)),o=r(76);function l(t,e){return function(){return Object(o.c)("The ".concat(t," component must be used inside a ").concat(e))}}function h(t,e,r){return function(t,e,r){var o=e&&r?{register:l(e,r),unregister:l(e,r)}:null;return n.default.extend({name:"registrable-inject",inject:Object(c.a)({},t,{default:o})})}(t,e,r).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(c.a)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}h("itemGroup")},655:function(t,e,r){"use strict";r.r(e);var c={name:"updated",props:{date:{type:String,required:!0}}},n=r(108),o=r(128),l=r.n(o),h=r(651),v=r(679),d=r(680),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-chip",{attrs:{small:"",outlined:"",color:"grey darken-3",ripple:!1}},[t._v("\n    last update:  "+t._s(t.$moment(t.date).format("YYYY-MM-DD HH:mm"))+"\n  ")])],1)}),[],!1,null,"46421bf2",null);e.default=component.exports;l()(component,{VCardActions:h.a,VChip:v.a,VSpacer:d.a})},657:function(t,e,r){var content=r(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("197fcea4",content,!0,{sourceMap:!1})},658:function(t,e,r){var c=r(81)(!1);c.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--x-small .v-icon{font-size:10px;height:10px;width:10px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--small .v-icon{font-size:12px;height:12px;width:12px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--default .v-icon{font-size:14px;height:14px;width:14px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--large .v-icon{font-size:16px;height:16px;width:16px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}.v-chip.v-size--x-large .v-icon{font-size:18px;height:18px;width:18px}',""]),t.exports=c},679:function(t,e,r){"use strict";r(46),r(50),r(67),r(51),r(68);var c=r(47),n=r(27),o=(r(56),r(657),r(129)),l=r(667),h=r(638),v=r(247),d=r(654),f=r(188),x=r(653),m=r(656),_=r(392),y=r(76);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(v.a,_.a,m.a,f.a,Object(d.a)("chipGroup"),Object(x.a)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return C(C(C(C({"v-chip":!0},m.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(m.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=Object(c.a)(e,2),n=r[0],o=r[1];t.$attrs.hasOwnProperty(n)&&Object(y.a)(n,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.a,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),c=r.tag,data=r.data;data.attrs=C(C({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var n=this.textColor||this.outlined&&this.color;return t(c,this.setTextColor(n,data),e)}})},680:function(t,e,r){"use strict";r(530);var c=r(30);e.a=Object(c.e)("spacer","div","v-spacer")},698:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{value:0,card:void 0}},watch:{value:function(t){t>=100&&(this.card.click(),this.$nuxt.$emit("clearCardOnRunning"))}},mounted:function(){this.card=this.$refs.card.$el||void 0},computed:{width:function(){return this.value>0?2:0}},created:function(){var t=this;this.$nuxt.$on("progressCard",(function(e){if(e&&e.card===t.card){var r=e.step;r>5&&r<10?t.value=15:r>10&&r<15?t.value=30:r>15&&r<20?t.value=45:r>20&&r<25?t.value=60:r>25&&r<30?t.value=75:r>30&&r<35?t.value=90:r>40&&r<45&&(t.value=100)}else t.value=0}))},props:{item:{type:Object,required:!0}}},n=r(108),o=r(128),l=r.n(o),h=r(652),v=r(651),d=r(646),f=r(712),x=r(647),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{ref:"card",staticClass:"blur overflow-hidden",attrs:{href:t.item.url,target:"_blank",flat:"",rounded:"lg",loading:""},scopedSlots:t._u([{key:"progress",fn:function(){return[r("v-progress-linear",{attrs:{height:t.width,color:"white","buffer-value":"0",value:t.value}})]},proxy:!0}])},[t._v(" "),r("v-card-text",[r("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"auto"}},[r("v-card-text",{staticClass:"text-h4 mb-n1` pa-0"},[t._v(t._s(t.item.name))])],1)],1)],1)],1)}),[],!1,null,"1f10024e",null);e.default=component.exports;l()(component,{VCard:h.a,VCardText:v.c,VCol:d.a,VProgressLinear:f.a,VRow:x.a})},710:function(t,e,r){"use strict";r.r(e);var c={props:{projects:{type:Object,required:!0}}},n=r(108),o=r(128),l=r.n(o),h=r(652),v=r(651),d=r(646),f=r(647),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{color:"transparent",flat:""}},[r("v-card-title",{staticClass:"text-h4",domProps:{textContent:t._s(t.projects.header)}}),t._v(" "),r("v-card-text",[r("v-row",{attrs:{dense:""}},t._l(t.projects.items,(function(t,e){return r("v-col",{key:e,attrs:{cols:"12",lg:"6",md:"6"}},[r("ProjectBox",{attrs:{item:t}})],1)})),1)],1),t._v(" "),r("updated",{attrs:{date:t.projects.updatedAt}})],1)}),[],!1,null,"4c44272e",null);e.default=component.exports;l()(component,{ProjectBox:r(698).default,Updated:r(655).default}),l()(component,{VCard:h.a,VCardText:v.c,VCardTitle:v.d,VCol:d.a,VRow:f.a})}}]);