// 计算1+2+3+4………
// var sum = 0

/* function add(params) {
    if (params > 0) {
        sum += params
        return add(params - 1)
    }
    return sum
}

console.log(add(6)); */

//不指定参数数量
/* function add(...params) {
    sum = 0
    params.forEach(item => sum += item)
    return sum
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8)); */

// 斐波那契数列  1 1 2 3 5 8 13 21…… nextValue = preValue + currentValue



// 数组去重
/* let arr1 = [1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 7, 8, 9, 10] // 需要去重的数组
let arr2 = [] // 去重后的数组

arr1.forEach(item => {
    if (arr2.indexOf(item) === -1) {
        arr2.push(item)
    } else {
        return
    }
})

console.log(arr2);

let time = new Date().getTime()
let time1 = new Date(time)
console.log(time); */


/* var a = 20

function bbb() {
    this.a = 10
    console.log(this == window)
    var a = 30
}
console.log(a);
bbb()
console.log(a); */

/* (function () {
    console.log(this)
})() */

const obj = {
    a: 1,
    b: {
        c: 2
    }
}

for (let v of obj) {
    console.log(obj)
}