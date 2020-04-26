<template>
  <div>
    <vue-scroll-indicator
      height="5px"
      color="#00f"
      background="#eee"
    ></vue-scroll-indicator>
    <blog-header />
    <b-container class="bg-color p-2">
      <div class="col">
        <div class="blog-grid">
          <b-row class="text-justify pl-5 pr-5">
            <b-col class="text-left">
              <h1>blog post</h1>
              <b-row class="mb-2">
                <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" />
              </b-row>
              <b-row>
                <span>span</span>
              </b-row>
              <b-row>
                <h1>span</h1>
              </b-row>
              <b-row class="text-justify">
                <p>
                  <span class="pseudo">L</span>orem ipsum, dolor sit amet
                  consectetur adipisicing elit. Natus maiores, vero quod non est
                  cupiditate dolorum aut, porro consequuntur vitae alias,
                  repellendus nulla rerum hic! Perferendis explicabo
                  exercitationem eligendi repudiandae? consectetur adipisicing
                  elit. Natus maiores, vero quod non est cupiditate dolorum aut,
                  porro consequuntur vitae alias, repellendus nulla rerum hic!
                  Perferendis explicabo exercitationem eligendi repudiandae?
                  ipsum, dolor sit amet consectetur adipisicing elit. Natus
                  maiores, vero quod non est cupiditate dolorum aut, porro
                  consequuntur vitae alias, repellendus nulla rerum hic!
                  Perferendis explicabo exercitationem eligendi repudiandae?
                  consectetur adipisicing elit. Natus maiores, vero quod non est
                  cupiditate dolorum aut, porro consequuntur vitae alias,
                  repellendus nulla rerum hic! Perferendis explicabo
                  exercitationem eligendi repudiandae?
                </p>
              </b-row>
              <b-row class="mb-2 text-justify">
                <img
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  width="400"
                />
                <b-col>
                  <h1>Step 1</h1>
                  <p>
                    volutpat nec libero. Fusce mattis non nisi quis tincidunt.
                    Donec dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor.
                  </p>
                </b-col>
              </b-row>
              <b-row class="mb-3 text-justify">
                <b-col>
                  <h1>Step 2</h1>
                  <p>
                    volutpat nec libero. Fusce mattis non nisi quis tincidunt.
                    Donec dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor.
                  </p>
                </b-col>
              </b-row>
              <b-row class="mb-3 text-justify">
                <b-col>
                  <h1>Step 3</h1>
                  <p>
                    volutpat nec libero. Fusce mattis non nisi quis tincidunt.
                    Donec dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor.
                  </p>
                </b-col>
                <img
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  width="400"
                />
              </b-row>
              <b-row class="mb-3 text-justify">
                <b-col>
                  <h1>Step 4</h1>
                  <p>
                    volutpat nec libero. Fusce mattis non nisi quis tincidunt.
                    Donec dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor.
                  </p>
                </b-col>
                <b-carousel
                  id="carousel-1"
                  :interval="5000"
                  style="text-shadow: 0px 0px 2px #000"
                  no-animation
                  controls
                  indicators
                  img-width="1024"
                  img-height="480"
                >
                  <b-carousel-slide
                    caption="First slide"
                    img-src="https://picsum.photos/1024/480/?image=10"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    caption="Second Slide"
                    img-src="https://picsum.photos/1024/480/?image=12"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    caption="Third Slide"
                    img-src="https://picsum.photos/1024/480/?image=22"
                  ></b-carousel-slide>
                </b-carousel>
              </b-row>
              <b-row class="mb-3 text-justify">
                <b-col>
                  <h1>
                    <strong>
                      <span style="color: #f00">Final Step:</span>
                      Fusce mattis non nisi quis tincidunt. Donec dictum velit
                      sed feugiat laoreet.
                    </strong>
                  </h1>
                  <p>
                    volutpat nec libero. Fusce mattis non nisi quis tincidunt.
                    Donec dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor.
                  </p>
                </b-col>
              </b-row>
              <b-row class="mb-3 text-justify">
                <b-col>
                  <blockquote>
                    <p class="ml-5 font-weight-bold">
                      volutpat nec libero. Fusce mattis non nisi quis tincidunt.
                      Donec dictum velit sed feugiat laoreet. Sed justo magna,
                      sollicitudin et dignissim ac, venenatis at tortor. olutpat
                      nec libero.
                      <br />
                      <cite>- Mo Salam</cite>
                    </p>
                  </blockquote>
                </b-col>
              </b-row>
              <b-row class="mb-3 text-justify">
                <b-col>
                  <p>
                    volutpat nec libero. Fusce mattis non nisi quis tincidunt.
                    Donec dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor. olutpat
                    nec libero. Fusce mattis non nisi quis tincidunt. Donec
                    dictum velit sed feugiat laoreet. Sed justo magna,
                    sollicitudin et dignissim ac, venenatis at tortor.
                  </p>
                </b-col>
              </b-row>
              <div
                class="testimonial-col-01 col-8 p-4 text-justify bg-light rounded-lg"
              >
                <div class="media">
                  <div class="img">
                    <img src="../assets/img/mo1.jpg" title alt />
                  </div>
                  <div class="media-body p-25px-l">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <div class="tc-info">
                      <h6 class="font-alt dark-color font-w-600">Mo Salam</h6>
                      <span>Co-founder</span>
                    </div>
                  </div>
                </div>
              </div>
              <b-row class="mb-3 text-justify dark-color">
                <b-col>
                  <h1>RELATED POSTS</h1>
                  <div class="row">
                    <div
                      class="col-lg-4 m-15px-tb animation"
                      v-for="blog in blogs"
                      :key="blog.id"
                    >
                      <div class="blog-grid">
                        <div class="blog-grid-img">
                          <router-link to="/article">
                            <a href="#">
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
                            <router-link to="/article">
                              <a href="#">Make your Marketing website</a>
                            </router-link>
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                          <div class="btn-grid">
                            <router-link to="/article">
                              <a class="m-btn-link" href="#">Read More</a>
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- End col -->
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
    <b-row class="mb-3 text-justify container offset-1 bg-light">
      <b-col>
        <b-form-textarea
          id="textarea-rows"
          placeholder="comment"
          rows="8"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <div class="sidebar1">
      <b-row class="mb-3 ml-2">
        <b-avatar
          button
          :size="30"
          variant="dark"
          v-b-popover.hover.rightbottom="'Linkedin'"
        >
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
        <b-avatar
          button
          :size="30"
          variant="primary"
          v-b-popover.hover.rightbottom="'facebook'"
        >
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
        <b-avatar
          button
          :size="30"
          variant="info"
          v-b-popover.hover.rightbottom="'twitter'"
        >
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
        <b-avatar
          button
          :size="30"
          variant="danger"
          v-b-popover.hover.rightbottom="'reddit'"
        >
          <social-sharing
            url="`localhost:8080/article${this.$route.path}`"
            inline-template
          >
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
import BlogHeader from "../Blogs/BlogHeader.vue";
import axios from "axios";
export default {
  name: "articles",
  data: function() {
    return {
      share_link: `https://mosalam.me/ + ${this.$route.params.id}/${this.$route.params.slug}`,
      facebook: "https://www.facebook.com/m7.salam1",
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com/m7.salam",
      linkedin: "https://www.linkedin.com/in/m7salam",
      github: "https://github.com/m7salam",
      blogs: []
    };
  },
  components: {
    AppFooter,
    BlogHeader
  },
  created() {
    console.log(this.share_link);
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

.pseudo {
  font-size: 57px !important;
  font-weight: 700;
  margin-right: 15px;
  padding: 15px;
  line-height: 1;
  float: left;
  margin: 20px 26px;
  position: relative;
  top: -8px;
  left: -3px;
  background-color: #eee;
  border-radius: 5px;
  color: #000;
  font-size: large;
}

blockquote:before {
  content: "”";
  display: block;
  position: absolute;
  top: 59%;
  left: 0;
  font-size: 50px;
  line-height: 0;
  margin-top: 6px;
  margin-left: 0;
  color: inherit;
}

blockquote:after {
  content: "";
  display: block;
  position: absolute;
  top: 5px;
  left: 40px;
  bottom: 5px;
  width: 2px;
  background-color: #f63a4c;
}

cite {
  display: block;
  color: #f63a4c;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
}

.animation {
  transition: all 0.5s ease-in-out;
}

.animation:hover {
  transform: scale(1.1);
}

.sidebar1 {
  position: fixed;
  left: 25px;
  top: 125px;
  transition: all 0.5s ease-in-out;
  opacity: 0.5;
}
.sidebar2 {
  position: fixed;
  left: 25px;
  top: 175px;
  transition: all 0.5s ease-in-out;
  opacity: 0.5;
}
.sidebar3 {
  position: fixed;
  left: 25px;
  top: 225px;
  transition: all 0.5s ease-in-out;
  opacity: 0.5;
}
.sidebar4 {
  position: fixed;
  left: 25px;
  top: 275px;
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
  // background-color: rgba(153, 153, 153, 0.055);
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
