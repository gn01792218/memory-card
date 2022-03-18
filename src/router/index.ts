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
    path: "/MemoryCardGame",
    name: "MemoryCardGame",
    component: () => import("@/views/MemoryCardGame.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history:createWebHashHistory(process.env.BASE_URL),
  routes,
});
export default router;
