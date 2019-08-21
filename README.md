<div align="center">
  <h1>style.init.css</h1>
  <p>Webpage style initialization.</p>
  <span align="center">
    <img src="https://img.shields.io/badge/browsers->1%25-5081D7.svg" alt="> 1%">
    <img src="https://img.shields.io/badge/versions-last%202-97CA00.svg" alt="last 2 versions">
    <img src="https://img.shields.io/badge/IE-9+-0078D7.svg" alt="not ie <= 8">
  </span>
</div>

<!-- [![> 1%](https://img.shields.io/badge/browsers->1%25-5081D7.svg)](#)
[![last 2 versions](https://img.shields.io/badge/versions-last%202-97CA00.svg)](#)
[![not ie <= 8](https://img.shields.io/badge/IE-9+-0078D7.svg)](#) -->

**NPM**

```sh
npm install --save style.init.css
```

**Use**

```JavaScript
// javascript
import 'style.init.css'
```
```HTML
<!-- html Label -->
<link rel="stylesheet" href="./dist/style.init.min.css" />
```

## Project description

* Uses `postcss` plug-in to achieve style compatibility.
* Some styles refer to [`normalize.css`](https://github.com/necolas/normalize.css)
* Good suggestions can be fed back to me at [`Issues`](https://github.com/kiccer/style.init.css/issues), I'll be happy to adopt it.
* Demo page: [`Style.init.css Demo`](https://kiccer.github.io/style.init.css/docs/index.html)

## Matters needing attention

* Some styles are for experience only, Compatibility is not ideal, for example: `.ps-bg`, `.ant-line`, etc.
* `style.init.min.css`file is not necessarily up-to-date, you can run `npm run build` to build the latest compressed version.
* `import 'style.init.css'` default reference `style.init.css`
