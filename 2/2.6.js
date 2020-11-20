// Palindrome
// Check if a linked list is a palindrome

const { default: LinkedListNode } = require("./linkedList");

const reverseAndClone = (linkedListToReverse) => {
  let reversedListHead = null;
  while (linkedListToReverse != null) {
    const newNode = new LinkedListNode(linkedListToReverse.data);
    newNode.next = reversedListHead;
    reversedListHead = newNode;
    linkedListToReverse = linkedListToReverse.next;
  }
  return reversedListHead;
}

const isEqual = (listA, listB) => {
  while (listA !== null && listB !== null) {
    if (listA.data !== listB.data) return false;
    listA = listA.next;
    listB = listB.next;
  }
  return listA === null && listB === null;
}

const isPalindrome = (linkedListHead) => {
  const reversed = reverseAndClone(linkedListHead);
  return isEqual(linkedListHead, reversed);
}

const isAPalindromeList = new LinkedListNode(6);
isAPalindromeList.addToList(new LinkedListNode(1));
isAPalindromeList.addToList(new LinkedListNode(7));
isAPalindromeList.addToList(new LinkedListNode(1));
isAPalindromeList.addToList(new LinkedListNode(6));

console.log(JSON.stringify(isAPalindromeList));
console.log(JSON.stringify(isPalindrome(isAPalindromeList))); // true

const isNotAPalindromeList = new LinkedListNode(6);
isNotAPalindromeList.addToList(new LinkedListNode(1));
isNotAPalindromeList.addToList(new LinkedListNode(7));
isNotAPalindromeList.addToList(new LinkedListNode(1));
isNotAPalindromeList.addToList(new LinkedListNode(7));

console.log(JSON.stringify(isNotAPalindromeList));
console.log(JSON.stringify(isPalindrome(isNotAPalindromeList))); // false