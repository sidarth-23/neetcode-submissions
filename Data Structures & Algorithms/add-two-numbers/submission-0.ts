/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let dummy = new ListNode(0), result = dummy, remainder = 0

        while (l1 || l2) {
            const v1 = l1 ? l1.val : 0
            const v2 = l2 ? l2.val : 0

            const sum = v1 + v2 + remainder

            result.next = new ListNode(sum % 10)
            result = result.next

            remainder = Math.floor(sum / 10)

            l1 = l1?.next ?? null
            l2 = l2?.next ?? null
        }

        if (remainder) {
            result.next = new ListNode(remainder)
        }

        return dummy.next
    }
}
