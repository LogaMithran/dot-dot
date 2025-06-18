import {createContext, useContext, useState} from 'react';

const DnDContext = createContext([null, (_) => {
}]);

export const DnDProvider = ({children}) => {
    const [nodeValue, setNodeValue] = useState("");
    const [nodeCharCode, setNodeCharCode] = useState(0);
    const [sourceDestination, setSourceDestination] = useState({
        source: 0,
        destination: 5
    })
    const [initEdges, setInitialEdges] = useState([])

    return (
        <DnDContext.Provider
            value={{
                nodeValue,
                setNodeValue,
                nodeCharCode,
                setNodeCharCode,
                sourceDestination,
                setSourceDestination,
                initEdges,
                setInitialEdges
            }}>
            {children}
        </DnDContext.Provider>
    );
}

export default DnDContext;

export const useDnD = () => {
    return useContext(DnDContext);
}