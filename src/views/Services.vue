<template>
  <div>
    <!-- <app-header /> -->
    <!-- <h1>{{ pageName }}</h1>
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
      </div> -->
    <!-- </div> -->
    <!-- resume -->
    <section id="services" class="section gray-bg">
      <div class="container">
        <div class="row sm-m-25px-b m-35px-b">
          <div class="col-md-12">
            <div class="section-title">
              <h3 class="dark-color text-uppercase">My Services</h3>
              <p class="text-uppercase small">
                A Lead UX & UI designer based in Canada
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- feaure box -->
          <div class="col-sm-6 col-lg-4 m-15px-tb">
            <div class="feature-box-1 box-shadow-lg">
              <div class="icon">
                <i class="icon-desktop"></i>
              </div>
              <div class="feature-content">
                <h5>Unique design</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div>
          <!-- / -->
          <!-- feaure box -->
          <div class="col-sm-6 col-lg-4 m-15px-tb">
            <div class="feature-box-1 box-shadow-lg">
              <div class="icon">
                <i class="icon-pricetags"></i>
              </div>
              <div class="feature-content">
                <h5>Different Layout</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div>
          <!-- / -->
          <!-- feaure box -->
          <div class="col-sm-6 col-lg-4 m-15px-tb">
            <div class="feature-box-1 box-shadow-lg">
              <div class="icon">
                <i class="icon-chat"></i>
              </div>
              <div class="feature-content">
                <h5>Make it Simple</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div>
          <!-- / -->
          <!-- feaure box -->
          <div class="col-sm-6 col-lg-4 m-15px-tb">
            <div class="feature-box-1 box-shadow-lg">
              <div class="icon">
                <i class="icon-mobile"></i>
              </div>
              <div class="feature-content">
                <h5>Responsiveness</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div>
          <!-- / -->
          <!-- feaure box -->
          <div class="col-sm-6 col-lg-4 m-15px-tb">
            <div class="feature-box-1 box-shadow-lg">
              <div class="icon">
                <i class="icon-target"></i>
              </div>
              <div class="feature-content">
                <h5>Testing for Perfection</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div>
          <!-- / -->
          <!-- feaure box -->
          <div class="col-sm-6 col-lg-4 m-15px-tb">
            <div class="feature-box-1 box-shadow-lg">
              <div class="icon">
                <i class="icon-tools-2"></i>
              </div>
              <div class="feature-content">
                <h5>Advanced Options</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div>
          <!-- / -->
        </div>
      </div>
    </section>
    <!-- End resume -->
  </div>
</template>

<script>
// import AppHeader from "../components/AppHeader.vue";
import json from "../json/MOCK_DATA.json";
export default {
  name: "Services",
  data: function() {
    return {
      pageName: "Articles",
      pageDesc: "This is First Work",
      Articles: json
    };
  },
  components: {
    // AppHeader
  }
};
</script>

<style scoped></style>
