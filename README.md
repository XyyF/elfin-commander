## elfin commander

elfin命令行工具

## multirepo管理
```bash
# multirepo工程配置文件初始化
elfincmd external init

# multirepo相关工程克隆
elfincmd external clone

# multirepo相关工程依赖加载
elfincmd external install
```

目录展示
```js
- 主工程
    - .elfin.external.js

=> elfincmd初始化

- 主工程
    - .elfin.external.js
- 依赖工程1
- 依赖工程2
- ...
```

## hooks命令

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


// TODO 参考Vant-cli使用TS改造
// TODO globby多文件模板文件构建