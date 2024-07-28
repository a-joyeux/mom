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

const isVowel = (letter: string): x is Vowel => {
    return ['A', 'E', 'I', 'O', 'U', 'Y'].includes(letter)
}

const isConsonant = (letter: string): x is Consonant => {
    return !isVowel(x) && letter in alphabet
}

export const names = (name: string) => {
    let consonant = 0
    let vowel = 0

    ;[...name.toUpperCase()].forEach((letter) => {
        if (isVowel(letter)) {
            vowel += alphabet[letter as Vowel]
        } else if (isConsonant(letter)) {
            consonant += alphabet[letter as Consonant]
        }
    })

    return { vowel, consonant }
}
