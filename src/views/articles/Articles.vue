<template>
  <div>
    <div class="header">
      <div class="logo">
        <router-link to="/">
          <a>Mo Salam</a>
        </router-link>
      </div>
    </div>
    <ul>
      <router-link to="" tag="li">
        <a class="navbar-item" href="" style="color: #00d8ff;">#react</a>
      </router-link>
      <router-link to="" tag="li">
        <a class="navbar-item" href="" style="color: #49d091">#vue</a>
      </router-link>
      <router-link to="" tag="li">
        <a class="navbar-item" href="" style="color: #e03237">#angular</a>
      </router-link>
      <router-link to="" tag="li">
        <a class="navbar-item" href="" style="color: #ffe725">#javascript</a>
      </router-link>
      <router-link to="" tag="li">
        <a class="navbar-item" href="" style="color: #33a956">#node</a>
      </router-link>
      <router-link to="" tag="li">
        <a class="navbar-item" href="" style="color: #ff8682">#laravel</a>
      </router-link>
      <router-link to="" tag="li">
        <a class="navbar-item" href="" style="color: #2ca9e1">#css</a>
      </router-link>
      <router-link to="" tag="li">
        <a class="navbar-item" href="" style="color: #fdd22d">#python</a>
      </router-link>
    </ul>
    <b-col class="container1" cols="8" offset="2">
      <div class="card">
        <div class="blog-grid">
          <div class="blog-grid-img">
            <a href="#">
              <!-- <img
                class="img"
                src="../../assets/img/blog-1.jpg"
                title=""
                alt=""
              /> -->
            </a>
          </div>
          <div class="blog-gird-info" style="top: 35px;">
            <div class="b-meta">
              <span class="date">02 Mar</span>
              <span class="meta">Design</span>
            </div>
            <h5>
              <router-link to="/articles">
                <a href="#"><a href="#">Make your Marketing website</a></a>
              </router-link>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div class="btn-grid">
              <a class="m-btn-link" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="blog-grid">
          <div class="blog-grid-img">
            <a href="#">
              <!-- <img
                class="img"
                src="../../assets/img/blog-2.jpg"
                title=""
                alt=""
              /> -->
            </a>
          </div>
          <div class="blog-gird-info" style="top: 37px;">
            <div class="b-meta">
              <span class="date">02 Mar</span>
              <span class="meta">Design</span>
            </div>
            <h5>
              <router-link to="/articles">
                <a href="#"><a href="#">Make your Marketing website</a></a>
              </router-link>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div class="btn-grid">
              <a class="m-btn-link" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="blog-grid">
          <div class="blog-grid-img">
            <a href="#">
              <!-- <img
                class="img"
                src="../../assets/img/blog-3.jpg"
                title=""
                alt=""
              /> -->
            </a>
          </div>
          <div class="blog-gird-info" style="top: 37px;">
            <div class="b-meta">
              <span class="date">02 Mar</span>
              <span class="meta">Design</span>
            </div>
            <h5>
              <router-link to="/articles">
                <a href="#">Make your Marketing website</a>
              </router-link>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div class="btn-grid">
              <a class="m-btn-link" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="blog-grid">
          <div class="blog-grid-img">
            <a href="#">
              <img
                class="img"
                src="../../assets/img/blog-1.jpg"
                title=""
                alt=""
              />
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div class="btn-grid">
              <a class="m-btn-link" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="blog-grid">
          <div class="blog-grid-img">
            <a href="#">
              <img
                class="img"
                src="../../assets/img/blog-2.jpg"
                title=""
                alt=""
              />
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div class="btn-grid">
              <a class="m-btn-link" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="blog-grid">
          <div class="blog-grid-img">
            <a href="#">
              <img
                class="img"
                src="../../assets/img/blog-3.jpg"
                title=""
                alt=""
              />
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div class="btn-grid">
              <a class="m-btn-link" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </b-col>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "../../components/AppFooter.vue";
export default {
  name: "Articles",
  components: {
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #111;
  color: #fff;
  overflow: hidden;
  width: 100%;
  .logo {
    font-size: 26px;
    padding: 10px;
    float: left;
  }
  a {
    color: #fff;
  }
}

ul {
  list-style: none;
  float: left;
  position: fixed;
  li {
    padding: 5px 25px 5px;
    // display: inline-block;
    margin-top: 12px;
    a:hover {
      color: #fff;
    }
  }
}

.img {
  height: 200px;
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
}
</style>
