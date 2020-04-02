<template>
  <div>
    <app-header />
    <app-work />
    <div>LoQmaN Works 3</div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppWork from "../components/AppWork.vue";
export default {
  name: "Works",
  components: {
    AppHeader,
    AppWork
  }
};
</script>

<style scope>
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
ul li a:hover {
  color: black;
  text-decoration: none;
}
</style>
