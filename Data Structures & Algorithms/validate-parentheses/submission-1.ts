class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []
        const map = {
            "}" : "{",
            "]" : "[",
            ")" : "("
        }
        const opening = Object.values(map)
        for (let letter of s) {
            if (opening.includes(letter)) {
                stack.push(letter)
            } else {
                if (stack.pop() !== map[letter]) {
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
