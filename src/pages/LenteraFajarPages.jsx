/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../components/styles/global.styles.module.scss";
import LenteraThumbnail from "../../public/img/LenteraMockMac.png";
import LenteraShowcase1 from "../../public/img/LenteraShowcase1.jpg";
import LenteraShowcase2 from "../../public/img/12ColumnLentera.png";
import WireframeLentera2 from "../../public/img/LenteraMoc3.png";
import WireframeLentera1 from "../../public/img/WireframeLentera.png";
import LenteraMocs from "../../public/img/MockLentera.png";
import LenteraPallete from "../../public/img/colorPalletLentera.png";
import SmoothScroll from "../SmoothScroll";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function LenteraFajarPages() {
    return (
        <>
            <Helmet>
                <title>Lentera Fajar Indonesia</title>
            </Helmet>
            <SmoothScroll>
                <div className={`${styles.container}`}>
                    <div className="text-gray-950">
                        <span className={`${styles.headingTitle}`}>
                            Sekolah Lentera Fajar Indonesia
                        </span>
                        <p className={`${styles.subHeadingTop} pb-8 xl:pb-8`}>
                            Freelance - 2023
                        </p>
                    </div>
                    <div className={`${styles.wrapper}`}>
                        <picture>
                            <img
                                src={LenteraThumbnail}
                                alt="Lentera Fajar indonesia"
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
                                    <span>SLB</span>
                                </div>
                                <div
                                    className={`${styles.listItems} flex flex-col`}
                                >
                                    <span className="font-bold">Year</span>
                                    <span>2023</span>
                                </div>
                            </div>
                            <div className={`${styles.headingWrapper}`}>
                                <p className={`${styles.subHeading}`}>
                                    Lentera Fajar Indonesia merupakan sebuah
                                    komunitas Home Schooling atau PKBM yang
                                    beroperasi sejak tahun 2006 dan berlokasi
                                    pada Perumahan Kahuripan Nirwana Blok BA 2
                                    Nomor 3A, Kecamatan Sumput, Kota Sidoarjo,
                                    Jawa Timur.
                                </p>
                                <div className={`${styles.ctaLink} py-12`}>
                                    <Link
                                        to="https://www.lenterafajarindonesia.sch.id/tentang-kami"
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
                                    className={`${styles.pictShowcase} grid grid-cols-1 xl:grid-cols-2 gap-8`}
                                >
                                    <picture>
                                        <img src={LenteraShowcase1} alt="" />
                                    </picture>
                                    <picture>
                                        <img src={LenteraShowcase2} alt="" />
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
                                                Untuk menyimpan dan mengelola
                                                segala dokumen hasil dari
                                                aktifitas yang terjadi didalam
                                                kegiatan belajar mengajar.
                                                Dimana nantinya aplikasi website
                                                yang dibangun dapat digunakan
                                                untuk mempermudah pengguna dalam
                                                melakukan penambahan data,
                                                mengubah data, menampilkan data,
                                                dan mencari data yang
                                                dibutuhkan.
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
                                        <img src={LenteraMocs} alt="" />
                                    </picture>
                                    <picture className="lg:col-span-1 md:col-span-0 xl:col-span-2">
                                        <img src={LenteraPallete} alt="" />
                                    </picture>
                                </div>
                                <div
                                    className={`${styles.wireframeTemplates} py-8 grid grid-cols-1 lg:grid-cols-2 gap-8`}
                                >
                                    <picture>
                                        <img src={WireframeLentera1} alt="" />
                                    </picture>
                                    <picture>
                                        <img src={WireframeLentera2} alt="" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </SmoothScroll>
        </>
    );
}

export default LenteraFajarPages;
