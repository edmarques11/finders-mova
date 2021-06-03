import { mount, createLocalVue } from '@vue/test-utils'
import FilterCountries from '@/components/FilterCountries.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { mutations, actions } from '@/store'
// import $axios from './helpers/api.mock'
import allCountries from './json/get.all.json'

Vue.use(Vuetify)
const vuetify = new Vuetify()
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const routes = [{ path: '/' }]

const router = new VueRouter({
  routes,
})

const state = () => ({
  countries: [],
  allCountries,
  filter: {
    typeFilter: '',
    endpoint: '',
  },
  pagination: {
    currentPage: 1,
  },
})

const store = new Vuex.Store({
  state,
  mutations,
  actions,
})

describe('FilterCountries', () => {
  const wrapper = mount(FilterCountries, {
    localVue,
    vuetify,
    router,
    store,
    data() {
      return {
        selection1: this.$store.state.filter.typeFilter,
        items1: [
          { text: 'Região', value: 'region' },
          { text: 'Capital', value: 'capital' },
          { text: 'Língua', value: 'lang' },
          { text: 'País', value: 'name' },
          { text: 'Código de Ligação', value: 'callingcode' },
        ],

        selection2: this.$store.state.filter.endpoint,
        items2: [this.$store.state.filter.endpoint],
      }
    },
  })

  test('FilterCountries exists', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('qualquer coisa', () => {
    wrapper.vm.$data.selection1 = 'lang'
  })
})
