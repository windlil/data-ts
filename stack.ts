/*
  使用数组为基础来实现栈结构
*/

class ArrayStack {
  private stack: any[] = []

  //压栈
  push(value: any) {
    this.stack.push(value)
  }

  //出栈
  pop() {
    this.stack.pop()
  }

  //返回栈顶元素，不对元素进行任何操作
  peek() {
    const length: number = this.stack.length
    return this.stack[length - 1]
  }

  //判断是否为空栈
  isEmpty(): boolean {
    const length = this.stack.length
    return length === 0
  }

  //返回栈内元素个数
  size(): number {
    return this.stack.length
  }
}

const s1 = new ArrayStack()