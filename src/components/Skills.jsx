import React from "react";

const skillConnector = [
    {
        title: "Tailwind Css",
        id: "tailwind-css",
        description:
            "Tailwind Css is a powerfull css library for creating a styles component. In Tailwind Css you can customize your own style like color, with, height, responsive style, and more.",
        ability: "Intermediate",
    },
    {
        title: "React JS",
        id: "react-js",
        description:
            "React Js is a library for frontend web, the stage of creating a website using React JS is very good because it can incorporate several other libraries that support it.",
        ability: "Intermediate",
    },
    {
        title: "CSS",
        id: "css",
        description:
            "CSS is one way to organize the layout of the components of a website which makes the appearance of a website more attractive and structured.",
        ability: "Hight Intermediate",
    },
    {
        title: "HTML 5",
        id: "HTML-5",
        description:
            "A programming language used to build a website structure that will be displayed on website pages, usually assisted by other programming languages such as Css and Javascript.",
        ability: "Hight Intermediate",
    },
    {
        title: "Javascript",
        id: "Javascript",
        description:
            "A programming used to create a website will be more interactive, such as the use of animation for certain website pages.",
        ability: "Medium",
    },
    {
        title: "Figma",
        id: "figma",
        description:
            "Figma is a tools for creating UI like wireframe, icons, whiteboard, and you can collaborate with team for creating UI.",
        ability: "Hight Intermediate",
    },
    {
        title: "Adobe Photoshop",
        id: "adobe-photoshop",
        description:
            "Adobe Photoshop is a tools for editing photo, creat a poster, create 3D, create a photo manipulation.",
        ability: "Hight Intermediate",
    },
    {
        title: "Adobe Illustrator",
        id: "adobe-illustrator",
        description:
            "Adobe Illustrator is a tools for creating vector like logo, poster design, and illustator.",
        ability: "Hight Intermediate",
    },
];

export default function Skills() {
    return (
        <>
            <div className="mt-10 border-t skillContainer__wrap border-t-gray-300">
                <span className="block mt-6 font-medium uppercase worksHeading whitespace-nowrap">
                    Skills
                </span>
                <section className="my-5 skillWrapper__inner">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-2">
                        {skillConnector.map((skillConnector) => (
                            <>
                                <div className="grid justify-between grid-cols-1 gap-3 p-4 border rounded-md skillItems border-slate-300">
                                    <span className="block text-xl">
                                        <h2>{skillConnector.title}</h2>
                                        <p className="w-full py-2 text-sm">
                                            {skillConnector.description}
                                        </p>
                                    </span>
                                    <div className="flex flex-col w-full align-middle skillItems__dot">
                                        <div className="relative flex flex-row gap-3 py-3 indicators">
                                            <span className="block p-1.5 px-4 text-sm font-thin text-white uppercase bg-gray-700 rounded-sm">
                                                {skillConnector.ability}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
