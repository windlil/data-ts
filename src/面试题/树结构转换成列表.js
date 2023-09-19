const data = [
    {
        id: '1',
        name: '父节点1',
        children: [
            {
                id: '1-1',
                name: '子节点1-1',
                children: [
                    {
                        id: '1-1-1',
                        name: '子节点1-1-1'
                    },
                    {
                        id: '1-1-2',
                        name: '子节点1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: '父节点2',
        children: [
            {
                id: '2-1',
                name: '子节点2-1'
            }
        ]
    }
]
function treeToList(data) {
  let res = [];
  const dfs = (tree) => {
      tree.forEach((item) => {
          if (item.children) {
              dfs(item.children);
              delete item.children;
          }
          res.push(item);
      });
  };
  dfs(data);
  return res;
}

function myTreeToList(data) {
    const res = []
    function dfs(data) {
        data.forEach((item) => {
            const parent = item
            res.push({
                id: item.id,
                name: item.name,
                parentId
            })
            if (item.children) {
                dfs(item.children)
            }
        })
    }
    dfs(data)
    return res
}


function tree2list(treeList) {

    const list = []

    const traverse = (treeNode, callback) => {
        const queue = [treeNode]
        while (queue.length > 0) {
            let node = queue.shift()
            let newNode = {
                id: node.id,
                name: node.name
            }
            callback && callback(newNode)
            if (node.children) {
                queue.push(...node.children)
            }
        }
    }

    treeList.forEach(rootNode => {
        traverse(rootNode, (node) => {
            list.push(node)
        })
    })

    return list
}

console.log(tree2list(data))