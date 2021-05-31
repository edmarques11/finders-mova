export const state = () => ({
  countries: [],
})

export const mutations = {
  change_countries(state, payload) {
    state.countries = payload
  },
}

export const actions = {
  async getAllCountries(context) {
    try {
      const response = await this.$axios.$get('/all')
      context.commit('change_countries', response)
    } catch (error) {
      throw new Error(error)
    }
  },
}
