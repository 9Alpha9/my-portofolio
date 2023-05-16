/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import MainLandingWise from "./MainLandingWise";
import "../styles/mainContent.scss";
import MainLandingKinaya from "./MainLandingKinaya";
import MainLandingLentera from "./MainLandingLentera";
import { Analytics } from "@vercel/analytics/react";
const MainContent = () => {
    return (
        <>
            <div className="flex flex-col gap-10 py-32 wrapper__content">
                <MainLandingWise />
                <MainLandingLentera />
                <MainLandingKinaya />
                <Analytics />
            </div>
        </>
    );
};

export default MainContent;
