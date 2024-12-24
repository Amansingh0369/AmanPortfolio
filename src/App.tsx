import './App.css'
import './index.css';
import {HyperText} from "@/components/ui/HyperText.tsx";
import {Profileimage} from "@/components/ui/ProfileImage.tsx";
import {BackgroundCellCore} from "@/components/ui/BackgroundRippleEffect.tsx";
import React, {useEffect} from "react";
import TimeDisplay from "@/components/ui/TimeDisplay.tsx";
import StatusToggle from "@/components/StatusToggle.tsx";
import {BorderBeam} from "@/components/ui/border-beam.tsx";
import Meteors from "@/components/ui/meteors.tsx";
import {NeonGradientCard} from "@/components/ui/neon-gradient-card.tsx";
import {CoverDemo} from "@/components/ui/CoverDemo.tsx";
import SkillSection from "@/components/Skills.tsx";
import {AnimatedBeamMultipleOutputDemo} from "@/components/ui/AnimatedBeamDemo.tsx";
import {HeroScrollDemo} from "@/components/ui/HeroScrollDemo.tsx";
import Spline from '@splinetool/react-spline';
import {TracingBeamDemo} from "@/components/ui/TracingBeamDemo.tsx";
import {TimelineDemo} from "@/components/ui/TimelineProjectDemo.tsx";
import {WavyBackgroundDemo} from "@/components/ui/WavyBackgroundDemo.tsx";


function App() {
        const time:any = new Date;

  return (
    <>
        <Meteors number={3}  />
        <div className="bg-black text-black w-full h-fit  ">
            <BackgroundCellCore/>
            <div className="relative  z-50 cursor-auto min-w-full  bg-clip-text">
                {/*hero section */}
                <div className=" m-1 p-1 h-screen">
                    <div className="mx-20 mt-16 p-2  justify-between  flex flex-row items-center z-50 relative">
                        <div className="p-2">

                            {/*title*/}
                            <div className="">
                                <HyperText text={"Aman singh"} animateOnLoad={true} className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"/>
                            </div>

                            {/* description*/}
                            <div className=" ">
                                <HyperText text={"Build. Dream. Achieve. Evolve."} animateOnLoad={true} className="text-4xl sm:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"/>
                            </div>

                            {/* Icon link */}
                            <div className="flex items-center space-x-8 mt-2 py-2">

                                <a
                                    href="https://github.com/Amansingh0369"
                                    className="text-lg font-medium text-blue-600 hover:underline"
                                >
                                    <div className="text-5xl text-gray-700 ">
                                        <ion-icon name="logo-github"></ion-icon>
                                    </div>
                                </a>

                                <a
                                    href="https://x.com/singh0369aman"
                                    className="text-lg font-medium text-blue-600 hover:underline"
                                >
                                    <div className="text-5xl text-gray-700 ">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </div>
                                </a>
                                <a
                                    href="mailto:singh0369aman@gmail.com"
                                    className="text-lg font-medium text-blue-600 hover:underline"
                                >
                                    <div className="text-5xl text-gray-700">
                                        <ion-icon name="mail"></ion-icon>
                                    </div>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/aman-singh-01663b231/"
                                    className="text-lg font-medium text-blue-600 hover:underline"
                                >
                                    <div className="text-5xl text-gray-700">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </div>
                                </a>

                            </div>
                        </div>

                        {/*profile image*/}
                        <div className=" relative rounded-2xl">
                            <div className="relative h-[22rem] w-[43.5rem] select-none">
                                <Spline scene="https://prod.spline.design/VQ0Z7qzgzNw2jQrD/scene.splinecode" />
                                <div
                                    className="absolute bottom-4 right-4 w-36 h-10 flex items-center justify-center bg-black text-white z-10"
                                    style={{ zIndex: 10 }}
                                >
                                    Hello !!
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*    2nd description*/}
                    <div className=" mx-20 mt-28 px-3 p-2 flex justify-between    ">

                        <div className="w-1/2 h-40 flex ">
                            <div className="w-40 relative rounded-2xl  " >
                                <NeonGradientCard className="max-w-sm items-center justify-center text-center x-100 rounded-2xl relative">
                                    <img src="src/assets/images/despic.jpeg" className="rounded-2xl  pointer-events-none z-10 w-full max-h-full"/>
                                    <BorderBeam anchor={50} size={70} duration={6} delay={9} colorFrom={"white"} colorTo={"#3498db"} className="rounded-xl" />
                                </NeonGradientCard>
                            </div>
                            <div className="w-60  mx-10 p-2 space-y-2 flex">
                                <div className="space-y-6 text-2xl">
                                    <div className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">
                                        Aman Here
                                    </div>
                                    <div className="relative z-100">
                                        <StatusToggle/>
                                    </div>
                                    <div>
                                        <TimeDisplay/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Description*/}
                        <div className="w-1/2 ">
                            <p className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent px-3">
                                I am Aman Kumar Singh, Full Stack Developer based in India. With experience in developing scalable applications since 2021, I focus on using modern technologies like JavaScript, React, Node.js, Express, MongoDB, and PostgreSQL. My portfolio showcases my work, including open-source contributions and projects like note-taking and transaction apps. I'm passionate about creating efficient solutions and contributing to the developer community.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="w-full h-30">
                    <WavyBackgroundDemo/>
                </div>

                {/*project section*/}
                <div className=" text-white bg-black">
                    <TimelineDemo/>
                </div>

                {/*skills*/}
                <div className=" m-1   p-1 relative ">
                    <div className="mx-20 p-2  mt-28 items-center flex flex-col justify-center">
                        <div className="text-5xl items-center text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent  ">
                            {/*skills title*/}
                            <div className="w-full h-full ">
                                <CoverDemo/>
                            </div>
                        </div>
                        <div className=" w-full flex">

                            <div className=" w-1/2">
                                <SkillSection />
                            </div>
                            <div className=" w-1/2">
                                <AnimatedBeamMultipleOutputDemo/>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    </>
  )
}

export default App;
