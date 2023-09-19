let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门6', pid: 0 },
]

// function deepClone(value) {
//   if (typeof value === 'object' && value !== null) {
//     const result = Array.isArray(value) ? [] : {};
//     for (const key in value) {
//       result[key] = deepClone(value[key])
//     }
//     return result
//   }
//   return value
// }

// const result = deepClone(data2).reduce(function (acc, cur, idx, arr) {
//   // 检索当前元素的子元素; tips: 此时操作cur会改变arr本身
//   cur.cildren = arr.filter(item => item.pid === cur.id);
//   // 判断是否为根元素
//   return arr.filter(item => !item.pid)
// }, []);

function listTotree(data) {
  const arr = []
  for (const item of data) {
    // 处理父节点
    if (!item.pid) {
      arr.push(item)
    }
  }

  function dfs(arr) {
    for (const data_item of data) {
      for (const arr_item of arr) {
        if (data_item.pid === arr_item.id) {
          if (!arr_item.children) arr_item.children = []
          arr_item.children.push(data_item)
          dfs(arr_item.children)
        }
      }
    }
  }

  dfs(arr)
  return arr
}

// const result = listTotree(arr)

// console.log(result)

// for (const item of result) {
//   console.log(item)
//   if (item.children) {
//     console.log(item.children)
//     if (item.children[0].children) console.log(item.children[0].children)
//   }
// }
function get_tree(arr) {
  const list = []

  arr.forEach(element => {
    const chiildren_arr = arr.filter(ele => {
      return element.id === ele.pid
    })

    if (chiildren_arr.length > 0) {
      element.chiildren = chiildren_arr
    }

    if (element.pid === 0) {
      list.push(element)
    }
  });

  return list
}
console.log(listTotree(arr));

