class Trie:
    def __init__(self):
        self.root = {}
        self.end_symbol = "*"
    
    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            if char not in node:
                node[char] = {}
            node = node[char]
        node[self.end_symbol] = True
    
    def lcp(self) -> str:
        node = self.root
        prefix = ""
        while True:
            children = []
            for key in node.keys():
                if key != self.end_symbol:
                    children.append(key)
            if self.end_symbol in node or len(children) != 1:
                break
            prefix += children[0]
            node = node[children[0]]
        return prefix

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 1:
            return strs[0]
        
        trie = Trie()
        for word in strs:
            trie.insert(word)
        return trie.lcp()
        