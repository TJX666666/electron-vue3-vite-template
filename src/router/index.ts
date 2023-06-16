import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Index = () => import("../index/index.vue");
const HelloWorld = () => import("../components/HelloWorld.vue");
const Test = () => import("../components/Test.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "首页",
      keepAlive: true,
      requireAuth: true,
    },
    component: Index,
  },
  {
    path: "/helloworld",
    name: "helloworld",
    meta: {
      title: "helloworld",
      keepAlive: true,
      requireAuth: true,
    },
    component: HelloWorld,
  },
  {
    path: "/test",
    name: "test",
    meta: {
      title: "test",
      keepAlive: true,
      requireAuth: true,
    },
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
