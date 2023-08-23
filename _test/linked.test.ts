import { it, describe, expect } from 'vitest'
import { LinkedList } from '../src/3_Linked/linked'

describe('linked', () => {
  const linked = new LinkedList<string>()
  linked.append('a')
  linked.append('b')
  linked.append('c')
  it('append', () => {
    linked.append('d')
    linked.append('e')
    linked.append('f')
    expect(linked.size).toBe(6)
  })
})