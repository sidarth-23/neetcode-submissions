class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let fast = nums[0], slow = nums[0]

        while (true) {
            fast = nums[nums[fast]]
            slow = nums[slow]
            if (fast === slow) break
        }

        fast = nums[0]
        while (fast !== slow) {
            fast = nums[fast]
            slow = nums[slow]
        }

        return slow
    }
}
