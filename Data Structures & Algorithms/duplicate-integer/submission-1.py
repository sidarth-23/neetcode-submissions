class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        result_set = set()
        for item in nums:
            if item in result_set:
                return True
            result_set.add(item)
        return False