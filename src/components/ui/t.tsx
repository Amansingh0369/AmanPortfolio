"use client";
import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import {InteractiveHoverButtonDemo} from "@/components/ui/InteractiveHoverButtonDemo.tsx";

interface TimelineEntry {
    title: string;
    link: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full relative  dark:bg-neutral-950 font-sans md:px-10"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-20 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex top-1 items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300  p-2 dark:border-neutral-800" />
                            </div>

                            <div className="flex flex-col ">
                                <h3
                                    className="hidden md:block text-xl tracking-wide md:pl-20 md:text-4xl font-bold text-neutral-200 dark:text-neutral-500"
                                    style={{ wordSpacing: "2.6em" }}
                                >
                                    {item.title}
                                </h3>

                                <div className=" mt-10  flex flex-row">
                                    <div className="border-t border-blue-500-500 m h-1 w-10 mt-5 ml-8.5 p-1 ">

                                    </div>
                                    <div
                                        className="md:pl-0 flex flex-row"
                                        onClick={() => {
                                            window.location.href = item.link; // Dynamically use item.link
                                        }}
                                    >
                                        <InteractiveHoverButtonDemo />
                                    </div>


                                </div>
                            </div>

                        </div>

                        <div className="relative pl-10 pr-2 md:pl-4 max-w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}{""}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};


import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ShineBorder from "@/components/ui/shine-border.tsx";

export function TimelineDemo() {
    const data = [
        {
            title: "Transaction App",
            link: "https://transaction-app.amansingh0369.me",
            content: (
                <div>
                    <p className="text-neutral-400 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                        <ul className="space-y-4">
                            <li>A secure and dynamic financial transaction platform demonstrating my expertise in JavaScript, React.js, Node.js, Express.js, MongoDB, and JWT authentication.</li>
                            <li>Highlights my ability to create responsive designs, implement authentication systems, and deploy full-stack applications on platforms like Vercel and Render.</li>
                        </ul>
                    </p>
                    <div className="grid grid-cols-2 gap-4 ">
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/TApp.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/TApp-main.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/TApp-login.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover h-18 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/Tapp-send.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                    </div>
                </div>
            ),
        },

        {
            title: "NOTE~iT "+"App",
            link: "https://note-app.amansingh0369.me",
            content: (
                <div>
                    <p className="text-neutral-400 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                        <ul className="space-y-4">
                            <li>A full-stack note-taking solution showcasing my proficiency in CRUD operations, JWT authentication, and frontend/backend integration using React.js, Node.js, MongoDB, and Express.js.</li>
                            <li>Focuses on personalized user experiences through features like dark/light mode toggles and mobile-friendly designs.</li>
                        </ul>
                    </p>
                    <div className="grid grid-cols-2 gap-4 ">
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/NApp.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/NoteApp-main-page.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/Napp-mainpage-dark.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/Napp-login.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Course Selling App",
            link: "https://github.com/Amansingh0369/courseSellingApp",
            content: (
                <div>
                    <p className="text-neutral-400 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                        <ul className="space-y-4">
                            <li>A learning platform featuring user and admin dashboards that leverages my knowledge in React.js, Node.js, Express.js, MongoDB, and user authentication systems.
                            </li>
                            <li>Emphasizes my backend management skills and ability to implement role-based authorization for secure app functionality.</li>
                        </ul>
                    </p>
                    <div className="grid grid-cols-2 gap-4 ">
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/TApp.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/TApp-main.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/TApp-login.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                        <div>
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="src/assets/images/Tapp-send.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-fill h-20 md:h-44 lg:h-60 w-full transform transition-transform duration-300 "
                                />
                            </ShineBorder>
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}