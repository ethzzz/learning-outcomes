window.onload = function () {
    var img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 在图片层移动的方法
    img.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // 使遮罩层随着鼠标的移动而移动
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var maskXMax = img.offsetWidth - mask.offsetWidth;
        var maskYMax = img.offsetHeight - mask.offsetHeight;
        // 限制遮罩层只能在图片层里移动
        if (maskX <= 0) {
            maskX = 0;
        }
        if (maskX >= maskXMax) {
            maskX = maskXMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        }
        if (maskY >= maskYMax) {
            maskY = maskYMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 是大图片层随着显示响应位置  大图片的移动距离=遮罩层移动距离 * 大图片最大移动距离、遮罩层的最大移动距离
        var bigImg = document.querySelector('.bigImg');
        //大图最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 X Y
        var bigX = maskX * bigMax / maskXMax;
        var bigY = maskY * bigMax / maskYMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })
}