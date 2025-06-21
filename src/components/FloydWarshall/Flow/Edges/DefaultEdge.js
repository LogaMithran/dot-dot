import * as edges from "./edges.json"

export const getDefaultEdges = (algorithm) => {
    switch (algorithm) {
        case "bellman":
            return edges.bellman
        case "floyd":
            return edges.floyd
    }
}