import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/bootstrap-vue";
import "bootstrap";
import "../src/assets/style/master.scss";
import "../src/assets/plugin/font-awesome/css/all.min.css";
import "../src/assets/plugin/et-line/style.css";
import "../src/assets/plugin/themify-icons/themify-icons.css";
import "../src/assets/plugin/magnific/magnific-popup.css";
// import "../src/assets/plugin/magnific/jquery.magnific-popup.min.js";
import "isotope-layout/dist/isotope.pkgd";
import "normalize.css";
import "./assets/style/css/theme-5.css";
import "../src/assets/js/custom.js";
import "../src/assets/js/mail_send.js";
import SocialSharing from "vue-social-sharing";
import axios from "axios";
import VueTyperPlugin from "vue-typer";
import VueScrollIndicator from "vue-scroll-indicator";
import BackToTop from "vue-backtotop";

Vue.config.productionTip = false;
Vue.use(SocialSharing);
axios.defaults.baseURL = "";
Vue.use(VueTyperPlugin);
Vue.use(VueScrollIndicator);
Vue.use(BackToTop);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
