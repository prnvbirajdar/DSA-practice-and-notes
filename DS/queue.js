// New Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// New Queue Class

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.front = newNode;
    this.back = newNode;
    this.length = 1;
  }

  // Basically push in a linked list
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.length++;
    return this;
  }

  // Basically shift in a linked list
  dequeue() {
    if (!this.front) return undefined;
    let temp = this.front;

    if (this.length === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
      temp.next = null;
    }
    
    this.length--;
    return temp;
  }
}

const myQueue = new Queue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
