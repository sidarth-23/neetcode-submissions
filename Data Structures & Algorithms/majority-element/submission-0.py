class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = {}
        length = len(nums)
        for num in nums:
            count[num] = count.get(num, 0) + 1
            if count[num] > length / 2:
                return num
        