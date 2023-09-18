import { testSort, testOrderSearchEfficiency } from "hy-algokit"

function mergeSort(arr: number[]): number[] {
  if (arr.length <=1) return arr

  const mid = Math.floor(arr.length / 2)
  const leftArray = arr.slice(0, mid)
  const rightArray = arr.slice(mid)
  console.log(leftArray, rightArray)
  const newLeftArr = mergeSort(leftArray)
  const newRightArr = mergeSort(rightArray)

  const newArr: number[] = []

  let i = 0
  let j = 0
  console.log(newLeftArr, newRightArr)
  while(i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] <= newRightArr[j]) {
      newArr.push(newLeftArr[i])
      i++
    } else {
      newArr.push(newRightArr[j])
      j++
    }
  }

  if (i < newLeftArr.length) {
    newArr.push(...newLeftArr.slice(i))
  }

  if (j < newRightArr.length) {
    newArr.push(...newRightArr.slice(j))
  }
  console.log('newArr',newArr)

  return newArr
}

// testSort(mergeSort)

const arr = [6, 5, 4, 3, 2, 1]
console.log(mergeSort(arr))
console.log(arr)