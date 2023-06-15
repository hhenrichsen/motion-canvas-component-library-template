import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';
import ffmpeg from '@motion-canvas/ffmpeg';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    motionCanvas({
      project: ['./test/src/project.ts'],
    }),
    ffmpeg(),
  ],
  resolve: {
    alias: {
      '@motion-canvas/core': path.resolve('./node_modules/@motion-canvas/core'),
      '@motion-canvas/2d': path.resolve('./node_modules/@motion-canvas/2d'),
    },
  },
});
