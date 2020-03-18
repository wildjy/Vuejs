module.exports = {
  //webpacking 기본 4구성, script를 통합관리 하기 위해
  entry : {
    app: './main.js',
  },
  module : { //webpack의 핵심
    rules : [{

    }],
  },
  plugins : [],
  output : {
    filename : '[name].js', //app.js === [name].js
    path : './dist', //경로
  },
};