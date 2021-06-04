## webpack 是什么？
webpack是一个打包工具，通过分析引用关系，按照规则拆分出chunk，最后依据配置，生成 bundle。
## webpack 基本用法 
1. npm init[-y] 初始化一个项目，生成 package.json
2. mode 模式设置，常用来区分开发与生产，可选值为 development、production[默认值]、none，可以通过命令行传入。不同的模式会影响 NODE_ENV 环境变量的值，并且会开启不同的插件，例如压缩等
3. entry 入口文件，webpack会从配置的入口，开始递归解析依赖，可使用对象的形式配置多入口。entry是webpack构建的起点。
4. output 编译出口，webpack工作完成，生成的文件配置，例如文件名和位置
5. module 模块，针对模块的配置，例如设置不处理解析 JQuery ，例如设置 loader
6. resolve 解析规则，模块路径解析相关的配置。例如是否缓存，例如 alias 别名，后缀补全
7. optimization 优化配置
8. plugins 插件配置，在一个编译周期里，插件几乎能做任何事情。
9. devServer 开发服务器配置
10. devtool 常用于配置是否开启sourcmap
11. externals 外部依赖配置，常用来配置 cdn 依赖

## webpack 常用plugin、loader
1. html-webpack-plugin html模板插件，会自动注入打包后的js文件
2. clean-webpack-plugin 自动清除上一次编译结果的插件
3. style-loader、css-loader、less-loader、postcss-loader：
    - css-loader 负责解析 CSS 代码，主要是为了处理 CSS 中的依赖，例如 @import 和 url() 等引用外部文件的声明；
    - style-loader 会将 css-loader 解析的结果转变成 JS 代码，运行时动态插入 style 标签来让 CSS 代码生效。
4. mini-css-extract-plugin 拆分css，会生成css文件,因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
5. extract-text-webpack-plugin 会生成多个css文件
6. file-loader、url-loader 处理资源文件，图片、字体、音视频等
7. babel-loader 支持 ES 新特性
8. vue-loader、vue-template-complier、vue-style-loader vue解析
9. webpack-dev-server 热更新
10. webpack-merge 合并配置
11. copy-webpack-plugin 拷贝静态资源
12. optimize-css-assets-webpack-plugin 压缩css
13. uglifyjs-webpack-plugin[可以用terser-webpack-plugin代替] 压缩js
14. define-plugin 定义环境变量
15. webpack-dashboard 直观显示构建过程


## webpack 优化方向
1. 拆分 webpack.config.js，抽离 webpack.base.js webpack.dev.js webpack.build.js ,或者依据环境拆分
2. 优化打包速度，
    1. 合理的配置mode参数与devtool参数，mode可设置development production两个参数，如果没有设置，webpack4 会将 mode 的默认值设置为 production ，production模式下会进行tree shaking(去除无用代码)和uglifyjs(代码压缩混淆)
    2. 缩小文件的搜索范围(配置include exclude alias noParse extensions)，alias配置可以减少递归查询，include与exclude让搜索解析时范围变小，noParse配置忽略解析外部依赖，也可以减少解析时间。extensions配置明确的后缀文件，也是缩小解析范围
    3. 减少 resolve 的解析，例如：使用绝对路径指定 node_modules，不做过多查询，删除不必要的后缀自动补全，少了文件后缀的自动匹配，即减少了文件路径查询的工作，其他文件可以在编码时指定后缀，如 import('./index.scss')，避免新增默认文件，编码时使用详细的文件路径，代码会更容易解读，也有益于提高构建速度。
    4. 减少 plugin 的消耗。
    5. 选择合适的 devtool。
    6. thread-loader，多进程加速 loader 执行。
3. 优化打包体积
    1. 按需加载 （webpackChunkName）
    2. 图片压缩
    3. 代码压缩
    4. 使用 tree-shaking 、 sideEffects 、concatenateModules 压缩js代码
    5. 分享公共代码模块
    6. 分离第三方库

## webpack [plugin、loader]
- loader : 我们可以把 loader 理解为是一个转换器，负责把某种文件格式的内容转换成 webpack 可以支持打包的模块；loader一般是在Module实例调用自身的 runLoadrs 方法时，找到对应的 loader 并调用。
    - 开发一个loader，loader就是一个function,接收上一个loader处理后的内容，然后自己处理加工一下，再return出去。可以通过this.async实现异步。一般是在这里使用正则或AST来处理字符。
    - 要注意 pitch，类似捕获与冒泡。  ['a','b','c'] 三个loader执行过程是：a.pitch -> b.pitch -> c.pitch -> c.loader -> b.loader -> a.loader。pitch一般用于，部分不依赖前面loader处理处理结果的Loader。

    
- plugin : webpack 会使用 tapable 给整个构建流程中的各个步骤定义钩子，用于注册事件，然后在特定的步骤执行时触发相应的事件，注册的事件函数便可以调整构建时的上下文数据，或者做额外的处理工作，这就是 webpack 的 plugin 机制。
    - plugin是一个类，需要在原型上实现apply方法。plugin被调用时，就是调用了这个apply方法。调用apply方法时，会传入 compiler 实例，这个实例是webpack的构建实例，在这个实例上能拿到整个webpack的上下文，例如options。在这个实例上，会有很多hooks，例如 emit 等，在这些hooks回调里，又会返回 compilation 实例，这个实例上可以拿到当次编译的上下文，这个 compilation 是当次编译的实例，这个实例上也会有很多hooks。

## webpack 原理
- webpack的大概过程
    - 创建 Compiler -> 
    - 调用 compiler.run 开始构建 ->   
    - 创建 Compilation -> 
    - 基于配置开始创建 Chunk -> 
    - 使用 Parser 从 Chunk 开始解析依赖 -> 
    - 使用 Module 和 Dependency 管理代码模块相互关系 -> 
    - 使用 Template 基于 Compilation 的数据生成结果代码 ->

- 弄清楚 compiler 与 complilation
- loader 与 plugin 执行关系。(创建 Compiler -> addEntry -> _addModuleChain -> moduleFactory -> 创建 Module -> 调用 buildModule -> 调用 runLoader -> 触发 loader)

## 建议
当遇到webpack相关的问题时，可以从下面四个方向入手：
- webpack 的官方文档： 按这个顺序阅读 Guides -> Concepts -> Configuration -> Loaders -> Plugins -> API
- webpack 社区的各种文章
- webpack 在 github 官方仓库的 issues
- webpack 的源码