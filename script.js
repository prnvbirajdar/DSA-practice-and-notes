function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = (value) => {
  const newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

function loopFunc(a, b) {
  for (let index = 0; index < a; index++) {
    for (let index = 0; index < b; index++) {
      console.log(a, b);
    }
  }
}

function loopFunc(a, b) {
  for (let index = 0; index < a; index++) {
    console.log(a);
  }

  for (let index = 0; index < b; index++) {
    console.log(b);
  }
}

loopFunc(2, 6);

function loopFunc(n) {
  console.log(n); // o(n)

  console.log(n); // o(n)

  console.log(n + n + n + n); // o(1)

  // o(n^2)
  for (let index = 0; index < n; index++) {
    for (let index = 0; index < n; index++) {
      console.log(n);
    }
  }
}
