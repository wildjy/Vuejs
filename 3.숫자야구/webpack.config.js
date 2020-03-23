const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path'); //node module 경로 설정
//webpacking 기본 4구성[entry:{}, module:{}, plugins:[], output:{}], script를 통합관리 하기 위해
module.exports = {
  mode : 'development',
  devtool : 'eval',
  resolve : {
    extensions : ['.js', '.vue'],
  },
  entry : { // 대표 js파일
    app: path.join(__dirname, 'main.js'),
  },
  module : { //webpack의 핵심
    rules : [{
      test : /\.vue$/,
      use : 'vue-loader',
    }],
  },
  plugins : [
    new VueLoaderPlugin(),
  ],
  output : {
    filename : '[name].js', //app.js === [name].js
    path : path.join(__dirname, 'dist'),
  },
};