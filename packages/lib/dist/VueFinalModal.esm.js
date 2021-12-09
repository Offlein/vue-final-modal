import{ref as e,watch as t,nextTick as n,onBeforeUnmount as o,reactive as a,computed as i,onMounted as l,withDirectives as s,openBlock as r,createElementBlock as d,mergeProps as u,withKeys as c,createVNode as f,Transition as v,toHandlers as m,withCtx as p,normalizeClass as h,normalizeStyle as y,createCommentVNode as b,createElementVNode as g,withModifiers as w,renderSlot as x,Fragment as S,renderList as T,vShow as E,createBlock as C,resolveDynamicComponent as M,createSlots as k,markRaw as z,shallowReactive as O,useAttrs as D,unref as _}from"vue";import{useEventListener as L}from"@vueuse/core";const I="enter",V="entering",R="leave",A="leavng",B=()=>{const t=e(null),n={beforeEnter(){t.value=V},afterEnter(){t.value=I},beforeLeave(){t.value=A},afterLeave(){t.value=R}};return{state:t,listeners:n}},N=e=>e==document.activeElement;class P{constructor(){this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this)}get lastElement(){return this.elements[this.elements.length-1]||null}get firstElement(){return this.elements[0]||null}get isEnabled(){return!!this.root}onKeyDown(e){if((e=>"Tab"===e.key||9===e.keyCode)(e)){if(!e.shiftKey)return!document.activeElement||N(this.lastElement)?(this.firstElement.focus(),void e.preventDefault()):void 0;N(this.firstElement)&&(this.lastElement.focus(),e.preventDefault())}}enable(e){e&&(this.root=e,this.elements=((e,t)=>[...e.querySelectorAll(t)||[]])(this.root,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])'),this.root.addEventListener("keydown",this.onKeyDown))}disable(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}let $=null;function j({props:e,vfmContainer:n,modalTransitionState:o}){return null==$&&($=new P),t(o,(t=>{switch(t){case I:(e.focusRetain||e.focusTrap)&&n.value.focus(),e.focusTrap&&$.enable(n.value);break;case A:$.enabled&&$.disable()}})),{focusTrap:$}}const H=()=>{},F=()=>{const e=document.activeElement;e&&e!==document.body&&e.blur()},W=e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;return{x:t,y:n}},G={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},K=(e,t,n)=>{t&&t.addEventListener(G[e].pc,n),t&&t.addEventListener(G[e].m,n,{passive:!1})},Y=(e,t,n)=>{t&&t.removeEventListener(G[e].pc,n),t&&t.removeEventListener(G[e].m,n)};const U={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},X=(e,t,n)=>("number"!=typeof e&&(e=Math.min(t,n)||t),"number"!=typeof n&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)),q=e=>e&&Number(e.replace(/px$/,""))||0;function Z({props:o,visible:a,vfmContainer:i,vfmContent:l,vfmResize:s,modalTransitionState:r,onEvent:d=(()=>{})}){const u=e(!1),c=e(null),f=e({});function v(e){e.stopPropagation();const t="resize",n="drag",a=e.target.getAttribute("direction");let s;if(a)s=t;else{if(!((e,t,n)=>""===n||[...t.querySelectorAll(n)].includes(e.target))(e,l.value,o.dragSelector))return;s=n}c.value=`${s}:start`,d?.(e);const r=W(e),u=i.value.getBoundingClientRect(),v=l.value.getBoundingClientRect(),m="absolute"===window.getComputedStyle(l.value).position,p=q(f.value.top),h=q(f.value.left),y=(()=>{if(o.fitParent){const e={absolute:()=>({minTop:0,minLeft:0,maxTop:u.height-v.height,maxLeft:u.width-v.width}),relative:()=>({minTop:p+u.top-v.top,minLeft:h+u.left-v.left,maxTop:p+u.bottom-v.bottom,maxLeft:h+u.right-v.right})};return m?e.absolute():e.relative()}return{}})(),b=s===t&&((e,t,n)=>{const o=e.style[t];return e.style[t]=n,()=>{e.style[t]=o}})(document.body,"cursor",U[a]),g=e=>{e.stopPropagation(),c.value=`${s}:move`,d?.(e);const i=W(e);let l,b,g={x:i.x-r.x,y:i.y-r.y};s===t&&(g=function(e,t,n,a,i){const l=e=>{let n=t[e.axis];n=o.fitParent?X(e.min,n,e.max):n;let a=X(e.minEdge,e.getEdge(n),e.maxEdge);return n=e.getOffsetAxis(a,i),{[e.edgeName]:a,[e.axis]:n}},s=(e,t,i,l)=>{const s=a[t],r=n[e]-a[e],d=(u=t).charAt(0).toUpperCase()+u.slice(1);var u;return{axis:i,edgeName:t,min:l?r:-s,max:l?s:r,minEdge:o[`min${d}`],maxEdge:o[`max${d}`],getEdge:e=>a[t]-e*(l?1:-1),getOffsetAxis:(e,n)=>{const o=a[t]-e;return n?l?o:0:(l?1:-1)*o/2}}},r={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]};let d={x:0,y:0};return e.split("").forEach((e=>{const t=s(...r[e]);d={...d,...l(t)}})),d}(a,g,u,v,m)),m?(l=v.top-u.top+g.y,b=v.left-u.left+g.x):(l=p+g.y,b=h+g.x),s===n&&o.fitParent&&(l=X(y.minTop,l,y.maxTop),b=X(y.minLeft,b,y.maxLeft));const w={position:"relative",top:l+"px",left:b+"px",margin:"unset",touchAction:"none",...m&&{position:"absolute",transform:"unset",width:v.width+"px",height:v.height+"px"},...g.width&&{width:g.width+"px"},...g.height&&{height:g.height+"px"}};f.value={...f.value,...w}},w=e=>{e.stopPropagation(),s===t&&b&&b(),setTimeout((()=>{c.value=`${s}:end`,d?.(e)})),Y("move",document,g),Y("up",document,w)};K("move",document,g),K("up",document,w)}function m(){K("down",l.value,v),f.value.touchAction="none"}function p(){Y("down",l.value,v)}function h(){u.value=!0,n((()=>{K("down",s.value,v)}))}function y(){Y("down",s.value,v),u.value=!1}return t(r,(e=>{switch(e){case I:o.drag&&m(),o.resize&&h();break;case R:o.keepChangedStyle||(f.value={})}})),t((()=>o.drag),(e=>{a.value&&(e?m():p())})),t((()=>o.resize),(e=>{a.value&&(e?h():y())})),t((()=>o.keepChangedStyle),(e=>{e||(f.value={})})),{resizeVisible:u,state:c,dragResizeStyle:f,removeDragDown:p,removeResizeDown:y}}let J=!1;if("undefined"!=typeof window){const e={get passive(){J=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}const Q="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1);let ee,te,ne=[],oe=!1,ae=0,ie=-1;const le=(e,t)=>{let n=!1;return(e=>{const t=[];for(;e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t})(e).forEach((e=>{(e=>{if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&((e,t)=>!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0))(e,t)&&(n=!0)})),n},se=e=>ne.some((()=>le(e,-ae))),re=e=>{const t=e||window.event;return!!se(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},de=(e,t)=>{if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(ne.some((t=>t.targetElement===e)))return;const n={targetElement:e,options:t||{}};ne=[...ne,n],Q?(e.ontouchstart=e=>{1===e.targetTouches.length&&(ie=e.targetTouches[0].clientY)},e.ontouchmove=t=>{1===t.targetTouches.length&&((e,t)=>{ae=e.targetTouches[0].clientY-ie,!se(e.target)&&(t&&0===t.scrollTop&&ae>0||(e=>!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight)(t)&&ae<0?re(e):e.stopPropagation())})(t,e)},oe||(document.addEventListener("touchmove",re,J?{passive:!1}:void 0),oe=!0)):(e=>{if(void 0===te){const t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){const e=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);te=document.body.style.paddingRight,document.body.style.paddingRight=`${e+n}px`}}void 0===ee&&(ee=document.body.style.overflow,document.body.style.overflow="hidden")})(t)},ue=e=>{e?(ne=ne.filter((t=>t.targetElement!==e)),Q?(e.ontouchstart=null,e.ontouchmove=null,oe&&0===ne.length&&(document.removeEventListener("touchmove",re,J?{passive:!1}:void 0),oe=!1)):ne.length||(void 0!==te&&(document.body.style.paddingRight=te,te=void 0),void 0!==ee&&(document.body.style.overflow=ee,ee=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};function ce({props:e,vfmContainer:a,modalTransitionState:i}){function l(){e.modelValue&&n((()=>{e.lockScroll?a.value&&de(a.value,{reserveScrollBarGap:!0}):s()}))}function s(){e.lockScroll&&a.value&&ue(a.value)}return t((()=>e.lockScroll),l),t(i,(e=>{e===R&&s()})),o((()=>{s()})),{handleLockScroll:l}}var fe={inheritAttrs:!1,props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},displayDirective:{type:String,default:"show",validator:e=>-1!==["if","show"].indexOf(e)},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:()=>({})},overlayStyle:{type:[Object,Array],default:()=>({})},contentStyle:{type:[Object,Array],default:()=>({})},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},nonModal:{type:Boolean,default:!1},attach:{type:null,default:!1,validator(e){const t=typeof e;return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:()=>["t","tr","r","br","b","bl","l","tl"],validator:e=>["t","tr","r","br","b","bl","l","tl"].filter((t=>-1!==e.indexOf(t))).length===e.length},minWidth:{type:[Number,String],default:0},minHeight:{type:[Number,String],default:0},maxWidth:{type:[Number,String],default:1/0},maxHeight:{type:[Number,String],default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","_before-close","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup(s,{emit:r}){const d=Symbol("vfm"),u=e(null),c=e(null),f=e(null),v=e(null),m=e(null),p=e(null),h=e(null),y=e(!1),b=a({modal:!1,overlay:!1}),{state:g,listeners:w}=B(),{state:x,listeners:S}=B(),T=e(!1),{focusTrap:E}=j({props:s,vfmContainer:c,modalTransitionState:x}),{resizeVisible:C,state:M,dragResizeStyle:k,removeDragDown:z,removeResizeDown:O}=Z({props:s,visible:y,vfmContainer:c,vfmContent:f,vfmResize:v,modalTransitionState:x,onEvent(e){r(M.value,e)}}),{handleLockScroll:D}=ce({props:s,vfmContainer:c,modalTransitionState:x}),_=e(null);let L=H,V=H;const A=i((()=>"string"==typeof s.overlayTransition?{name:s.overlayTransition}:{...s.overlayTransition})),N=i((()=>"string"==typeof s.transition?{name:s.transition}:{...s.transition})),P=i((()=>(s.hideOverlay||g.value===R)&&x.value===R)),$=i((()=>!1===s.zIndex?!!s.zIndexAuto&&+s.zIndexBase+2*(h.value||0):s.zIndex)),F=i((()=>({...!1!==$.value&&{zIndex:$.value}}))),W=i((()=>{let e=[k.value];return Array.isArray(s.contentStyle)?e.push(...s.contentStyle):e.push(s.contentStyle),e}));function G(){return{uid:d,props:s,emit:r,vfmContainer:c,vfmContent:f,vfmResize:v,vfmOverlayTransition:m,vfmTransition:p,getAttachElement:U,modalStackIndex:h,visibility:b,handleLockScroll:D,toggle:J}}function K(){if(s.modelValue){if(r("_before-open",X({type:"_before-open"})),q("before-open",!1))return void V("show");let e=U();if(e||!1===s.attach){!1!==s.attach&&e.appendChild(u.value);let t=s.api.openedModals.findIndex((e=>e.uid===d));-1!==t&&s.api.openedModals.splice(t,1),s.api.openedModals.push(G()),h.value=s.api.openedModals.length-1,D(),s.api.openedModals.filter((e=>e.uid!==d)).forEach(((t,n)=>{t.getAttachElement()===e&&(t.modalStackIndex.value=n,t.visibility.overlay=!1)})),y.value=!0,n((()=>{b.overlay=!0,b.modal=!0}))}else!1!==e&&console.warn("Unable to locate target ".concat(s.attach))}}function Y(){let e=s.api.openedModals.findIndex((e=>e.uid===d));if(-1!==e&&s.api.openedModals.splice(e,1),s.api.openedModals.length>0){const e=s.api.openedModals[s.api.openedModals.length-1];e.props.focusTrap&&n((()=>{E.enable(e.vfmContainer.value),E.firstElement.focus()})),(e.props.focusRetain||e.props.focusTrap)&&e.vfmContainer.value.focus(),!e.props.hideOverlay&&(e.visibility.overlay=!0)}s.drag&&z(),s.resize&&O(),M.value=null,b.overlay=!1,b.modal=!1}function U(){let e;return e=!1!==s.attach&&("string"==typeof s.attach?!!window&&window.document.querySelector(s.attach):s.attach),e}function X(e={}){return{ref:G(),...e}}function q(e,t){let o=!1;const a=X({type:e,stop(){o=!0}});return r(e,a),!!o&&(T.value=!0,n((()=>{r("update:modelValue",t)})),!0)}function J(e){return new Promise(((t,n)=>{L=e=>{t(e),L=H},V=e=>{n(e),V=H};const o="boolean"==typeof e?e:!s.modelValue;r("update:modelValue",o)}))}return t((()=>s.modelValue),(e=>{if(T.value)T.value=!1;else if(K(),!e){if(r("_before-close",X({type:"_before-close"})),q("before-close",!0))return void V("hide");Y()}})),t((()=>s.hideOverlay),(e=>{s.modelValue&&!e&&(b.overlay=!0)})),t((()=>s.attach),K),t(P,(e=>{e&&(y.value=!1,c.value.style.display="none")}),{flush:"post"}),t(x,(e=>{switch(e){case I:r("_opened"),r("opened",X({type:"opened"})),L("show");break;case R:h.value=null,r("_closed"),r("closed",X({type:"closed"})),L("hide")}})),s.api.modals.push(G()),l((()=>{K()})),o((()=>{Y(),u?.value?.remove();let e=s.api.modals.findIndex((e=>e.uid===d));s.api.modals.splice(e,1)})),{root:u,vfmContainer:c,vfmContent:f,vfmResize:v,vfmOverlayTransition:m,vfmTransition:p,computedOverlayTransition:A,computedTransition:N,overlayListeners:w,modalListeners:S,visible:y,visibility:b,resizeVisible:C,calculateZIndex:$,bindStyle:F,bindContentStyle:W,onMousedown:function(e){_.value=e?.target},onMouseupContainer:function(){_.value===c.value&&"resize:move"!==M.value&&(r("click-outside",X({type:"click-outside"})),s.clickToClose&&r("update:modelValue",!1))},onEsc:function(){y.value&&s.escToClose&&r("update:modelValue",!1)}}}};const ve=["aria-expanded"],me={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"},pe=["direction"];function he(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}he("\n.vfm--fixed[data-v-72c09f54] {\n  position: fixed;\n}\n.vfm--absolute[data-v-72c09f54] {\n  position: absolute;\n}\n.vfm--inset[data-v-72c09f54] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-72c09f54] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-72c09f54] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-72c09f54] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-72c09f54]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-72c09f54],\n.vfm-leave-active[data-v-72c09f54] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-72c09f54],\n.vfm-leave-to[data-v-72c09f54] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-72c09f54] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-72c09f54] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-72c09f54],\n.vfm--resize-br[data-v-72c09f54],\n.vfm--resize-bl[data-v-72c09f54],\n.vfm--resize-tl[data-v-72c09f54] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-72c09f54] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-72c09f54] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-72c09f54] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-72c09f54] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-72c09f54] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-72c09f54] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-72c09f54] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-72c09f54] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),fe.render=function(e,t,n,o,a,i){return"if"!==n.displayDirective||o.visible?s((r(),d("div",u({key:0},e.$attrs,{ref:"root",style:o.bindStyle,class:["vfm vfm--inset",[!1===n.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":n.nonModal}]],onKeydown:t[3]||(t[3]=c(((...e)=>o.onEsc&&o.onEsc(...e)),["esc"]))}),[f(v,u(o.computedOverlayTransition,m(o.overlayListeners)),{default:p((()=>[!n.hideOverlay&&o.visibility.overlay?(r(),d("div",{key:0,class:h(["vfm__overlay vfm--overlay vfm--absolute vfm--inset",n.overlayClass]),style:y(n.overlayStyle)},null,6)):b("v-if",!0)])),_:1},16),f(v,u(o.computedTransition,m(o.modalListeners)),{default:p((()=>[s(g("div",{ref:"vfmContainer",class:h(["vfm__container vfm--absolute vfm--inset vfm--outline-none",n.classes]),style:y(n.styles),"aria-expanded":o.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:t[1]||(t[1]=w(((...e)=>o.onMouseupContainer&&o.onMouseupContainer(...e)),["self"])),onMousedown:t[2]||(t[2]=w(((...e)=>o.onMousedown&&o.onMousedown(...e)),["self"]))},[g("div",{ref:"vfmContent",class:h(["vfm__content",[n.contentClass,{"vfm--prevent-auto":n.nonModal}]]),style:y(o.bindContentStyle),onMousedown:t[0]||(t[0]=e=>o.onMousedown(null))},[x(e.$slots,"default",{close:()=>e.$emit("update:modelValue",!1)}),o.resizeVisible&&o.visibility.modal?(r(),d("div",me,[(r(!0),d(S,null,T(n.resizeDirections,(e=>(r(),d("div",{key:e,direction:e,class:h([`vfm--resize-${e}`,"vfm--absolute vfm--prevent-auto"])},null,10,pe)))),128))],512)):b("v-if",!0)],38)],46,ve),[[E,o.visibility.modal]])])),_:3},16)],16)),[[E,"show"!==n.displayDirective||o.visible]]):b("v-if",!0)},fe.__scopeId="data-v-72c09f54",fe.__file="src/VueFinalModal.vue";var ye={methods:{slice(e){this.api.dynamicModals.splice(e,1)},closed(e,t){this.slice(e),t.closed&&t.closed()},beforeClose(e){e.value&&e?.rejectClose("hide")},async beforeOpen(e,t,n){await this.$nextTick(),await this.$nextTick(),t.value||(this.slice(n),t?.reject("show"))},isString:e=>"string"==typeof e}};const be={class:"modals-container"},ge=["innerHTML"];ye.render=function(e,t,n,o,a,i){return r(),d("div",be,[(r(!0),d(S,null,T(e.api.dynamicModals,((e,t)=>(r(),C(M(e.component),u({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t},m(e.on),{on_beforeClose:t=>i.beforeClose(e),on_closed:n=>i.closed(t,e),on_beforeOpen:n=>i.beforeOpen(n,e,t),on_opened:e.opened}),k({_:2},[T(e.slots,((e,t)=>({name:t,fn:p((()=>[b(" eslint-disable vue/no-v-html "),i.isString(e)?(r(),d("div",{key:0,innerHTML:e},null,8,ge)):(r(),C(M(e.component),u({key:1},e.bind,m(e.on||{})),null,16))]))})))]),1040,["modelValue","onUpdate:modelValue","on_beforeClose","on_closed","on_beforeOpen","on_opened"])))),128))])},ye.__file="src/ModalsContainer.vue";class we{constructor(){const e=e=>{const t={...e,props:{...e.props}};return Object.assign(t.props,{api:{type:Object,default:()=>this}}),z(t)};this.modals=[],this.openedModals=[],this.VueFinalModal=e(fe),this.dynamicModals=O([]),this.ModalsContainer=e(ye)}show(e,...t){switch(typeof e){case"string":return this.toggle(e,!0,...t);case"object":{const{show:n}=this.useModal(e,t[0]);return n()}}}hide(...e){return this.toggle(e,!1)}hideAll(){return this.hide(...this.openedModals.map((e=>e.props.name)))}toggle(e,...t){const n=Array.isArray(e)?this.get(...e):this.get(e);return Promise.allSettled(n.map((e=>e.toggle(...t))))}get(...e){return this.modals.filter((t=>e.includes(t.props.name)))}existModal(e){return-1!==this.dynamicModals.indexOf(e)}useModal(e){let t=a({value:!1,component:this.VueFinalModal,id:Symbol("useModal"),bind:{},slots:{},on:{},...e});return{show:()=>this.existModal(t)?Promise.resolve("[Vue Final Modal] modal is already opened"):new Promise(((e,n)=>{t.value=!0,t.reject=n,t.opened=()=>{e("show")},this.dynamicModals.push(t)})),hide:()=>this.existModal(t)?new Promise(((e,n)=>{t.value=!1,t.rejectClose=n,t.closed=()=>{e("hide")}})):Promise.resolve("[Vue Final Modal] modal is already closed"),options:t}}}const xe=()=>{let e=new we;return{$vfm:e,VueFinalModal:e.VueFinalModal,ModalsContainer:e.ModalsContainer,useModal:e.useModal.bind(e)}},Se=xe(),{$vfm:Te,VueFinalModal:Ee,ModalsContainer:Ce,useModal:Me}=Se,ke="UP",ze="RIGHT",Oe="DOWN",De="LEFT",_e="NONE";function Le(t,{threshold:n=50,onSwipeStart:o,onSwipe:l,onSwipeEnd:s,passive:r=!0}){const d=a({x:0,y:0}),u=a({x:0,y:0}),c=i((()=>d.x-u.x)),f=i((()=>d.y-u.y)),{max:v,abs:m}=Math,p=i((()=>v(m(c.value),m(f.value))>=n)),h=e(!1),y=i((()=>p.value?m(c.value)>m(f.value)?c.value>0?De:ze:f.value>0?ke:Oe:_e)),b=(e,t)=>{u.x=e,u.y=t};let g;const w=function(e){if(!e)return!1;let t=!1;const n={get passive(){return t=!0,!1}};return e.addEventListener("x",H,n),e.removeEventListener("x",H),t}(window?.document);let x;function S(e){g.capture&&!g.passive&&e.preventDefault();const{x:n,y:a}=W(e);((e,t)=>{d.x=e,d.y=t})(n,a),b(n,a),o?.(e),x=[L(t,"mousemove",T,g),L(t,"touchmove",T,g),L(t,"mouseup",E,g),L(t,"touchend",E,g),L(t,"touchcancel",E,g)]}function T(e){const{x:t,y:n}=W(e);b(t,n),!h.value&&p.value&&(h.value=!0),h.value&&l?.(e)}function E(e){h.value&&s?.(e,y.value),h.value=!1,x.forEach((e=>e()))}g=r?w?{passive:!0}:{capture:!1}:w?{passive:!1,capture:!0}:{capture:!0};const C=[L(t,"mousedown",S,g),L(t,"touchstart",S,g)];return{isPassiveEventSupported:w,isSwiping:h,direction:y,coordsStart:d,coordsEnd:u,lengthX:c,lengthY:f,stop:()=>{C.forEach((e=>e())),x.forEach((e=>e()))}}}var Ie=Object.assign({inheritAttrs:!1},{props:{swipeToCloseDirection:{type:String,default:"",validator:e=>-1!==["","DOWN"].includes(e)},threshold:{type:Number,default:30}},setup:function(n,{emit:o}){const a=n,i=D(),l=e(null),s=e(0),d=e(!0);let c=H,f=null,v=!1;const{lengthY:m,direction:b,isSwiping:S}=Le(l,{threshold:a.threshold,onSwipeStart(e){c=L(document,"selectionchange",(()=>{d.value=window.getSelection().isCollapsed})),f=(new Date).getTime(),v=T(e.target)},onSwipe(){var e,t,n;if(v&&b.value===a.swipeToCloseDirection){if(!d.value)return;s.value=(e=Math.abs(m.value),t=0,n=l.value.offsetHeight,-(e>n?n:e<t?t:e)+a.threshold)}},onSwipeEnd(e,t){if(c(),!d.value)return void(d.value=!0);const n=(new Date).getTime(),i=t===a.swipeToCloseDirection,r=Math.abs(m.value)>.1*l.value.offsetHeight;v&&i&&(r||n-f<=300)?o("update:modelValue",!1):s.value=0}});function T(e){const t=0===e.scrollTop;return e===l.value?t:t&&T(e.parentElement)}return t((()=>i.modelValue),(e=>{e&&(s.value=0)})),t((()=>d.value),(e=>{e||(s.value=0)})),(e,t)=>(r(),C(_(Ee),u(_(i),{transition:{"enter-active-class":"slideInDown","leave-active-class":"slideOutDown"},onMousedown:t[0]||(t[0]=w((()=>{}),["stop"])),onTouchstartPassive:t[1]||(t[1]=w((()=>{}),["stop"])),onClosed:_(F)}),{default:p((()=>[x(e.$slots,"prepend"),g("div",{ref:(e,t)=>{t.bottomSheetEl=e,l.value=e},class:h(["vfm-bottom-sheet",{"vfm-transition":!_(S)}]),style:y({transform:`translateY(${-s.value}px)`})},[x(e.$slots,"default")],6),x(e.$slots,"append")])),_:3},16,["onClosed"]))}});he("\n.vfm-bottom-sheet[data-v-730a320a] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  max-height: 90%;\n  overflow-y: auto;\n  background-color: #fff;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n.vfm-transition[data-v-730a320a] {\n  transition-property: transform;\n  transition-duration: 150ms;\n}\n@-webkit-keyframes slideInDown-730a320a {\nfrom {\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInDown-730a320a {\nfrom {\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-730a320a] .slideInDown {\n  -webkit-animation-name: slideInDown-730a320a;\n          animation-name: slideInDown-730a320a;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutDown-730a320a {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(0, 100%, 0);\n}\n}\n@keyframes slideOutDown-730a320a {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(0, 100%, 0);\n}\n}\n[data-v-730a320a] .slideOutDown {\n  -webkit-animation-name: slideOutDown-730a320a;\n          animation-name: slideOutDown-730a320a;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n"),Ie.__scopeId="data-v-730a320a",Ie.__file="src/hoc/VBottomSheet.vue";var Ve=Object.assign({inheritAttrs:!1},{props:{fullScreenClass:{type:[String,Object,Array],default:""},fullScreenStyle:{type:[Object,Array],default:()=>({})},swipeToCloseDirection:{type:String,default:"",validator:e=>-1!==["","RIGHT","LEFT"].includes(e)},threshold:{type:Number,default:30}},setup:function(n,{emit:o}){const a=n,l=D(),s=e(null),d=e(0),c=e(!0);let f=H,v=null,m=!1;const b=i((()=>a.swipeToCloseDirection?{"enter-active-class":"RIGHT"===a.swipeToCloseDirection?"slideInRight":"slideInLeft","leave-active-class":"RIGHT"===a.swipeToCloseDirection?"slideOutRight":"slideOutLeft"}:{})),{lengthX:S,direction:T,isSwiping:E}=a.swipeToCloseDirection?Le(s,{threshold:a.threshold,onSwipeStart(e){f=L(document,"selectionchange",(()=>{c.value=window.getSelection().isCollapsed})),v=(new Date).getTime(),m=M(e.target)},onSwipe(){var e,t,n;if(m&&T.value===a.swipeToCloseDirection){if(!c.value)return;const o=(e=Math.abs(S.value),t=0,n=s.value.offsetWidth,(e>n?n:e<t?t:e)-a.threshold);d.value="RIGHT"===a.swipeToCloseDirection?-o:o}},onSwipeEnd(e,t){if(f(),!c.value)return void(c.value=!0);const n=(new Date).getTime(),i=t===a.swipeToCloseDirection,l=Math.abs(S.value)>.1*s.value.offsetWidth;m&&i&&(l||n-v<=300)?o("update:modelValue",!1):d.value=0}}):{};function M(e){const t=0===e.scrollLeft;return e===s.value?t:t&&M(e.parentElement)}return t((()=>l.modelValue),(e=>{e&&(d.value=0)})),t((()=>c.value),(e=>{e||(d.value=0)})),(e,t)=>(r(),C(_(Ee),u(_(l),{"hide-overlay":"",transition:_(b),"content-style":[{transform:`translateX(${-d.value}px)`}],"content-class":{"vfm-transition":!_(E)},onMousedown:t[0]||(t[0]=w((()=>{}),["stop"])),onTouchstartPassive:t[1]||(t[1]=w((()=>{}),["stop"])),onClosed:_(F)}),{default:p((()=>[x(e.$slots,"prepend"),g("div",{ref:(e,t)=>{t.modalContent=e,s.value=e},class:h(["vfm-full-screen",n.fullScreenClass]),style:y(n.fullScreenStyle)},[x(e.$slots,"default")],6),x(e.$slots,"append")])),_:3},16,["transition","content-style","content-class","onClosed"]))}});he("\n.vfm-full-screen[data-v-1a4bac96] {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #fff;\n}\n[data-v-1a4bac96] .vfm-transition {\n  transition-property: transform;\n  transition-duration: 0.3s;\n}\n[data-v-1a4bac96] .vfm__content {\n  width: 100%;\n  height: 100%;\n}\n@-webkit-keyframes slideInLeft-1a4bac96 {\nfrom {\n    transform: translate3d(-100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInLeft-1a4bac96 {\nfrom {\n    transform: translate3d(-100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideInLeft {\n  -webkit-animation-name: slideInLeft-1a4bac96;\n          animation-name: slideInLeft-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideInRight-1a4bac96 {\nfrom {\n    transform: translate3d(100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInRight-1a4bac96 {\nfrom {\n    transform: translate3d(100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideInRight {\n  -webkit-animation-name: slideInRight-1a4bac96;\n          animation-name: slideInRight-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutLeft-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(-100%, 0, 0);\n}\n}\n@keyframes slideOutLeft-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(-100%, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideOutLeft {\n  -webkit-animation-name: slideOutLeft-1a4bac96;\n          animation-name: slideOutLeft-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutRight-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(100%, 0, 0);\n}\n}\n@keyframes slideOutRight-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(100%, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideOutRight {\n  -webkit-animation-name: slideOutRight-1a4bac96;\n          animation-name: slideOutRight-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n"),Ve.__scopeId="data-v-1a4bac96",Ve.__file="src/hoc/VFullScreen.vue";export{Te as $vfm,we as ModalInstance,Ce as ModalsContainer,Ie as VBottomSheet,Ve as VFullScreen,Ee as VueFinalModal,xe as createModalInstance,Me as useModal};
//# sourceMappingURL=VueFinalModal.esm.js.map
