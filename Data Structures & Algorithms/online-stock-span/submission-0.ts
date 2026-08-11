class StockSpanner {
    stock : number[]
    constructor() {
        this.stock = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price: number): number {
        this.stock.push(price)
        let res = 1, pointer = this.stock.length - 2
        while (this.stock[pointer] <= price) {
            pointer -=1
            res += 1
        }
        return res
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
