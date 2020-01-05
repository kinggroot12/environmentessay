import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faQuestionCircle, faMapMarkerAlt, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faQuestionCircle, faMapMarkerAlt, faBullhorn)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyARbPHuK66PVLd4DBdd6NbyDk8VsUsD4_E",
    libraries: "places"
  }
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
