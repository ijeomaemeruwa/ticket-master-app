import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
Vue.use(Vuex);


//Create store
export default new Vuex.Store({
  state: {
    events: [],
    // eventDetail: {},
    loading: false,
    tickets: []
    // pagination: []
  },


  getters: {
    events: state => state.events,
    loading: state => state.loading,
    // eventDetail: state => state.eventDetail,
    tickets: state => state.tickets
  },

  actions: {
    // setLoading ({ commit }, payload) {
    //   commit('SET_LOADING', payload)
    // },
    async fetchEvents ({ commit }) {
      commit('SET_LOADING', true)
      try {
        const { data } = await axios.get(`https://eventsflw.herokuapp.com/v1/events`)
        const events = await Promise.all(
          data.data.events.map(async event => {
            const { data } = await axios.get(`https://eventsflw.herokuapp.com/v1/ticket-types/events/${event.id}`)
            event.tickets = data.data
            return event
          })
        )
      commit('SET_EVENTS', events)
      // commit('SET_EVENT', data.data.eventDetail)
      commit('SET_LOADING', false)

      } catch(error) {
        console.log(error)
      }
    }

    // increment
    // decrement 
    // tickets
    // clear
  },


  mutations: {
    SET_EVENTS: (state, events) => (state.events = events),
    SET_EVENT: (state, event) =>   (state.eventDetail = event),
    SET_LOADING: (state, loading) => (state.loading = loading),
    // CLEAR: (state) => state.tickets = '' , window.href('/')

    // SET_TICKETS
    // SET_INCREMENT
    // SET_DECREMENT
  },

})

