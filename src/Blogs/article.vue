<template>
  <div>
    <!-- <vue-scroll-indicator height="5px" color="#00f" background="#eee"></vue-scroll-indicator> -->
    <ul>
      <router-link to tag="li">
        <a style="color: #00d8ff;">#react</a>
      </router-link>
      <router-link to tag="li">
        <a style="color: #49d091">#vue</a>
      </router-link>
      <router-link to tag="li">
        <a style="color: #e03237">#angular</a>
      </router-link>
      <router-link to tag="li">
        <a style="color: #ffe725">#javascript</a>
      </router-link>
      <router-link to tag="li">
        <a style="color: #33a956">#node</a>
      </router-link>
      <router-link to tag="li">
        <a style="color: #ff8682">#laravel</a>
      </router-link>
      <router-link to tag="li">
        <a style="color: #2ca9e1">#css</a>
      </router-link>
      <router-link to tag="li">
        <a style="color: #fdd22d">#python</a>
      </router-link>
    </ul>
    <b-container class="bg-color card border rounded p-2">
      <div class="col-">
        <div class="blog-grid">
          <b-row class="text-justify pl-5 pr-5">
            <b-col class="text-left">
              <h1>5 Tools for Faster Vue.js App Development</h1>
              <b-row class="text-left pl-3">
                <h6>
                  Five tools to speed the development of your Vue.js
                  applications.
                </h6>
                <b-row>
                  <b-col>
                    Not long ago Vue.js passed React in GitHub stars. Although a
                    somewhat shallow metric to measure, no doubt that this is
                    only an indicator of the great success and popularity Vue.js
                    is gathering in the community in 2018. As we use more great
                    frameworks like Vue to build new applications, Dev Velocity
                    becomes one of the most important aspects of our work.
                    Building amazing applications is great, building them fast
                    is even better. So, here are some useful tools to help speed
                    your development with Vue.js, save time, and deliver faster
                    to production. Feel free to comment and add useful tools you
                    work with to build faster :)
                  </b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col>
                    <h1>1. Bit</h1>
                    <img src="https://miro.medium.com/max/800/1*MKPAe_pxmfj-EIyzNxarGg.gif" />
                    <br />
                    <br />
                    <p>
                      Bit (GitHub) lets you easily share Vue components across
                      projects and teams.
                    </p>
                    <p>
                      Bit makes it easy to turn Vue components into reusable
                      building blocks, that can be easily shared and reused
                      across projects, applications and teams.
                    </p>
                  </b-col>
                </b-row>
              </b-row>
            </b-col>
          </b-row>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            style="max-width: 20rem;"
            class="mb-3 ml-5"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </div>
    </b-container>
    <div class="sidebar1">
      <b-row class="mb-3 ml-2">
        <b-avatar button :size="30" variant="dark" v-b-popover.hover.rightbottom="'Linkedin'">
          <social-sharing url="https://vuejs.org/" inline-template>
            <network network="linkedin">
              <i class="fab fa-linkedin"></i>
            </network>
          </social-sharing>
        </b-avatar>
      </b-row>
    </div>
    <div class="sidebar2">
      <b-row class="mb-3 ml-2">
        <b-avatar button :size="30" variant="primary" v-b-popover.hover.rightbottom="'facebook'">
          <social-sharing :url="share_link" inline-template>
            <network network="facebook">
              <i class="fab fa-facebook"></i>
            </network>
          </social-sharing>
        </b-avatar>
      </b-row>
    </div>
    <div class="sidebar3">
      <b-row class="mb-3 ml-2">
        <b-avatar button :size="30" variant="info" v-b-popover.hover.rightbottom="'twitter'">
          <social-sharing url="https://vuejs.org/" inline-template>
            <network network="twitter">
              <i class="fab fa-twitter"></i>
            </network>
          </social-sharing>
        </b-avatar>
      </b-row>
    </div>
    <div class="sidebar4">
      <b-row class="mb-3 ml-2">
        <b-avatar button :size="30" variant="danger" v-b-popover.hover.rightbottom="'reddit'">
          <social-sharing url="`localhost:8080/article${this.$route.path}`" inline-template>
            <network network="reddit">
              <i class="fab fa-reddit"></i>
            </network>
          </social-sharing>
        </b-avatar>
      </b-row>
    </div>
    <back-to-top bottom="70px" right="30px" style="scroll-behavior: smooth;">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
// import func from "../../vue-temp/vue-editor-bridge";
export default {
  name: "articles",
  data: function() {
    return {
      share_link: `https://mosalam.me/ + ${this.$route.params.id}/${this.$route.params.slug}`
    };
  },
  components: {
    AppFooter
  },
  created() {
    console.log(this.share_link);
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  float: left;
  background-color: #222;
  width: 100%;
  padding: 0px;
  left: 5px;
  margin-bottom: 2rem;
  li {
    padding: 5px 25px 5px;
    margin: 8px;
    display: inline-block;
    a:hover {
      color: #fff;
    }
  }
}

.sidebar1 {
  position: fixed;
  left: 25px;
  top: 100px;
  transition: all 0.5s ease-in-out;
  opacity: 0.5;
}
.sidebar2 {
  position: fixed;
  left: 25px;
  top: 150px;
  transition: all 0.5s ease-in-out;
  opacity: 0.5;
}
.sidebar3 {
  position: fixed;
  left: 25px;
  top: 200px;
  transition: all 0.5s ease-in-out;
  opacity: 0.5;
}
.sidebar4 {
  position: fixed;
  left: 25px;
  top: 250px;
  transition: all 0.5s ease-in-out;
  opacity: 0.5;
}

.sidebar1:hover {
  opacity: 1;
  transform: scale(1.3);
}
.sidebar2:hover {
  opacity: 1;
  transform: scale(1.3);
}
.sidebar3:hover {
  opacity: 1;
  transform: scale(1.3);
}
.sidebar4:hover {
  opacity: 1;
  transform: scale(1.3);
}

.bg-color {
  background-color: rgba(153, 153, 153, 0.055);
  margin-bottom: 2rem;
}

.btn-to-top {
  width: 50px;
  height: 50px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 20px;
  line-height: 20px;
}
</style>
