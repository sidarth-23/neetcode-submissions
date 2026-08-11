class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1, r = Math.max(...piles), res = r

        while (l <= r) {
            const k = Math.floor((l + r) / 2)

            let totalTime = 0
            for (const pile of piles) {
                totalTime += Math.ceil(pile / k)
            }

            if (totalTime > h) {
                l = k + 1
            } else {
                res = k
                r = k - 1
            }
        }

        return res
    }
}
