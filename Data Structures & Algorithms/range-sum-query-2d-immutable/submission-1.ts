class NumMatrix {
    prefix: number[][]
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix: number[][]) {
        const rows = matrix.length
        const cols = matrix[0].length

        this.prefix = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0))

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.prefix[i + 1][j + 1] = matrix[i][j] + this.prefix[i + 1][j] + this.prefix[i][j + 1] - this.prefix[i][j]
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return this.prefix[row2 + 1][col2 + 1] - this.prefix[row1][col2 + 1] - this.prefix[row2 + 1][col1] + this.prefix[row1][col1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
