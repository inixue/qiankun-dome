const { name } = require('./package');

module.exports = {
  // devServer: {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   },
  // },
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port: 7101,
    overlay: {
        warnings: false,
        errors: true,
    },
    // 跨域
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
},
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',// 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};