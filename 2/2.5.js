// Sum Lists
// Take two linked lists, return the sum of their data in reverse order as a linked list
// eg: (7 -> 1 -> 6) + (5 -> 9 -> 2) = 617 + 295 = 912 = (2 -> 1 -> 9)

// starting with both lists, recursively iterate through them, until neither one has any nodes left
// in each recursion, early exit if both lists are null and there is no carry
// otherwise, create a new node, setting the sum mod 10 of each lists' data, and the carry value
// if either list still has nodes left, recursively call this function
// append the result of this recursive call (a linked list node) to the node created during this iteration
// return this node


const { default: LinkedListNode } = require("./linkedList");

const addLists = (listA, listB, carry = 0) => {
  if(!listA && !listB && carry === 0) return null;
  
  const result = new LinkedListNode();
  let value = carry;

  if(listA) value += listA.data;
  if(listB) value += listB.data;

  console.log(value, value % 10)

  result.data = value % 10

  if(listA || listB) {
    const more = addLists(listA ? listA.next : null, listB ? listB.next : null, value >= 10 ? 1 : 0);
    result.addToList(new LinkedListNode(more));
  }
  return result;
};

const node1 = new LinkedListNode(7);
node1.addToList(new LinkedListNode(1));
node1.addToList(new LinkedListNode(6));
node1.addToList(new LinkedListNode(1));


const node2 = new LinkedListNode(5);
node2.addToList(new LinkedListNode(9));
node2.addToList(new LinkedListNode(2));

console.log(JSON.stringify(node1));
console.log(JSON.stringify(node2));
// (7 -> 1 -> 6 -> 1) + (5 -> 9 -> 2) = 1617 + 295 = 1912 = (2 -> 1 -> 9 -> 1)
console.log(JSON.stringify(addLists(node1, node2)));