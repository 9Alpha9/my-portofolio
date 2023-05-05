/* eslint-disable no-unused-vars */
import styled from "styled-components";
import "../styles/NavbarStyles/navbarStyles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MyFace from "../assets/img/MyFace.png";
import { Link } from "react-router-dom";

const NavbarNav = styled.div`
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
`;

const Navbar = () => {
    return (
        <>
            <NavbarNav>
                <div className="nav">
                    <div className="flex flex-row items-center justify-between px-4 py-8 align-middle nav__item">
                        <div className="flex items-center gap-3 xl:ml-16 nav__logo">
                            <figure className="logo ">
                                <LazyLoadImage
                                    src={MyFace}
                                    alt={"My Face Gilang Portofolio Logo"}
                                />
                            </figure>
                            <span className="relative cursor-pointer overlay__me">
                                <div className="flex items-center m-auto over__line">
                                    <h3 className="relative align-middle hellow__its__me animate__bounce animate__animated">
                                        Hello ✋
                                    </h3>
                                </div>
                            </span>
                        </div>
                        <div className="nav__link ">
                            <div className="flex flex-row gap-3 xl:gap-4 nav__link__item text-gray-950 backdrop-blur-md">
                                {/* <Link to={"/"} className="relative">
                                    Home
                                </Link> */}
                                <a href="/">Home</a>
                                <a href="/about">About</a>
                            </div>
                        </div>
                    </div>
                </div>
            </NavbarNav>
        </>
    );
};

export default Navbar;
