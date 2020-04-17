<template>
  <div>
    <b-col class="container">
      <div class="col-8 offset-2">
        <div class="card">
          <div class="blog-grid">
            <div class="blog-grid-img">
              <a href="#">
                <img class="img" src="../assets/img/blog-2.jpg" title alt />
              </a>
            </div>
            <div class="blog-gird-info">
              <div class="b-meta">
                <span class="date">02 Mar</span>
                <span class="meta">Design</span>
              </div>
              <h5>
                <router-link to="/articles">
                  <a href="#">Make your Marketing website</a>
                </router-link>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div class="btn-grid">
                <router-link to="/article">
                  <a class="m-btn-link" href="#">Read More</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 offset-2">
        <div class="card">
          <div class="blog-grid">
            <div class="blog-grid-img">
              <a href="#">
                <img class="img" src="../assets/img/blog-2.jpg" title alt />
              </a>
            </div>
            <div class="blog-gird-info">
              <div class="b-meta">
                <span class="date">02 Mar</span>
                <span class="meta">Design</span>
              </div>
              <h5>
                <router-link to="/articles">
                  <a href="#">Make your Marketing website</a>
                </router-link>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div class="btn-grid">
                <a class="m-btn-link" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 offset-2">
        <div class="card">
          <div class="blog-grid">
            <div class="blog-grid-img">
              <a href="#">
                <img class="img" src="../assets/img/blog-2.jpg" title alt />
              </a>
            </div>
            <div class="blog-gird-info">
              <div class="b-meta">
                <span class="date">02 Mar</span>
                <span class="meta">Design</span>
              </div>
              <h5>
                <router-link to="/articles">
                  <a href="#">Make your Marketing website</a>
                </router-link>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div class="btn-grid">
                <a class="m-btn-link" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 offset-2">
        <div class="card">
          <div class="blog-grid">
            <div class="blog-grid-img">
              <a href="#">
                <img class="img" src="../assets/img/blog-1.jpg" title alt />
              </a>
            </div>
            <div class="blog-gird-info">
              <div class="b-meta">
                <span class="date">02 Mar</span>
                <span class="meta">Design</span>
              </div>
              <h5>
                <router-link to="/articles">
                  <a href="#">Make your Marketing website</a>
                </router-link>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div class="btn-grid">
                <a class="m-btn-link" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 offset-2">
        <div class="card">
          <div class="blog-grid">
            <div class="blog-grid-img">
              <a href="#">
                <img class="img" src="../assets/img/blog-2.jpg" title alt />
              </a>
            </div>
            <div class="blog-gird-info">
              <div class="b-meta">
                <span class="date">02 Mar</span>
                <span class="meta">Design</span>
              </div>
              <h5>
                <router-link to="/articles">
                  <a href="#">Make your Marketing website</a>
                </router-link>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div class="btn-grid">
                <a class="m-btn-link" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 offset-2">
        <div class="card">
          <div class="blog-grid">
            <div class="blog-grid-img">
              <a href="#">
                <img class="img" src="../assets/img/blog-3.jpg" title alt />
              </a>
            </div>
            <div class="blog-gird-info">
              <div class="b-meta">
                <span class="date">02 Mar</span>
                <span class="meta">Design</span>
              </div>
              <h5>
                <router-link to="/articles">
                  <a href="#">Make your Marketing website</a>
                </router-link>
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div class="btn-grid">
                <a class="m-btn-link" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "BlogPage"
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
