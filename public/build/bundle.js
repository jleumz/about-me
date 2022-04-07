var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u,i;function a(t,e){return u||(u=document.createElement("a")),u.href=e,t===u.href}function l(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function f(t){let e;return l(t,(t=>e=t))(),e}function d(t,e,n){t.$$.on_destroy.push(l(e,n))}function p(t,e,n,o){if(t){const r=$(t,e,n,o);return t[0](r)}}function $(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function m(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function h(t,e,n,o,r,s){if(r){const c=$(e,n,o,s);t.p(c,r)}}function g(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function y(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function v(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function b(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function k(){return E(" ")}function P(){return E("")}function R(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:S(t,o,e[o])}function O(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function I(t){i=t}function C(){if(!i)throw new Error("Function called outside component initialization");return i}function L(t){C().$$.on_mount.push(t)}function N(){const t=C();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function j(t,e){C().$$.context.set(t,e)}function U(t){return C().$$.context.get(t)}const T=[],M=[],F=[],z=[],H=Promise.resolve();let K=!1;function q(){K||(K=!0,H.then(W))}function Y(t){F.push(t)}const B=new Set;let D=0;function W(){const t=i;do{for(;D<T.length;){const t=T[D];D++,I(t),G(t.$$)}for(I(null),T.length=0,D=0;M.length;)M.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];B.has(e)||(B.add(e),e())}F.length=0}while(T.length);for(;z.length;)z.pop()();K=!1,B.clear(),I(t)}function G(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}const J=new Set;let Q;function V(){Q={r:0,c:[],p:Q}}function X(){Q.r||r(Q.c),Q=Q.p}function Z(t,e){t&&t.i&&(J.delete(t),t.i(e))}function tt(t,e,n,o){if(t&&t.o){if(J.has(t))return;J.add(t),Q.c.push((()=>{J.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function et(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=e[s];if(u){for(const t in c)t in u||(o[t]=1);for(const t in u)r[t]||(n[t]=u[t],r[t]=1);t[s]=u}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function nt(t){return"object"==typeof t&&null!==t?t:{}}function ot(t){t&&t.c()}function rt(t,e,o,c){const{fragment:u,on_mount:i,on_destroy:a,after_update:l}=t.$$;u&&u.m(e,o),c||Y((()=>{const e=i.map(n).filter(s);a?a.push(...e):r(e),t.$$.on_mount=[]})),l.forEach(Y)}function st(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(e,n,s,c,u,a,l,f=[-1]){const d=i;I(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};l&&l(p.root);let $=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),$&&function(t,e){-1===t.$$.dirty[0]&&(T.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),$=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(w)}else p.fragment&&p.fragment.c();n.intro&&Z(e.$$.fragment),rt(e,n.target,n.anchor,n.customElement),W()}I(d)}class ut{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it=t=>void 0===t,at=t=>"function"==typeof t,lt=t=>"number"==typeof t;function ft(){let t=0;return()=>t++}const dt="undefined"==typeof window;function pt(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const $t=[];function mt(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!$t.length;for(const t of r)t[1](),$t.push(t,e);if(t){for(let t=0;t<$t.length;t+=2)$t[t][0]($t[t+1]);$t.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,u=t){const i=[c,u];return r.add(i),1===r.size&&(o=n(s)||t),c(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function ht(e,n,o){const c=!Array.isArray(e),u=c?[e]:e,i=n.length<2;return a=e=>{let o=!1;const a=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=n(c?a[0]:a,e);i?e(o):d=s(o)?o:t},$=u.map(((t,e)=>l(t,(t=>{a[e]=t,f&=~(1<<e),o&&p()}),(()=>{f|=1<<e}))));return o=!0,p(),function(){r($),d()}},{subscribe:mt(o,a).subscribe};var a}const gt=t=>`@@svnav-ctx__${t}`,yt=gt("LOCATION"),vt=gt("ROUTER"),bt=gt("ROUTE"),xt=gt("ROUTE_PARAMS"),wt=gt("FOCUS_ELEM"),_t=/^:(.+)/,Et=(t,e)=>t.substr(0,e.length)===e,kt=t=>"*"===t[0],Pt=t=>t.replace(/(^\/+|\/+$)/g,"");function Rt(t,e=!1){const n=Pt(t).split("/");return e?n.filter(Boolean):n}const St=(t,e)=>t+(e?`?${e}`:""),At=t=>`/${Pt(t)}`;function Ot(...t){const e=t.map((t=>Rt(t,!0).join("/"))).join("/");return At(e)}const It={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},Ct=t=>It[t];function Lt(t,e,n,o){const r=n&&function(t,e){let n;return 2===t?n=e.path?`path="${e.path}"`:"default":1===t?n=`to="${e.to}"`:3===t&&(n=`basepath="${e.basepath||""}"`),`<${Ct(t)} ${n||""} />`}(o||t,n),s=r?`\n\nOccurred in: ${r}`:"",c=Ct(t);return`<${c}> ${at(e)?e(c):e}${s}`}const Nt=t=>(...e)=>t(Lt(...e)),jt=Nt((t=>{throw new Error(t)})),Ut=Nt(console.warn);function Tt(t,e){return{route:t,score:t.default?0:Rt(t.fullPath).reduce(((t,e)=>{let n=t;return n+=4,(t=>""===t)(e)?n+=1:(t=>_t.test(t))(e)?n+=2:kt(e)?n-=5:n+=3,n}),0),index:e}}function Mt(t,e){let n,o;const[r]=e.split("?"),s=Rt(r),c=""===s[0],u=function(t){return t.map(Tt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,r=u.length;t<r;t++){const{route:r}=u[t];let i=!1;const a={},l=t=>({...r,params:a,uri:t});if(r.default){o=l(e);continue}const f=Rt(r.fullPath),d=Math.max(s.length,f.length);let p=0;for(;p<d;p++){const t=f[p],e=s[p];if(!it(t)&&kt(t)){const e="*"===t?"*":t.slice(1);a[e]=s.slice(p).map(decodeURIComponent).join("/");break}if(it(e)){i=!0;break}const n=_t.exec(t);if(n&&!c){const t=decodeURIComponent(e);a[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n=l(Ot(...s.slice(0,p)));break}}return n||o||null}function Ft(t,e){return Mt([t],e)}function zt(t,e){const{pathname:n,hash:o="",search:r="",state:s}=t,c=Rt(e,!0),u=Rt(n,!0);for(;c.length;)c[0]!==u[0]&&jt(3,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),c.shift(),u.shift();return{pathname:Ot(...u),hash:o,search:r,state:s}}const Ht=t=>1===t.length?"":t;function Kt(t){const e=t.indexOf("?"),n=t.indexOf("#"),o=-1!==e,r=-1!==n,s=r?Ht(t.substr(n)):"",c=r?t.substr(0,n):t,u=o?Ht(c.substr(e)):"";return{pathname:o?c.substr(0,e):c,search:u,hash:s}}function qt(t,e,n){return Ot(n,function(t,e){if(Et(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=Rt(n),c=Rt(r);if(""===s[0])return St(r,o);if(!Et(s[0],".")){const t=c.concat(s).join("/");return St(("/"===r?"":"/")+t,o)}const u=c.concat(s),i=[];return u.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),St(`/${i.join("/")}`,o)}(t,e))}function Yt(t,e){const n=At(t.replace(/\*.*$/,""));const o=Rt(n,!0),r=Ft({fullPath:n},Ot(...Rt(e,!0).slice(0,o.length)));return r&&r.uri}const Bt="POP";function Dt(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Wt(t,e){return{...Kt(e),state:t}}const Gt=!(dt||!window.document||!window.document.createElement),Jt=!dt&&"null"===window.location.origin,Qt=function(t){let e=[],n=Dt(t),o=Bt;const r=(t=e)=>t.forEach((t=>t({location:n,action:o})));return{get location(){return n},listen(s){e.push(s);r([s]);const c=pt(t,"popstate",(()=>{n=Dt(t),o=Bt,r([s])}));return()=>{c(),e=e.filter((t=>t!==s))}},navigate(e,s){const{state:c={},replace:u=!1}=s||{};if(o=u?"REPLACE":"PUSH",lt(e))s&&Ut(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=Bt,t.history.go(e);else{const n={...c,_key:Math.random().toString(36).substring(2)};try{t.history[u?"replaceState":"pushState"](n,"",e)}catch(n){t.location[u?"replace":"assign"](e)}}n=Dt(t),r()}}}(Gt&&!Jt?window:function(t="/"){let e=0,n=[Wt(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(t,o,r){e++,n=n.slice(0,e),n.push(Wt(t,r))},replaceState(t,o,r){n[e]=Wt(t,r)},go(t){const o=e+t;o<0||o>n.length-1||(e=o)}}}}());let Vt=null,Xt=!0;function Zt(t){(!Vt||t.level>Vt.level||t.level===Vt.level&&function(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<n.length;o++){const r=n[o],s=Number(r.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}(t.routerId,Vt.routerId))&&(Vt=t)}function te(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){let n;t.setAttribute(e,"-1");const o=()=>{t.removeAttribute(e),n()};n=pt(t,"blur",o)}return t.focus(),document.activeElement===t}catch(t){return!1}}function ee(t,e){return Number(t.dataset.svnavRouteEnd)===e}function ne(t,e=document){return e.querySelector(t)}function oe(t){Promise.resolve(f(t.focusElement)).then((e=>{const n=e||function(t){let e=ne(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!ee(e,t);){if(/^H[1-6]$/i.test(e.tagName))return e;const t=ne("h1,h2,h3,h4,h5,h6",e);if(t)return t;e=e.nextElementSibling}return null}(t.id);n||Ut(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);te(n)||te(document.documentElement)}))}const re=(t,e,n)=>(o,r)=>(q(),H).then((()=>{if(Vt&&!Xt){if(o&&oe(Vt.route),t.announcements&&r){const{path:o,fullPath:r,meta:s,params:c,uri:u}=Vt.route,i=t.createAnnouncement({path:o,fullPath:r,meta:s,params:c,uri:u},f(n));Promise.resolve(i).then((t=>{e.set(t)}))}Vt=null}else Xt=!1}));function se(t){let e,n,o,r,s;const c=t[20].default,u=p(c,t,t[19],null);let i=t[2]&&t[4]&&t[1].announcements&&function(t){let e,n;return{c(){e=_("div"),n=E(t[0]),S(e,"role","status"),S(e,"aria-atomic","true"),S(e,"aria-live","polite"),S(e,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,o){x(t,e,o),b(e,n)},p(t,e){1&e[0]&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,t[0])},d(t){t&&w(e)}}}(t);return{c(){e=_("div"),n=k(),u&&u.c(),o=k(),i&&i.c(),r=P(),O(e,"display","none"),S(e,"aria-hidden","true"),S(e,"data-svnav-router",t[3])},m(t,c){x(t,e,c),x(t,n,c),u&&u.m(t,c),x(t,o,c),i&&i.m(t,c),x(t,r,c),s=!0},p(t,e){u&&u.p&&(!s||524288&e[0])&&h(u,c,t,t[19],s?m(c,t[19],e,null):g(t[19]),null),t[2]&&t[4]&&t[1].announcements&&i.p(t,e)},i(t){s||(Z(u,t),s=!0)},o(t){tt(u,t),s=!1},d(t){t&&w(e),t&&w(n),u&&u.d(t),t&&w(o),i&&i.d(t),t&&w(r)}}}const ce=ft(),ue="/";function ie(t,e,n){let o,r,s,c,u,{$$slots:i={},$$scope:a}=e,{basepath:l=ue}=e,{url:f=null}=e,{history:p=Qt}=e,{primary:$=!0}=e,{a11y:m={}}=e;const h={createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0,...m},g=l,y=At(l),v=U(yt),b=U(vt),x=!v,w=ce(),_=$&&!(b&&!b.manageFocus),E=mt("");d(t,E,(t=>n(0,u=t)));const k=mt([]);d(t,k,(t=>n(18,c=t)));const P=mt(null);d(t,P,(t=>n(16,r=t)));let R=!1;const S=x?0:b.level+1,A=x?mt(zt(dt?Kt(f):p.location,y)):v;d(t,A,(t=>n(15,o=t)));const O=mt(o);d(t,O,(t=>n(17,s=t)));const I=re(h,E,A),C=t=>e=>e.filter((e=>e.id!==t));return x||l===ue||Ut(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:l}),x&&(L((()=>p.listen((t=>{const e=zt(t.location,y);O.set(o),A.set(e)})))),j(yt,A)),j(vt,{activeRoute:P,registerRoute:function(t){if(dt){if(R)return;const e=Ft(t,o.pathname);if(e)return R=!0,e}else k.update((e=>{const n=C(t.id)(e);return n.push(t),n}))},unregisterRoute:function(t){k.update(C(t))},manageFocus:_,level:S,id:w,history:x?p:b.history,basepath:x?y:b.basepath}),t.$$set=t=>{"basepath"in t&&n(10,l=t.basepath),"url"in t&&n(11,f=t.url),"history"in t&&n(12,p=t.history),"primary"in t&&n(13,$=t.primary),"a11y"in t&&n(14,m=t.a11y),"$$scope"in t&&n(19,a=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&l!==g&&Ut(3,'You cannot change the "basepath" prop. It is ignored.'),294912&t.$$.dirty[0]){const t=Mt(c,o.pathname);P.set(t)}if(163840&t.$$.dirty[0]&&x){const t=!!o.hash,e=!t&&_,n=!t||o.pathname!==s.pathname;I(e,n)}65536&t.$$.dirty[0]&&_&&r&&r.primary&&Zt({level:S,routerId:w,route:r})},[u,h,x,w,_,E,k,P,A,O,l,f,p,$,m,o,r,s,c,a,i]}var ae=class extends ut{constructor(t){super(),ct(this,t,ie,se,c,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}};function le(t,e,n=vt,o=3){U(n)||jt(t,(t=>`You cannot use ${t} outside of a ${Ct(o)}.`),e)}function fe(){return le(5),(t=>{const{subscribe:e}=U(t);return{subscribe:e}})(yt)}function de(){const{history:t}=U(vt);return t}function pe(){const t=U(bt);return t?ht(t,(t=>t.base)):mt("/")}function $e(){le(10);const t=pe(),{basepath:e}=U(vt);return n=>qt(n,f(t),e)}const me=t=>({params:16&t,location:8&t}),he=t=>({params:dt?f(t[9]):t[4],location:t[3],navigate:t[10]});function ge(t){let e,n;return e=new ae({props:{primary:t[1],$$slots:{default:[be]},$$scope:{ctx:t}}}),{c(){ot(e.$$.fragment)},m(t,o){rt(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.primary=t[1]),264217&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){tt(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function ye(t){let e;const n=t[17].default,o=p(n,t,t[18],he);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,r){o&&o.p&&(!e||262168&r)&&h(o,n,t,t[18],e?m(n,t[18],r,me):g(t[18]),he)},i(t){e||(Z(o,t),e=!0)},o(t){tt(o,t),e=!1},d(t){o&&o.d(t)}}}function ve(t){let n,o,r;const s=[{location:t[3]},{navigate:t[10]},dt?f(t[9]):t[4],t[11]];var c=t[0];function u(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(u())),{c(){n&&ot(n.$$.fragment),o=P()},m(t,e){n&&rt(n,t,e),x(t,o,e),r=!0},p(t,e){const r=3608&e?et(s,[8&e&&{location:t[3]},1024&e&&{navigate:t[10]},528&e&&nt(dt?f(t[9]):t[4]),2048&e&&nt(t[11])]):{};if(c!==(c=t[0])){if(n){V();const t=n;tt(t.$$.fragment,1,0,(()=>{st(t,1)})),X()}c?(n=new c(u()),ot(n.$$.fragment),Z(n.$$.fragment,1),rt(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&Z(n.$$.fragment,t),r=!0)},o(t){n&&tt(n.$$.fragment,t),r=!1},d(t){t&&w(o),n&&st(n,t)}}}function be(t){let e,n,o,r;const s=[ve,ye],c=[];function u(t,e){return null!==t[0]?0:1}return e=u(t),n=c[e]=s[e](t),{c(){n.c(),o=P()},m(t,n){c[e].m(t,n),x(t,o,n),r=!0},p(t,r){let i=e;e=u(t),e===i?c[e].p(t,r):(V(),tt(c[i],1,1,(()=>{c[i]=null})),X(),n=c[e],n?n.p(t,r):(n=c[e]=s[e](t),n.c()),Z(n,1),n.m(o.parentNode,o))},i(t){r||(Z(n),r=!0)},o(t){tt(n),r=!1},d(t){c[e].d(t),t&&w(o)}}}function xe(t){let e,n,o,r,s,c=t[2]&&ge(t);return{c(){e=_("div"),n=k(),c&&c.c(),o=k(),r=_("div"),O(e,"display","none"),S(e,"aria-hidden","true"),S(e,"data-svnav-route-start",t[5]),O(r,"display","none"),S(r,"aria-hidden","true"),S(r,"data-svnav-route-end",t[5])},m(t,u){x(t,e,u),x(t,n,u),c&&c.m(t,u),x(t,o,u),x(t,r,u),s=!0},p(t,[e]){t[2]?c?(c.p(t,e),4&e&&Z(c,1)):(c=ge(t),c.c(),Z(c,1),c.m(o.parentNode,o)):c&&(V(),tt(c,1,1,(()=>{c=null})),X())},i(t){s||(Z(c),s=!0)},o(t){tt(c),s=!1},d(t){t&&w(e),t&&w(n),c&&c.d(t),t&&w(o),t&&w(r)}}}const we=ft();function _e(t,n,o){let r;const s=["path","component","meta","primary"];let c,u,i,a,l=v(n,s),{$$slots:f={},$$scope:p}=n,{path:$=""}=n,{component:m=null}=n,{meta:h={}}=n,{primary:g=!0}=n;le(2,n);const b=we(),{registerRoute:x,unregisterRoute:w,activeRoute:_}=U(vt);d(t,_,(t=>o(15,c=t)));const E=pe();d(t,E,(t=>o(16,i=t)));const k=fe();d(t,k,(t=>o(3,u=t)));const P=mt(null);let R;const S=mt(),A=mt({});d(t,A,(t=>o(4,a=t))),j(bt,S),j(xt,A),j(wt,P);const O=function(){le(7);const t=$e(),{navigate:e}=de();return(n,o)=>{const r=lt(n)?n:t(n);return e(r,o)}}();var I;return dt||(I=()=>w(b),C().$$.on_destroy.push(I)),t.$$set=t=>{o(23,n=e(e({},n),y(t))),o(11,l=v(n,s)),"path"in t&&o(12,$=t.path),"component"in t&&o(0,m=t.component),"meta"in t&&o(13,h=t.meta),"primary"in t&&o(1,g=t.primary),"$$scope"in t&&o(18,p=t.$$scope)},t.$$.update=()=>{if(77834&t.$$.dirty){const t=""===$,e=Ot(i,$),n={id:b,path:$,meta:h,default:t,fullPath:t?"":e,base:t?i:Yt(e,u.pathname),primary:g,focusElement:P};S.set(n),o(14,R=x(n))}if(49152&t.$$.dirty&&o(2,r=!!(R||c&&c.id===b)),49156&t.$$.dirty&&r){const{params:t}=R||c;A.set(t)}},n=y(n),[m,g,r,u,a,b,_,E,k,A,O,l,$,h,R,c,i,f,p]}var Ee=class extends ut{constructor(t){super(),ct(this,t,_e,xe,c,{path:12,component:0,meta:13,primary:1})}};function ke(t){let n,o,r,s;const c=t[13].default,u=p(c,t,t[12],null);let i=[{href:t[0]},t[2],t[1]],a={};for(let t=0;t<i.length;t+=1)a=e(a,i[t]);return{c(){n=_("a"),u&&u.c(),A(n,a)},m(e,c){x(e,n,c),u&&u.m(n,null),o=!0,r||(s=R(n,"click",t[4]),r=!0)},p(t,[e]){u&&u.p&&(!o||4096&e)&&h(u,c,t,t[12],o?m(c,t[12],e,null):g(t[12]),null),A(n,a=et(i,[(!o||1&e)&&{href:t[0]},4&e&&t[2],2&e&&t[1]]))},i(t){o||(Z(u,t),o=!0)},o(t){tt(u,t),o=!1},d(t){t&&w(n),u&&u.d(t),r=!1,s()}}}function Pe(t,n,o){let r,s,c,u,i;const a=["to","replace","state","getProps"];let l,f=v(n,a),{$$slots:p={},$$scope:$}=n,{to:m}=n,{replace:h=!1}=n,{state:g={}}=n,{getProps:b=null}=n;le(1,n);const x=fe();d(t,x,(t=>o(11,l=t)));const w=N(),_=$e(),{navigate:E}=de();return t.$$set=t=>{o(18,n=e(e({},n),y(t))),o(17,f=v(n,a)),"to"in t&&o(5,m=t.to),"replace"in t&&o(6,h=t.replace),"state"in t&&o(7,g=t.state),"getProps"in t&&o(8,b=t.getProps),"$$scope"in t&&o(12,$=t.$$scope)},t.$$.update=()=>{2080&t.$$.dirty&&o(0,r=_(m,l)),2049&t.$$.dirty&&o(10,s=Et(l.pathname,r)),2049&t.$$.dirty&&o(9,c=r===l.pathname),512&t.$$.dirty&&o(2,u=c?{"aria-current":"page"}:{}),o(1,i=(()=>{if(at(b)){const t=b({location:l,href:r,isPartiallyCurrent:s,isCurrent:c});return{...f,...t}}return f})())},n=y(n),[r,i,u,x,function(t){if(w("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();E(r,{state:g,replace:c||h})}},m,h,g,b,c,s,l,$,p]}var Re=class extends ut{constructor(t){super(),ct(this,t,Pe,ke,c,{to:5,replace:6,state:7,getProps:8})}};const Se="darkmode";function Ae(t){let e,n;return{c(){e=_("img"),a(e.src,n="dark_mode_black_filled_rounded.svg")||S(e,"src","dark_mode_black_filled_rounded.svg"),S(e,"alt","dark-mode-icon"),S(e,"class","svelte-1ubowxn")},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function Oe(t){let e,n;return{c(){e=_("img"),a(e.src,n="light_mode_white_filled.svg")||S(e,"src","light_mode_white_filled.svg"),S(e,"alt","light-mode-icon"),S(e,"class","svelte-1ubowxn")},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function Ie(e){let n,o,s,c,u,i;function a(t,e){return t[0]?Oe:Ae}let l=a(e),f=l(e);return{c(){n=_("div"),o=_("label"),s=_("input"),c=k(),f.c(),S(s,"type","checkbox"),S(s,"class","svelte-1ubowxn"),S(o,"class","switch svelte-1ubowxn"),S(n,"class","container svelte-1ubowxn")},m(t,r){x(t,n,r),b(n,o),b(o,s),s.checked=e[0],b(o,c),f.m(o,null),u||(i=[R(s,"change",e[2]),R(s,"change",e[1])],u=!0)},p(t,[e]){1&e&&(s.checked=t[0]),l!==(l=a(t))&&(f.d(1),f=l(t),f&&(f.c(),f.m(o,null)))},i:t,o:t,d(t){t&&w(n),f.d(),u=!1,r(i)}}}function Ce(t,e,n){let o=!!window.localStorage.getItem(Se)&&"true"==window.localStorage.getItem(Se);L((()=>{r()}));const r=()=>{window.localStorage.setItem(Se,o),o?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return[o,r,function(){o=this.checked,n(0,o)}]}class Le extends ut{constructor(t){super(),ct(this,t,Ce,Ie,c,{})}}function Ne(e){let n;return{c(){n=_("h1"),n.textContent="Hello, World!",S(n,"class","svelte-zxttek")},m(t,e){x(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}class je extends ut{constructor(t){super(),ct(this,t,null,Ne,c,{})}}function Ue(t){let e;return{c(){e=E("Home")},m(t,n){x(t,e,n)},d(t){t&&w(e)}}}function Te(t){let e,n,o,r;return e=new Re({props:{to:"/",$$slots:{default:[Ue]},$$scope:{ctx:t}}}),{c(){ot(e.$$.fragment),n=k(),o=_("p"),o.textContent="Welcome to to my lab"},m(t,s){rt(e,t,s),x(t,n,s),x(t,o,s),r=!0},p(t,[n]){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(Z(e.$$.fragment,t),r=!0)},o(t){tt(e.$$.fragment,t),r=!1},d(t){st(e,t),t&&w(n),t&&w(o)}}}class Me extends ut{constructor(t){super(),ct(this,t,null,Te,c,{})}}function Fe(e){let n;return{c(){n=_("footer")},m(t,e){x(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}class ze extends ut{constructor(t){super(),ct(this,t,null,Fe,c,{})}}function He(t){let e,n;return e=new je({}),{c(){ot(e.$$.fragment)},m(t,o){rt(e,t,o),n=!0},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){tt(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function Ke(t){let e,n;return e=new Me({}),{c(){ot(e.$$.fragment)},m(t,o){rt(e,t,o),n=!0},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){tt(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function qe(t){let e,n,o,r,s,c,u,i,a,l,f;return o=new Le({}),c=new Ee({props:{path:"/",$$slots:{default:[He]},$$scope:{ctx:t}}}),i=new Ee({props:{path:"lab",$$slots:{default:[Ke]},$$scope:{ctx:t}}}),l=new ze({}),{c(){e=_("header"),n=_("nav"),ot(o.$$.fragment),r=k(),s=_("main"),ot(c.$$.fragment),u=k(),ot(i.$$.fragment),a=k(),ot(l.$$.fragment),S(n,"class","svelte-l7cenu"),S(e,"class","header-blur svelte-l7cenu"),S(s,"class","svelte-l7cenu")},m(t,d){x(t,e,d),b(e,n),rt(o,n,null),x(t,r,d),x(t,s,d),rt(c,s,null),b(s,u),rt(i,s,null),x(t,a,d),rt(l,t,d),f=!0},p(t,e){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o)},i(t){f||(Z(o.$$.fragment,t),Z(c.$$.fragment,t),Z(i.$$.fragment,t),Z(l.$$.fragment,t),f=!0)},o(t){tt(o.$$.fragment,t),tt(c.$$.fragment,t),tt(i.$$.fragment,t),tt(l.$$.fragment,t),f=!1},d(t){t&&w(e),st(o),t&&w(r),t&&w(s),st(c),st(i),t&&w(a),st(l,t)}}}function Ye(t){let e,n;return e=new ae({props:{basepath:"/",$$slots:{default:[qe]},$$scope:{ctx:t}}}),{c(){ot(e.$$.fragment)},m(t,o){rt(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){tt(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}return new class extends ut{constructor(t){super(),ct(this,t,null,Ye,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
