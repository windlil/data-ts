function sum(number = 1) {
  if (number === 100) return 100
  return number + sum(number + 1)
}

console.log(sum())