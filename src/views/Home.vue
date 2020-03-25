<template>
  <div class="home">
    <h1>Mo Salam</h1>
    <h2>Software Engineer, Growth Hacker, Entrepreneur</h2>
    <h3 class="li"><i class="material-icons">mail</i> mo@mosalam.me</h3>
    <h3><i class="material-icons">call</i> +60 17 345 8113</h3>
    <h3><i class="material-icons">location_on</i> Kuala Lumpur, Malaysia</h3>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang=scss scope>
.li {
margin: 5px;
}
</style>
