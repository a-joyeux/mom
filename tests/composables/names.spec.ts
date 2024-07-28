import { describe, expect, it } from 'vitest'
import { names } from '../../src/composables/names'

describe('Names', () => {
    it('should give value for vowel', () => {
        expect(names('TOTO')).toEqual({ vowel: 12, consonant: 4, completeName: 16 })
    })
})
