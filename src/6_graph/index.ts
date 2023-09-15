class Graph<T> {
  private vertix: T[] = []
  private adjList: Map<T, T[]> = new Map()

  addVertix(vertix: T) {
    this.vertix.push(vertix)
    this.adjList.set(vertix, [])
  }

  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }

  // 广度优先遍历
  bfs() {
    const queue: T[] = []
    const vistied: Set<T> = new Set()

    queue.push(this.vertix[0])
    vistied.add(this.vertix[0])

    while(queue.length) {
      const vertix = queue.shift()!
      console.log(vertix)

      const neb = this.adjList.get(vertix)
      if (!neb) continue
      for (const i of neb) {
        if (!vistied.has(i)) {
          queue.push(i)
          vistied.add(i)
        }
      }
    }
  }

  // 深度优先算法
  dfs() {
    const stack: T[] = []
    const vistied: Set<T> = new Set
    stack.push(this.vertix[0])
    vistied.add(this.vertix[0])

    while (stack.length) {
      const vertix = stack.pop()!
      console.log(vertix)
      const neb = this.adjList.get(vertix) as any

      for (let i = neb!.length - 1; i >= 0; i--) {
        if (!vistied.has(neb[i])) {
          vistied.add(neb[i])
          stack.push(neb[i])
        }
      }

    }
  }
}