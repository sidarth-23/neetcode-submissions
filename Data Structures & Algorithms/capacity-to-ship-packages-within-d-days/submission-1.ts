class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights: number[], days: number): number {
        let l = Math.max(...weights), r = weights.reduce((a, b) => a + b, 0), res = r

        const canShip = (capacity: number): boolean => {
            let ships = 1, currentCapacity = capacity
            for (const weight of weights) {
                if (currentCapacity - weight < 0) {
                    ships++
                    if (ships > days) {
                        return false
                    }
                    currentCapacity = capacity
                }
                currentCapacity -= weight
            }
            return true
        }

        while (l <= r) {
            const capacity = Math.floor((l + r) / 2)
            if (canShip(capacity)) {
                res = Math.min(res, capacity)
                r = capacity - 1
            } else {
                l = capacity + 1
            }
        }

        return res
    }
}
