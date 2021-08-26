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

## INSTALL

```sh
npm install --save style.init.css
# OR
yarn add style.init.css
```

## USAGE

```JavaScript
// javascript
import 'style.init.css'
```

## EXAMPLE

> The style sheet contains some very commonly used but not easy to remember styles.

### The sentence is too long with ellipsis
```html
<p class="ellipsis">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam quos sapiente, vitae repellat assumenda debitis tempora ipsum accusantium quod ut, sequi eum qui. Accusantium minima nostrum aspernatur veritatis iusto.</p>
```
When the above line of text cannot be displayed completely in one line, he will replace the excess part with an ellipsis.

You can even use `ellipsis-1`, `ellipsis-2`, `ellipsis-3` and other class names to control the number of lines. When the text exceeds the specified number of lines, an ellipsis will be used at the end of the text to replace the undisplayable text. This range supports 1 to 10 rows. They correspond to the class names `ellipsis-1` and `ellipsis-10` respectively.

## DESCRIPTION
* This project adds some special browser compatible styles on the basis of [`normalize.css`](https://github.com/necolas/normalize.css), such as x5 kernel browsers.
* In addition, a little bit of beautification has been added to the style sheet, but not much, because `style.init.css` is used for projects that require a high degree of customization.
* Good suggestions can be fed back to me at [`Issues`](https://github.com/kiccer/style.init.css/issues), I'll be happy to adopt it.
* Demo page: [`Style.init.css Demo`](https://kiccer.github.io/style.init.css/docs/index.html)

## NOTICE

* Some styles are for experience only, Compatibility is not ideal, for example: `.ps-bg`, `.ant-line`, etc.
