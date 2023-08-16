import { ArrayQueue } from "../src/2_Queue/ArrayQueue"
import { test, expect, it } from "vitest"
import { hotPotato } from "../src/2_Queue/面试题/击鼓传花"
import { lastRemaining } from "../src/2_Queue/面试题/约瑟夫环"

test('ArrayQueue', () => {
  const q = new ArrayQueue()

  q.enqueue('a')
  q.enqueue('b')
  q.enqueue('c')

  expect(q.size).toBe(3)

  expect(q.dequeue()).toBe('a')

  expect(q.front()).toBe('b')

  expect(q.isEmpty()).toBe(false)

  it ('击鼓传花', () => {
    expect(hotPotato(['a', 'b', 'c', 'd'], 3)).toBe('a')
    expect(hotPotato(['a', 'b', 'c', 'd'], 4)).toBe('b')
  })

  it('约瑟夫环', () => {
    expect(lastRemaining(5, 3)).toBe(3)

    expect(lastRemaining(10, 17)).toBe(2)
  })
})

