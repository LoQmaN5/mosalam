<template>
  <div>
    <app-header />
    <!-- Main -->
    <main class="main-left">
      <hero-mo />
      <about />
      <skills />
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
import HeroMo from "../views/HeroMo.vue";
import About from "../views/About.vue";
import Skills from "../views/Skills.vue";
import Services from "../views/Services.vue";
import Portfolio from "../views/Portfolio.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import AppFooter from "../components/AppFooter.vue";
export default {
  name: "Home",
  components: {
    AppHeader,
    HeroMo,
    About,
    Skills,
    Services,
    Portfolio,
    Blog,
    Contact,
    AppFooter
  }
};
</script>

<style lang="scss" scope>
html {
  scroll-behavior: smooth;
}
</style>
