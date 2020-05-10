<template>
  <div>
    <vue-scroll-indicator
      height="5px"
      color="#00f"
      background="#eee"
    ></vue-scroll-indicator>
    <blog-header />
    <!-- <b-container class="bg-color p-2">
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
                    <p class="ml-12 font-weight-bold">
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
                    <img src="../../assets/img/mo1.jpg" title alt />
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
                              <img
                                src="../../assets/img/blog-1.jpg"
                                title
                                alt
                              />
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
                    End col
                   </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
    </div>-->
    <!-- </div> -->
    <!-- </b-container> -->
    <!-- <b-row class="mb-3 text-justify container offset-1 bg-light"> -->
    <!-- <b-col>
        <b-form-textarea
          id="textarea-rows"
          placeholder="comment"
          rows="8"
        ></b-form-textarea>
    </b-col>-->
    <!-- </b-row> -->
    <!-- <div class="sidebar1"> -->
    <!-- <b-row class="mb-3 ml-2">
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
    </b-row>-->
    <!-- </div> -->
    <!-- <div class="sidebar2"> -->
    <!-- <b-row class="mb-3 ml-2">
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
    </b-row>-->
    <!-- </div> -->
    <!-- <div class="sidebar3"> -->
    <!-- <b-row class="mb-3 ml-2">
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
    </b-row>-->
    <!-- </div> -->
    <!-- <div class="sidebar4"> -->
    <!-- <b-row class="mb-3 ml-2">
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
    </b-row>-->
    <!-- </div> -->
    <!-- <back-to-top bottom="70px" right="30px"> -->
    <!-- <button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
    </button>-->
    <!-- </back-to-top> -->
    <!-- <app-footer /> -->
    <div class="main-wrapper">
      <div class="blog-post px-3 py-5 p-md-5">
        <div class="container">
          <header class="blog-post-header">
            <h2 class="title mb-2">Why Every Developer Should Have A Blog</h2>
            <div class="meta mb-3">
              <span class="date">Published 3 months ago</span>
              <span class="time">5 min read</span>
              <span class="comment">
                <a href="#">4 comments</a>
              </span>
            </div>
          </header>

          <div class="blog-post-body">
            <div class="blog-banner">
              <a href="https://made4dev.com">
                <img
                  class="img-fluid mb-2"
                  src="../../assets/img/blog/blog-post-banner.jpg"
                  alt="image"
                />
              </a>
              <span class="ma-12 pa-12 text-center image-caption">
                Image Credit:
                <a href="https://made4dev.com?ref=devblog" target="_blank"
                  >made4dev.com (Premium Programming T-shirts)</a
                >
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim.
            </p>

            <h3 class="mt-5 mb-3">Code Block Example</h3>
            <p>
              You can get more info at
              <a href="https://highlightjs.org/" target="_blank"
                >https://highlightjs.org/</a
              >. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim.
            </p>
            <pre>
					    <div class="bg-light text-dark font-weight-bold">
        function $initHighlight(block, cls) {
          try {
            if (cls.search(/\bno\-highlight\b/) != -1)
              return process(block, true, 0x0F) +
                    ` class="${cls}"`;
          } catch (e) {
            /* handle exception */
          }
          for (var i = 0 / 2; i  classes.length; i++) {
            if (checkCondition(classes[i]) === undefined)
              console.log('undefined');
          }
        }

        export  $initHighlight;
					    </div>
				    </pre>
            <h3 class="mt-5 mb-3">Typography</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <h5 class="my-3">Bullet Points:</h5>
            <ul class="mb-5">
              <li class="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
              <li class="mb-2">Aenean commodo ligula eget dolor.</li>
              <li class="mb-2">Aenean massa cum sociis natoque penatibus.</li>
            </ul>
            <ol class="mb-5">
              <li class="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
              <li class="mb-2">Aenean commodo ligula eget dolor.</li>
              <li class="mb-2">Aenean massa cum sociis natoque penatibus.</li>
            </ol>
            <h5 class="my-3">Quote Example:</h5>
            <blockquote>
              <p class="ml-12 font-weight-bold">
                volutpat nec libero. Fusce mattis non nisi quis tincidunt. Donec
                dictum velit sed feugiat laoreet. Sed justo magna, sollicitudin
                et dignissim ac, venenatis at tortor. olutpat nec libero.
                <br />
                <cite class="blockquote-footer">Mo Salam</cite>
              </p>
            </blockquote>

            <h5 class="my-3">Table Example:</h5>
            <table class="table table-striped my-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

            <h3 class="mt-5 mb-3">Video Example</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>

            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/hnCmSXCZEpU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div class="blog-comments-section">
            <div id="disqus_thread">
              <!-- Comments Form -->
              <div class="card my-4">
                <h5 class="card-header">Leave a Comment:</h5>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>

              <!-- Single Comment -->
              <div class="media mb-4">
                <img
                  class="d-flex mr-3 rounded-circle"
                  src="http://placehold.it/50x50"
                  alt
                />
                <div class="media-body">
                  <h5 class="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>

              <!-- Comment with nested comments -->
              <div class="media mb-4">
                <img
                  class="d-flex mr-3 rounded-circle"
                  src="http://placehold.it/50x50"
                  alt
                />
                <div class="media-body">
                  <h5 class="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                  <div class="media mt-4">
                    <img
                      class="d-flex mr-3 rounded-circle"
                      src="http://placehold.it/50x50"
                      alt
                    />
                    <div class="media-body">
                      <h5 class="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>

                  <div class="media mt-4">
                    <img
                      class="d-flex mr-3 rounded-circle"
                      src="http://placehold.it/50x50"
                      alt
                    />
                    <div class="media-body">
                      <h5 class="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--//blog-comments-section-->
        </div>
        <!--//container-->
      </div>

      <section class="promo-section theme-bg-light py-5 text-center">
        <div class="container">
          <h2 class="title">Promo Section Heading</h2>
          <p>
            You can use this section to promote your side projects etc. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa.
          </p>
          <div class="promo-figure">
            <a href="https://made4dev.com" target="_blank">
              <img
                class="img-fluid"
                src="../../assets/img/promo-banner.jpg"
                alt="image"
              />
            </a>
          </div>
        </div>
        <!--//container-->
      </section>
      <!--//promo-section-->
    </div>
    <!--//main-wrapper-->
    <footer class="footer text-center py-2 theme-bg-dark">
      <small class="copyright">
        Designed with
        <i class="fas fa-heart" style="color: #fb866a;"></i> by
        <a href="http://themes.3rdwavemedia.com" target="_blank"
          >Xiaoying Riley</a
        >
        for developers
      </small>
    </footer>
  </div>
