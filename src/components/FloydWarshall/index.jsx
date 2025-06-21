import React from 'react';
import {ReactFlowProvider,} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import {DnDProvider} from './Flow/floydContext.jsx';
import {FloydFlow} from "./Flow/FloydFlow.jsx";
import {getDefaultEdges} from "./Flow/Edges/DefaultEdge.js";
import {getDefaultNodes} from "./Flow/Nodes/DefaultNodes.js";
import {useIsMobile} from "../../hooks/useIsMobile.js";

export default function () {
    const edges = getDefaultEdges("floyd")
    const nodes = getDefaultNodes("floyd")

    const isMobile = useIsMobile()

    return (
        <>
            {!isMobile ? (
                <>
                    <ReactFlowProvider>
                        <DnDProvider>
                            <FloydFlow defaultEdges={edges} defaultNodes={nodes}/>
                        </DnDProvider>
                    </ReactFlowProvider>
                </>
            ) : (<> <p
                className="flex justify-center text-center mx-1 my-2 text-lg font-light text-gray-500 dark:text-gray-400 wrap-break-word text-wrap">The
                Floyd warshall Algorithm is best experienced interactively on a laptop browser.</p></>)}
        </>
    )
};