class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return;
    if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }
    let pre = this.head;
    //   while next node is not tail
    while (pre.next.next) {
      // move to next node
      pre = pre.next;
    }
    const temp = pre.next;

    pre.next = null;
    this.tail = pre;
    this.length--;

    return temp;
  }
  shift() {
    if (this.length === 0) return;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return temp;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index >= this.length) return;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }
  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const prevNode = this.get(index);
    const newNode = new Node(val);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prev = this.get(index - 1);
    let removed = prev.next;

    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    if (this.length <= 1) return list;
    [this.head, this.tail] = [this.tail, this.head];
    let start = this.tail;
    let mid = start.next;
    let end = mid.next;
    for (let i = 0; i < this.length - 1; i++) {
      mid.next = start;
      start = mid;
      mid = end;
      if (end) end = end.next;
    }
    this.tail.next = null;
    return this;
  }
}

const list = new SinglyLinkedList();
console.log(list.push("hello"));
// console.log(list.push("there"));
// console.log(list.push("!"));
// console.log(list.insert(0, "hello again!"));
// console.log(list.remove(1));
console.log(list.reverse());
