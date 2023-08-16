import { ArrayStack } from "../src/1_Stack/ArrayStack"
import { test, expect } from 'vitest'


test('ArrayStack', () => {
  const s1 = new ArrayStack()
  s1.push('a')
  s1.push('b')
  s1.push('c')

  expect(s1.size).toBe(3)

  expect(s1.pop()).toBe('c')

  expect(s1.size).toBe(2)

  expect(s1.isEmpty()).toBe(false)
})
