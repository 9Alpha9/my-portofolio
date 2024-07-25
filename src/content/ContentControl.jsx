/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import "../styles/mainContent.scss";
import ContentWrapper from "../pages/Portfolio";

const MainContent = () => {
    return (
        <>
            <div className="flex flex-col gap-10 py-32 wrapper__content">
                <ContentWrapper />
            </div>
        </>
    );
};

export default MainContent;
