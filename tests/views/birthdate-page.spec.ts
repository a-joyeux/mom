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
        expect(wrapper.find('input').attributes().type).toEqual('date')
    })

    it('should display label', () => {
        expect(wrapper.find('span').text()).toBe('Date de naissance')
    })

    it('should call birthdate methods on input', async () => {
        await wrapper.find('input').setValue('1991-01-20')

        expect(mocks.birthdate).toHaveBeenCalledWith('1991-01-20')
        expect(mocks.birthdateDigit).toHaveBeenCalledWith('1991-01-20')
    })

    it('should display results', async () => {
        mocks.birthdate.mockReturnValue('5')
        mocks.birthdateDigit.mockReturnValue('5')
        await wrapper.find('input').setValue('1991-01-20')

        expect(wrapper.find('[data-testid="first-method-result"]').text()).toBe('Première méthode : 5')
        expect(wrapper.find('[data-testid="second-method-result"]').text()).toBe('Seconde méthode : 5')
    })
})
