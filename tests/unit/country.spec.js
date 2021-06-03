import { mount, createLocalVue } from '@vue/test-utils'
import country from '@/pages/country/_country/index.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Axios from 'axios'
import { state, mutations, actions } from '@/store'

Vue.use(Vuetify)
const vuetify = new Vuetify()
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)
localVue.use(Axios)

const routes = [{ path: '/country/:country' }]

const router = new VueRouter({
  routes,
})

const $axios = new Axios({
  baseURL: 'https://restcountries.eu/rest/v2',
  timeout: 15000,
})

const store = new Vuex.Store({
  state,
  mutations,
  actions,
})

describe('country', () => {
  const wrapper = mount(country, {
    localVue,
    vuetify,
    router,
    data() {
      return { countryName: 'Brazil' }
    },
    store,
    $axios,
  })
  // wrapper.vm.$route.params.country = 'brasil'

  // wrapper.vm.$router.push({ path: '/country/brasil' })

  // console.log('aquiiiiiiii', wrapper.vm.$route)

  test('Page country exists', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('Exibe info name', () => {
    const divName = wrapper.find('[attr-name]')
    expect(divName.exists()).toBe(true)
  })
})
