window.addEventListener('load', function () {
    // 当鼠标移入轮播图 显示前进后退按钮 移除轮播图 隐藏按钮
    var pre = document.querySelector('.pre');
    var next = document.querySelector('.next');
    var box = document.querySelector('.box');
    box.addEventListener('mouseenter', function () {
        pre.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    box.addEventListener('mouseleave', function () {
        pre.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(() => {
            // 手动调用点击事件
            next.click();
        }, 2000);
    });
    // 动态生成小圆圈  有几张图片就生成几个小圆圈
    var ul = box.querySelector('ul');
    var ol = box.querySelector('.circle');
    var boxWidth = box.offsetWidth;
    for (let i = 0; i < ul.children.length; i++) {
        // 创建一个小li
        var li = document.createElement('li');
        // 把li插入到ol里面
        ol.appendChild(li);
        // 为每个小li添加索引属性
        li.setAttribute('index', i);
        // 小圆圈排他思想
        li.addEventListener('click', function () {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 点击小圆圈移动图片 移动ul
            // ul的移动距离 小圆圈的索引号 * 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li的索引号
            var index = this.getAttribute('index');
            // 点击后 将index赋值给num;
            num = index;
            // 点击后 将index赋值给circle;
            circle = index;
            // console.log(boxWidth);
            // console.log(ul.offsetLeft);
            // console.log(index * boxWidth);
            animate(ul, -index * boxWidth);
        })
    }
    // 把ol里面的第一个小li设置类名为current
    ol.children[0].className = 'current';

    // 克隆第一章图片(li)放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 点击右侧按钮 图片滚动到下一章
    var num = 0;
    // 控制小圆圈
    var circle = 0;
    // 添加节流阀
    var flag = true;
    next.addEventListener('click', function () {
        if (flag) {
            flag = false;
            // 如果走到了最后赋值的一张图片 此时我们的ul left值快速复原为0;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * boxWidth, function () {
                // 将flag 重新赋值为 true;
                flag = true;
            });

            // 小圆圈跟着右侧按钮点击 改变样式
            circle++;
            // 如果circle等于小圆点的数量 则将circle重置为0
            /* if (circle == ol.children.length) {
                circle = 0;
            } */
            circle = circle == ol.children.length ? 0 : circle;

            changeCircle();
        }
    })
    pre.addEventListener('click', function () {
        if (flag) {
            // 如果走到了第一张图片 此时我们的ul left值快速复原为0;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * boxWidth + 'px';
            }
            num--;
            animate(ul, -num * boxWidth, function () {
                // 将flag 重新赋值为 true;
                flag = true;
            });

            // 小圆圈跟着右侧按钮点击 改变样式
            circle--;
            // 如果circle等于小圆点的数量 则将circle重置为0
            /* if (circle < 0) {
                circle = ol.children.length - 1;
            } */
            circle = circle < 0 ? ol.children.length - 1 : circle;

            changeCircle();
        }
    })

    function changeCircle() {
        // 将小圆圈所有样式去除 再给当前小圆圈添加样式
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ol.children[circle].className = 'current';
    }

    let timer = setInterval(() => {
        // 手动调用点击事件
        next.click();
    }, 2000);
})