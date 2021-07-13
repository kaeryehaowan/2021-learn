// ## js-手写myApply、js-手写myBind、js-手写myCall  --- 001

// function foo (name, age) {
//     console.log(this,name, age)
// }
// let o = {name: 'self'}
// foo.myApply(o, ['applyName','applyAge'])

/**
 * 题目分析&解题思路：
 * 1、foo.myApply  这个方法，要么是 foo 函数自身上，要么在 foo 函数所能访问的原型链上；
 * 当然也能自己写一个 MyFunction 构造器，去继承 Function，然后在 MyFunction.prototype上加myApply，
 * 但是这样就如直接在 foo 上加方法一样，如果foo不是通过MyFunction实例化，以及，foo是直接用function声明的，就没办法了
 * 2、foo.myApply 在自身属性上的话，那就只有 foo 这个函数有这个 myApply 能力，显然，题目是要求所有函数对象均有这个能力
 * 3、那答案就出来了，我们需要把  myApply 加到 原型链上，也就是某一个对象的原型上加上这个能力
 * 4、如果没有手动操作过 Function ，那函数对象他的原型链就只有两层，所以，我们可以在这两个构造器上加原型方法 myApply:
 * foo.__proto__.constructor -->  Function
 * foo.__proto__.__proto__.constructor -->  Object
 * 5、如果在Object.prototype上加myApply的话，那会影响到其他类型的对象，显然这样是不好的，比如：
 * var a = {}
 * a.myApply
 * 6、那最终答案就在 Function.prototype 上加 myApply 
 * 7、需要注意的是，传入的第一个参数，需要做容错判断，为 undefined null 时，默认为 global(浏览器里为window);
 * 当这个参数为基础类型时，需要用对应的类型构造器包装成对应的对象
 */

// 答案:
Function.prototype.myApply = function () {
  // 获取入参!
  let _o = window
  // 对 _o 进行容错 处理
  if (!(!arguments[0] && arguments[0] !== 0 && arguments[0] !== false)) {
    _o = arguments[0]
    _o = new _o.__proto__.constructor(_o)
  }
  let _p = arguments[1] || []
  // 缓存调用的函数本身,使用 symbol ,防止被泄漏
  let _s = Symbol('s')
  // 赋值给到 _o，通过 ‘谁调用，函数 this 就指向谁’ 的原则，把被调用函数挂载到 _o 上

  _o[_s] = this
  // 通过 _o 调用
  _o[_s](..._p)
}
Function.prototype.myCall = function () {
  // 获取入参!
  let _o = window
  // 对 _o 进行容错 处理
  if (!(!arguments[0] && arguments[0] !== 0 && arguments[0] !== false)) {
    _o = arguments[0]
    _o = new _o.__proto__.constructor(_o)
  }
  let _p = Array.from(arguments).slice(1)
  // 缓存调用的函数本身,使用 symbol ,防止被泄漏
  let _s = Symbol('s')
  // 赋值给到 _o，通过 ‘谁调用，函数 this 就指向谁’ 的原则，把被调用函数挂载到 _o 上
  _o[_s] = this
  // 通过 _o 调用
  _o[_s](..._p)
}
Function.prototype.myBind = function () {
  // 获取入参!
  let _o = window
  // 对 _o 进行容错 处理
  if (!(!arguments[0] && arguments[0] !== 0 && arguments[0] !== false)) {
    _o = arguments[0]
    _o = new _o.__proto__.constructor(_o)
  }
  let _p = Array.from(arguments).slice(1)
  // 缓存调用的函数本身,使用 symbol ,防止被泄漏
  let _s = Symbol('s')
  // 赋值给到 _o，通过 ‘谁调用，函数 this 就指向谁’ 的原则，把被调用函数挂载到 _o 上
  _o[_s] = this
  // 返回函数
  return function () {
    _o[_s](..._p, ...arguments)
  }
}
