import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  test('Element with logo MOVA and buttons back exists', () => {
    const wrapper = mount(Header)
    expect(wrapper.find('div.logo-mova').exists()).toBe(true)
    expect(wrapper.find('div.buttons-back').exists()).toBe(true)
  })
})
