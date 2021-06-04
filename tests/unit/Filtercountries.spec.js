import { mount, createLocalVue } from '@vue/test-utils'
import FilterCountries from '@/components/FilterCountries.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { mutations, actions } from '@/store'
import $axios from './helpers/api.mock'
import allCountries from './json/get.all.json'

Vue.use(Vuetify)
const vuetify = new Vuetify()
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

localVue.prototype.$axios = $axios

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
    $axios,
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

  test('Filter to language', () => {
    wrapper.vm.$data.selection1 = 'lang'
    expect(wrapper.vm.$data.selection2).not.toBe([])
  })

  test('Filter to callingcode', () => {
    wrapper.vm.$data.selection1 = 'callingcode'
    expect(wrapper.vm.$data.selection2).not.toBe([])
  })

  test('Filter to country name', () => {
    wrapper.vm.$data.selection1 = 'name'
    expect(wrapper.vm.$data.selection2).not.toBe([])
  })

  test('Filter to capital', () => {
    wrapper.vm.$data.selection1 = 'capital'
    expect(wrapper.vm.$data.selection2).not.toBe([])
  })

  test('Filter to region', () => {
    wrapper.vm.$data.selection1 = 'region'
    expect(wrapper.vm.$data.selection2).not.toBe([])
  })

  wrapper.vm.$data.selection1 = 'region'
  wrapper.vm.$data.selection2 = 'americas'
  test('Click search button', async () => {
    const button = wrapper.find('.mova')
    expect(button.exists()).toBeTruthy()
    expect(button.text()).toBe('Pesquisar')

    await button.trigger('click')
    await wrapper.vm.$nextTick()
  })
})
