class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let result = "", i = 0
        while (i < word1.length && i < word2.length) {
            result += word1[i] + word2[i]
            i++
        }
        while (i < word1.length) {
            result += word1[i]
            i++
        }
        while (i < word2.length) {
            result += word2[i]
            i++
        }
        return result
    }
}
