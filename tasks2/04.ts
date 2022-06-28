// вывести матрицу
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let line of matrix) {
    let rst = ''
    for (let i of line) {
        rst += i + ' '
    }
    console.log(rst)
}
