/* 
    输入字符串s，输出s中包含所有整数的最小和。

    说明：

    字符串s，只包含 a-z A-Z ±

    合法的整数包括

    1）正整数：一个或者多个0-9组成，如 0 2 3 002 102

    2）负整数：负号 – 开头，数字部分由一个或者多个0-9组成，如 -0 -012 -23 -00023
*/

function getSumNum(str: string): number {
    let numArr: number[] = []
    let flag = false
    let start = 0

    const checkNaN = (str: string) => isNaN(parseInt(str))

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            if (!flag) {
                if (!checkNaN(str[i + 1])) {
                    flag = true
                    start = i + 1
                    continue
                }
            } else {
                continue
            }
        }
        if (flag) {
            if (!checkNaN(str[i + 1])) {
                continue
            } else {
                numArr.push(0 - parseInt(str.slice(start, i + 1)))
                flag = false
                start = i + 1
                continue
            }
        }
        if (str[i] >= '0' && str[i] <= '9') {
            numArr.push(parseInt(str[i]))
        }

    }
    return numArr.reduce((pre, next) => {
        pre += next
        return pre
    }, 0)
}

console.log(getSumNum('bb12-34aa'))