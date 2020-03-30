import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVueIcons } from "bootstrap-vue";
import { CardPlugin } from "bootstrap-vue";
import { VBHoverPlugin } from "bootstrap-vue";
Vue.use(VBHoverPlugin);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(CardPlugin);
