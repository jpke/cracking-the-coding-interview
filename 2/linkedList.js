export default class LinkedListNode {
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
