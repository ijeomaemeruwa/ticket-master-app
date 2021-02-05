import Vuex from 'vuex';
import Vue from 'vue';
import events from './modules/events';
import cart from './modules/cart';
Vue.use(Vuex);


//Create store
const store = new Vuex.Store({
  modules: {
    events,
    cart
  }
})


export default store;