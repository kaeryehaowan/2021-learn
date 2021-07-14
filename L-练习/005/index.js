// ## js-手写深拷贝  --- 005

/**
 * 题目分析&解题思路：
 * 1、主要是考虑引用类型。同时引用类型可以拆解成基本类型。
 */

function cloneDeep(origin, complex) {
  if (complex) {
    return JSON.parse(JSON.stringify(origin))
  }
  let reslut
  let baseClone = {
    Object(v) {
      // object类型
      let r = {}
      for (let k in v) {
        r[k] = selfClone(v[k])
      }
      return r
    },
    Array(v) {
      // 数组类型
      let arr = []
      v.forEach(item => {
        arr.push(selfClone(item))
      })
      return arr
    },
    Function(v) {
      // 函数类型
      let fnString = v.toString()
      // 获取参数形参
      let pr = /\((.*)\)\s*\{/
      let prRes = fnString.match(pr)
      let paramString = prRes ? prRes[1].split(',') : []
      // 获取函数体
      let br = /\{\s*(.*)\s*\}/
      let brRes = fnString.match(br)
      let fnBodyString = brRes ? brRes[1] : undefined
      // 组合构造参数
      let F = [...paramString]
      if (fnBodyString) {
        F.push(fnBodyString)
      }
      // 生成新的函数
      return new Function(...F)
    },
    String(v) {
      // 字符串类型
      return v
    },
    Boolean(v) {
      // 布尔类型
      return v
    },
    Number(v) {
      // 数字类型
      return v
    },
    Undefined() {
      // undefined类型
    },
    Null() {
      // null类型
      return null
    }
  }
  reslut = selfClone(origin)
  return reslut

  function toRawType(o) {
    return Object.prototype.toString.call(o).slice(8, -1)
  }

  function selfClone(v) {
    let t = toRawType(v)
    return baseClone[t](v)
  }
}