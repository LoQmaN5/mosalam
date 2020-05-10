<template>
  <div>
    <blog-header />
    <!--//main-wrapper-->

    <div class="main-wrapper">
      <section class="blog-list px-3 py-5 p-md-5">
        <div class="container">
          <div class="item mb-5" v-for="list in lists" :key="list.id">
            <div class="media">
              <img class="mr-3 img-fluid post-thumb d-none d-md-flex" :src="list.img" alt="image" />
              <div class="media-body">
                <h3 class="title mb-1">
                  <a href="/article/:id/:slug">{{ list.title }}</a>
                </h3>
                <div class="meta mb-1">
                  <span class="date">{{ list.date }}</span>
                  <span class="time">{{ list.time }}</span>
                  <span class="comment">
                    <a href="#">{{ list.comment }}</a>
                  </span>
                </div>
                <div class="intro">{{ list.body }}</div>
                <a class="more-link" href="/article/:id/:slug">Read more &rarr;</a>
              </div>
              <!--//media-body-->
            </div>
            <!--//media-->
          </div>
          <div class="text-center pt-5">
            <v-row class="container pl-12 nav-item active">
              <v-col>
                <v-btn @click="previousPage" color="#eea73b">
                  <v-icon>mdi-menu-left</v-icon>
                </v-btn>
              </v-col>
              <v-col v-for="n in 2" :key="n" cols="1">
                <v-btn
                  class="mx-2 btn pt-1"
                  fab
                  active-class
                  href="/article"
                  small
                  color="#eea73b"
                  :top="true"
                  v-text="n + 1 - 1"
                >1</v-btn>
              </v-col>
              <v-col>
                <v-btn color="#eea73b">
                  <v-icon>mdi-menu-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </div>
      </section>
    </div>
    <!--//main-wrapper-->
    <footer class="footer text-center py-2 theme-bg-dark">
      <small class="copyright">
        Designed with
        <i class="fas fa-heart" style="color: #fb866a;"></i> by
        <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a>
        for developers
      </small>
    </footer>
  </div>
</template>

<script>
import BlogHeader from "../../components/Blog/BlogHeader";
import axios from "axios";
export default {
  name: "BlogList",
  components: {
    BlogHeader
  },
  data() {
    return {
      lists: []
    };
  },
  methods: {
    previousPage() {
      this.$router.push("/article");
    }
  },
  created() {
    axios
      .get("https://mosalam1.firebaseio.com/lists.json")
      .then(res => {
        const data = res.data;
        const lists = [];
        for (let key in data) {
          const list = data[key];
          list.id = key;
          lists.push(list);
          this.lists = lists;
          console.log(this.lists);
        }

        console.log(res.data);
        lists;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
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
