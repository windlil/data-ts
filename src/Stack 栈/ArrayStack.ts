/*
  使用数组为基础来实现栈结构
*/
import {Stack, TAndUndefined} from "./type"

class ArrayStack<T = any> implements Stack<T> {
  
  private stack: T[] = []

  // 压栈
  push(value: T) {
    this.stack.push(value)
  }

  // 出栈，并返回被移除的元素
  pop(): TAndUndefined<T> {
    return this.stack.pop()
  }

  // 返回栈顶元素，不对元素进行任何操作
  peek(): TAndUndefined<T> {
    const length: number = this.stack.length
    return this.stack[length - 1]
  }

  // 判断是否为空栈
  isEmpty(): boolean {
    const length = this.stack.length
    return length === 0
  }

  // 返回栈内元素个数
  size(): number {
    return this.stack.length
  }

}

const s1 = new ArrayStack<string>()

console.log(s1.isEmpty())   // true
s1.push("jack")
s1.push("tom")
s1.push("mike")
console.log(s1.size())      // 3
console.log(s1.peek())      // mike
console.log(s1.pop())       // mike
console.log(s1.size())      // 2
console.log(s1.isEmpty())   // false

export {}