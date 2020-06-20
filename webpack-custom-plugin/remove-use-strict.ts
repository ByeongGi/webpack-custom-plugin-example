import { Configuration, Plugin, Compiler, compilation } from "webpack";

export class RemoveUseStrictPlugin implements Plugin {
  apply(compiler: Compiler) {
    // emit
    // Executed right before emitting assets to output dir.
    compiler.hooks.emit.tap(
      "RemoveConsolePlugin",
      (compilation: compilation.Compilation) => {
        compilation.chunks.forEach((chunk) => {
          chunk.files.forEach((fileName: string) => {
            const rawSource: any = compilation.assets[fileName];
            const rSource = rawSource.source().replace(/{"use strict"};/g, "");
            rawSource.source = () => rSource;
            rawSource.size = () => rSource.length;
          });
        });
      }
    );
  }
}
