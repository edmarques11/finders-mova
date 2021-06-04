import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import country from '@/pages/country/_country/index.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { state, mutations, actions } from '@/store'
import $axios from '../../helpers/api.mock'

Vue.use(Vuetify)
const vuetify = new Vuetify()
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const routes = [{ path: '/country/:country' }]

const router = new VueRouter({
    routes,
})
$axios.jsonOverwritesPath = '../../json/overwrites/country/error'
localVue.prototype.$axios = $axios

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
        stubs: {
            NuxtLink: RouterLinkStub,
        },
    })

    test('Page country exists', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('Errors at requests', () => {
        wrapper.vm.filterBorders()
    })
})
