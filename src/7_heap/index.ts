class Heap {
  private length: number = 0
  private data: number[] = []

  private swap(n1: number, n2: number) {
    const temp = this.data[n1]
    this.data[n1] = this.data[n2]
    this.data[n2] = temp
  }

  constructor(arr?: number[]) {
    if (arr) {
       this.build(arr)
    }
  }

  insert(value: number) {
    if (this.data.length === 0) {
      this.data.push(value)
      this.length++
      return
    } else {
      this.data.push(value)
      let currentValueIndex = this.data.indexOf(value)
      let parentIndex = Math.floor((currentValueIndex -1) / 2)
      let parentValue = this.data[parentIndex]
      while(value > parentValue) {
        this.swap(currentValueIndex, parentIndex)
        currentValueIndex = this.data.indexOf(value)
        parentIndex = Math.floor((currentValueIndex -1) / 2)
        parentValue = this.data[parentIndex]
      }
    }
    this.length++
  }

  build(arr: number[]) {
    this.data = arr
    this.length = arr.length
    let start = Math.floor((this.length - 1) / 2) 
    for (let i = start; i >= 0; i--) {
      this.xialv(i)
    }
  }

  extract(): number | undefined {
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.length--
      return this.data.pop()
    }
    const current = this.data[0]
    this.data[0] = this.data.pop()!
    this.length --

    this.xialv(0)
    return current
  }

  xialv(start: number) {
    let index = start
    while(2 * index + 1 <  this.length) {
      let leftIndex = index * 2 + 1
      let rightIndex = leftIndex + 1
      
      let max = leftIndex
      if (this.data[rightIndex] && this.data[rightIndex] > this.data[leftIndex]) {
        max = rightIndex
      }
  
      if (this.data[max] > this.data[index]) {
        this.swap(max, index)
        index = max
      } else {
        break
      }
    }
  }

  print() {
    console.log(this.data)
  }
}

const heap = new Heap([19, 100, 36, 17, 3, 25, 1, 2, 7])
heap.print()
export {}