<template>
  <b-container>
    <h1>Mo Salam</h1>
    <h2>Software Engineer, Growth Hacker, Entrepreneur</h2>
    <h3 class="li"><i class="material-icons">mail</i> mo@mosalam.me</h3>
    <h3><i class="material-icons">call</i> +60 17 345 8113</h3>
    <h3><i class="material-icons">location_on</i> Kuala Lumpur, Malaysia</h3>
    <b-row>
      <job-card />
      <job-card />
      <job-card />
      <job-card />
    </b-row>
  </b-container>
</template>

<script>
import JobCard from "../JobCard.vue";
export default {
  name: "AppHome",
  components: {
    JobCard
  }
};
</script>

<style></style>
