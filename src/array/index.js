
/**
 * 数组集合去重
 * @param {Array} arr 源数组
 * @param {String} key 唯一标识字段
 */
export function unique (arr, key) {
  return arr.filter((met, idx) => arr.findIndex(ret => ret[key] === met[key]) === idx)
}

/**
 * 数组乱序-洗牌算法
 * @param {Array} arr 源数组
 */
export function disorder (arr) {
  const { len } = arr
  let current = len - 1
  let random
  while (current > -1) {
    random = Math.floor(len * Math.random())
    [arr[current], arr[random]] = [arr[random], arr[current]]
    current--
  }
  return arr
}
