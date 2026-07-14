class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result = {}
        for (let word of strs) {
            const indentifier = new Array(26).fill(0)
            for (let char of word) {
                indentifier[char.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }
            const key = indentifier.join(",")
            if (!result[key]) {
                result[key] = []
            }
            result[key].push(word)
        }
        return Object.values(result)
    }
}
