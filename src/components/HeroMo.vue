<template>
  <div>
    <app-header />
    <!-- Main -->
    <main class="main-left">
      <home />
      <about />
      <services />
      <portfolio />
      <blog />
      <contact />
    </main>
    <!-- main end -->
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Portfolio from "../views/Portfolio.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import AppFooter from "../components/AppFooter.vue";
export default {
  name: "HeroMo",
  components: {
    AppHeader,
    Home,
    About,
    Services,
    Portfolio,
    Blog,
    Contact,
    AppFooter,
  }
};
</script>

<style lang="scss" scope></style>
