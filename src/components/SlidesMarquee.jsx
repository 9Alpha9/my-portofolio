"use client";
import styles from "../components/styles/styles.module.scss";
import { useRef, useEffect, useTransform } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import StarsWhite from "../components/svgs/StarsWhite";

export default function MarqueeText() {
    const motionTextOne = useRef(null);
    const motionTextSecond = useRef(null);
    const slider = useRef(null);

    let xPercent = 0;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // Menghapus animasi yang terkait dengan scroll
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        if (xPercent > 100) {
            xPercent = 0;
        } else if (xPercent < 0) {
            xPercent = 100;
        }
        gsap.set(motionTextOne.current, { xPercent: -xPercent });
        gsap.set(motionTextSecond.current, { xPercent: -xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.009;
    };

    return (
        <>
            <motion.main className={styles.main}>
                <div className={styles.sliderContainer}>
                    <motion.div ref={slider} className={styles.slider}>
                        <div className={styles.motionContainer}>
                            <div className={styles.motion} ref={motionTextOne}>
                                {/* <span className="flex gap-8">
                                    <ul className="flex flex-row items-center gap-8">
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Let&apos;s Talk</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>UI/UX</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>React Js</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Sass</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Css</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Figma</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Tailwind Css</li>
                                    </ul>
                                </span> */}
                                <span className="flex gap-8">
                                    <ul className="flex flex-row items-center gap-8">
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Let&apos;s Talk</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>UI/UX</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>React Js</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Sass</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Css</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Figma</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Tailwind Css</li>
                                    </ul>
                                </span>
                                <span className="flex gap-8">
                                    <ul className="flex flex-row items-center gap-8">
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Let&apos;s Talk</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>UI/UX</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>React Js</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Sass</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Css</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Figma</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Tailwind Css</li>
                                    </ul>
                                </span>
                                <span className="flex gap-8 pr-3">
                                    <ul className="flex flex-row items-center gap-8">
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Let&apos;s Talk</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>UI/UX</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>React Js</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Sass</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Css</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Figma</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Tailwind Css</li>
                                    </ul>
                                </span>
                            </div>
                            <div
                                className={styles.motion}
                                ref={motionTextSecond}
                            >
                                <span className="flex gap-8">
                                    <ul className="flex flex-row items-center gap-8">
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Let&apos;s Talk</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>UI/UX</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>React Js</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Sass</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Css</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Figma</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Tailwind Css</li>
                                    </ul>
                                </span>
                                <span className="flex gap-8">
                                    <ul className="flex flex-row items-center gap-8">
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Let&apos;s Talk</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>UI/UX</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>React Js</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Sass</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Css</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Figma</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Tailwind Css</li>
                                    </ul>
                                </span>
                                <span className="flex gap-8">
                                    <ul className="flex flex-row items-center gap-8">
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Let&apos;s Talk</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>UI/UX</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>React Js</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Sass</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Css</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Figma</li>
                                        <li>
                                            {" "}
                                            <StarsWhite />
                                        </li>
                                        <li>Tailwind Css</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.main>
        </>
    );
}
