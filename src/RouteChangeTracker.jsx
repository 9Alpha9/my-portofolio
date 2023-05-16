/* eslint-disable no-unused-vars */
import React from "react";
// import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";

const RouteChangeTracker = ({ history }) => {
    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });
};

export default RouteChangeTracker;
