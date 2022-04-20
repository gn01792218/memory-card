import{r as D,m as y,d as F,l as I,o as l,c as d,b as C,F as $,e as v,u as g,y as x,g as M,t as k,x as f,p as N}from"./vendor.f8b3c5b3.js";import{u as _}from"./useGame.c6d8f147.js";import{g as m,s as w,a as b,p as L,b as T}from"./index.94dcb8cc.js";import{u as P}from"./useUtil.eb0ae50f.js";function B(a,n,u){let o=a[n];return a[n]=a[u],a[u]=o,a}function G(a){const n=a;for(let u=a.length-1;u>0;u--){let o=Math.floor(Math.random()*(u+1));B(n,u,o)}return n}function E(){const u=D([]),{random:o,getAssetsFileURL:i}=P();function p(t,s){if(s%2!==0){console.log("\u53EA\u80FD\u8F38\u5165\u5076\u6578\u5F35\u5361\u724C\u6578\u91CF");return}if(s<8||s>20){console.log("\u5361\u724C\u6578\u91CF\u53EA\u80FD\u8F38\u5165\u4ECB\u65BC10~18\u4E4B\u9593\u7684\u6578\u5B57");return}const e=s/2;for(let r=0;r<e;r++)h(t);return G(c(u))}function h(t){let s,e;const r=i(`images/memoryCard/${m[t]}/cardDown.webp`);switch(t){case m.pokemon:s=Object.keys(L).length/2,e=o(0,s),u.push({gameTheme:m.pokemon,upImgPath:i(`images/memoryCard/${m[t]}/${e}.webp`),downImgPath:r,context:L[e],isChecked:!1});break;case m.ghostSlayer:s=Object.keys(b).length/2,e=o(0,s),u.push({gameTheme:m.ghostSlayer,upImgPath:i(`images/memoryCard/${m[t]}/${e}.webp`),downImgPath:r,context:b[e],isChecked:!1});break;case m.sumikkoGurashi:s=Object.keys(w).length/2,e=o(0,s),u.push({gameTheme:m.sumikkoGurashi,upImgPath:i(`images/memoryCard/${m[t]}/${e}.webp`),downImgPath:r,context:w[e],isChecked:!1});break}}function c(t){let s=t.length;for(let e=0;e<s;e++){let r={context:t[e].context,downImgPath:t[e].downImgPath,gameTheme:t[e].gameTheme,isChecked:t[e].isChecked,upImgPath:t[e].upImgPath};t.push(r)}return t}return{GenerateCard:p}}function S(){const a=y(),{gameType:n,gameTheme:u}=_();let o;function i(){switch(console.log("\u7522\u751F\u95DC\u5361\u5217\u8868"),n.value){case T.memoryCard:o=D([]);const p=[8,8,12,12,12,12,16,16,20,20],h=[0,0,0,40,35,30,40,35,40,35];for(let c=0;c<10;c++)o.push({gameType:n.value,gameTheme:u.value,level:c,unlock:!1,cardNum:p[c],timeCount:h[c]});o[0].unlock=!0,a.commit("game/setLevelList",o)}}return{createLevelData:i}}const j={class:"max-w-[820px] ml-auto mr-auto mt-10"},A={class:"flex flex-wrap text-white"},O=["onClick"],V={key:1},R=F({setup(a){const{createLevelData:n}=S(),{gameType:u,gameTheme:o,levelList:i}=_(),p=I(),h=y();n();function c(t){if(!t.unlock)return;const{GenerateCard:s}=E();h.commit("game/setMemoryCardListObj",s(o.value,t.cardNum)),h.commit("game/setCurrentLevel",t),p.push("/MemoryCardGame")}return(t,s)=>(l(),d("div",j,[C("ul",A,[(l(!0),d($,null,v(g(i)[g(u)][g(o)],(e,r)=>(l(),d("li",{key:r},[C("div",{class:x([{"cursor-pointer text-gray-50":e.unlock},{"text-gray-400":!e.unlock},"text-center mr-4 mb-10 border-lime-300 border-2 p-2"]),onClick:q=>c(e)},[M(" \u7B2C"+k(e.level+1)+"\u95DC ",1),C("p",null,k(e.cardNum)+"\u5F35\u5361\u7247",1),e.timeCount?(l(),d("p",{key:0,class:x([{"text-red-400":e.unlock}])},"*\u9650\u6642"+k(e.timeCount)+"\u79D2*",3)):f("",!0),e.timeCount<1?(l(),d("p",V,"\u7121\u6642\u9593\u9650\u5236")):f("",!0)],10,O)]))),128))])]))}}),U={class:"w-full"},z=C("h1",{class:"text-white text-center"},"\u904A\u6232\u95DC\u5361\u5217\u8868",-1),W=F({setup(a){y();const{gameType:n}=_();return(u,o)=>(l(),d("div",U,[z,g(n)==g(T).memoryCard?(l(),N(R,{key:0})):f("",!0)]))}});export{W as default};