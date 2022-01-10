## elfin commander

elfin命令行工具

## 安装
```js
npm install @elfiner/commander -g
```

## 工程管理方案
不同于Lerna将所有的依赖包代码放入同一工程，elfincmd思路是将依赖包当做单独的工程，多工程之间进行协作

### multirepo管理（默认）
1. 可执行命令列表
```bash
# multirepo工程配置文件初始化
elfincmd external init

# multirepo相关工程克隆
elfincmd external clone

# multirepo相关工程依赖加载
elfincmd external install
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

### elfincmd hooks命令
创建 .huskyrc 文件，进行hooks管理<br/>
优先级：package.json husky > .huskyrc > .huskyrc.json...

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
npm link // npm链接本地项目

npm run elfin.init // 初始化项目

elfincmd -h // 查看帮助信息

npm publish --access=public // 发布项目

// 因taobao镜像源导致发布失败，可以先切换为npmjs源
npm config set registry https://registry.npmjs.org/
// 切换回
npm config set http://registry.npm.taobao.org/
```

## 计划
1. 参考Vant-cli使用TS改造 done
2. globby多文件模板文件构建
3. hooks_checkout切换分支
4. hooks_pull更新代码