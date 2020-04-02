<template>
  <div>
    <app-header />
    <b-container class="offset-1 position-relative" style="
    top: -50px;
    left: 90px;">
      <b-row class="text-left mb-1 text-primary">
        <b-col cols="7">
          <h4>A multidisciplinary designer with an eye for details.</h4>
        </b-col>
      </b-row>
      <b-row class="text-left pl-1">
        <b-col cols="8 font-weight-bold text-justify">
          <p>
            I’m Ahmad, Digital Product Designer and Front-End Developer from
            Palestine. I enjoy working on large scale Product Design and Front
            End Projects which involves solving complex design problems.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <section>
      <b-container class="offset-1 position-relative" style="
    top: -5px;
    left: 90px;">
        <b-row class="text-left mb-1">
          <b-col cols="7">
            <h3>
              Latest Articles /
              <router-link to="/articles">
                <a>View all</a>
              </router-link>
            </h3>
          </b-col>
        </b-row>
      </b-container>
      <div>
        <article>
          <a href="/article/new-facebook-css/">
            <h3>CSS Findings From The New Facebook Design</h3>
            <time>31 Mar 2020</time>
          </a>
        </article>

        <article>
          <a href="/article/overflow-css/">
            <h3>Overflow In CSS</h3>
            <time>28 Mar 2020</time>
          </a>
        </article>

        <article>
          <a href="/article/auto-css/">
            <h3>Everything About Auto in CSS</h3>
            <time>20 Mar 2020</time>
          </a>
        </article>

        <article>
          <a href="/article/viewport-units/">
            <h3>CSS Viewport Units</h3>
            <time>12 Mar 2020</time>
          </a>
        </article>
      </div>
    </section>
    <section>
      <h2>Right to Left Styling</h2>
      <div>
        <article>
          <p>
            I published a guide about Right-to-left Styling in CSS that includes
            all the details you need to build a multilangual website in CSS.
          </p>
          <a href="http://rtlstyling.com/" class="c-button" target="_blank">
            <!-- <svg width="20" height="20" viewBox="0 0 20 20">
              <use xlink:href="#link-external" />
            </svg>-->
            View Project
          </a>
        </article>
      </div>
    </section>
    <section>
      <h2>Arabic Blog</h2>
      <div>
        <article>
          <p>
            Since Arabic is my mother language, this is the first ever blog I
            created. It was in 2012 where I starting blogging about infographics
            and design in general. It has a special place in my heart.
          </p>
          <a href="http://ishadeed.com/blog/" class="c-button" target="_blank">
            <!-- <svg width="20" height="20" viewBox="0 0 20 20">
              <use xlink:href="#link-external"></use>
            </svg>-->
            View Blog
          </a>
        </article>
        <footer class="c-section c-section--footer full">
          <h2 class="c-section__title">Get In Touch</h2>
          <p class="c-section__desc">
            Either you have a project to collaborate on, or you want to say
            Hello. Feel free to email contact[at]ishadeed[dot]com or use the
            form below.
          </p>

          <div class="landscape">
            <svg
              class="landscape__graphic"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1500.14 397.92"
              preserveAspectRatio="xMidYMin slice"
            >
              <path
                d="M1500.1,20.2V225.3L704,218.8h0L0,213.1V54.7c97.4,11.4,250.6,17.4,479.5-1.5C761.8,29.8,1040.3,0,1256.6,0,1351.3,0,1434.2,5.7,1500.1,20.2Z"
                fill="#499554"
              />
              <path
                d="M1500.1,105.9v203L0,329.3V106.5c64.1,2.3,244.7,9.9,335.6,26.3C447.2,152.8,699,199.7,1500.1,105.9Z"
                fill="#52a85f"
              />
              <path
                d="M1500.1,107.8V356L0,397.9V270.2c61,4.4,238.7,11.2,507.8-29.8,61-9.3,127.2-16,196.2-21.6h0C985.4,196,1310.9,192,1500.1,107.8Z"
                fill="#60c46f"
              />
            </svg>
            <div class="landscape-wrapper">
              <form
                action="https://formspree.io/shadeed9@gmail.com"
                method="POST"
                class="contact-form"
              >
                <div class="input-group name">
                  <label for class="visually-hidden">What’s your name, please?</label>
                  <input type="text" placeholder="What’s your name, please?" name="Name" required />
                </div>

                <div class="input-group email">
                  <label for class="visually-hidden">And your email address?</label>
                  <input type="email" placeholder="And your email address?" name="Email" required />
                </div>

                <div class="input-group textarea">
                  <label for class="visually-hidden">What’s on your mind?</label>
                  <textarea
                    id
                    cols="30"
                    rows="10"
                    placeholder="What’s on your mind?"
                    name="Message"
                    required
                  ></textarea>
                </div>

                <button class="send-email">
                  <svg width="20" height="20" viewBox="0 0 36 35">
                    <use xlink:href="#send" />
                  </svg>
                  <span>Send email</span>
                </button>
              </form>
            </div>
          </div>

          <div class="footer-row">
            <h3 class="c-section__title footer-copyrights">
              The online studio of Ahmad Shadeed.
              <span>© 2012–2020 Copyright Ahmad Shadeed. All rights reserved.</span>
            </h3>

            <div>
              <h3 class="social-title">Find me online</h3>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/ishadeed"
                    class="instagram"
                    target="_blank"
                  >Instagram</a>
                </li>
                <li>
                  <a href="https://twitter.com/shadeed9" class="twitter" target="_blank">Twitter</a>
                </li>
                <li>
                  <a href="https://www.behance.net/ishadeed" class="behance" target="_blank">Behance</a>
                </li>
                <!--<li><a href="https://dribbble.com/shadeed9" class="dribbble" target="_blank">Dribbble</a></li>-->
                <li>
                  <a href="https://codepen.io/shadeed/" class="linkedin" target="_blank">CodePen</a>
                </li>
                <li>
                  <a href="https://github.com/shadeed" class="instagram" target="_blank">Github</a>
                </li>
                <li>
                  <a href="https://ishadeed.com/feed.xml">RSS Feed</a>
                </li>
              </ul>
            </div>
          </div>

          <a href="#header" class="go-up" aria-label="Go up">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <use xlink:href="#arrow-up" />
            </svg>
          </a>
        </footer>
      </div>
    </section>
    <!-- <b-container> -->
    <!-- <h1>Mo Salam</h1>
    <h2>Software Engineer, Growth Hacker, Entrepreneur</h2>
    <h3 class="li"><i class="material-icons">mail</i> mo@mosalam.me</h3>
    <h3><i class="material-icons">call</i> +60 17 345 8113</h3>
    <h3><i class="material-icons">location_on</i> Kuala Lumpur, Malaysia</h3>-->
    LoQmaN Home 1
    <!-- </b-container> -->
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "../components/AppHeader.vue";
export default {
  name: "Home",
  components: {
    AppHeader
  }
};
</script>

<style lang="scss" scope>
h3:before {
  content: "";
  position: absolute;
  left: -20px;
  top: 13px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: blue;
}

h3::after {
  content: "";
  position: absolute;
  left: -80px;
  top: 17px;
  width: 60px;
  height: 1px;
  background-color: #eee;
}
</style>
