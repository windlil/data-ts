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

function randomArrayNoRepet(count: number, max: number, min: number) {
  const arr: number[] = []
  while(arr.length < count) {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min)
    if (arr.includes(randomNumber)) {
      continue
    } else {
      arr.push(randomNumber)
    }
  }
  return arr
}

export function testSort(sortFunc: (arr: number[]) => number[]) {
  const initArr = randomArrayNoRepet(10, 50, 1)
  const successArr = bubbleSort(initArr)
  const undefinedArr = sortFunc(initArr)
  for (const index in successArr) {
    if (successArr[index] !== undefinedArr[index]) {
      console.log('原数组:', initArr)
      console.log('排序后数组:', undefinedArr)
      console.log(`⚠${sortFunc.name}排序失败⚠`)
      return
    }
  }
  console.log('原数组:', initArr)
  console.log('排序后数组:', undefinedArr)
  console.log(`👏${sortFunc.name}算法成功排序👏`)
}

function randomArray(count: number, max: number, min: number): number[] {
  const arr = Array.from({ length: 100000 }, () => {
    return Math.floor(Math.random()*(max + 1 - min) + min)
  })
  return arr
}

export function testSortRunTime(func: (arr: number[]) => number[]) {
  const data = randomArray(100000, 500000, 0)
  const start = new Date().getTime()
  func(data)
  const end = new Date().getTime()
  console.log(`${func.name}算法运行消耗时间:${(end - start) / 1000}秒`)
}