var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function s(){return f(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){(null!=n||t.value)&&(t.value=n)}let p;function $(t){p=t}const h=[],g=[],y=[],b=[],v=Promise.resolve();let x=!1;function _(t){y.push(t)}let w=!1;const E=new Set;function j(){if(!w){w=!0;do{for(let t=0;t<h.length;t+=1){const n=h[t];$(n),k(n.$$)}for(h.length=0;g.length;)g.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];E.has(n)||(E.add(n),n())}y.length=0}while(h.length);for(;b.length;)b.pop()();x=!1,w=!1,E.clear()}}function k(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const A=new Set;function L(t,n){t&&t.i&&(A.delete(t),t.i(n))}function M(t,e,c){const{fragment:u,on_mount:a,on_destroy:i,after_update:l}=t.$$;u&&u.m(e,c),_(()=>{const e=a.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(_)}function N(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&(h.push(t),x||(x=!0,v.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(n,o,c,u,a,l,f=[-1]){const s=p;$(n);const d=o.props||{},m=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:e(),dirty:f};let h=!1;if(m.ctx=c?c(n,d,(t,e,...r)=>{const o=r.length?r[0]:e;return m.ctx&&a(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),h&&S(n,t)),e}):[],m.update(),h=!0,r(m.before_update),m.fragment=!!u&&u(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();o.intro&&L(n.$$.fragment),M(n,o.target,o.anchor),j()}$(s)}class C{$destroy(){N(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function H(n){let e;return{c(){e=l("main"),e.innerHTML='<table class="svelte-ncji4t"><tr><td>My cell</td></tr></table>'},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&i(e)}}}function O(t,n,e){let{name:r}=n;return t.$set=t=>{"name"in t&&e(0,r=t.name)},[r]}class T extends C{constructor(t){super(),q(this,t,O,H,c,{name:0})}}function B(t){let n,e,r,o,c,p,$,h,g,y;const b=new T({});return{c(){var u;n=l("main"),e=l("h1"),r=f("Hello "),o=f(t[0]),c=f("!!"),p=s(),$=l("input"),h=s(),(u=b.$$.fragment)&&u.c(),d(e,"class","svelte-1tky8bj"),d(n,"class","svelte-1tky8bj")},m(i,l,f){var s,d,v,x;a(i,n,l),u(n,e),u(e,r),u(e,o),u(e,c),u(n,p),u(n,$),m($,t[0]),u(n,h),M(b,n,null),g=!0,f&&y(),s=$,d="input",v=t[1],s.addEventListener(d,v,x),y=()=>s.removeEventListener(d,v,x)},p(t,[n]){(!g||1&n)&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(o,t[0]),1&n&&$.value!==t[0]&&m($,t[0])},i(t){g||(L(b.$$.fragment,t),g=!0)},o(t){!function(t,n,e,r){if(t&&t.o){if(A.has(t))return;A.add(t),(void 0).c.push(()=>{A.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}(b.$$.fragment,t),g=!1},d(t){t&&i(n),N(b),y()}}}function P(t,n,e){let{name:r}=n;return t.$set=t=>{"name"in t&&e(0,r=t.name)},[r,function(){r=this.value,e(0,r)}]}return new class extends C{constructor(t){super(),q(this,t,P,B,c,{name:0})}}({target:document.querySelector("#svelteApp"),props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
