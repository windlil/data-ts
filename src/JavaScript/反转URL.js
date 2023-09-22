let str = "www.baidu.taobao.com";



function reversedStr(str) {
  const arr = str.split(".")
  return arr.reverse().join(".")
}

// 不能使用join 和 split
function _reversedStr(str = '') {
  const arr = []
  let _str = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '.') {
      _str += str[i]
    } else {
      arr.push(_str)
      _str = ''
    }
    if (i === str.length - 1) {
      arr.push(_str)
    }
  }

  let reverse = ''
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === 0) {
      reverse += `${arr[i]}`
      break
    }
    reverse += `${arr[i]}.`
  }
  return reverse
}

console.log(reversedStr(str))
console.log(_reversedStr(str))