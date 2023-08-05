import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoutes from "./MainRoutes.jsx";
import App from "./App.jsx";
import "./index.css";
import AboutPages from "./pages/AboutPages.jsx";
import WiseCommerce from "./pages/WiseCommerce.jsx";
import LenteraFajarPages from "./pages/LenteraFajarPages.jsx";
import KinayaPages from "./pages/KinayaPages.jsx";
import Navbar from "./components/Navbar.jsx";
import ReactGA from "react-ga";
// import RouteChangeTracker from "./RouteChangeTracker.jsx";

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
        <div className="rectection__pages">
            <App />
        </div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainRoutes />}></Route>
                <Route path="/about" element={<AboutPages />}></Route>
                <Route path="/wise-commerce" element={<WiseCommerce />}></Route>
                <Route
                    path="/lentera-fajar"
                    element={<LenteraFajarPages />}
                ></Route>
                <Route path="/kinaya" element={<KinayaPages />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
