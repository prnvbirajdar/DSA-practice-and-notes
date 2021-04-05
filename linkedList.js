// create new node

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// create LL

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // If list is empty, return undefined
    if (!this.head) {
      return undefined;
    }

    // If list has two or more nodes
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    // If list has one node, this.length-- above makes length 0,
    // but the node doesn't go away. Thus the code below.
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
}

const myLinkedList = new LinkedList(4);

myLinkedList.push(7);
myLinkedList.push(15);

myLinkedList.pop();

console.log(myLinkedList);
