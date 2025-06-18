import {Pair} from "../utils/Pair.js";
import DefaultNodes from "../components/Flow/Nodes/DefaultNodes.js";
import DefaultEdge from "../components/Flow/Edges/DefaultEdge.js";

const nodes = [...DefaultNodes]


const edges = [...DefaultEdge]

const buildAdjacencyList = (source, destination) => {
    let adjacencyList = new Map()
    for (const edge of edges) {
        let isSource = nodes.filter((x) => edge.source === x.id && x.type === 'Source')
        if (isSource.length) {
            isSource = isSource[0].id.split("_")
            source = parseInt(isSource[1])
            break
        }
    }
    for (const edge of edges) {
        let isDestination = nodes.filter((x) => edge.source === x.id && x.type === 'Destination')
        if (isDestination.length) {
            isDestination = isDestination[0].id.split("_")
            destination = parseInt(isDestination[1])
            break
        }
    }


    for (const edge of edges) {
        let source = edge.source, destination = edge.target, weight = parseInt(edge.data.weight || 1),
            sourceNode = parseInt(source.split("_")[1]), targetNode = parseInt(destination.split("_")[1])

        if (!adjacencyList.get(sourceNode)) {
            adjacencyList.set(sourceNode, [])
        }
        adjacencyList.get(sourceNode).push(new Pair(targetNode, weight))
    }
    const result = [];

    for (const [u, pairs] of adjacencyList.entries()) {
        for (const pair of pairs) {
            const v = pair.target;      // assuming your Pair class uses `.node` and `.weight`
            const weight = pair.weight;
            result.push([u, v, weight]);
        }
    }
    const response = BellmanFord(nodes.length, result, source, destination)
    return response[1]
}


/**
 *
 * @param {number} V - Number of vertex
 * @param {Map} edges - Edges between u -> v
 * @param {number} source - Source node to start with
 * @param destination
 */
const BellmanFord = (V, edges, source, destination) => {
    let distance = Array(V).fill(1e8), parent = Array(V)

    for (let i = 0; i < V; i++) {
        parent[i] = i
    }
    distance[source] = 0

    for (let i = 0; i < V; i++) {
        for (const edge of edges) {
            let [u, v, wt] = edge
            if (distance[u] !== 1e8 && distance[u] + wt < distance[v]) {
                if (i === V - 1) return [-1];
                parent[v] = u
                distance[v] = distance[u] + wt;
            }
        }

    }
    let node = destination - 1 || V - 1, path = []
    while (parent[node] !== node) {
        path.push(node)
        node = parent[node]
    }
    path.push(source)

    return [distance, path.reverse()]
}


const path = buildAdjacencyList(2, 5)

const test = () => {
    for (let i = 0; i < path.length; i++) {

        edges.map((edge) => {
            if (edge.source.includes(path[i]) && edge.target.includes(path[i + 1])) {
                return {
                    ...edge, animated: true, style: {stroke: '#008000', strokeWidth: 3}
                }
            } else {
                return edge
            }
        })
    }
    console.log(edges)
}
test()