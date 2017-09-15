BOOTSTRAP DAY04:
 * 插件
   * 警告框
     * data-*
       * data-dismiss="alert"
     * JavaScript
       1.获取button按钮
       2.调用alert('close')
   * 下拉菜单
     * data-*
       * data-toggle="dropdown"
     * JavaScript
       1.获取button按钮
       2.调用dropdown()
   * 导航(标签页)
     * data-*
       data-toggle="tab"
     * JavaScript
       1.获取<li>标签
       2.调用tab('show')
   * 折叠框
     * data-*
       * data-toggle="collapse"
       * data-target="#id"或href="#id"
     * JavaScript
   * 工具提示
     * HTML - title属性
     * data-*
       * data-toggle="tooltip"
     * JavaScript
       * 调用tooltip()
     * 显示位置
       * data-placement
         * top - 默认
	 * bottom
	 * left
	 * right
   * 弹出框
     * HTML
       * title属性 - 弹出框的标题
       * data-content属性 - 弹出框的内容
     * data-*
       * data-toggle="popover"
     * JavaScript
       * 调用popover()
     * 显示位置
       * data-placement
         * top
	 * bottom
	 * left
	 * right - 默认
   * 模态框
     * HTML
       <div class="modal">
         <div class="modal-dialog">
	   <div class="modal-content">
	     <div class="modal-header"></div>
	     <div class="modal-body"></div>
	     <div class="modal-footer"></div>
	   </div>
	 </div>
       </div>
     * data-*
       * 打开模态框 - data-toggle="modal"
       * 关闭模态框 - data-dismiss="modal"
   * 轮播图
 * 总结
   * 整体内容
     * 框架级内容提供一个整体解决方案
       * 优点 - 降低页面布局及效果的难度
       * 缺点 - 存在一些不太好用的组件
     * 框架级内容具备设计思想
       * 导航条的响应式方式
       * 下拉菜单由button按钮+无序列表
       * ...
   * 具体使用
     * 帮助文档API - 还是不够完善
     * 不需要记忆所有的样式名称
       * 使用集成开发工具 - WebStorm
       * 查找官方提供的帮助文档
   * 真正难度
     * 利用框架解决整体页面布局+效果
   * 面试问题
     * 不会问Bootstrap中具体的用法
       * 参考帮助文档
       * 框架的使用真正难度在解决问题
     * 响应式内容
       * 什么是响应式?为什么需要响应式?
       * 实现响应式页面的原理?(手动方式实现响应式)
         * viewport
	 * 绝对单位改相对单位
	 * 网格布局(栅格系统)
	 * CSS3的媒体查询
 * Less语言
   * 基础内容
     * CSS的预处理器
       * Less
       * Sass
     * Less被称之为动态样式语言(CSS为静态样式语言)
     * Less语言
       * 定义变量、函数等
       * 让CSS呈现可编程化
   * 如何使用Less
     * 在客户端使用
     * 在服务器端使用
   * 语法
     * http://www.bootcss.com/p/lesscss/