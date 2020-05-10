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
import HeroMo from "../components/HeroMo.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import Services from "../components/Services.vue";
import Portfolio from "../components/Portfolio.vue";
import Blog from "../components/Blog.vue";
import Contact from "../components/Contact.vue";
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
