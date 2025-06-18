/**
 *
 * @param {number} V - Number of vertex
 * @param {number[][]} edges - Edges between u -> v
 * @param {number} source - Source node to start with
 * @param destination
 */
export const BellmanFord = (V, edges, source, destination) => {
    let distance = Array(V).fill(1e8), parent = Array(V)

    for (let i = 0; i < V; i++) {
        parent[i] = i
    }
    distance[source] = 0

    for (let i = 0; i < V; i++) {
        for (const edge of edges) {
            let [u, v, wt] = edge
            if (distance[u] !== 1e8 && distance[u] + wt < distance[v]) {
                if (i === V - 1) return -1
                parent[v] = u
                distance[v] = distance[u] + wt;
            }
        }
    }

    let node = destination,
        path = []
    while (parent[node] !== node) {
        path.push(node)
        node = parent[node]
    }
    path.push(source)
    if (distance[node] === 1e8) {
        return [[-1], [-1]]
    }
    if (path.length === 1 && path[0] === source) {
        path.push(destination)
        return [distance, path]
    }
    return [distance, path.reverse()]
}


let V = 5, edge = [[1, 3, 2], [4, 3, -1], [2, 4, 1], [1, 2, 1], [0, 1, 5]], src = 0


console.log(BellmanFord(V, edge, src, 2))