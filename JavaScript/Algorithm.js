// 斐波那契数列 1 1 2 3 5 8 13 21 ……
function al1(num) {
    let arr = []
    if (num > 0) {
        if (num == 1 || num == 2) {
            return 1
        } else {
            return al1(num - 2) + al1(num - 1)
        }
    }
}

console.log(al1(8))