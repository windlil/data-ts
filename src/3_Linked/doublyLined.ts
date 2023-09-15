class Node<T> {
  next: Node<T> | null = null
  prev: Node<T> | null = null
  value: T

  constructor(newValue: T) {
    this.value = newValue
  }
}

class DoublyLined<T> {
  private head: Node<T> | null = null 
  private size: number = 0

  append(value: T) {
    const node = new Node<T>(value)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
      node.prev = current
    }

    this.size++
  }

  traverse() {
    let current = this.head
    while(current) {
      console.log(current)
      current = current!.next
    }
  }
}

const dl = new DoublyLined()
dl.append(1)
dl.append(2)
dl.traverse()
export {}