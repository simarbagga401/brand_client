import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes.js'
// IMPORTING ROUTES
import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDRKHq-w4HxNBIrjpxNXQI9rEnSG4MjgOg",
    authDomain: "brand-401.firebaseapp.com",
    databaseURL: "https://brand-401.firebaseio.com",
    projectId: "brand-401",
    storageBucket: "brand-401.appspot.com",
    messagingSenderId: "612565223897",
    appId: "1:612565223897:web:ecf1b8273a287d3dd371c8",
    measurementId: "G-Z9PW6W4Z61"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();
  db.settings({
      timestampsInSnapshots : true
  });
  window.db = db;

const router = new VueRouter({
    routes,
    mode:"history",
    base: process.env.BASE_URL
})
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  router,	
  render: h => h(App),
}).$mount('#app')
