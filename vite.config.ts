import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import type { UserConfig } from 'vite';
import oxlintPlugin from 'vite-plugin-oxlint';
import eslint from 'vite-plugin-eslint2';

import { name } from './package.json';

const ReactCompilerConfig = {
  target: '19', // '17' | '18' | '19'
};

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development';
  // ----------------------------------------------------------------------
  const esbuild: UserConfig['esbuild'] = !isDevelopment
    ? {
        drop: ['console', 'debugger'],
      }
    : {};
  // ----------------------------------------------------------------------
  const plugins: UserConfig['plugins'] = [
    TanStackRouterVite(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
    oxlintPlugin(),
    eslint(),
  ];

  // ----------------------------------------------------------------------
  return {
    base: `/${name}`,
    esbuild,
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  } satisfies UserConfig;
});
