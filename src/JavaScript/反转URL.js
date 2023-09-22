let str = "www.baidu.taobao.com";



function reversedStr(str) {
  const arr = str.split(".")
  return arr.reverse().join(".")
}

// 不能使用join 和 split
function _reversedStr(str) {
  
}

console.log(reversedStr(str))
console.log(_reversedStr(str))