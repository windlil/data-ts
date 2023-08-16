import { ArrayStack } from "../src/1_Stack/ArrayStack"
import { test, expect, it } from 'vitest'
import { decimalToBinary } from "../src/1_Stack/面试题/十进制转二进制"
import { isValid } from "../src/1_Stack/面试题/有效的括号"

test('ArrayStack', () => {
  const s1 = new ArrayStack()
  s1.push('a')
  s1.push('b')
  s1.push('c')

  expect(s1.size).toBe(3)

  expect(s1.pop()).toBe('c')

  expect(s1.size).toBe(2)

  expect(s1.isEmpty()).toBe(false)

  it ('十进制转二进制', () => {
    expect(decimalToBinary(35)).toBe('100011')
  })

  it ('有效的括号', () => {
    expect(isValid('({})[]')).toBe(true)

    expect(isValid('({)}[]')).toBe(false)

    expect(isValid('{()[]}')).toBe(true)
  })
})