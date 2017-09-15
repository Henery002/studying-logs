HTML5 DAY03:
 * Canvas
   * 作用
     * 网页游戏 - 不只是Canvas
     * 网页应用 - 柱状图、饼状图等
   * 创建路径
     * 实现步骤
       1. context.beginPath() - 表示开始路径
       2. 设置形状
          * context.rect() - 矩形
	  * context.arc() - 圆形或弧形
	  * context.moveTo() - 线的起点
	  * context.lineTo() - 线的终点
       3. context.closePath() - 表示关闭路径
       4. context.fill()或stroke() - 绘制上述图形
     * 绘制矩形
     * 绘制圆形
     * 绘制弧形
     * 绘制直线
     * 绘制折线
     * 绘制多边形
   * 设置线型
     * lineWidth - 设置线宽
     * lineCap - 设置线的端点形状
       * butt - (默认值)方形
       * round - 圆形
       * square - 
     * lineJoin - 设置线的交点形状
       * round - 圆形
       * bevel - 三角形
       * miter - 
         * miterLimit
   * 操作图片
     * 绘制图片
       * drawImage(image, x, y)
         * image - 表示当前绘制的图片
	 * x和y - 表示绘制图片的坐标值
       * drawImage(image, x, y, width, height)
         * image - 表示当前绘制的图片
	 * x和y - 表示绘制图片的坐标值
	 * width和height - 表示绘制图片显示的宽度和高度
     * 设置平铺
       createPattern(image, type)
       * 作用:设置平铺方式
       * 参数
         * image - 要平铺的图片
	 * type - 设置平铺的方式
	   * repeat - 全方向平铺
	   * repeat-x - 水平方向平铺
	   * repeat-y - 垂直方向平铺
	   * no-repeat - 不平铺
     * 切割图片
       * 绘制图片
       * 切割图片 - 创建路径
         clip() - 切割方法
   * 画布方法
     * 状态方法 - 一个存档
       * save() - 保存当前状态
         * 注意:每次只能保存一个状态
       * restore() - 恢复保存的状态
     * 转换方法
       * translate(x, y) - 移动
       * scale(x, y) - 缩放
       * rotate(angle) - 旋转
         angle - 旋转的角度
	 * Math.PI - 180度
	 * Math.PI/180 - 1度为多少PI
       * 特殊用法
         * 以画布的正中心进行旋转
 * Chart.js库
   * 基础内容
     * 作用:专门用于绘制各种图形
     * 技术:封装的就是HTML5的Canvas
     * 六种图形
       * 饼状图
       * 柱状图
       * 曲线图
       * 环形图
       * 极地区域图
       * 雷达图
   * 