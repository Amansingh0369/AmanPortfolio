import React from 'react';
import {
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiCplusplus,
    SiHtml5,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiMysql,
    SiAmazonec2,
    SiGithub,
    SiPrisma,
    SiShadcnui,
    SiNginx,
    SiVercel,
    SiRender, SiNextdotjs,
} from 'react-icons/si';
import {FaCloud, FaJava} from 'react-icons/fa';
import {IoSettingsOutline} from "react-icons/io5";

const Skills: React.FC = () => {
    return (
        <div className="text-white py-12 w-full flex flex-wrap gap-y-10 justify-center">

            {/* Programming Category */}
            <div>
                {/*<h3 className="text-sm/[1.875rem] uppercase font-mono tracking-4 m-4 text-center bg-black">Programming</h3>*/}
                <div className="flex flex-wrap sm:gap-x-20 gap-y-6 justify-center">
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiJavascript className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">JavaScript</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-800 hover:scale-110 transition-transform duration-300">
                        <SiTypescript className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">TypeScript</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-800 hover:scale-110 transition-transform duration-300">
                        <FaJava className="text-4xl text-neutral-300" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Java</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-800 hover:scale-110 transition-transform duration-300">
                        <SiCplusplus className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">C/C++</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiHtml5 className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">HTML</span>
                    </div>
                </div>
            </div>

            {/* Web Development Category */}
            <div>
                {/*<h3 className="text-sm/[1.875rem] uppercase font-mono tracking-4 m-4 text-center bg-black">Web Development</h3>*/}
                <div className="flex flex-wrap sm:gap-20 gap-y-6 justify-center">
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiNextdotjs className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">NextJS</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiReact className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">ReactJS</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiNodedotjs className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiExpress className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Express.js</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <IoSettingsOutline  className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">REST APIs</span>
                    </div>

                </div>
            </div>

            {/* Databases / ORM Category */}
            <div>
                {/*<h3 className="text-sm/[1.875rem] uppercase font-mono tracking-4 m-4 text-center bg-black">Databases - ORM</h3>*/}
                <div className="flex flex-wrap sm:gap-12 gap-y-6 justify-center">
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiTailwindcss className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiMongodb className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">MongoDB</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiPostgresql className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">PostgreSQL</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiPrisma className="text-4xl text-neutral-400"/>
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Prisma ORM</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiMysql className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">MySQL</span>
                    </div>
                </div>
            </div>

            {/* DevOps / Cloud Category */}
            <div>
                {/*<h3 className="text-sm/[1.875rem] uppercase font-mono tracking-4 m-4 text-center bg-black">DevOps - Cloud</h3>*/}
                <div className="flex flex-wrap sm:gap-x-24   gap-y-6 justify-center">
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiAmazonec2 className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">AWS EC2</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <FaCloud className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"> AWS S3</span>
                    </div>
                    <div className="flex items-center z-10 space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110  transition-transform duration-300">
                        <img
                            src="/assets/CloudFront.svg"
                            className="grayscale w-10 h-10 rounded-full"
                            alt="cloudfront logo"
                        />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">CloudFront</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiNginx className="text-4xl text-neutral-400"/>
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Nginx</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiDocker className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Docker</span>
                    </div>
                </div>
            </div>

            {/* Version Control Category */}
            <div>
                {/*<h3 className="text-sm/[1.875rem] uppercase font-mono tracking-4 m-4 text-center bg-black">Version Control</h3>*/}
                <div className="flex flex-wrap sm:gap-20 gap-y-6 justify-center">
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiVercel className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Vercel</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiRender className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Render</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiGit className="text-4xl text-neutral-400" />
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Git</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        <SiShadcnui className="text-4xl text-neutral-400"/>
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">ShadCN</span>
                    </div>
                    {/*<div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">*/}
                    {/*    <SiGithub className="text-4xl text-neutral-400" />*/}
                    {/*    <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">GitHub</span>*/}
                    {/*</div>*/}
                    <div className="flex items-center space-x-2 px-4 py-4 rounded-lg hover:bg-neutral-900 hover:scale-110 transition-transform duration-300">
                        {/*<FaPlus className="text-4xl text-neutral-400" />*/}
                        <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">& More</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;