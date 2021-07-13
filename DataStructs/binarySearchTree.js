class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let prevNode = this.root;
    let currNode = this.root;

    while (true) {
      if (newNode.val === currNode.val) return;
      const isNewNodeGreater = newNode.val > currNode.val;

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
  contains(val) {
    if (!this.root) return false;
    let current = this.root, isFound = false;
    while (current && !isFound) {
        if (current.val > val) {
            current = current.left;
        } else if (current.val < val) {
            current = current.right;
        }else {
            isFound = true;
        }
    }
    return isFound;
  }
}
const BST = new BinarySearchTree();
console.log(BST.insert(50));
console.log(BST.insert(30));
console.log(BST.insert(70));
console.log(BST.insert(40));
console.log(BST.insert(40));
console.log(BST.contains(40));
console.log(BST.contains(41));

