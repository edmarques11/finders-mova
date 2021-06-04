import { mount, createLocalVue } from '@vue/test-utils'
import Header from '@/components/Header.vue'
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

describe('Header', () => {
    const wrapper = mount(Header, {
        localVue,
        vuetify,
        router,
        store,
    })

    test('Element with logo MOVA and buttons back exists', () => {
        expect(wrapper.vm).toBeTruthy()
        expect(wrapper.find('div.logo-mova').exists()).toBe(true)
        expect(wrapper.find('div.buttons-back').exists()).toBe(true)
    })

    test('Test function goHome', async () => {
        const button = wrapper.findAll('[dataBack]')

        expect(button).toBeTruthy()

        wrapper.vm.$router.push('/about')

        await button.trigger('click')
    })
})
