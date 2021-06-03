import { mount, createLocalVue } from '@vue/test-utils'
import index from '@/pages/index.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { state, mutations, actions } from '@/store'

Vue.use(Vuetify)
const vuetify = new Vuetify()
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const routes = [{ path: '/' }]

const router = new VueRouter({
  routes,
})

const store = new Vuex.Store({
  state,
  mutations,
  actions,
})

describe('index', () => {
  const wrapper = mount(index, {
    localVue,
    vuetify,
    router,
    store,
  })

  test('Page index exists', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
