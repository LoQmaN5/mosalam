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
          <router-link to="/homeblogs">
            <b-button variant="outline-dark">
              Older Article
            </b-button>
          </router-link>
        </div>
        <div class="row">
          <div class="col-lg-4 m-15px-tb animation">
            <div class="blog-grid">
              <div class="blog-grid-img">
                <router-link to="/article">
                  <a href="#">
                    <img src="../assets/img/blog-1.jpg" title="" alt="" />
                  </a>
                </router-link>
              </div>
              <div class="blog-gird-info">
                <div class="b-meta">
                  <span class="date">02 Mar</span>
                  <span class="meta">Design</span>
                </div>
                <h5>
                  <router-link to="/article">
                    <a href="#">Make your Marketing website</a>
                  </router-link>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="btn-grid">
                  <router-link to="/article">
                    <a class="m-btn-link" href="#">Read More</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- col -->
          <div class="col-lg-4 m-15px-tb animation">
            <div class="blog-grid">
              <div class="blog-grid-img">
                <a href="#">
                  <img src="../assets/img/blog-2.jpg" title="" alt="" />
                </a>
              </div>
              <div class="blog-gird-info">
                <div class="b-meta">
                  <span class="date">02 Mar 2019</span>
                  <span class="meta">Design</span>
                </div>
                <h5><a href="#">Make your Marketing website</a></h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="btn-grid">
                  <a class="m-btn-link" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <!-- col -->
          <div class="col-lg-4 m-15px-tb animation">
            <div class="blog-grid">
              <div class="blog-grid-img">
                <a href="#">
                  <img src="../assets/img/blog-3.jpg" title="" alt="" />
                </a>
              </div>
              <div class="blog-gird-info">
                <div class="b-meta">
                  <span class="date">02 Mar 2019</span>
                  <span class="meta">Design</span>
                </div>
                <h5><a href="#">Make your Marketing website</a></h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="btn-grid">
                  <a class="m-btn-link" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <!-- col -->
        </div>
      </div>
    </section>
    <!-- End Blog -->
  </div>
</template>

<script>
export default {
  name: "Blog",
  components: {}
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
  opacity: 0.5;
}

.animation:hover {
  transform: scale(1.1);
  opacity: 1;
}
</style>
