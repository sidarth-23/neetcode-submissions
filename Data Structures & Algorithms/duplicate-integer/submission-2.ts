class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dump = {}
        for (const value of nums) {
            if (dump[value]) {
                return true
            }
            dump[value] = true
        }
        return false
    }
}
