import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './scss/main.scss';
import 'normalize.css';

import "./filters"; //Global Filters

Vue.config.productionTip = false;



new Vue({
    router,
    store,
    render: h => h(App)
    // render:function (createElement){
    //   return createElement(App)
    // }
    // el:'#app'
}).$mount("#app");
