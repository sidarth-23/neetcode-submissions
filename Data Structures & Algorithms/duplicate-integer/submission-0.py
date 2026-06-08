class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        result_set = set()
        for item in nums:
            result_set.add(item)
        print(result_set)
        return len(result_set) != len(nums)