import { Timeline } from "@/components/ui/timeline";
import ShineBorder from "@/components/ui/shine-border.tsx";

export function TimelineDemo() {
    const data = [
        {
            title: "Transaction App",
            link: "https://transaction-app.amansingh0369.me",
            gitHubLink:"https://github.com/Amansingh0369/Transaction-App-Frontend.git",
            content: (
                <div>
                    <p className="text-neutral-400 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                        <ul className="space-y-4">
                            <li>
                                A secure and dynamic financial transaction platform demonstrating my
                                expertise in JavaScript, React.js, Node.js, Express.js, MongoDB,
                                and JWT authentication.
                            </li>
                            <li>
                                Highlights my ability to create responsive designs, implement
                                authentication systems, and deploy full-stack applications on
                                platforms like Vercel and Render.
                            </li>
                        </ul>
                    </p>
                    <div className="flex flex-row md:grid grid-row-1 md:grid-cols-2 sm:gap-6 gap-10 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory">
                        <div className="flex-shrink-1 snap-center  sm:w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/TApp.png"
                                    alt="Transaction App Overview"
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
                                />
                            </ShineBorder>
                        </div>
                        <div className="flex-shrink-0 snap-center w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/Tapp-main.png"
                                    alt="Transaction App Main"
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
                                />
                            </ShineBorder>
                        </div>
                        <div className="flex-shrink-0 snap-center w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/TApp-login.png"
                                    alt="Transaction App Login"
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
                                />
                            </ShineBorder>
                        </div>
                        <div className="flex-shrink-0 snap-center w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/Tapp-send.png"
                                    alt="Transaction App Send"
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
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
            gitHubLink:"https://github.com/Amansingh0369/Note-App-Frontend.git",
            content: (
                <div>
                    <p className="text-neutral-400 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                        <ul className="space-y-4">
                            <li>A full-stack note-taking solution showcasing my proficiency in CRUD operations, JWT authentication, and frontend/backend integration using React.js, Node.js, MongoDB, and Express.js.</li>
                            <li>Focuses on personalized user experiences through features like dark/light mode toggles and mobile-friendly designs.</li>
                        </ul>
                    </p>
                    <div className="flex flex-row md:grid grid-row-1 md:grid-cols-2 sm:gap-6 gap-10 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory">
                        <div className="flex-shrink-1 snap-center  sm:w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/NApp.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
                                />
                            </ShineBorder>
                        </div>
                        <div className="flex-shrink-1 snap-center  sm:w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/NoteApp-main-page.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
                                />
                            </ShineBorder>
                        </div>
                        <div className="flex-shrink-1 snap-center  sm:w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/Napp-mainpage-dark.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
                                />
                            </ShineBorder>
                        </div>
                        <div className="flex-shrink-1 snap-center  sm:w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/Napp-login.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
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
            gitHubLink:"https://github.com/Amansingh0369/courseSellingApp.git",
            content: (
                <div>
                    <p className="text-neutral-400 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                        <ul className="space-y-4">
                            <li>A learning platform featuring user and admin dashboards that leverages my knowledge in React.js, Node.js, Express.js, MongoDB, and user authentication systems.
                            </li>
                            <li>Emphasizes my backend management skills and ability to implement role-based authorization for secure app functionality.</li>
                        </ul>
                    </p>
                    <div className="flex flex-row md:grid grid-row-1 md:grid-cols-2 sm:gap-6 gap-10 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory">
                        <div className="flex-shrink-1 snap-center  sm:w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/courseUser.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
                                />
                            </ShineBorder>
                        </div>
                        <div className="flex-shrink-1 snap-center  sm:w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/CourseUsermain.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
                                />
                            </ShineBorder>
                        </div>
                        <div className="flex-shrink-1 snap-center  sm:w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/courseAdmin.png"
                                    alt="startup template"
                                    width={500}
                                    height={100}
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
                                />
                            </ShineBorder>
                        </div>
                        <div className="flex-shrink-1 snap-center  sm:w-full h-44 md:h-auto">
                            <ShineBorder
                                className="relative p-1 flex rounded-xl h-full w-full flex-col items-center justify-center bg-black md:shadow-xl hover:scale-[1.1] hover:z-40 transform transition-transform duration-300"
                                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            >
                                <img
                                    src="/assets/courseadminmain.png"
                                    alt="startup template"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover w-full h-full md:h-44 lg:h-60 transform transition-transform duration-300"
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