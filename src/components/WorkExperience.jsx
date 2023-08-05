import React from "react";

const experience = [
    {
        title: "Kinaya Interior Design",
        number: "01",
        id: "kinaya-interior",
        description:
            "Create a new design and Wireframe, Create responsive web, Slicing UI into code and interaction with backend to create a dummy data.",
        date: "Mar, 2022",
    },
    {
        title: "Lentera Fajar Indonesia",
        number: "02",
        id: "lentera-fajar",
        description:
            "Create a web design, Hold discussions with representatives from Lentera Fajar Indonesia, Create wireframe UI like a landing page, about, article, school activity, and gallery.",
        date: "Jul, 2022",
    },
    {
        title: "PT. Anugrah Putra Kharisma",
        number: "03",
        id: "anugrah-putra",
        description:
            "Internship and creating Dashboard component can help employee for find data realtime and interaction with Backend developer.",
        date: "Oct, 2020",
        label: "Internship",
    },
    {
        title: "Air Quality Control",
        number: "04",
        id: "anugrah-putra",
        description:
            "Creating Dashboard UI and slicing UI into code for showing condition air quality realtime and interaction with Backend developer.",
        date: "Dec, 2022",
        label: "Internship",
    },
];

function WorkExperience() {
    return (
        <>
            <div className="relative work__container">
                <span className="block font-medium uppercase worksHeading whitespace-nowrap">
                    Works Of Experience
                </span>
                <div className="col-span-1 work__container">
                    <section className="relative grid grid-cols-1 gap-3 my-5 xl:grid-cols-3 md:grid-cols-3 work__ExperienceList">
                        {experience.map((experience) => (
                            <>
                                <div className="relative flex flex-col justify-between p-3 overflow-hidden transition-all duration-200 border rounded-md shadow-md shadow-gray-200 work__ExperiencsItems border-slate-300 h-80">
                                    <span className="absolute top-0 right-0 block p-2 text-white bg-gray-700 mask workNumb__">
                                        {experience.number}
                                    </span>
                                    <div
                                        className="top-0 work__ExperienceHeading"
                                        key={experience.id}
                                    >
                                        <span className="block text-sm">
                                            {experience.date}
                                        </span>
                                        <h2 className="leading-6 w-[11rem] xl:w-[14rem] md:w-[11rem] xl:text-md py-2">
                                            {experience.title}
                                        </h2>
                                    </div>
                                    <div className="work__ExperiencContent">
                                        <p className="text-sm">
                                            {experience.description}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
}

export default WorkExperience;
