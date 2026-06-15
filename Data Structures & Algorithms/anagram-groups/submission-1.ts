class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const prevMap: Map<string, string[]> = new Map()
        const result : string [][] = []
        strs.forEach((value) => {
            const key = value.split('').sort().join('')
            if (!prevMap.has(key)) {
                prevMap.set(key, [])
            }
            prevMap.set(key, [value, ...prevMap.get(key)])
        })
        prevMap.forEach((value) => {
            result.push(value)
        })
        return result
    }
}
