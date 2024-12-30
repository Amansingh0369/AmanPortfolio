"use client";
import { WavyBackground } from "../ui/wavy-background";

export function WavyBackgroundDemo() {
    return (
        <WavyBackground className="max-w-full mx-auto ">
            <p className="text-5xl  md:text-4xl lg:text-7xl font-bold inter-var text-center relative bg-gradient-to-t from-neutral-400 via-neutral-100 to-neutral-100 bg-clip-text text-transparent">
                Projects
            </p>


            <div className="text-base md:text-xl mt-8 text-center text-white font-normal inter-var bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">
                "A showcase of innovative projects highlighting my expertise in development and design."
            </div>
        </WavyBackground>
    );
}