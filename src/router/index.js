import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogHome from "../views/Blog/BlogHome.vue";
import BlogList from "../views/Blog/BlogList.vue";
import Article from "../views/Blog/article";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/bloghome",
    name: "BlogHome",
    component: BlogHome
  },
  {
    path: "/bloglist",
    name: "BlogList",
    component: BlogList
  },
  {
    path: "/article/:id/:slug",
    name: "Article",
    component: Article
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
  //TODO:Component for notfound
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
