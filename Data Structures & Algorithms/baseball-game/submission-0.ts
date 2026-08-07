class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let sum = 0
        const result: number[] = []

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "+") {
                const temp =
                    result[result.length - 1] +
                    result[result.length - 2]

                result.push(temp)
                sum += temp
                continue
            }

            if (operations[i] === "D") {
                const temp = result[result.length - 1] * 2

                result.push(temp)
                sum += temp
                continue
            }

            if (operations[i] === "C") {
                sum -= result[result.length - 1]
                result.pop()
                continue
            }

            const temp = parseInt(operations[i])
            result.push(temp)
            sum += temp
        }

        return sum
    }
}
