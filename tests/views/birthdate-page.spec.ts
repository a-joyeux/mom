import { beforeEach, describe, expect, it } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import BirthdatePage from '../../src/views/birthdate-page.vue'

describe('Birthdate Page', () => {
    let wrapper: VueWrapper
    beforeEach(() => {
        wrapper = shallowMount(BirthdatePage)
    })
    it('should display a date input', () => {
        expect(wrapper.find('input').attributes()).toEqual({ type: 'date' })
    })

    it('should display label', () => {
        expect(wrapper.find('span').text()).toBe('Date de naissance')
    })
})
