import { ArrayStack } from "../ArrayStack"

const s1 = new ArrayStack()

console.log(s1.isEmpty())   // true
s1.push("jack")
s1.push("tom")
s1.push("mike")
console.log(s1.size())      // 3
console.log(s1.peek())      // mike
console.log(s1.pop())       // mike
console.log(s1.size())      // 2
console.log(s1.isEmpty())   // false
