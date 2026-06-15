class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const result = []
        nums.forEach((value, i) => {
            result[i] = result[i+nums.length] = value
        })
        return result
    }
}
