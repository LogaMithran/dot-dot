import Layout from "../Shared/Layout.jsx";
import Header from "../Shared/Header.jsx";
import {Warshall} from "./Warshall.jsx";

const para = "Floyd warshall algorithm"
export default function () {
    return (
        <Layout>
            <Header paraText={para}/>
            <Warshall/>
        </Layout>
    )
}