import { describe, expect, it } from 'vitest'
import { birthdate, birthdateDigit } from '../../src/composables/birthdate'

describe('Birthdate', () => {
    describe('Sum each individual digit', () => {
        it('should be 5', () => {
            expect(birthdateDigit('1991-01-20')).toBe(5)
        })

        it('should be 5', () => {
            expect(birthdateDigit('0001-01-01')).toBe(3)
        })
    })

    describe('Sum grouped by date part', () => {
        it('should be 5', () => {
            expect(birthdate('1991-01-20')).toBe(5)
        })
        it('should be 3', () => {
            expect(birthdate('18-07-1994')).toBe(3)
        })
        it('should be 11', () => {
            expect(birthdate('2000-10-08')).toBe(11)
        })

        it('should be 14', () => {
            expect(birthdate('0010-04-00')).toBe(14)
        })
    })
})
