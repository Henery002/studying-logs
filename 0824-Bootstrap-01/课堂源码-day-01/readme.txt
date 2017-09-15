BOOTSTRAP DAY01:
 * 响应式页面
   * 桌面浏览器、手机端浏览器、平板电脑浏览器
     * 分辨率
   * 定义:一个HTML页面同时满足所有终端(PC、平板电脑和手机登)
   * 2010年5月被提出的
 * "响应式"的解决方案
   * (大型网站)针对不同的终端开发不同的HTML页面
     * 桌面端 - pc.html
     * 移动端 - mobile.html

     * 优点:用户体验好,适合于复杂页面
     * 缺点:工作量增大,不够灵活
   * (中小型网站)开发一个HTML页面同时满足所有终端
     * 优点:比较灵活,一个页面适配所有终端
     * 缺点:加载时间变长,效率比较低
 * 测试响应式页面
   * 通过浏览器的开发者工具
   * 通过移动开发框架(手机模拟器)
   * 使用真实设备(手机)
 * 如何实现响应式
   * 手动编写响应式页面
     * 为什么
       * 掌握响应式页面的原理
     * 四个核心要素
       * viewport
       * 绝对单位改相对单位
       * 网格布局
       * 媒体查询
   * 第三方的框架 - Bootstrap
 * 手动编写响应式页面
   * viewport
     * 被翻译为"视口"或"视区"
     * 作用 - 表示HTML页面可视区域
       * 主要是指可视区域
     * 用法 - 被定义在<head>标签中
       <meta name="viewport" content="width=device-width">
       * width - 当前HTML页面的宽度
       * device-width - 当前设备的宽度
     * 设置选项
       * width - 设置页面宽度
       * height - 设置页面高度(一般不用)
       * user-scale - 设置是否允许用户缩放页面
       * initial-scale - 设置页面初始化缩放比例
     * 注意 - 并不是W3C的标准
   * (CSS)绝对单位改相对单位
     * 宽度:像素值(px) -> 百分值(%)
       * 作为容器元素
         * 根据网页的布局设计修改
       * 作为容器的后代元素
         * 公式:当前元素宽度/父级元素宽度
     * 字体:像素值(px) -> 相对值(em)
       * 浏览器解析字体的默认大小 - 12px
     * 图片:像素值(px) -> 百分值(%)
       * max-width或width : 100%
   * 网格(表格-行或列)布局
     * 种类
       * 一行多列 - 流式(瀑布流)布局
       * 多行多列 - 有行有列
     * 核心内容
       * 将HTML页面整个宽度分为 12 列
         HTML页面宽度为 100%
	 .col-1 {width:8.33%}
	 .col-2 {width:16.67%}
	 .col-3 {width:25%}
	 .col-4 {width:33.33%}
	 .col-5 {width:41.67%}
	 .col-6 {width:50%}
	 .col-7 {width:58.33%}
	 .col-8 {width:66.67%}
	 .col-9 {width:75%}
	 .col-10 {width:83.33%}
	 .col-11 {width:91.67%}
	 .col-12 {width:100%}
       * 元素设为浮动
         [class*="col-"]{
	    float : left;
	 }
       * 盒子(框)模型
         * 默认所使用 - content-box
	 * IE怪异模式 - border-box
	   * 注意:不是W3C的标准
	 * {
	    box-sizing : border-box;
	 }
   * CSS3的媒体查询
     * 语法
       * 定义在HTML页面
         <link 
	   media="媒体类型 操作符 (媒体属性)" 
	   href="" rel="stylesheet">
       * (建议)定义在CSS样式中
         @media 媒体类型 操作符 (媒体属性) {
	    CSS样式内容
	 }
     * 核心内容
       * 媒体类型 - 当前是什么设备
         * screen - 屏幕(宽度和高度)
	 * print - 打印机
	 * all - 表示所有设备
       * 操作符
         * and - 逻辑与
	 * not - 逻辑非
	 * only - 唯一
       * 媒体属性
         * width - 宽度
	 * min-width - 最小宽度
	 * max-width - 最大宽度
 * Bootstrap
   * 基础内容
     * 解决响应式 - HTML+CSS
     * Bootstrap提供一些插件(JS文件)
     * Bootstrap使用一些网络字体
   * 如何使用Bootstrap
     * 容器
       * .container - 固定宽度
       * .container-fluid - 100%宽度
       * 注意:两种容器不能相互嵌套
     * 栅格系统(网格布局)
 * 扩展内容
   * JS库与框架的区别
     * JS库 - 工具
       * 作用 - 简化我们的开发难度
     * 框架 - 解决方案
       * 前提 - 接收框架的思想
   * CDN 加速
     * 不是存储在自己的服务器上,而是存储在专门的服务器上
     * 专门的服务器端性能更好
     * 预先下载对应的第三方文件到用户电脑中
   * http://jerryzou.com/posts/aboutNormalizeCss/