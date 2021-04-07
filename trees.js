// New Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BST Class
class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // create new node
    const newNode = new Node(value);

    // condition 1: BST is empty
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // we declare a variable and compare it to root and every subsquent parent nodes
    // while traversing the tree
    let temp = this.root;

    // always going to true unless it hits a return statement
    while (true) {
      // makes sure the new Node does not match already existing nodes
      if (newNode.value === temp.value) return undefined;
      // if new node value is less than root value / temp value
      if (newNode.value < temp.value) {
        // if left side is empty, assign it with new node
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        // else assign temp a new value as the left value and loop through again
        temp = temp.left;
      }
      // if new node value is greater than root value / temp value
      else {
        // if right side is empty, assign it with new node
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        // else assign temp a new value as the right value and loop through again
        temp = temp.right;
      }
    }
  }

}

const myTree = new BST();

myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);

myTree.insert(52);
myTree.insert(82);
