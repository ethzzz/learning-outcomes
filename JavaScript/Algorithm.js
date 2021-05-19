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
    return al2(--n, ac2, ac1 + ac2)
}

console.log(al2(300))


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
/*
function factories(num, total = 1) {
  if (num === 1) return total
  return factories(--num, num * total)
}

console.log(factories(5));*/

/**
 * @date 2021/5/14
 * @author: ethz
 * @Description: 防抖函数 如果一段时间内函数不再执行，则执行一次函数
 * 如果这段时间内触发了第二次，则重置定时器，继续监听是否后续再有触发
 * 如果短时间内大量触发同一事件，只会执行一次函数。
 */
function ois(fn, delay) {
    let timer = null // 初始化定时器
    return function () {
        if (timer) {  // 如果计时还未结束
            clearTimeout(timer)
        } else {
            timer = setTimeout(fn, delay) // 开启定时器 延时后执行fn函数
        }
    }
}

/**
 * @date 2021/5/14
 * @author: ethz
 * @Description: 节流函数 如果短时间函数触发多次，则在特定时间内只触发出一次
 */

function throttle(fn, delay) {
    let flag = true;
    if (!flag) {
        return
    } else {
        setTimeout(() => {
            fn()
            flag = true
        }, delay)
    }
}

// 递归循环
let countArr = []

function countdown(n) {
    if (n < 1) {
        return countArr
    } else {
        countArr.push(n)
        countdown(n - 1)
        return countArr
    }
}

console.log(countdown(1))
