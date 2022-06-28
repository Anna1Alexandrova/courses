// Создать функцию для генерации последовательность 1 3 5 7, сигнатура (n: Number) => string
function odd(n: Number): string {
    let str = ""
    let i = 1
    while (i !== n) {
        if (i % 2 === 1) {
            str += i + " "
        }
        i++
    }
    return str
}