<template>
  <div>
    <!-- about us -->
    <section id="about" class="section gray-bg">
      <div class="container">
        <div class="row sm-m-25px-b m-35px-b">
          <div class="col-md-12">
            <div class="section-title">
              <h3 class="dark-color text-uppercase">ABOUT ME</h3>
              <p class="text-uppercase small">
                A Lead UX & UI designer based in Canada
              </p>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-5 m-15px-tb">
            <div class="about-me-img box-shadow">
              <img src="../assets/img/mo1.jpg" title alt />
              <div class="nav social-icon">
                <a :href="facebook" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a :href="twitter" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
                <a :href="instagram" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
                <a :href="linkedin" target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a :href="github" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-7 m-15px-tb">
            <div class="about-me">
              <h4>I'M Mo Salam</h4>
              <h6>
                A Lead
                <span class="theme-color">UX & UI</span> designer based in
                <span class="theme-color">Canada</span>
              </h6>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores. My passion is to design digital user
                experiences through the bold interface and meaningful
                interactions. Check out my Portfolio
              </p>
              <div class="row about-list">
                <div class="col-md-6">
                  <div class="media">
                    <label>Birthday</label>
                    <p>4th april 1991</p>
                  </div>
                  <div class="media">
                    <label>Age</label>
                    <p>22 Yr</p>
                  </div>
                  <div class="media">
                    <label>Residence</label>
                    <p>Canada</p>
                  </div>
                  <div class="media">
                    <label>Address</label>
                    <p>California, USA</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="media">
                    <label>E-mail</label>
                    <p>info@domain.com</p>
                  </div>
                  <div class="media">
                    <label>Phone</label>
                    <p>820-885-3321</p>
                  </div>
                  <div class="media">
                    <label>Skype</label>
                    <p>skype.0404</p>
                  </div>
                  <div class="media">
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div class="btn-bar">
                <a class="m-btn m-btn-theme" href="#work">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end about us -->
  </div>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      facebook: "https://www.facebook.com/m7.salam1",
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com/m7.salam",
      linkedin: "https://www.linkedin.com/in/m7salam",
      github: "https://github.com/m7salam"
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  left: 50px;
}
</style>
