import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

const LenisScroll = ({ children }) => {
    const ref = useRef(null);

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

    useEffect(() => {
        if (ref.current) {
            // Memastikan elemen ada
            gsap.to(ref.current, { opacity: 1, duration: 1 }); // Contoh animasi
        }
    }, [ref]);
    gsap.config({ nullTargetWarn: false });
    return <div ref={ref}>{children}</div>;
};

export default LenisScroll;
