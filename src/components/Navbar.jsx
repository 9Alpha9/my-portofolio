/* eslint-disable no-unused-vars */
import styled from "styled-components";
import "../styles/navbarStyles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MyFace from "../assets/img/MyFace.png";
// import LandingPage from "../pages/LandingPage";
import { Link } from "react-router-dom";
import styles from "../styles/styles.nav.module.scss";

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
            <NavbarNav className="h-[5em] backdrop-blur-sm">
                <div className={`${styles.nav} flex justify-center mt-3`}>
                    <div
                        className={`${styles.nav__wrapper} fixed p-2 bg-gradient-to-r to-indigo-500 from-black rounded-full m-auto px-5`}
                    >
                        <div
                            className={`${styles.nav__items} flex justify-between items-center gap-10`}
                        >
                            <div className={`${styles.nav__logo}`}>
                                <figure className={`${styles.logoimg}`}>
                                    <LazyLoadImage
                                        src={MyFace}
                                        alt={"My Face Gilang Portofolio Logo"}
                                    />
                                </figure>
                            </div>
                            <div className={`${styles.nav__links}`}>
                                <span className="relative gap-3">
                                    <ul
                                        className={`${styles.nav__link__wrapper}`}
                                    >
                                        <li
                                            className={`${styles.nav__links__items}`}
                                        >
                                            <Link
                                                to={"/"}
                                                className={`${styles.linksCta}`}
                                            >
                                                About Me
                                            </Link>
                                        </li>
                                        <li
                                            className={`${styles.nav__links__items}`}
                                        >
                                            <Link
                                                to={"/portfolio"}
                                                className={`${styles.linksCta}`}
                                            >
                                                Portofolio
                                            </Link>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="nav">
                    <div className="flex flex-row items-center justify-between px-4 py-8 align-middle nav__item">
                        <div className="flex items-center gap-3 nav__logo">
                            <figure className="logo ">
                                <LazyLoadImage
                                    src={MyFace}
                                    alt={"My Face Gilang Portofolio Logo"}
                                />
                            </figure>
                            <span className="relative cursor-pointer overlay__me">
                                <div className="flex items-center m-auto over__line">
                                    <h3 className="relative align-middle hellow__its__me">
                                        Hello ✋
                                    </h3>
                                </div>
                            </span>
                        </div>
                        <div className="nav__link ">
                            <div className="flex flex-row gap-3 xl:gap-4 nav__link__item text-gray-950 backdrop-blur-md">
                                <span className="relative gap-3">
                                    <ul className="flex flex-row gap-4 nav__link__wrapper">
                                        <li className="nav__links__items whitespace-nowrap">
                                            <Link to={"/"} className="linksCta">
                                                About Me
                                            </Link>
                                        </li>
                                        <li className="nav__links__items">
                                            <Link
                                                to={"/portfolio"}
                                                className="linksCta"
                                            >
                                                Portofolio
                                            </Link>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </NavbarNav>
        </>
    );
};

export default Navbar;
