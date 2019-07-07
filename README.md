# coursera
前端算法，函数库，开发单元测试

### 函数目录 Src

* [x] sum 加法 用来测试项目是否成功

#### Array 

* [x] unique 去重

### 单元测试 Test

#### 测试用例

* [x] unique 数组去重
* [x] disorder 随机乱序 
* [x] trans 数组元素移动 
* [x] sets 快速构造数组 

## unique 数组去重

```js
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
```
## disorder 随机乱序 
```js
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
```

## trans 数组元素移动 
```js
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
```

## sets 快速构造数组 
```js
const a = [0, 1, 2, 3, 4, 5]
const b = ['0', '0', '0', '0', '0']

test('生成0-5的数组', () => {
  expect(sets(6)).toEqual(a)
})

test('生成5个0的数组', () => {
  expect(sets(5, '0')).toEqual(b)
})
```

# 如何使用

* 先安装依赖`npm install`命令 && 如果是用`yarn`的命令是`yarn install`
* 再执行`npm run test`跑`Test`所有的测试用例 && 同上`yarn test`
* 执行结果是这样的
![前端单元测试用例](https://pic1.zhimg.com/50/v2-67583365ebd773ebe913989fd66f683f_r.jpg)

以上图是我的`yarn`环境生成的，如果用`npm`可能图会不一样

> 欢迎前端开发一起维护，贡献代码。star 一下也是可以的 

