class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const res = []
        for (const s of strs) {
            res.push(String(s.length), "#", s)
        }
        return res.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str.length === 0) return []
        let result = []
        let lengthStr = ""
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== "#") {
                lengthStr += str[i]
            } else {
                i++
                const length = parseInt(lengthStr)
                lengthStr = ""
                result.push(str.slice(i,i+length))
                i += length - 1
            }
        }
        return result
    }
}
