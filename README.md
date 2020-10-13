## elfin commander

elfin命令行工具

### multirepo管理
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