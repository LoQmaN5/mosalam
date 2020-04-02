<template>
  <!-- <div class="work1"> -->
  <div>
    <ul>
      <router-link to="all-categories" tag="li" exact>
        <a>All Categories</a>
      </router-link>
      <router-link to="django" tag="li">
        <a>Django</a>
      </router-link>
      <router-link to="java" tag="li">
        <a>Java</a>
      </router-link>
      <router-link to="python" tag="li">
        <a>Python</a>
      </router-link>
      <router-link to="word-press" tag="li">
        <a>Wordpress</a>
      </router-link>
    </ul>
    LoQmaN Works Title
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "AppWork",
  components: {}
};
</script>

<style lang="scss" scope></style>
