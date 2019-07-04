# coursera
前端算法，函数库，开发单元测试

### 函数目录 Src

* [x] sum 加法 用来测试项目是否成功

#### Array 

* [x] unique 去重

### 单元测试 Test

#### 测试用例

* [x] unique 

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

# 如何使用

* 先安装依赖`npm install`命令
* 再执行`npm run test`跑`Test`所有的测试用例
* 执行结果是这样的
![前端单元测试用例](https://pic1.zhimg.com/50/v2-67583365ebd773ebe913989fd66f683f_r.jpg)

> 欢迎前端开发一起维护，贡献代码。star 一下也是可以的 

