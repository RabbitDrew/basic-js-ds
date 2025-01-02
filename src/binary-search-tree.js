const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor (data) {
    this.rootNode = null
 }
 root() {
   return this.rootNode
 }

 add(data) {
    const newNode = new Node (data)   
    if (!this.rootNode) {
       this.rootNode = newNode
    }else {
       const searchTree = node => {
          if (data < node.data) {
             if (!node.left) {
                node.left = newNode
             }else {
                 searchTree(node.left)
             }
          }else if (data > node.data) {
             if (!node.right) {
                node.right = newNode
             }else {
                 searchTree(node.right)
             }
          }
       }
       searchTree (this.rootNode)
    }

 }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};