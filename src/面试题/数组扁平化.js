const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]]

// console.log(arr.flat(10))

function myflap(arr, res) {
  console.log(arr)
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      myflap(item, res)
    } else {
      res.push(item)
    }
  })

  return res
}
console.log(myflap(arr, []))

// console.log(myflap(arr, []))