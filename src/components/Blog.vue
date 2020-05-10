<template>
  <div>
    <!-- Blog -->
    <section id="blog" class="section white-bg">
      <div class="container">
        <div class="row sm-m-25px-b m-35px-b">
          <div class="col-md-12">
            <div class="section-title">
              <h3 class="dark-color text-uppercase">Latest Blogs</h3>
              <p class="text-uppercase small">
                A Lead UX &amp; UI designer based in Canada
              </p>
            </div>
          </div>
        </div>
        <div class="blog">
          <router-link to="/bloghome">
            <b-button variant="outline-dark">Older Article</b-button>
          </router-link>
        </div>
        <!-- Start col -->
        <div class="row">
          <div
            class="col-lg-4 m-15px-tb animation"
            v-for="blog in blogs"
            :key="blog.id"
          >
            <div class="blog-grid">
              <div class="blog-grid-img">
                <router-link to="/bloghome">
                  <a>
                    <img src="../assets/img/blog-1.jpg" title alt />
                  </a>
                </router-link>
              </div>
              <div class="blog-gird-info">
                <div class="b-meta">
                  <span class="date">{{ blog.date }}</span>
                  <span class="meta">Design</span>
                </div>
                <h5>
                  <router-link to="/bloghome">
                    <a>Make your Marketing website</a>
                  </router-link>
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div class="btn-grid">
                  <router-link to="/bloghome">
                    <a class="m-btn-link">Read More</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- End col -->
        </div>
      </div>
    </section>
    <!-- End Blog -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Blog",
  components: {},
  data() {
    return {
      blogs: []
    };
  },
  created() {
    axios
      .get("https://mosalam1.firebaseio.com/blogs.json")
      .then(res => {
        const data = res.data;
        const blogs = [];
        for (let key in data) {
          const blog = data[key];
          blog.id = key;
          blogs.push(blog);
          this.blogs = blogs;
          console.log(this.blogs);
        }

        console.log(res.data);
        blogs;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
.blog {
  position: relative !important;
  left: 920px;
  top: -104px;
}

.animation {
  transition: all 0.5s ease-in-out;
}

.animation:hover {
  transform: scale(1.1);
}
</style>
