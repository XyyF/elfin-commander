## elfin commander

elfin命令行工具

## 安装
```js
npm install elfincmd -g
```

## 工程管理方案
不同于Lerna将所有的依赖包代码放入同一工程，elfincmd思路是将依赖包当做单独的工程，多工程之间进行协作

### multirepo管理
1. 可执行命令列表
```bash
# multirepo工程配置文件初始化
elfincmd external init --multi

# multirepo相关工程克隆
elfincmd external clone --multi

# multirepo相关工程依赖加载
elfincmd external install --multi
```

2. 工程结构总览
```bash
- 主工程
    - .elfin.external.js

=> elfincmd初始化

- 主工程
    - .elfin.external.js
- 依赖工程1
- 依赖工程2
```

### monorepo管理
1. 可执行命令列表
```bash
# monorepo工程配置文件初始化
elfincmd external init --mono

# monorepo相关工程克隆
elfincmd external clone --mono

# monorepo相关工程依赖加载
elfincmd external install --mono
```

2. 工程结构总览
```bash
- 主工程
    - .elfin.external.js

=> elfincmd初始化

- 主工程
    - externals
        - 依赖工程1
        - 依赖工程2
    - .elfin.external.js
```

## hooks命令
监听git交互行为，做出相应的patch逻辑

### commit-msg命令
```bash
elfincmd hooks commit-msg
```
配置在package.json中，自动化检测commit msg
```js
npm install husky --save-dev

// package.json
"husky": {
    "hooks": {
        "commit-msg": "elfincmd hooks commit-msg"
    }
},
```

## docs命令
用以查看常用的文档信息

## pc命令 (Personalized-customization
杂散的个人命令，通过控制台交互式的方式来完成相应的功能

```bash
日历ics 生成ics日历文件，可以快速的在系统日历中新建日程 
```

## 参与研发
```js
npm link

npm run elfin.init

elfincmd -h // 查看帮助信息
```

## 计划
1. 参考Vant-cli使用TS改造
2. globby多文件模板文件构建