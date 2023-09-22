function sum(min = 0, max = 100) {
  return min === max ? min : min + sum(min + 1)
}

console.log(sum())