import globals from 'globals';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import { fixupPluginRules } from '@eslint/compat';
import prettierPlugin from 'eslint-plugin-prettier';
import reactCompiler from 'eslint-plugin-react-compiler';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

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

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  pluginJs.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], extends: [tseslint.configs.disableTypeChecked] },
  {
    ignores: [
      'dist',
      'eslint.config.mjs',
      'postcss.config.js',
      'prettier.config.mjs',
      'tailwind.config.js',
      'lint-staged.config.mjs',
    ],
  },
  { languageOptions: { ...languageOptions } },
  { plugins: { ...pluginsOptions } },
  {
    rules: {
      // React
      ...reactHooksPlugin.configs.recommended.rules,
      'react-compiler/react-compiler': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Typescript
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
  }
);

// [
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommendedTypeChecked,
//   { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
//   { ignores: ['dist', 'eslint.config.mjs'] },
//   { languageOptions: { ...languageOptions } },
//   { plugins: { ...pluginsOptions } },
//   {
//     rules: {
//       // React
//       ...reactHooksPlugin.configs.recommended.rules,
//       'react-compiler/react-compiler': 'error',
//       'react-hooks/exhaustive-deps': 'off',
//       'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
//       // Typescript
//       // '@typescript-eslint/no-unused-vars': 'off',
//       // '@typescript-eslint/consistent-type-exports': 'error',
//       // '@typescript-eslint/consistent-type-imports': 'error',
//       // Import Order
//       'import/order': [
//         'error',
//         {
//           groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
//           pathGroups: [
//             {
//               pattern: '{react,react-*,react-*/**}',
//               group: 'builtin',
//               position: 'before',
//             },
//           ],
//           pathGroupsExcludedImportTypes: ['{react,react-*,react-*/**}'],
//           'newlines-between': 'always',
//         },
//       ],
//       // Unused Imports
//       'unused-imports/no-unused-imports': 'error',
//       'unused-imports/no-unused-vars': [
//         'warn',
//         {
//           vars: 'all',
//           varsIgnorePattern: '^_',
//           args: 'after-used',
//           argsIgnorePattern: '^_',
//         },
//       ],
//     },
//   },
// ];
