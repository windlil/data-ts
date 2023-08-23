import { it, describe, expect } from 'vitest'
import { LinkedList } from '../src/3_Linked/linked'

describe('linked', () => {
  it('append', () => {
    const linked = new LinkedList<string>()
    linked.append('a')
    linked.append('b')
    linked.append('c')
    expect(linked.size).toBe(3)
  })
})