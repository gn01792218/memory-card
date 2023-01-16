import {
  createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory,
} from "vue-router";
import BoardGameEightQueen from '@/views/BoardGameEightQueen.vue'
import BoardGameMonstrt from '@/views/BoardGameMonstrt.vue'
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
    children:[
      {
        path:'BoardGameEightQueen',
        name:'BoardGameEightQueen',
        component:BoardGameEightQueen
      },
      {
        path:'BoardGameMonstrt',
        name:'BoardGameMonstrt',
        component:BoardGameMonstrt
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
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL as string),
  // history:createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
