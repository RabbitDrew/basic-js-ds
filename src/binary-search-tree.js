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
       const addNewNode = node => {
          if (data < node.data) {
             if (!node.left) {
                node.left = newNode
             }else {
              addNewNode(node.left)
             }
          }else if (data > node.data) {
             if (!node.right) {
                node.right = newNode
             }else {
              addNewNode(node.right)
             }
          }
       }
       addNewNode (this.rootNode)
    }

 }

 has(data) {
  if (!this.rootNode) {
     return false
  }else {
     const searchNode = node => {
        if (node.data === data) {
          return true;
        } else {
          if (data < node.data) {
            if (!node.left) {
              return false; 
            } else {
              return searchNode(node.left); 
            }
          } 
          else if (data > node.data) {
            if (!node.right) {
              return false; 
            } else {
              return searchNode(node.right);
            }
          }
        }
      };
      return searchNode(this.rootNode);
    }
}

find(data) {
  if (!this.rootNode) {
     return null
  }else {
     const findElemnt  = node => {
        if (data === node.data) {
           return node
        }else {
           if (data < node.data) {
              if (!node.left) {
                 return null
              }else {
                 return findElemnt(node.left)
              }
           }else if (data > node.data) {
              if (!node.right) {
                 return null
              }else {
                 return findElemnt(node.right)
              }
           }
        }
     }
     return findElemnt(this.rootNode)
  }
}

remove(data) {
  let copyRoot = this.rootNode;
  if (!this.rootNode) {
    return null;
  } else {
    const removeNode = (node, data) => {
      if (!node) {
        return null;
      } else {
        if (data === node.data) {
          if (!node.left && !node.right) {
            return null; 
          } else if (!node.left && node.right) {
            return node.right; 
          } else if (node.left && !node.right) {
            return node.left;
          } else if (node.left && node.right) {
            let minNode = findMinNode(node.right); 
            node.data = minNode.data; 
            node.right = removeNode(node.right, minNode.data); 
          }
        } else if (data < node.data) {
          node.left = removeNode(node.left, data); 
        } else {
          node.right = removeNode(node.right, data); 
        }
        return node;
      }
    };

    const findMinNode = (node) => {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    };
    this.rootNode = removeNode(copyRoot, data);
  }
}


 min() {
   let currentNode = this.rootNode;
   while (currentNode && currentNode.left) {
       currentNode = currentNode.left;
   }
   return currentNode ? currentNode.data : null;  
  }

  max() {
   let currentNode = this.rootNode;
   while (currentNode && currentNode.right) {
       currentNode = currentNode.right;
   }
   return currentNode ? currentNode.data : null;  
  }
}

module.exports = {
  BinarySearchTree
}