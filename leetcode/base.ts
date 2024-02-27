/* 
    只出现一次的数字
*/

function singleNumber(nums: number[]): number {
    return nums.reduce((a, b) => a ^ b);
};

console.log(singleNumber([2, 2, 1, 3, 3, 1]));
