/* const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
    "use strict";
    // 在这行以下修改代码
    let g = /^[1-9]\d*$/
    const squaredIntegers = arr.filter(i => g.test(i)).map((i) => i = i ** 2);
    // 在这行以上修改代码
    return squaredIntegers;
};
// 测试你的代码
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); */


// function makeClass() {
//     "use strict";
//     /* 请把你的代码写在这条注释以下 */
//     class Thermostat {
//         constructor(temperature) {
//             this.temperature = temperature
//         }
//         get write() {
//             return this.temperature
//         }
//         set write(F) {
//             this.temperature = 5 / 9 * (F - 32)
//         }
//     }
//     /* 请把你的代码写在这条注释以上 */
//     return Thermostat;
// }
// const Thermostat = makeClass();
// const thermos = new Thermostat(76); // 使用华氏温度来初始化
// let temp = thermos.temperature; // 摄氏温度24.44度
// console.log(thermos.tem);
// thermos.temperature = 26;
// temp = thermos.temperature; // 摄氏温度26度
// console.log(temp);

/* var x = "misisiisisisisiii"
var regx = /\w+/gi
console.log(x.match(regx)); */

/* function stringReverse(str) {
    return str.split('').reverse().join('');
}

console.log(stringReverse("hello")); */

// function factorialize(num) {
//     var Reg = /[0-9]*/g
//     if (num >= 0 && Reg.test(num)) {
//         if (num === 0) {
//             return 1;
//         }
//         for (let i = num - 1; i > 0; i--) {
//             num *= i
//         }
//     }
//     return num;
// }

// console.log(factorialize(0));


/* function findLongestWordLength(str) {
    const arr = str.split(" ");
    let maxL = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i].length > maxL) {
            maxL = arr[i].length;
        }
    };
    return maxL;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); */



/* var summation = function (num) {
    // Code here
    let sum = 1;
    for (let i = 2; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(summation(8)); */


// function disemvowel(str) {
//     /* let exp = /[aoeiu]/i
//     let arr = str.split('');
//     for (let i = 0; i < arr.length; i++) {
//         if (exp.test(arr[i])) {
//             arr.splice(i, 1);
//         }
//     }
//     str = arr.join('') */
//     let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//     for (i in arr) {
//         let reg = new RegExp(arr[i], "g");
//         str = str.replace(reg, '')
//     }
//     // str = str.replace(/i/g, '')
//     // console.log(arr);
//     return str;
// }

// console.log(disemvowel('This website is for losers LOL!'))



/* function digital_root(n) {
    if (n == 0) {
        return 0;
    } else {
        let i = n % 9;
        return i == 0 ? 9 : i
    }
}

console.log(digital_root(123123123)); */



// 整数翻转
/* function reverseInt(x) {
    let a = 2147483648;
    if (x == -2147483648) {
        return 0;
    }
}

console.log(reverseInt(-2147483648)); */

function demo(s1, s2) {
    str1 = s1.split(',');
    str2 = s2.split(',');
    console.log(str1)
    console.log(str2)
}

demo('64:2,128:1,32:4,1:128', '50,36,64,128,127')