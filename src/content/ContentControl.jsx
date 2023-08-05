/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import MainLandingWise from "./MainLandingWise";
import "../styles/mainContent.scss";
import MainLandingKinaya from "./MainLandingKinaya";
import MainLandingLentera from "./MainLandingLentera";

// import ReactGA from "react-ga";

const MainContent = () => {
    // useEffect(() => {
    //     ReactGA.pageview(window.location.pathname + window.location.search);
    // }, []);

    // ReactGA.exception({
    //     description: "An error ocurred",
    //     fatal: true,
    // });
    return (
        <>
            <div className="flex flex-col gap-10 py-32 wrapper__content">
                <MainLandingWise />
                <MainLandingLentera />
                <MainLandingKinaya />
            </div>
        </>
    );
};

export default MainContent;
