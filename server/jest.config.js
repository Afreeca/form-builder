const jestConfig = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './src',
  modulePaths: ['<rootDir>', '<rootDir>/src'],
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
}

module.exports = jestConfig
