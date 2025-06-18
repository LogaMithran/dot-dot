import React from 'react';
import {ReactFlowProvider,} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import {DnDProvider} from './DnDContext';
import {DnDFlow} from "./DnDFlow";
import {getDefaultEdges} from "./Edges/DefaultEdge.js";
import {getDefaultNodes} from "./Nodes/DefaultNodes.js";

export default function ({algorithm}) {
    const edges = getDefaultEdges(algorithm)
    const nodes = getDefaultNodes(algorithm)

    return (
        <ReactFlowProvider>
            <DnDProvider>
                <DnDFlow defaultEdges={edges} defaultNodes={nodes}/>
            </DnDProvider>
        </ReactFlowProvider>
    )

}
;
