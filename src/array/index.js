
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
    // eslint-disable-next-line
    [arr[current], arr[random]] = [arr[random], arr[current]]
    current--
  }
  return arr
}

/**
 * 数组元素移动位置
 * @param {Array} arr 源数组
 * @param {Number} index 原位置
 * @param {String} tran 方向
 */
export function trans (arr, index, tran) {
  const len = arr.length
  const [s] = arr.splice(index, 1)
  if (tran === 'prev') {
    const insert = index - 1
    arr.splice(insert < 0 ? 0 : insert, 0, s)
  } else if (tran === 'next') {
    const insert = index + 1
    arr.splice(insert > len ? len : insert, 0, s)
  }
  return arr
}

/**
 * 构建一个自然数数组
 * @param {Number} len 数组的长度
 */
export function sets (len, fn) {
  return Array.from(Array(len)).map((ret, id) => fn || id)
}
