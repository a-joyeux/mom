import { describe, expect, it } from 'vitest'
import { names } from '../../src/composables/names'

describe('Names', () => {
    it('should give value for vowel', () => {
        expect(names('TOTO')).toBe(12)
    })
})
