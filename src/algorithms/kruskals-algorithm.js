class DisjointS {
    constructor(v) {
        this.parent = Array.from({length: v}, (_, index) => index)
        this.size = Array(v).fill(1)
    }

    findUltimateParent = function (node) {
        if (this.parent[node] === node) {
            return node
        }

        return this.parent[node] = this.findUltimateParent(this.parent[node])
    }

    unionBySize = function (u, v) {
        const ultimate_parent_u = this.findUltimateParent(u)
        const ultimate_parent_v = this.findUltimateParent(v)

        if (ultimate_parent_u === ultimate_parent_v) return
        if (ultimate_parent_u < ultimate_parent_v) {
            this.parent[ultimate_parent_u] = ultimate_parent_v
            this.size[ultimate_parent_v] += this.size[ultimate_parent_u]
        } else {
            this.parent[ultimate_parent_v] = ultimate_parent_u
            this.size[ultimate_parent_v] += this.size[ultimate_parent_u]
        }
    }
}

export const KruskalsAlgorithm = (v, edges) => {
    const ds = new DisjointS(v), ans = []
    edges = edges.sort((a, b) => a[2] - b[2])
    let minWeight = 0
    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0], v = edges[i][1], wt = edges[i][2]

        if (ds.findUltimateParent(u) !== ds.findUltimateParent(v)) {
            ans.push([u, v])
            minWeight += wt
            ds.unionBySize(u, v)
        }
    }
    return [minWeight, ans]
}

let v = 3, edges = [[0, 1, 5], [1, 2, 3], [0, 2, 1]]

// console.log(KruskalsAlgorithm(v, edges))
// const ds = new DisjointS(3)
// console.log(ds.size[1])
// ds.unionBySize(1,2)
// console.log(ds.size[2])