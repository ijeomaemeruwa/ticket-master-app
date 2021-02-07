import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
Vue.use(Vuex);


//Create store
export default new Vuex.Store({
  state: {
    events: [],
    loading: false,
    tickets: []
    // pagination: []

    // perPage: 9,
    // currentPage: 1,
    // pagesToShow: 3,
  },


  getters: {
    events: state => state.events,
    loading: state => state.loading,
    tickets: state => state.tickets
  },

  actions: {
    //Event Functionalities
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
      commit('SET_LOADING', false)

      } catch(error) {
        console.log(error)
      }
    },

    registerForFree() {
      //post request
    },


    //Cart Functionalities
    increment ({ commit }, id) {
      commit('INCREMENT', id)
    },

    decrement ({ commit }, id) {
      commit('DECREMENT', id)
    },

    setTickets ({ commit }, tickets) {
      const newTickets = tickets.map(event => {
        event.count = 0
        return event
      })
      commit('SET_TICKETS', newTickets)
    }
  },


  mutations: {
    SET_EVENTS: (state, events) => (state.events = events),
    SET_LOADING: (state, loading) => (state.loading = loading),
    CLEAR: (state) => (state.tickets = ''),

    INCREMENT: (state, id) => {
      const ticket = state.tickets.find(ticket => ticket.id === id)
      const ticketIndex = state.tickets.indexOf(ticket)
      ticket.count++
      if (ticket.count >= ticket.qty_available) {
        ticket.count = ticket.qty_available
      }
      state.tickets.splice(ticketIndex, 1, ticket)
    },

    DECREMENT: (state, id) => {
      const ticket = state.tickets.find(ticket => ticket.id === id)
      const ticketIndex = state.tickets.indexOf(ticket)
      ticket.count--
      if (ticket.count <= 0) {
        ticket.count = 0
      }
      state.tickets.splice(ticketIndex, 1, ticket)
    },

    SET_TICKETS: (state, ticket) => (state.tickets = [...ticket])
  }
})

