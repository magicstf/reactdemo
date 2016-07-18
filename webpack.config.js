var webpack = require('webpack');
  module.exports = {
      entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
        "./app.js"
      ],
      output: {
          path: './build',
          filename: "bundle.js"
     },
     module: {
         loaders: [{
                     test: /\.js$/,
                     exclude: /node_modules/,
                     loader: 'babel',
                     query: {
                         presets: ['react']
                     }
                  },
         ]
     },
     resolve:{
         extensions:['','.js','.json']
     },
     plugins: [
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin()
     ],
     devServer: {
        hot:true,
        inline:true
     }
 };