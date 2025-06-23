import './App.css'
import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {Landing} from "./components/Landing.jsx";
import NotFound from "./components/NotFound.jsx";
import Loader from "./components/Shared/Loader.jsx";
import Home from "./components/Home.jsx";

const Dijkstra = lazy(() => import("./components/Dijkstra/Dijkstra.jsx"))

const BellMan = lazy(() => import("./components/BellmanFord/bellman.jsx"))

const Kruskal = lazy(() => import("./components/kruskal/index.jsx"))

function App() {

    return (
        <Routes>
            <Route path="/" element={<Landing/>}>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Loader/>}>
                            <Home/>
                        </Suspense>
                    }
                />
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
                    path="kruskal"
                    element={
                        <Suspense fallback={<Loader/>}>
                            <Kruskal/>
                        </Suspense>
                    }
                />
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App
