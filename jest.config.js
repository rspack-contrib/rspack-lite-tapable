/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: './scripts/patch-node-env.cjs',
  testTimeout: process.env.CI ? 200000 : 30000,
  testMatch: ['<rootDir>/test/**/*.test.ts', '<rootDir>/test/**/*.test.js'],
  watchPathIgnorePatterns: ['<rootDir>/test/.*/dist'],
  extensionsToTreatAsEsm: ['.mts'],
};

module.exports = config;
