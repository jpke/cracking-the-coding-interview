// Remove Dups
// Remove duplicates from an unsorted linked list
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

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  addToList(newNode) {
    let pointer = this.next;
    if (!this.next) return (this.next = newNode);
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = newNode;
  }
}

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
// }

let node1 = new LinkedListNode(2);

node1.addToList(new LinkedListNode(5));
node1.addToList(new LinkedListNode(5));
node1.addToList(new LinkedListNode(3));

console.log(JSON.stringify(node1));
deleteDups(node1);
console.log(JSON.stringify(node1));
