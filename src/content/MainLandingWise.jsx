/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import "../styles/mainContent.scss";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

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

const ButtonCta = styled.div`
    display: block;
`;

const MainLandingWise = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="relative heading__content__landing">
                <Link to={"/wise-commerce"}>
                    <ContentStag className="overflow-hidden rounded-xl content__wrapper__heading">
                        <div className="relative flex flex-col-reverse md:flex-row xl:flex-row content__header">
                            <div className="relative px-6 py-6 align-middle md:py-0 md:px-0 md:m-10 xl:m-10 content__item">
                                <IconContents className="icons__item">
                                    👊
                                </IconContents>
                                <div className="content__history">
                                    <span className="block w-full pt-6 content__title">
                                        <h1>Conceptual Opportunity</h1>
                                    </span>
                                    <ContentPress className="py-4 md:py-3 xl:py-3 categories__branding">
                                        <span>UI/UX Design</span>
                                        <span>2022</span>
                                    </ContentPress>
                                    <div className="py-4 max-w-screen content__short__history">
                                        Analisis kemajuan e-commerce yang
                                        memanjakan setiap manusia untuk bisa
                                        melakukan proses transaksi dengan
                                        menggunakan implementasi desain web.
                                    </div>
                                    <span className="relative block w-80 ">
                                        <Link
                                            to={"/wise-commerce"}
                                            className="relative p-4 mt-10 overflow-hidden xl:px-20 link__cta lg:px-20 2xl:px-20 w-80"
                                        >
                                            Read The Case Study
                                        </Link>
                                    </span>
                                    {/* <ButtonCta className="relative mt-10">
                                    <button
                                        className="relative p-4 overflow-hidden xl:px-20 button__cta lg:px-20 2xl:px-20 "
                                        onClick={() =>
                                            navigate("/wise-commerce")
                                        }
                                    >
                                        Read The Case Study
                                    </button>
                                </ButtonCta> */}
                                </div>
                            </div>
                            <div className="relative flex-1 flex-shrink-0 content__figure">
                                <LazyLoadImage
                                    src={
                                        "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/b5dc6195266345.5e93ae5eeef52.png"
                                    }
                                    alt={""}
                                />
                            </div>
                        </div>
                    </ContentStag>
                </Link>
            </div>
        </>
    );
};

export default MainLandingWise;
