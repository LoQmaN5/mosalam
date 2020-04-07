<template>
  <div>
    <!-- <app-header /> -->
    <section id="contactus" class="section gray-bg">
      <div class="container">
        <div class="row sm-m-25px-b m-35px-b">
          <div class="col-md-12">
            <div class="section-title">
              <h3 class="dark-color text-uppercase">Get in touch</h3>
              <p class="text-uppercase small">
                A Lead UX &amp; UI designer based in Canada
              </p>
            </div>
          </div>
        </div>
        <!-- form -->
        <div class="row justify-content-center">
          <div class="col-lg-8 m-15px-tb">
            <div class="contact-form box-shadow">
              <h4 class="dark-color font-alt m-20px-b">Say Something</h4>
              <form id="contact-form" method="POST">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        name="Name"
                        id="name"
                        placeholder="Name *"
                        class="form-control"
                        type="text"
                      />
                      <span class="input-focus-effect theme-bg"></span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        name="Email"
                        id="email"
                        placeholder="Email *"
                        class="form-control"
                        type="email"
                      />
                      <span class="input-focus-effect theme-bg"></span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        name="Subject"
                        id="subject"
                        placeholder="Subject *"
                        class="form-control"
                        type="text"
                      />
                      <span class="input-focus-effect theme-bg"></span>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message *"
                        rows="3"
                        class="form-control"
                      ></textarea>
                      <span class="input-focus-effect theme-bg"></span>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="send">
                      <button
                        class="m-btn m-btn-theme"
                        onclick="send_mail()"
                        type="button"
                        value="Send"
                      >
                        send message
                      </button>
                    </div>
                    <span
                      id="suce_message"
                      class="text-success"
                      style="display: none;"
                      >Message Sent Successfully</span
                    >
                    <span
                      id="err_message"
                      class="text-danger"
                      style="display: none;"
                      >Message Sending Failed</span
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- col -->
          <div class="col-lg-4 m-15px-tb">
            <div class="contact-info media box-shadow">
              <div class="icon">
                <i class="ti-location-pin"></i>
              </div>
              <div class="media-body">
                <h6 class="dark-color font-alt">Our Address</h6>
                <p>
                  123 Stree New York City , United States Of America 750065.
                </p>
              </div>
            </div>
            <div class="contact-info media box-shadow">
              <div class="icon">
                <i class="ti-mobile"></i>
              </div>
              <div class="media-body">
                <h6 class="dark-color font-alt">Our Phone</h6>
                <p>
                  Office: +004 44444 44444<br />
                  Office: +004 44444 44444<br />
                </p>
              </div>
            </div>
            <div class="contact-info media box-shadow">
              <div class="icon">
                <i class="ti-email"></i>
              </div>
              <div class="media-body">
                <h6 class="dark-color font-alt">Our Email</h6>
                <p>info@domainname.com<br />contact@domainname.com</p>
              </div>
            </div>
          </div>
        </div>
        <!-- end form -->
      </div>
    </section>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
// import AppHeader from "../components/AppHeader.vue";
export default {
  name: "Contact",
  components: {
    // AppHeader,
    AppFooter
  }
};
</script>

<style scoped></style>
