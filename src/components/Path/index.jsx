import {Board} from "./Board.jsx";

export const Path = () => {
    return (
        <>
            <div className="mx-10 my-10 sm:mx-10 sm:my-5 md:mx-20 md:my-10 lg:my-0 lg:px-10 lg:py-10 bg-aqua-50 ">
                <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl">
                    Dot{"->"}
                    <span className="text-blue-600 dark:text-blue-500">Dot</span>{" "}
                </h3>
                <p className="my-4 text-lg text-gray-500">Dot {'->'} to Dot is a small application that finds the
                    shortest path between a source node and a destination node. The algorithm used here is
                    Dijkstra's.</p>
                <Board/>
            </div>
        </>
    );
};
