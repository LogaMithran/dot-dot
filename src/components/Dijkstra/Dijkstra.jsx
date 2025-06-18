import {Board} from "./Board.jsx";
import Header from "../Shared/Header.jsx";
import Layout from "../Shared/Layout.jsx";

const para = "Dot {'->'} to Dot is a small application that finds the shortest path between a source node and a destination node. The algorithm used here is Dijkstra's."
export default function () {
    return (
        <Layout>
            <Header paraText={para}/>
            <Board/>
        </Layout>

    );
};

