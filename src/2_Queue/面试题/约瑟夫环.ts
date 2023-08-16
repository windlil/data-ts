/*
  总人数m，每m次淘汰1人，求处于哪个位置的人不会被淘汰
  类似击鼓传花
*/
import { ArrayQueue } from "../ArrayQueue"

export function lastRemaining(n: number, m: number) {
  const queue = new ArrayQueue()

  for (let i = 0; i < n; i++) {
    queue.enqueue(i)
  }

  while(queue.size !== 1) {
    for (let i = 1; i < m; i++) {
      const q = queue.dequeue()
      if (i !== m) queue.enqueue(q)
    }
  }

  return queue.dequeue()
}