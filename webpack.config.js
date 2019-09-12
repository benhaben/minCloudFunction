module.exports = {
  output: {
    path: __dirname,
    filename: "index.js",
    library: "exports.main",
    libraryTarget: "assign"
  },
  target: "node",
  module: {
    rules: [
      // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/transform-runtime"]
          }
        }
      }
    ]
  }
};
