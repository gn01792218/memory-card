import{d as v,x as p,c as B,y as x,a as r,o as h,b as G,e as a,z as n,h as o,w as u,i as l}from"./vendor.7d6fda9c.js";const f={class:"w-full text-white text-center"},g={class:"mb-5"},b={class:"flex justify-center"},y=l("\u68CB\u76E4\u602A\u7378\u5927\u6230"),C=l("8Queen\u96E3\u984C"),E=v({setup(k){const c=p(),i=B(()=>c.path.split("/")[2]),e=x(i.value);return(m,t)=>{const s=r("router-link"),d=r("router-view");return h(),G("main",f,[a("nav",g,[a("ul",b,[a("li",{class:n(["mr-5 text-gray-300 hover:text-gray-500",[{"active-boardGame":e.value==="BoardGameMonstrt"}]]),onClick:t[0]||(t[0]=_=>e.value="BoardGameMonstrt")},[o(s,{to:"/BoardGameLobby/BoardGameMonstrt"},{default:u(()=>[y]),_:1})],2),a("li",{class:n(["text-gray-300 hover:text-gray-500",[{"active-boardGame":e.value==="BoardGameEightQueen"}]]),onClick:t[1]||(t[1]=_=>e.value="BoardGameEightQueen")},[o(s,{to:"/BoardGameLobby/BoardGameEightQueen"},{default:u(()=>[C]),_:1})],2)])]),o(d)])}}});export{E as default};
