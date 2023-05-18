// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1, 2, 3, 4, 5]
// Output: [3, 4, 5]
// Explanation: The middle node of the list is node 3.

// https://leetcode.com/problems/middle-of-the-linked-list/description/

const middleNode = (head) => {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
};

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function (head) {
    let fast = head
    let slow = head
    let i = 0

    while (fast && fast.next) {
        if (slow.val === fast.val && i > 1) return true
        slow = slow.next
        fast = fast.next.next
        i++
    }

    return false
};

// Example 3: Given the head of a linked list and an integer k, return the kth node from the end.

// For example, given the linked list that represents 1 -> 2 -> 3 -> 4 -> 5 and k = 2, return the node with value 4, as it is the 2nd node from the end.

let findNode = (head, k) => {
    let slow = head;
    let fast = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}