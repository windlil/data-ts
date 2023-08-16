import type { TAndUndefined } from "../types/type"

export interface Queue<T> {

  // 向队列尾部添加一个元素
  enqueue(value: T): void

  // 队前删除一个元素，即先被添加的元素
  dequeue(): TAndUndefined<T>

  // 返回队列中的第一个元素，即最前端的元素
  front(): TAndUndefined<T>

  // 判断队列是否为空
  isEmpty(): boolean

  // 队列大小
  get size(): number
}