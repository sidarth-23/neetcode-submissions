class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEnd = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children.has(word[i])) {
        node.children.set(word[i], new TrieNode());
      }
      node = node.children.get(word[i]) as TrieNode;
    }
    node.isEnd = true
  }

  lcp(): string {
    let node = this.root, prefix = ""
    while (!node.isEnd) {
      if (node.children.size === 1) {
        const [char, nextNode] = node.children.entries().next().value
        prefix += char
        node = nextNode
      } else {
        break
      }
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
        const trieList = new Trie()
        for (let word of strs) {
            trieList.insert(word)
        }
        return trieList.lcp()
    }
}
