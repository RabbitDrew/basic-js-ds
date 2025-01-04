const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.rootQueue = null;
  }
  getUnderlyingList() {
    return this.rootQueue;
  }

  enqueue(value) {
    if (!this.rootQueue) {
      this.rootQueue = new ListNode(value);
    } else {
      const createNewNode = (node) => {
        if (!node.next) {
          node.next = new ListNode(value);
        } else {
          createNewNode(node.next);
        }
      };

      createNewNode(this.rootQueue);
    }
  }

  dequeue() {
    if (!this.rootQueue) {
     return null 
    }else {
        const value = this.rootQueue.value
        const removeNode = node => {
          if (!node.next) {
             return null
          }else {
             node = node.next
          }
          return node
        }
        this.rootQueue = removeNode(this.rootQueue)
        return value
    }
   }
 }

module.exports = {
  Queue,
};
