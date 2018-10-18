// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

// この辺の情報はべた書きしても問題ないらしい
firebase.initializeApp({
  apiKey: 'AIzaSyDgjup9KUDZRiV_812juv0cflAr5afs_Vo',
  authDomain: 'test-5f423.firebaseapp.com',
  databaseURL: 'https://test-5f423.firebaseio.com',
  projectId: 'test-5f423',
  storageBucket: 'test-5f423.appspot.com',
  messagingSenderId: '125983510481'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
