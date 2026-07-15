class HashKey {
    value: number
    next: HashKey | null

    constructor(value: number) {
        this.value = value
        this.next = null
    }
}

class MyHashSet {
    root: HashKey
    constructor() {
        this.root = new HashKey(-1)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        let node = this.root
        while (node.next !== null) {
            if (node.next.value === key) {
                return
            }
            node = node.next
        }
        node.next = new HashKey(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        let node = this.root
        while (node.next !== null) {
            if (node.next.value === key) {
                node.next = node.next.next
                return
            }
            node = node.next
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        let node = this.root.next
        while (node !== null) {
            if (node.value === key) {
                return true
            }
            node = node.next
        }
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
