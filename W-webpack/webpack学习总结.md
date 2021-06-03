## webpack 是什么？

## webpack 基本用法 
1. npm init[-y] 初始化一个项目，生成 package.json
2. mode 模式设置，常用来区分开发与生产，可选值为 development、production[默认值]，可以通过命令行传入。不同的模式会影响 NODE_ENV 环境变量的值，并且会开启不同的插件，例如压缩等
3. entry 入口文件，webpack会从配置的入口，开始递归解析依赖，可使用对象的形式配置多入口。
4. output 编译出口，webpack工作完成，生成的文件配置，例如文件名和位置
5. module 模块，针对模块的配置，例如设置不处理解析 JQuery ，例如设置 loader
6. resolve 解析规则，例如是否缓存，例如 alias 别名，例如
7. optimization 优化配置
8. plugins 插件配置，在一个编译周期里，插件几乎能做任何事情。
9. devServer 开发服务器配置
10. devtool 常用于配置是否开启sourcmap
11. externals 外部依赖配置，常用来配置 cdn 依赖

## webpack 常用plugin、loader
1. html-webpack-plugin html模板插件，会自动注入打包后的js文件
2. clean-webpack-plugin 自动清除上一次编译结果的插件
3. style-loader、css-loader、less-loader、postcss-loader
4. mini-css-extract-plugin 拆分css，会生成css文件
5. extract-text-webpack-plugin 会生成多个css文件
6. file-loader、url-loader 处理资源文件，图片、字体、音视频等
7. babel-loader
8. vue-loader、vue-template-complier、vue-style-loader vue解析
9. webpack-dev-server 热更新
10. webpack-merge 合并配置
11. copy-webpack-plugin 拷贝静态资源
12. optimize-css-assets-webpack-plugin 压缩css
13. uglifyjs-webpack-plugin 压缩js


## webpack 优化方向
1. 拆分 webpack.config.js，抽离 webpack.base.js webpack.dev.js webpack.build.js ,或者依据环境拆分
2. 优化打包速度，
    1. 合理的配置mode参数与devtool参数，mode可设置development production两个参数，如果没有设置，webpack4 会将 mode 的默认值设置为 production ，production模式下会进行tree shaking(去除无用代码)和uglifyjs(代码压缩混淆)
    2. 缩小文件的搜索范围(配置include exclude alias noParse extensions)，alias配置可以减少递归查询，include与exclude让搜索解析时范围变小，noParse配置忽略解析外部依赖，也可以减少解析时间。extensions配置明确的后缀文件，也是缩小解析范围

## webpack [plugin、loader]

## webpack 原理