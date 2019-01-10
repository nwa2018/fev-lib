# Fev-lib
> 个人组件库

[组件一览表](docs/list.md)

[测试用例地址](https://nwa2018.github.io/fev-lib/mocha/dist/)
## 目录结构
```
fev-lib/
  doc/          // 文档聚合地址
  mocha/        // 测试用例页面入口
  packages/     // 统一的包管理
    lib/        // 某一个库
      src/      // 存放源码
      dev/      // 开发debug的代码
      test/     // 测试用例
      dist/     // 打包后的代码,umd规范
```
## 开始
#### 安装依赖
``` shell
git clone git@github.com:nwa2018/fev-lib.git
cd fev-lib
npm i
npm i @fev/fev@latest -g
```
#### 如何预览文档
``` shell
npm run doc
```
#### 模板生成
进到`packages`目录，拷贝别的已有项目或者运行以下命令：
``` shell
fev i lib        // 生成js组件库模板
fev i vue-lib    // 生成vue组件库模板
```

!> `packages`目录下的都是标准的`npm`项目，你完全可以使用自己的模板
#### debug与开发
进到对应组件库，比如`packages/load`

``` shell
npm run dev
```
#### 打包输出umd
进到对应组件库，比如`packages/load`

``` shell
npm run build
```

#### 测试用例
在组件库`test`目录下编写完测试用例后，根目录运行`npm run mocha`即可检查测试情况

测试用例编写后可以运行`mocha:build`准备发到线上

## 发布
1. 到`npm`包下运行`npm run build`输入`umd`格式代码

2. 提交代码

3. 根目录`npm run pub`(即`lerna publish`)

## 设计理念
组件库基于`monorepo`理念设计，详情请参见[monorepo 新浪潮](https://github.com/pigcan/blog/issues/3)

使用[lerna](https://github.com/lerna/lerna)进行版本管理

使用[fev](https://github.com/nwa2018/fev)进行`生成模板`，`打包`，`开发debug`，`编写demo`(TODO)

使用[mocha](https://mochajs.org/)进行单元测试(后续改造成使用[jest](https://jestjs.io/)，并将`jest`集成进`fev`中)

## 设计细节
`package.json`中使用`module`与`main`，充分发挥`webpack tree shaking`的作用，详情请参见xxxx

