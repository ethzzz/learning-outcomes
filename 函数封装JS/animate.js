function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        // 设置每次移动的距离 = (目标距离-当前距离)/10 
        var step = (target - obj.offsetLeft) / 10;
        // console.log(step);
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数
            /* if (callback) {
                callback();
            } */
            // 与运算 两者为true 才会执行
            callback && callback();
        } else {
            // 变速动画
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 20);
}