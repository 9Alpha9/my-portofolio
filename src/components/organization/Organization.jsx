import React from "react";
import styles from "./styles.module.scss";
import BagianLogo from "../../../public/img/bagianLogo.png";

function Organization() {
    const OrganizationMap = [
        {
            title: "Bagian Corps",
            id: "Undika",
            description:
                "Freelancer Organization with an IT background such as web development to assist companies in setting up the UI and UX appearance.",
            date: "2019 - Presents",
            label: "UI/UX & Frontend Web",
            image: BagianLogo,
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
                        <>
                            <div
                                className={`${styles.organizationMap} relative flex flex-col justify-between p-3 overflow-hidden border rounded-md shadow-md shadow-gray-200 border-slate-300`}
                            >
                                <div className="top-0" key={organization.id}>
                                    <div className="flex flex-col items-center xl:gap-6 xl:flex-row">
                                        <span className="text-sm">
                                            <picture>
                                                <img
                                                    src={organization.image}
                                                    alt=""
                                                    className="object-cover w-[35px] h-[35px]"
                                                />
                                            </picture>
                                        </span>
                                        <span className="block text-sm">
                                            {organization.date}
                                        </span>
                                        <span className="block text-sm uppercase">
                                            {organization.label}
                                        </span>
                                    </div>
                                    <h2 className="py-4 mt-5 leading-6 xl:text-md">
                                        {organization.title}
                                    </h2>
                                </div>
                                <div className="">
                                    <p className="text-sm">
                                        {organization.description}
                                    </p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Organization;
