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
        <div class="portfolio-content lightbox-gallery">
          <!-- grid item 1 -->
          <div class="grid-item product branding">
            <div class="portfolio-box-01">
              <div class="portfolio-img">
                <img src="../assets/img/oneuni.png" title alt />
              </div>
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
          <!-- End grid item 1 -->
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
          <!-- grid item 2 -->
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
          <!-- End grid item 2 -->
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
          <!-- grid item 3 -->
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
          <!-- End grid item 3 -->
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
          <!-- grid item -->
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
          <!-- grid item -->
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
        </div>
        <!-- portfolio-content -->
      </div>
    </section>
    <!-- End work -->
  </div>
</template>

<script>
// import AppHeader from "../components/AppHeader.vue";
export default {
  name: "Portfolio",
  data() {
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
  },
  components: {
    // AppHeader
  }
};
</script>

<style scoped></style>
