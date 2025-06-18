import {NavLink, Outlet} from "react-router-dom";

export const Landing = () => {
    return (<div className="">
            <nav className="w-full shadow bg-white sticky top-0 z-10">
                <div className="max-w-screen-xl mx-auto px-4 py-4">
                    <ul className="flex flex-wrap gap-6 justify-center text-blue-600 text-lg font-medium">
                        <li>
                            <NavLink
                                to="/dijkstra"
                                className={({isActive}) => isActive ? 'text-black border-b-2 border-black pb-1' : 'border-b-2 border-transparent   hover:border-black hover:text-black pb-1 transition'}
                            >
                                Dijkstra's Algorithm
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/bellman"
                                className={({isActive}) => isActive ? 'text-black border-b-2 border-black pb-1' : 'border-b-2 border-transparent   hover:border-black hover:text-black pb-1 transition'}
                            >
                                Bellman-Ford Algorithm
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/floyd"
                                className={({isActive}) => isActive ? 'text-black border-b-2 border-black pb-1' : 'border-b-2 border-transparent   hover:border-black hover:text-black pb-1 transition'}
                            >
                                Floyd warshall Algorithm
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet/>
        </div>)
}