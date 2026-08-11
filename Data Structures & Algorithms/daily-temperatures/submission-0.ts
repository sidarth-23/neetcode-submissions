class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res = new Array(temperatures.length).fill(0)
        const stack : number[][] = [] // [temp, index]

        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i]
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [_, stackI] = stack.pop()
                res[stackI] = i - stackI
            }
            stack.push([t, i])
        }

        return res
    }
}
