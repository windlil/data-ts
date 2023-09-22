const arr = [1, 1, 2, 5, 4, 4]
// 1 2 5 4

function uniArr(arr = []) {
  return [...new Set(arr)]
}

function uniArr2(arr = []) {
  return arr.filter((value, index) => arr.indexOf(value) === index)
}

function uniArr3(arr = []) {
  return arr.reduce((pre, cur) => {
    if (pre.includes(cur)) {
      return pre
    } else {
      pre.push(cur)
      return pre
    }
  }, [])
} 

console.log(uniArr(arr))
console.log(uniArr2(arr))
console.log(uniArr3(arr))