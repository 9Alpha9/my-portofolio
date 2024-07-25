import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisScroll = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.09,
            smooth: true,
            direction: "vertical",
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Membersihkan saat komponen di-unmount
        };
    }, []);

    return <>{children}</>;
};

export default LenisScroll;
