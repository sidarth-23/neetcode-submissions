class MyQueue {
    input : Array<any>
    output : Array<any>
    constructor() {
        this.input = []
        this.output = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.input.push(x)
    }

    /**
     * @return {number}
     */
    pop(): number {
        this.move()
        return this.output.pop()
    }

    /**
     * @return {number}
     */
    peek(): number {
        this.move()
        return this.output[this.output.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.input.length === 0 && this.output.length === 0
    }

    private move() {
        if (this.output.length === 0) {
            while (this.input.length > 0) {
                this.output.push(this.input.pop())
            }
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
