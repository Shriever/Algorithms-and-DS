class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  insert(val) {
    this.values.push(val);
    if (this.values.length === 0) {
      return this.values;
    }
    let currIdx = this.values.length - 1;
    let parentIdx = this.getParentIdx(currIdx);
    while (this.values[currIdx] > this.values[parentIdx]) {
      [this.values[currIdx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[currIdx],
      ];
      currIdx = parentIdx;
      parentIdx = this.getParentIdx(currIdx);
    }
    return this.values;
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
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
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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
const heap = new MaxBinaryHeap();
console.log(heap.insert(41));
console.log(heap.insert(39));
console.log(heap.insert(33));
console.log(heap.insert(18));
console.log(heap.insert(27));
console.log(heap.insert(12));
console.log(heap.insert(55));
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
