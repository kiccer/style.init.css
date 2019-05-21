module.exports = {
  loader: 'postcss-loader',
  plugins: [
    require('autoprefixer')({
      "browsers": [
        "defaults",
        "> 1%",
        "last 2 versions",
        "not ie <= 8"
      ]
    })
  ]
}
