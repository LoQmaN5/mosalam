<template>
  <div>
    <app-header />
    LoQmaN About 2
    <h1>{{ pageName }}</h1>
    <p class="container">
      A serial Entrepreneur with engineering as well as business background who
      managed and consulted more than 15 Start-up’s in the tech industry for the
      last 10 years.He is driven by a strong passion for technology-empowered by
      entrepreneurial skills and therefore worked with various technologies such
      as (HTML, CSS, JavaScript, Python, Java , Angular JS, PHP,JSON,XML,Git,
      AWS, WordPress, Heroku, DigitalOcean, Linux, CLI, Django, OpenCV,…) For
      more on the projects he has worked on check out the Projects page In
      business he has raised sales above 6.6+ Million RM (1.6+ M USD) in less
      than a year through inbound marketing techniques, gained as a chief
      operations officer at YouSocial a profit margin of 60% and raised 166 K
      USD in seed funding for 2 of his Start-up’s in the past 2 years. Combining
      both business and engineering aspects sets him to become the Full Stack
      Entrepreneur he aspires. Because it is really important to know the WHAT
      and the WHY to master the HOW. It’s all about Coding with a goal in mind.
    </p>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
export default {
  name: "About",
  data: function() {
    return {
      pageName: "About Me",
      pageDesc: ""
    };
  },
  components: {
    AppHeader
  }
};
</script>

<style scope></style>
