/* eslint-disable no-unused-vars */
import React from "react";
import HomeLanding from "./pages/HomeLanding";
import AboutPages from "./pages/AboutPages";
import WiseCommerce from "./pages/WiseCommerce";
import LenteraFajarPages from "./pages/LenteraFajarPages";
import KinayaPages from "./pages/KinayaPages";

const Routing = {
    path: "/",
    children: [
        {
            path: "/",
            element: <HomeLanding />,
        },
        {
            path: "about",
            element: <AboutPages />,
        },
        {
            path: "wise-commerce",
            element: <WiseCommerce />,
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
