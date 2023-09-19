Promise._all = function (promises) {
  // 该方法返回一个promise对象
  return new Promise((resolve, reject) => {
    // 该方法的参数需为一个可迭代对象
    if (promises == null || typeof promises[Symbol.iterator] !== "function") {
      throw new TypeError(`${promises} is not a iterable`);
    }
    promises = [...promises];

    // 可迭代对象为空则返回已resolve的promise
    if (promises.length === 0) {
      resolve([]);
    }

    let count = 0;
    const values = [];
    promises.forEach((promise, index) => {
      // 保证可迭代对象的元素为promise，使用Promise.resolve()处理
      Promise.resolve(promise)
        .then((res) => {
          values[index] = res;
          if (++count === promises.length) resolve(values);
        })
        .catch(reject);
    });
  });
};

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.myAll = function(promiseArr) {
  return new Promise((resolve, reject) => {
    if (promiseArr === null || typeof promiseArr[Symbol.iterator] !== 'function') return new Error('请传入可迭代对象')

    if (promiseArr.length === 0)  resolve([])
    const result = []
    promiseArr = [...promiseArr]
    
    promiseArr.forEach((promise, index) => {
      Promise.resolve(promise)
      .then((res) => {
        result[index] = res
        if (result.length === promiseArr.length) resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  })
}


Promise.myAll([p1, p2, p3]).then((res) => {
  console.log(res)
}).catch(err => console.log(err))

const p4 = new Promise((resolve, reject) => {
  resolve(1)
})

Promise.resolve(1).then(res => console.log(res))