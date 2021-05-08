// for ... of
/*const str = ['abcde', 'ff', ['a', 'b']]
for (const item of str) {
    console.log(item)
}*/

// console.log(...str)

const str = 'abcdefgh'

//截取字符串
console.log(str.slice(2, 4)) //cd
console.log(str.slice(-1)) //h
console.log(str.substr(2, 4)) //cdef
console.log(str.substr(-1)) //h

//判断是否包含指定字符串
console.log(str.startsWith('abc')) // true
console.log(str.endsWith('fgh')) // true
console.log(str.includes('abc')) // true

// 展开运算符
console.log(...str) // a b c d e f g h

// 分割字符串成数组
console.log(str.split()) // [ 'abcdefgh' ]
console.log(str.split('')) // ['a','b','c','d','e','f','g','h']
console.log(str.split('',2)) // ['a','b']