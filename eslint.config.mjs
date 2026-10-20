import nx from '@nx/eslint-plugin';

export default [
  {
    files: ['**/*.json'],
    // Override or add rules here
    rules: {},
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            // Applications can depend only on UI libraries
            {
              sourceTag: 'type:app',
              onlyDependOnLibsWithTags: ['type:ui'],
            },
            // shell can use shared-ui only
            {
              sourceTag: 'scope:shell',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            // flights can use shared-ui only
            {
              sourceTag: 'scope:flights',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            // hotels can use shared-ui only
            {
              sourceTag: 'scope:hotels',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            // booking can use shared-ui only
            {
              sourceTag: 'scope:booking',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            // admin can use admin-ui only
            {
              sourceTag: 'scope:admin',
              onlyDependOnLibsWithTags: ['scope:admin'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
