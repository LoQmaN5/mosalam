<template>
  <!-- fun -->
  <section id="skills" class="section">
    <div class="container">
      <div class="row sm-m-25px-b m-35px-b">
        <div class="col-md-12">
          <div class="section-title">
            <h3 class="dark-color text-uppercase">My Skills</h3>
            <p class="text-uppercase small">
              A Lead UX &amp; UI designer based in Canada
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-lg-6 m-15px-tb">
          <!-- skill -->
          <div class="skill-lt">
            <h6 class="dark-color">HTML5</h6>
            <b-progress class="mb-2" variant="warning">
              <b-progress-bar :value="value1" show-value :label="`${92}%`">
              </b-progress-bar>
              <span>92%</span>
            </b-progress>
          </div>
          <!-- end skill -->
          <!-- skill -->
          <div class="skill-lt">
            <h6 class="dark-color">WordPress</h6>
            <b-progress class="mb-2" variant="warning">
              <b-progress-bar :value="value2" show-value :label="`${72}%`">
              </b-progress-bar>
              <span>72%</span>
            </b-progress>
          </div>
          <!-- end skill -->
          <!-- skill -->
          <div class="skill-lt">
            <h6 class="dark-color">Magento</h6>
            <b-progress class="mb-2" variant="warning">
              <b-progress-bar :value="value3" show-value :label="`${86}%`">
              </b-progress-bar>
              <span>86%</span>
            </b-progress>
          </div>
          <!-- /skill -->
          <!-- end skill -->
          <!-- skill -->
          <div class="skill-lt">
            <h6 class="dark-color">UI/UX</h6>
            <b-progress class="mb-2" variant="warning">
              <b-progress-bar :value="value4" show-value :label="`${88}%`">
              </b-progress-bar>
              <span>88%</span>
            </b-progress>
          </div>
          <!-- end skill -->
        </div>
        <div class="col-lg-5 m-15px-tb">
          <div class="row">
            <div class="col-6 m-15px-tb">
              <div class="feature-box-2 media align-items-center">
                <div class="icon">
                  <i class="fas fa-compact-disc"></i>
                </div>
                <div class="media-body">
                  <h5>80 Albumes Listened</h5>
                </div>
              </div>
            </div>
            <div class="col-6 m-15px-tb">
              <div class="feature-box-2 media align-items-center">
                <div class="icon">
                  <i class="fas fa-trophy"></i>
                </div>
                <div class="media-body">
                  <h5>15 Awards Won</h5>
                </div>
              </div>
            </div>
            <div class="col-6 m-15px-tb">
              <div class="feature-box-2 media align-items-center">
                <div class="icon">
                  <i class="fas fa-mug-hot"></i>
                </div>
                <div class="media-body">
                  <h5>1000 Cups of coffee</h5>
                </div>
              </div>
            </div>
            <div class="col-6 m-15px-tb">
              <div class="feature-box-2 media align-items-center">
                <div class="icon">
                  <i class="fas fa-flag"></i>
                </div>
                <div class="media-body">
                  <h5>10 Countries Visited</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End fun -->
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      value1: 92,
      value2: 72,
      value3: 86,
      value4: 88
    };
  }
};
</script>

<style lang="sass" scoped></style>
