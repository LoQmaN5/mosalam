import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "../src/assets/style/master.scss";
import "../src/assets/plugin/font-awesome/css/all.min.css";
import "../src/assets/plugin/et-line/style.css";
import "../src/assets/plugin/themify-icons/themify-icons.css";
import "../src/assets/plugin/magnific/magnific-popup.css";
// import "../src/assets/plugin/magnific/jquery.magnific-popup.min.js";
import "isotope-layout/dist/isotope.pkgd";
import "normalize.css";
import "../src/assets/js/custom.js";
import "../src/assets/js/mail_send.js";
import VueTyperPlugin from "vue-typer";
import VueCarousel from "vue-carousel";
import VueScrollIndicator from "vue-scroll-indicator";
import SocialSharing from "vue-social-sharing";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import BackToTop from "vue-backtotop";

axios.defaults.baseURL = "";

Vue.use(VueCarousel);
Vue.use(VueTyperPlugin);
Vue.use(VueScrollIndicator);
Vue.use(SocialSharing);
library.add(faUserSecret);
Vue.use(BackToTop);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
