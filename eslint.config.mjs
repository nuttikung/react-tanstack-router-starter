import globals from 'globals';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import { fixupPluginRules } from '@eslint/compat';
import prettierPlugin from 'eslint-plugin-prettier';
import reactCompiler from 'eslint-plugin-react-compiler';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import oxlint from 'eslint-plugin-oxlint';
import tseslint from 'typescript-eslint';
import pluginRouter from '@tanstack/eslint-plugin-router';

const languageOptions = {
  ecmaVersion: 2020,
  globals: globals.browser,
  sourceType: 'module',
  parser: tsParser,
  parserOptions: {
    projectService: true,
    tsconfigRootDir: import.meta.dirname,
  },
};

const pluginsOptions = {
  import: importPlugin,
  'import/parsers': tsParser,
  'react-hooks': fixupPluginRules(reactHooksPlugin),
  'react-refresh': reactRefresh,
  'react-compiler': reactCompiler,
  'unused-imports': unusedImports,
  prettier: prettierPlugin,
};

const ignores = [
  'dist',
  'eslint.config.mjs',
  'postcss.config.js',
  'prettier.config.mjs',
  'tailwind.config.js',
  'lint-staged.config.js',
]

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], ignores },
  { plugins: { ...pluginsOptions } },
  { languageOptions: { ...languageOptions } },
  pluginJs.configs.recommended,
  ...pluginRouter.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  {
    rules: {
      // React Specific Rules (Keep in ESLint)
      ...reactHooksPlugin.configs.recommended.rules,
      'react-compiler/react-compiler': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // TypeScript Specific Rules (Keep in ESLint)
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      // Import Order
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            {
              pattern: '{react,react-*,react-*/**}',
              group: 'builtin',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['{react,react-*,react-*/**}'],
          'newlines-between': 'always',
        },
      ],
      // Unused Imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  oxlint.configs['flat/recommended'],
  oxlint.configs['flat/react'],
  oxlint.configs['flat/jsx-a11y']
]
