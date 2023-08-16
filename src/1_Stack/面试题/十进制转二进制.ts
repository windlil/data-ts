import { ArrayStack } from "../ArrayStack"

/*
  写一个能够将十进制数字转为二进制数字的函数
*/

export function decimalToBinary(dec: number) {
  const stack = new ArrayStack<number>()
  let result = ''

  while(dec > 0) {
    stack.push(dec % 2)
    dec = Math.floor(dec / 2)
  }
  
  while (!stack.isEmpty()) result += stack.pop()

  return result
}


/*
  解题思路：
  十进制转二进制，除二取余，直到被除数为0，取每次相除后的余数。
  使用栈结构来存储每次的余数，按顺序出栈得出二进制数。
*/