const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const devMode = process.env.NODE_ENV !== 'production'

let webpackConfig = {
  entry: {
    'style.init': './src/style.init.scss'
  },
  output: {
    // filename: './[name].css',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].min.css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

!devMode && webpackConfig.plugins.push(
  new OptimizeCSSAssetsPlugin({
    // 默认是全部的CSS都压缩，该字段可以指定某些要处理的文件
    assetNameRegExp: /\.(sa|sc|c)ss$/g,
    // 指定一个优化css的处理器，默认cssnano
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
      preset: [ 'default', {
        discardComments: { removeAll: true }, // 对注释的处理
        normalizeUnicode: false // 建议false,否则在使用unicode-range的时候会产生乱码
      }]
    },
    canPrint: true // 是否打印编译过程中的日志
  })
)

module.exports = webpackConfig
