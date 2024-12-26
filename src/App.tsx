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
import Spline from '@splinetool/react-spline';
import {TimelineDemo} from "@/components/ui/TimelineProjectDemo.tsx";
import {WavyBackgroundDemo} from "@/components/ui/WavyBackgroundDemo.tsx";
import VignetteDiv from "@/components/Contact.tsx";
import BoxReveal from "@/components/ui/box-reveal.tsx";
import {HeroSection} from "@/components/HeroSection.tsx";
import Particles from "@/components/ui/particles.tsx";


function App() {
        const time:any = new Date;

  return (
    <>
        <div>
            <Meteors number={3}  />
        </div>
        <div className="bg-black text-black w-full h-fit ">
            {/*<BackgroundCellCore/>*/}x
            <div className="relative z-50 cursor-auto max-w-full  bg-clip-text">
                {/*hero section */}
                <HeroSection/>
                {/*skills*/}
                <div className=" pt-20 relative bg-black  ">
                    <div className="px-8 p-2  items-center flex flex-col justify-center ">
                        <div className="text-5xl  items-center text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent  ">
                            {/*skills title*/}
                            <div className="w-full h-full ">
                                <CoverDemo/>
                            </div>
                        </div>
                        <div className="max-w-full flex">

                            <div className=" ">
                                <SkillSection />
                            </div>

                        </div>

                    </div>
                </div>

                {/*project section*/}
                <div className=" text-white bg-black">
                    <div className="w-full h-30">
                        <WavyBackgroundDemo/>
                    </div>
                    <TimelineDemo/>
                </div>


                <div className="bg-white">
                    <VignetteDiv/>
                </div>


            </div>
        </div>
    </>
  )
}

export default App;
