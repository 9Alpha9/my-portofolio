/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../components/styles/global.styles.module.scss";
import KinayaThumbnail from "../../public/img/KinayaRenderMac.png";
import KinayaMockup from "../../public/img/MockKinaya.png";
import KinayaLogo from "../../public/img/KinayaLogo.jpg";
import KinayaLoader from "../../public/img/KinayaSlider.jpg";
import KinayaConcept2 from "../../public/img/kinayaConcept_2.png";
import KinayaConcept3 from "../../public/img/kinayaConcept_3.png";
import WireframeKinaya from "../../public/img/WireframeKinaya.png";
import KinayaFrame from "../../public/img/KinayaFrame.png";
import SmoothScroll from "../SmoothScroll";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function KinayaPages() {
    return (
        <>
            <Helmet>
                <title>Kinaya Interior Design</title>
            </Helmet>
            <SmoothScroll>
                <div className={`${styles.container}`}>
                    <div className="text-gray-950">
                        <span className={`${styles.headingTitle}`}>
                            Kinaya Interior Design
                        </span>
                        <p className={`${styles.subHeadingTop} pb-8 xl:pb-8`}>
                            Freelance - 2022
                        </p>
                    </div>
                    <div className={`${styles.wrapper}`}>
                        <picture>
                            <img
                                src={KinayaThumbnail}
                                alt="Kinaya Interior Desain"
                            />
                        </picture>
                        <div
                            className={`${styles.wrapperText} grid grid-cols-1 xl:grid-cols-2 gap-8 py-20`}
                        >
                            <div
                                className={`${styles.caseStudy_list} grid grid-cols-3`}
                            >
                                <div
                                    className={`${styles.listItems} flex flex-col`}
                                >
                                    <span className="font-bold">Project</span>
                                    <span>Freelance</span>
                                </div>
                                <div
                                    className={`${styles.listItems} flex flex-col`}
                                >
                                    <span className="font-bold">Case</span>
                                    <span>
                                        Archiceture Desain & Interior Desain
                                    </span>
                                </div>
                                <div
                                    className={`${styles.listItems} flex flex-col`}
                                >
                                    <span className="font-bold">Year</span>
                                    <span>2022</span>
                                </div>
                            </div>
                            <div className={`${styles.headingWrapper}`}>
                                <p className={`${styles.subHeading}`}>
                                    Kinaya Interior Desain merupakan perusahana
                                    Architecture Design and Build, Bergerak
                                    dalam bidang Arsitektur-Interior Desain dan
                                    Konstruksi sipil. Bergerak sejak tahun 2013
                                    dengan dikerjakan oleh tim yang profesional
                                    dan berkompeten.
                                </p>
                                <div className={`${styles.ctaLink} py-12`}>
                                    <Link
                                        to="https://www.kinayainterior.com/"
                                        target="_blank"
                                    >
                                        <span>Kunjungi Halaman</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.caseStudy}`}>
                            <div className={`${styles.showCase} py-6`}>
                                <span className={`${styles.showcaseHeading}`}>
                                    <h1>Showcase</h1>
                                </span>
                                <div
                                    className={`${styles.pictShowcase} grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-8`}
                                >
                                    <picture>
                                        <img src={KinayaConcept2} alt="" />
                                    </picture>
                                    <picture>
                                        <img src={KinayaLogo} alt="" />
                                    </picture>
                                    <picture className="lg:col-span-2 xl:col-span-1">
                                        <img src={KinayaConcept3} alt="" />
                                    </picture>
                                </div>
                                <div className={`${styles.goals}`}>
                                    <div className={`${styles.goalsWrapper}`}>
                                        <span
                                            className={`${styles.goalsHeading}`}
                                        >
                                            Goals
                                        </span>

                                        <div
                                            className={`${styles.goalsSubHeading}`}
                                        >
                                            <p>
                                                Untuk menampilkan beberapa
                                                informasi mengenai layanan yang
                                                terdapat pada Kinaya Interoir
                                                Design dan Architecture Design.
                                                Informasi daftar client yang
                                                pernah melakukan kerja sama
                                                dengan pihak Kinaya Interior
                                                Design dan menampilkan gallery
                                                foto.
                                            </p>
                                            <div
                                                className={`${styles.timelineNotion}`}
                                            >
                                                <Link
                                                    to="https://steady-pyroraptor-859.notion.site/Notes-Compro-d0dab544b3dd4289a5d4b943aef8047a"
                                                    target="_blank"
                                                    className={`${styles.ctaNotion}`}
                                                >
                                                    <span>Lihat Timeline</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`${styles.pictureCenter} pt-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8`}
                                >
                                    <picture>
                                        <img src={KinayaLoader} alt="" />
                                    </picture>
                                    <picture className="lg:col-span-1 md:col-span-0 xl:col-span-2">
                                        <img src={KinayaMockup} alt="" />
                                    </picture>
                                </div>
                                <div
                                    className={`${styles.wireframeTemplates} py-8 grid grid-cols-1 lg:grid-cols-2 gap-8`}
                                >
                                    <picture>
                                        <img src={WireframeKinaya} alt="" />
                                    </picture>
                                    <picture>
                                        <img src={KinayaFrame} alt="" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SmoothScroll>
        </>
    );
}

export default KinayaPages;
