/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import "../../styles/aboutStyles.scss";
import CVPortofolio from "../../assets/CV/Gilang_Alfi_Syahri_Ramadhan_Resume-UI_UX Designer.pdf";
import { Link } from "react-router-dom";
import {
    FaDownload,
    FaLinkedin,
    FaSquareBehance,
    FaSquareGithub,
} from "react-icons/fa6";
import { motion, useAnimation, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ThisMe from "../../assets/img/ThisMe.png";
import SmoothScroll from "../../SmoothScroll";
import WorkExperience from "../../components/WorkExperience";
import Education from "../../components/Education";
import Skills from "../../components/Skills";

const AboutArticleitems = () => {
    const ArticleWrapper = styled.div`
        gap: 5%;
        @media (1201px <= width) {
            display: flex;
            flex-direction: row-reverse;
        }
    `;
    const ArticleAboutinfo = styled.div`
        display: block;
        position: relative;
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
        flex-wrap: wrap;
        gap: 10px;
        @media {
            font-size: 0.8em;
            flex-direction: row;
            margin: 0 0 30px;
        }
        @media (1201px <= width) {
            flex-direction: column;
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
            border-radius: 12px;
        }
    `;

    const LinkedinMoverel__ = styled.div`
        background-color: #00457a;
        color: #ffffff;
        &:hover {
            background-color: #005494;
            border-radius: 12px;
        }
    `;

    const BehanceMoverel__ = styled.div`
        background-color: #0057ff;
        color: #ffffff;
        &:hover {
            background-color: rgb(6 74 204);
            border-radius: 12px;
        }
    `;

    const RenderWorkspecial__ = styled.div`
        display: block;
        position: relative;
    `;

    return (
        <>
            <div className="p-4 md:p-0 lg:p-0 xl:p-0">
                <ArticleWrapper>
                    <div className="socialContainer">
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
                                    to="https://www.behance.net/gilangalfii"
                                    target="_blank"
                                >
                                    <BehanceMoverel__ className="flex items-center gap-3 p-3 px-10 text-center duration-300 delay-150 eas-in-out behance__moreRel">
                                        <FaSquareBehance className="text-lg xl:text-2xl" />{" "}
                                        Behance
                                    </BehanceMoverel__>
                                </Link>
                            </MoveLink>
                        </div>
                    </div>
                    <ArticleAboutinfo>
                        <ArticleHeading>
                            <h2>Hello Frontend Lovers,</h2>
                        </ArticleHeading>
                        <ArticleAuthor className="py-2">
                            <h2>I'm Gilang Ramadhan</h2>
                        </ArticleAuthor>

                        <ArticleContent className="leading-8">
                            I'm a UI/UX designer and Frontend Developer with
                            more than 2 years of experience. During my work as a
                            Freelancer in the field of UI/UX design, I have
                            helped increase and attract users to be able to
                            access web pages by redesigning or creating UI.
                            Apart from that, I also back-end developers.
                            <DownloadPorto className="my-10">
                                <div className="flex cvLink__download ">
                                    <Link
                                        className="flex items-center gap-3 px-6 py-3 text-white duration-300 delay-150 bg-slate-400 hover:bg-slate-600 w-82 eas-in-out"
                                        to={CVPortofolio}
                                        download="Gilang_Alfi_Syahri_Ramadhan_Resume-UI_UX Designer"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaDownload className="text-2xl" />
                                        Download My Resume
                                    </Link>
                                </div>
                            </DownloadPorto>
                            <WorkExperience />
                            <Skills />
                            {/* <Education /> */}
                            {/* <p>Hold on, it's not stop in here❤️. Update Soon</p> */}
                        </ArticleContent>
                    </ArticleAboutinfo>
                </ArticleWrapper>
            </div>
        </>
    );
};

export default AboutArticleitems;
