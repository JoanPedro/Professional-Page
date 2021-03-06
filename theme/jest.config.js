module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
  ],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },

  transformIgnorePatterns: [
    '/node_modules/',
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  snapshotSerializers: [
    'jest-serializer-vue',
  ],

  testMatch: [
    '**/__tests__/**/*.spec.js',
  ],

  testURL: 'http://localhost/',

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],

  setupFiles: [
    '<rootDir>/tests/index.js',
  ],

  preset: '@vue/cli-plugin-unit-jest',
}
