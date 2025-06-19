import './App.css'
import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {Landing} from "./components/Landing.jsx";
import NotFound from "./components/NotFound.jsx";
import FloydWarshall from "./components/FloydWarshall/index.jsx";
import Loader from "./components/Shared/Loader.jsx";

const Dijkstra = lazy(() => import("./components/Dijkstra/Dijkstra.jsx"))

const BellMan = lazy(() => import("./components/BellmanFord/bellman.jsx"))

function App() {

    return (
        <Routes>
            <Route path="/" element={<Landing/>}>
                <Route
                    path="dijkstra"
                    element={
                        <Suspense fallback={<Loader/>}>
                            <Dijkstra/>
                        </Suspense>
                    }
                />
                <Route
                    path="bellman"
                    element={
                        <Suspense fallback={<Loader/>}>
                            <BellMan/>
                        </Suspense>
                    }
                />
                <Route
                    path="floyd"
                    element={
                        <Suspense fallback={<Loader/>}>
                            <FloydWarshall/>
                        </Suspense>
                    }
                />
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App
