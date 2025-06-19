import Flow from "../Flow/index.jsx";
import {useIsMobile} from "../../hooks/useIsMobile.js";
import Header from "../Shared/Header.jsx";

const para = "Floyd warshall algorithm"

export const Warshall = () => {
    const isMobile = useIsMobile()

    return (
        <>
            {!isMobile ? (
                <>
                    <Header paraText={para}/>
                    <Flow algorithm={"floyd"}/>
                </>
            ) : (<> <p
                className="flex justify-center text-center mx-1 my-2 text-lg font-light text-gray-500 dark:text-gray-400 wrap-break-word text-wrap">The
                Floyd warshall Algorithm is best experienced interactively on a laptop browser.</p></>)}
        </>
    )
}