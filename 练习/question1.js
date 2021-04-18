(function demo() {

    var a = [];
    for (let i = 0; i < 10; i++) {
        a[i] = Math.ceil(Math.random() * 20 - 10)
    } //随机生成数组
    var start = 0; //当前索引
    var end = a.length - 1; //最后一个索引
    for (let i = start; i <= end; i++) {
        i = start;
        if (a[i] > 0) { //如果当前缩影大于零 则继续往后查找
            start++;
        } else { //当前索引小于零 则将其与最后元素交换
            let temp = a[i];
            a[i] = a[end];
            a[end] = temp;
        }
        if (a[end] < 0) { //最后元素为负数时，将索引前移
            end--;
        }
    }
    console.log(a);
})();