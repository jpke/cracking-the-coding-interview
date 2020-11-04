// Partition
// Partition a linked list around a value. Nodes with data < x to the left of x, nodes >= x to the right.

const { default: LinkedListNode } = require("./linkedList");

const partition = (linkedListNode, partitionValue) => {
  let head = linkedListNode;
  let tail = linkedListNode;

  while (linkedListNode) {
    const next = linkedListNode.next;

    if (linkedListNode.data < partitionValue) {
      // insert to left (front of list)
      linkedListNode.next = head;
      head = linkedListNode;
    } else {
      // insert to right (end of list)
      tail.next = linkedListNode;
      tail = linkedListNode;
    }
    linkedListNode = next;
  }
  tail.next = null;

  return head;
};

const node1 = new LinkedListNode(2);
node1.addToList(new LinkedListNode(5));
node1.addToList(new LinkedListNode(8));
node1.addToList(new LinkedListNode(9));
node1.addToList(new LinkedListNode(7));
node1.addToList(new LinkedListNode(1));
node1.addToList(new LinkedListNode(3));

console.log(JSON.stringify(node1)); // 2,5,8,9,7,1,3
const partitionedList = partition(node1, 4);
console.log(JSON.stringify(partitionedList)); // 3,1,2,5,8,9,7
