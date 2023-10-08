// function fib(num: number, meno: number[] = []): number {
//   if (num <= 1) return num

//   if (meno[num]) {
//     return meno[num]
//   }
//   const res = fib(num - 1, meno) + fib(num - 2, meno)
//   meno[num] = res
//   return res
// }

function fib(number: number) {
  const meno: number[] = []

  for (let i = 0; i <= number; i++) {
    if (i <= 1) {
      meno[i] = i
      continue;
    }
    meno[i] = meno[i - 2] + meno[i - 1]
  }
  return meno[number]
}

function fib2(n: number) {
  if (n <= 1) return n
  let pre = 0
  let cur = 1
  for (let i = 2; i <= n; i++) {
    const result = pre + cur
    pre = cur
    cur = result
  }
  return cur
}

console.log(fib(10))