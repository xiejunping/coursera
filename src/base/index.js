
/**
 * 防抖函数
 * @param {Function} event 执行事件
 * @param {Number} time 延迟时间
 */
export function debounce(event, time) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      event.apply(this, args)
    }, time)
  }
}

/**
 * 节流函数
 * @param {Function} event 执行事件
 * @param {Number} time 延迟时间
 */
export function throttle (event, time) {
  let pre = 0
  let timer = null
  return function (...args) {
    if (Date.now() - pre > time) {
      clearTimeout(timer)
      timer = null
      pre = Date.now()
      event.apply(this, args)
    } else if (!timer) {
      timer = setTimeout(() => {
        event.apply(this. args)
      }, time)
    }
  }
}
