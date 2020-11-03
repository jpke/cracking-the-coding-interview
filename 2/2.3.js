// Delete Middle Node

// given the node to delete, copy data from next node and then remove next node from linked list
// node given cannot be last node in linked list

const { default: LinkedListNode } = require("./linkedList");

const deleteNode = (nodeToDelete) => {
  if (!nodeToDelete || !nodeToDelete.next) return false;
  const nextNode = nodeToDelete.next;
  nodeToDelete.data = nextNode.data;
  nodeToDelete.next = nextNode.next;
  return true;
};

let node1 = new LinkedListNode("a");
node1.addToList(new LinkedListNode("b"));

const nodeC = new LinkedListNode("c");
node1.addToList(nodeC);
node1.addToList(new LinkedListNode("d"));
const nodeE = new LinkedListNode("e");
node1.addToList(nodeE);

console.log(JSON.stringify(node1));
console.log(deleteNode(nodeC)); // returns true, succeeding
console.log(JSON.stringify(node1));
console.log(deleteNode(nodeE)); // returns false
console.log(JSON.stringify(node1)); // unchanged
