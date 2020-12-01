import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import routers from "./routers";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  ...routers
];

const router = new VueRouter({
  routes
});

export default router;
