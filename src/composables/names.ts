import { sumDigit } from './birthdate'

const alphabet = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 1,
    K: 11,
    L: 3,
    M: 4,
    N: 5,
    O: 6,
    P: 7,
    Q: 8,
    R: 9,
    S: 1,
    T: 2,
    U: 3,
    V: 22,
    W: 5,
    X: 6,
    Y: 7,
    Z: 8
} as const

type Vowel = 'A' | 'E' | 'I' | 'O' | 'U' | 'Y'
type Consonant = Exclude<keyof typeof alphabet, Vowel>

const isVowel = (letter: string): letter is Vowel => {
    return ['A', 'E', 'I', 'O', 'U', 'Y'].includes(letter)
}

const isConsonant = (letter: string): letter is Consonant => {
    return !isVowel(letter) && letter in alphabet
}

export const findFirstAndLastVowel = (name: string): { firstVowel: number; lastVowel: number } => {
    let firstVowel = 0
    let lastVowel = 0

    for (const letter of name.toUpperCase()) {
        if (isVowel(letter)) {
            if (!firstVowel) {
                firstVowel = alphabet[letter]
            }
            lastVowel = alphabet[letter]
        }
    }

    return { firstVowel, lastVowel }
}

export const names = (name: string) => {
    const splitName = [...name.toUpperCase()]
    let consonant = 0
    let vowel = 0

    splitName.forEach((letter) => {
        if (isVowel(letter)) {
            vowel += alphabet[letter]
        } else if (isConsonant(letter)) {
            consonant += alphabet[letter]
        }
    })
    const deltaVowel = findFirstAndLastVowel(name)
    return {
        vowel,
        consonant,
        completeName: vowel + consonant,
        reducedVowel: sumDigit(vowel),
        reducedConsonant: sumDigit(consonant),
        reducedCompleteName: sumDigit(vowel + consonant),
        reducedDeltaVowel: sumDigit(Math.abs(deltaVowel.firstVowel - deltaVowel.lastVowel))
    }
}
