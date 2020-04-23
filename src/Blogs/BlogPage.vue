<template>
  <div>
    <b-col class="container">
      <div v-for="post in posts" :key="post.id" class="col-8 offset-2">
        <div class="card">
          <div class="blog-grid">
            <div class="blog-grid-img">
              <a href="/homeblogs/:id/:slug">
                <img class="img" :src="post.img" />
              </a>
            </div>
            <div class="blog-gird-info">
              <div class="b-meta">
                <span class="date">{{ post.date }}</span>
                <span class="meta">Design</span>
              </div>
              <h5>
                <router-link to="/homeblogs/:id/:slug">
                  <a href="#">{{ post.title }}</a>
                </router-link>
              </h5>
              <p>{{ post.body }}</p>
              <div class="btn-grid">
                <router-link to="/homeblogs/:id/:slug">
                  <a class="m-btn-link" href="#">Read More</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-col>
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
.img {
  height: 300px;
  width: 100%;
}

/* Add a card effect for articles */
.card {
  // background-color: rgba(216, 213, 213, 0.205);
  padding: 20px;
  margin-bottom: 55px;
  width: 95%;
  position: relative;
  top: 30px;
  left: 22px;
  transition: all 0.5s ease;
}
</style>
