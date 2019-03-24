import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import iView from "iview";
import "iview/dist/styles/iview.css";
import Colors from "./util/color";

Vue.config.productionTip = false;
Vue.use(iView, {
  transfer: true,
  size: "large"
});

Vue.prototype.Colors = Colors;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
