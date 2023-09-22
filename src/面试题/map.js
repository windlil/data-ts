Array.prototype._map = function(fn) {
  if (typeof fn !==  'function') throw new Error(`${fn} is not a function`)
  const _this = this
  const length = _this.length
  const newArr = []
  for (let i = 0; i < length; i++) {
    newArr.push(fn(_this[i], i, _this))
  }
  return newArr
}

let arr = [1, 2, 3, 4, 5]
arr = arr._map((value, index, arr) => {
  return value * 2
})
console.log(arr)
