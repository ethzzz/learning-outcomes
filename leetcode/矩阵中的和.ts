/*
    给你一个下标从 0 开始的二维整数数组 nums 。一开始你的分数为 0 。你需要执行以下操作直到矩阵变为空：
    1. 矩阵中每一行选取最大的一个数，并删除它。如果一行中有多个最大的数，选择任意一个并删除。
    2. 在步骤 1 删除的所有数字中找到最大的一个数字，将它添加到你的 分数 中。
    请你返回最后的 分数 。
*/

function matrixSum(numbers: number[][]): number {
    let l1: number = numbers.length  // 矩阵行数
    let l2: number = numbers[0].length //  矩阵列数
    let score: number = 0  // 分数

    let sortNumbers: number[][] = numbers.map(item => item.sort((a, b) => b - a))  // 将numbers每行数字进行一个从大到小排序

    // 循环
    for (let i = 0; i < l2; i++) {
        let max: number = 0;
        for (let j = 0; j < l1; j++) {
            // 替换每列最大的数
            max = Math.max(max, sortNumbers[j][i])
        }
        // 加到分数上
        score += max
    }
    return score
};

console.log(matrixSum([[7, 2, 1], [6, 4, 2], [6, 5, 3], [3, 2, 1]]))