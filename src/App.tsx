import './App.css'
import './index.css';
import Meteors from "@/components/ui/meteors.tsx";
import {CoverDemo} from "@/components/ui/CoverDemo.tsx";
import SkillSection from "@/components/Skills.tsx";
import {TimelineDemo} from "@/components/ui/TimelineProjectDemo.tsx";
import {WavyBackgroundDemo} from "@/components/ui/WavyBackgroundDemo.tsx";
import {HeroSection} from "@/components/HeroSection.tsx";
import {FloatingNavDemo} from "@/components/ui/FloatingNavDemo.tsx";
import Footer from "@/components/Footer.tsx";
import {useEffect} from "react";
import MouseCircle from "@/components/MouseCircle.tsx";
import { Analytics } from "@vercel/analytics/react"

function App() {
    useEffect(() => {
        console.log("Hello there! ( ͡° ͜ʖ ͡°)")
        console.log("I see you are looking around for something. Code is not open-sourced yet, but you can always reach out to me at singh0369aman@gmail.com");
    }, []);

    return (
        <>
            <div className="bg-black h-full w-full select-none">
                <Meteors number={3} />
                <MouseCircle />
                <Analytics/>
            </div>
            <div className="bg-black text-black w-full h-fit">
                {/* <BackgroundCellCore /> */}
                x
                <div className="relative z-50 cursor-auto max-w-full bg-clip-text">
                    {/* Hero Section */}
                    <HeroSection />
                    {/* Skills */}
                    <div id="skills" className="pt-20 relative bg-black select-none">
                        <div className="px-8 p-2 items-center flex flex-col justify-center">
                            <div className="text-5xl items-center text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">
                                {/* Skills Title */}
                                <div className="w-full h-full">
                                    <CoverDemo />
                                </div>
                            </div>
                            <div className="relative max-w-full flex sm:mt-16 mt-4 z-100">
                                <div className="">
                                    <SkillSection />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Section */}
                    <div id="projects" className="text-white bg-black select-none">
                        <div className="w-full h-30">
                            <WavyBackgroundDemo />
                        </div>
                        <TimelineDemo />
                    </div>

                    <div className="bg-black select-none">
                        <Footer />
                    </div>

                    <FloatingNavDemo />
                </div>
            </div>
        </>
    );
}

export default App;
