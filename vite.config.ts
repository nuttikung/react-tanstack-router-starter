import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import type { UserConfig } from 'vite';

import { name } from './package.json';

const ReactCompilerConfig = {
  target: '19', // '17' | '18' | '19'
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // ----------------------------------------------------------------------
  const isDevelopment = mode === 'development';
  const esbuild: UserConfig['esbuild'] = !isDevelopment
    ? {
        drop: ['console', 'debugger'],
      }
    : {};
  // ----------------------------------------------------------------------
  return {
    base: name,
    esbuild,
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
