import React, {useState} from "react";
import "../../index.css"
import {Pair} from "../../utils/Pair.js";
import {BellmanFord} from "../../algorithms/bellman-ford.js";
import {useDnD} from "../Flow/DnDContext.jsx";

export default function ({nodes, edges, setEdges, setNodes}) {

    const {sourceDestination, setNodeCharCode, setSourceDestination} = useDnD();
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
            adjacencyList.get(sourceNode).push(new Pair(targetNode, weight))
        }
        const result = [];

        for (const [u, pairs] of adjacencyList.entries()) {
            for (const pair of pairs) {
                const v = pair.target;
                const weight = pair.weight;
                result.push([u, v, weight]);
            }
        }
        console.log(nodes, edges)
        return BellmanFord(nodes.length, result, sourceDestination.source, sourceDestination.destination)

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
    const calculate = () => {
        resetBeforeCalculate()
        if (sourceDestination.destination >= nodes.length) {
            setError({
                status: true,
                message: "Destination node exceeds the given node"
            })
        }
        const response = buildAdjacencyList()

        const path = response[1]
        console.log(path)
        if (path[0] === -1) {
            setError({
                status: true,
                message: "Path cannot be reached"
            })
            return
        }
        for (let i = 0; i < path.length; i++) {
            setEdges((edges) =>
                edges.map((edge) =>
                    edge.source.includes(path[i]) && edge.target.includes(path[i + 1]) ?
                        {
                            ...edge, animated: true, style: {stroke: '#008000', strokeWidth: 3}
                        } : {...edge}
                ));
        }
    }
    const clear = () => {
        setNodes([])
        setEdges([])
        setNodeCharCode(0)
        setSourceDestination({
            source: 0,
            destination: 5
        })
        setError(false)
    }

    return <div>
        {error.status && (<div className="mx-5 my-2 px-10">{error.message}</div>)}
        <div className="mx-5 my-5 px-5 sm:mx-2 sm:my-2 md:mx-2 md:my-2 lg:mx-10 lg:my-10">
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