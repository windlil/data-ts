function mySqrt(x) {
  let left = 0;
  // 直接干掉 x 的一半，减小范围
  let right = x

  // 搜索区间为 [left, right]
  while (left <= right) {
      let mid = Math.floor((right - left) / 2 + left)
    console.log(left, mid, right)
      if (mid * mid < x) {
          left = mid + 1; // 搜索区间变为 [mid+1, right]
      } else if (mid * mid > x) {
          right = mid - 1; // 搜索区间变为 [left, mid-1]
      } else if (mid * mid === x) {
          left = mid + 1; // 收缩左侧边界
      }

  }

  // 由于等于 target 的时候，left 又加了 1，所以结果要减掉
  return left - 1;

};
console.log(mySqrt(2))