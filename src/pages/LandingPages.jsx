/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "../styles/aboutStyles.scss";
import styled from "styled-components";
import SlideMarquee from "../components/SlidesMarquee";
// import SmoothScroll from "../SmoothScroll";
import Profiles from "../../public/profile/profiles.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import SmoothScroll from "../components/LenisScroll";
import AboutArticleitems from "../content/aboutArticle/AboutArticleitems";

const AboutPages = () => {
    const AboutWrapperContainer = styled.div`
        @media (1201px <= width) {
            max-width: 1540px;
            margin: auto;
            align-items: center;
            justify-content: center;
            display: block;
            padding: 2rem;
        }
        @media (max-width: 768px) {
            // Change from "481px width <= 768px" to "max-width: 768px"
            // padding: 1rem;
        }
    `;

    const AboutContent = styled.div`
        // margin: 14rem 0;
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
        <SmoothScroll>
            <>
                <Helmet>
                    <title>Welcome ✋ To Gilang's Portofolio</title>
                </Helmet>
                <AboutWrapperContainer>
                    <AboutContent>
                        <div className="about__heading">
                            {/* <div className="about__headWrapper">
                                <h1 className="text-center">About Me</h1>
                            </div> */}
                            <figure className="m-4 about__meFigure">
                                <LazyLoadImage src={Profiles} />
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
            </>
        </SmoothScroll>
    );
};

export default AboutPages;
