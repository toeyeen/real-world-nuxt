import EventService from '../services/EventService'

export const state = () => ({
  events: [],
  event: {},
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
}

export const actions = {
  async fetchEvents({ commit }) {
    try {
      const res = await EventService.getEvents()
      commit('SET_EVENTS', res.data)
    } catch (error) {
      console.log(error.message)
    }
  },
  async fetchEvent({ commit }, id) {
    try {
      const res = await EventService.getEvent(id)
      commit('SET_EVENT', res.data)
    } catch (error) {
      console.log(error.message)
    }
  },
}

// export const actions = {
//   fetchEvents({ commit }) {
//     return EventService.getEvents().then((response) => {
//       commit('SET_EVENTS', response.data)
//     })
//   },
// }

export const getters = {
  getEvents(state) {
    return state.events
  },
  getEvent(state) {
    return state.event
  },
}
