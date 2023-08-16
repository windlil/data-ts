import { ArrayQueue } from "../src/2_Queue/ArrayQueue"
import { test, expect } from "vitest"

test('ArrayQueue', () => {
  const q = new ArrayQueue()

  q.enqueue('a')
  q.enqueue('b')
  q.enqueue('c')

  expect(q.size).toBe(3)

  expect(q.dequeue()).toBe('a')

  expect(q.front()).toBe('b')

  expect(q.isEmpty()).toBe(false)
})
