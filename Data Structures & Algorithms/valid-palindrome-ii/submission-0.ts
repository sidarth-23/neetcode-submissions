class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "")

        const isPalindromeRange = (str: string, i: number, j: number): boolean => {
            while (i < j) {
                if (str[i] !== str[j]) return false
                i++
                j--
            }
            return true
        }

        let left = 0
        let right = cleaned.length - 1
        while (left < right) {
            if (cleaned[left] !== cleaned[right]) {
                return (
                    isPalindromeRange(cleaned, left + 1, right) ||
                    isPalindromeRange(cleaned, left, right - 1)
                )
            }
            left++
            right--
        }
        return true
    }
}
