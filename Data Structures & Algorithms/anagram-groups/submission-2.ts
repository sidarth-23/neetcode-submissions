class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const prevMap: Map<string, string[]> = new Map()
        const result : string [][] = []
        strs.forEach((value) => {
            const count = new Array(26).fill(0)
            for (const str of value) {
                const index = str.charCodeAt(0) - "a".charCodeAt(0)
                count[index]++
            }
            const key = count.join("#")
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
