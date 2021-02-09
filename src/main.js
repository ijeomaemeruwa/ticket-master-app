import Vue from 'vue';
import App from './App.vue';
import {router} from './router';
import store from './store';
import vmodal from 'vue-js-modal'
Vue.use(vmodal)



Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
