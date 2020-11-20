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
  
  getLinkedListLength() {
    let length = 1;
    let pointer = this;
    while (pointer.next) {
      length += 1;
      pointer = pointer.next;
    }
    return length;
  }
}

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
// }
