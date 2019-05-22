# style.init.css

> 页面样式初始化

[![> 1%](https://img.shields.io/badge/browsers->1%25-5081D7.svg)](#) [![last 2 versions](https://img.shields.io/badge/versions-last%202-97CA00.svg)](#) [![not ie <= 8](https://img.shields.io/badge/IE-9+-0078D7.svg)](#)

**NPM**

```sh
npm install --save style.init.css
```

**Use**

```JavaScript
// JavaScript
import 'style.init.css'
```
```HTML
<!-- HTML Label -->
<link rel="stylesheet" href="./dist/style.init.min.css">
```

## 项目描述

* 项目使用 `postcss` 插件实现样式兼容，可供日常项目开发使用。
* 部分样式参考 [`normalize.css`](https://github.com/necolas/normalize.css)
* 有好的提议可以在 [`Issues`](https://github.com/kiccer/style.init.css/issues) 反馈给我，我会很乐意采纳。
* 演示页面：[`Style.init.css Demo`](https://kiccer.github.io/style.init.css/docs/index.html)

## 注意事项

* 项目中有部分样式仅供体验，兼容性一般，例：`.ps-bg`、`.ant-line`等。
* 下载项目后如果希望用标签形式引入css，可在 `dist` 目录下获取编译好的 `style.init.css` 或 `style.init.min.css` 文件。
* `style.init.min.css` 文件或许不是最新的，可以运行 `npm run build` 构建一个最新的压缩版本。
* 使用 `import "style.init.css"` 方法默认引入 `style.init.css` 非压缩版文件。
