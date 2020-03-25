<template>
  <div class="work">
    <app-work />
  </div>
</template>

<script>
import AppWork from "../components/AppWork.vue";
export default {
  name: "Works",
  components: {
    AppWork
  }
};
</script>

<style lang="scss" scope>
.work {
  color: black;
  overflow: hidden;

  ul {
    float: left;
    width: calc(100% - 200px);
    margin: 0;
  }
  li {
    padding: 20px;
    display: inline-block;
    font-size: 20px;
  }
  a {
    color: black;
    text-decoration: none;
  }
}
</style>
