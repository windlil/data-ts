import { TAndUndefined } from '../../types/utils'

export interface Stack<T = any> {
  // 压栈
  push(vlaue: T): void

  // 出栈，并返回被移除的元素
  pop(): TAndUndefined<T>

  // 返回栈顶元素，不对元素进行任何操作
  peek(): TAndUndefined<T>

  
  // 判断是否为空栈
  isEmpty(): boolean

  // 返回栈内元素个数
  get size(): number
}

