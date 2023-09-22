const arr = [0, 1, 2]

const proxyArr = new Proxy(arr, {
  get(target, key) {
    if (key >= 0) return target[key]
    return target[target.length + Number(key)]
  }
})

console.log(proxyArr[-1])