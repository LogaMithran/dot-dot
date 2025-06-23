import {createContext, useContext, useState} from 'react';

const KruskalContext = createContext([null, (_) => {
}]);

export const KrusKalProvider = ({children}) => {
    const [nodeValue, setNodeValue] = useState("");
    const [nodeCharCode, setNodeCharCode] = useState(0);
    const [initEdges, setInitialEdges] = useState([])

    return (
        <KruskalContext.Provider
            value={{
                nodeValue,
                setNodeValue,
                nodeCharCode,
                setNodeCharCode,
                initEdges,
                setInitialEdges
            }}>
            {children}
        </KruskalContext.Provider>
    );
}

export default KruskalContext;

export const useKrusKal = () => {
    return useContext(KruskalContext);
}