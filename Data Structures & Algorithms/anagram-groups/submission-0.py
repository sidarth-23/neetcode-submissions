class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        count = {}
        result = []
        for item in strs:
            sorted_str = tuple(sorted(item))
            if not sorted_str in count:
                count[sorted_str] = len(result)
                result.append([item])
            else:
                result[count[sorted_str]].append(item)
        return result