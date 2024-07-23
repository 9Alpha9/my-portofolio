/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../components/styles/global.styles.module.scss";
import wiseThumbnail from "../../public/img/Wise-Fashion-UI-Design.png";

function WiseCommerce() {
    return (
        <>
            <div className={`${styles.container}`}>
                <div className="text-gray-950">
                    <span className={`${styles.headingTitle}`}>
                        Conceptual Opportunity
                    </span>
                    <p className={`${styles.subHeading}`}>
                        UI/UX Desain Konsep E-Commerce
                    </p>
                </div>
                <div className={`${styles.wrapper}`}>
                    <picture>
                        <img src={wiseThumbnail} alt="Wise Commerce Concept" />
                    </picture>
                    <p className={`${styles.subHeading}`}>
                        Wise Commerce merupakan toko online yang berfokus dalam
                        penjualan fashion kekian dengan berfokus menggaet
                        kalangan muda.
                    </p>
                    <div className={`${styles.caseStudy}`}>
                        <h1>Case:</h1>
                        <span className={`${styles.caseStudy_list}`}>
                            <ul className="list-disc">
                                <li>Media dalam promosi</li>
                                <li>Traffic</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WiseCommerce;
