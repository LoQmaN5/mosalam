import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import HeroMo from "../components/HeroMo.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "HeroMo",
    component: HeroMo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
