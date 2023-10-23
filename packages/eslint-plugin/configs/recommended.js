module.exports = {
  plugins: ['eslint-plugin-encode'],
  rules: {
    'eslint-plugin-encode/no-http-url': 'warn',
    'eslint-plugin-encode/no-secret-info': 'error',
  },
};
