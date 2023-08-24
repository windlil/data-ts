import type { TAndUndefined } from "../../types/utils"

class LinkedNode<T> {
  value: TAndUndefined<T>
  next: any

  constructor(value: T) {
    this.value = value
  }
}

export class LinkedList<T> {
  private head: LinkedNode<T> | null = null
  private _size = 0

  append(value: T) {
    const node = new LinkedNode(value)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while(current.next) {
        current = current.next
      }      current.next = node
    }
    this._size++
  }

  get size() {
    return this._size
  }

  travers(sep: string = '') {
    let res = ''
    let current = this.head
  
    while(current) {
      res += current.value + sep
      current = current.next
    }

    console.log(res)
  }

  insert(value: T, position: number) {
    if (position < 0 || position > this._size) return false

    const node = new LinkedNode(value)

    if (this.size === 0) {
      this.append(value)
      return true
    }

    if (position === 0) {
      node.next = this.head
      if (this.head) {
        this.head = node
      }
    } else {
      let i = 0
      let current = this.head
      while(i !== position - 1) {
        if (current?.next) {
          current = current.next
        }
        i++
      }
      const next = current?.next
      node.next = next
      if (current) {
        current.next = node
      }
    }

    return true
  }
}

const linked = new LinkedList()
linked.append('a')
linked.append('b')
linked.append('c')
linked.insert('6', 3)
linked.travers()