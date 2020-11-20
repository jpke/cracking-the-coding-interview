// Palindrome
// Check if a linked list is a palindrome, using an iterative approach
// to handle unknown list length, iterate through the list using fast and slow runners; slow runner pushes each element onto a stack
// when fast runner reaches end of list, slow runner is halfway through
// after halfway, slow runner iterates through remaining list, comparing each node to the top of the stack

import { default as LinkedListNode } from "./linkedList";


const isPalindrome = (linkedListHead) => {
  let fast = linkedListHead;
  let slow = linkedListHead;

  let stack = [];

  // iterate through list, fast runner twice as fast as slow; slow runner pushes onto stack
  while(fast && fast.next) {
    stack.push(slow.data);
    slow = slow.next;
    fast = fast.next.next;
  }

  // handle odd list length
  if(fast) slow = slow.next;

// iterate through second half of list, comparing data with stack
  while(slow) {
    const top = stack.pop();
    if(top !== slow.data) return false;
    slow = slow.next;
  }
  return true;
}

const isAnEvenLengthPalindromeList = new LinkedListNode(6);
isAnEvenLengthPalindromeList.addToList(new LinkedListNode(1));
isAnEvenLengthPalindromeList.addToList(new LinkedListNode(1));
isAnEvenLengthPalindromeList.addToList(new LinkedListNode(6));

console.log(JSON.stringify(isAnEvenLengthPalindromeList));
console.log(JSON.stringify(isPalindrome(isAnEvenLengthPalindromeList))); // true

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