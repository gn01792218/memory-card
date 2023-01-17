import{x as E,d as x,o as l,b as i,h as S,w as z,F as _,f as C,y as M,g as m,j as g,T as O,z as H,r as U,A as j,e as o,k as h,B as q,C as D,i as I}from"./vendor.32c13e81.js";import{q as V}from"./index.91cd5bdb.js";var v=(n=>(n[n.SUCCESS=0]="SUCCESS",n[n.ERROR=1]="ERROR",n))(v||{});const N=500;function X(){const n=E([]);function c(s,r,a,e=N){s.push({type:a,content:r}),setTimeout(()=>{s.shift()},e)}return{msgArray:n,pushMsg:c}}const L={class:"absolute text-red-600 font-extrabold"},w=x({props:{msgObj:null},setup(n){return(c,s)=>(l(),i("ul",L,[S(O,{name:n.msgObj.transitionName},{default:z(()=>[(l(!0),i(_,null,C(n.msgObj.msgArr,r=>(l(),i("li",{class:M([{"text-red-600":r.type===m(v).ERROR},{"text-yellow-500":r.type===m(v).SUCCESS}]),key:r.content},g(r.content),3))),128))]),_:1},8,["name"])]))}}),G={class:"board relative"},Q=["id","onClick","onMouseover","onMouseleave"],T=x({props:{size:null,openHint:{type:Boolean}},setup(n){const c=n,{size:s,openHint:r}=H(c),{pushMsg:a,msgArray:e}=X(),p=U([]),b=E(0);function B(t,d){if(p[t])return a(e.value,"\u4E0D\u80FD\u518D\u6B64\u884C\u653E\u7687\u540E!",v.ERROR),!1;for(let u=0;u<t;u++){if(d===p[u])return a(e.value,"\u76F4\u7DDA\u4E0A\u6709\u5176\u4ED6\u7687\u540E!",v.ERROR),!1;if(Math.abs(d-p[u])===Math.abs(u-t))return a(e.value,"\u659C\u7DDA\u4E0A\u6709\u5176\u4ED6\u7687\u540E!",v.ERROR),!1}return!0}function F(){const t=document.createElement("IMG");return t.src=V,t.classList.add("w-full"),t.classList.add("h-full"),t.classList.add("queen"),t}function y(t,d){const u=document.getElementById(`board-${t}${d}`),f=u==null?void 0:u.firstChild;if(f)p[t]=null,f.remove(),b.value--;else{if(!B(t,d))return;p[t]=d,b.value++,u==null||u.appendChild(F()),b.value===s.value&&j(()=>k())}}function A(t,d){!!r.value}function $(t,d){!!r.value}function k(){a(e.value,"\u6210\u529F\u7834\u89E3!",v.SUCCESS)}return(t,d)=>(l(),i("section",G,[S(w,{"msg-obj":{transitionName:"msg",msgArr:m(e)}},null,8,["msg-obj"]),(l(!0),i(_,null,C(m(s),u=>(l(),i("section",{class:"flex",key:u},[(l(!0),i(_,null,C(m(s),f=>(l(),i("div",{class:"board-col",id:`board-${u}${f}`,key:f,onClick:R=>y(u,f),onMouseover:R=>A(),onMouseleave:R=>$()},null,40,Q))),128))]))),128))]))}}),P={class:"w-full text-white text-center"},W=o("header",{class:"mb-5"},[o("section",null," \u904A\u6232\u65B9\u5F0F : \u8ACB\u5C07\u6240\u6709\u7687\u540E\u653E\u9032\u68CB\u76E4\u4E2D\uFF0C\u4E26\u4E14\u6BCF\u500B\u7687\u540E\u90FD\u4E0D\u80FD\u4E92\u76F8\u653B\u64CA ")],-1),J={class:"mb-5"},K=o("label",{for:""},"\u9078\u64C7\u68CB\u76E4Size",-1),Y=["value"],Z=I(" \u662F\u5426\u958B\u555F\u63D0\u793A? "),ee=o("label",{for:"openHint"},"\u662F",-1),te=o("label",{for:"openHint"},"\u5426",-1),se=x({setup(n){const c=E({borderSize:4,options:[{text:"4 X 4",value:4},{text:"5 X 5",value:5},{text:"6 X 6",value:6},{text:"7 X 7",value:7},{text:"8 X 8",value:8}]}),s=E(!0);return(r,a)=>(l(),i("main",P,[W,o("section",J,[o("div",null,[K,h(o("select",{class:"text-black","onUpdate:modelValue":a[0]||(a[0]=e=>c.value.borderSize=e)},[(l(!0),i(_,null,C(c.value.options,e=>(l(),i("option",{key:e.value,value:e.value},g(e.text),9,Y))),128))],512),[[q,c.value.borderSize]])]),o("div",null,[Z,h(o("input",{type:"radio",id:"openHint",value:!1,"onUpdate:modelValue":a[1]||(a[1]=e=>s.value=e)},null,512),[[D,s.value]]),ee,h(o("input",{type:"radio",id:"openHint",value:!0,"onUpdate:modelValue":a[2]||(a[2]=e=>s.value=e)},null,512),[[D,s.value]]),te])]),S(T,{size:c.value.borderSize,"open-hint":s.value},null,8,["size","open-hint"])]))}});export{se as default};