import * as path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';


const config: Configuration = {
  mode: "production",
  entry: "./main.ts",
  // devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "css"],
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'assets/index.html'
  })],
};

export default config;


