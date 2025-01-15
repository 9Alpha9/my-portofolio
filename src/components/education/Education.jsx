import React from "react";
import styles from "./styles.module.scss";

function Education() {
    const Education = [
        {
            title: "Universitas Dinamika Stikom Surabaya",
            id: "Undika",
            description:
                "Computer Programming/Programmer, General, Business Management",
            date: "2017 - 2024",
            label: "S1 Information System",
        },
        {
            title: "SMK Antartika 2 Sidoarjo",
            id: "Antrek",
            description: "Computer Systems Networking and Telecommunications",
            date: "2014 - 2017",
            label: "Tehnik Komputer Dan Jaringan",
        },
        {
            title: "SMP Negeri 4 Sidoarjo",
            id: "Smp",
            description: "Junior High School",
            date: "2012 - 2014",
            label: "Junior High School",
        },
    ];
    return (
        <div
            className={`${styles.educationWrapper} border-t border-t-gray-300 pt-6`}
        >
            <div className={`${styles.educationContent}`}>
                <span className={`${styles.educationHeader}`}>Education</span>
                <div
                    className={` ${styles.educationItems} grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3`}
                >
                    {Education.map((education) => (
                        <div
                            key={education.id}
                            className={`${styles.educationMap} relative flex flex-col justify-between p-3 overflow-hidden border rounded-md shadow-md shadow-gray-200 border-slate-300`}
                        >
                            <div className="top-0 ">
                                <div className="flex flex-row gap-6 ">
                                    <span className="block text-sm">
                                        {education.date}
                                    </span>
                                    <span className="block text-sm uppercase">
                                        {education.label}
                                    </span>
                                </div>
                                <h2 className="py-4 mt-5 leading-6 xl:text-md">
                                    {education.title}
                                </h2>
                            </div>
                            <div className="">
                                <p className="text-sm">
                                    {education.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
