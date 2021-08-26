module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        'standard'
    ],
    plugins: [
        'html'
    ],
    settings: {
        'html/indent': 0 // .html 的 <script> 中代码起始缩进
    },
    parserOptions: {
        ecmaVersion: 12
    },
    rules: {
        indent: ['error', 4]
    }
}
