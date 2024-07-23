/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/aboutStyles.scss";
import styled from "styled-components";
import SlideMarquee from "../components/SlidesMarquee";
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
        @media (max-width: 768px) {
            // Change from "481px width <= 768px" to "max-width: 768px"
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
                                        <SlideMarquee />
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
