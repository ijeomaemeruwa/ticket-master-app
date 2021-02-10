import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})


export default new Vuex.Store({

//STATE
  state: {
    events: [],
    loading: false,
    tickets: []
  },


//GETTERS
getters: {
  events: state => state.events,
  loading: state => state.loading,
  tickets: state => state.tickets
},


//ACTIONS
actions: {
  clear ({ commit }) {
    commit('CLEAR ')
  },
  
  async fetchEvents({ commit }) {
    commit('SET_LOADING', true)
    try {
      const { data } = await axios.get(`https://eventsflw.herokuapp.com/v1/events`);
      const events = await Promise.all(
        data.data.events.map(async event => {
          const { data } = await axios.get(`https://eventsflw.herokuapp.com/v1/ticket-types/events/${event.id}`);
          event.tickets = data.data;
          return event;
        })
      )
    commit('SET_EVENTS', events)
    commit('SET_LOADING', false)
    } catch(error) {
      console.log(error)
    }
  },

//Cart Functionalities
  incrementCount ({ commit }, id) {
    commit('INCREMENT', id)
  },

  decrementCount ({ commit }, id) {
    commit('DECREMENT', id)
  },

  setTickets ({ commit }, tickets) {
  const newTickets = tickets.map(event => {
      event.count = 0
      return event
  })
  commit('SET_TICKETS', newTickets)
  },
},



//MUTATIONS
  mutations: {
    SET_EVENTS(state, events) {
      (state.events = events)
    },
    SET_LOADING(state, loading) {
      (state.loading = loading)
    },
    CLEAR(state) {
      (state.tickets = '')
    },

    INCREMENT(state, id) {
      const ticket = state.tickets.find(item => item.id === id)
      const ticketIndex = state.tickets.indexOf(ticket)
      ticket.count++
      if (ticket.count >= ticket.qty_available) {
        ticket.count = ticket.qty_available
      }
      state.tickets.splice(ticketIndex, 1, ticket)
    },

    DECREMENT(state, id) {
      const ticket = state.tickets.find(item => item.id === id)
      const ticketIndex = state.tickets.indexOf(ticket)
      ticket.count--
      if (ticket.count <= 0) {
        ticket.count = 0
      }
      state.tickets.splice(ticketIndex, 1, ticket)
    },

    SET_TICKETS (state, tickets) {
      state.tickets = [...tickets]
    }
  },

  plugins: [vuexLocal.plugin]
})

  
