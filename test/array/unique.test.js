import { unique } from '../../src/array/index'

const uniqueArr = [
  { id: 1, name: 'lily' },
  { id: 2, name: 'lucy' },
  { id: 3, name: 'kim' },
  { id: 4, name: 'westom' }
]
const data = [
  { id: 4, name: 'westom' },
  { id: 2, name: 'lucy' },
  { id: 1, name: 'lily' },
  { id: 1, name: 'lily' },
  { id: 2, name: 'lucy' },
  { id: 1, name: 'lily' },
  { id: 3, name: 'kim' },
  { id: 1, name: 'lily' }
]

test('array unique', () => {
  expect(unique(data, 'id').sort((a, b) => a.id - b.id)).toEqual(uniqueArr)
})
