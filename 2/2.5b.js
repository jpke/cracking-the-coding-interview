// Sum Lists
// Take two linked lists, return the sum of their data in order as a linked list
// eg: (6 -> 1 -> 7) + (2 -> 9 -> 5) = 617 + 295 = 912 = (9 -> 1 -> 2)

// compare lists, if one is shorter, pad it with zeros
// starting with both lists, recursively iterate through them, until neither one has any nodes left
// in each recursion, early exit if both lists are null and there is no carry
// otherwise, create a new node, setting the sum mod 10 of each lists' data, and the carry value
// if either list still has nodes left, recursively call this function
// append the result of this recursive call (a linked list node) to the node created during this iteration
// return this node


const { default: LinkedListNode } = require("./linkedList");

class PartialSum {
  constructor() {
    this.sum = null
    this.carry = 0
  }
}

const insertBefore = (listToAppend, data) => {
  const node = new LinkedListNode(data);
  if(listToAppend) node.next = listToAppend;
  return node;
}

const padList = (list, padding) => {
  let head = list;
  for(let i = 0; i < padding; i++) {
    head = insertBefore(head, 0)
  }
  return head
}

const addListsHelper = (listA, listB) => {
  if(!listA && !listB) return new PartialSum()

  // recursively reach end of list
  const sum = addListsHelper(listA.next, listB.next)

  // add lists and carry
  const val = sum.carry + listA.data + listB.data;

  // set result to new node in front of result list
  sum.sum = insertBefore(sum.sum, val % 10)
  sum.carry = Math.floor(val / 10);
  return sum;
}

const addLists = (listA, listB) => {
  const listALength = listA.length;
  const listBLength = listB.length;

  console.log(listA.length, listB.length)

  // pad with zeros if necessary
  if(listALength < listBLength) {
    listA = padList(listA, listBLength - listALength)
  } else {
    listB = padList(listB, listALength - listBLength)
  }

  // recursively move to end of lists, then return, adding sums in each iteration, appending each new sum to the front of a result list
  let sum = addListsHelper(listA, listB)

  if(sum.carry === 0) {
    return sum.sum
  }

  // handle carry by setting into new node at front of list
  return insertBefore(sum.sum, sum.carry)
}

const node1 = new LinkedListNode(6);
node1.addToList(new LinkedListNode(1));
node1.addToList(new LinkedListNode(7));
node1.addToList(new LinkedListNode(1));


const node2 = new LinkedListNode(2);
node2.addToList(new LinkedListNode(9));
node2.addToList(new LinkedListNode(5));

console.log(JSON.stringify(node1));
console.log(JSON.stringify(node2));
// (6 -> 1 -> 7) + (2 -> 9 -> 5) = 617 + 295 = 912 = (9 -> 1 -> 2)
console.log(JSON.stringify(addLists(node1, node2)));