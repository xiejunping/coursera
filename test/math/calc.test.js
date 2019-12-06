import { mul, add, div, sub } from '../../src/math/index'

test('计算0.1x0.2相乘', () => {
  expect(mul(0.1, 0.2)).toEqual(0.02)
})

test('计算19.9x100相乘', () => {
  expect(mul(19.9, 100)).toEqual(1990)
})

test('计算1111.1x100相乘', () => {
  expect(mul(1111.1, 100)).toEqual(111110)
})

test('计算1.1x100相乘', () => {
  expect(mul(1.1, 100)).toEqual(110)
})

test('计算0.1+0.2相加', () => {
  expect(add(0.1, 0.2)).toEqual(0.3)
})

test('计算0.2+0.1相减', () => {
  expect(sub(0.2, 0.1)).toEqual(0.1)
})

test('计算0.2%0.1相除', () => {
  expect(div(0.2, 0.1)).toEqual(2)
})
