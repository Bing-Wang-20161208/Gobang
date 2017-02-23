##<canvas></canvas>绘图基本步骤
1. var b = document.querySelector();取得<canvas>标签对应的DOM对象;
2. var a = b.getContext("2d");得到CanvasRenderingContext2D对象;
3. 调用相关API完成画图
##一些API
```
//实心矩形
a.fillStyle = "color";//填充
a.fillRect(x, y, width, height);//画实心矩形

//空心矩形
a.strokeStyle = "color";//描边
a.lineWidth = num;//边宽
a.lineJoin = "bevel|round|miter";//交叉图形（角的形状）:斜角|圆角|默认尖角
a.strokeRect(x, y, w, h);//空心矩形

//字符串
a.fillText(text, x, y, maxWidth);//实心字符串
a.strokeText(text, x, y, maxWidth);//空心边框
a.font = "bold 45px 宋体";
a.textAlign: start|end|left|right|center;//设置字符串水平对齐方式
a.textBaseAlign: top|hanging|middle|alphabetic|bottom;//垂直对齐方式

//设置阴影
a.shadowBlur: float;//模糊程度，越大越模糊
a.shadowColor: color;
a.shadowOffsetX: x;//x方向的偏移
a.shadowOffsetY: y;//y方向的偏移

//路径  步骤
a.beginPath();//开始定义路径
//添加路径的方法
a.arc(x, y, r, startAngel, endAngel, bool);//创建弧、曲线,bool=true逆时针
a.artTo();//介于两条切线之间的弧或曲线
a.bezierCurveTo();//通过使用表示三次贝塞尔曲线的指定控制点，向当前路径添加一个点
a.lineTo();//创建一个新点，到画布最后指定点的线条（不参与绘画）
a.moveTo();//把路径移动到画布中的指定点
a.quadraticCurveTo();//通过使用表示二次贝塞尔曲线的指定控制点，向当前路径添加一个点
a.rect();//创建矩形
a.closePath();//关闭路径
a.fill(); a.stroke();//填充或者描边,需要fillStyle = '';和strokeStyle = '';表示颜色

//线性渐变LinearGradient，圆形渐变RadialGradient
//步骤
a.createLinearGradient(x, y, xend, yend);//1.返回CanvasGradient对象
//2.调用返回对象的addColorStop(offset, color)；向线性渐变中添加颜色，offset值在0-1之间
//3.将返回的对象赋值给 a.fillStyle 或 a.strokeStyle 属性

//绘图
var img = new Image();
img.src = url;
img.onload = function() {
  //原图画位置
  a.drawImage(img, x, y);
  //缩放
  a.drawImage(img, x, y, w, h);
  //裁剪
  a.drawImage(img, xstart, ystart, 截取w, 截取h, 放至x, 放至y, 现图缩放至x, 现图缩放至y);
}
```
