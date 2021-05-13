// 斐波那契数列 1 1 2 3 5 8 13 21 ……  未使用优化
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

//  斐波那契数列 1 1 2 3 5 8 13 21 ……  使用优化
function al2(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) return ac2
    return (--n, ac2, ac1 + ac2)
}

// console.log(al1(8))


/* // ...展开符 接受不确定数量的参数
function add(...item) {
    let sum = 0;
    for (let i = 0; i < item.length; i++) {
        sum += item[i];
    }
    return sum;
}

console.log(add(1, 2, 3, 4, 5,)) */


//  计算阶乘算法 尾递归优化
function factories(num, total = 1) {
    if (num === 1) return total
    return factories(--num, num * total)
}

console.log(factories(5));