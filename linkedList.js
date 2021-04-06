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
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    // If list is empty, return undefined
    if (!this.head) {
      return undefined;
    }
    // If list has two or more nodes
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    // If list has one node, this.length-- above makes length 0,
    // but the node doesn't go away. this.head is null above.
    // Thus the code below.
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    //if block makes sure that index is valid, because out get method can return undefined too
    if (temp) {
      temp.value = value;
      // return true breaks the loop and we successfully set it
      return true;
    }
    //if undefined, we return false
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value); // create new node
    let temp = this.get(index - 1); // declare a variable for node prior to the wanted index
    newNode.next = temp.next; // new node's next should point to node at index i.e. temp.next
    temp.next = newNode; // now (index - 1) node i.e. temp should point at newNode
    this.length++;
    return true;
  }
}

const myLinkedList = new LinkedList(0);

myLinkedList.push(1);
myLinkedList.push(46456);
myLinkedList.push(3);
myLinkedList.push(4);

console.log(myLinkedList);
