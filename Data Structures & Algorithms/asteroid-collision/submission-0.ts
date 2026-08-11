class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids: number[]): number[] {
        const result = []
        for (let asteroid of asteroids) {
            while (result.length && asteroid < 0 && result[result.length - 1] > 0) {
                const diff = asteroid + result[result.length - 1]
                if (diff < 0) {
                    result.pop()
                } else if (diff > 0) {
                    asteroid = 0
                } else {
                    asteroid = 0
                    result.pop()
                }
            }
            if (asteroid !== 0) {
                result.push(asteroid)
            }

        }

        return result

    }
}
