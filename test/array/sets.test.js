import { sets } from '../../src/array/index'

const a = [0, 1, 2, 3, 4, 5]
const b = ['0', '0', '0', '0', '0']

test('生成0-5的数组', () => {
  expect(sets(6)).toEqual(a)
})

test('生成5个0的数组', () => {
  expect(sets(5, '0')).toEqual(b)
})
