import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Articles from "../views/articles/Articles";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
