/* 
    只出现一次的数字
*/

function singleNumber(nums: number[]): number {
    return nums.reduce((a, b) => a ^ b);
};

// console.log(singleNumber([2, 2, 1, 3, 3, 1]));

/* 
    删除有序数组中重复的数字，原地删除  时间复杂度O(n) 空间复杂度O(1)
*/

function removeDuplicates(nums: number[]): number {
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
}

console.log(removeDuplicates([1, 2, 2, 2]))


