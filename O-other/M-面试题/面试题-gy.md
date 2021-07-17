HTML & DOM

1. 列举常用的 HTML 标签及其适用场景

```html
<style des="样式"></style>
<script des="脚本"></script>
<div>布局盒子</div>
<p>段落</p>
<span>描述</span>
<h2>标题</h2>
<ul>
  <li>无序列表</li>
</ul>
<img des="图片" />
<canvas des="画布"> <video des="视频"></video></canvas>
```

2. 怎么理解语义化，它有什么作用

```
理解：正确的语义化可以让我们没看到最终展示的样子时，在看到代码文本时，就能有一个大概的想象，能知晓其结构。
作用：让代码能读懂代码，比如爬虫，较好的语义化能大大的提高搜索引擎排名，这是seo（搜索引擎优化）里一个比较重要的部分。
```

3. ul 和 ol 标签有什么区别

```
ul为无序列表
ol为有序列表
```

4. 什么是行内元素和块级元素

```
块级元素：1、独占一行；2、可以设置物理样式；div、p、display:block
行内元素：1、可与其他行内元素共处一行；2、无法设置物理样式；3、可以换行，也就是一个行内元素，可以同时处于两行中；span、em、i、display:inline;
```

5. DOM 是什么，存在的意义是什么

```
文档对象模型，存在的意义，提供了让js通过浏览器的DOM，获得操作文档的能力。
```

6. 你常用的 DOM api 有哪些，如何使用，有什么区别

```
document.getElementById(id)
document.getElementsByTagName(name)
document.createElement(name)
parentNode.appendChild(node)
element.innerHTML
element.style.left
element.setAttribute()
element.getAttribute()
element.addEventListener()
window.onload
window.scrollTo()
```

7. 从你在浏览器地址栏敲下回车，到看到完整的页面，中间都发生了什么

```
听我慢慢道来
```

8. data api 是什么，有什么作用

```
这个不知道
```

9. 列举常用的 meta 标签，说说对于 viewport 的理解

```
meta标签用于管理文档的元数据，这些信息不会被渲染出来。就像照片文件一样，里而会有一些照片的生成时间、类型、地点等，这些信息会存储在这个文件里，但是，打开照片又是看不到的。而meta标签上的信息是用来给浏览器、搜索引擎等机器使用的。charset、keywords、description、viewport等
viewport在移动设备中，有三个，一个是 layout viewport，这个是最大的，也就是为什么pc网站在移动设备上能正常显示，仅是需要用户手动去拖拽查看。第二个是 visual viewport ，这个是可视区域，代表能用户能看到的大小。第三个是 ideal viewport，这个是最理想的viewport，我们能用meta标签控制，也就是这个viewport。
```

CSS

1. 怎么理解盒模型

```
任何一个标签在浏览器里渲染的结果都是一个个的矩形，就算是用了rotate或其他transform属性，也仅仅是把当前标签提升到一个单独的图层上，实际的占位还是一个矩形。我们把这个矩形定义为盒，便于理解记忆。这个盒会有  width\height + padding + border + margin，有两种形式的盒，一种是 width 包含 padding 和 border；一种是 width 不包含 padding 和 border；我们称这两种为盒模型，平时布局的时候需要注意属于哪一种，同时，也可以通过 box-sizing 属性进行设置。
```

