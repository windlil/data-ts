function isSymmetryNum(arr = []) {
  for (let i = 10; i < 10000; i++) {
    const str = i.toString()
    const reverseStr = str.split("").reverse().join("")
    if (str === reverseStr) arr.push(i)
  }
  return arr
}

console.log(isSymmetryNum())