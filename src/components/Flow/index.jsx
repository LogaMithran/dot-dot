import React from 'react';
import {ReactFlowProvider,} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import {DnDProvider} from './DnDContext';
import {DnDFlow} from "./DnDFlow";

export default () => (
    <ReactFlowProvider>
        <DnDProvider>
            <DnDFlow/>
        </DnDProvider>
    </ReactFlowProvider>
);
