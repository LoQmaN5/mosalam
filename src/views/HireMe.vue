<template>
  <div>
    <app-header />

    <h1>Hire me</h1>
    <div v-b-hover="handleHover" class="border rounded py-3 px-4">
      <b-icon v-if="isHovered" icon="bar-chart-fill" scale="2"></b-icon>
      <b-icon v-else icon="bar-chart" scale="2"></b-icon>
      <span class="ml-3" :class="isHovered ? 'text-danger' : ''"
        >Hover this area</span
      >
    </div>
    <div>LoQmaN Hire Me 5</div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
export default {
  name: "HireMe",
  data() {
    return {
      isHovered: false
    };
  },
  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    }
  },
  components: {
    AppHeader
  }
};
</script>

<style scope></style>
