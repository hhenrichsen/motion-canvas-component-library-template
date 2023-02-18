import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import externals from 'rollup-plugin-node-externals';
import terser from '@rollup/plugin-terser';

// eslint-disable-next-line no-undef
const minify = process.env.MINIFY == '1';

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/bundle.js',
      format: 'umd',
      name: 'MyFirstMotionCanvasLibrary',
    },
    plugins: [externals(), typescript(), minify && terser()],
    external: [/^@motion-canvas\/core/, /^@motion-canvas\/2d/],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.js',
      format: 'es',
    },
    plugins: [externals(), typescript(), minify && terser()],
    external: [/^@motion-canvas\/core/, /^@motion-canvas\/2d/],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];

export default config;
