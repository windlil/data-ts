function randomArray(max, min, count) {
  if (max - min < count) return undefined

  const result = []

  while (result.length < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    if (result.indexOf(randomNumber) === -1) {
      result.push(randomNumber)
    }
  }
  return result
}

console.log(randomArray(10, 0, 10))