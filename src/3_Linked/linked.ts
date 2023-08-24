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
      }
      current.next = node
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
    isTrueRange(this.size, position)

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
      while(i !== position - 1 && current) {
        current = current.next
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

  removeAt(position: number) {
    isTrueRange(this.size, position)

    if (this.size === 0) {
      this.head = null
    }

    let current = this.head
    if (position === 0 ){
      this.head = current?.next
    } else {
      let previous
      let i = 0

      while(i++ < position && current) {
        previous = current
        current = current.next
      }

      previous!.next = current?.next || null
    }

    return current?.value || null
  }

  getAt(position: number) {
    isTrueRange(this.size, position)

    let current = this.head
    let index = 0

    while (index++ < position && current) {
      current = current.next
    }

    return current!.value ?? null
  }

  update(value: T, position: number) {
    isTrueRange(this.size, position)

    if (this.size === 0) {
      const node = new LinkedNode(value)
      this.head = node
    }

    let current = this.head
    let index = 0

    while(index++ < position && current) {
      current = current.next
    }

    current!.value = value

    return true
  }
}

function isTrueRange(size: number, position: number): boolean {
  if (position < 0 || position > size) return false
  return true
}

const linked = new LinkedList()
linked.append('a')
linked.append('b')
linked.append('c')
linked.travers('->')
linked.insert('6', 3)
console.log(linked.removeAt(1))
console.log(linked.getAt(1))
linked.update('666', 0)
linked.travers('->')