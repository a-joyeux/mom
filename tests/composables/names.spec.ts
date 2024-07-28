import { describe, expect, it } from 'vitest'
import { names } from '../../src/composables/names'

describe('Names', () => {
    it('should give correct value for TOTO', () => {
        expect(names('TOTO')).toEqual({
            vowel: 12,
            consonant: 4,
            completeName: 16,
            reducedVowel: 3,
            reducedConsonant: 4,
            reducedCompleteName: 16
        })
    })

    it('should give correct value for one letter with special number', () => {
        expect(names('K')).toEqual({
            vowel: 0,
            consonant: 11,
            completeName: 11,
            reducedVowel: 0,
            reducedConsonant: 11,
            reducedCompleteName: 11
        })
    })

    it('should give correct value for special number', () => {
        expect(names('IRB')).toEqual({
            vowel: 9,
            consonant: 11,
            completeName: 20,
            reducedVowel: 9,
            reducedConsonant: 11,
            reducedCompleteName: 2
        })
    })
})
