/* eslint-disable no-unused-vars */
import styled from "styled-components";
import "../styles/NavbarStyles/navbarStyles.scss";

const NavbarNav = styled.div`
    padding: 1rem;
    overflow: hidden;
    position: fixed;
    background-color: tomato;
`;

const Navbar = () => {
    return (
        <>
            {/* <NavbarNav className="navHeader">navbar</NavbarNav> */}
            <div className="nav">navbar</div>
        </>
    );
};

export default Navbar;
