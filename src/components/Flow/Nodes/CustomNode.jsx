import {Handle, Position} from "@xyflow/react";

function TextUpdaterNode({data}) {
    return (
        <div>
            <input
                type="text"
                id={`node-${data.label}`}
                disabled={true}
                value={data.label}
                className="nodrag rounded-full w-12 h-12 text-center border border-gray-300"
            />
            <Handle type="target" position={Position.Top}/>
            <Handle type="source" position={Position.Bottom}/>
        </div>
    );
}

export default TextUpdaterNode;