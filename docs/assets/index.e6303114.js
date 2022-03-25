import{d as l,r as _,a as h,o as c,c as i,b as f,F as k,e as y,f as d,w as A,u as g,g as v,t as b,h as x,i as L,j as $,k as E}from"./vendor.20ff75fd.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};O();const w={class:"w-full flex justify-between bg-black text-white ml-auto mr-auto"},I=f("p",{class:""},"AAAAAAAA",-1),S={class:"w-1/4 flex justify-around"},T=l({setup(e){const t=_([{name:"Home",path:"/"},{name:"About",path:"/About"}]);return(a,n)=>{const r=h("router-link");return c(),i("nav",w,[I,f("ul",S,[(c(!0),i(k,null,y(g(t),(o,s)=>(c(),i("li",{class:"hover:text-slate-500",key:s},[d(r,{to:o.path},{default:A(()=>[v(b(o.name),1)]),_:2},1032,["to"])]))),128))])])}}}),P={class:"container h-screen mx-auto p-10"},j=l({setup(e){return(t,a)=>{const n=h("router-view");return c(),i("div",P,[d(T),d(n)])}}}),D="modulepreload",m={},N="./",u=function(t,a){return!a||a.length===0?t():Promise.all(a.map(n=>{if(n=`${N}${n}`,n in m)return;m[n]=!0;const r=n.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":D,r||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),r)return new Promise((C,p)=>{s.addEventListener("load",C),s.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},V=[{path:"/",name:"Home",component:()=>u(()=>import("./Home.6ecbea91.js"),["assets/Home.6ecbea91.js","assets/vendor.20ff75fd.js"])},{path:"/About",name:"About",component:()=>u(()=>import("./About.3c4df026.js"),["assets/About.3c4df026.js","assets/vendor.20ff75fd.js"])},{path:"/MemoryCardGame",name:"MemoryCardGame",component:()=>u(()=>import("./MemoryCardGame.dcd6401e.js"),["assets/MemoryCardGame.dcd6401e.js","assets/vendor.20ff75fd.js"])}],B=x({history:L("/memory-card"),routes:V}),R={gameTheme:null,memoryCardListObj:{}},F={},G={setGameTheme(e,t){e.gameTheme=t},setmemoryCardListObj(e,t){console.log("\u8A2D\u7F6E\u4E3B\u984C\u8A18\u61B6\u5361\u724C"),e.memoryCardListObj[e.gameTheme]||(e.memoryCardListObj[e.gameTheme]=t)}},H={};var q={state:R,actions:F,mutations:G,getters:H,namespaced:!0};const M={checkCardCount:0,checkCardIndexArr:[],checkCard1Content:0,checkCard2Content:0},U={},W={addCheckCardCount(e){e.checkCardCount++},setCheckCardCount(e,t){e.checkCardCount=t},setCheckCard1(e,t){e.checkCard1Content=t},setCheckCard2(e,t){e.checkCard2Content=t},addCheckCardIndexArr(e,t){e.checkCardIndexArr.push(t)},reSetCheckCardIndexArr(e){e.checkCardIndexArr=[]},shiftCheckCardIndexArr(e){return e.checkCardIndexArr.shift()}},K={};var z={state:M,actions:U,mutations:W,getters:K,namespaced:!0};const J={score:0},Q={},X={addScore(e,t){e.score+=t},setUserScore(e,t){e.score=t}},Y={};var Z={state:J,actions:Q,mutations:X,getters:Y,namespaced:!0},ee=$({state:{},mutations:{},actions:{},modules:{gameThemes:q,memoryCard:z,user:Z}});E(j).use(B).use(ee).mount("#app");