<template>
  <div>
    <!-- Work -->
    <section id="work" class="section">
      <div class="container">
        <div class="row sm-m-25px-b m-35px-b">
          <div class="col-md-12">
            <div class="section-title">
              <h3 class="dark-color text-uppercase">LATEST WORKS</h3>
              <p class="text-uppercase small">
                A Lead UX &amp; UI designer based in Canada
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <b-row class="lightbox-gallery">
          <!-- grid item 1 -->
          <div class="item">
            <div class="grid-item product branding">
              <div class="portfolio-box-01">
                <img src="../assets/img/oneuni.png" title alt />
                <div class="portfolio-info">
                  <h5>1UNi</h5>
                  <span>Java</span>
                </div>
                <a
                  class="link-overlay"
                  href="#../assets/img/oneuni.png"
                  @click="model1 = true"
                ></a>
              </div>
            </div>
          </div>
          <b-modal
            v-model="model1"
            title="1UNi"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :footer-bg-variant="footerBgVariant"
            size="lg"
          >
            <b-row class="mb-1">
              <b-col cols="3" class="font-weight-bold">Java Project 1UNi</b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col cols="1" class="mr-2 mb-3 mt-2">
                <b-button variant="warning">Java</b-button>
              </b-col>
              <b-col cols="1" class="mr-5 mb-3 mt-2">
                <b-button variant="warning">MongoDb</b-button>
              </b-col>
              <b-col cols="1" class="mr-4 mb-3 mt-2">
                <b-button variant="warning">Node.js</b-button>
              </b-col>
              <b-col cols="1" class="mr-2 mb-3 mt-2">
                <b-button variant="warning">Angular</b-button>
              </b-col>
            </b-row>
            <b-container fluid>
              <img src="../assets/img/oneuni.png" title alt />
              <img src="../assets/img/AI__Applications_suggestions.png" />
            </b-container>
            <template v-slot:modal-footer>
              <div class="w-100">
                <b-button
                  variant="primary"
                  size="sm"
                  class="float-left"
                  @click="model1 = false"
                >
                  <a :href="oneuni" target="_blank" style="color: #fff"
                    >Live Demo</a
                  >
                </b-button>
              </div>
            </template>
          </b-modal>
          <!-- End grid item 1 -->

          <!-- grid item 2 -->
          <div class="item">
            <div class="grid-item product branding">
              <div class="portfolio-box-01">
                <div class="portfolio-img">
                  <img src="../assets/img/mosalamweb.png" title alt />
                </div>
                <div class="portfolio-info">
                  <h5>Mo Salam</h5>
                  <span>Python Django</span>
                </div>
                <a
                  class="link-overlay"
                  href="#../assets/img/mosalamweb.png"
                  @click="model2 = true"
                ></a>
              </div>
            </div>
          </div>

          <b-modal
            v-model="model2"
            title="Mo Salam"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :footer-bg-variant="footerBgVariant"
            size="lg"
          >
            <b-row class="mb-1">
              <b-col cols="3" class="font-weight-bold">Personal Website</b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col cols="1" class="mr-4 mb-2">
                <b-button variant="warning">Python</b-button>
              </b-col>
              <b-col cols="1" class="mr-4 mb-2">
                <b-button variant="warning">Django</b-button>
              </b-col>
              <b-col cols="1" class="mr-5 mb-2">
                <b-button variant="warning">Bootstrap4</b-button>
              </b-col>
              <b-col cols="1" class="ml-2 mb-2">
                <b-button variant="warning">PostgreSQL</b-button>
              </b-col>
            </b-row>
            <b-container fluid>
              <img src="../assets/img/mosalamweb.png" title alt />
            </b-container>
            <template v-slot:modal-footer>
              <div class="w-100">
                <b-button
                  variant="primary"
                  size="sm"
                  class="float-left"
                  @click="model2 = false"
                >
                  <a :href="mosalam" target="_blank" style="color: #fff"
                    >Live Demo</a
                  >
                </b-button>
              </div>
            </template>
          </b-modal>
          <!-- End grid item 2 -->

          <!-- grid item 3 -->
          <div class="item">
            <div class="grid-item product branding">
              <div class="portfolio-box-01">
                <div class="portfolio-img">
                  <img src="../assets/img/hla-media.png" title alt />
                </div>
                <div class="portfolio-info">
                  <h5>Hla-Media</h5>
                  <span>Wordpress</span>
                </div>
                <a
                  class="link-overlay"
                  href="#../assets/img/hla-media.png"
                  @click="model3 = true"
                ></a>
              </div>
            </div>
          </div>
          <b-modal
            v-model="model3"
            title="Hla-Media"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :footer-bg-variant="footerBgVariant"
            size="lg"
          >
            <b-container fluid>
              <img src="../assets/img/hla-media.png" title alt />
            </b-container>

            <template v-slot:modal-footer>
              <div class="w-100">
                <b-button
                  variant="primary"
                  size="sm"
                  class="float-left"
                  @click="model3 = false"
                >
                  <a :href="oneuni" target="_blank" style="color: #fff"
                    >Live Demo</a
                  >
                </b-button>
              </div>
            </template>
          </b-modal>
          <!-- End grid item 3 -->
          <!-- grid item 1 -->
          <div class="item">
            <div class="grid-item product branding">
              <div class="portfolio-box-01">
                <img src="../assets/img/oneuni.png" title alt />
                <div class="portfolio-info">
                  <h5>1UNi</h5>
                  <span>Java</span>
                </div>
                <a
                  class="link-overlay"
                  href="#../assets/img/oneuni.png"
                  @click="model1 = true"
                ></a>
              </div>
            </div>
          </div>
          <b-modal
            v-model="model1"
            title="1UNi"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :footer-bg-variant="footerBgVariant"
            size="lg"
          >
            <b-row class="mb-1">
              <b-col cols="3" class="font-weight-bold">Java Project 1UNi</b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col cols="1" class="mr-2 mb-3 mt-2">
                <b-button variant="warning">Java</b-button>
              </b-col>
              <b-col cols="1" class="mr-5 mb-3 mt-2">
                <b-button variant="warning">MongoDb</b-button>
              </b-col>
              <b-col cols="1" class="mr-4 mb-3 mt-2">
                <b-button variant="warning">Node.js</b-button>
              </b-col>
              <b-col cols="1" class="mr-2 mb-3 mt-2">
                <b-button variant="warning">Angular</b-button>
              </b-col>
            </b-row>
            <b-container fluid>
              <img src="../assets/img/oneuni.png" title alt />
              <img src="../assets/img/AI__Applications_suggestions.png" />
            </b-container>
            <template v-slot:modal-footer>
              <div class="w-100">
                <b-button
                  variant="primary"
                  size="sm"
                  class="float-left"
                  @click="model1 = false"
                >
                  <a :href="oneuni" target="_blank" style="color: #fff"
                    >Live Demo</a
                  >
                </b-button>
              </div>
            </template>
          </b-modal>
          <!-- End grid item 1 -->

          <!-- grid item 2 -->
          <div class="item">
            <div class="grid-item product branding">
              <div class="portfolio-box-01">
                <div class="portfolio-img">
                  <img src="../assets/img/mosalamweb.png" title alt />
                </div>
                <div class="portfolio-info">
                  <h5>Mo Salam</h5>
                  <span>Python Django</span>
                </div>
                <a
                  class="link-overlay"
                  href="#../assets/img/mosalamweb.png"
                  @click="model2 = true"
                ></a>
              </div>
            </div>
          </div>

          <b-modal
            v-model="model2"
            title="Mo Salam"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :footer-bg-variant="footerBgVariant"
            size="lg"
          >
            <b-row class="mb-1">
              <b-col cols="3" class="font-weight-bold">Personal Website</b-col>
            </b-row>
            <b-row class="mb-1">
              <b-col cols="1" class="mr-4 mb-2">
                <b-button variant="warning">Python</b-button>
              </b-col>
              <b-col cols="1" class="mr-4 mb-2">
                <b-button variant="warning">Django</b-button>
              </b-col>
              <b-col cols="1" class="mr-5 mb-2">
                <b-button variant="warning">Bootstrap4</b-button>
              </b-col>
              <b-col cols="1" class="ml-2 mb-2">
                <b-button variant="warning">PostgreSQL</b-button>
              </b-col>
            </b-row>
            <b-container fluid>
              <img src="../assets/img/mosalamweb.png" title alt />
            </b-container>
            <template v-slot:modal-footer>
              <div class="w-100">
                <b-button
                  variant="primary"
                  size="sm"
                  class="float-left"
                  @click="model2 = false"
                >
                  <a :href="mosalam" target="_blank" style="color: #fff"
                    >Live Demo</a
                  >
                </b-button>
              </div>
            </template>
          </b-modal>
          <!-- End grid item 2 -->

          <!-- grid item 3 -->
          <div class="item">
            <div class="grid-item product branding">
              <div class="portfolio-box-01">
                <div class="portfolio-img">
                  <img src="../assets/img/hla-media.png" title alt />
                </div>
                <div class="portfolio-info">
                  <h5>Hla-Media</h5>
                  <span>Wordpress</span>
                </div>
                <a
                  class="link-overlay"
                  href="#../assets/img/hla-media.png"
                  @click="model3 = true"
                ></a>
              </div>
            </div>
          </div>
          <b-modal
            v-model="model3"
            title="Hla-Media"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :footer-bg-variant="footerBgVariant"
            size="lg"
          >
            <b-container fluid>
              <img src="../assets/img/hla-media.png" title alt />
            </b-container>

            <template v-slot:modal-footer>
              <div class="w-100">
                <b-button
                  variant="primary"
                  size="sm"
                  class="float-left"
                  @click="model3 = false"
                >
                  <a :href="oneuni" target="_blank" style="color: #fff"
                    >Live Demo</a
                  >
                </b-button>
              </div>
            </template>
          </b-modal>
          <!-- End grid item 3 -->
        </b-row>
        <!-- portfolio-content -->
      </div>
    </section>
    <!-- End work -->
    <!-- Testimonial -->
    <section class="section gray-bg">
      <div class="container">
        <div class="row sm-m-25px-b m-35px-b">
          <div class="col-md-12">
            <div class="section-title">
              <h3 class="dark-color text-uppercase">Testimonials</h3>
              <p class="text-uppercase small">
                A Lead UX &amp; UI designer based in Canada
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-12">
            <!-- testimonials -->
            <carousel
              class="owl-carousel"
              data-items="2"
              data-nav-dots="true"
              data-md-items="2"
              data-sm-items="1"
              data-xs-items="1"
              data-xx-items="1"
              data-space="30"
            >
              <slide>
                <div class="testimonial-col-01">
                  <div class="media">
                    <div class="img">
                      <img src="../assets/img/team-1.jpg" title="" alt="" />
                    </div>
                    <div class="media-body p-25px-l">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div class="tc-info">
                        <h6 class="font-alt dark-color font-w-600">
                          Nancy Bayers
                        </h6>
                        <span>Co-founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>

              <!-- / -->
              <!-- testimonials -->

              <slide>
                <div class="testimonial-col-01">
                  <div class="media">
                    <div class="img">
                      <img src="../assets/img/team-2.jpg" title="" alt="" />
                    </div>
                    <div class="media-body p-25px-l">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div class="tc-info">
                        <h6 class="font-alt dark-color font-w-600">
                          Nancy Bayers
                        </h6>
                        <span>Co-founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
            <!-- / -->
            <!-- testimonials -->
            <carousel>
              <slide>
                <div class="testimonial-col-01">
                  <div class="media">
                    <div class="img">
                      <img src="../assets/img/team-3.jpg" title="" alt="" />
                    </div>
                    <div class="media-body p-25px-l">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div class="tc-info">
                        <h6 class="font-alt dark-color font-w-600">
                          Nancy Bayers
                        </h6>
                        <span>Co-founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
              <!-- / -->
              <!-- testimonials -->
              <slide>
                <div class="testimonial-col-01">
                  <div class="media">
                    <div class="img">
                      <img src="../assets/img/team-4.jpg" title="" alt="" />
                    </div>
                    <div class="media-body p-25px-l">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div class="tc-info">
                        <h6 class="font-alt dark-color font-w-600">
                          Nancy Bayers
                        </h6>
                        <span>Co-founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
            <!-- / -->
          </div>
        </div>
      </div>
    </section>
    <!-- End Testiminails -->
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Portfolio",
  components: {
    Carousel,
    Slide
  },
  data: function() {
    return {
      oneuni: "https://1uni.net",
      mosalam: "https://mosalam.me",
      model1: false,
      model2: false,
      model3: false,
      variants: ["light", "dark"],
      headerBgVariant: "dark",
      headerTextVariant: "light",
      footerBgVariant: "warning",
      footerTextVariant: "dark"
    };
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 350px;
  margin: 10px;
  box-sizing: border-box;
  font-family: monospace;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.VueCarousel-slide {
  font-family: Arial;
  margin-right: 25px;
  margin-top: -20px;
}
</style>
