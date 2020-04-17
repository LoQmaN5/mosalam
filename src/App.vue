<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}
</style>
