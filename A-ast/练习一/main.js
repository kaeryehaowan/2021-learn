const recast = require("recast");
const fse = require('fs-extra');
const path = require('path');

fse.readJson(path.resolve(__dirname, './project.config.json'), (err, data) => {
  if (!err) {
    const ast = recast.parse(data);
    console.log(ast)
  }
})

console.log()


// 你的"机器"——一段代码
// 我们使用了很奇怪格式的代码，想测试是否能维持代码结构
const code =
  `
  function add(a, b) {
    return a +
      // 有什么奇怪的东西混进来了
      b
  }
  `
// 用螺丝刀解析机器
const ast = recast.parse(code);

// ast可以处理很巨大的代码文件
// 但我们现在只需要代码块的第一个body，即add函数
const add = ast.program.body[0]

// console.log(add)