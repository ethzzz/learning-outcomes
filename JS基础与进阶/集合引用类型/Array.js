console.log(new Array()) // 创建数组
console.log(new Array(4)) //创建4个长度的空数组
console.log(new Array('a', 'b', 'c')) //创建包含字符串a,b,c的数组

// Array.from()
console.log(Array.from('abcde')) // 将字符串拆分为单字符数组
console.log(Array.from(new Map().set(1, 2).set(3, 4)))
console.log(Array.from(new Set().add(1).add(2).add(3).add(4))) // 将集合和映射转换为数组
const arr1 = [1, 2, 3, 4]
console.log(Array.from(arr1)) // 浅拷贝一个数组

// Array.of() 将一组参数转换为数组
console.log('Array.of():', Array.of(1, 2, 3, 4))

// 数组空位
const arr2 = [1, , , , 5]
for (let item of arr2) {
    console.log(item === undefined)
}

// 批量赋值 fill()
const arr3 = new Array(5) // []
console.log(arr3.fill(3)) //[3,3,3,3,3]
console.log(arr3.fill(0))
console.log(arr3.fill(4,2,4))

// toString toLocaleString valueOf
console.log(arr3.toString())
console.log(arr3.toLocaleString())
console.log(arr3.valueOf())

// every filter map some forEach
console.log('every:',arr3.every((item)=>item>0))
console.log('filter',arr3.filter(item=>item%2===0))
console.log('forEach',arr3.forEach(item=>item=item-3),arr3)
console.log('map',arr3.map(item=>item=item**2))
console.log('some',arr3.some(item=>item<2))