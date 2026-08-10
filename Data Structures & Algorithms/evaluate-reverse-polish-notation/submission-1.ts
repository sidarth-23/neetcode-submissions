class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack = []
        for (let token of tokens) {
            if ("+-*/".includes(token)) {
                const firstValue = stack.pop(), secondValue = stack.pop()
                switch (token) {
                    case "+":
                        stack.push(firstValue + secondValue)
                        break
                    case "-":
                        stack.push(secondValue - firstValue)
                        break
                    case "*":
                        stack.push(firstValue * secondValue)
                        break
                    case "/":
                        stack.push(Math.trunc(secondValue / firstValue))
                        break
                }
            } else {
                stack.push(parseInt(token))
            }

        }
        return stack.pop()
    }
}
