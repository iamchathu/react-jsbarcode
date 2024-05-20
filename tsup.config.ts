import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*@(ts|tsx)', '!src/**/*.stories.tsx'],
  treeshake: true,
  sourcemap: 'inline',
  minify: true,
  clean: true,
  dts: true,
  splitting: false,
  format: ['cjs', 'esm'],
  injectStyle: false,
  outDir: 'lib',
});
