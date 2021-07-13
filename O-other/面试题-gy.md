HTML & DOM
1. 列举常用的 HTML 标签及其适用场景
```html
<style des='样式'></style>
<script des='脚本'></script>
<div>布局盒子</div>
<p>段落</p>
<span>描述</span>
<h2>标题</h2>
<ul><li>无序列表</li></ul>
<img des='图片' />
<canvas des='画布'>
<video des='视频'>
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
```
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
2. 说说 javascript 的继承机制
3. 怎么理解函数式编程
4. 怎么理解 event loop
5. javascript 的执行机制是怎样的
6. 异步编程有多少种方案，区别是什么
7. CommonJs 和 ESModule 有什么区别
8. 怎么理解作用域，javascript 有多少种作用域
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
2. TCP 与 UDP 分别是什么，各自的适用场景是怎样的
3. http2.0 有哪些特点，会带来哪些好处，http3.0 是否了解过
4. session 和 cookie 分别是什么，为什么我们总拿它们一起讨论
5. 怎么理解 keep-alive 机制，多路复用是什么，它俩有关系吗
6. http 支持的缓存策略有哪些，怎么使用
7. 什么是跨域，解决跨域有哪些方法
8. 前端安全有哪些，怎么预防
工程化
1. 介绍一下 webpack 的设计理念及其工作流程
2. plugin 和 loader 是什么，有什么区别
3. 是否了解过其他的打包器，有什么特点
4. webpack 代码切割的原理是什么，有什么作用
5. 热更新很慢，该怎么做
6. tree shaking 是什么，如何支持
NodeJs
1. 介绍一下 Node 的主要特点
2. Node 是如何做到跨平台的
3. 怎么理解 Stream，它有什么意义
4. 是否有企业级 Node 项目经验，有什么心得
5. 介绍一下 Node 的模块系统
6. 如果提升 Node 项目的健壮性
7. Node 进程间如何通信
8. 为什么说 Node 有很高的 IO 性能