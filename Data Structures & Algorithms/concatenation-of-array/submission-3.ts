class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const result : number[] = []
        const n = nums.length
        for (let i = 0; i < n; i++) {
            result[i] = result[i+n] = nums[i]
        }
        return result
    }
}
