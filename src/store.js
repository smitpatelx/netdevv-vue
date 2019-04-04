import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        authanticated: false,
        baseUrl: 'http://localhost:8080/', // Your API domain
        providers: {
          firebase: {
            apiKey: "AIzaSyBqWTAazErxe_wegxPQIYK0BFEeIgBrT04",
            authDomain: "netdevv-99.firebaseapp.com",
            databaseURL: "https://netdevv-99.firebaseio.com",
            projectId: "netdevv-99",
            storageBucket: "netdevv-99.appspot.com",
            messagingSenderId: "938264040560"
          }
        },
        user:{}
    },
    getters:{
        isAuth: state => {
            return state.authanticated
        },
        get_fire: state => {
          return state.providers.firebase
        },
        get_user: state => {
          return state.user
        }
    },
    mutations: {
      create_user (state , user) {
        state.user = user;
      }
    },
    actions: {

    }
});

export default store;