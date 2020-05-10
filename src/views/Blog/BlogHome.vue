<template>
  <div>
    <blog-header />
    <!-- <blog-list /> -->
    <blog-page />
    <!-- <app-footer /> -->
  </div>
</template>

<script>
import BlogHeader from "../../components/Blog/BlogHeader.vue";
// import BlogList from "../../components/Blog/BlogList.vue";
import BlogPage from "../../components/Blog/BlogPage";
export default {
  name: "HomeBlog",
  components: {
    BlogHeader,
    BlogPage
    // BlogList
  }
};
</script>

<style lang="scss" scoped></style>
