"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export function WavyBackgroundDemo() {
    return (
        <WavyBackground className="max-w-full mx-auto ">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center  ">
               Projects
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center ">
                "A showcase of innovative projects highlighting my expertise in development and design."
            </p>
        </WavyBackground>
    );
}
