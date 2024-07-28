import { beforeEach, describe, expect, it, type Mock, vitest } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import NamesPage from '../../src/views/names-page.vue'

describe('Names Page', () => {
    let wrapper: VueWrapper
    let mocks: { names: Mock }
    beforeEach(() => {
        mocks = {
            names: vitest.fn()
        }
        mocks.names.mockReturnValue({
            vowel: 12,
            consonant: 4,
            completeName: 16,
            reducedVowel: 3,
            reducedConsonant: 4,
            reducedCompleteName: 16,
            reducedDeltaVowel: 0,
            reducedDeltaConsonant: 0
        })
        wrapper = shallowMount(NamesPage, { global: { provide: { ...mocks } } })
    })
    it('should display a name input', () => {
        expect(wrapper.find('input').attributes().type).toEqual('text')
    })

    it('should display label', () => {
        expect(wrapper.find('span').text()).toBe("Prénoms et nom complets tels qu'indiqué sur l'acte de naissance:")
    })

    it('should call names methods on input', async () => {
        await wrapper.find('input').setValue('Jean Michel')

        expect(mocks.names).toHaveBeenCalledWith('Jean Michel')
    })

    it('should display results', async () => {
        await wrapper.find('input').setValue('TOTO')

        expect(wrapper.find('[data-testid="complete-name-before"]').text()).toBe('Nom entier avant réduction : 16')
        expect(wrapper.find('[data-testid="vowel-before"]').text()).toBe('Voyelles avant réduction : 12')
        expect(wrapper.find('[data-testid="consonant-before"]').text()).toBe('Consonnes avant réduction : 4')
        expect(wrapper.find('[data-testid="formula-vowel"]').text()).toBe('Calcul des voyelles : 3')
        expect(wrapper.find('[data-testid="formula-consonant"]').text()).toBe('Calcul de consonnes : 4')
        expect(wrapper.find('[data-testid="formula-complete-name"]').text()).toBe('Calcul du nom entier : 16')
        expect(wrapper.find('[data-testid="delta-vowels"]').text()).toBe('Calcul du delta des voyelles : 0')
        expect(wrapper.find('[data-testid="delta-consonants"]').text()).toBe('Calcul du delta des consonnes : 0')
    })
})
