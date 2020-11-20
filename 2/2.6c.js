// Palindrome
// Check if a linked list is a palindrome, using a recursive approach
// recurse to middle of list
// as recursive calls return, node 'x' recursive calls prior to middle and after the middle are compared
// if any node comparision does not match, result is set to false and propagated back up the recursive call stack

import { default as LinkedListNode } from "./linkedList";


const isPalindrome = (linkedListHead) => {
  const length = linkedListHead.getLinkedListLength();
  return isPalindromeRecurse(linkedListHead, length).result;
}

const isPalindromeRecurse = (head, length) => {
  if(!head || !length) { // at middle of list (head should never actually be null)
    return {node: head, result: true};
  } else if (length === 1) { //handle odd number of nodes, return subsequent node
    return {node: head.next, result: true};
  }

  // if not at end of list, recurse, returning node matching inverse position in list 
  // (if this node's position is 'x' places from the front, the returned node will be 'x' places from the back)
  const res = isPalindromeRecurse(head.next, length - 2);

  if(!res.node || !res.result) return res;

  res.result = (head.data === res.node.data);
  res.node = res.node.next;
  return res
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