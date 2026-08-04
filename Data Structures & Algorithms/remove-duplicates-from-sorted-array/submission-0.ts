class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let marker: number = nums[nums.length - 1]
        for (let i = nums.length - 2; i >= 0; i--) {
            if (nums[i] !== marker) {
                marker = nums[i]
            } else if (marker === nums[i]) {
                nums.splice(i, 1)
            }
        }
        return nums.length
    }
}
