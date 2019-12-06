/*
 * @Author: Cabber
 * @Date: 2019-12-06 17:18:58
 * @Last Modified by: Cabber
 * @Last Modified time: 2019-12-06 17:21:52
 */

export function add (a, b) {
  let c
  let d
  let e
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  // eslint-disable-next-line
  return (e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e)
}

export function sub (a, b) {
  let c
  let d
  let e
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  // eslint-disable-next-line
  return (e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e)
}

export function mul (a, b) {
  let c = 0
  let d = a.toString()
  let e = b.toString()
  try {
    c += d.split('.')[1].length
  } catch (f) {}
  try {
    c += e.split('.')[1].length
  } catch (f) {}
  // eslint-disable-next-line
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
}

export function div (a, b) {
  let c
  let d
  let e = 0
  let f = 0
  try {
    e = a.toString().split('.')[1].length
  } catch (g) {}
  try {
    f = b.toString().split('.')[1].length
  } catch (g) {}
  // eslint-disable-next-line
  return (c = Number(a.toString().replace('.', '')), d = Number(b.toString().replace('.', '')), mul(c / d, Math.pow(10, f - e)))
}
