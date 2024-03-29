import {
  createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/BoardGameLobby",
    name: "BoardGameLobby",
    component: () => import("@/views/BoardGameLobby.vue"),
    children:[  //嵌套路由的動態引入不可以使用@
      {
        path:'BoardGameEightQueen',
        name:'BoardGameEightQueen',
        component: () => import("../views/BoardGameEightQueen.vue"),  
      },
      {
        path:'BoardGameMonstrt',
        name:'BoardGameMonstrt',
        component:() => import("../views/BoardGameMonstrt.vue"),
      }
    ]
  },
  {
    path:"/AIGameLobby",
    name:"AIGameLobby",
    component: () => import("@/views/AIGame/AIGameLobby.vue"),
    children:[
      {
        path:'PictoRiddle',
        name:'PictoRiddle',
        component:() => import("@/views/AIGame/PictoRiddle.vue")
      }
    ]
  },
  {
    path: "/MemoryCardLobby",
    name: "MemoryCardLobby",
    component: () => import("@/views/MemoryCardLobby.vue"),
  },
  {
    path: "/MemoryCardGame",
    name: "MemoryCardGame",
    component: () => import("@/views/MemoryCardGame.vue"),
  },
  {
    path: "/LevelList",
    name: "/LevelList",
    component: () => import("@/views/LevelList.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_APP_BASE_URL as string),
  history:createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
