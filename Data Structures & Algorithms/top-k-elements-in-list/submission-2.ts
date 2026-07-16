class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map: Map<number, number> = new Map()
        const freq = Array.from({ length: nums.length + 1 }, () => [])
        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }
        for (const [num, count] of map) {
            freq[count].push(num)
        }
        const result = []
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                result.push(n)
                if (result.length === k) {
                    return result
                }
            }
        }
    }
}
