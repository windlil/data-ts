export type TAndUndefined<T> = T | undefined 

export interface Stack<T = any> {
  push(vlaue: T): void

  pop(): TAndUndefined<T>

  peek(): TAndUndefined<T>

  isEmpty(): boolean

  size(): number
}

