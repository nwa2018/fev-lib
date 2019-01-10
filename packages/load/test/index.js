import { asyncLoadJs } from '../src'

describe('TEST: LOAD UTILS', _ => {
  console.log(1)
  describe('TEST: asyncLoadJs - 异步加载JS', _ => {
    console.log('it', it)
    it('load cdn jquery', async done => {
      console.log(1111)
      await asyncLoadJs('https://cdn.rawgit.com/jquery/jquery/2.1.4/dist/jquery.min.js')
      done()
    })
  })
})
