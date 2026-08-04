class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let result = []
        const n = word1.length, m = word2.length
        for (let i = 0; i < n || i < m; i++) {
            if (i < n) {
                result.push(word1.charAt(i))
            }
            if (i < m) {
                result.push(word2.charAt(i))
            }
        }
        return result.join('')
    }
}
