class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = prices[0], maxProfit = 0
        for (let i = 1; i < prices.length; i++) {
            maxProfit = Math.max(prices[i] - minPrice, maxProfit)
            minPrice = Math.min(minPrice, prices[i])
        }
        return maxProfit
    }
}
