<template>
  <div>
    <app-header />
    <h1>{{ pageName }}</h1>
    <h1>{{ pageDesc }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="artical-area">
            <article-post
              v-for="article in articles"
              :key="article.id"
              :viwes="article.viwes"
              :title="article.title"
              :date="article.date"
              :content="article.content"
              :author="article.author"
              :category="article.category"
            />
          </div>
        </div>
        <!-- <div class="col-md-4">
        <div class="sidebar">
        <ArticalSideBar />-->
        <!-- </div>
        </div>-->
      </div>
    </div>
    <div>LoQmaN Articles 4</div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import ArticlePost from "../components/article/ArticlePost.vue";
// import ArticalSideBar from "../components/artical/ArticalSideBar.vue";
import json from "../json/MOCK_DATA.json";
export default {
  name: "Articles",
  data: function() {
    return {
      pageName: "Articles",
      pageDesc: "This is First Work",
      Articles: json
    };
  },
  components: {
    ArticlePost,
    // ArticalSideBar,
    AppHeader
  }
};
</script>

<style scope>
.row {
  position: relative;
  /* left: 230px; */
}
</style>
