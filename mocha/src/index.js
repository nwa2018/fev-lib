['load', 'utils']
  .map(mod => require(`../../packages/${mod}/test/index.js`))
// require('../../packages/load/test/')

mocha.run()
