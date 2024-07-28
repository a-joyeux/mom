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

const isVowel = (x: string): x is Vowel => /[aeiouyAEIOUY]/.test(x)

export const names = (name: string) => {
    return [...name].reduce((sum, letter) => {
        if (isVowel(letter)) {
            sum += alphabet[letter]
        }
        return sum
    }, 0)
}