2. 怎么理解 BFC
   [规范文档](https://www.w3.org/TR/CSS21/visuren.html#block-formatting)

```
除了 BFC 还有  IFC
块级格式化上下文，当一个元素拥有的是BFC时，它自身内部的布局和它自身与相邻元素的关系都会受影响，一般常见的就是子元素float后高度塌陷，还有就是自身与相邻元素在垂直方向的margin重叠问题。
display的大部分值，不是block、inline，一般都可以。
overflow: hidden;
position: absolute;
```

3. 怎么理解自适应布局和响应式布局

```
一般，我们会通过屏幕宽度对设备分为 小屏 中屏 大屏 超大屏等，每一个分类里，又不会不同宽度的设备。如果一套代码能在一个分类里不出现布局问题，那这套代码就是自适应的。如果一套代码能在不同分类里不出现布局问题，那这套代码就是响应式的。
```

4. 自适应布局有多少种方案，有什么区别

```
百分比：rem、em、vw、100%

流式：float、flex、position、table
```

5. 响应式布局有多少种方案，有什么区别

```
媒体查询+rem(vw)
```

6. rem 是什么，有什么作用

```
作用于根元素html时，1rem为默认的16px；
作用于非根元素时，1rem为根元素的fontSize大小；
常用于百分比布局；
```

7. flex 布局是什么，为什么要有 flex 布局

```
flex布局就是弹性布局，使用弹性布局后，内部子项可以根据设置，自动的扩大或收缩。
应该是为了解决在flex时代之前，布局的一些痛点。比如垂直居中
```

JS

1. 怎么理解闭包

```
闭包是为了弥补静态作用域的，在js引擎预解析时会把闭包标识出来，后续在gc时，不会被回收。有这种标识的会被挂载在一个内部 [[Closure]] 引用上，这个引用就是闭包，它是在堆上的。
```

2. 说说 javascript 的继承机制

```js
// js里仅能依靠原型链来继承。在构造函数上会有一个 prototype 属性，这个属性的内容，会被实例通过 __proto__ 访问到，全部实例访问的原型均是这一个，这就可以实现继承。

// 父类
function F(n) {
  console.log("调用父类");
  this.n = n;
}
F.prototype.colors = ["red", "green"];

// 子类
function C(n, m) {
  console.log("调用子类");
  this.m = m;
  // 继承父类实例属性
  F.call(this, n);
}

// 继承父类原型
var p = Object.create(F.prototype);
C.prototype = p;
C.prototype.constructor = C;

// 扩展子类原型
C.prototype.cList = ["a", "b", "c"];

// 实例化
var c = new C("父类", "子类");
console.log(c);
```

3. 怎么理解函数式编程

```
函数式编程需要保证函数的纯粹性，没有副作用，如果入参相同，那么返回结果就一定相同。同时，把操作原子化。
```

4. 怎么理解 event loop

```
浏览器里的 event loop
node 中的 event loop
```

5. javascript 的执行机制是怎样的

```
编译+执行
```

6. 异步编程有多少种方案，区别是什么

```
一、回调
二、pormise
三、generator
四、async/await
```

7. CommonJs 和 ESModule 有什么区别

```
使用：require exports/module.exports
使用：import export

加载：动态、运行时
加载：静态、编译时

导出：值是引用，可以修改，理解为引用就行
导出：映射关系，可读不可写
```

8. 怎么理解作用域，javascript 有多少种作用域

```
全局作用域
函数作用域
eval作用域
块级（词法）作用域
```

框架

1. 对比一下 React 和 Vue
2. 介绍一下 React 组件的生命周期
3. 介绍一下 React 的 diff 算法，它和 Vue 的有什么区别
4. 什么是 hooks，作用是什么，为什么要有 hooks
5. 怎么理解不可变数据的概念
6. 请说说 Vue 的响应式原理
7. VDOM 是什么，为什么要有它
8. 是否有遇到过渲染性能问题，怎么解决的
9. 说一种你熟悉的全局状态管理方案及其工作原理

网络

1. 介绍一下计算机网络的分层模型

```
OSI:
应用层---各种应用软件，包括 Web 应用。
表示层---数据格式标识，基本压缩加密功能。
会话层---控制应用程序之间会话能力；如不同软件数据分发给不同软件。

传输层---端到端传输数据的基本功能；如 TCP、UDP。端口到端口

网络层---定义IP编址，定义路由功能；如不同设备的数据转发。

数据链路层---定义数据的基本格式，如何传输，如何标识；如网卡MAC地址。
物理层---底层数据传输，如网线；网卡标准。
```

2. TCP 与 UDP 分别是什么，各自的适用场景是怎样的

```
UDP: 快，不稳定，不可靠，不校验，不排序，面向报文，支持多播。
TCP: 面向连接，要握手，要挥手，只能单播。

是否连接
无连接
面向连接

是否可靠
不可靠传输，不使用流量控制和拥塞控制
可靠传输，使用流量控制和拥塞控制

连接对象个数
支持一对一，一对多，多对一和多对多交互通信
只能是一对一通信

传输方式
面向报文
面向字节流

首部开销
首部开销小，仅8字节
首部最小20字节，最大60字节

适用场景
适用于实时应用（IP电话、视频会议、直播等）
适用于要求可靠传输的应用，例如文件传输
```

3. http2.0 有哪些特点，会带来哪些好处，http3.0 是否了解过

```
一、头部压缩
二、二进制格式
三、强化安全（https）
四、多路复用
```

4. session 和 cookie 分别是什么，为什么我们总拿它们一起讨论

```
cookie是放在客户端的
session是放在服务端的
```

5. 怎么理解 keep-alive 机制，多路复用是什么，它俩有关系吗

```
HTTP/1.x 是基于文本的，只能整体去传；HTTP/2 是基于二进制流的，可以分解为独立的帧，交错发送

HTTP/1.x keep-alive 必须按照请求发送的顺序返回响应；HTTP/2 多路复用不按序响应

HTTP/1.x keep-alive 为了解决队头阻塞，将同一个页面的资源分散到不同域名下，开启了多个 TCP 连接；HTTP/2 同域名下所有通信都在单个连接上完成

HTTP/1.x keep-alive 单个 TCP 连接在同一时刻只能处理一个请求（两个请求的生命周期不能重叠）；HTTP/2 单个 TCP 同一时刻可以发送多个请求和响应
```

6. http 支持的缓存策略有哪些，怎么使用

```
强缓存
协商缓存
```

7. 什么是跨域，解决跨域有哪些方法

```
协议、域名、端口，只要有一个不同就是跨域
jsonp
cors: 简单请求、复杂请求（预请求）
postMessage
websocket
nginx反向代理
```

8. 前端安全有哪些，怎么预防

```
XSS---转码
CSRF---同源检测、Samesite Cookie
DNS截持
```

工程化

1. 介绍一下 webpack 的设计理念及其工作流程

```
工作流程：读取配置 ->
        创建compiler ->
        初始化环境（注入插件、注册内置模块、ruleSet集合） ->
        执行compiler.run ->
        创建compilation ->
        确定入口，把entry通过compilation.addEntry转换成dependence ->
        根据dependence创建对应的module ->
        调用loader，将module转换成标准js内容，解析成ast，从ast中读取依赖，递归操作依赖的全部模块 ->
        根据依赖图，生成chunk ->
        根据配置，确定路径与文件名，把chunk按照配置输出到文件系统
```

2. plugin 和 loader 是什么，有什么区别

```
loader就是一个函数，是在compiler.run里调用的，可以直接拿到文件内容，然后经过自己的处理，再把结果返回出去。
plugin是一个类，原型上有一个apply方法，在初始化环境时，就会注册插件。在apply方法里，能拿到compiler实例的引用，可以通过这个引用注册钩子事件，在钩子事件里又能拿到当次编译的compilation，在这个compilation上也能注册当次编译的钩子事件。
```

3. 是否了解过其他的打包器，有什么特点

```
gulp算吗？
gulp是一个个的task，里面是任何逻辑，比如可以在gulp task里执行webpack，可以调用 ssh 等
webpack是模块打包，启动一个webpack，编译module，生成chunk, 导出bundle；我们也可以在webpack的特定时机去执行 gulp task
```

4. webpack 代码切割的原理是什么，有什么作用

```
代码切割是为了按需加载，避免在不需要的时候加载多余的文件。
动态加载：()=>require('xxx')
使用 require.ensure([],function(){})
配置多入口，拆成不同chunk
```

5. 热更新很慢，该怎么做

```
    1. 合理的配置mode参数与devtool参数，mode可设置development production两个参数，如果没有设置，webpack4 会将 mode 的默认值设置为 production ，production模式下会进行tree shaking(去除无用代码)和uglifyjs(代码压缩混淆)
    2. 缩小文件的搜索范围(配置include exclude alias noParse extensions)，alias配置可以减少递归查询，include与exclude让搜索解析时范围变小，noParse配置忽略解析外部依赖，也可以减少解析时间。extensions配置明确的后缀文件，也是缩小解析范围
    3. 减少 resolve 的解析，例如：使用绝对路径指定 node_modules，不做过多查询，删除不必要的后缀自动补全，少了文件后缀的自动匹配，即减少了文件路径查询的工作，其他文件可以在编码时指定后缀，如 import('./index.scss')，避免新增默认文件，编码时使用详细的文件路径，代码会更容易解读，也有益于提高构建速度。
    4. 减少 plugin 的消耗。
    5. 选择合适的 devtool。
    6. thread-loader，多进程加速 loader 执行。
```

6. tree shaking 是什么，如何支持

```
消除未被使用的引用

```

NodeJs

1. 介绍一下 Node 的主要特点

```
单线程、非阻塞I/O、事件循环
```

2. Node 是如何做到跨平台的

```
Libuv 与 v8 都是跨平台的，所以使用 node 时，就不会需要区分 windows linux
```

3. 怎么理解 Stream，它有什么意义
```
流，可操作的片段单元是极小的，这就会很自由
```

4. 是否有企业级 Node 项目经验，有什么心得
5. 介绍一下 Node 的模块系统
6. 如果提升 Node 项目的健壮性
7. Node 进程间如何通信
8. 为什么说 Node 有很高的 IO 性能
