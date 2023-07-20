import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  banner: {
    js: `"use client"`,
  },
  // treeshake: true,
  splitting: true,
  entry: ["./**/*.tsx"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  outDir: "./dist",
  external: ["react"],
  ...options,
}));
