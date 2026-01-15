/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import "../../styles/aboutStyles.scss";
import CVPortofolio from "../../assets/CV/Gilang_Alfi_Syahri_Ramadhan-CV.pdf";
import Resume from "../../assets/Resume/Gilang_Alfi_Syahri_Ramadhan-Resume.pdf";
// import Portofolio from "../../assets/Portofolio/Gilang_Alfi_Syahri_Ramadhan-Portofolios.pdf";
import Portofolio from "../../assets/Portofolio/Gilang_Ramadhan_Portofolio_2026_new.pdf";
import { Link } from "react-router-dom";
import {
    FaDownload,
    FaLinkedin,
    FaSquareBehance,
    FaSquareGithub,
} from "react-icons/fa6";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Education from "../../components/education/Education";
import Organization from "../../components/organization/Organization";
import Profiles from "../../assets/img/profile/photo-pictures-2025.png";
import SlideMarquee from "../../components/SlidesMarquee";

const AboutArticleitems = () => {
    const ArticleWrapper = styled.div`
        margin: 20px;
        gap: 5%;
        @media (min-width: 1201px) {
            display: flex;
            flex-direction: row-reverse;
        }
    `;
    const ArticleAboutinfo = styled.div`
        display: block;
        position: relative;
        margin: auto;
        @media (min-width: 1201px) {
            max-width: 900px;
        }
    `;

    const ArticleHeading = styled.div`
        position: relative;
        font-size: 1.8em;
        color: #161515;
        @media (1201px <= width) {
            font-size: 2.8em;
        }
    `;

    const ArticleContent = styled.div`
        position: relative;
        font-size: 1em;
        @media (1201px <= width) {
            font-size: 1.2em;
        }
    `;

    const ArticleAuthor = styled.div`
        font-size: 3em;
        font-weight: 600;
        @media (1201px <= width) {
            font-size: 4.5em;
        }
    `;

    const MoveLink = styled.div`
        display: flex;
        gap: 4px;
        position: relative;
        @media (min-width: 1201px) {
            flex-direction: row;
            font-size: 1em;
        }
    `;

    const DownloadPorto = styled.div`
        position: relative;
    `;

    const GithubMoverel__ = styled.div`
        background-color: #050505;
        color: #ffffff;
        &:hover {
            background-color: #313131;
        }
        &::before {
            content: "Github";
            position: absolute;
            bottom: 4em;
            left: -5.2px;
            padding: 6px;
            border-radius: 10%;
            display: flex;
            justify-content: center;
            background-color: black;
            opacity: 0;
            transition: 0.3s ease;
            font-size: 10px;
            pointer-events: none;
            cursor: default;
            text-decoration: none;
            color: white;
            transition-delay: 0.3s;
        }
        &:hover::before {
            opacity: 1;
        }
    `;

    const LinkedinMoverel__ = styled.div`
        background-color: #00457a;
        color: #ffffff;
        &:hover {
            background-color: #005494;
        }
        &::before {
            content: "LinkedIn";
            position: absolute;
            bottom: 4em;
            left: 2rem;
            display: flex;
            justify-content: center;
            margin: auto;
            padding: 6px;
            border-radius: 10%;
            display: flex;
            justify-content: center;
            background-color: #00457a;
            opacity: 0;
            transition: 0.3s ease;
            font-size: 10px;
            pointer-events: none;
            cursor: default;
            text-decoration: none;
            color: white;
            transition-delay: 0.3s;
        }
        &:hover::before {
            opacity: 1;
        }
    `;

    const BehanceMoverel__ = styled.div`
        background-color: #0057ff;
        color: #ffffff;
        &:hover {
            background-color: rgb(6 74 204);
        }
        &::before {
            content: "Behance";
            position: absolute;
            bottom: 4em;
            right: -1em;
            display: flex;
            justify-content: center;
            margin: auto;
            padding: 6px;
            border-radius: 10%;
            display: flex;
            justify-content: center;
            background-color: #0057ff;
            opacity: 0;
            transition: 0.3s ease;
            font-size: 10px;
            pointer-events: none;
            cursor: default;
            text-decoration: none;
            color: white;
            transition-delay: 0.3s;
        }
        &:hover::before {
            opacity: 1;
        }
    `;

    const RenderWorkspecial__ = styled.div`
        display: block;
        position: relative;
    `;
    const MarqueeWrapper = styled.div`
        position: relative;
        display: block;
        overflow: hidden;
    `;
    const MarqueeContainer = styled.div`
        // flex: 1 1 0;
    `;
    return (
        <>
            <div className="md:p-0 lg:p-0 xl:p-0">
                <ArticleWrapper>
                    <ArticleAboutinfo>
                        <div className="gap-10 bodyProfile">
                            <div className="profilePic">
                                <div className="mt-[4rem] outline outline-[10px] outline-stone-400/20 rounded-full">
                                    <figure className="w-48 h-48 overflow-hidden rounded-full about__meFigure">
                                        <LazyLoadImage
                                            src={Profiles}
                                            className="transform scale-150 rounded-full pointer-events-none"
                                        />
                                    </figure>
                                </div>
                                <div className="flex justify-center mt-10 social__list">
                                    <div className="socialContainer">
                                        <MoveLink className="relSocial__move">
                                            <Link
                                                to="https://github.com/9Alpha9"
                                                target="_blank"
                                            >
                                                <GithubMoverel__ className="flex items-center gap-2 px-2 py-2 duration-300 delay-150 rounded-full eas-in-out github__moveRel">
                                                    <FaSquareGithub className="text-xl xl:text-xl" />
                                                </GithubMoverel__>
                                            </Link>
                                            <Link
                                                to="https://www.linkedin.com/in/gilang-ramaddhann/"
                                                target="_blank"
                                            >
                                                <LinkedinMoverel__ className="flex items-center gap-2 px-2 py-2 duration-300 delay-150 rounded-full eas-in-out linkedin__moreRel">
                                                    <FaLinkedin className="text-xl xl:text-xl" />
                                                </LinkedinMoverel__>
                                            </Link>
                                            <Link
                                                to="https://www.behance.net/joeys-ui"
                                                target="_blank"
                                            >
                                                <BehanceMoverel__ className="flex items-center gap-2 px-2 py-2 duration-300 delay-150 rounded-full eas-in-out behance__moreRel">
                                                    <FaSquareBehance className="text-xl xl:text-xl" />
                                                </BehanceMoverel__>
                                            </Link>
                                        </MoveLink>
                                    </div>
                                </div>
                            </div>
                            <div className="aboutInfo__items mt-11">
                                <ArticleHeading>
                                    <h2>
                                        Hello{" "}
                                        <span className="shake-emoji">🖐️</span>
                                    </h2>
                                </ArticleHeading>
                                <ArticleAuthor className="py-1 xl:leading-[1em]">
                                    <h2 className="font-semibold xl:text-[3.5rem] text-[2rem]">
                                        I'm Gilang Ramadhan
                                    </h2>
                                </ArticleAuthor>
                                <ArticleContent className="py-8 leading-8 text-justify">
                                    Alumni Universitas Dinamika dengan
                                    spesialisasi UX/UI Designer, saya menonjol
                                    dalam mengembangkan antarmuka pengguna yang
                                    intuitif dan estetis berkat keahlian dalam
                                    Sistem Informasi dan pengalaman yang luas.
                                    Keahlian ini didukung oleh kemampuan riset
                                    mendalam, prototyping yang teliti, dan uji
                                    pengguna yang komprehensif untuk menjamin
                                    pengalaman pengguna yang unggul. Saya mahir
                                    dalam penggunaan alat- alat desain terkini
                                    dan memiliki kecakapan dalam mengelola
                                    proyek desain dari awal hingga akhir. Saya
                                    juga efektif dalam bekerja sama dengan tim
                                    lintas fungsional, selalu berkomitmen untuk
                                    menyajikan solusi desain yang inovatif dan
                                    berfokus pada hasil yang konkret.
                                </ArticleContent>
                                <DownloadPorto className="gap-2 my-10 xl:flex fle-col">
                                    <div className="flex w-full pt-4 cvLink__download">
                                        <Link
                                            className="flex justify-center w-full gap-3 px-6 py-3 text-white duration-300 delay-150 rounded-full bg-stone-600 hover:bg-stone-700 w-82 eas-in-out whitespace-nowrap"
                                            to={CVPortofolio}
                                            download="Gilang Alfi Syahri Ramadhan - CV"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaDownload className="text-2xl" />
                                            Download CV
                                        </Link>
                                    </div>
                                    <div className="flex w-full pt-4 cvLink__download">
                                        <Link
                                            className="flex justify-center w-full gap-3 px-6 py-3 text-gray-900 duration-300 delay-150 border border-red-900 rounded-full hover:text-white hover:bg-red-900 w-82 eas-in-out whitespace-nowrap"
                                            to={Resume}
                                            download="Gilang Alfi Syahri Ramadhan - Portofolio Of UI/UX Designer"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaDownload className="text-2xl" />
                                            Download Resume
                                        </Link>
                                    </div>
                                    <div className="flex w-full pt-4 cvLink__download">
                                        <Link
                                            className="flex justify-center w-full gap-3 px-6 py-3 text-gray-900 duration-300 delay-150 border border-blue-900 rounded-full hover:text-white hover:bg-blue-600 w-82 eas-in-out whitespace-nowrap"
                                            to={Portofolio}
                                            download="Gilang Alfi Syahri Ramadhan - Portofolio Of UI/UX Designer"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaDownload className="text-2xl" />
                                            Download Portofolio
                                        </Link>
                                    </div>
                                </DownloadPorto>
                            </div>
                        </div>
                        <MarqueeWrapper>
                            <MarqueeContainer
                                id="smooth-wrapper"
                                className="marquee__listItem"
                            >
                                <div className="marquee__headText">
                                    <SlideMarquee />
                                </div>
                            </MarqueeContainer>
                        </MarqueeWrapper>
                        <WorkExperience />
                        <Skills />
                        <Education />
                        <Organization />
                    </ArticleAboutinfo>
                </ArticleWrapper>
            </div>
        </>
    );
};

export default AboutArticleitems;
