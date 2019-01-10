export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export function memoize (func, resolver) {
  if (typeof func !== 'function' || (resolver != null && typeof resolver !== 'function')) {
    throw new TypeError('The second parameter expected a function')
  }
  const memoized = function (...args) {
    const key = args.map(String).join('\x1d')
    const cache = memoized.cache

    if (cache.hasOwnProperty(key)) return cache[key]
    const result = func.apply(this, args)
    cache[key] = result
    return result
  }
  memoized.cache = {}
  return memoized
}
