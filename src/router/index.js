import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import HomeBlogs from "../Blogs/HomeBlogs";
import Article from "../Blogs/article";
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/homeblogs',
    name: 'HomeBlogs',
    component: HomeBlogs,
  },
  {
    path: '/homeblogs/:id/:slug',
    name: 'Article',
    component: Article,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior() {
  //   return { x: 0, y: 0 };
  // }
});

export default router;
