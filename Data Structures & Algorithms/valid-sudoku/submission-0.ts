class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowMap = new Map<number, Set<string>>();
        const colMap = new Map<number, Set<string>>();
        const boxMap = new Map<number, Set<string>>();

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const value = board[i][j];

                // Empty cells do not participate in validation
                if (value === ".") continue;

                const boxIndex =
                    Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (!rowMap.has(i)) {
                    rowMap.set(i, new Set());
                }

                if (!colMap.has(j)) {
                    colMap.set(j, new Set());
                }

                if (!boxMap.has(boxIndex)) {
                    boxMap.set(boxIndex, new Set());
                }

                if (
                    rowMap.get(i)!.has(value) ||
                    colMap.get(j)!.has(value) ||
                    boxMap.get(boxIndex)!.has(value)
                ) {
                    return false;
                }

                rowMap.get(i)!.add(value);
                colMap.get(j)!.add(value);
                boxMap.get(boxIndex)!.add(value);
            }
        }

        return true;
    }
}
