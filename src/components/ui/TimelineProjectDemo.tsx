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