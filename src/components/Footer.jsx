/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import "../styles/FootesStyles/footerStyles.scss";

function Footer() {
    const FooterWrapperContainer = styled.div`
        // background-color: tomato;
        color: #1c211e;
    `;

    const FooterItemWidth = styled.div`
        max-width: 1000px;
        margin: 0 auto;
        justify-content: center;
        item-align: center;
        padding: 2rem 0 2rem;
    `;

    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <FooterWrapperContainer>
                <div className="relative justify-center w-full m-auto align-middle footer__heading">
                    <div className="footer__content">
                        <FooterItemWidth className="flex flex-col flex-wrap align-middle md:flex-row xl:flex-row">
                            <div className="flex-auto py-3 footer__item">
                                Copyright &copy; {year}&nbsp;
                                <a href="https://www.instagram.com/joeyojoo_/">
                                    Gilang.
                                </a>
                                &nbsp;All Rights Reserved.
                            </div>
                            {/* <div className="flex-1 py-3 footer__item"></div> */}
                            {/* <div className="flex-1 py-3 footer__item"></div> */}
                        </FooterItemWidth>
                    </div>
                </div>
            </FooterWrapperContainer>
        </>
    );
}

export default Footer;
