import { mount, createLocalVue } from '@vue/test-utils'
import Pagination from '@/components/Pagination.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { state, mutations, actions } from '@/store'
import countries from './json/get.name.brazil.json'

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

describe('Pagination', () => {
    const wrapper = mount(Pagination, {
        localVue,
        vuetify,
        router,
        store,
        data() {
            return {
                page: 1,
                length: 0,
            }
        },
    })

    test('Pagination is mounted', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    wrapper.vm.$data.page = 2
    test('Changed pagination', () => {
        expect(wrapper.vm.$data.page).toEqual(2)
    })

    wrapper.vm.$store.state.countries = countries
    test('Changed countries', () => {
        expect(wrapper.vm.$data.length).toBe(1)
    })
})
