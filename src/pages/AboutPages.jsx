/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/aboutStyles.scss";
import styled from "styled-components";
import { gsap } from "gsap";
import Marquee from "react-gsap-marquee";
import SmoothScroll from "../SmoothScroll";
import Footer from "../components/Footer";
import ThisMe from "../assets/img/ThisMe.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

import AboutArticleitems from "../content/aboutArticle/AboutArticleitems";

const AboutPages = () => {
    const AboutWrapperContainer = styled.div`
        @media (1201px <= width) {
            max-width: 1210px;
            margin: auto;
            align-items: center;
            display: block;
            padding: 2rem;
        }
        @media (481px width <= 768px) {
            padding: 2rem;
        }
    `;

    const AboutContent = styled.div`
        margin: 14rem 0;
    `;

    const MarqueeContainer = styled.div`
        // flex: 1 1 0;
    `;
    const AboutContentItem = styled.div`
        padding: 2rem 0;
    `;

    const MarqueeWrapper = styled.div`
        position: relative;
        display: block;
        overflow: hidden;
    `;

    return (
        <>
            <SmoothScroll>
                <AboutWrapperContainer>
                    <AboutContent>
                        <div className="about__heading">
                            <SmoothScroll>
                                <div className="relative about__headWrapper">
                                    <h1 className="relative text-center">
                                        About Me
                                    </h1>
                                </div>
                            </SmoothScroll>
                            <figure className="about__meFigure">
                                <LazyLoadImage src={ThisMe} />
                            </figure>
                            <MarqueeWrapper>
                                <MarqueeContainer
                                    id="smooth-wrapper"
                                    className="marquee__listItem"
                                >
                                    <div className="marquee__headText">
                                        <Marquee>
                                            <p className="marquee__text">
                                                <ul className="flex flex-row">
                                                    <li>Let&apos;s Talk</li>
                                                    <li>UI/UX</li>
                                                    <li>React Js</li>
                                                    <li>Sass</li>
                                                    <li>Css</li>
                                                    <li>Figma</li>
                                                    <li>Tailwind Css</li>
                                                </ul>
                                            </p>
                                        </Marquee>
                                    </div>
                                </MarqueeContainer>
                            </MarqueeWrapper>
                            <AboutContentItem>
                                <div className="relative content">
                                    <AboutArticleitems />
                                </div>
                            </AboutContentItem>
                        </div>
                    </AboutContent>
                </AboutWrapperContainer>
                <Footer />
            </SmoothScroll>
        </>
    );
};

export default AboutPages;
