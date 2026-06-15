class TrieNode {
    children: Map<string, TrieNode>
    isEnd: boolean

    constructor() {
        this.children = new Map()
        this.isEnd = false
    }
}

class Trie {
    root : TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let node = this.root
        for (let char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode())
            }
            node = node.children.get(char)
        }
        node.isEnd = true
    }

    lcp() : string {
        let node = this.root, prefix = ""
        while (true) {
            if (node.isEnd) {
                break
            }
            if (node.children.size !== 1){
                break
            }
            const [char, nextNode] = node.children.entries().next().value
            prefix += char
            node = nextNode
        }
        return prefix
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        const prevTrie = new Trie()
        strs.forEach((value) => {
            prevTrie.insert(value)
        })

        return prevTrie.lcp()
    }
}
