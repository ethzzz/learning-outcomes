// 斐波那契数列 1 1 2 3 5 8 13 21 ……  未使用优化
/* function al1(num) {
    let arr = []
    if (num > 0) {
        if (num == 1 || num == 2) {
            return 1
        } else {
            return al1(num - 2) + al1(num - 1)
        }
    }
} */

//  斐波那契数列 1 1 2 3 5 8 13 21 ……  使用优化
function al2(n, ac1 = 1, ac2 = 1) {
    if (n <= 2) return ac2
    return al2(--n, ac2, ac1 + ac2)
}

console.log(al2(1000))


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
/* function ois(fn, delay) {
    let timer = null // 初始化定时器
    return function () {
        if (timer) {  // 如果计时还未结束
            clearTimeout(timer) // 清除原有的计时器
        }
        timer = setTimeout(fn, delay) // 开启定时器 延时后执行fn函数
    }
} */


/**
 * @date 2021/5/14
 * @author: ethz
 * @Description: 节流函数 如果短时间函数触发多次，则在特定时间内只触发出一次
 */

/* function throttle(fn, delay) {
    let valid = true // 设置一个阈值 标志着当前是否存在定时器
    return function () {
        if (!timer) { // 如果定时器还在运行
            return false // 直接返回，不触发函数
        }
        valid = false // 将阈值设置为false 标志着当前存在定时器任务
        timer = setTimeout(() => {
            fn()
            valid = true // 将阈值设置为true 标志着定时器任务结束，函数触发一次
        }, delay)
    }
} */

// 递归循环
/* let countArr = []

function countdown(n) {
    if (n < 1) {
        return countArr
    } else {
        countArr.push(n)
        countdown(n - 1)
        return countArr
    }
}

console.log(countdown(1)) */

// 输入一个由数组组成的数字，将这个数字+1，返回加1后的结果
// 方法一
/* function add1(item) {
    if (item[item.length - 1] !== 9) {
        item[item.length - 1] = ++item[item.length - 1];
        return item
    } else {
        for (let i = item.length - 1; i >= 0; i--) {
            if (item[i] !== 9) {
                {
                    item[i] = ++item[i]
                    item.fill(0, i + 1)
                    return item
                }
            }
        }
        item[item.length] = 0;
        item.fill(0, 1)
        item[0] = 1;
        return item
    }
}

console.log(add1([1, 9, 9, 9, 9, 9, 9, 9, 9])) */

//  方法二
/* function add2(arr) {
    let str1 = arr.reduce((pre, cur, index) => {
        if (index === arr.length - 1) {
            return pre + 1 + cur;
        } else {
            return pre + cur * (10 ** (arr.length - index - 1))
        }
    }, 0) + "";
    let arr2 = new Array()
    for (let i = 0; i < str1.length; i++) {
        arr2.push(parseInt(str1.substr(i, 1)))
    }
    return arr2
}

console.log(add2(([9, 9, 9, 9]))) */

/** 2021/5/28
 * params: 日期格式化
 */
/* function formatDate(t, str) {
    let obj = {
        yyyy: t.getFullYear(),
        yy: ("" + t.getFullYear()).slice(-2),
        M: t.getMonth() + 1,
        MM: ("0" + (t.getMonth() + 1)).slice(-2),
        d: t.getDate(),
        dd: ("0" + t.getDate()).slice(-2),
        H: t.getHours(),
        HH: ("0" + t.getHours()).slice(-2),
        h: t.getHours() % 12,
        hh: ("0" + t.getHours() % 12).slice(-2),
        m: t.getMinutes(),
        mm: ("0" + t.getMinutes()).slice(-2),
        s: t.getSeconds(),
        ss: ("0" + t.getSeconds()).slice(-2),
        w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
    }
    return str.replace(/([a-z]+)/ig, function ($1) {
        return obj[$1]
    });
} */

/* function cssStyle2DomStyle(sName) {
    let arr1 = sName.startsWith('-') ? sName.split('-').slice(1, 2) : sName.split('-').slice(0, 1)
    let arr2 = sName.startsWith('-') ? sName.split('-').slice(2) : sName.split('-').slice(1)
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = arr2[i].slice(0, 1).toUpperCase() + arr2[i].slice(1)
    }
    return arr1.concat(arr2).join('')
}

console.log(cssStyle2DomStyle('-java-script')) */