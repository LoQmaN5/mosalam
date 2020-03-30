<template>
  <div>
    <app-body />
  </div>
</template>

<script>
// @ is an alias to /src
import AppBody from "../components/AppBody";
export default {
  name: "Home",
  components: {
    AppBody
  }
};
</script>

<style lang="scss" scope>
// .li {
//   margin: 5px;
// }
</style>
