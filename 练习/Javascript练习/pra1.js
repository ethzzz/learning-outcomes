/* var a = 'ab23';
console.log(Number(a)); */

/* var a = '0x70';
console.log(parseInt(a, 16)); */

/* var a = 1233;
console.log(a.toString(16)); */

/* function demo() {
    console.log('demo');
}

var a = new demo(); */

/* var a = 154;
console.log(a.toString(2)) //转换为2进制 */

/* var a = 25;
console.log(~a); // ~按位非操作符 返回数值的反码*/

/* var a = 0;

function demo() {
    console.log([] && '1234132')
}
demo(); */

/* console.log(1 << 5); //左移运算符 */

/* var num = 25;
switch (true) {
    case num < 0:
        console.log('数字小于0');
        break;
    case num >= 0 && num < 25:
        console.log('数字大于0且小于25');
        break;
    case num >= 25:
        console.log('数字大于等于25');
        break;
    default:
        console.log('错误');

} */


/* function diff() {
    console.log(arguments[0] - arguments[1]);
    return arguments.length; //传入参数的长度
}
console.log(diff(222, 333, 444)); */

/* var num1 = 10;
var num2 = num1;
num1 = 20;
console.log(num2); //复制基本类型值 两者互不影响

var obj1 = new Object();
var obj2 = obj1;
obj1.name = 'jack';
console.log(obj2.name);
obj1.name = 'tank';
console.log(obj2.name); //复制引用类型值时 改变其中一个的值会影响另一个的值 */

/* for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
} //依次输出0,1,2,3,4, */

/* function displayInfo(args) {
    var output = '';
    if (typeof args.name == 'string') {
        output += "Name:" + args.name + "\n";
    }
    if (typeof args.age == 'number') {
        output += "Age:" + args.age + "\n";
    }
    console.log(output);
}

displayInfo({
    name: "Jack",
    age: 24
});

displayInfo({
    name: "Mike"
}) */

/* var arr = new Array();
var count = arr.push('a', 'b');
console.log(count);

var count = arr.pop();
console.log(count); */

/* var arr = [1, 56, 2, 35, 4];
console.log(arr.sort(function (item1, item2) {
    if (item1 < item2) {
        return -1
    } else if (item1 > item2) {
        return 1
    } else {
        return 0
    }
}));

console.log(arr.sort(function (item1, item2) {
    return item1 - item2
})); */

/* var arr = ['jack', 'tina', 'mike', 'luna', 'steve'];
console.log(arr.splice(2, 0, 'wuwei', 'shai'));
console.log(arr); */

/* var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var everyResult = arr.every(function (item, index, array) { //每一项都要满足条件才能返回true
    return (item > 2)
})
console.log(everyResult);

var someResult = arr.some(function (item, index, array) { //任意一项满足则返回true
    return (item > 2)
})
console.log(someResult);

var filtersResult = arr.filter(function (item, index, array) { //返回满足条件的每项组成的数组
    return (item > 2)
})
console.log(filtersResult);

var mapResult = arr.map(function (item, index, array) { //返回每一项执行对应传入函数后的结果
    return item * 2
})
console.log(mapResult);

var reduceResult = arr.reduce(function (prev, cur, index, array) { //返回的任何值都会作为第一个参数自动传给下一项
    return prev + cur;
})
console.log(reduceResult);

var reduceResult = arr.reduceRight(function (prev, cur, index, array) { //返回的任何值都会作为第一个参数自动传给下一项  反方向
    return prev + cur;
})
console.log(reduceResult); */

/* var start = new Date();


var stop = new Date();

var result = stop - start;
console.log(result); */

/* var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth()); // 0表示一月 11表示十二月
console.log(date.getDay()); // 星期几
console.log(date.getDate()); // 几号
console.log(date.getHours()); // 获得小时数
console.log(date.getMinutes()); // 获得分钟数
console.log(date.getSeconds()); //获得秒数
console.log(date.getTime()); // 返回当前时间与1970-1-1差值的好描述 */


/* function getTime() {
    var date1 = new Date();
    var year = date1.getFullYear();
    var month = date1.getMonth() + 1;
    var day = date1.getDay();
    var dates = date1.getDate();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var h = date1.getHours();
    h = h < 10 ? '0' + h : h;
    var m = date1.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = date1.getSeconds();
    s = s < 10 ? '0' + s : s;
    return '今天是' + year + '年' + month + '月' + dates + '日' + ' ' + arr[day] + ' ' + h + '时' + m + '分' +
        s + '秒';
}

setInterval(() => {
    console.log(getTime())
}, 1000); */

var str = '000-00-0000';
var pattern = /\d{3}-\d{2}-\d{4}/;

if (pattern.test(str)) {
    console.log('This pattern was matched!');
}