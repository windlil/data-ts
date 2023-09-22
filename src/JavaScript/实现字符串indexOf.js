function myIndexOf(str1, str2) {
  if (str1.length === 0 || str2.length === 0) return -1
  if (str2.length > str1.length) return -1

  let compareStr = {
    str: '',
    index: 0
  }

  for (let i = 0; i < str1.length; i++) {
    for (j = i; j < i + str2.length; j++) {
      if (!str1[j]) return -1
      compareStr.str += str1[j]
      if (compareStr.str === str2) return compareStr.index
    }
    compareStr.index++
    console.log(compareStr.str)
    compareStr.str = ''
  }
  return -1
}

const str1 = 'hello world'
const str2 = 'd0'

console.log(myIndexOf(str1, str2))
console.log(str1.indexOf(str2))