class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanedString = s.replaceAll(/\W/g, "").toLowerCase()
        const n = cleanedString.length
        for (let i = 0; i < Math.floor(n / 2); i++) {
            if (cleanedString[i] !== cleanedString[n - 1 - i]) {
                return false
            }
        }
        return true
    }
}
