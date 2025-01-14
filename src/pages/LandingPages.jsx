/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "../styles/aboutStyles.scss";
import styled from "styled-components";

import Profiles from "../../public/profile/profiles.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
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

    const AboutContentItem = styled.div`
        padding: 2rem 0;
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
