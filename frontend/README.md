# frontend

## Project setup
安装相关依赖
```
npm install
```

### Compiles and hot-reloads for development
启动服务器
```
npm run serve
```

### Compiles and minifies for production
编译
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 文档说明
 frontend目录规范

---

    frontend >
    |- node_modules                               # npm 加载的项目依赖模块
    |- public	                              # 静态文件夹                   
         |- index.htmll                           # 首页入口文件，你可以添加一些 meta 信息或统计代码啥的。
    |- src                                        # 这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：
         |- components                            # 目录里面放了一个组件文件
             |- container.vue                     # 主页面组件
             |- ContainerTable.vue                # 主页面表格组件
             |- content.vue                       # 论坛页面内容组件
             |- login.vue                         # 登录页面组件
             |- NavMenu.vue                       # 导航组件
             |- SignUp.vue                        # 注册页面组件
         |- App.vue                               # 项目入口文件
         |- main.js                               # 项目的核心文件
         |- router.js                             # 路由的设置文件
    |- babel.config.js                            # babel语法编译
    |- package.json                               # 项目配置文件。
    |- package-lock.json                          # 记录当前状态下实际安装的各个npm package的具体来源和版本号
    |- README.md                                  # 项目的说明文档
