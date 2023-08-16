import { ArrayQueue } from "../ArrayQueue"

const q = new ArrayQueue()

console.log(q.isEmpty())  // true
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
console.log(q.front())    // a
console.log(q.dequeue())  // a
console.log(q.size)     // 2