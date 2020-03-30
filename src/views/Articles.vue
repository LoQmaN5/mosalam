<template>
  <div>
    <h1>{{ pageName }}</h1>
    <h1>{{ pageDesc }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="artical-area">
            <artical-post
              v-for="artical in articals"
              :key="artical.id"
              :viwes="artical.viwes"
              :title="artical.title"
              :date="artical.date"
              :content="artical.content"
              :author="artical.author"
              :category="artical.category"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <!-- <ArticalSideBar /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticalPost from "../components/artical/ArticalPost.vue";
// import ArticalSideBar from "../components/artical/ArticalSideBar.vue";
import json from "../json/MOCK_DATA.json";
export default {
  name: "Articles",
  data: function() {
    return {
      pageName: "Articles",
      pageDesc: "This is First Work",
      articals: json
    };
  },
  components: {
    ArticalPost
    // ArticalSideBar
  }
};
</script>

<style></style>
