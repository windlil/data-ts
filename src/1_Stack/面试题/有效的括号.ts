import { ArrayStack } from '../ArrayStack'

/*
  给函数传入(){}[]组合成的字符串，判断其组合是否为有效的括号组合。
  isValid("(){}[]") true
  isValid("({)}[]") false
  isValid("{()}[]") true
  isValid("[{()}]") true
*/

export function isValid(str: string): boolean {
  const stack = new ArrayStack<string>()

  for (let i = 0; i < str.length; i++) {
    const c = str[i]

    if (c === '{') {
      stack.push('}')
    } else if (c === '(') {
      stack.push(')')
    } else if (c === '[') {
      stack.push(']')
    } else {
      if (c !== stack.pop()) return false
    }
  }

  return stack.isEmpty()
}

