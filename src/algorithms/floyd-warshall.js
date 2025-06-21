export const FloydWarshall = (n, distance, source, destination) => {
    console.log("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN",distance)
    const path = Array.from({length: n}, () => Array(n).fill(null))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (distance[i][j] !== Infinity && i !== j) {
                path[i][j] = j
            }
        }
    }
    for (let via = 0; via < n; via++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === j) continue
                if (distance[i][via] !== Infinity && distance[via][j] !== Infinity) {
                    distance[i][j] = Math.min(distance[i][j], distance[i][via] + distance[via][j])
                    path[i][j] = path[i][via]
                }
            }
        }
    }
    const computedPath = [source]
    while (source !== destination && path[source][destination]) {
        source = path[source][destination]
        computedPath.push(source)
    }
    computedPath.push(destination)
    console.log("++++++++++++++++++++++++",distance, computedPath)
    return [distance, computedPath]
}


// let dist = [[0, 3, Infinity, 5], [2, 0, Infinity, 4], [Infinity, 1, 0, Infinity], [Infinity, Infinity, 2, 0]]

let dist = [[0, 4, Infinity, 5, Infinity],
    [Infinity, 0, 1, Infinity, 6],
    [2, Infinity, 0, 3, Infinity],
    [Infinity, Infinity, 1, 0, 2],
    [1, Infinity, Infinity, 4, 0]]
console
    .log(FloydWarshall(dist.length, dist, 0, 4))