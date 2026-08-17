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
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(
        head: ListNode | null,
        left: number,
        right: number,
    ): ListNode {
        let dummy = new ListNode(0, head)
        let before = dummy
        let curr = head

        while (left > 1) {
            before = curr
            curr = curr.next
            left--
            right--
        }

        const tail = curr
        let prev = before

        while (right > 0) {
            const temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
            right--
        }

        before.next = prev
        tail.next = curr
        return dummy.next
    }
}
