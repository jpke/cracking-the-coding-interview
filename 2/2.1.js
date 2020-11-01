// Remove Dups
// Remove duplicates from an unsorted linked list

const { default: LinkedListNode } = require("./linkedList");

// O(N) time
// iterate through linked list, checking if each node's value was stored in set previously.
// if not, store value in set
// if value is already in set, remove current node

const deleteDups = (linkedListNode) => {
  let previouslySeenValueSet = new Set();
  let previousNode = null;

  while (linkedListNode) {
    if (previouslySeenValueSet.has(linkedListNode.data)) {
      previousNode.next = linkedListNode.next;
    } else {
      previouslySeenValueSet.add(linkedListNode.data);
      previousNode = linkedListNode;
    }
    linkedListNode = linkedListNode.next;
  }
};

// alternative, requiring O(1) space but O(N^2) time
// iterate through the list and every subsequent node in the list, removing subsequent nodes that match data in the current node
const deleteDupsWithoutSet = (linkedListNode) => {
  let currentNode = linkedListNode;

  while (currentNode) {
    let runnerNode = currentNode;
    while (runnerNode.next) {
      if (runnerNode.next.data === currentNode.data) {
        // remove duplicate
        runnerNode.next = runnerNode.next.next;
      } else {
        runnerNode = runnerNode.next;
      }
    }
    currentNode = currentNode.next;
  }
};

let node1 = new LinkedListNode(2);
node1.addToList(new LinkedListNode(5));
node1.addToList(new LinkedListNode(5));
node1.addToList(new LinkedListNode(3));

console.log(JSON.stringify(node1));
deleteDups(node1);
console.log(JSON.stringify(node1));

let node2 = new LinkedListNode(2);
node2.addToList(new LinkedListNode(5));
node2.addToList(new LinkedListNode(5));
node2.addToList(new LinkedListNode(3));

console.log(JSON.stringify(node2));
deleteDupsWithoutSet(node2);
console.log(JSON.stringify(node2));
