class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        const n = cleaned.length
        for (let i = 0; i < Math.floor(n / 2); i++) {
            if (cleaned[i] !== cleaned[n - 1 - i]) {
                return false
            }
        }
        return true
    }
}
