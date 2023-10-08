function maxProfit(arr: number[]) {
  const dp = [0]
  let minPrice = arr[0]

  for (let i = 1; i < arr.length; i++) {
    dp[i] = Math.max(arr[i] - minPrice, dp[i - 1])
    minPrice = Math.min(arr[i], minPrice)
  }

  return dp[arr.length - 1]
}

console.log(maxProfit([7, 1, 5, 3, 6, 0, 4]))