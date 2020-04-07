<template>
  <div>
    <!-- Home Banner -->
    <section id="home" class="home-banner-01 bg-cover bg-center bg-no-repeat" :style="bgImg">
      <div class="container">
        <div class="row full-screen align-items-center p-100px-tb">
          <div class="col-md-6">
            <div class="ht-text">
              <h6>Hello there...</h6>
              <h1>Mo Salam</h1>
              <h2>
                I Am Passionate
                <vue-typer
                  :text="['Software Engineer', 'Business']"
                  :repeat="Infinity"
                  :shuffle="false"
                  initial-action="erasing"
                  :pre-type-delay="80"
                  :type-delay="80"
                  :pre-erase-delay="500"
                  :erase-delay="300"
                  erase-style="backspace"
                  :erase-on-complete="false"
                  caret-animation="expand"
                ></vue-typer>
              </h2>

              <p>
                The namics of how users interact with interactive elements
                within a user interface flow chart based on container
                proportion.
              </p>
              <div class="btn-bar go-to">
                <a class="m-btn m-btn-theme" href="#work">my work</a>
                <a class="m-btn m-btn-t-theme" href="#contactus">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="go-to go-to-next">
        <a href="#about">
          <span></span>
        </a>
      </div>
    </section>
    <!-- End Home Banner -->
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    VueTyper
  },
  data: function() {
    return {
      bgImg: {
        backgroundImage: `url(${require("../assets/img/home-banner3.png")})`
      }
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped></style>
