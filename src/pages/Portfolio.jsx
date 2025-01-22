import React from "react";
import styles from "../components/styles/portfolio.styles.module.scss";
import LenteraThumbnail from "../assets/img/LenteraMoc2.png";
import KinayaThumbnail from "../assets/img/KinayaRenderMac.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SmoothScroll from "../components/LenisScroll";

function ContentWrapper() {
    return (
        <SmoothScroll>
            <>
                <Helmet>
                    <title>Gilang's Portofolio</title>
                </Helmet>
                <div className={`${styles.landingContainer}`}>
                    <div className={`${styles.landingHeader}`}>
                        <span className={`${styles.TextHeader}`}>
                            Portofolio
                        </span>
                    </div>
                    <div
                        className={`${styles.landingContent} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4`}
                    >
                        <div className={`${styles.content}`}>
                            <Link to="/lentera-fajar">
                                <picture>
                                    <img
                                        src={LenteraThumbnail}
                                        alt="Lentera Fajar Indonesia"
                                    />
                                </picture>
                            </Link>
                            <div className={`${styles.contentContainer}`}>
                                <div
                                    className={`${styles.contentHeading} flex flex-col`}
                                >
                                    <span className={`${styles.gra}`}>
                                        GRA - 2023
                                    </span>
                                    <span className={`${styles.link}`}>
                                        <Link
                                            to="/lentera-fajar"
                                            className={`${styles.linkPages}`}
                                        >
                                            Lentera Fajar Indonesia
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.content}`}>
                            <Link to="/kinaya">
                                <picture>
                                    <img
                                        src={KinayaThumbnail}
                                        alt="Kinaya Interior Design"
                                    />
                                </picture>
                            </Link>
                            <div className={`${styles.contentContainer}`}>
                                <div
                                    className={`${styles.contentHeading} flex flex-col`}
                                >
                                    <span className={`${styles.gra}`}>
                                        GRA - 2022
                                    </span>
                                    <span className={`${styles.link}`}>
                                        <Link
                                            to="/kinaya"
                                            className={`${styles.linkPages}`}
                                        >
                                            Kinaya Interior Desain
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </SmoothScroll>
    );
}

export default ContentWrapper;
