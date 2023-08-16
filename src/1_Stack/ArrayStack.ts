/*
  使用数组为基础来实现栈结构
*/
import type {Stack} from "./type"
import type { TAndUndefined } from '../types/type'

export class ArrayStack<T = any> implements Stack<T> {
  
  private stack: T[] = []

  push(value: T) {
    this.stack.push(value)
  }

  pop(): TAndUndefined<T> {
    return this.stack.pop()
  }

  peek(): TAndUndefined<T> {
    const length: number = this.stack.length
    return this.stack[length - 1]
  }

  isEmpty(): boolean {
    const length = this.stack.length
    return length === 0
  }

  get size(): number {
    return this.stack.length
  }

}

