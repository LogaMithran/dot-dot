import React from 'react';
import {useKrusKal} from './DnDContext';

export default () => {
    const {
        setNodeValue, nodeCharCode, setNodeCharCode
    } = useKrusKal();

    const onDragStart = (event) => {
        setNodeValue(nodeCharCode)
        setNodeCharCode((prevState) => prevState + 1)
        event.dataTransfer.effectAllowed = 'move';
    };
    return (<aside>
        <div>Instructions</div>
        <ul>
            <li className="mb-2">Drag and drop the node</li>
            <li className="mb-2">Node number will be updated automatically</li>
        </ul>
        <div className="dndnode h-10" onDragStart={(event) => onDragStart(event, 'Connector')} draggable>
            Connector
        </div>
    </aside>);
};
