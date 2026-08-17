// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        const oldToMap = new Map()
        oldToMap.set(null, null)

        let curr = head
        while (curr) {
            oldToMap.set(curr, new Node(curr.val))
            curr = curr.next
        }

        curr = head
        while (curr) {
            const copy = oldToMap.get(curr)
            copy.next = oldToMap.get(curr.next)
            copy.random = oldToMap.get(curr.random)
            curr = curr.next
        }

        return oldToMap.get(head)
    }
}
