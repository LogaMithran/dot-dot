import * as nodes from "./node.json"

/**
 *
 * @param {"bellman" | "floyd"}algorithm
 * @returns {{}}
 */
export const getDefaultNodes = (algorithm) => {
    console.log(algorithm);
    switch (algorithm) {
        case "bellman":
            return nodes.bellman;
        case "floyd":
            return layoutGrid(nodes.floyd);
        case "kruskal":
            return nodes.kruskal;
        default:
            throw new Error(`Unsupported algorithm: ${algorithm}`);
    }
};

function layoutGrid(nodes, cols = 3, spacingX = 150, spacingY = 150) {
    return nodes.map((node, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        return {
            ...node,
            position: {
                x: col * spacingX,
                y: row * spacingY
            }
        };
    });
}