class ListNode {
    key: number
    val: number
    prev: ListNode
    next: ListNode

    constructor(key: number, val: number, prev: ListNode = null, next: ListNode = null) {
        this.key = key
        this.val = val
        this.prev = prev
        this.next = next
    }
}

class LRUCache {
    capacity: number
    left: ListNode
    right: ListNode
    record: Map<number, ListNode>
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
        this.left = new ListNode(0, 0)
        this.right = new ListNode(0, 0, this.left)
        this.left.next = this.right
        this.record = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.record.has(key)) return -1

        const node = this.record.get(key)

        this.#remove(node)
        this.#insert(node)

        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.record.has(key)) {
            this.#remove(this.record.get(key))
        }
        const node = new ListNode(key, value)
        this.#insert(node)
        this.record.set(key, node)

        if (this.record.size > this.capacity) {
        const lru = this.left.next

        this.#remove(lru)
        this.record.delete(lru.key)
    }
    }

    #remove(node: ListNode): void {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    #insert(node: ListNode): void {
        node.prev = this.right.prev
        node.next = this.right

        this.right.prev.next = node
        this.right.prev = node
    }
}
