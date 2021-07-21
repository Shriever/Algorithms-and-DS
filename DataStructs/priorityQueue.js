class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    if (this.values.length === 1) {
      return this.values;
    }
    // } else if (this.values.length === 1) {
    //   if (this.values[0].priority > this.values[1].priority) {
    //     [this.values[0], this.values[1]] = [this.values[1], this.values[0]];
    //   }
    //   return this.values;
    // }
    let currIdx = this.values.length - 1;
    let parentIdx = this.getParentIdx(currIdx);
    while (
      parentIdx > -1 &&
      this.values[currIdx].priority < this.values[parentIdx].priority
    ) {
      [this.values[currIdx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[currIdx],
      ];
      currIdx = parentIdx;
      parentIdx = this.getParentIdx(currIdx);
    }
    return this.values;
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const element = this.values[0];
    const length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx].priority;
        if (leftChild < element.priority) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx].priority;
        if (
          (swap === null && rightChild < element.priority) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (!swap) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
module.exports = PriorityQueue;
const heap = new PriorityQueue();
// console.log(heap.enqueue("Hello my name is bob", 41));
// console.log(heap.enqueue("bruh", 39));
// console.log(heap.enqueue("number three here", 33));
// console.log(heap.enqueue("where am I?", 18));
// console.log(heap.enqueue(true, 27));
// console.log(heap.enqueue("possibly mistaken", 12));
// console.log(heap.enqueue(false, 55));
// console.log(heap.dequeue());
// console.log(heap.dequeue());
// console.log(heap.dequeue());
// console.log(heap.dequeue());
// console.log(heap.dequeue());
// console.log(heap.dequeue());
// console.log(heap.values);
