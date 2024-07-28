const specialNumbers = new Set([11, 13, 14, 16, 19, 22, 33])
const digitalRoot = (number: number) => ((number - 1) % 9) + 1
export const sumDigit = (number: number) => {
    while (number > 9 && !specialNumbers.has(number)) {
        number = number
            .toString()
            .split('')
            .reduce((acc: number, digit: string) => acc + Number(digit), 0)
    }
    return number
}
export const birthdate = (date: string) => {
    const dateSum = date.split('-').reduce((acc, part) => acc + Number(part), 0)
    return specialNumbers.has(dateSum) ? dateSum : sumDigit(dateSum)
}
export const birthdateDigit = (date: string) => {
    const sum = date.split('-').reduce((acc, part) => acc + Number(digitalRoot(Number(part))), 0)
    return specialNumbers.has(sum) ? sum : sumDigit(sum)
}
