# 專案使用Vue 3 + Typescript + Vite

The template uses Vue 3 `<script setup>` SFCs

## UI框架、動畫特效 
框架 : Tailwind
特效 : gsap.js

## codingStyle
Eslint、prettier

## 打包部署
```
npm run deploy-ghpage
```

# 採坑紀錄
## 子路由的坑
### 1.子路由的動態載入問題
不要使用@，用一般的路徑打包時才抓地到唷
```
{
    path: "/BoardGameLobby",
    name: "BoardGameLobby",
    component: () => import("@/views/BoardGameLobby.vue"),
    children:[
      {
        path:'BoardGameEightQueen',
        name:'BoardGameEightQueen',
        component: () => import("../views/BoardGameEightQueen.vue"),
      },
    ]
  },
```
### 2.子路由打包後獲取的圖片資源，會在路徑中+上父層的url，導致無法讀取檔案
目前未得解
  
  
