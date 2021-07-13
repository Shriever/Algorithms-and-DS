class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.start = newNode;
    } else {
      this.end.next = newNode;
    }
    this.end = newNode;
    return ++this.length;
  }
  dequeue() {
    if (this.length === 0) return;
    const removedNode = this.start;
    if (this.length === 1) {
      this.end = null;
    }
    this.start = this.start.next;
    this.length--;
    removedNode.next = null;
    return removedNode;
  }
}
const queue = new Queue;
console.log(queue.enqueue('FIRST'))
console.log(queue.enqueue('SECOND'))
console.log(queue.enqueue('THIRD'))
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())