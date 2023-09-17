import { testSort, testSortRunTime } from './utils'

function bubbleSort(arr: number[]): number[] {
  const newArr = structuredClone(arr)
  for (let i = 0; i < newArr.length - 1; i++) {
    let swapper = false
    for (let j = 0; j < newArr.length - i - 1; j++) {
      let pre = newArr[j]
      let next = newArr[j + 1]
      if (pre > next) {
        // const temp = newArr[j]
        // newArr[j] = newArr[j + 1]
        // newArr[j + 1] = temp
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]]
        swapper = true
      }
    }
    if (!swapper) break
  }
  return newArr
}



testSort(bubbleSort)
testSortRunTime(bubbleSort)
export {}