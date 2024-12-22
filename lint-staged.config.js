export default {
  '*.{js,jsx,ts,tsx}': (stagedFiles) => [
    `eslint ${stagedFiles.join(' ')} --fix --quiet --cache`,
    `prettier --write ${stagedFiles.join(' ')}`,
  ],
  'package.json': 'sort-package-json',
};
