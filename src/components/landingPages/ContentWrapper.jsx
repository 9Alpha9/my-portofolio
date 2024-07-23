import React from "react";
import styles from "../../components/landingPages/styles.module.scss";
import LenteraThumbnail from "../../../public/img/LenteraMockMac.png";
import KinayaThumbnail from "../../../public/img/KinayaRenderMac.png";
import { Link } from "react-router-dom";

function ContentWrapper() {
    return (
        <>
            <div className={`${styles.landingContainer}`}>
                <div
                    className={`${styles.landingContent} grid grid-cols-2 gap-4`}
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
    );
}

export default ContentWrapper;
