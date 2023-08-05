import React from "react";

const skill = [
    {
        title: "Tailwind Css",
        id: "tailwind-css",
        ability: "Medium",
    },
    {
        title: "Adobe Illustrator",
        id: "adobe-illustrator",
        ability: "Intermediet",
    },
];

export default function Skills() {
    return (
        <>
            <div className="my-5 skillContainer__wrap">
                <span className="block font-medium uppercase worksHeading whitespace-nowrap">
                    Skills
                </span>
                <section className="my-5 skillWrapper__inner">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-2">
                        <div className="grid justify-between grid-cols-1 gap-3 p-4 border rounded-md skillItems border-slate-300">
                            <span className="block text-xl">
                                <h2>Tailwind Css</h2>
                                <p className="w-full py-2 text-sm">
                                    Tailwind Css is a powerfull css library for
                                    creating a styles component. In Tailwind Css
                                    you can customize your own style like color,
                                    with, height, responsive style, and more.
                                </p>
                            </span>
                            <div className="flex flex-col w-full align-middle skillItems__dot">
                                <h2>Inidicators Skills</h2>
                                <div className="flex flex-row gap-3 py-3 indicators">
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>

                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                </div>
                            </div>
                        </div>
                        <div className="grid justify-between grid-cols-1 gap-3 p-4 border rounded-md skillItems border-slate-300">
                            <span className="block text-xl">
                                <h2>React Js</h2>
                                <p className="w-full py-2 text-sm">
                                    React Js is a library for frontend web, the
                                    stage of creating a website using React JS
                                    is very good because it can incorporate
                                    several other libraries that support it.
                                </p>
                            </span>
                            <div className="flex flex-col w-full align-middle skillItems__dot">
                                <h2>Inidicators Skills</h2>
                                <div className="flex flex-row gap-3 py-3 indicators">
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>

                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                </div>
                            </div>
                        </div>
                        <div className="grid justify-between grid-cols-1 gap-3 p-4 border rounded-md skillItems border-slate-300">
                            <span className="block text-xl">
                                <h2>Figma</h2>
                                <p className="w-full py-2 text-sm">
                                    Figma is a tools for creating UI like
                                    wireframe, icons, whiteboard, and you can
                                    collaborate with team for creating UI.
                                </p>
                            </span>
                            <div className="flex flex-col w-full align-middle skillItems__dot">
                                <h2>Inidicators Skills</h2>
                                <div className="flex flex-row gap-3 py-3 indicators">
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                </div>
                            </div>
                        </div>
                        <div className="grid justify-between grid-cols-1 gap-3 p-4 border rounded-md skillItems border-slate-300">
                            <span className="block text-xl">
                                <h2>Adobe Photoshop</h2>
                                <p className="w-full py-2 text-sm">
                                    Adobe Photoshop is a tools for editing
                                    photo, creat a poster, create 3D, create a
                                    photo manipulation.
                                </p>
                            </span>
                            <div className="flex flex-col w-full align-middle skillItems__dot">
                                <h2>Inidicators Skills</h2>
                                <div className="flex flex-row gap-3 py-3 indicators">
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                </div>
                            </div>
                        </div>
                        <div className="grid justify-between grid-cols-1 gap-3 p-4 border rounded-md skillItems border-slate-300">
                            <span className="block text-xl">
                                <h2>Adobe Illustrator</h2>
                                <p className="w-full py-2 text-sm">
                                    Adobe Illustrator is a tools for creating
                                    vector like logo, poster design, and
                                    illustator.
                                </p>
                            </span>
                            <div className="flex flex-col w-full align-middle skillItems__dot">
                                <h2>Inidicators Skills</h2>
                                <div className="flex flex-row gap-3 py-3 indicators">
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 bg-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                    <span className="block w-6 h-6 border-2 border-black rounded-full"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
