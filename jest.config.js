module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
  ],
  rootDir: './test',
  testMatch: [
    '<rootDir>/**/*.test.js',
  ],
  moduleNameMapper: {
    "^src/(.+)$": "<rootDir>/../src/$1",
  },
}
