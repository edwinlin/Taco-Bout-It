const path = require('path')
console.log("HELLO", process.env.NODE_ENV)

module.exports = {
  entry: "./src/index.js",
  mode: process.env.NODE_ENV,
  output: {
      filename: "./main.js",
      path: path.resolve(__dirname,"build"),

  },
  devServer: {
    publicPath: "/build/",
    compress: true,
    port: 8080,
    // watchContentBase: true,
    progress: true,
    // proxy: {
    //   '/api': 'http://localhost:3000'
    // },
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }

    ]
  }

}