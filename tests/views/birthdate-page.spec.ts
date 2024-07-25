import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import BirthdatePage from '../../src/views/birthdate-page.vue'

describe('Birthdate Page', () => {
    it('should work', () => {
        const wrapper = shallowMount(BirthdatePage)

        expect(wrapper.find('input').attributes()).toEqual({ type: 'date' })
    })
})
