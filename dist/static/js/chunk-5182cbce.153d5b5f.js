(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5182cbce"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1f87":function(t,e,n){"use strict";var a=n("c843"),r=n.n(a);r.a},"40df":function(t,e,n){"use strict";var a=n("86cb"),r=n.n(a);r.a},"4d19":function(t,e,n){},"841c":function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),i=n("1d80"),o=n("129f"),s=n("14c3");a("search",1,(function(t,e,n){return[function(e){var n=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var i=r(t),c=String(this),l=i.lastIndex;o(l,0)||(i.lastIndex=0);var u=s(i,c);return o(i.lastIndex,l)||(i.lastIndex=l),null===u?-1:u.index}]}))},"86cb":function(t,e,n){},"8cea":function(t,e,n){},c7cd:function(t,e,n){"use strict";var a=n("23e7"),r=n("857a"),i=n("af03");a({target:"String",proto:!0,forced:i("fixed")},{fixed:function(){return r(this,"tt","","")}})},c843:function(t,e,n){},cd3f:function(t,e,n){(function(t,n){var a=200,r="__lodash_hash_undefined__",i=9007199254740991,o="[object Arguments]",s="[object Array]",c="[object Boolean]",l="[object Date]",u="[object Error]",d="[object Function]",f="[object GeneratorFunction]",h="[object Map]",p="[object Number]",v="[object Object]",m="[object Promise]",b="[object RegExp]",g="[object Set]",y="[object String]",_="[object Symbol]",C="[object WeakMap]",k="[object ArrayBuffer]",S="[object DataView]",w="[object Float32Array]",x="[object Float64Array]",A="[object Int8Array]",$="[object Int16Array]",j="[object Int32Array]",O="[object Uint8Array]",E="[object Uint8ClampedArray]",z="[object Uint16Array]",I="[object Uint32Array]",R=/[\\^$.*+?()[\]{}|]/g,T=/\w*$/,L=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,P={};P[o]=P[s]=P[k]=P[S]=P[c]=P[l]=P[w]=P[x]=P[A]=P[$]=P[j]=P[h]=P[p]=P[v]=P[b]=P[g]=P[y]=P[_]=P[O]=P[E]=P[z]=P[I]=!0,P[u]=P[d]=P[C]=!1;var D="object"==typeof t&&t&&t.Object===Object&&t,M="object"==typeof self&&self&&self.Object===Object&&self,B=D||M||Function("return this")(),q=e&&!e.nodeType&&e,V=q&&"object"==typeof n&&n&&!n.nodeType&&n,Y=V&&V.exports===q;function H(t,e){return t.set(e[0],e[1]),t}function G(t,e){return t.add(e),t}function N(t,e){var n=-1,a=t?t.length:0;while(++n<a)if(!1===e(t[n],n,t))break;return t}function U(t,e){var n=-1,a=e.length,r=t.length;while(++n<a)t[r+n]=e[n];return t}function K(t,e,n,a){var r=-1,i=t?t.length:0;a&&i&&(n=t[++r]);while(++r<i)n=e(n,t[r],r,t);return n}function J(t,e){var n=-1,a=Array(t);while(++n<t)a[n]=e(n);return a}function W(t,e){return null==t?void 0:t[e]}function Q(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function X(t){var e=-1,n=Array(t.size);return t.forEach((function(t,a){n[++e]=[a,t]})),n}function Z(t,e){return function(n){return t(e(n))}}function tt(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var et=Array.prototype,nt=Function.prototype,at=Object.prototype,rt=B["__core-js_shared__"],it=function(){var t=/[^.]+$/.exec(rt&&rt.keys&&rt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ot=nt.toString,st=at.hasOwnProperty,ct=at.toString,lt=RegExp("^"+ot.call(st).replace(R,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ut=Y?B.Buffer:void 0,dt=B.Symbol,ft=B.Uint8Array,ht=Z(Object.getPrototypeOf,Object),pt=Object.create,vt=at.propertyIsEnumerable,mt=et.splice,bt=Object.getOwnPropertySymbols,gt=ut?ut.isBuffer:void 0,yt=Z(Object.keys,Object),_t=Ae(B,"DataView"),Ct=Ae(B,"Map"),kt=Ae(B,"Promise"),St=Ae(B,"Set"),wt=Ae(B,"WeakMap"),xt=Ae(Object,"create"),At=Fe(_t),$t=Fe(Ct),jt=Fe(kt),Ot=Fe(St),Et=Fe(wt),zt=dt?dt.prototype:void 0,It=zt?zt.valueOf:void 0;function Rt(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var a=t[e];this.set(a[0],a[1])}}function Tt(){this.__data__=xt?xt(null):{}}function Lt(t){return this.has(t)&&delete this.__data__[t]}function Ft(t){var e=this.__data__;if(xt){var n=e[t];return n===r?void 0:n}return st.call(e,t)?e[t]:void 0}function Pt(t){var e=this.__data__;return xt?void 0!==e[t]:st.call(e,t)}function Dt(t,e){var n=this.__data__;return n[t]=xt&&void 0===e?r:e,this}function Mt(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var a=t[e];this.set(a[0],a[1])}}function Bt(){this.__data__=[]}function qt(t){var e=this.__data__,n=ie(e,t);if(n<0)return!1;var a=e.length-1;return n==a?e.pop():mt.call(e,n,1),!0}function Vt(t){var e=this.__data__,n=ie(e,t);return n<0?void 0:e[n][1]}function Yt(t){return ie(this.__data__,t)>-1}function Ht(t,e){var n=this.__data__,a=ie(n,t);return a<0?n.push([t,e]):n[a][1]=e,this}function Gt(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var a=t[e];this.set(a[0],a[1])}}function Nt(){this.__data__={hash:new Rt,map:new(Ct||Mt),string:new Rt}}function Ut(t){return xe(this,t)["delete"](t)}function Kt(t){return xe(this,t).get(t)}function Jt(t){return xe(this,t).has(t)}function Wt(t,e){return xe(this,t).set(t,e),this}function Qt(t){this.__data__=new Mt(t)}function Xt(){this.__data__=new Mt}function Zt(t){return this.__data__["delete"](t)}function te(t){return this.__data__.get(t)}function ee(t){return this.__data__.has(t)}function ne(t,e){var n=this.__data__;if(n instanceof Mt){var r=n.__data__;if(!Ct||r.length<a-1)return r.push([t,e]),this;n=this.__data__=new Gt(r)}return n.set(t,e),this}function ae(t,e){var n=Be(t)||Me(t)?J(t.length,String):[],a=n.length,r=!!a;for(var i in t)!e&&!st.call(t,i)||r&&("length"==i||Ie(i,a))||n.push(i);return n}function re(t,e,n){var a=t[e];st.call(t,e)&&De(a,n)&&(void 0!==n||e in t)||(t[e]=n)}function ie(t,e){var n=t.length;while(n--)if(De(t[n][0],e))return n;return-1}function oe(t,e){return t&&ke(e,Ke(e),t)}function se(t,e,n,a,r,i,s){var c;if(a&&(c=i?a(t,r,i,s):a(t)),void 0!==c)return c;if(!Ne(t))return t;var l=Be(t);if(l){if(c=Oe(t),!e)return Ce(t,c)}else{var u=je(t),h=u==d||u==f;if(Ye(t))return he(t,e);if(u==v||u==o||h&&!i){if(Q(t))return i?t:{};if(c=Ee(h?{}:t),!e)return Se(t,oe(c,t))}else{if(!P[u])return i?t:{};c=ze(t,u,se,e)}}s||(s=new Qt);var p=s.get(t);if(p)return p;if(s.set(t,c),!l)var m=n?we(t):Ke(t);return N(m||t,(function(r,i){m&&(i=r,r=t[i]),re(c,i,se(r,e,n,a,i,t,s))})),c}function ce(t){return Ne(t)?pt(t):{}}function le(t,e,n){var a=e(t);return Be(t)?a:U(a,n(t))}function ue(t){return ct.call(t)}function de(t){if(!Ne(t)||Te(t))return!1;var e=He(t)||Q(t)?lt:L;return e.test(Fe(t))}function fe(t){if(!Le(t))return yt(t);var e=[];for(var n in Object(t))st.call(t,n)&&"constructor"!=n&&e.push(n);return e}function he(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}function pe(t){var e=new t.constructor(t.byteLength);return new ft(e).set(new ft(t)),e}function ve(t,e){var n=e?pe(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function me(t,e,n){var a=e?n(X(t),!0):X(t);return K(a,H,new t.constructor)}function be(t){var e=new t.constructor(t.source,T.exec(t));return e.lastIndex=t.lastIndex,e}function ge(t,e,n){var a=e?n(tt(t),!0):tt(t);return K(a,G,new t.constructor)}function ye(t){return It?Object(It.call(t)):{}}function _e(t,e){var n=e?pe(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Ce(t,e){var n=-1,a=t.length;e||(e=Array(a));while(++n<a)e[n]=t[n];return e}function ke(t,e,n,a){n||(n={});var r=-1,i=e.length;while(++r<i){var o=e[r],s=a?a(n[o],t[o],o,n,t):void 0;re(n,o,void 0===s?t[o]:s)}return n}function Se(t,e){return ke(t,$e(t),e)}function we(t){return le(t,Ke,$e)}function xe(t,e){var n=t.__data__;return Re(e)?n["string"==typeof e?"string":"hash"]:n.map}function Ae(t,e){var n=W(t,e);return de(n)?n:void 0}Rt.prototype.clear=Tt,Rt.prototype["delete"]=Lt,Rt.prototype.get=Ft,Rt.prototype.has=Pt,Rt.prototype.set=Dt,Mt.prototype.clear=Bt,Mt.prototype["delete"]=qt,Mt.prototype.get=Vt,Mt.prototype.has=Yt,Mt.prototype.set=Ht,Gt.prototype.clear=Nt,Gt.prototype["delete"]=Ut,Gt.prototype.get=Kt,Gt.prototype.has=Jt,Gt.prototype.set=Wt,Qt.prototype.clear=Xt,Qt.prototype["delete"]=Zt,Qt.prototype.get=te,Qt.prototype.has=ee,Qt.prototype.set=ne;var $e=bt?Z(bt,Object):Je,je=ue;function Oe(t){var e=t.length,n=t.constructor(e);return e&&"string"==typeof t[0]&&st.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function Ee(t){return"function"!=typeof t.constructor||Le(t)?{}:ce(ht(t))}function ze(t,e,n,a){var r=t.constructor;switch(e){case k:return pe(t);case c:case l:return new r(+t);case S:return ve(t,a);case w:case x:case A:case $:case j:case O:case E:case z:case I:return _e(t,a);case h:return me(t,a,n);case p:case y:return new r(t);case b:return be(t);case g:return ge(t,a,n);case _:return ye(t)}}function Ie(t,e){return e=null==e?i:e,!!e&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function Re(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function Te(t){return!!it&&it in t}function Le(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||at;return t===n}function Fe(t){if(null!=t){try{return ot.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Pe(t){return se(t,!0,!0)}function De(t,e){return t===e||t!==t&&e!==e}function Me(t){return Ve(t)&&st.call(t,"callee")&&(!vt.call(t,"callee")||ct.call(t)==o)}(_t&&je(new _t(new ArrayBuffer(1)))!=S||Ct&&je(new Ct)!=h||kt&&je(kt.resolve())!=m||St&&je(new St)!=g||wt&&je(new wt)!=C)&&(je=function(t){var e=ct.call(t),n=e==v?t.constructor:void 0,a=n?Fe(n):void 0;if(a)switch(a){case At:return S;case $t:return h;case jt:return m;case Ot:return g;case Et:return C}return e});var Be=Array.isArray;function qe(t){return null!=t&&Ge(t.length)&&!He(t)}function Ve(t){return Ue(t)&&qe(t)}var Ye=gt||We;function He(t){var e=Ne(t)?ct.call(t):"";return e==d||e==f}function Ge(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}function Ne(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ue(t){return!!t&&"object"==typeof t}function Ke(t){return qe(t)?ae(t):fe(t)}function Je(){return[]}function We(){return!1}n.exports=Pe}).call(this,n("c8ba"),n("62e4")(t))},d166:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("advance-table",{attrs:{columns:t.columns,"data-source":t.dataSource,title:"高级表格-Beta",loading:t.loading,rowKey:"id","format-conditions":!0,pagination:{current:t.page,pageSize:t.pageSize,total:t.total,showSizeChanger:!0,showLessItems:!0,showQuickJumper:!0,showTotal:function(t,e){return"第 "+e[0]+"-"+e[1]+" 条，总计 "+t+" 条"},onChange:t.onPageChange,onShowSizeChange:t.onSizeChange}},on:{search:t.onSearch,refresh:t.onRefresh,reset:t.onReset},scopedSlots:t._u([{key:"send",fn:function(e){var n=e.text;return[t._v(" "+t._s(n?"是":"否")+" ")]}},{key:"status",fn:function(e){var n=e.text;return[t._v(" "+t._s(t._f("statusStr")(n))+" ")]}}])},[n("template",{slot:"statusTitle"},[t._v(" 状态"),n("a-icon",{staticStyle:{margin:"0 4px"},attrs:{type:"info-circle"}})],1)],2),n("api")],1)},r=[],i=n("5530"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"table",staticClass:"advanced-table",attrs:{id:t.id}},[n("a-spin",{attrs:{spinning:t.loading}},[n("div",{class:["header-bar",t.size]},[n("div",{staticClass:"title"},[t.title?[t._v(t._s(t.title))]:t.$slots.title?t._t("title"):[t._v("高级表格")]],2),n("div",{staticClass:"search"},[n("search-area",{attrs:{"format-conditions":t.formatConditions,columns:t.columns},on:{change:t.onSearchChange}},[t._l(t.slots,(function(e){return n("template",{slot:e},[t._t(e)],2)}))],2)],1),n("div",{staticClass:"actions"},[n("a-tooltip",{attrs:{title:"刷新"}},[n("a-icon",{staticClass:"action",attrs:{type:t.loading?"loading":"reload"},on:{click:t.refresh}})],1),n("action-size",{staticClass:"action",model:{value:t.sSize,callback:function(e){t.sSize=e},expression:"sSize"}}),n("a-tooltip",{attrs:{title:"列配置"}},[n("action-columns",{staticClass:"action",attrs:{columns:t.columns},on:{reset:t.onColumnsReset}},[t._l(t.slots,(function(e){return n("template",{slot:e},[t._t(e)],2)}))],2)],1),n("a-tooltip",{attrs:{title:"全屏"}},[n("a-icon",{staticClass:"action",attrs:{type:t.fullScreen?"fullscreen-exit":"fullscreen"},on:{click:t.toggleScreen}})],1)],1)]),n("a-table",t._b({attrs:{size:t.sSize},on:{expandedRowsChange:t.onExpandedRowsChange,change:t.onChange,expand:t.onExpand},scopedSlots:t._u([t._l(t.scopedSlots,(function(e){return{key:e,fn:function(n,a,r){return[t._t(e,null,null,{text:n,record:a,index:r})]}}})),{key:t.$scopedSlots.expandedRowRender?"expandedRowRender":"",fn:function(e,n,a,r){return[t._t(t.$scopedSlots.expandedRowRender?"expandedRowRender":"",null,null,{record:e,index:n,indent:a,expanded:r})]}}],null,!0)},"a-table",Object.assign({},t.$options.propsData,{title:void 0,loading:!1}),!1),[t._l(t.slots,(function(e){return n("template",{slot:e},[t._t(e)],2)}))],2)],1)],1)},s=[],c=(n("99af"),n("4de4"),n("a9e3"),n("b64b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"action-size"},[n("a-tooltip",{attrs:{title:"密度"}},[n("a-dropdown",{attrs:{placement:"bottomCenter",trigger:["click"],"get-popup-container":function(){return t.$refs.root}}},[n("a-icon",{staticClass:"action",attrs:{type:"column-height"}}),n("a-menu",{attrs:{slot:"overlay","selected-keys":[t.value]},on:{click:t.onClick},slot:"overlay"},[n("a-menu-item",{key:"default"},[t._v(" 默认 ")]),n("a-menu-item",{key:"middle"},[t._v(" 中等 ")]),n("a-menu-item",{key:"small"},[t._v(" 紧密 ")])],1)],1)],1)],1)}),l=[],u={name:"ActionSize",props:["value"],inject:["table"],data:function(){return{selectedKeys:["middle"]}},methods:{onClick:function(t){var e=t.key;this.$emit("input",e)}}},d=u,f=(n("dc71"),n("0c7c")),h=Object(f["a"])(d,c,l,!1,null,"14609956",null),p=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"action-columns"},[n("a-popover",{attrs:{placement:"bottomRight",trigger:"click","get-popup-container":function(){return t.$refs.root}},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("a-checkbox",{staticClass:"check-all",attrs:{indeterminate:t.indeterminate,checked:t.checkAll},on:{change:t.onCheckAllChange}}),t._v("列展示 "),n("a-button",{staticStyle:{float:"right"},attrs:{type:"link",size:"small"},on:{click:t.resetColumns}},[t._v("重置")])],1),t._l(t.columns,(function(e,a){return n("a-list",{key:a,staticStyle:{width:"100%"},attrs:{slot:"content",size:"small"},slot:"content"},[n("a-list-item",[n("a-checkbox",{on:{change:function(n){return t.onCheckChange(n,e)}},model:{value:e.visible,callback:function(n){t.$set(e,"visible",n)},expression:"col.visible"}}),e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("template",{slot:"actions"},[n("a-tooltip",{attrs:{title:"固定在列头",mouseEnterDelay:.5,"get-popup-container":function(){return t.$refs.root}}},[n("a-icon",{class:["left",{active:"left"===e.fixed}],attrs:{type:"vertical-align-top"},on:{click:function(n){return t.fixColumn("left",e)}}})],1),n("a-tooltip",{attrs:{title:"固定在列尾",mouseEnterDelay:.5,"get-popup-container":function(){return t.$refs.root}}},[n("a-icon",{class:["right",{active:"right"===e.fixed}],attrs:{type:"vertical-align-bottom"},on:{click:function(n){return t.fixColumn("right",e)}}})],1),n("a-tooltip",{attrs:{title:"添加搜索",mouseEnterDelay:.5,"get-popup-container":function(){return t.$refs.root}}},[n("a-icon",{class:{active:e.searchAble},attrs:{type:"search"},on:{click:function(n){return t.setSearch(e)}}})],1)],1)],2)],1)})),n("a-icon",{staticClass:"action",attrs:{type:"setting"}})],2)],1)},m=[],b=(n("4160"),n("ac1f"),n("841c"),n("c7cd"),n("159b"),n("b85c")),g=n("2909"),y=n("cd3f"),_=n.n(y),C={name:"ActionColumns",props:["columns","visibleColumns"],data:function(){return{visible:!1,indeterminate:!1,checkAll:!0,checkedCounts:this.columns.length,backColumns:_()(this.columns)}},watch:{checkedCounts:function(t){this.checkAll=t===this.columns.length,this.indeterminate=t>0&&t<this.columns.length}},created:function(){this.$emit("update:visibleColumns",Object(g["a"])(this.columns));var t,e=Object(b["a"])(this.columns);try{for(e.s();!(t=e.n()).done;){var n=t.value;void 0===n.visible&&this.$set(n,"visible",!0),n.visible||(this.checkedCounts-=1,this.$set(n,"colSpan",0),this.$set(n,"customCell",(function(){return{style:"display: none;"}})))}}catch(a){e.e(a)}finally{e.f()}},methods:{onCheckChange:function(t,e){e.visible?(this.checkedCounts+=1,this.$set(e,"colSpan",void 0),this.$set(e,"customCell",void 0)):(this.checkedCounts-=1,this.$set(e,"colSpan",0),this.$set(e,"customCell",(function(){return{style:"display: none;"}})))},fixColumn:function(t,e){t!==e.fixed?this.$set(e,"fixed",t):this.$set(e,"fixed",void 0)},setSearch:function(t){this.$set(t,"searchAble",!t.searchAble),!t.searchAble&&t.search&&this.resetSearch(t)},resetSearch:function(t){t.search.value=void 0,t.search.backup=void 0},resetColumns:function(){var t=this,e=this.columns,n=this.backColumns,a=e.length;n.forEach((function(n,r){var i=e[r];i.visible=void 0===n.visible||n.visible,i.visible?(t.$set(i,"colSpan",void 0),t.$set(i,"customCell",void 0)):(a-=1,t.$set(i,"colSpan",0),t.$set(i,"customCell",(function(){return{style:"display: none;"}}))),void 0!==n.fixed?i.fixed=n.fixed:t.$set(i,"fixed",void 0),t.$set(i,"searchAble",n.searchAble),t.resetSearch(i)})),this.checkedCounts=a,this.visible=!1,this.$emit("reset",this.getConditions(e))},onCheckAllChange:function(t){var e=this;t.target.checked?(this.checkedCounts=this.columns.length,this.columns.forEach((function(t){t.visible=!0,e.$set(t,"colSpan",void 0),e.$set(t,"customCell",void 0)}))):(this.checkedCounts=0,this.columns.forEach((function(t){t.visible=!1,e.$set(t,"colSpan",0),e.$set(t,"customCell",(function(){return{style:"display: none;"}}))})))},getConditions:function(t){var e={};return t.filter((function(t){return void 0!==t.search.value&&""!==t.search.value&&null!==t.search.value})).forEach((function(t){e[t.dataIndex]=t.search.value})),e}}},k=C,S=(n("1f87"),Object(f["a"])(k,v,m,!1,null,"3445a9e1",null)),w=S.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"search-area"},[n("div",{ref:"selectRoot",staticClass:"select-root"}),t._l(t.searchCols,(function(e,a){return n("div",{key:a,staticClass:"search-item"},["boolean"===e.dataType?n("div",{class:["title",{active:void 0!==e.search.value}]},[e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("a-switch",{staticClass:"switch",attrs:{size:"small","checked-children":"是","un-checked-children":"否"},on:{change:function(n){return t.onSwitchChange(e)}},model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}}),void 0!==e.search.value?n("a-icon",{staticClass:"close",attrs:{type:"close-circle",theme:"filled"},on:{click:function(n){return t.onCloseClick(n,e)}}}):t._e()],2):"time"===e.dataType?n("div",{class:["title",{active:e.search.value}]},[e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("a-time-picker",{staticClass:"time-picker",attrs:{format:e.search.format,placeholder:"选择时间",size:"small","get-popup-container":function(){return t.$refs.root}},on:{change:function(n,a){return t.onCalendarChange(n,a,e)},openChange:function(n){return t.onCalendarOpenChange(n,e)}},model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}})],2):"date"===e.dataType?n("div",{class:["title",{active:e.search.value}]},[e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("a-date-picker",{staticClass:"date-picker",attrs:{format:e.search.format,size:"small",getCalendarContainer:function(){return t.$refs.root}},on:{change:function(n){return t.onDateChange(e)}},model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}})],2):"datetime"===e.dataType?n("div",{staticClass:"title datetime active"},[e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("a-date-picker",{staticClass:"datetime-picker",attrs:{format:e.search.format,size:"small","show-time":"",getCalendarContainer:function(){return t.$refs.root}},on:{change:function(n,a){return t.onCalendarChange(n,a,e)},openChange:function(n){return t.onCalendarOpenChange(n,e)}},model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}})],2):"select"===e.dataType?n("div",{class:["title",{active:void 0!==e.search.value}]},[e.title?[t._v(" "+t._s(e.title)+": ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),n("a-select",{staticClass:"select",attrs:{slot:"content",allowClear:!0,options:e.search.selectOptions,placeholder:"请选择...",size:"small","get-popup-container":function(){return t.$refs.selectRoot}},on:{change:function(n){return t.onSelectChange(e)}},slot:"content",model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}})],2):n("div",{class:["title",{active:e.search.value}]},[n("a-popover",{attrs:{placement:"bottom",trigger:["click"],"get-popup-container":function(){return t.$refs.root}},on:{visibleChange:function(n){return t.onVisibleChange(e,a)}},model:{value:e.search.visible,callback:function(n){t.$set(e.search,"visible",n)},expression:"col.search.visible"}},[e.title?[t._v(" "+t._s(e.title)+" ")]:e.slots&&e.slots.title?t._t(e.slots.title):t._e(),e.search.value?n("div",{staticClass:"value "},[t._v(": "+t._s(e.search.format&&"function"===typeof e.search.format?e.search.format(e.search.value):e.search.value))]):t._e(),e.search.value?t._e():n("a-icon",{staticClass:"icon-down",attrs:{type:"down"}}),n("div",{staticClass:"operations",attrs:{slot:"content"},slot:"content"},[n("a-button",{staticClass:"btn",attrs:{size:"small",type:"link"},on:{click:function(n){return t.onCancel(e)}}},[t._v("取消")]),n("a-button",{staticClass:"btn",attrs:{size:"small",type:"primary"},on:{click:function(n){return t.onConfirm(e)}}},[t._v("确认")])],1),n("div",{staticClass:"search-overlay",attrs:{slot:"title"},slot:"title"},[n("a-input",{attrs:{id:""+t.searchIdPrefix+a,"allow-clear":!0,size:"small"},on:{keyup:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.onCancel(e)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.onConfirm(e)}]},model:{value:e.search.value,callback:function(n){t.$set(e.search,"value",n)},expression:"col.search.value"}})],1)],2),e.search.value?n("a-icon",{staticClass:"close",attrs:{type:"close-circle",theme:"filled"},on:{click:function(n){return t.onCloseClick(n,e)}}}):t._e()],1)])}))],2)},A=[],$=(n("d81d"),n("b0c0"),n("694b")),j=n.n($),O=n("c1df"),E=n.n(O),z={name:"SearchArea",props:["columns","formatConditions"],inject:["table"],created:function(){var t=this;this.columns.forEach((function(e){t.$set(e,"search",Object(i["a"])(Object(i["a"])({},e.search),{},{visible:!1,value:void 0,format:t.getFormat(e)}))}))},watch:{searchCols:function(t,e){if(t.length!=e.length){var n=this.getConditions(t),a=this.getSearchOptions(t);j()(n,this.conditions)||(this.conditions=n,this.searchOptions=a,this.$emit("change",this.conditions,this.searchOptions))}}},data:function(){return{conditions:{},searchOptions:[]}},computed:{searchCols:function(){return this.columns.filter((function(t){return t.searchAble}))},searchIdPrefix:function(){return this.table.id+"-ipt-"}},methods:{onCloseClick:function(t,e){t.preventDefault(),t.stopPropagation(),e.search.value=void 0;var n=e.search,a=n.backup,r=n.value;a!==r&&this.backupAndEmitChange(e)},onCancel:function(t){t.search.value=t.search.backup,t.search.visible=!1},onConfirm:function(t){var e=t.search,n=e.backup,a=e.value;t.search.visible=!1,n!==a&&this.backupAndEmitChange(t)},onSwitchChange:function(t){var e=t.search,n=e.backup,a=e.value;n!==a&&this.backupAndEmitChange(t)},onSelectChange:function(t){this.backupAndEmitChange(t)},onCalendarOpenChange:function(t,e){e.search.visible=t;var n=this.momentEqual,a=this.backupAndEmitChange,r=e.search,i=r.value,o=r.backup,s=r.format;t||n(i,o,s)||a(e,E()(i))},onCalendarChange:function(t,e,n){var a=this.momentEqual,r=this.backupAndEmitChange,i=n.search,o=i.value,s=i.backup,c=i.format;n.search.visible||a(o,s,c)||r(n,E()(o))},onDateChange:function(t){var e=this.momentEqual,n=this.backupAndEmitChange,a=t.search,r=a.value,i=a.backup,o=a.format;e(r,i,o)||n(t,E()(r))},getFormat:function(t){if(t.search&&t.search.format)return t.search.format;var e=t.dataType;switch(e){case"time":return"HH:mm:ss";case"date":return"YYYY-MM-DD";case"datetime":return"YYYY-MM-DD HH:mm:ss";default:return}},backupAndEmitChange:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.search.value,n=this.getConditions,a=this.getSearchOptions;t.search.backup=e,this.conditions=n(this.searchCols),this.searchOptions=a(this.searchCols),this.$emit("change",this.conditions,this.searchOptions)},getConditions:function(t){var e=this,n={};return t.filter((function(t){return void 0!==t.search.value&&""!==t.search.value&&null!==t.search.value})).forEach((function(t){var a=t.search,r=a.value,i=a.format;e.formatConditions&&i?"function"===typeof i?n[t.dataIndex]=i(t.search.value):"string"===typeof i&&"Moment"===r.constructor.name?n[t.dataIndex]=r.format(i):n[t.dataIndex]=r:n[t.dataIndex]=r})),n},getSearchOptions:function(t){return t.filter((function(t){return void 0!==t.search.value&&""!==t.search.value&&null!==t.search.value})).map((function(t){var e=t.dataIndex,n=t.search;return{field:e,value:n.value,format:n.format}}))},onVisibleChange:function(t,e){var n=this;if(t.search.visible){var a=document.getElementById("".concat(this.searchIdPrefix).concat(e));a?setTimeout((function(){a.focus()}),0):this.$nextTick((function(){a=document.getElementById("".concat(n.searchIdPrefix).concat(e)),a.focus()}))}else t.search.value=t.search.backup},momentEqual:function(t,e,n){return t===e||!(!t||!e||t.format(n)!==e.format(n))}}},I=z,R=(n("40df"),Object(f["a"])(I,x,A,!1,null,"25d929d2",null)),T=R.exports,L={name:"AdvanceTable",components:{SearchArea:T,ActionColumns:w,ActionSize:p},props:{tableLayout:String,bordered:Boolean,childrenColumnName:Array[String],columns:Array,components:Object,dataSource:Array,defaultExpandAllRows:Array[String],expandedRowKeys:Array[String],expandedRowRender:Function,expandIcon:Function,expandRowByClick:Boolean,expandIconColumnIndex:Number,footer:Function,indentSize:Number,loading:Boolean,locale:Object,pagination:Object,rowClassName:Function,rowKey:[String,Function],rowSelection:Object,scroll:Object,showHeader:Boolean,size:String,title:String,customHeaderRow:Function,customRow:Function,getPopupContainer:Function,transformCellText:Function,formatConditions:Boolean},provide:function(){return{table:this}},data:function(){return{id:"".concat((new Date).getTime(),"-").concat(Math.floor(10*Math.random())),sSize:this.size||"default",fullScreen:!1,conditions:{}}},computed:{slots:function(){return Object.keys(this.$slots).filter((function(t){return"title"!==t}))},scopedSlots:function(){return Object.keys(this.$scopedSlots).filter((function(t){return"expandedRowRender"!==t&&"title"!==t}))}},created:function(){this.addListener()},beforeDestroy:function(){this.removeListener()},methods:{refresh:function(){this.$emit("refresh",this.conditions)},onSearchChange:function(t,e){this.conditions=t,this.$emit("search",t,e)},toggleScreen:function(){this.fullScreen?this.outFullScreen():this.inFullScreen()},inFullScreen:function(){var t=this.$refs.table;return t.classList.add("beauty-scroll"),t.requestFullscreen?(t.requestFullscreen(),!0):t.webkitRequestFullScreen?(t.webkitRequestFullScreen(),!0):t.mozRequestFullScreen?(t.mozRequestFullScreen(),!0):t.msRequestFullscreen?(t.msRequestFullscreen(),!0):(this.$message.warn("对不起，您的浏览器不支持全屏模式"),t.classList.remove("beauty-scroll"),!1)},outFullScreen:function(){document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),this.$refs.table.classList.remove("beauty-scroll")},onColumnsReset:function(t){this.$emit("reset",t)},onExpandedRowsChange:function(t){this.$emit("expandedRowsChange",t)},onChange:function(t,e,n,a){this.$emit("change",t,e,n,a)},onExpand:function(t,e){this.$emit("expand",t,e)},addListener:function(){document.addEventListener("fullscreenchange",this.fullScreenListener),document.addEventListener("webkitfullscreenchange",this.fullScreenListener),document.addEventListener("mozfullscreenchange",this.fullScreenListener),document.addEventListener("msfullscreenchange",this.fullScreenListener)},removeListener:function(){document.removeEventListener("fullscreenchange",this.fullScreenListener),document.removeEventListener("webkitfullscreenchange",this.fullScreenListener),document.removeEventListener("mozfullscreenchange",this.fullScreenListener),document.removeEventListener("msfullscreenchange",this.fullScreenListener)},fullScreenListener:function(t){t.target.id===this.id&&(this.fullScreen=!this.fullScreen)}}},F=L,P=(n("d6ad"),Object(f["a"])(F,o,s,!1,null,"f805277e",null)),D=P.exports,M=(n("93d6"),n("96cf"),n("1da1")),B=n("7424"),q=n("b775");function V(t){return Y.apply(this,arguments)}function Y(){return Y=Object(M["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(q["f"])(B["GOODS"],q["a"].GET,e));case 1:case"end":return t.stop()}}),t)}))),Y.apply(this,arguments)}var H={goodsList:V},G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"api"},[t._m(0),n("api-table",{attrs:{"api-source":t.apiSource}}),n("api-table",{attrs:{type:"event",title:"事件","api-source":t.events}}),n("api-table",{attrs:{title:"Column","api-source":t.columnApi}}),n("api-table",{attrs:{title:"Search","api-source":t.searchApi}})],1)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"introduce"},[n("h2",{staticClass:"title"},[t._v("说明")]),n("p",{staticClass:"content"},[t._v(" AdvanceTable 是基于 Ant Design Vue Table 组件封装，支持其所有 API。"),n("br"),t._v(" 主要添加了"),n("em",[t._v("列设置")]),t._v("及"),n("em",[t._v("搜索控件配置")]),t._v("的功能，可用于一些需要动态配置表格展示、动态配置搜索条件的场景。"),n("br"),t._v(" 使用方式 与 antd table 基本无异。添加了部分API，如下： ")])])}],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-table",{attrs:{"data-source":t.apiSource,pagination:!1}},[t.title?n("h2",{staticStyle:{margin:"0 16px 0"},attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.title))]):t._e(),n("a-table-column",{attrs:{width:"20%","data-index":"param",title:"参数"},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{domProps:{innerHTML:t._s(e)}})}}])}),n("a-table-column",{attrs:{width:"50%","data-index":"desc",title:"说明"},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{domProps:{innerHTML:t._s(e)}})}}])}),t.isApi?n("a-table-column",{attrs:{width:"15%","data-index":"type",title:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{domProps:{innerHTML:t._s(e)}})}}],null,!1,102549752)}):t._e(),t.isApi?n("a-table-column",{attrs:{width:"15%","data-index":"default",title:"默认值"},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{domProps:{innerHTML:t._s(e)}})}}],null,!1,102549752)}):t._e(),t.isApi?t._e():n("a-table-column",{attrs:{width:"30%","data-index":"callback",title:"回调函数"},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{domProps:{innerHTML:t._s(e)}})}}],null,!1,102549752)})],1)},K=[],J=(n("caad"),{name:"ApiTable",props:{title:{type:String,default:"API"},type:{type:String,default:"api",validator:function(t){return["api","event"].includes(t)}},apiSource:Array},computed:{isApi:function(){return"api"===this.type}}}),W=J,Q=Object(f["a"])(W,U,K,!1,null,"029d00aa",null),X=Q.exports,Z={name:"Api",components:{ApiTable:X},data:function(){return{apiSource:[{key:0,param:'<a href="https://www.antdv.com/components/table-cn/#API" target="_blank">Ant Design Vue Table API</a>',desc:"支持 Ant Design Vue Table 组件 所有 api",type:"--",default:"--"},{key:1,param:"title",desc:"表格标题",type:"string | slot",default:"'高级表格'"},{key:2,param:"formatConditions",desc:"是否格式化搜索条件的值，格式化规则参考 <a>Search 配置</a>。\n                 <br/>false：取搜索输入控件的原值 <br/>true：取搜索输入控件格式化后的值",type:"boolean",default:"false"},{key:3,param:"columns",desc:"表格列配置，参考 <a>Column 配置</a>",type:"array",default:"--"}],events:[{key:0,param:'<a href="https://www.antdv.com/components/table-cn/#API" target="_blank">Ant Design Vue Table Events API</a>',desc:"支持 Ant Design Vue Table 所有事件",callback:"--"},{key:1,param:"search",desc:"搜索条件变化时触发",callback:"Function(conditions, searchOptions: [{field, value, format}])"},{key:2,param:"refresh",desc:"表头刷新图标点击时触发",callback:"Function(conditions, searchOptions: [{field, value, format}])"},{key:3,param:"reset",desc:"列配置重置按钮点击时触发",callback:"Function(conditions, searchOptions: [{field, value, format}])"}],columnApi:[{key:0,param:'<a href="https://www.antdv.com/components/table-cn/#API" target="_blank">Ant Design Vue Table Column API</a>',desc:"支持 Ant Design Vue Table 组件 Column 配置所有 api",type:"--",default:"--"},{key:1,param:"searchAble",desc:"是否启用列搜索",type:"boolean",default:"false"},{key:2,param:"dataType",desc:"数据类型，该配置将决定列搜索输入控件的类型，与列搜索输入控件对应关系如下：<br/>\n                 string: 输入框组件<br/>\n                 boolean: 开关组件<br/>\n                 select: 下拉输入框组件<br/>\n                 date: 日期选择器<br/>\n                 time: 时间选择器<br/>\n                 datetime: 带时间选择器的日期选择器",type:"'string' | 'boolean' | 'select' | 'date' | 'time' | 'datetime'",default:"'string'"},{key:3,param:"search",desc:"列搜索配置，参考 <a>Search 配置</a>",type:"object",default:"--"}],searchApi:[{key:0,param:"format",desc:"列搜索输入控件值的格式化配置。<br/>如果输入控件支持格式化，则可设置该值为字符串，如日期输入组件，可设为为 'YYYY-MM-DD'。\n                 <br/>不支持格式化的输入控件，可设置为一个接收控件的输入值作为参数的函数，如 (value) => {return `prefix${value}`}。",type:"string | Function(value)",default:"取输入控件默认的格式化配置"},{key:1,param:"selectOptions",desc:'select 数据类型的下拉输入组件的选项配置，可参考 <a href="https://www.antdv.com/components/select-cn/#API" target="_blank">Ant Design Vue Select Option props Api</a>',type:"array",default:"--"}]}}},tt=Z,et=(n("f817"),Object(f["a"])(tt,G,N,!1,null,"6bba9377",null)),nt=et.exports,at={name:"Table",components:{Api:nt,AdvanceTable:D},filters:{statusStr:function(t){switch(t){case 1:return"已下单";case 2:return"已付款";case 3:return"已审核";case 4:return"已发货"}}},data:function(){return{loading:!1,page:1,pageSize:10,total:0,columns:[{title:"商品名称",dataIndex:"name",searchAble:!0},{title:"订单号",dataIndex:"orderId"},{searchAble:!0,dataIndex:"status",dataType:"select",slots:{title:"statusTitle"},scopedSlots:{customRender:"status"},search:{selectOptions:[{title:"已下单",value:1},{title:"已付款",value:2},{title:"已审核",value:3},{title:"已发货",value:4}]}},{title:"发货",searchAble:!0,dataIndex:"send",dataType:"boolean",scopedSlots:{customRender:"send"}},{title:"发货时间",dataIndex:"sendTime",dataType:"datetime"},{title:"下单日期",searchAble:!0,dataIndex:"orderDate",dataType:"date"},{title:"审核时间",dataIndex:"auditTime",dataType:"time"}],dataSource:[],conditions:{}}},created:function(){this.getGoodList()},methods:{getGoodList:function(){var t=this;this.loading=!0;var e=this.page,n=this.pageSize,a=this.conditions;H.goodsList(Object(i["a"])({page:e,pageSize:n},a)).then((function(e){var n=e.data.data,a=n.list,r=n.page,i=n.pageSize,o=n.total;t.dataSource=a,t.page=r,t.total=o,t.pageSize=i,t.loading=!1}))},onSearch:function(t,e){this.page=1,this.conditions=t,this.getGoodList()},onSizeChange:function(t,e){this.page=1,this.pageSize=e,this.getGoodList()},onRefresh:function(t){this.conditions=t,this.getGoodList()},onReset:function(t){this.conditions=t,this.getGoodList()},onPageChange:function(t,e){this.page=t,this.pageSize=e,this.getGoodList()}}},rt=at,it=(n("e20a"),Object(f["a"])(rt,a,r,!1,null,"1bea55f7",null)),ot=it.exports;e["default"]=ot},d6ad:function(t,e,n){"use strict";var a=n("4d19"),r=n.n(a);r.a},d9c4:function(t,e,n){},dc0b:function(t,e,n){},dc71:function(t,e,n){"use strict";var a=n("d9c4"),r=n.n(a);r.a},e20a:function(t,e,n){"use strict";var a=n("dc0b"),r=n.n(a);r.a},f817:function(t,e,n){"use strict";var a=n("8cea"),r=n.n(a);r.a}}]);