class Pair {
    constructor(node, weight) {
        this.node = node;
        this.weight = weight;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = []
    }

    add = function (element) {
        this.queue.push(element)
        this.queue.sort((a, b) => a.weight - b.weight)
    }

    peek = function () {
        return this.queue[0]
    }

    remove = function () {
        this.queue.shift()
    }

    isEmpty = function () {
        return this.queue.length > 0
    }
}

/**
 *
 * @param {number} n - Number of nodes
 * @param {number} m - Number of edges
 * @param edges
 * @constructor
 */
export const FindShortestPath = (n, m, edges) => {
    /**
     * Initializations
     * parent array - to track the node where it came from
     * distance from a -> b how much distance it's required
     */
    let
        adjList = Array.from({length: n + 1}, () => []),
        pq = new PriorityQueue(),
        parent = new Array(n + 1),
        distance = new Array(n + 1)

    for (let i = 1; i <= n; i++) {
        distance[i] = Number.MAX_SAFE_INTEGER
        parent[i] = i
    }

    for (let i = 0; i < m; i++) {
        adjList[edges[i][0]].push(
            new Pair(edges[i][1], edges[i][2])
        )
        adjList[edges[i][1]].push(
            new Pair(edges[i][0], edges[i][2])
        )
    }
    distance[1] = 0
    pq.add(new Pair(1, 0))

    while (pq.isEmpty()) {
        let node = pq.peek().node,
            nodeDistance = pq.peek().weight
        pq.remove()
        for (let i = 0; i < adjList[node].length; i++) {

            let adjacentNode = adjList[node][i].node,
                adjacentNodeWeight = adjList[node][i].weight

            if (nodeDistance + adjacentNodeWeight < distance[adjacentNode]) {
                distance[adjacentNode] = nodeDistance + adjacentNodeWeight
                pq.add(new Pair(adjacentNode, nodeDistance + adjacentNodeWeight))
                parent[adjacentNode] = node
            }
        }
    }
    let node = n
    if(distance[node] === Number.MAX_SAFE_INTEGER) return [-1]
    let path = []
    while (parent[node] !== node) {
        path.push(node)
        node = parent[node]
    }

    path.push(1)
    console.log("parent", parent)
    console.log("distance", distance)
    return path.reverse()
}

// Tests

let n = 5,
    m = 6,
    edges = [[1, 2, 2], [2, 5, 5], [2, 3, 4], [1, 4, 1], [4, 3, 3], [3, 5, 1]]
console.log(FindShortestPath(n, m, edges))
console.log(FindShortestPath(2, 1, [[1, 2, 2]]))
console.log(FindShortestPath(5, 6, [[1, 2, 2],
    [2, 5, 5],
    [2, 3, 4],
    [1, 4, 1],
    [4, 3, 3],
    [3, 5, 1]]))

