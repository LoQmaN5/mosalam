<template>
  <div>
    <blog-header />
    <blog-page />
    <app-footer />
  </div>
</template>

<script>
import BlogHeader from "../Blogs/BlogHeader";
import BlogPage from "../Blogs/BlogPage";
import AppFooter from "../components/AppFooter.vue";
export default {
  name: "HomeBlog",
  components: {
    BlogHeader,
    BlogPage,
    AppFooter
  }
};
</script>

<style lang="sass" scoped></style>
