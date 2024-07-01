import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  clean: true,
  outDir: "dist",
  format: ["cjs", "esm"],
  minify: false,
  bundle: true,
  target: "node21",
  treeshake: "smallest",
});
