import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Portfolio from "./views/Portfolio.vue";
import AboutUs from "./views/AboutUs.vue";
import NOPAGE from "./views/NOPAGE.vue";
import Services from "./views/Services.vue";
import Customization from "./views/Customization.vue";
import Contact from "./views/Contact.vue";
import AuthCallback from "./views/AuthCallback.vue";
import Dashboard from "./views/Dashboard.vue";
import firebase from 'firebase';
import store from './store.js';
Vue.use(Router);

firebase.initializeApp(store.getters.get_fire);

// export default new Router({
let router = new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/customization",
      name: "Customization",
      components: {
        header: AppHeader,
        default: Customization,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "Contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    },
    {
      path: "/services",
      name: "Services",
      components: {
        header: AppHeader,
        default: Services,
        footer: AppFooter
      }
    },
    {
      path: "*",
      name: "NOPAGE",
      components: {
        header: AppHeader,
        default: NOPAGE,
        footer: AppFooter
      }
    },
    {
      path: "/aboutUs",
      name: "aboutUs",
      components: {
        header: AppHeader,
        default: AboutUs,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      },
      meta: {
        requiresGuest:true
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      },
      meta: {
        requiresGuest:true
      }
    },
    {
      path: "/portfolio",
      name: "portfolio",
      components: {
        header: AppHeader,
        default: Portfolio,
        footer: AppFooter
      }
    },
    {
      path: '/auth/callback',
      name: "AuthCallback",
      components: {
        header: AppHeader,
        default: AuthCallback,
        footer: AppFooter
      }
    },
    {
      path: '/dashboard',
      name: "Dashboard",
      components: {
        header: AppHeader,
        default: Dashboard,
        footer: AppFooter
      },
      meta: {
        requiresAuth:true
      }
    }
  ]
});

router.beforeEach( function(to, form, next) {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!firebase.auth().currentUser){
      next({
        path:'/login',
        query:{
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {    
    if(firebase.auth().currentUser){
      next({
        path:'/dashboard',
        query:{
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
