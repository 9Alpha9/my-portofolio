/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/AboutStyles/aboutStyles.scss";
import styled from "styled-components";
import { gsap } from "gsap";
import Marquee from "react-gsap-marquee";
import SmoothScroll from "../SmoothScroll";
import Footer from "../components/Footer";
import ThisMe from "../assets/img/ThisMe.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ThisContentAbout from "../content/AboutContent/ThisContentAbout";

const AboutPages = () => {
    const AboutWrapperContainer = styled.div`
        @media (1201px <= width) {
            max-width: 1210px;
            margin: auto;
            align-items: center;
            display: block;
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
                                <MarqueeContainer id="smooth-wrapper">
                                    <div className="marquee__headText ">
                                        <Marquee>
                                            <p className="marquee__text">
                                                <ul className="flex flex-row">
                                                    <li>Let&apos;s Talk</li>
                                                    <li>UI/UX</li>
                                                    <li>React Js</li>
                                                    <li>Sass</li>
                                                    <li>Css</li>
                                                    <li>Figma</li>
                                                </ul>
                                            </p>
                                        </Marquee>
                                    </div>
                                </MarqueeContainer>
                            </MarqueeWrapper>
                            <AboutContentItem>
                                <div className="content">
                                    <ThisContentAbout />
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
