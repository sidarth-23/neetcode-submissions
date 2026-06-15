class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let j = nums.length - 1, i = 0
        while (i <= j) {
            if (nums[i] === val) {
                nums[i] = nums[j]
                nums.pop()
                j--
            } else {
                i++
            }
        }
        return nums.length
    }
}
