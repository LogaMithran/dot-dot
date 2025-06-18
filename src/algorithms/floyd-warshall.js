export const FloydWarshall = (distance) => {
    const n = distance.length

    for (let via = 0; via < n; via++) {
        for (let i = 0; i < distance.length; i++) {
            for (let j = 0; j < distance.length; j++) {
                if (i === j) continue
                if (distance[i][via] !== Infinity && distance[via][j] !== Infinity){
                    distance[i][j] = Math.min(distance[i][j], distance[i][via] + distance[via][j])
                }
            }
        }
    }

    return distance
}


let dist = [[0, 1, 43],
    [1, 0, 6],
    [-1, -1, 0]]

console.log(FloydWarshall(dist))