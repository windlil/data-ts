function bubbleSort(arr: number[]): number[] {
  const newArr = structuredClone(arr)
  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      let pre = newArr[j]
      let next = newArr[j + 1]
      if (pre > next) {
        // const temp = newArr[j]
        // newArr[j] = newArr[j + 1]
        // newArr[j + 1] = temp
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]]
      }
    }
  }
  return newArr
}

const initArr = [2, 8, 10, 5, 7, 6, 1]
const newArr = bubbleSort(initArr)

console.log(initArr)
console.log(newArr)
export {}