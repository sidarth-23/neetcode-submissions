class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length, result = new Array(n * 2).fill(0)
        for (let i = 0; i < nums.length; i++) {
            result[i] = result[i + n] = nums[i]
        }
        return result
    }
}
