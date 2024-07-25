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

    it('should display result on click', async () => {
        await wrapper.find('input').setValue('1991-01-20')

        expect(wrapper.find('[data-testid="first-method-result"]').text()).toBe('5')
    })

    it('should display result on click', async () => {
        await wrapper.find('input').setValue('1991-01-20')

        expect(wrapper.find('[data-testid="second-method-result"]').text()).toBe('5')
    })
})
