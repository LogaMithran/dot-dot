import {createContext, useContext, useState} from 'react';

const floydContext = createContext([null, (_) => {
}]);

export const DnDProvider = ({children}) => {
    const [nodeValue, setNodeValue] = useState("");
    const [nodeCharCode, setNodeCharCode] = useState(0);
    const [sourceDestination, setSourceDestination] = useState({
        source: 0,
        destination: 1
    })
    const [initEdges, setInitialEdges] = useState([])

    return (
        <floydContext.Provider
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
        </floydContext.Provider>
    );
}

export default floydContext;

export const useFloyd = () => {
    return useContext(floydContext);
}