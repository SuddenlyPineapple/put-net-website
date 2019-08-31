import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VideoBg from "vue-videobg";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

Vue.component("video-bg", VideoBg);

Vue.config.productionTip = false;

new Vue({
  router,
  components: { VideoBg },
  vuetify,
  render: h => h(App)
}).$mount("#app");
