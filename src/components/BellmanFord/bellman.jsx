import {useIsMobile} from "../../hooks/useIsMobile.js";
import Layout from "../Shared/Layout.jsx";
import Header from "../Shared/Header.jsx";
import Flow from "../Flow/index.jsx";

const para = ""
export default function Bellman() {
    const isMobile = useIsMobile()

    return (
        <>
            {!isMobile ? (
                <>
                    <Layout>
                        <Header paraText={para}/>
                        <Flow algorithm={"bellman"}/>
                    </Layout>
                </>
            ) : (<> <p
                className="flex justify-center text-center mx-1 my-2 text-lg font-light text-gray-500 dark:text-gray-400 wrap-break-word text-wrap">The
                Bellman-Ford Algorithm is best experienced interactively on a laptop browser..</p></>)}
        </>
    )
}