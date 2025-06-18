import {useEffect, useState} from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700)

    useEffect(() => {
        const windowRezise = () => setIsMobile(window.innerWidth <= 700)
        window.addEventListener("resize", windowRezise)

        return () => window.removeEventListener("resize", windowRezise)
    }, []);

    return isMobile
}