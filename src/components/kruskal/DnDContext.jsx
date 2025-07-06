import {createContext, useContext, useState} from 'react';

const KruskalContext = createContext([null, (_) => {
}]);

export const KrusKalProvider = ({children}) => {
    const [nodeValue, setNodeValue] = useState("");
    const [nodeCharCode, setNodeCharCode] = useState(0);
    const [initEdges, setInitialEdges] = useState([])
    const [nodeId, setNodeId] = useState(0)

    const reset = () => {
        setNodeValue("")
        setNodeCharCode(0)
        setInitialEdges([])
        setNodeId(0)
    }
    return (
        <KruskalContext.Provider
            value={{
                nodeValue,
                setNodeValue,
                nodeCharCode,
                setNodeCharCode,
                initEdges,
                setInitialEdges,
                reset,
                nodeId,
                setNodeId
            }}>
            {children}
        </KruskalContext.Provider>
    );
}

export default KruskalContext;

export const useKrusKal = () => {
    return useContext(KruskalContext);
}