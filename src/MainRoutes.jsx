import "./App.css";
import RoutingComponents from "./RoutingComponents";
// import Navbar from "./components/Navbar";
// import styled from "styled-components";

import { useRoutes } from "react-router-dom";

export default function ThemeRoutes() {
    return useRoutes([RoutingComponents]);
}
