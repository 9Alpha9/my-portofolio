/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import "../../styles/aboutStyles.scss";
import CVPortofolio from "../../assets/CV/Gilang Alfi Syahri Ramadhan-resume.pdf";
import Portofolio from "../../assets/Portofolio/Portfolio Web Design - Gilang Alfi Syahri Ramadhan.pdf";
import { Link } from "react-router-dom";
import {
    FaDownload,
    FaLinkedin,
    FaSquareBehance,
    FaSquareGithub,
} from "react-icons/fa6";
// import { motion, useAnimation, easeInOut } from "framer-motion";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Education from "../../components/education/Education";
import Organization from "../../components/organization/Organization";
import Profiles from "../../assets/img/profile/photo_2025-01-14_10-53-47.jpg";
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
        // overflow-x: scroll;
        gap: 4px;
        position: relative;
        /* @media (240px <= width <= 320px) {
            font-size: 0.8em;
            flex-direction: column-reverse;
            margin: 0 0 30px;
        } */
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
        /* max-width: 200px; */
    `;
    const MarqueeContainer = styled.div`
        // flex: 1 1 0;
    `;
    return (
        <>
            <div className="md:p-0 lg:p-0 xl:p-0">
                <ArticleWrapper>
                    {/* <div className="mt-40 socialContainer">
                        <div className="social__list">
                            <MoveLink className="relSocial__move">
                                <Link
                                    to="https://github.com/9Alpha9"
                                    target="_blank"
                                >
                                    <GithubMoverel__ className="flex items-center gap-3 p-3 px-10 text-center duration-300 delay-150 eas-in-out github__moveRel">
                                        <FaSquareGithub className="text-lg xl:text-2xl" />{" "}
                                        Github
                                    </GithubMoverel__>
                                </Link>
                                <Link
                                    to="https://www.linkedin.com/in/gilang-ramaddhann/"
                                    target="_blank"
                                >
                                    <LinkedinMoverel__ className="flex items-center gap-3 p-3 px-10 text-center duration-300 delay-150 eas-in-out linkedin__moreRel">
                                        <FaLinkedin className="text-lg xl:text-2xl" />{" "}
                                        Linkedin
                                    </LinkedinMoverel__>
                                </Link>
                                <Link
                                    to="https://www.behance.net/joeys-ui"
                                    target="_blank"
                                >
                                    <BehanceMoverel__ className="flex items-center gap-3 p-3 px-10 text-center duration-300 delay-150 eas-in-out behance__moreRel">
                                        <FaSquareBehance className="text-lg xl:text-2xl" />{" "}
                                        Behance
                                    </BehanceMoverel__>
                                </Link>
                            </MoveLink>
                        </div>
                    </div> */}
                    <ArticleAboutinfo>
                        <div className="gap-10 bodyProfile">
                            <div className="profilePic">
                                <figure className="about__meFigure">
                                    <LazyLoadImage
                                        src={Profiles}
                                        className="rounded-full pointer-events-none"
                                    />
                                </figure>
                                <div className="flex justify-center social__list">
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
                                    Lulusan Universitas Dinamika (STIKOM
                                    Surabaya) UX/ UI Designer dengan latar
                                    belakang Sistem Informasi, berpengalaman
                                    dalam merancanng antarmuka pengguna yang
                                    intuitif dan menarik. Bersemangat untuk
                                    menciptakan pengalaman pengguna yang
                                    memuaskan melalui riset yang mendalam,
                                    prototyping, dan melakukan uji kegunaan.
                                    Memiliki keahlian dalam berbagai alat
                                    desain, mengelola proyek desain dari ide
                                    hingga eksekusi dan kemampuan berkolaborasi
                                    yang kuat dengan tim lintas fungsional.
                                </ArticleContent>
                                <DownloadPorto className="gap-8 my-10 xl:flex fle-col">
                                    <div className="flex pt-4 cvLink__download">
                                        <Link
                                            className="flex w-[18rem] justify-center gap-3 px-6 py-3 text-white duration-300 delay-150 rounded-full bg-slate-400 hover:bg-slate-600 w-82 eas-in-out"
                                            to={CVPortofolio}
                                            download="Gilang Alfi Syahri Ramadhan - CV"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaDownload className="text-2xl " />
                                            Download CV
                                        </Link>
                                    </div>
                                    <div className="flex pt-4 cvLink__download">
                                        <Link
                                            className="flex w-[18rem] justify-center gap-3 px-6 py-3 text-white duration-300 delay-150 bg-blue-900 rounded-full hover:bg-blue-600 w-82 eas-in-out"
                                            to={Portofolio}
                                            download="Gilang Alfi Syahri Ramadhan - Portofolio Of UI/UX Designer & Graphic Designer"
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
                        {/* <p>Hold on, it's not stop in here❤️. Update Soon</p> */}
                    </ArticleAboutinfo>
                </ArticleWrapper>
            </div>
        </>
    );
};

export default AboutArticleitems;
