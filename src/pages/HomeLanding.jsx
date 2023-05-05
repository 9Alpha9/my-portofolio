/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import "../styles/HomeStyles/homeStyles.scss";
import ContentControl from "../content/ContentControl";
import styled from "styled-components";
import SmoothScroll from "../SmoothScroll";
import Footer from "../components/Footer";

function Home() {
    const HeadingWrapper = styled.div`
        justify-content: center;
        align-items: center;
    `;

    return (
        <>
            <SmoothScroll>
                <HeadingWrapper className="flex m-auto">
                    <div className="justify-center m-10 xl:mx-14 xl:px-10 md:mx-14 lg:mx-14 intro heading__intro">
                        <div className="relative align-middle head__title">
                            <h1 className="flex justify-center m-auto align-middle title__intro">
                                Hi, Gilang Here.
                            </h1>
                            <span className="block py-8 text-center base__on-location">
                                <h2>Sidoarjo City, East Java, Indonesia</h2>
                            </span>
                            <span className="justify-center block m-auto text-center work">
                                <h2>
                                    I&rsquo;m currently freelances UI/UX Web
                                    Designer and Frontend Web Developer 👻. And
                                    I&rsquo;m like minimalism style.
                                </h2>
                            </span>
                        </div>
                        <ContentControl />
                    </div>
                </HeadingWrapper>
                <Footer />
            </SmoothScroll>
        </>
    );
}

export default Home;
