import React, {useCallback, useRef} from "react";
import {addEdge, Background, Controls, ReactFlow, useEdgesState, useNodesState, useReactFlow} from "@xyflow/react";
import {useDnD} from "./DnDContext";
import Sidebar from "./Sidebar";
import Actions from "../BellmanFord/Actions.jsx";
import NodeTypes from "./Nodes/NodeTypes.js";
import EdgeTypes from "./Edges/EdgeTypes.js";

let id = 0;
const getId = () => `dndnode_${id++}`;


export const DnDFlow = ({defaultNodes, defaultEdges}) => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);
    const {screenToFlowPosition} = useReactFlow();
    const {
        nodeValue
    } = useDnD();


    const onConnect = useCallback(
        (params) => {
            setEdges((eds) =>
                addEdge({...params, type: 'buttonedge', animated: true}, eds)
            );
        },
        []
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();
            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });
            const newNode = {
                id: getId(),
                position,
                type: 'textUpdater',
                data: {label: nodeValue},
            };
            setNodes((nds) => nds.concat(newNode));
        },
        [screenToFlowPosition, nodeValue],
    );

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <>
            <div className="dndflow">
                <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        edgeTypes={EdgeTypes}
                        nodeTypes={NodeTypes}
                        onDrop={onDrop}
                        onDragStart={onDragStart}
                        onDragOver={onDragOver}
                        fitView
                        style={{backgroundColor: '#F7F9FB'}}
                    >
                        <Controls/>
                        <Background/>
                    </ReactFlow>
                </div>
                <Sidebar/>
            </div>
            <Actions nodes={nodes} edges={edges} setEdges={setEdges} setNodes={setNodes}/>
        </>
    );
};