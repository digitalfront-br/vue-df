import Vue from 'vue'
import App from './App.vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import './registerServiceWorker'
import router from './services/router'
import store from './services/store'
import '@/assets/sass/main.sass'

UIkit.use(Icons)

Vue.config.productionTip = false

new Vue({
  router,
  UIkit,
  store,
  render: h => h(App)
}).$mount('#app')
