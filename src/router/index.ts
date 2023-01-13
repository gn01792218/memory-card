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
    path: "/BoardGameLoby",
    name: "BoardGameLoby",
    component: () => import("@/views/BoardGameLoby.vue"),
  },
  {
    path: "/MemoryCardLoby",
    name: "MemoryCardLoby",
    component: () => import("@/views/MemoryCardLoby.vue"),
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
