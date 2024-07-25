import { beforeEach, describe, expect, it, type Mock, vitest } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import BirthdatePage from '../../src/views/birthdate-page.vue'

describe('Birthdate Page', () => {
    let wrapper: VueWrapper
    let mocks: { birthdate: Mock; birthdateDigit: Mock }
    beforeEach(() => {
        mocks = {
            birthdate: vitest.fn(),
            birthdateDigit: vitest.fn()
        }
        wrapper = shallowMount(BirthdatePage, { global: { provide: { ...mocks } } })
    })
    it('should display a date input', () => {
        expect(wrapper.find('input').attributes()).toEqual({ type: 'date' })
    })

    it('should display label', () => {
        expect(wrapper.find('span').text()).toBe('Date de naissance')
    })

    it('should call birthdate methods on input', async () => {
        await wrapper.find('input').setValue('1991-01-20')

        expect(mocks.birthdate).toHaveBeenCalledWith('1991-01-20')
        expect(mocks.birthdateDigit).toHaveBeenCalledWith('1991-01-20')
    })
})
