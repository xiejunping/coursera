import { trans } from '../../src/array/index'

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const b = [1, 0, 2, 3, 4, 5, 6, 7, 8]
const c = [1, 0, 2, 3, 4, 5, 6, 8, 7]

test('数组0元素向下移动', () => {
  expect(trans(a, 0, 'next')).toEqual(b)
})

test('数组8元素向上移动', () => {
  expect(trans(a, 8, 'prev')).toEqual(c)
})

test('数组0元素向上移动', () => {
  expect(trans(a, 0, 'prev')).toEqual(a)
})

test('数组8元素向下移动', () => {
  expect(trans(a, 8, 'next')).toEqual(a)
})
