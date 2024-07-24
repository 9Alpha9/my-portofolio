/* eslint-disable no-unused-vars */
import React from "react";
import HomeLanding from "./components/landingPages/HomeLanding";
import LandingPage from "./pages/LandingPages";
import LenteraFajarPages from "./pages/LenteraFajarPages";
import KinayaPages from "./pages/KinayaPages";

const Routing = {
    path: "/",
    children: [
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "portofolio",
            element: <HomeLanding />,
        },
        {
            path: "lentera-fajar",
            element: <LenteraFajarPages />,
        },
        {
            path: "kinaya",
            element: <KinayaPages />,
        },
    ],
};

export default Routing;
