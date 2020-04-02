<template>
  <div>
    <app-home />
    <app-about />
    <app-works-body />
    <app-articles />
    <app-hire />
  </div>
</template>

<script>
import AppHome from "../components/Body/AppHome";
import AppAbout from "../components/Body/AppAbout";
import AppWorksBody from "../components/Body/AppWorksBody";
import AppArticles from "../components/Body/AppArticles";
import AppHire from "../components/Body/AppHire";
export default {
  name: "AppBody",
  components: {
    AppHome,
    AppAbout,
    AppWorksBody,
    AppArticles,
    AppHire
  }
};
</script>

<style></style>
