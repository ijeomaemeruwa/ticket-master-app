import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
// import axios from 'axios'

// API
// https://eventsflw.herokuapp.com/v1/events
// https://eventsflw.herokuapp.com/v1/events/1/register
// https://eventsflw.herokuapp.com/v1/ticket-types/events/1

Vue.use(Vuex);


const events = {
  state: {
    events: [],
    event: {},
    loading: false
    // pagination: []
  },


  getters: {
    events: state => state.events,
    event: state => state.event,
    loading: state => state.loading
  },

  actions: {
    async fetchEvents({ commit }) {
        commit('SET_LOADING', true) 
       try {
        const response = await axios.get('https://eventsflw.herokuapp.com/v1/events')
        const eventsdata = response.data.data.events

        const events = await Promise.all(
        eventsdata.map(async event => {
        const data = await axios.get(`https://eventsflw.herokuapp.com/v1/ticket-types/events/${event.id}`)
        event.tickets = data.data
        return event
        })
        )
        commit('SET_EVENTS', events)
        commit('SET_EVENT', response.data.event)
        commit('SET_LOADING', false)

       } catch(error) {
         console.log(error)
       }
    }
  },

  mutations: {
    SET_EVENTS: (state, events) => (state.events = events),
    SET_EVENT: (state, event) => (state.event = event),
    SET_LOADING: (state, loading) => (state.loading = loading)
  },


 
    
}

export default events;