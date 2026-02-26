import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*@(ts|tsx)', '!src/**/*.stories.tsx'],
  treeshake: true,
  splitting: true,         // Enables code splitting for better tree-shaking
  minify: true,
  clean: true,
  dts: true,
  sourcemap: true,
  format: 'esm',
  outExtension() {
    return {
      js: '.js',

    };
  },
  external: ['react', 'react-dom',],
  outDir: 'lib',
});
