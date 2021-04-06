// New Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack Class
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.top.next = null;
    } else {
      let temp = this.top;
      this.top = newNode;
      newNode.next = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const myStack = new Stack(0);
myStack.push(1);
myStack.push(2);

console.log(myStack);
