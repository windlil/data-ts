import { ArrayQueue } from "../ArrayQueue"

/*
  每count次淘汰一名，求最后剩余者的名字
*/

export function hotPotato(arr: string[], count: number) {
  const queue = new ArrayQueue()

  for (let item of arr) {
    queue.enqueue(item)
  }

  while(queue.size !== 1) {
    for (let i = 0; i < count; i++) {
      const s = queue.dequeue()
      if (i !== count - 1) {
        queue.enqueue(s)
      }
    }
  }
  return queue.dequeue()
}

hotPotato(['a', 'b', 'c', 'd'], 4)