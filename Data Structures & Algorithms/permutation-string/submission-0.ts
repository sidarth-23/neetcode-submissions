class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let matches = 0
        const s1Counts = new Array(26).fill(0), s2Counts = new Array(26).fill(0), k = s1.length

        for (let i = 0; i < k; i++) {
            s1Counts[s1.charCodeAt(i) - 97] += 1
            s2Counts[s2.charCodeAt(i) - 97] += 1
        }
        for (let i = 0; i < 26; i++) {
            if (s1Counts[i] === s2Counts[i]) {
                matches += 1
            }
        }

        for (let i = k; i < s2.length; i++) {
            if (matches === 26) {
                return true
            }

            const add = s2.charCodeAt(i) - 97
            s2Counts[add]++

            if (s1Counts[add] === s2Counts[add]) {
                matches++
            } else if (s1Counts[add] + 1 === s2Counts[add]) {
                matches--
            }

            const remove = s2.charCodeAt(i - k) - 97
            s2Counts[remove]--

            if (s1Counts[remove] === s2Counts[remove]) {
                matches++
            } else if (s1Counts[remove] - 1 === s2Counts[remove]) {
                matches--
            }
        }

        return matches === 26
    }
}
