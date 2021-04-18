// 封装tap 解决click 300ms延时
function tap(obj, callback) {
    var isMove = false;
    var startTime = 0; //记录触摸时间
    obj.addEventListner('touchstart', function (e) {
        startTime = Date.now(); //记录触摸时间
    });
    obj.addEventListner('touchmove', function (e) {
        isMove = true; //检查是否有滑动  有则算拖曳 不算点击
    });

    obj.addEventListner('touchend', function (e) {
        if (!isMove && (Date.now() - startTime) < 150) { //如果没有拖曳且 点击和离开时间小于150ms 则算点击事件
            callback && callback(); //执行回调函数
        }
        isMove = false;
        startTime = 0;
    });
}
//调用
tap(obj, function () {
    //执行代码
})