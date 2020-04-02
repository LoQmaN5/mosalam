<template>
  <div>
    <app-header />
    <div class="col">
      <h1>{{ pageName }}</h1>
      <p>{{ pageDesc }}</p>
    </div>
  </div>
</template>

<script>
import AppHeader from "../../components/AppHeader.vue";
export default {
  name: "AllCategories",
  data: function() {
    return {
      pageName: "Works",
      pageDesc: "This is First Work"
    };
  },
  components: {
    AppHeader
  }
};
</script>

<style></style>
