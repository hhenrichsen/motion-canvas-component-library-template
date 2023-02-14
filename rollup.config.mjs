import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import jsx from 'acorn-jsx';

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/bundle.js',
      format: 'umd',
      name: 'MyFirstMotionCanvasLibrary',
    },
    acornInjectPlugins: [jsx()],
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.js',
      format: 'es',
    },
    acornInjectPlugins: [jsx()],
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.d.ts',
      format: 'es',
    },
    acornInjectPlugins: [jsx()],
    plugins: [dts()],
  },
];

export default config;
