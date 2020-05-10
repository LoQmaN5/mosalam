<template>
  <div>
    <section class="cta-section theme-bg-light py-5 ml-12 pl-12">
      <div class="container text-center">
        <h2 class="heading">DevBlog - A Blog Template Made For Developers</h2>
        <div class="intro">
          Welcome to my blog. Subscribe and get my latest blog post in your
          inbox.
        </div>
        <form class="signup-form form-inline justify-content-center pt-3">
          <div class="form-group">
            <label class="sr-only" for="semail">Your email</label>
            <input
              type="email"
              id="semail"
              name="semail1"
              class="form-control mr-md-1 semail"
              placeholder="Enter email"
            />
          </div>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
      </div>
      <!--//container-->
    </section>

    <v-navigation-drawer
      width="281px"
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      fixed
    >
      <header class="header text-center">
        <h1 class="blog-name pt-lg-4 mb-0">
          <router-link to="/">Mo Salam</router-link>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </h1>

        <nav class="navbar navbar-expand-lg navbar-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navigation" class="collapse navbar-collapse flex-column">
            <div class="profile-section pt-3 pt-lg-0">
              <img
                class="profile-image mb-3 rounded-circle mx-auto"
                src="../../assets/img/mo1.jpg"
                alt="image"
              />

              <div class="bio mb-3 text-justify ml-10">
                Hi, my name is Mo Salam. Briefly introduce yourself here. You
                provide a link to the about page.
                <br />
                <a href="#">Find out more about me</a>
              </div>
              <!--//bio-->
              <!-- <ul class="social-list list-inline mx-auto list">
                <li class="list-inline-ite mb-3">
                  <a href="#">
                    <i class="fab fa-twitter fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-itm mb-3">
                  <a href="#">
                    <i class="fab fa-linkedin-in fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-iem mb-3">
                  <a href="#">
                    <i class="fab fa-github-alt fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-tem mb-3">
                  <a href="#">
                    <i class="fab fa-stack-overflow fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item mb-3">
                  <a href="#">
                    <i class="fab fa-codepen fa-fw"></i>
                  </a>
                </li>
              </ul> -->

              <ul class="social-list list-inline py-3 mx-auto">
                <li class="list-inline-item">
                  <a :href="twitter" target="_blank">
                    <i class="fab fa-twitter fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a :href="linkedin" target="_blank">
                    <i class="fab fa-linkedin-in fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a :href="github" target="_blank">
                    <i class="fab fa-github-alt fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a :href="stackOverflow" target="_blank">
                    <i class="fab fa-stack-overflow fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a :href="codepen" target="_blank">
                    <i class="fab fa-codepen fa-fw"></i>
                  </a>
                </li>
              </ul>
              <!--//social-list-->
              <hr />
            </div>
            <!--//profile-section-->

            <ul class="navbar-nav flex-column text-left ">
              <router-link to="/bloghome" tag="li" active-class="active" exact
                ><a class="nav-link">
                  <i class="fas fa-home fa-fw mr-2"></i>Blog Home
                  <span class="sr-only">(current)</span>
                </a></router-link
              >
              <router-link
                to="/article/:id/:slug"
                tag="li"
                active-class="active"
                ><a class="nav-link">
                  <i class="fas fa-bookmark fa-fw mr-2"></i>Blog Post
                </a></router-link
              >
              <router-link to="/" tag="li" active-class="active" exact=""
                ><a class="nav-link">
                  <i class="fas fa-user fa-fw mr-2"></i>About Me
                </a></router-link
              >
              <!-- <li class="nav-item active">
                <a class="nav-link" href="/bloghome">
                  <i class="fas fa-home fa-fw mr-2"></i>Blog Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/bloghome/:id/:slug">
                  <i class="fas fa-bookmark fa-fw mr-2"></i>Blog Post
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <i class="fas fa-user fa-fw mr-2"></i>About Me
                </a>
              </li> -->
            </ul>
          </div>
        </nav>
      </header>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "BlogHeader",
  components: {},
  data() {
    return {
      drawer: true,
      mini: false,
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/m7salam",
      github: "https://github.com/m7salam",
      stackOverflow: "https://stackoverflow.com",
      codepen: "https://codepen.io"
    };
  }
};
</script>

<style lang="scss" scoped>
.list {
  position: absolute;
  top: -6px;
  left: -14px;
}
</style>
