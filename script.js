// Contructor function is a function that allows you to create an object class
// and allows you to create multiple instances of that class very easily.
// i.e. These functions allows you to create many objects that have same properties
// and functionality because they're all part of the same class.

//eg:

function User(name, phone, gender) {
  this.name = name;
  this.phone = phone;
  this.gender = gender;
}

// dunder proto === __proto__

// Prototype Object
// Basically means that every User instance will have '@gmail.com' in their dunder proto object
// We can't access this property in the actual object, but only via the dunder proto
// i.e. It is available at User
User.prototype.email = "@gmail.com";

const user1 = new User("Pranav", 2605677, "male");

// Here user1.email gives you '@gmail.com' and it is available on every new object
// we define using User contructor function 

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}
