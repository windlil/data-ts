import { testSort, testSortRunTime } from './utils'

function insertionSort(initArr: number[]) {
  const arr = structuredClone(initArr)
  const n = arr.length
  for (let i = 1; i < n; i++) {
    const current = arr[i]
    let j = i - 1
    while(arr[j] > current && j >=0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
  return arr
}

testSort(insertionSort)
testSortRunTime(insertionSort)