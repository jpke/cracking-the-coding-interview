// Return Kth to Last
// Get the linked list node K places from the end of the list

const { default: LinkedListNode } = require("./linkedList");

// if linked list length is known, iterate to length - K, return that node
// if linked list length is not known, use recursion or iterate through list

// recursion

const kthToLast = (linkedListNode, k, kthNode) => {
  if (!linkedListNode) return [0, null];

  const recursionResult = kthToLast(linkedListNode.next, k, kthNode);
  const index = recursionResult[0] + 1;
  kthNode = recursionResult[1];

  if (index === k) {
    return [index, linkedListNode];
  }
  return [index, kthNode];
};

let node1 = new LinkedListNode(2);
node1.addToList(new LinkedListNode(5));
node1.addToList(new LinkedListNode(5));
node1.addToList(new LinkedListNode(3));

console.log(JSON.stringify(node1));
const kthNode = kthToLast(node1, 2);
console.log(JSON.stringify(kthNode[1]));
