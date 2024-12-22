const config = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --config ./prettier.config.mjs --write'],
  '**/*.{css,scss,md,html,json}': ['prettier --config ./prettier.config.mjs --write'],
  'package.json': 'sort-package-json',
  '**/*.ts?(x)': ['tsc --noEmit'],
};

export default config;
