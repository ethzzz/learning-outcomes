/* 
    输出杨辉三角的第rowIndex行
*/

function getRow(rowIndex: number): number[] {
    let total: number[][] = new Array(rowIndex + 1).fill([])
    for (let i = 0; i <= rowIndex; i++) {
        let now: number[] = new Array(i + 1).fill(1)
        for (let j = 1; j < i; j++) {
            now[j] = total[i - 1][j - 1] + total[i - 1][j]
        }
        total[i] = now
    }
    return total[rowIndex]
};

console.log(getRow(3));
