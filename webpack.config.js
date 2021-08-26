const path = require('path')
const pathJoin = p => path.join(__dirname, p)
// const pathResolve = p => path.resolve(__dirname, p)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, argv) => {
    const config = {
        development: {
            plugins: [
                new MiniCssExtractPlugin({
                    filename: 'style.init.css'
                })
                // new OptimizeCssAssetsPlugin({
                //     assetNameRegExp: /\.(sa|sc|c)ss$/g,
                //     // cssProcessor: require('cssnano'),
                //     cssProcessorPluginOptions: {
                //         // preset: [
                //         //     // 'default',
                //         //     // {
                //         //     //     discardComments: { removeAll: true }
                //         //     // }
                //         // ]
                //     },
                //     canPrint: true
                // })
            ]
        },

        production: {
            plugins: [
                new MiniCssExtractPlugin({
                    filename: 'style.init.min.css'
                }),
                new OptimizeCssAssetsPlugin({
                    assetNameRegExp: /\.(sa|sc|c)ss$/g,
                    // cssProcessor: require('cssnano'),
                    cssProcessorPluginOptions: {
                        preset: [
                            'default',
                            {
                                discardComments: { removeAll: true }
                            }
                        ]
                    },
                    canPrint: true
                })
            ]
        }
    }[argv.mode]

    return {
        // mode: 'none',
        entry: {
            'style.init': pathJoin('src/index.js')
        },
        output: {
            path: pathJoin('build')
        },
        // watch: true,
        watchOptions: {
            ignored: [
                '**/node_modules',
                'build',
                '.vscode',
                '.history'
            ]
        },
        optimization: {
            minimizer: [
                // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
                // `...`,
                new CssMinimizerPlugin()
            ]
        },
        plugins: [
            ...config.plugins
            // new CleanWebpackPlugin(),
            // new MiniCssExtractPlugin({
            //     filename: 'style.init.css'
            // }),
            // new OptimizeCssAssetsPlugin({
            //     assetNameRegExp: /\.(sa|sc|c)ss$/g,
            //     // cssProcessor: require('cssnano'),
            //     cssProcessorPluginOptions: {
            //         preset: [
            //             'default',
            //             {
            //                 discardComments: { removeAll: true }
            //             }
            //         ]
            //     },
            //     canPrint: true
            // })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'postcss-preset-env',
                                            {
                                                // Options
                                            }
                                        ]
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        // Creates `style` nodes from JS strings
                        // 'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS,
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'postcss-preset-env',
                                            {
                                                // Options
                                            }
                                        ]
                                    ]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        }
    }
}
