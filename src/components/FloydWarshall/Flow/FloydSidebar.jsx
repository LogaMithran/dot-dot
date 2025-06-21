import React from 'react';
import {useFloyd} from './floydContext.jsx';

export default () => {
    const {
        setNodeValue, nodeCharCode, setNodeCharCode, sourceDestination, setSourceDestination
    } = useFloyd();

    const onDragStart = (event) => {
        setNodeValue(nodeCharCode)
        setNodeCharCode((prevState) => prevState + 1)
        event.dataTransfer.effectAllowed = 'move';
    };

    const onSourceChange = (e) => {
        setSourceDestination((prev) => ({...prev, source: parseInt(e.target.value)}))
    }

    const onDestinationChange = (e) => {
        setSourceDestination((prev) => ({...prev, destination: parseInt(e.target.value)}))
    }

    return (<aside>
        <div>Instructions</div>
        <ul>
            <li className="mb-2">Drag and drop the node</li>
            <li className="mb-2">Node number will be updated automatically</li>
        </ul>
        <div className="dndnode h-10" onDragStart={(event) => onDragStart(event, 'Connector')} draggable>
            Connector
        </div>

        <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Source
                node</label>
            <input value={sourceDestination.source} onChange={onSourceChange} type="number" id="default-input"
                   className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
        </div>

        <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Destination
                node</label>
            <input value={sourceDestination.destination} onChange={onDestinationChange} type="number" id="default-input"
                   className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
        </div>
    </aside>);
};
