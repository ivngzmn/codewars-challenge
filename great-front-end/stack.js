/*
Implement a stack data structure in JavaScript that contains the following operations:

new Stack(): Creates an instance of a Stack class that doesn't contain any items. The constructor does not accept any arguments.
push(): Pushes an item onto the top of the stack and returns the new length of the stack. Required time complexity: O(1).
pop(): Removes an item at the top of the stack and returns that item. Required time complexity: O(1).
isEmpty(): Determines if the stack is empty. Required time complexity: O(1).
peek(): Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).
length(): Returns the number of items in the stack. Required time complexity: O(1).
Examples
const stack = new Stack();
stack.isEmpty(); // true
stack.push(1);
stack.push(2);
stack.length(); // 2
stack.push(3);
stack.peek(); // 3
stack.pop(); // 3
stack.isEmpty(); // false
*/

class Stack {
  constructor() {
    // implement the constructor
    this.items = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    // push item to the top of the stack and return the new length of the stack
    this.items.push(item);
    return this.items.length;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    // remove an item at the top of the stack and return the item at the top of the stack if not empty
    return this.items.pop();
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.items.length;
  }
}
const stack = new Stack();

console.log(stack.isEmpty(), true); // true
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.length(), 2); // 2
console.log(stack.push(3));
console.log(stack.peek(), 3); // 3
console.log(stack.pop(), 3); // 3
console.log(stack.isEmpty(), false); // false

const stack2 = new Stack();
console.log(stack2.isEmpty(), true); // true
console.log(stack2.push(100));
console.log(stack2.peek());
