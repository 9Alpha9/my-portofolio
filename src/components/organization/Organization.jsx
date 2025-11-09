import React from "react";
import styles from "./styles.module.scss";
import BagianLogo from "../../assets/img/bagianLogo.png";
import { Link } from "react-router-dom";

function Organization() {
    const OrganizationMap = [
        {
            title: "Bagian Corps",
            id: "Undika",
            description:
                "Freelancer Organization with an IT background such as web development to assist companies in setting up the UI and UX appearance.",
            date: "2022 - Presents",
            label: "UI/UX & Frontend Web",
            image: BagianLogo,
            link: "https://www.bagian.web.id/tentang-kami",
        },
    ];
    return (
        <div
            className={`${styles.organizationWrapper} border-t border-t-gray-300 pt-6`}
        >
            <div className={`${styles.organizationContent}`}>
                <span className={`${styles.organizationHeader}`}>
                    pre organization
                </span>
                <div
                    className={` ${styles.organizationItems} grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3`}
                >
                    {OrganizationMap.map((organization) => (
                        <div
                            className={`${styles.organizationMap} relative flex flex-col justify-between p-3 overflow-hidden border rounded-md shadow-md shadow-gray-200 border-slate-300`}
                            key={organization.id}
                        >
                            <div className="top-0">
                                <div className="flex flex-col items-center xl:gap-6 xl:flex-row">
                                    <span className="text-sm">
                                        <picture>
                                            <img
                                                src={organization.image}
                                                alt=""
                                                className="object-cover w-[40px] rounded-full"
                                            />
                                        </picture>
                                    </span>
                                    <div className="flex flex-row items-center justify-between w-full pt-3 xl:pt-0">
                                        <span className="block text-sm">
                                            {organization.date}
                                        </span>
                                        <span className="block text-sm uppercase">
                                            {organization.label}
                                        </span>
                                    </div>
                                </div>
                                <h2 className="py-4 mt-5 leading-6 xl:text-md">
                                    {organization.title}
                                </h2>
                            </div>
                            <div>
                                <p className="text-sm">
                                    {organization.description}
                                </p>
                            </div>
                            <div className="pt-4 link">
                                <Link to={organization.link} target="_blank">
                                    <span className="block w-full p-2 px-6 text-sm text-center text-white duration-500 ease-in-out bg-gray-700 rounded-md hover:bg-slate-500">
                                        Kunjungi Situs
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Organization;
