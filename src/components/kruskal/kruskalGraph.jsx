import React from 'react';
import {ReactFlowProvider,} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import {KrusKalProvider} from './DnDContext';
import {KruskalFlow} from "./kruskalFlow.jsx";
import {getDefaultEdges} from "../Flow/Edges/DefaultEdge.js";
import {getDefaultNodes} from "../Flow/Nodes/DefaultNodes.js";


export default function ({algorithm}) {
    const edges = getDefaultEdges(algorithm)
    const nodes = getDefaultNodes(algorithm)

    return (
        <ReactFlowProvider>
            <KrusKalProvider>
                <KruskalFlow defaultEdges={edges} defaultNodes={nodes}/>
            </KrusKalProvider>
        </ReactFlowProvider>
    )

}
;
