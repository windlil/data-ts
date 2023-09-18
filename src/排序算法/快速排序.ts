import { testSortRunTime } from "./utils"

function quickSort(arr: number[]): number[] {
  
  function partition(left: number, right: number) {
    if (left >= right) return
    const pivot = arr[right]

    let i = left
    let j = right - 1

    
    while(i <= j) {
      while(arr[i] < pivot) {
        i++  
      }
  
      while(arr[j] > pivot) {
        j--
      }
  
      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }
    swap(arr, i, right)

    partition(left, j)
    partition(i + 1, right)
  }
  partition(0, arr.length - 1)
  
  return arr
}

function swap(arr: number[], i: number, j: number) {
  [arr[j], arr[i]] = [arr[i], arr[j]]
}


testSortRunTime(quickSort)

export{}