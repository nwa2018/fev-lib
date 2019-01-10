import {
  sleep,
  memoize
} from '../src'

describe('TEST: UTILS COLLECTION', _ => {
  describe('TEST: sleep - 睡眠一段时间', _ => {
    it('0.1秒后打印起床了！', async done => {
      let now = new Date().getTime()
      await sleep(100)
      console.log('起床了！')
      const timeout = Math.round((new Date().getTime() - now) / 100)
      expect(timeout).to.be.equal(1)
      done()
    })
  })

  describe('TEST: memoize - 缓存函数', _ => {
    const aaa = memoize(_ => new Promise(resolve => {
      setTimeout(_ => resolve(1), 100)
    }))
    it('aaa函数0.1秒后返回，使用了缓存函数第二次调用的时候立马返回', async done => {
      let now = new Date().getTime()
      await aaa()
      let timeout = Math.round((new Date().getTime() - now) / 100)
      expect(timeout).to.be.eql(1)
      now = new Date().getTime()
      await aaa()
      timeout = Math.round((new Date().getTime() - now) / 100)
      expect(timeout).to.be.eql(0)
      done()
    })
  })
})
