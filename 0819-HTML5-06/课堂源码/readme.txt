HTML5 DAY06:
 * Web Workers
   * 基础内容
     * 作用:就是为前端逻辑提供类似多线程的功能
     * 特点:
       * 利用CPU的多核
       * 实现多线程效果
   * Worker API
     * Worker对象
       var worker = new Worker(url);
       * url - 表示对应的worker文件的路径
     * 方法
       * postMessage(data)方法
         * 作用:传递消息(数据)
	 * data参数:被传递的数据内容
       * terminate()方法
         * 作用:终止Worker通信
     * 事件
       * onmessage事件
         * 作用:监听postMessage()方法是否被调用
	 * 触发:该事件postMessage()方法调用时
   * Worker的通信方式
     * Worker的单向通信
       Worker文件 (传递数据)-> HTML页面
     * Worker的双向通信
       HTML页面 (传递数据)<->(传递数据) Worker文件
 * Web 存储(DOM存储)
   * 基础内容
     * 作用:将页面的数据存储客户端中
     * Cookie的问题
       * 明文 - 未加密的数据内容
       * 大小 - 最大为4KB
       * 浏览器 - 对应一个Web应用,最多两百多个Cookie
       * 不能存储中文(英文+数字)
     * Web 存储的分类
       * sessionStorage(会话存储)
         * 存储的数据的生命周期 - 从打开页面到关闭页面
       * localStorage(本地存储)
         * 存储的数据的生命周期
	   * 与页面打开或关闭无关
	   * 用户手动删除
     * 获取Web存储的方式
       * window.sessionStorage
       * window.localStorage
   * sessionStorage
     * setItem(key,value)方法
       * 作用:向Storage中存储数据
       * 参数
         * key - 存储数据对应的标识
	 * value - 存储的数据内容
     * getItem(key)方法
       * 作用:从Storage中获取数据
       * 参数:
         * key - 存储数据对应的标识
     * removeItem(key)方法
       * 作用:删除Storage中的数据内容
       * 参数:
         * key - 存储数据对应的标识
     * key(index)方法
       * 作用:根据角标返回对应的key
       * 参数:
         * index - 表示角标
     * clear()方法
       * 作用:清除Storage中所有的数据
     * length属性
       * 作用:返回当前Storage中所有数据的个数
   * localStorage
     * storage事件(了解)
       * 实现:多页面之间共享数据内容
       * 目前:大部分的主流浏览器还不支持
   * 应用场景
     * HTML5版的记事本
     * 记住用户名
 * Web Sockets(了解)
   * 基础内容
     * 网络协议
       * HTTP协议 - 目前互联网中最广泛的协议
       * SOCKET协议 - 应用于实时即时通信
     * HTTP协议的问题
       * 无状态
         * 本次客户端的请求,服务器端不知道客户端的上次请求
       * 不是连续通信
     * Web Sockets的作用
       * 提供HTML页面实现实时通信效果
     * 如果使用Web Sockets
       * 请求地址(url)不能再是http://开头
       * Web Sockets的请求头(url的开头)
         * ws:// - Web Socket的缩写
	 * wss:// - 表示加密协议
   * Web Sockets API
     * HTML5提供WebSocket对象
       var websocket = new WebSocket(url)
       * url参数 - 表示当前请求的服务器端地址
     * 方法
       * send(data)方法:向服务器端发送请求数据
       * close()方法:关闭当前的连接
     * 事件
       * onopen事件:监听客户端与服务器端之间建立连接
         * 进行必要的初始化工作
       * onmessage事件:监听服务器端向客户端返回数据
         * 接收服务器端的响应数据
       * onerror事件:监听客户端与服务器端连接出错
       * onclose事件:监听客户端与服务器端之间关闭连接
         * 进行必要的资源释放
    * 属性
      * readyState属性:返回服务器端的状态
        * OPEN(1) - 客户端与服务器端已建立连接
	* CLOSED(3) - 客户端与服务器端连接已关闭
      * url属性:返回当前的请求地址