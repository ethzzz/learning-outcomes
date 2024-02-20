// Map 对象 储存键值对 键和值可以是任何类型
/*let myMap = new Map()

myMap.set(1, 'a')
myMap.set(2, 'b')
myMap.set(3, 'c')
myMap.set(4, 'd')

console.log(myMap.get(1)) // 获取键所对应的值*/


// Set 对象  储存任何对象的唯一值
/*let mySet = new Set()

mySet.add(1) // Set(1){1}
mySet.add(1) // Set(2){1} 唯一值
mySet.add(2) // Set(2){1,2}
mySet.add('text') // 值的多样性

let mySet1 = new Set(['a', 'b', 'c'])
let myArr = [...mySet]


console.log('展开符运算array=>', ...[1, 2, 3, 4, 5, 6, 7])
console.log('展开符运算object=>', ...new Set([1, 23, 4, 5]))*/

/*let a = {
  aa: 1
}
let b = a
b.aa = 2
console.log(a.aa)

let c = 2
let d = c
d = 3
console.log(c)*/

/**
 * @date 2021/5/14
 * @author: ethz
 * @Description: 闭包
 */
/* function fn(f) {
  let run
  return function (x) {
    if (!run) {
      run = true //执行一次过后将阈值设置为true 不再执行这个函数体
      f.call(this, x) // 给f函数传递参数
    }
  }
}

const fn1 = fn((x) => {
  console.log(x)
})


fn1(1) // 1
fn1(2) // 不执行
fn1(3) // 不执行

const add = function (){
  let a = 0
  return function (){}
  this.a
}

add() */

/**
 * @author ethz
 * @description Proxy Reflect
 * @date 2024/2/20
 */
/* const parent = {
  name: '19Qingfeng',
  get value() {
    return this.name;
  },
};

const handler = {
  get(target, key, receiver) {
    // return Reflect.get(target, key);
    return Reflect.get(target, key, receiver);
    // 这里相当于 return target[key]
  },
};

const proxy = new Proxy(parent, handler);

const obj = {
  name: 'wang.haoyu',
};

// 设置obj继承与parent的代理对象proxy
Object.setPrototypeOf(obj, proxy);

// log: false
console.log(obj.value); */
