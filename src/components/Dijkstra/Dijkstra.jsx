import {Board} from "./Board.jsx";
import Header from "../Shared/Header.jsx";
import Layout from "../Shared/Layout.jsx";

const para = "Dijkstra's algorithm is used for solving the single source shortest path problems where the weights should be non negative and acyclic"
export default function () {
    return (<Layout>
            <Header paraText={para}/>
            <Board/>
        </Layout>

    );
};

