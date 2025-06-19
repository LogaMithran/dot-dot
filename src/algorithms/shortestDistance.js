class Tuple {
    constructor(_distance, _row, _col) {
        this.distance = _distance
        this.row = _row
        this.col = _col
    }
}

class Queue {
    constructor() {
        this.queue = []
    }

    peek = () => {
        return this.queue[0]
    }

    add = (element) => {
        this.queue.push(element)
    }
    remove = () => {
        this.queue.shift()
    }
    isEmpty = () => !this.queue.length

}

/**
 *
 * @param {number[][]} grid
 * @param {number[]} sourceNode
 * @param {number[]} destinationNode
 */
export const GetShortestPath = (grid, sourceNode, destinationNode) => {
    let queue = new Queue(), n = grid.length, m = grid[0].length,
        distance = Array.from({length: n}, () => Array(m).fill(Number.MAX_SAFE_INTEGER)),
        parent = Array.from({length: n}, () => Array(m).fill(null)), delRow = [-1, 0, +1, 0], delCOl = [0, +1, 0, -1]

    if (sourceNode[0] === destinationNode[0] && sourceNode[1] === destinationNode[1]) {
        return [[], -1]
    }

    for (let i = 0; i < 4; i++) {
        let adjRow = sourceNode[0] + delRow[i], adjCol = sourceNode[1] + delCOl[i]
        if (destinationNode[0] === adjRow && destinationNode[1] === adjCol) {
            return [[], 1]
        }
    }
    distance[sourceNode[0]][sourceNode[1]] = 0
    queue.add(new Tuple(0, sourceNode[0], sourceNode[1]))

    while (!queue.isEmpty()) {
        let tuple = queue.peek()
        queue.remove()

        for (let i = 0; i < 4; i++) {
            let adjRow = tuple.row + delRow[i], adjCol = tuple.col + delCOl[i]

            if (adjRow >= 0 && adjRow < n && adjCol >= 0 && adjCol < m && grid[adjRow][adjCol] === 1) {
                const adjWeight = tuple.distance + 1
                if (adjWeight < distance[adjRow][adjCol]) {
                    distance[adjRow][adjCol] = adjWeight
                    parent[adjRow][adjCol] = [tuple.row, tuple.col]
                    queue.add(new Tuple(adjWeight, adjRow, adjCol))

                    if (adjRow === destinationNode[0] && adjCol === destinationNode[1]) {
                        let path = [], currentPos = [adjRow, adjCol]

                        while (currentPos) {
                            path.push(currentPos)
                            currentPos = parent[currentPos[0]][currentPos[1]]
                        }
                        return [path.reverse(), adjWeight]
                    }
                }
            }
        }
    }
    return [[], 0]
}
/**
 * Tests
 */
// let grid = [[1, 1, 1, 1], [1, 1, 0, 1], [1, 1, 1, 1], [1, 1, 0, 0], [1, 0, 0, 1]], source = [0, 1], destination = [2, 2]

let grid = [[null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null], [null, null, null, 0, null, null, null, null, null, null, null], [null, null, null, null, null, null, 0, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null], [null, 1, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null], [null, null, 0, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, 1, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null]],
    source = [5, 1],
    destination = [8, 6]

GetShortestPath(grid, source, destination)
