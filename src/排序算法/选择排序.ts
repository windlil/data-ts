import { testSort, testSortRunTime } from './utils'

// O(n^2) 相对于冒泡排序效率更高，不需要大量的交换操作，最大交换次数为n - 1

function selectionSort(arr: number[]): number[] {
  const newArr: number[] = structuredClone(arr)

  for (let i = 0; i < newArr.length - 1; i++) {
    let minIndex = i
    let j = i + 1
    // while (j < newArr.length) {
    //   if(min > arr[j]) {
    //     const temp = newArr[i]
    //     newArr[i] = newArr[j]
    //     newArr[j] = temp
    //   }
    //   j++
    // }
    for (j; j < newArr.length; j++) {
      if (newArr[minIndex] > newArr[j]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      swap(newArr, minIndex, i)
    }
  }
  return newArr
}

function swap(arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

testSort(selectionSort)
testSortRunTime(selectionSort)

export {}