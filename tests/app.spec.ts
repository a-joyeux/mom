import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import App from '../src/app.vue'
import BirthdatePage from '../src/views/birthdate-page.vue'
import NamesPage from '../src/views/names-page.vue'

describe('App', () => {
    it('should display app logo', () => {
        const wrapper = shallowMount(App)

        expect(wrapper.find('img').attributes().src).toBe('/logo.svg')
    })
    it('should display birthdate page', () => {
        const wrapper = shallowMount(App)

        expect(wrapper.findComponent(BirthdatePage).exists()).toBe(true)
    })

    it('should display name page', () => {
        const wrapper = shallowMount(App)

        expect(wrapper.findComponent(NamesPage).exists()).toBe(true)
    })
})
