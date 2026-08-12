class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0, r = nums.length - 1
        while (l < r) {
            const m = l + Math.floor((r - l) / 2)
            if (nums[m] < nums[r]) {
                r = m
            } else {
                l = m + 1
            }
        }

        let resultantArray = [], diff = 0, pivot = l

        if (target >= nums[pivot] && target <= nums[nums.length - 1]) {
            resultantArray = nums.slice(pivot)
            diff = pivot
        }
        else if (pivot > 0 && target >= nums[0] && target <= nums[pivot - 1]) {
            resultantArray = nums.slice(0, pivot)
        }
        else {
            return -1
        }

        l = 0, r = resultantArray.length - 1
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2)
            if (target > resultantArray[m]) {
                l = m + 1
            } else if (target < resultantArray[m]) {
                r = m - 1
            } else {
                return m + diff
            }
        }

        return -1
    }
}
