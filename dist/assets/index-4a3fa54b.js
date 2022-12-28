(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function I(){}const Le=e=>e;function we(e){return e()}function le(){return Object.create(null)}function q(e){e.forEach(we)}function C(e){return typeof e=="function"}function Te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let B;function De(e,t){return B||(B=document.createElement("a")),B.href=t,e===B.href}function Ie(e){return Object.keys(e).length===0}function Se(e){return e&&C(e.destroy)?e.destroy:I}const $e=typeof window<"u";let Me=$e?()=>window.performance.now():()=>Date.now(),oe=$e?e=>requestAnimationFrame(e):I;const N=new Set;function Ee(e){N.forEach(t=>{t.c(e)||(N.delete(t),t.f())}),N.size!==0&&oe(Ee)}function Ne(e){let t;return N.size===0&&oe(Ee),{promise:new Promise(n=>{N.add(t={c:e,f:n})}),abort(){N.delete(t)}}}function j(e,t){e.appendChild(t)}function be(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Pe(e){const t=D("style");return He(be(e),t),t.sheet}function He(e,t){return j(e.head||e,t),t.sheet}function ee(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function D(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function x(){return z(" ")}function ue(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Re(e){return function(t){return t.preventDefault(),e.call(this,t)}}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Fe(e){return Array.from(e.childNodes)}function ne(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ze(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,r,t),o}const V=new Map;let Z=0;function xe(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function We(e,t){const n={stylesheet:Pe(t),rules:{}};return V.set(e,n),n}function Ye(e,t,n,r,o,c,i,w=0){const v=16.666/r;let l=`{
`;for(let A=0;A<=1;A+=v){const y=t+(n-t)*c(A);l+=A*100+`%{${i(y,1-y)}}
`}const f=l+`100% {${i(n,1-n)}}
}`,a=`__svelte_${xe(f)}_${w}`,p=be(e),{stylesheet:_,rules:m}=V.get(p)||We(p,e);m[a]||(m[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const k=e.style.animation||"";return e.style.animation=`${k?`${k}, `:""}${a} ${r}ms linear ${o}ms 1 both`,Z+=1,a}function fe(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?c=>c.indexOf(t)<0:c=>c.indexOf("__svelte")===-1),o=n.length-r.length;o&&(e.style.animation=r.join(", "),Z-=o,Z||Ge())}function Ge(){oe(()=>{Z||(V.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&P(t)}),V.clear())})}let Y;function W(e){Y=e}function qe(){if(!Y)throw new Error("Function called outside component initialization");return Y}function Xe(e){qe().$$.on_mount.push(e)}const F=[],ae=[],Q=[],de=[],Be=Promise.resolve();let re=!1;function Ke(){re||(re=!0,Be.then(ke))}function G(e){Q.push(e)}const te=new Set;let K=0;function ke(){const e=Y;do{for(;K<F.length;){const t=F[K];K++,W(t),Ue(t.$$)}for(W(null),F.length=0,K=0;ae.length;)ae.pop()();for(let t=0;t<Q.length;t+=1){const n=Q[t];te.has(n)||(te.add(n),n())}Q.length=0}while(F.length);for(;de.length;)de.pop()();re=!1,te.clear(),W(e)}function Ue(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}let H;function Je(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function he(e,t,n){e.dispatchEvent(ze(`${t?"intro":"outro"}${n}`))}const Qe=new Set;function ie(e,t){e&&e.i&&(Qe.delete(e),e.i(t))}const Ve={duration:0};function Ze(e,t,n){const r={direction:"in"};let o=t(e,n,r),c=!1,i,w,v=0;function l(){i&&fe(e,i)}function f(){const{delay:p=0,duration:_=300,easing:m=Le,tick:k=I,css:A}=o||Ve;A&&(i=Ye(e,0,1,_,p,m,A,v++)),k(0,1);const y=Me()+p,T=y+_;w&&w.abort(),c=!0,G(()=>he(e,!0,"start")),w=Ne(L=>{if(c){if(L>=T)return k(1,0),he(e,!0,"end"),l(),c=!1;if(L>=y){const u=m((L-y)/_);k(u,1-u)}}return c})}let a=!1;return{start(){a||(a=!0,fe(e),C(o)?(o=o(r),Je().then(f)):f())},invalidate(){a=!1},end(){c&&(l(),c=!1)}}}function Ce(e,t){e.d(1),t.delete(e.key)}function et(e,t,n,r,o,c,i,w,v,l,f,a){let p=e.length,_=c.length,m=p;const k={};for(;m--;)k[e[m].key]=m;const A=[],y=new Map,T=new Map;for(m=_;m--;){const d=a(o,c,m),$=n(d);let O=i.get($);O?r&&O.p(d,t):(O=l($,d),O.c()),y.set($,A[m]=O),$ in k&&T.set($,Math.abs(m-k[$]))}const L=new Set,u=new Set;function g(d){ie(d,1),d.m(w,f),i.set(d.key,d),f=d.first,_--}for(;p&&_;){const d=A[_-1],$=e[p-1],O=d.key,s=$.key;d===$?(f=d.first,p--,_--):y.has(s)?!i.has(O)||L.has(O)?g(d):u.has(s)?p--:T.get(O)>T.get(s)?(u.add(O),g(d)):(L.add(s),p--):(v($,i),p--)}for(;p--;){const d=e[p];y.has(d.key)||v(d,i)}for(;_;)g(A[_-1]);return A}function tt(e,t,n,r){const{fragment:o,after_update:c}=e.$$;o&&o.m(t,n),r||G(()=>{const i=e.$$.on_mount.map(we).filter(C);e.$$.on_destroy?e.$$.on_destroy.push(...i):q(i),e.$$.on_mount=[]}),c.forEach(G)}function nt(e,t){const n=e.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(e,t){e.$$.dirty[0]===-1&&(F.push(e),Ke(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ot(e,t,n,r,o,c,i,w=[-1]){const v=Y;W(e);const l=e.$$={fragment:null,ctx:[],props:c,update:I,not_equal:o,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(v?v.$$.context:[])),callbacks:le(),dirty:w,skip_bound:!1,root:t.target||v.$$.root};i&&i(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(a,p,..._)=>{const m=_.length?_[0]:p;return l.ctx&&o(l.ctx[a],l.ctx[a]=m)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](m),f&&rt(e,a)),p}):[],l.update(),f=!0,q(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const a=Fe(t.target);l.fragment&&l.fragment.l(a),a.forEach(P)}else l.fragment&&l.fragment.c();t.intro&&ie(e.$$.fragment),tt(e,t.target,t.anchor,t.customElement),ke()}W(v)}class it{$destroy(){nt(this,1),this.$destroy=I}$on(t,n){if(!C(n))return I;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st="/assets/github-8ce36a01.svg";function lt(e){const t=e-1;return t*t*t+1}function ct(e,{delay:t=0,duration:n=400,easing:r=lt,start:o=0,opacity:c=0}={}){const i=getComputedStyle(e),w=+i.opacity,v=i.transform==="none"?"":i.transform,l=1-o,f=w*(1-c);return{delay:t,duration:n,easing:r,css:(a,p)=>`
			transform: ${v} scale(${1-l*p});
			opacity: ${w-f*p}
		`}}const ut=300,ft=60,Ae="none";function R(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function at(e,t){return t.filter(n=>e.pointerId!==n.pointerId)}function U(e,t,n,r,o){e.dispatchEvent(new CustomEvent(`${t}${o}`,{detail:{event:n,pointersCount:r.length}}))}function dt(e,t,n,r,o,c=Ae){t.style.touchAction=c;let i=[];function w(l){i.push(l),U(t,e,l,i,"down"),r==null||r(i,l);const f=l.pointerId;function a(y){f===y.pointerId&&(i=at(y,i),i.length||p(),U(t,e,y,i,"up"),o==null||o(i,y))}function p(){_(),m(),k(),A()}const _=R(t,"pointermove",y=>{i=i.map(T=>y.pointerId===T.pointerId?y:T),U(t,e,y,i,"move"),n==null||n(i,y)}),m=R(t,"lostpointercapture",y=>{a(y)}),k=R(t,"pointerup",y=>{a(y)}),A=R(t,"pointerleave",y=>{i=[],p(),U(t,e,y,i,"up"),o==null||o(i,y)})}const v=R(t,"pointerdown",w);return{destroy:()=>{v()}}}function ht(e,t={timeframe:ut,minSwipeDistance:ft,touchAction:Ae}){const n="swipe";let r,o,c,i;function w(l,f){o=f.clientX,c=f.clientY,r=Date.now(),l.length===1&&(i=f.target)}function v(l,f){if(f.type==="pointerup"&&l.length===0&&Date.now()-r<t.timeframe){const a=f.clientX-o,p=f.clientY-c,_=Math.abs(a),m=Math.abs(p);let k=null;_>=2*m&&_>t.minSwipeDistance?k=a>0?"right":"left":m>=2*_&&m>t.minSwipeDistance&&(k=p>0?"bottom":"top"),k&&e.dispatchEvent(new CustomEvent(n,{detail:{direction:k,target:i}}))}}return dt(n,e,null,w,v,t.touchAction)}function _e(e,t,n){const r=e.slice();return r[17]=t[n].value,r[18]=t[n].x,r[19]=t[n].y,r[20]=t[n].id,r}function me(e,t,n){const r=e.slice();return r[23]=t[n],r}function pe(e,t,n){const r=e.slice();return r[26]=t[n].href,r[27]=t[n].svg,r}function ge(e){let t,n,r,o,c;return{c(){t=D("a"),n=D("li"),r=D("img"),c=x(),De(r.src,o=e[27])||b(r,"src",o),b(r,"alt",""),b(r,"class","svelte-awj1r3"),b(n,"class","svelte-awj1r3"),b(t,"href",e[26]),b(t,"target","_blank"),b(t,"rel","noreferrer")},m(i,w){ee(i,t,w),j(t,n),j(n,r),j(t,c)},p:I,d(i){i&&P(t)}}}function ye(e){let t,n;return{c(){t=D("div"),b(t,"class","block space svelte-awj1r3"),b(t,"style",n=`
          border-radius: ${e[5]/1.5}em;
        `)},m(r,o){ee(r,t,o)},p(r,o){o&32&&n!==(n=`
          border-radius: ${r[5]/1.5}em;
        `)&&b(t,"style",n)},d(r){r&&P(t)}}}function ve(e,t){let n,r,o=t[17]+"",c,i,w,v,l;return{key:e,first:null,c(){n=D("div"),r=D("div"),c=z(o),w=x(),b(r,"class","label svelte-awj1r3"),b(r,"style",i=`
          font-size: ${t[2]/(2.5+Math.floor(t[17]/10)/200)}em
        `),b(n,"class","block value svelte-awj1r3"),b(n,"style",v=`
        top: ${t[19]*(t[2]+t[5])}em;
        left: ${t[18]*(t[2]+t[5])}em;
        background-color: var(--color${Math.log2(t[17])%J+1}-07);
        border: 0.2em solid var(--color${Math.log2(t[17])%J+1});
        border-radius: ${t[5]/1.5}em;
      `),this.first=n},m(f,a){ee(f,n,a),j(n,r),j(r,c),j(n,w)},p(f,a){t=f,a&2&&o!==(o=t[17]+"")&&ne(c,o),a&6&&i!==(i=`
          font-size: ${t[2]/(2.5+Math.floor(t[17]/10)/200)}em
        `)&&b(r,"style",i),a&38&&v!==(v=`
        top: ${t[19]*(t[2]+t[5])}em;
        left: ${t[18]*(t[2]+t[5])}em;
        background-color: var(--color${Math.log2(t[17])%J+1}-07);
        border: 0.2em solid var(--color${Math.log2(t[17])%J+1});
        border-radius: ${t[5]/1.5}em;
      `)&&b(n,"style",v)},i(f){l||G(()=>{l=Ze(n,ct,{}),l.start()})},o:I,d(f){f&&P(n)}}}function _t(e){let t,n,r,o,c,i,w,v,l,f,a,p,_,m=[],k=new Map,A,y,T,L=e[7],u=[];for(let s=0;s<L.length;s+=1)u[s]=ge(pe(e,L,s));let g={length:e[0]**2},d=[];for(let s=0;s<g.length;s+=1)d[s]=ye(me(e,g,s));let $=Object.values(e[1]);const O=s=>s[20];for(let s=0;s<$.length;s+=1){let E=_e(e,$,s),h=O(E);k.set(h,m[s]=ve(h,E))}return{c(){t=D("main"),n=D("nav"),r=D("div"),o=z(e[3]),c=z(" / "),i=z(e[4]),w=x(),v=D("ul");for(let s=0;s<u.length;s+=1)u[s].c();l=x(),f=D("div"),a=D("div");for(let s=0;s<d.length;s+=1)d[s].c();_=x();for(let s=0;s<m.length;s+=1)m[s].c();b(r,"class","goal svelte-awj1r3"),b(v,"class","socials svelte-awj1r3"),b(n,"class","svelte-awj1r3"),b(a,"class","grid svelte-awj1r3"),b(a,"style",p=`
      grid-template-columns: repeat(${e[0]}, 1fr)
    `),b(f,"class","board svelte-awj1r3"),b(f,"style",A=`
    --block-size: ${e[2]}em;
    --gap: ${e[5]}em;
  `),b(t,"class","svelte-awj1r3")},m(s,E){ee(s,t,E),j(t,n),j(n,r),j(r,o),j(r,c),j(r,i),j(n,w),j(n,v);for(let h=0;h<u.length;h+=1)u[h].m(v,null);j(t,l),j(t,f),j(f,a);for(let h=0;h<d.length;h+=1)d[h].m(a,null);j(f,_);for(let h=0;h<m.length;h+=1)m[h].m(f,null);y||(T=[ue(window,"keydown",Re(e[6])),Se(ht.call(null,t,{timeframe:1e3,minSwipeDistance:10,touchAction:"none"})),ue(t,"swipe",e[6])],y=!0)},p(s,[E]){if(E&8&&ne(o,s[3]),E&16&&ne(i,s[4]),E&128){L=s[7];let h;for(h=0;h<L.length;h+=1){const M=pe(s,L,h);u[h]?u[h].p(M,E):(u[h]=ge(M),u[h].c(),u[h].m(v,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=L.length}if(E&33){g={length:s[0]**2};let h;for(h=0;h<g.length;h+=1){const M=me(s,g,h);d[h]?d[h].p(M,E):(d[h]=ye(M),d[h].c(),d[h].m(a,null))}for(;h<d.length;h+=1)d[h].d(1);d.length=g.length}E&1&&p!==(p=`
      grid-template-columns: repeat(${s[0]}, 1fr)
    `)&&b(a,"style",p),E&38&&($=Object.values(s[1]),m=et(m,E,O,1,s,$,k,f,Ce,ve,null,_e)),E&36&&A!==(A=`
    --block-size: ${s[2]}em;
    --gap: ${s[5]}em;
  `)&&b(f,"style",A)},i(s){for(let E=0;E<$.length;E+=1)ie(m[E])},o:I,d(s){s&&P(t),ce(u,s),ce(d,s);for(let E=0;E<m.length;E+=1)m[E].d();y=!1,q(T)}}}let J=7,mt=2;function pt(e,t,n){let r,o,c,i,w,v,l=3,f=2,a=32,p=3,_={};const m=(u,g)=>Math.floor(Math.random()*(g-u+1)+u),k=()=>{n(1,_={});for(let u=0;u<mt;u++)w(Object.values(_))},A=()=>{p&&(n(4,a*=2**p),n(0,l++,l),p--)},y={ArrowUp:"UP",ArrowDown:"DOWN",ArrowLeft:"LEFT",ArrowRight:"RIGHT",w:"UP",s:"DOWN",a:"LEFT",d:"RIGHT",top:"UP",bottom:"DOWN",left:"LEFT",right:"RIGHT"},T=u=>{const g=u.detail.direction??u.key;if(!y[g])return;let d=v(y[g]);n(1,_={..._});const $=Object.values(_);if($.length===l**2)return k();n(3,f=$.reduce((O,{value:s})=>O<s?s:O,2)),f===a&&A(),d&&w($)};Xe(k);const L=[{href:"https://github.com/cheeem/2048",svg:st}];return e.$$.update=()=>{e.$$.dirty&1&&n(2,r=12/l),e.$$.dirty&4&&n(5,o=r/5),e.$$.dirty&1&&n(9,c={UP:(u,g)=>u.x*l+u.y-(g.x*l+g.y),DOWN:(u,g)=>g.x*l+g.y-(u.x*l+u.y),RIGHT:(u,g)=>g.x+g.y*l-(u.x+u.y*l),LEFT:(u,g)=>u.x+u.y*l-(g.x+g.y*l)}),e.$$.dirty&1&&n(8,i={UP:{main_axis:"y",cross_axis:"x",increment:-1,limit:0},DOWN:{main_axis:"y",cross_axis:"x",increment:1,limit:l-1},LEFT:{main_axis:"x",cross_axis:"y",increment:-1,limit:0},RIGHT:{main_axis:"x",cross_axis:"y",increment:1,limit:l-1}}),e.$$.dirty&3&&(w=u=>{let g=0;do g=Math.random();while(_[g]);let d=0,$=0;do d=m(0,l-1),$=m(0,l-1);while(u.some(s=>s.x===d&&s.y===$));let O=!m(0,9)&&u.length?4:2;n(1,_[g]={id:g,x:d,y:$,value:O},_)}),e.$$.dirty&770&&(v=u=>{let g=!1;return Object.values(_).sort(c[u]).forEach((d,$,O)=>{const{main_axis:s,cross_axis:E,increment:h,limit:M}=i[u];for(;;){let{[s]:X,[E]:Oe,value:je}=d;if(X===M)return;X+=h;const S=O[$-1],se=X===(S==null?void 0:S[s])&&Oe===(S==null?void 0:S[E]);if(se&&je!==S.value)return;if(d[s]=X,g=!0,!!se){delete _[S.id],d.value*=2;return}}}),g})},[l,_,r,f,a,o,T,L,i,c]}class gt extends it{constructor(t){super(),ot(this,t,pt,_t,Te,{})}}new gt({target:document.getElementById("app")});