</template>

<script>
// import AppFooter from "../../components/AppFooter.vue";
import BlogHeader from "../../components/Blog/BlogHeader.vue";
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
    // AppFooter,
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
// ul {
//   list-style: none;
//   float: left;
//   background-color: #222;
//   width: 100%;
//   padding: 0px;
//   left: 5px;
//   margin-bottom: 2rem;
//   li {
//     padding: 5px 25px 5px;
//     margin: 8px;
//     display: inline-block;
//     a:hover {
//       color: #fff;
//     }
//   }
// }

// .pseudo {
//   font-size: 57px !important;
//   font-weight: 700;
//   margin-right: 15px;
//   padding: 15px;
//   line-height: 1;
//   float: left;
//   margin: 20px 26px;
//   position: relative;
//   top: -8px;
//   left: -3px;
//   background-color: #eee;
//   border-radius: 5px;
//   color: #000;
//   font-size: large;
// }

blockquote:before {
  content: "”";
  display: block;
  position: absolute;
  top: 2060px;
  left: 390;
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
  top: 2006px;
  left: 446px;
  bottom: 2375px;
  width: 3px;
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

// .animation {
//   transition: all 0.5s ease-in-out;
// }

// .animation:hover {
//   transform: scale(1.1);
// }

// .sidebar1 {
//   position: fixed;
//   left: 25px;
//   top: 125px;
//   transition: all 0.5s ease-in-out;
//   opacity: 0.5;
// }
// .sidebar2 {
//   position: fixed;
//   left: 25px;
//   top: 175px;
//   transition: all 0.5s ease-in-out;
//   opacity: 0.5;
// }
// .sidebar3 {
//   position: fixed;
//   left: 25px;
//   top: 225px;
//   transition: all 0.5s ease-in-out;
//   opacity: 0.5;
// }
// .sidebar4 {
//   position: fixed;
//   left: 25px;
//   top: 275px;
//   transition: all 0.5s ease-in-out;
//   opacity: 0.5;
// }

// .sidebar1:hover {
//   opacity: 1;
//   transform: scale(1.3);
// }
// .sidebar2:hover {
//   opacity: 1;
//   transform: scale(1.3);
// }
// .sidebar3:hover {
//   opacity: 1;
//   transform: scale(1.3);
// }
// .sidebar4:hover {
//   opacity: 1;
//   transform: scale(1.3);
// }

// .bg-color {
//   // background-color: rgba(153, 153, 153, 0.055);
//   margin-bottom: 2rem;
// }

// .btn-to-top {
//   width: 50px;
//   height: 50px;
//   padding: 10px 16px;
//   border-radius: 50%;
//   font-size: 20px;
//   line-height: 20px;
// }
</style>
