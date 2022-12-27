(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function O(){}const Oe=e=>e;function he(e){return e()}function re(){return Object.create(null)}function q(e){e.forEach(he)}function C(e){return typeof e=="function"}function _e(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Y;function Le(e,t){return Y||(Y=document.createElement("a")),Y.href=t,e===Y.href}function Te(e){return Object.keys(e).length===0}function De(e){return e&&C(e.destroy)?e.destroy:O}const me=typeof window<"u";let Ie=me?()=>window.performance.now():()=>Date.now(),ne=me?e=>requestAnimationFrame(e):O;const S=new Set;function pe(e){S.forEach(t=>{t.c(e)||(S.delete(t),t.f())}),S.size!==0&&ne(pe)}function Ne(e){let t;return S.size===0&&ne(pe),{promise:new Promise(n=>{S.add(t={c:e,f:n})}),abort(){S.delete(t)}}}function b(e,t){e.appendChild(t)}function ge(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Se(e){const t=A("style");return Me(ge(e),t),t.sheet}function Me(e,t){return b(e.head||e,t),t.sheet}function W(e,t,n){e.insertBefore(t,n||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function ye(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function A(e){return document.createElement(e)}function ve(e){return document.createTextNode(e)}function J(){return ve(" ")}function ie(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ke(e){return function(t){return t.preventDefault(),e.call(this,t)}}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Pe(e){return Array.from(e.childNodes)}function ze(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function He(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}const Q=new Map;let V=0;function Re(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Fe(e,t){const n={stylesheet:Se(t),rules:{}};return Q.set(e,n),n}function je(e,t,n,i,r,o,s,l=0){const p=16.666/i;let d=`{
`;for(let f=0;f<=1;f+=p){const a=t+(n-t)*o(f);d+=f*100+`%{${s(a,1-a)}}
`}const _=d+`100% {${s(n,1-n)}}
}`,m=`__svelte_${Re(_)}_${l}`,c=ge(e),{stylesheet:u,rules:h}=Q.get(c)||Fe(c,e);h[m]||(h[m]=!0,u.insertRule(`@keyframes ${m} ${_}`,u.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${m} ${i}ms linear ${r}ms 1 both`,V+=1,m}function oe(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),V-=r,V||qe())}function qe(){ne(()=>{V||(Q.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&N(t)}),Q.clear())})}let F;function R(e){F=e}function We(){if(!F)throw new Error("Function called outside component initialization");return F}function Ye(e){We().$$.on_mount.push(e)}const P=[],se=[],K=[],le=[],Ge=Promise.resolve();let te=!1;function Xe(){te||(te=!0,Ge.then($e))}function j(e){K.push(e)}const ee=new Set;let G=0;function $e(){const e=F;do{for(;G<P.length;){const t=P[G];G++,R(t),Be(t.$$)}for(R(null),P.length=0,G=0;se.length;)se.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];ee.has(n)||(ee.add(n),n())}K.length=0}while(P.length);for(;le.length;)le.pop()();te=!1,ee.clear(),R(e)}function Be(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}let M;function Ke(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function ce(e,t,n){e.dispatchEvent(He(`${t?"intro":"outro"}${n}`))}const U=new Set;let Ue;function Z(e,t){e&&e.i&&(U.delete(e),e.i(t))}function Je(e,t,n,i){if(e&&e.o){if(U.has(e))return;U.add(e),Ue.c.push(()=>{U.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const Qe={duration:0};function Ve(e,t,n){const i={direction:"in"};let r=t(e,n,i),o=!1,s,l,p=0;function d(){s&&oe(e,s)}function _(){const{delay:c=0,duration:u=300,easing:h=Oe,tick:g=O,css:f}=r||Qe;f&&(s=je(e,0,1,u,c,h,f,p++)),g(0,1);const a=Ie()+c,y=a+u;l&&l.abort(),o=!0,j(()=>ce(e,!0,"start")),l=Ne(L=>{if(o){if(L>=y)return g(1,0),ce(e,!0,"end"),d(),o=!1;if(L>=a){const D=h((L-a)/u);g(D,1-D)}}return o})}let m=!1;return{start(){m||(m=!0,oe(e),C(r)?(r=r(i),Ke().then(_)):_())},invalidate(){m=!1},end(){o&&(d(),o=!1)}}}function Ze(e,t){e.d(1),t.delete(e.key)}function Ce(e,t,n,i,r,o,s,l,p,d,_,m){let c=e.length,u=o.length,h=c;const g={};for(;h--;)g[e[h].key]=h;const f=[],a=new Map,y=new Map;for(h=u;h--;){const $=m(r,o,h),x=n($);let w=s.get(x);w?i&&w.p($,t):(w=d(x,$),w.c()),a.set(x,f[h]=w),x in g&&y.set(x,Math.abs(h-g[x]))}const L=new Set,D=new Set;function T($){Z($,1),$.m(l,_),s.set($.key,$),_=$.first,u--}for(;c&&u;){const $=f[u-1],x=e[c-1],w=$.key,I=x.key;$===x?(_=$.first,c--,u--):a.has(I)?!s.has(w)||L.has(w)?T($):D.has(I)?c--:y.get(w)>y.get(I)?(D.add(w),T($)):(L.add(I),c--):(p(x,s),c--)}for(;c--;){const $=e[c];a.has($.key)||p($,s)}for(;u;)T(f[u-1]);return f}function et(e){e&&e.c()}function we(e,t,n,i){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),i||j(()=>{const s=e.$$.on_mount.map(he).filter(C);e.$$.on_destroy?e.$$.on_destroy.push(...s):q(s),e.$$.on_mount=[]}),o.forEach(j)}function Ee(e,t){const n=e.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(e,t){e.$$.dirty[0]===-1&&(P.push(e),Xe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(e,t,n,i,r,o,s,l=[-1]){const p=F;R(e);const d=e.$$={fragment:null,ctx:[],props:o,update:O,not_equal:r,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:re(),dirty:l,skip_bound:!1,root:t.target||p.$$.root};s&&s(d.root);let _=!1;if(d.ctx=n?n(e,t.props||{},(m,c,...u)=>{const h=u.length?u[0]:c;return d.ctx&&r(d.ctx[m],d.ctx[m]=h)&&(!d.skip_bound&&d.bound[m]&&d.bound[m](h),_&&tt(e,m)),c}):[],d.update(),_=!0,q(d.before_update),d.fragment=i?i(d.ctx):!1,t.target){if(t.hydrate){const m=Pe(t.target);d.fragment&&d.fragment.l(m),m.forEach(N)}else d.fragment&&d.fragment.c();t.intro&&Z(e.$$.fragment),we(e,t.target,t.anchor,t.customElement),$e()}R(p)}class be{$destroy(){Ee(this,1),this.$destroy=O}$on(t,n){if(!C(n))return O;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function nt(e){const t=e-1;return t*t*t+1}function rt(e,{delay:t=0,duration:n=400,easing:i=nt,start:r=0,opacity:o=0}={}){const s=getComputedStyle(e),l=+s.opacity,p=s.transform==="none"?"":s.transform,d=1-r,_=l*(1-o);return{delay:t,duration:n,easing:i,css:(m,c)=>`
			transform: ${p} scale(${1-d*c});
			opacity: ${l-_*c}
		`}}const it=300,ot=60,Ae="none";function k(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function st(e,t){return t.filter(n=>e.pointerId!==n.pointerId)}function X(e,t,n,i,r){e.dispatchEvent(new CustomEvent(`${t}${r}`,{detail:{event:n,pointersCount:i.length}}))}function lt(e,t,n,i,r,o=Ae){t.style.touchAction=o;let s=[];function l(d){s.push(d),X(t,e,d,s,"down"),i==null||i(s,d);const _=d.pointerId;function m(a){_===a.pointerId&&(s=st(a,s),s.length||c(),X(t,e,a,s,"up"),r==null||r(s,a))}function c(){u(),h(),g(),f()}const u=k(t,"pointermove",a=>{s=s.map(y=>a.pointerId===y.pointerId?a:y),X(t,e,a,s,"move"),n==null||n(s,a)}),h=k(t,"lostpointercapture",a=>{m(a)}),g=k(t,"pointerup",a=>{m(a)}),f=k(t,"pointerleave",a=>{s=[],c(),X(t,e,a,s,"up"),r==null||r(s,a)})}const p=k(t,"pointerdown",l);return{destroy:()=>{p()}}}function ct(e,t={timeframe:it,minSwipeDistance:ot,touchAction:Ae}){const n="swipe";let i,r,o,s;function l(d,_){r=_.clientX,o=_.clientY,i=Date.now(),d.length===1&&(s=_.target)}function p(d,_){if(_.type==="pointerup"&&d.length===0&&Date.now()-i<t.timeframe){const m=_.clientX-r,c=_.clientY-o,u=Math.abs(m),h=Math.abs(c);let g=null;u>=2*h&&u>t.minSwipeDistance?g=m>0?"right":"left":h>=2*u&&h>t.minSwipeDistance&&(g=c>0?"bottom":"top"),g&&e.dispatchEvent(new CustomEvent(n,{detail:{direction:g,target:s}}))}}return lt(n,e,null,l,p,t.touchAction)}const ut="/assets/github-8ce36a01.svg";function ue(e,t,n){const i=e.slice();return i[1]=t[n].href,i[2]=t[n].svg,i}function fe(e){let t,n,i,r,o;return{c(){t=A("a"),n=A("li"),i=A("img"),o=J(),Le(i.src,r=e[2])||v(i,"src",r),v(i,"alt",""),v(i,"class","svelte-1p31fz5"),v(n,"class","svelte-1p31fz5"),v(t,"href",e[1]),v(t,"target","_blank"),v(t,"rel","noreferrer")},m(s,l){W(s,t,l),b(t,n),b(n,i),b(t,o)},p:O,d(s){s&&N(t)}}}function ft(e){let t,n,i=e[0],r=[];for(let o=0;o<i.length;o+=1)r[o]=fe(ue(e,i,o));return{c(){t=A("nav"),n=A("ul");for(let o=0;o<r.length;o+=1)r[o].c();v(n,"class","socials svelte-1p31fz5"),v(t,"class","svelte-1p31fz5")},m(o,s){W(o,t,s),b(t,n);for(let l=0;l<r.length;l+=1)r[l].m(n,null)},p(o,[s]){if(s&1){i=o[0];let l;for(l=0;l<i.length;l+=1){const p=ue(o,i,l);r[l]?r[l].p(p,s):(r[l]=fe(p),r[l].c(),r[l].m(n,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}},i:O,o:O,d(o){o&&N(t),ye(r,o)}}}function at(e){return[[{href:"https://github.com/cheeem/2048",svg:ut}]]}class dt extends be{constructor(t){super(),xe(this,t,at,ft,_e,{})}}function ae(e,t,n){const i=e.slice();return i[9]=t[n].value,i[10]=t[n].x,i[11]=t[n].y,i[12]=t[n].id,i}function ht(e,t,n){const i=e.slice();return i[15]=t[n],i}function _t(e){let t;return{c(){t=A("div"),v(t,"class","block space svelte-1c92qen")},m(n,i){W(n,t,i)},p:O,d(n){n&&N(t)}}}function de(e,t){let n,i,r=t[9]+"",o,s,l,p,d;return{key:e,first:null,c(){n=A("div"),i=A("div"),o=ve(r),l=J(),v(i,"class","label svelte-1c92qen"),v(i,"style",s=`
          font-size: ${1/(1+Math.floor(t[9]/10)/400)}em
        `),v(n,"class","block value svelte-1c92qen"),v(n,"style",p=`
        top: ${t[11]*(z+H)}em;
        left: ${t[10]*(z+H)}em;
        background-color: var(--color${Math.log2(t[9])%B+1}-07);
        border: 0.2em solid var(--color${Math.log2(t[9])%B+1});
      `),this.first=n},m(_,m){W(_,n,m),b(n,i),b(i,o),b(n,l)},p(_,m){t=_,m&1&&r!==(r=t[9]+"")&&ze(o,r),m&1&&s!==(s=`
          font-size: ${1/(1+Math.floor(t[9]/10)/400)}em
        `)&&v(i,"style",s),m&1&&p!==(p=`
        top: ${t[11]*(z+H)}em;
        left: ${t[10]*(z+H)}em;
        background-color: var(--color${Math.log2(t[9])%B+1}-07);
        border: 0.2em solid var(--color${Math.log2(t[9])%B+1});
      `)&&v(n,"style",p)},i(_){d||j(()=>{d=Ve(n,rt,{}),d.start()})},o:O,d(_){_&&N(n)}}}function mt(e){let t,n,i,r,o,s,l=[],p=new Map,d,_,m;n=new dt({});let c={length:E**2},u=[];for(let f=0;f<c.length;f+=1)u[f]=_t(ht(e,c,f));let h=Object.values(e[0]);const g=f=>f[12];for(let f=0;f<h.length;f+=1){let a=ae(e,h,f),y=g(a);p.set(y,l[f]=de(y,a))}return{c(){t=A("main"),et(n.$$.fragment),i=J(),r=A("div"),o=A("div");for(let f=0;f<u.length;f+=1)u[f].c();s=J();for(let f=0;f<l.length;f+=1)l[f].c();v(o,"class","grid svelte-1c92qen"),v(o,"style",`
      grid-template-columns: repeat(${E}, 1fr)
    `),v(r,"class","board svelte-1c92qen"),v(r,"style",`
    --block-size: ${z}em;
    --gap: ${H}em;
  `),v(t,"class","svelte-1c92qen")},m(f,a){W(f,t,a),we(n,t,null),b(t,i),b(t,r),b(r,o);for(let y=0;y<u.length;y+=1)u[y].m(o,null);b(r,s);for(let y=0;y<l.length;y+=1)l[y].m(r,null);d=!0,_||(m=[ie(window,"keydown",ke(e[1])),De(ct.call(null,t,{timeframe:1e3,minSwipeDistance:10,touchAction:"none"})),ie(t,"swipe",e[1])],_=!0)},p(f,[a]){a&1&&(h=Object.values(f[0]),l=Ce(l,a,g,1,f,h,p,r,Ze,de,null,ae))},i(f){if(!d){Z(n.$$.fragment,f);for(let a=0;a<h.length;a+=1)Z(l[a]);d=!0}},o(f){Je(n.$$.fragment,f),d=!1},d(f){f&&N(t),Ee(n),ye(u,f);for(let a=0;a<l.length;a+=1)l[a].d();_=!1,q(m)}}}let B=7,z=2.5,H=.5,E=4,pt=2;function gt(e,t,n){let i,r,o,s,l={};const p=(c,u)=>Math.floor(Math.random()*(u-c+1)+c),d=()=>{n(0,l={});for(let c=0;c<pt;c++)o(Object.values(l))},_={ArrowUp:"UP",ArrowDown:"DOWN",ArrowLeft:"LEFT",ArrowRight:"RIGHT",w:"UP",s:"DOWN",a:"LEFT",d:"RIGHT",top:"UP",bottom:"DOWN",left:"LEFT",right:"RIGHT"},m=c=>{const u=c.detail.direction??c.key;if(!_[u])return;let h=s(_[u]);n(0,l={...l});const g=Object.values(l);if(g.length===E**2)return d();h&&o(g)};return Ye(d),e.$$.update=()=>{e.$$.dirty&1&&(o=c=>{let u=0;do u=Math.random();while(l[u]);let h=0,g=0;do h=p(0,E-1),g=p(0,E-1);while(c.some(a=>a.x===h&&a.y===g));let f=p(0,9)?2:4;n(0,l[u]={id:u,x:h,y:g,value:f},l)}),e.$$.dirty&13&&(s=c=>{let u=!1;return Object.values(l).sort(i[c]).forEach((h,g,f)=>{const{main_axis:a,cross_axis:y,increment:L,limit:D}=r[c];for(;;){let{[a]:T,[y]:$,value:x}=h;if(T===D)return;T+=L;const w=f[g-1],I=T===(w==null?void 0:w[a])&&$===(w==null?void 0:w[y]);if(I&&x!==w.value)return;if(h[a]=T,u=!0,!!I){delete l[w.id],h.value*=2;return}}}),u})},n(3,i={UP:(c,u)=>c.x*E+c.y-(u.x*E+u.y),DOWN:(c,u)=>u.x*E+u.y-(c.x*E+c.y),RIGHT:(c,u)=>u.x+u.y*E-(c.x+c.y*E),LEFT:(c,u)=>c.x+c.y*E-(u.x+u.y*E)}),n(2,r={UP:{main_axis:"y",cross_axis:"x",increment:-1,limit:0},DOWN:{main_axis:"y",cross_axis:"x",increment:1,limit:E-1},LEFT:{main_axis:"x",cross_axis:"y",increment:-1,limit:0},RIGHT:{main_axis:"x",cross_axis:"y",increment:1,limit:E-1}}),[l,m,r,i]}class yt extends be{constructor(t){super(),xe(this,t,gt,mt,_e,{})}}new yt({target:document.getElementById("app")});
