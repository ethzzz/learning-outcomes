// min max
console.log(Math.min(...[1, 2, 3, 4, 5, 6]))
console.log(Math.max(...[1, 2, 3, 4, 5, 6]))

// 舍入方法
console.log(Math.ceil(24.1421))  // 向上取整
console.log(Math.floor(24.1421))  // 向下取整
console.log(Math.round(24.5555))  // 四舍五入

// random 随机
console.log(Math.random())  // 0~1 的浮点数 不包括1
console.log(Math.random() * 10) // 0~10 不包括10
console.log(Math.random() * 9 + 1) //1~10 不包括10
console.log(Math.floor(Math.random() * 10 + 1)) // 1~10的整数 包括 1和10
function selectFrom(minValue, maxValue) {
    let sub = maxValue - minValue + 1
    return Math.floor(Math.random() * sub + minValue)
}

console.log(selectFrom(1, 10)) // 函数选择范围



