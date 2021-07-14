const Queue = require("./queue");

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let prevNode = this.root;
    let currNode = this.root;

    while (true) {
      if (newNode.value === currNode.value) return;
      const isNewNodeGreater = newNode.value > currNode.value;

      currNode = isNewNodeGreater ? currNode.right : currNode.left;
      if (!currNode) {
        isNewNodeGreater
          ? (prevNode.right = newNode)
          : (prevNode.left = newNode);
        return this;
      }
      prevNode = currNode;
    }
  }
  contains(value) {
    if (!this.root) return false;
    let current = this.root,
      isFound = false;
    while (current && !isFound) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else {
        isFound = true;
      }
    }
    return isFound;
  }
  breadthFirstSearch() {
    const queue = new Queue();
    const visited = [];
    let current;
    queue.enqueue(this.root);
    while (queue.length > 0) {
      current = queue.dequeue().val;

      visited.push(current);
      if (current.right) queue.enqueue(current.right);
      if (current.left) queue.enqueue(current.left);
    }
    return visited;
  }
  DFSPreOrder() {
    const visited = [];

    const traverse = node => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
  DFSPostOrder() {
    const visited = [];

    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };
    traverse(this.root);
    return visited;
  }
  DFSInOrder() {
    const visited = [];

    const traverse = node => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
}

const BST = new BinarySearchTree();
console.log(BST.insert(10));
console.log(BST.insert(6));
console.log(BST.insert(3));
console.log(BST.insert(8));
console.log(BST.insert(15));
console.log(BST.insert(20));
// console.log(BST.breadthFirstSearch());
// console.log(BST.DFSPreOrder());
console.log(BST.DFSPostOrder());
console.log(BST.DFSInOrder());

// console.log(BST.contains(40));
// console.log(BST.contains(41));
