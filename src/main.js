import Vue from "vue";
import TestComponent from "./TestComponent";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { TestComponent },
  template: "<TestComponent><div>Hello</div><div>World</div></TestComponent>"
});
