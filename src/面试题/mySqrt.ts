function mySqrt(x: number): number {
  if (x === 0) return 0
  if (x === 1) return 1
  let sqrt = 0
  while (true) {
    const result = Math.ceil(sqrt * sqrt)
    if (result != x) {
      sqrt += 0.1
    } else 
    break
  }
  return Math.floor(sqrt)
}

console.log(mySqrt(8))