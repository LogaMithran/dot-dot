import {useState} from "react";
import {GetShortestPath} from "./actions/shortestDistance";

const ROWS = 11;
const COLS = 11;

export const Board = () => {
    const [pathGrid, setPathGrid] = useState(() =>
        Array.from({length: ROWS}, () => Array(COLS).fill(1))
    );

    const [movingIndex, setMovingIndex] = useState([null, null]);
    const [path, setPath] = useState({
        sourceIndex: [],
        destinationIndex: [],
    });
    const [sPath, setShortestPath] = useState({
        calculatedPath: [],
        distance: null,
    });

    const handleGridClick = (index) => {
        if (path.sourceIndex.length && path.destinationIndex.length) {
            return;
        }
        if (!path.sourceIndex.length) {
            setPath({...path, sourceIndex: index});
            return;
        }

        setPath({...path, destinationIndex: index});
    };

    const handleGridDrag = (index) => {
        if (
            !path.sourceIndex.length ||
            !path.destinationIndex.length ||
            (index[0] === path.sourceIndex[0] && index[1] === path.sourceIndex[1]) ||
            (index[0] === path.destinationIndex[0] &&
                index[1] === path.destinationIndex[1])
        ) {
            return;
        }
        setPathGrid((prevGrid) =>
            prevGrid.map((row, rowIndex) =>
                row.map((cell, colIndex) =>
                    rowIndex === index[0] && colIndex === index[1] ? 0 : cell
                )
            )
        );
        setMovingIndex(index);
    };

    const isSourceOrDestination = (index) => {
        return (
            (path.sourceIndex[0] === index[0] && path.sourceIndex[1] === index[1]) ||
            (path.destinationIndex[0] === index[0] &&
                path.destinationIndex[1] === index[1])
        );
    };

    const isBlocked = (index) => {
        return movingIndex[0] === index[0] && movingIndex[1] === index[1];
    };

    const isShortestPathPresent = (index) => {
        if (!sPath.calculatedPath) return
        let flag = false;
        for (let [row, col] of sPath.calculatedPath) {
            if (
                (index[0] === path.sourceIndex[0] &&
                    index[1] === path.sourceIndex[1]) ||
                (index[0] === path.destinationIndex[0] &&
                    index[1] === path.destinationIndex[1])
            ) {
                return;
            }
            if (row === index[0] && col === index[1]) {
                flag = true;
            }
        }
        return flag;
    };

    const calculate = () => {
        if (!path.sourceIndex.length) return
        const shortestPath = GetShortestPath(
            pathGrid,
            path.sourceIndex,
            path.destinationIndex
        );

        setShortestPath({calculatedPath: shortestPath[0], distance: shortestPath[1]});
    };

    const clear = () => {
        setPathGrid(Array.from({length: ROWS}, () => Array(COLS).fill(null)));
        setPath({
            sourceIndex: [],
            destinationIndex: [],
        });
        setShortestPath({
            calculatedPath: [],
            distance: null,
        })
        setMovingIndex([null, null]);
    };

    const renderPathMessage = () => {
        const distance = sPath.distance;

        if (distance === -1) return <div>Source & Destination are same</div>;
        if (distance === 0) return <div>Destination cannot be reached</div>;
        if (distance === 1) return <div>Destination is near</div>;
        if (distance > 1) return <div>Shortest path distance would be {distance}</div>;

        return null; // fallback if needed
    };

    const getCellClass = (row, col) => {
        const isSrcDest = isSourceOrDestination([row, col]);
        const isBlk = isBlocked([row, col]) || col === 0;
        const isPath = isShortestPathPresent([row, col]);

        let baseClass = "rounded-sm shadow-xl active:shadow-xl/3 w-5 h-5 md:w-10 md:h-10 lg:w-10 lg:h-10";
        let colorClass = "bg-gray-100";

        if (isSrcDest) colorClass = "bg-gray-900";
        else if (isBlk) colorClass = "bg-gray-400";
        else if (isPath) colorClass = "bg-green-600";

        return `${baseClass} ${colorClass}`;
    };


    return (
        <div>
            <div className="mx-10 my-10">
                {pathGrid.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-row justify-center">
                        {row.map((col, colIndex) => (
                            <div key={colIndex} className="mx-1 my-0 lg:mx-2 lg:my-2 ">
                                <button
                                    key={`${rowIndex}-${colIndex}`}
                                    onMouseMove={() => handleGridDrag([rowIndex, colIndex])}
                                    onClick={() => handleGridClick([rowIndex, colIndex])}
                                    className={`rounded-sm bg-gray-100 shadow-xl active:shadow-xl/3 w-5 h-5 md:w-10 md:h-10 lg:w-10 lg:h-10
                                   ${
                                        isSourceOrDestination([rowIndex, colIndex])
                                            ? "bg-gray-900"
                                            : ""
                                    }
                                   ${
                                        isBlocked([rowIndex, colIndex]) ||
                                        col === 0
                                            ? "bg-gray-400"
                                            : ""
                                    } 
                                   ${
                                        isShortestPathPresent([rowIndex, colIndex])
                                            ? "bg-green-600"
                                            : ""
                                    } 
                                  ${
                                        !isSourceOrDestination([
                                            rowIndex,
                                            colIndex,
                                        ]) &&
                                        !isBlocked([rowIndex, colIndex]) &&
                                        col !== 0 &&
                                        !isShortestPathPresent([rowIndex, colIndex])
                                            ? "bg-gray-100"
                                            : ""
                                    }`}
                                ></button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {renderPathMessage()}
            <div className="mt-5">
                <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={calculate}
                >
                    Calculate
                </button>
                <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={clear}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};
