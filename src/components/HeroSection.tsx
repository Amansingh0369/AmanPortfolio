import Spline from "@splinetool/react-spline";
import {NeonGradientCard} from "@/components/ui/neon-gradient-card.tsx";
import {BorderBeam} from "@/components/ui/border-beam.tsx";
import StatusToggle from "@/components/StatusToggle.tsx";
import TimeDisplay from "@/components/ui/TimeDisplay.tsx";
import React from "react";
import Particles from "@/components/ui/particles.tsx";

export function HeroSection(){
    return(
        <>
            <div className=" pb-2  h-screen z-100 w-full   ">
                <div className="mx-16 mt-0 p-2  justify-between  flex flex-row items-center  relative">
                    <div className="p-2 w-full">

                        {/*title*/}
                        <div className="uppercase font-mono font-bold text-6xl w-full bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">
                            Aman Singh
                        </div>


                        {/* description*/}
                        <div className="text-4xl  sm:text-2xl font-mono py-4 mt-2 w-full font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                            Build. Dream. Achieve. Evolve.
                        </div>

                        {/* Icon link */}
                        <div className="flex items-center space-x-8 mt-2 py-2">

                            <a
                                href="https://github.com/Amansingh0369"
                                className="text-lg font-medium text-blue-600 hover:underline"
                            >
                                <div className="text-5xl text-gray-500 hover:text-white hover:scale-125 transition duration-300 ">
                                    <ion-icon name="logo-github"></ion-icon>
                                </div>
                            </a>

                            <a
                                href="https://x.com/singh0369aman"
                                className="text-lg font-medium text-blue-600 hover:underline"
                            >
                                <div className="text-5xl text-gray-500 hover:text-blue-600 hover:scale-125 transition duration-300 ">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </div>
                            </a>
                            <a
                                href="mailto:singh0369aman@gmail.com"
                                className="text-lg font-medium text-blue-600 hover:underline"
                            >
                                <div className="text-5xl text-gray-500 hover:text-white hover:scale-125 transition duration-300">
                                    <ion-icon name="mail"></ion-icon>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aman-singh-01663b231/"
                                className="text-lg font-medium text-blue-600 hover:underline"
                            >
                                <div className="text-5xl text-gray-500 hover:text-blue-500 hover:scale-125 transition duration-300">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </div>
                            </a>

                        </div>
                    </div>

                    {/*profile image*/}
                    <div className=" relative rounded-2xl">

                            <div className="relative h-[22rem] w-[38.5rem] select-none z-100">
                                <Spline scene="https://prod.spline.design/VQ0Z7qzgzNw2jQrD/scene.splinecode" />
                                <div
                                    className="absolute bottom-4 right-4 w-36 h-10 flex items-center justify-center bg-black text-white z-10"
                                    style={{ zIndex: 10 }}
                                >
                                    {/*Hello !!*/}
                                </div>
                            </div>

                    </div>
                </div>

                {/*    2nd description*/}
                <div className=" mx-[3.5rem] mt-[6rem] px-2 p-2 flex justify-between ">

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
                    <div className="w-1/2 flex-wrap">
                        <p className="bg-gradient-to-b from-neutral-200 to-neutral-500 font-mono bg-clip-text relative text-transparent px-3 ">
                            I am Aman Kumar Singh, Full Stack Developer based in India. With experience in developing scalable applications since 2023, I focus on using modern technologies like JavaScript, React, Node.js, Express, MongoDB, and PostgreSQL.I'm passionate about creating efficient solutions and contributing to the developer community.
                        </p>
                    </div>

                </div>

            </div>
            <Particles
                className="absolute inset-0 z-100 "
                quantity={300}
                ease={80}
                color={"white"}
                refresh
            />
        </>
    )
}