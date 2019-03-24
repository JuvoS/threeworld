import Vue from "vue";
import VueRouter from "vue-router";
import { routers } from "./define";

Vue.use(VueRouter);

const RouterConfig = {
  routes: routers
};
const router = new VueRouter(RouterConfig);

export default router;
