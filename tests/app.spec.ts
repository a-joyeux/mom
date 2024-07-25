import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import App from '../src/app.vue'
import BirthdatePage from '../src/views/birthdate-page.vue'

describe('App', () => {
    it('should display birthdate page', () => {
        const wrapper = shallowMount(App)

        expect(wrapper.findComponent(BirthdatePage).exists()).toBe(true)
    })
})
