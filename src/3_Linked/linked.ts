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
}