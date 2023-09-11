import { it, describe, expect } from 'vitest' 
import hashTable from '../src/4_hash'

describe('hash', () => {
  it('put get', () => {
    const hash = new hashTable()
    hash.put("aaa", 100)
    hash.put("bbb", 222)
    hash.put("ccc", 333)
    console.log(hash.get('aaa'))
  })
  it ('delete', () => {
    const hash = new hashTable()
    hash.put("aaa", 100)
    hash.put("bbb", 222)
    hash.put("ccc", 333)
    expect(hash.delete('aaa')).toBe(100)
    expect(hash.delete('abc')).toBe(undefined)
  })
})