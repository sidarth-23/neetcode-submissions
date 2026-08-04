class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let start = 0, end = numbers.length - 1
        while (start < end) {
            const difference = target - (numbers[end] + numbers[start])
            if (difference > 0) {
                start++
            }
            else if (difference < 0) {
                end--
            }
            else {
                return [start + 1, end + 1]
            }
        }
        return []
    }
}
