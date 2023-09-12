/*
  二叉树特性
  1、一颗二叉树的第n层最多有 2^(n-1)个节点
*/

/*
  二叉搜索树
  非空左子树的所有键值小于其根节点的键值
  非空右子树的所有键值大于其根节点的键值
  左、右子树都要满足二叉搜索树的性质
  相对较少的值都保存在左节点，相对大的保存在右节点
*/
import { btPrint } from 'hy-algokit'

class TreeNode<T = any> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  value: T

  constructor(newValue: T) {
    this.value = newValue
  }
}

class Tree<T = number> {
  private root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }

  insert(value: T) {
    const newNode = new TreeNode(value)
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node: TreeNode<T> | null, newNode: TreeNode<T>) {
    if (node === null) {
      return node = newNode
    }
    if (newNode.value < node.value) {
      if (node?.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node!.left, newNode)
      }

    } else {
      if (node?.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node!.right, newNode)
      }
    }
  }
}

const tree = new Tree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.print()