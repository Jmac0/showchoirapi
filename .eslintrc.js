module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/no-unused-prop-types': 'warn',
        'no-underscore-dangle': ['off', { allow: ['_'] }],
        'no-unused-vars': [
          1,
          { vars: 'all', args: 'all', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-unused-vars': ['warn'],

        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
