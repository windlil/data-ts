function myPow(x: number, n: number): number {
    // n=0 直接返回 1
    if (n === 0) return 1;

    // n<0 时 x 的 n 次方等于 1 除以 x 的 -n 次方分
    if (n < 0) return 1 / myPow(x, -n);

    // n 是奇数时 x 的 n 次方 = x*x 的 n-1 次方
    if (n % 2) return x * myPow(x, n - 1);

    // n 是偶数，使用分治，一分为二，等于 x*x 的 n/2 次方 
    return myPow(x * x, n / 2);
}

// console.log(myPow(2.00000, 10))
// console.log(myPow(2.10000, 3))
console.log(myPow(2.00000, -2))


export {}