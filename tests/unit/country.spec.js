import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import country from '@/pages/country/_country/index.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { state, mutations, actions } from '@/store'
import $axios from './helpers/api.mock'

Vue.use(Vuetify)
const vuetify = new Vuetify()
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const routes = [{ path: '/country/:country' }]

const router = new VueRouter({
    routes,
})

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

    test('Exibe infos about country', () => {
        const divName = wrapper.find('[attr-name]')
        const divCapital = wrapper.find('[attr-capital]')
        const divSubRegion = wrapper.find('[attr-subregion]')
        const divPopulation = wrapper.find('[attr-population]')
        const divLang = wrapper.find('[attr-lang]')

        expect(divName.exists()).toBeTruthy()
        expect(divName.text()).toBe('Nome: Brazil')

        expect(divCapital.exists()).toBeTruthy()
        expect(divCapital.text()).toBe('Capital: Brasília')

        expect(divSubRegion.exists()).toBeTruthy()
        expect(divSubRegion.text()).toBe('Sub-região: South America')

        expect(divPopulation.exists()).toBeTruthy()
        expect(divPopulation.text()).toBe('População: 206135893')

        expect(divLang.exists()).toBeTruthy()
        expect(divLang.text()).toBe('Linguas: Português')
    })

    test('Go home with filter region', async () => {
        const divRegion = wrapper.find('[attr-region]')
        expect(divRegion.exists()).toBeTruthy()

        await divRegion.trigger('click')
        expect(wrapper.vm.$route.path).toBe('/')
    })
})
