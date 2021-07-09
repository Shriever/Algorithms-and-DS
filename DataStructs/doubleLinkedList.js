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
      for (let curIndex = this.length - 1; curIndex > this.length / 2; curIndex--) {
          if( curIndex === index) return curNode;
          curNode = curNode.prev;
      }
    } else {
     let curNode = this.head;
      for (let curIndex = 0; curIndex < this.length / 2; curIndex++) {
          if( curIndex === index) return curNode;
          curNode = curNode.next;
      } 
    }
  }
}

const list = new DoublyLinkedList();
console.log(list.push("first"));
console.log(list.push("second"));
console.log(list.push("third"));
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
console.log(list.unshift("last one standing"));
console.log(list.unshift("no me"));
console.log(list.get(5));
// console.log(list);
