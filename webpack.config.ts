import * as path from "path";
import { Configuration } from "webpack";
import { RemoveUseStrictPlugin } from "./webpack-custom-plugin";



const config: Configuration = {
  mode: "production",
  entry: "./main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foo.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [new RemoveUseStrictPlugin()],
};

export default config;


