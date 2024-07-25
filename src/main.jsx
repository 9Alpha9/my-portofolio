import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Portfolio from "./pages/Portfolio.jsx";
import LandingPage from "./pages/LandingPages.jsx";
import LenteraFajarPages from "./pages/LenteraFajarPages.jsx";
import KinayaPages from "./pages/KinayaPages.jsx";
import Navbar from "./components/Navbar.jsx";
import ReactGA from "react-ga";
import Footer from "./components/Footer.jsx";

const TRACKING_ID = "G-9XGTSEKKFB";
ReactGA.initialize(TRACKING_ID);

ReactGA.event({
    action: "link_action",
    category: "link_category",
    label: "link_label",
    value: "xxx",
});
ReactGA.exception({
    description: "An error ocurred",
    fatal: true,
});

ReactDOM.createRoot(document.getElementById("classModules-nVrme9")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                {/* <Route path="/wise-commerce" element={<WiseCommerce />}></Route> */}
                <Route
                    path="/lentera-fajar"
                    element={<LenteraFajarPages />}
                ></Route>
                <Route path="/kinaya" element={<KinayaPages />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
