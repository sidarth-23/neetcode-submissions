class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        let n = nums.length
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap/2)) {
            for (let i = gap; i < n; i++) {
                let temp = nums[i]
                let j = i
                while (j >= gap && nums[j - gap] > temp) {
                    nums[j] = nums[j - gap]
                    j -= gap
                }
                nums[j] = temp
            }
        }
        return nums
    }
}
