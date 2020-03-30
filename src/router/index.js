import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Works from "../views/Works.vue";
import Articles from "../views/Articles.vue";
import HireMe from "../views/HireMe.vue";
import AllCategories from "../views/works/AllCategories.vue";
import Django from "../views/works/Django.vue";
import Java from "../views/works/Java.vue";
import Python from "../views/works/Python.vue";
import WordPress from "../views/works/WordPress.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/works",
    name: "Works",
    component: Works
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles
  },
  {
    path: "/hire-me",
    name: "HireMe",
    component: HireMe
  },
  {
    path: "/all-categories",
    name: "AllCategories",
    component: AllCategories
  },
  {
    path: "/django",
    name: "Django",
    component: Django
  },
  {
    path: "/java",
    name: "Java",
    component: Java
  },
  {
    path: "/python",
    name: "Python",
    component: Python
  },
  {
    path: "/word-press",
    name: "WordPress",
    component: WordPress
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
