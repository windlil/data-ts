class Heap {
  private length: number = 0
  private data: number[] = []

  private swap(n1: number, n2: number) {
    const temp = this.data[n1]
    this.data[n1] = this.data[n2]
    this.data[n2] = temp
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

  print() {
    console.log(this.data)
  }
}

const heap = new Heap()
heap.insert(20)
heap.insert(25)
heap.insert(18)
heap.insert(30)

heap.print()
export {}