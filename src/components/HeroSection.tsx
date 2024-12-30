// src/components/HeroSection.tsx

// 1. Import Statements
import { NeonGradientCard } from "@/components/ui/neon-gradient-card.tsx";
import { BorderBeam } from "@/components/ui/border-beam.tsx";
import StatusToggle from "@/components/StatusToggle.tsx";
import TimeDisplay from "@/components/ui/TimeDisplay.tsx";
import Particles from "@/components/ui/particles.tsx";
import { LinkPreview } from "@/components/ui/link-preview.tsx";
import SplineWithLoading from "@/components/SplineWithLoading.tsx";
import { IoLogoGithub, IoLogoTwitter, IoMail, IoLogoLinkedin, IoDocument } from 'react-icons/io5';


// 3. HeroSection Component
export function HeroSection() {
    return (
        <>
            <div id="home" className="pb-2 h-fit sm:h-screen z-100  w-full select-none">
                <div className="sm:mx-16 mt-0 p-2  justify-between flex flex-row relative">
                    <div className="p-2 w-full sm:pt-20  select-none">

                        {/* Title */}
                        <div className="uppercase  font-mono sm:flex-row  flex sm:tracking-wider tracking-normal font-bold text-6xl w-full bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">
                            <div className="sm:text-6xl w-fit text-6xl  bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent ">
                                Aman
                            </div>
                            <div className="sm:pl-5 w-fit  left-4   sm:left-0 relative text-6xl flex-wrap flex sm:text-6xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                                Singh
                            </div>
                        </div>

                        {/* Description */}
                        <div className="text-lg sm:text-2xl font-mono sm:py-4 py-1 mt-6 sm:mt-2  sm:w-full font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                            Full Stack Wizard
                        </div>
                        <div className="text-lg sm:text-2xl font-mono py-4 mt-2  sm:w-full font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                            Build. Dream.  Achieve. Evolve.
                        </div>

                        {/* Icon Links */}
                        <div className="flex items-center space-x-6  sm:m-0 mx-4 right-8 mt-2 py-2 relative">
                            <LinkPreview url={"https://github.com/Amansingh0369"} className="z-100 relative">
                                <a
                                    href="https://github.com/Amansingh0369"
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-lg font-medium text-blue-600 hover:underline"
                                >
                                    <div className="text-4xl sm:text-5xl  text-gray-500 hover:text-white hover:scale-125 transition duration-300 ">
                                        <IoLogoGithub name="logo-github"></IoLogoGithub>
                                    </div>
                                </a>
                            </LinkPreview>
                            <LinkPreview url={"https://x.com/singh0369aman/"} className="z-100 relative">
                                <a
                                    href="https://x.com/singh0369aman"
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-lg font-medium text-blue-600 hover:underline"
                                >
                                    <div className="text-4xl sm:text-5xl text-gray-500 hover:text-blue-600 hover:scale-125 transition duration-300 ">
                                        <IoLogoTwitter name="logo-twitter"></IoLogoTwitter>
                                    </div>
                                </a>
                            </LinkPreview>
                            <LinkPreview url={"https://gmail.com"} className="z-100 relative">
                                <a
                                    href="mailto:singh0369aman@gmail.com"
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-lg font-medium text-blue-600 hover:underline"
                                >
                                    <div className="text-4xl sm:text-5xl text-gray-500 hover:text-white hover:scale-125 transition duration-300">
                                        <IoMail name="mail"></IoMail>
                                    </div>
                                </a>
                            </LinkPreview>
                            <LinkPreview url={"https://www.linkedin.com/in/aman-singh-01663b231/"} className="z-100 relative">
                                <a
                                    href="https://www.linkedin.com/in/aman-singh-01663b231/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-4xl sm:text-5xl font-medium text-blue-600 hover:underline"
                                >
                                    <div className="text-5xl text-gray-500 hover:text-blue-500 hover:scale-125 transition duration-300">
                                        <IoLogoLinkedin name="logo-linkedin"></IoLogoLinkedin>
                                    </div>
                                </a>
                            </LinkPreview>
                            <LinkPreview url={"https://drive.google.com/file/d/1D26WgGSi3xGFPN0qmXqUZkbjSdd2vow6/view"} className="z-100 relative">
                                <a
                                    href="https://drive.google.com/file/d/1D26WgGSi3xGFPN0qmXqUZkbjSdd2vow6/view"
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-lg font-medium text-blue-600 hover:underline"
                                >
                                    <div className="text-4xl sm:text-5xl text-gray-500 hover:text-white hover:scale-125 transition duration-300 ">
                                        <IoDocument name="document"></IoDocument>
                                    </div>
                                </a>
                            </LinkPreview>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 hidden sm:block">
                        <SplineWithLoading />
                    </div>
                </div>

                {/* 2nd Description */}
                <div className="sm:mx-[3.5rem] sm:mt-[6rem] mt-[3rem]   px-2 flex  flex-col sm:flex-row justify-between ">
                    <div className="w-full sm:w-1/2 h-40 flex ">
                        <div className="sm:w-40 w-64 relative h-40 ml-4 flex flex-wrap rounded-2xl">
                            <NeonGradientCard className="w-full items-center justify-center text-center rounded-2xl relative">
                                <img src="public/assets/despic.jpeg" className="rounded-2xl pointer-events-none w-full h-40 "  alt={"img"}/>
                                <BorderBeam anchor={60} size={70} duration={6} delay={9} colorFrom={"white"} colorTo={"#3498db"} className="rounded-2xl hidden sm:block" />
                            </NeonGradientCard>
                        </div>
                        <div className="w-1/2 sm:mx-10 mx-8   sm:block  p-2 space-y-2 flex overflow-hidden ">
                            <div className="space-y-6 text-2xl">
                                <div className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">
                                    AmanHere
                                </div>
                                <div className="relative z-100">
                                    <StatusToggle />
                                </div>
                                <div>
                                    <TimeDisplay />
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Description */}
                    <div className="w-full sm:w-1/2 sm:mt-0 mt-20 flex-wrap ">
                        <p className="sm:hidden block text-4xl bg-gradient-to-b from-neutral-200 to-neutral-500 font-mono bg-clip-text relative text-transparent px-3 ">
                            Bio
                        </p>
                        <p className="bg-gradient-to-b mt-8 sm:mt-0 from-neutral-200 to-neutral-500 font-mono bg-clip-text relative text-transparent px-3 ">
                            I am Aman Kumar Singh, Full Stack Developer based in India. With experience in developing scalable applications since 2023, I focus on using modern technologies like JavaScript, React, Node.js, Express, MongoDB, and PostgreSQL. I'm passionate about creating efficient solutions and contributing to the developer community.
                        </p>
                    </div>
                </div>
            </div>

            <Particles
                className="absolute inset-0 z-100 "
                quantity={400}
                ease={80}
                color={"white"}
                refresh
            />
        </>
    );
}
