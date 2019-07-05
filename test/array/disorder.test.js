import { disorder } from '../../src/array/index'

const data = [
  { id: 1, name: 'westom' },
  { id: 2, name: 'lucy' },
  { id: 3, name: 'lily' },
  { id: 4, name: 'rose' },
  { id: 5, name: 'jim' },
  { id: 6, name: 'cabber' },
  { id: 7, name: 'kim' },
  { id: 8, name: 'jean' }
]

test('Array is original length', () => {
  expect(disorder(data)).toHaveLength(8)
})

test('Array original', () => {
  expect(disorder(data)).toEqual(data)
})
