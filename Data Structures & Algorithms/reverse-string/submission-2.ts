class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        const n = s.length
        for (let i = 0; i < Math.floor(n / 2); i++) {
            const temp = s[n - 1 - i]
            s[n - 1 - i] = s[i]
            s[i] = temp 
        }
    }
}
