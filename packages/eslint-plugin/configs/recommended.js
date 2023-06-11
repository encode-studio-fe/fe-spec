module.exports = {
  plugins: ['encode-fe-eslint-plugin'],
  rules: {
    'encode-fe-eslint-plugin/no-http-url': 'warn',
    'encode-fe-eslint-plugin/no-secret-info': 'error',
  },
};
