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
import "normalize.css";
import "../src/assets/js/custom.js";
import "../src/assets/js/mail_send.js";
import VueTyperPlugin from "vue-typer";

Vue.use(VueTyperPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
