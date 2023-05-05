/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import "../styles/mainContent.scss";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import KinayaMockup from "../assets/img/kinaya-mockup-showcase.png";
import { Link } from "react-router-dom";

export { KinayaMockup };

const MainLandingKinaya = () => {
    const navigate = useNavigate();

    const ContentStag = styled.div`
        background: rgb(234, 240, 251);
        background: -moz-linear-gradient(
            54deg,
            rgba(234, 240, 251, 1) 0%,
            rgba(236, 239, 241, 1) 50%
        );
        background: -webkit-linear-gradient(
            54deg,
            rgba(234, 240, 251, 1) 0%,
            rgba(236, 239, 241, 1) 50%
        );
        background: linear-gradient(
            54deg,
            rgba(234, 240, 251, 1) 0%,
            rgba(236, 239, 241, 1) 50%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#eaf0fb",endColorstr="#eceff1",GradientType=1);
        // max-width: 1024px;
        margin: auto;
    `;

    const IconContents = styled.span`
        display: flex;
        // font-size: 2em;
        background-color: #132a1f;
        border-radius: 10px;
        // padding: 2rem;
        // height: 20px;
        // width: 20px;
        justify-content: center;
        align-items: center;
        position: relative;
    `;

    const ContentPress = styled.div`
        display: flex;
        flex-direction: row;
        gap: 35px;
        color: #656565;
    `;

    return (
        <>
            <div className="relative heading__content__landing">
                <Link to={"/kinaya"}>
                    <ContentStag className="overflow-hidden rounded-xl content__wrapper__heading">
                        <div className="relative flex flex-col-reverse md:flex-row xl:flex-row content__header">
                            <div className="relative px-6 py-6 align-middle md:py-0 md:px-0 md:m-10 xl:m-10 content__item">
                                <IconContents className="icons__item">
                                    😱
                                </IconContents>
                                <div className="content__history">
                                    <span className="block w-full pt-6 content__title">
                                        <h1>In Design We Trust</h1>
                                    </span>
                                    <ContentPress className="py-4 md:py-3 xl:py-3 categories__branding">
                                        <span>UI/UX & Web Design</span>
                                        <span>2022</span>
                                    </ContentPress>
                                    <div className="py-4 max-w-screen content__short__history">
                                        Bergerak dalam bidang arsitek dan
                                        interior desain, Kinaya melakukan
                                        perluasan dengan menggunakan website
                                        sebagai media promosi dan perdagangan
                                        alat kantor.
                                    </div>
                                    <span className="relative block w-80 ">
                                        <Link
                                            to={"/kinaya"}
                                            className="relative p-4 mt-10 overflow-hidden text-center xl:px-20 lg:w-80 link__cta lg:px-20 2xl:px-20 xl:w-80 w-60"
                                        >
                                            Read The Case Study
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="relative flex-1 flex-shrink-0 content__figure">
                                <LazyLoadImage src={KinayaMockup} alt={""} />
                            </div>
                        </div>
                    </ContentStag>
                </Link>
            </div>
        </>
    );
};

export default MainLandingKinaya;
