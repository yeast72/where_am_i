// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VModal from 'vue-js-modal'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VModal, { dialog: true })
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCNQ60BFvx4nY-EpQVOJ8w3q3v42XsKQe8',
    libraries: 'places'
  }
})
require('./css/hello.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
