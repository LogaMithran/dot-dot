import React from 'react';
import {BaseEdge, EdgeLabelRenderer, getBezierPath, useReactFlow,} from '@xyflow/react';

export default function CustomEdge({
                                       id,
                                       sourceX,
                                       sourceY,
                                       targetX,
                                       targetY,
                                       sourcePosition,
                                       targetPosition,
                                       style = {},
                                       markerEnd,
                                       data
                                   }) {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const {setEdges} = useReactFlow();
    const onEdgeWeightChange = (e) => {
        const newWeight = e.target.value;
        setEdges((edges) =>
            edges.map((edge) =>
                edge.id === id ? {...edge, data: {...edge.data, weight: newWeight}, animated: true} : edge
            ));
    };

    return (
        <>
            <BaseEdge path={edgePath} markerEnd={markerEnd} style={style}/>
            <EdgeLabelRenderer>
                <div
                    className="button-edge__label nodrag nopan"
                    style={{
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                    }}
                >
                    <input value={data?.weight ?? ""} onChange={onEdgeWeightChange} className="button-edge__button"
                           type={"text"}/>
                </div>
            </EdgeLabelRenderer>
        </>
    );
}
