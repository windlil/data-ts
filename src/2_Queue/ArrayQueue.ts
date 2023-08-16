import type { Queue } from './tyep'
import type { TAndUndefined } from '../types/type'

export class ArrayQueue<T> implements Queue<T>{
  private queue: T[] = []

  enqueue(value: T): void {
    this.queue.push(value)
  }

  dequeue(): TAndUndefined<T> {
    return this.queue.shift()
  }
  
  front(): TAndUndefined<T> {
    return this.queue[0]
  }

  isEmpty(): boolean {
    return this.queue.length === 0
  }

  size(): number {
    return this.queue.length
  }
}