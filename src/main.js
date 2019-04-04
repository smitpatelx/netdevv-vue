import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import _ from "nouislider";
import Argon from '@/plugins/argon-kit';
import { register } from 'register-service-worker';
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from './store';
import Vuelidate from 'vuelidate';
import firebase from 'firebase';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
Vue.use(Vuelidate);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(Argon);

window.axios = require('axios');

let vm;
firebase.auth().onAuthStateChanged(
  user => {
    vm = new Vue({
      el:"#app",
      data: function () {
        return {
          
        }
      },
      mounted: function(){
        
      },
      router,
      store,
      render: h => h(App)
    });
  }
);


export default vm;