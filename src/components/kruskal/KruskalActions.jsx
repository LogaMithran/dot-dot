import React, {useState} from "react";
import "../../index.css"
import {Pair} from "../../utils/Pair.js";
import {useKrusKal} from "./DnDContext.jsx";
import {KruskalsAlgorithm} from "../../algorithms/kruskals-algorithm.js";

export default function ({nodes, edges, setEdges, setNodes}) {

    const {reset} = useKrusKal();
    const [error, setError] = useState({status: false, message: ""})

    const buildAdjacencyList = () => {
        let adjacencyList = new Map()

        for (const edge of edges) {
            let source = edge.source,
                destination = edge.target,
                weight = parseInt(edge.data.weight || 1),
                sourceNode = parseInt(source.split("_")[1]),
                targetNode = parseInt(destination.split("_")[1])

            if (!adjacencyList.get(sourceNode)) {
                adjacencyList.set(sourceNode, [])
            }
            if (!adjacencyList.get(targetNode)) {
                adjacencyList.set(targetNode, [])
            }
            adjacencyList.get(sourceNode).push(new Pair(targetNode, weight))
            adjacencyList.get(targetNode).push(new Pair(sourceNode, weight))
        }
        const result = [];

        for (const [u, pairs] of adjacencyList.entries()) {
            for (const pair of pairs) {
                const v = pair.target;
                const weight = pair.weight;
                result.push([u, v, weight]);
            }
        }
        return KruskalsAlgorithm(nodes.length, result)
    }

    const resetBeforeCalculate = () => {
        setEdges((edges) =>
            edges.map((edge) => ({...edge, style: {}}))
        )
        setError({
            status: false,
            message: ""
        })
    }

    const isError = (response) => {
        return false
    }

    const calculate = () => {
        resetBeforeCalculate()
        const response = buildAdjacencyList()
        if (isError(response)) {
            return
        }
        const path = response[1]
        for (let i = 0; i < path.length; i++) {
            setEdges((edges) =>
                edges.map((edge) =>
                    (edge.source.includes(path[i][0]) && edge.target.includes(path[i][1]) ||
                        edge.source.includes(path[i][1]) && edge.target.includes(path[i][0])
                    ) ?
                        {
                            ...edge, animated: true, style: {stroke: '#008000', strokeWidth: 3}
                        } : {...edge}
                ));
        }
    }
    const clear = () => {
        reset()
    }

    return <div>
        {error.status && (<div className="my-2">{error.message}</div>)}
        <div className="my-5 sm:my-2 md:my-2">
            <button type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={calculate}
            >
                Calculate
            </button>
            <button type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={clear}
            >
                Clear
            </button>
        </div>
    </div>
}