export default class DisjointSet {
    /**
     *
     * @param v
     */
    constructor(v) {
        this.parent = Array.from({length: v}, (_, i) => i);
        this.size = Array(v).fill(1);
    }


    findUltimateParent = function (node) {
        if (this.parent[node] === node) {
            return node
        }
        return this.parent[node] = this.findUltimateParent(this.parent[node])
    }

    unionBySize = function (u, v) {
        const ultip_u = this.findUltimateParent(u)
        const ultip_v = this.findUltimateParent(v)

        if (ultip_u === ultip_v) {
            return
        }
        if (this.size[ultip_u] < this.size[ultip_v]) {
            this.parent[ultip_u] = ultip_v
            this.size[ultip_v] += this.size[ultip_u]
        } else {
            this.parent[ultip_v] = ultip_u
            this.size[ultip_u] += this.size[ultip_v]
        }
    }
}

// const ds = new DisjointSet(5)
// ds.unionBySize(0, 1)
// ds.unionBySize(2, 3)
// ds.unionBySize(0, 4)
//
// for (let i = 0; i < 5; i++) {
//     console.log(`Element ${i}: Representative = ${ds.findUltimateParent(i)}`);
// }