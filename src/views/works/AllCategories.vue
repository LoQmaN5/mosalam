<template>
  <div class="col">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>
  </div>
</template>

<script>
export default {
  name: "AllCategories",
  data: function() {
    return {
      pageName: "Works",
      pageDesc: "This is First Work"
    };
  }
};
</script>

<style></style>
