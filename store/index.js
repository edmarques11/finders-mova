export const state = () => ({
  countries: [],
  allCountries: [],
  filter: {
    typeFilter: '',
    endpoint: '',
  },
  pagination: {
    currentPage: 1,
  },
})

export const mutations = {
  change_countries(state, payload) {
    state.countries = payload
  },

  change_allCountries(state, payload) {
    state.allCountries = payload
  },

  change_filter(state, payload) {
    state.filter = payload
  },

  change_pagination(state, payload) {
    state.pagination = payload
  },
}

export const actions = {
  async getAllCountries(context) {
    try {
      const response = await this.$axios.$get('/all')
      context.commit('change_countries', response)
      context.commit('change_allCountries', response)
    } catch (error) {
      throw new Error(error)
    }
  },
}
