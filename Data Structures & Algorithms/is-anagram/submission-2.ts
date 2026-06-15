class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }
        for (const letter of s) {
            if (!t.includes(letter)) {
                return false
            }
            t = t.replace(letter, "")
        }
        return true
    }
}
