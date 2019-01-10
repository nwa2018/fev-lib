module.exports = api => {
  return {
    templateFolder: './src/assets/html',
    eslintConfig: {
      globals: {
        describe: true,
        it: true,
        expect: true,
        mocha: true
      }
    }
  }
}
