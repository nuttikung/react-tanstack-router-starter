import path from 'path';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import type { UserConfig } from 'vite';

import { name } from './package.json';

const ReactCompilerConfig = {
  target: '19', // '17' | '18' | '19'
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // TODO: do we need env from node when build if not skip this.
  const _env = loadEnv(mode, process.cwd(), '');
  return {
    base: name,
    plugins: [
      TanStackRouterVite(),
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  } satisfies UserConfig;
});
