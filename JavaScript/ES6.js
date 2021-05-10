// Map 对象 储存键值对 键和值可以是任何类型
let myMap = new Map()

myMap.set(1, 'a')
myMap.set(2, 'b')
myMap.set(3, 'c')
myMap.set(4, 'd')

console.log(myMap.get(1)) // 获取键所对应的值


// Set 对象  储存任何对象的唯一值
let mySet = new Set()

mySet.add(1) // Set(1){1}
mySet.add(1) // Set(2){1} 唯一值
mySet.add(2) // Set(2){1,2}
mySet.add('text') // 值的多样性

let mySet1 = new Set(['a', 'b', 'c'])
let myArr = [...mySet]


console.log('展开符运算array=>', ...[1, 2, 3, 4, 5, 6, 7])
console.log('展开符运算object=>', ...new Set([1, 23, 4, 5]))

let a = {
    aa: 1
}
let b = a
b.aa = 2
console.log(a.aa)

let c = 2
let d = c
d = 3
console.log(c)