export const asyncLoadJs = src => new Promise((resolve, reject) => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  if (script.readyState) {
    script.onreadystatechange = () => {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null
        resolve()
      }
    }
  } else {
    script.onload = () => resolve()
  }
  script.onerror = () => reject(new Error('load fail'))
  script.src = src
  document.body.appendChild(script)
})
