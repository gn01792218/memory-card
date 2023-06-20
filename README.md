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
### 2.子路由打包後無法獲取的圖片資源
原因是其打包路徑，會被+上父層的url，導致無法讀取檔案，<br>
例如你的圖片檔案位於 "BoardGameLobby/BoardGameEightQueen" 這個子路由下，<br>
在本地時，一切都是正常的，但打包後會被加上BoardGameLobby，<br>
```javascript

//src local時顯示
	'http://localhost:3000/src/assets/images/boardGame/queen.png'

//打包後，會多+上層路由，導致抓不到assets圖片
  'https://gn01792218.github.io/memory-card/BoardGameLobby/assets/queen.71b8d728.png'

```

解決方法 : 將路由改成# 模式，就可以抓地到

## 敏感訊息
VITE_KIDSGAME_OPENAI_KEY
  
  
