import{d as i,l,m as g,o as s,c as a,b as m,F as w,e as y,t as h,u as r,n as C,f as u}from"./vendor.52a61751.js";import{g as f,a as v}from"./index.d53311e7.js";const k={class:"w-full"},T=m("h1",{class:"text-white text-center"},"\u9078\u64C7\u904A\u6232\u7A2E\u985E",-1),S={class:"text-white"},$=["onClick"],x=i({setup(_){const t=l(),e=g(()=>t.state.game.gameTypeList);function n(o){t.commit("game/setGameType",o)}return(o,d)=>(s(),a("div",k,[T,m("div",S,[(s(!0),a(w,null,y(r(e),(p,b)=>(s(),a("button",{class:"mr-5 cursor-pointer",key:p,onClick:c=>n(b)},h(r(f)[b]),9,$))),128))])]))}}),L={class:"w-full"},U=m("h1",{class:"text-white text-center"},"\u9078\u64C7\u904A\u6232\u4E3B\u984C",-1),E={class:"text-white flex"},B=["onClick"],G=i({setup(_){const t=C(),e=l(),n=g(()=>e.state.game.gameType),o=g(()=>e.state.game.gameTypeList[n.value]);function d(p){e.commit("game/setGameTheme",p),t.push("/LevelList")}return(p,b)=>(s(),a("div",L,[U,m("div",E,[(s(!0),a(w,null,y(r(o),c=>(s(),a("h1",{class:"mr-5 cursor-pointer",key:c,onClick:se=>d(c)},h(r(v)[c]),9,B))),128))])]))}});var A="./assets/memoryCard-back.2e0b13c0.webp",F="./assets/memoryCard-front.faecd3b4.webp",I="./assets/1.a2932f16.webp",N="./assets/2.a25e727a.webp",R="./assets/3.6db8adec.webp",V="./assets/4.4277f3e6.webp",D="./assets/5.63d18e73.webp",j="./assets/6.1bcf6b0b.webp",q="./assets/7.47eb8d21.webp",z="./assets/8.55247c33.webp",H="./assets/cardUp.bb2428e0.webp",J="./assets/1.5ab201f7.webp",K="./assets/2.467f6acd.webp",M="./assets/3.2f45607d.webp",O="./assets/4.733f5e11.webp",P="./assets/5.075e4568.webp",Q="./assets/6.63cef056.webp",W="./assets/7.d06921d0.webp",X="./assets/cardUp.da456c9f.webp";function Y(_){return new URL({"../../assets/images/memoryCard/memoryCard-back.webp":A,"../../assets/images/memoryCard/memoryCard-front.webp":F,"../../assets/images/memoryCard/ghostSlayer/1.webp":I,"../../assets/images/memoryCard/ghostSlayer/2.webp":N,"../../assets/images/memoryCard/ghostSlayer/3.webp":R,"../../assets/images/memoryCard/ghostSlayer/4.webp":V,"../../assets/images/memoryCard/ghostSlayer/5.webp":D,"../../assets/images/memoryCard/ghostSlayer/6.webp":j,"../../assets/images/memoryCard/ghostSlayer/7.webp":q,"../../assets/images/memoryCard/ghostSlayer/8.webp":z,"../../assets/images/memoryCard/ghostSlayer/cardUp.webp":H,"../../assets/images/memoryCard/pokemon/1.webp":J,"../../assets/images/memoryCard/pokemon/2.webp":K,"../../assets/images/memoryCard/pokemon/3.webp":M,"../../assets/images/memoryCard/pokemon/4.webp":O,"../../assets/images/memoryCard/pokemon/5.webp":P,"../../assets/images/memoryCard/pokemon/6.webp":Q,"../../assets/images/memoryCard/pokemon/7.webp":W,"../../assets/images/memoryCard/pokemon/cardUp.webp":X}[`../../assets/${_}`],self.location).href}const Z={class:"w-full"},ee=["src"],oe=i({setup(_){const t=l(),e=Y("images/memoryCard/pokemon/1.webp");return t.commit("game/loadGameTypeList"),(n,o)=>(s(),a("div",Z,[m("img",{src:r(e),alt:""},null,8,ee),u(x),u(G)]))}});export{oe as default};
