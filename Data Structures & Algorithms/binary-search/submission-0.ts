class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0, r = nums.length
        while (l < r) {
            let m = l + Math.floor((r - l) / 2)
            if (target > nums[m]) {
                l = m + 1
            } else if (target < nums[m]) {
                r = m
            } else {
                return m
            }
        }
        return -1
    }
}
