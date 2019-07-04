
/**
 * 数组集合去重
 * @param {Array} arr 源数组
 * @param {String} key 唯一标识字段
 */
export function unique (arr, key) {
  return arr.filter((met, idx) => arr.findIndex(ret => ret[key] === met[key]) === idx)
}
