<template>
  <div>
    <!-- <b-col class="container">
      <div v-for="post in posts" :key="post.id" class="col-8 offset-2">
        <div class="card">
          <div class="blog-grid">
            <div class="blog-grid-img">
              <a href="/article/:id/:slug">
                <img class="img" :src="post.img" />
              </a>
            </div>
            <div class="blog-gird-info">
              <div class="b-meta">
                <span class="date">{{ post.date }}</span>
                <span class="meta">Design</span>
              </div>
              <h5>
                <router-link to="/article/:id/:slug">
                  <a href="#">{{ post.title }}</a>
                </router-link>
              </h5>
              <p>{{ post.body }}</p>
              <div class="btn-grid">
                <router-link to="/article/:id/:slug">
                  <a class="m-btn-link" href="#">Read More</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-col>-->

    <!--//main-wrapper-->
    <div class="main-wrapper">
      <section class="blog-list px-3 py-5 p-md-5">
        <div class="container">
          <div class="item mb-5" v-for="post in posts" :key="post.id">
            <div class="media">
              <img
                class="mr-3 img-fluid post-thumb d-none d-md-flex"
                :src="post.img"
                alt="image"
              />
              <div class="media-body">
                <h3 class="title mb-1">
                  <a href="/article/:id/:slug">{{ post.title }}</a>
                </h3>
                <div class="meta mb-1">
                  <span class="date">{{ post.date }}</span>
                  <span class="time">{{ post.time }}</span>
                  <span class="comment">
                    <a href="#">{{ post.comment }}</a>
                  </span>
                </div>
                <div class="intro">
                  {{ post.body }}
                </div>
                <a class="more-link" href="/article/:id/:slug"
                  >Read more &rarr;</a
                >
              </div>
              <!--//media-body-->
            </div>
            <!--//media-->
          </div>

          <div class="text-center pt-5">
            <v-row class="container pl-12">
              <v-col>
                <v-btn @click="goBack" color="#eea73b">
                  <v-icon>mdi-menu-left</v-icon>
                </v-btn>
              </v-col>
              <v-col v-for="n in 2" :key="n" cols="1">
                <v-btn
                  class="mx-2 btn pt-1"
                  fab
                  href="/bloglist"
                  small
                  color="#eea73b"
                  :top="true"
                  v-text="n + 1 - 1"
                  >1</v-btn
                >
              </v-col>
              <v-col>
                <v-btn @click="nextPage" color="#eea73b">
                  <v-icon>mdi-menu-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </div>
      </section>
    </div>

    <footer class="footer text-center py-2">
      <small class="copyright">
        Designed with
        <i class="fas fa-heart" style="color: #fb866a;"></i> by
        <a href="http://themes.3rdwavemedia.com" target="_blank"
          >Xiaoying Riley</a
        >
        for developers
      </small>
    </footer>
    <!--//main-wrapper-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BlogPage",
  data() {
    return {
      posts: []
    };
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    nextPage() {
      this.$router.push("/bloglist");
    }
  },
  created() {
    axios
      .get("https://mosalam1.firebaseio.com/posts.json")
      .then(res => {
        const data = res.data;
        const posts = [];
        for (let key in data) {
          const post = data[key];
          post.id = key;
          posts.push(post);
          this.posts = posts;
          console.log(this.posts);
        }

        console.log(res.data);
        posts;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
// .img {
//   height: 300px;
//   width: 100%;
// }

// /* Add a card effect for articles */
// .card {
//   // background-color: rgba(216, 213, 213, 0.205);
//   padding: 20px;
//   margin-bottom: 55px;
//   width: 95%;
//   position: relative;
//   top: 30px;
//   left: 22px;
//   transition: all 0.5s ease;
// }
.btn {
  border-radius: 4px;
  height: 34px;
  margin: 0.3rem;
  min-width: 34px;
  padding: 0 5px;
  text-decoration: none;
  transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
  width: auto;
  color: rgb(255, 255, 255);
  font-size: 15px;
}
</style>
