class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  shift() {
    if (this.length === 0) return;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return;
    if (index > this.length / 2) {
      let curNode = this.tail;
      for (
        let curIndex = this.length - 1;
        curIndex > this.length / 2;
        curIndex--
      ) {
        if (curIndex === index) return curNode;
        curNode = curNode.prev;
      }
    } else {
      let curNode = this.head;
      for (let curIndex = 0; curIndex < this.length / 2; curIndex++) {
        if (curIndex === index) return curNode;
        curNode = curNode.next;
      }
    }
  }
  set(val, index) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const prevNode = this.get(index - 1);
    const newNode = new Node(val);

    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    newNode.next.prev = newNode;
    this.length++;
    return true;
  }
  remove (index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.prev = null, removedNode.next = null;
    this.length--;
    return removedNode;

  }
}

const list = new DoublyLinkedList();
console.log(list.push("first"));
console.log(list.push("second"));
console.log(list.push("third"));
console.log(list.insert("set", 3));
console.log(list.get(3));
console.log(list.remove(1));
console.log(list);
