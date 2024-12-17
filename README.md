## 项目初始化流程
* **首先选择使用什么脚手架**
  * 这个脚手架可以自己配置或者说直接使用官方的
* **然后进行项目配置**
  * 配置整个项目的 icon/svg 图标配置
    * 就是在我们的根 html 中进行配置即可
  * 配置项目标题
  * 配置项目的 js/tsconfig.json，从而实现 vscode 的提示提高
    * 我 webstorm 用户，打死不配置，哈哈哈，让vscode 用户难受
* **CSS 样式的重置**
  * reset.css 自动逸重置样式
  * common.css 自定义设置的公共样式
  * normalize.css  github开源直接下载或者 cv 即可
  * 并且使用在 main.js 中进行导入生效

![](./public/item01.png)


## 项目业务逻辑分层搭建
* **assets** 存放的是我们的整个项目的静态资源
  * css/img/font
* **components** 存放的是公共开发使用的组件
  * common 是多个项目都需要进行使用到的组件
  * content 是当前项目需要使用的公共组件
* **hooks**
  * 就是提取的是我们的公共的 JS/TS 代码逻辑
* **mock**
  * 前端开发人员自己手动模拟的数据
  * 用来解决前后端分离，但是前端只能
  * 等待后端接口开发好的时间等待的缺点
* **router**
  * 配置的是项目的路由，实现单页面的开发
* **service**
  * 存放网络请求代码
* **store**
  * 开发的是项目的状态管理库
* **utils**
  * 抽取的整个项目公共使用的一些工具
* **views**
  * 就是开发的是我们每个页面的详情信息
  * 也就是我们常说的路由组件

![](./public/item02.png)

## 推荐搭建移动端 vant-ui 组件库的使用
* Vant 的使用
  * `npm install vant`
  * 这个就是一个组件库
    * 基本上所有的组件库都是可以实现我们的全局引入以及按需引入的
    * 以及还可以实现自动引入该组件库
  * 该组件库是一个用来打造我们的一个移动端项目的时候使用的一个组件库，专用于 vue 框架开发的
* [vant 组件库的官网](https://vant-ui.github.io/vant/#/zh-CN)
  * `npm i vant`
  * `npm i @vant/auto-import-resolver unplugin-vue-components unplugin-auto-import -D`
  * 下载所需要的插件
  * 同时配置我们的 vite.config.js
    * 不同的环境之下，vant 的配置官网还是十分清晰的，自行配置即可
    * 搭建属于自己的移动端应用吧