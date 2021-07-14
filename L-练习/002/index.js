// ## js-防抖、js-节流   --- 002

/**
 * 题目分析&解题思路：
 * 1、防抖定义：在指定时间内的多次触发仅会执行一次，执行成功了后，重置start-time
 */

function debounce(fn, time, immediate) {
  let timer;
  return (...params) => {
    if (timer) clearTimeout(timer);
    if (immediate) {
      let nowCall = !timer;
      timer = setTimeout(() => {
        timer = null
      }, time)
      if (nowCall) fn.call(this, params)
    } else {
      timer = setTimeout(() => {
        fn.call(this, params)
      }, time)
    }
  }
  // if (immediately) {
  //   return (...params) => {
  //     let n = !timer;
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       timer = null
  //     }, time)
  //     if (n) fn.call(this, params)
  //   }
  // }
  // return (...params) => {
  //   if (timer) clearTimeout(timer);
  //   timer = setTimeout(() => {
  //     fn.call(this, params)
  //   }, time)
  // }
}

function throttle(fn, time) {
  let previous = 0;
  return (...params) => {
    let now = Date.now()
    if (now - previous >= time) {
      fn.call(this, params)
      previous = now
    }
  }
}