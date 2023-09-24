const arr = [11, 42,23,4,5,6, 4, 5, 6, 11,23, 42, 56, 78, 90]

// 15个数字分成三部分，每一部分的和尽量相等
function oneToThreeArr(arr = []) {
  const result = [[], [], []]
  for (const item of result) {
    item.push(arr.sort((a,b) => b - a).splice(0, 1)[0])
  }
  while (arr.length !== 0) {
    arr.sort((a,b) => b - a)
    const max = arr.splice(0, 1)[0]
    const min = getMin(result)
    min.push(max)
  }
  return result
}

function getMin(arr) {
  const result = []
  for (const item of arr) {
    let sum = 0
    for (const child_item of item) {
      sum += child_item
    }
    result.push({
      sum,
      index: arr.indexOf(item)
    })
  }
  return arr[result.sort((a, b) => a.sum - b.sum)[0].index]
}

console.log(oneToThreeArr(arr))